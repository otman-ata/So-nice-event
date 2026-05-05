const TARGET_LANGUAGES = ['ar', 'en'];

async function translateText(text, target) {
  const value = String(text || '').trim();
  if (!value) return '';

  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', value);
  url.searchParams.set('langpair', `fr|${target}`);

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) return value;
    const data = await response.json();
    return data?.responseData?.translatedText || value;
  } catch {
    return value;
  }
}

async function translatePack(pack) {
  const translations = { ...(pack.translations || {}) };

  for (const lang of TARGET_LANGUAGES) {
    translations[lang] = {
      name: await translateText(pack.name, lang),
      highlight: await translateText(pack.highlight, lang),
      items: await Promise.all((Array.isArray(pack.items) ? pack.items : []).map((item) => translateText(item, lang))),
    };
  }

  translations.fr = {
    name: pack.name || '',
    highlight: pack.highlight || '',
    items: Array.isArray(pack.items) ? pack.items : [],
  };

  return {
    ...pack,
    translations,
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const packs = Array.isArray(req.body?.packs) ? req.body.packs : [];
    const translatedPacks = [];
    for (const pack of packs) {
      translatedPacks.push(await translatePack(pack));
    }
    return res.status(200).json({ ok: true, packs: translatedPacks });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message || 'Translation failed' });
  }
}
