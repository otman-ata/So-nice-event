import { list, put } from '@vercel/blob';

const CMS_SITE_PATH = 'cms/site-images.json';
const CMS_GALLERY_PATH = 'cms/gallery.json';
const blobToken = () => process.env.BLOB1_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN;

function isStaticContentImage(value) {
  return typeof value === 'string' && value.startsWith('/assets/images/');
}

function sanitizeSiteImages(siteImages = {}) {
  const next = { ...siteImages };
  for (const [key, value] of Object.entries(next)) {
    if (Array.isArray(value)) {
      next[key] = value.filter((item) => typeof item === 'string' && item && !isStaticContentImage(item));
    } else if (isStaticContentImage(value)) {
      next[key] = '';
    }
  }
  return next;
}

function sanitizeGallery(gallery = []) {
  if (!Array.isArray(gallery)) return [];
  return gallery.filter((item) => item && typeof item.src === 'string' && item.src && !isStaticContentImage(item.src));
}

async function readBlobJson(pathname, fallbackValue) {
  const token = blobToken();
  if (!token) return fallbackValue;
  try {
    const result = await list({ prefix: pathname, limit: 1, token });
    const blob = result.blobs.find((item) => item.pathname === pathname);
    if (!blob) return fallbackValue;
    const response = await fetch(blob.url, { cache: 'no-store' });
    if (!response.ok) return fallbackValue;
    return response.json();
  } catch {
    return fallbackValue;
  }
}

async function writeBlobJson(pathname, data) {
  const token = blobToken();
  if (!token) throw new Error('Missing BLOB1_READ_WRITE_TOKEN');
  await put(pathname, JSON.stringify(data, null, 2), {
    access: 'public',
    contentType: 'application/json',
    allowOverwrite: true,
    token,
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    const siteImages = sanitizeSiteImages(await readBlobJson(CMS_SITE_PATH, {}));
    const gallery = sanitizeGallery(await readBlobJson(CMS_GALLERY_PATH, []));
    return res.status(200).json({ ok: true, hasBlobToken: Boolean(blobToken()), siteImages, gallery });
  }

  if (req.method === 'POST') {
    try {
      const { siteImages, gallery } = req.body || {};
      if (siteImages) await writeBlobJson(CMS_SITE_PATH, siteImages);
      if (gallery) await writeBlobJson(CMS_GALLERY_PATH, gallery);
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ ok: false, error: error.message || 'Save failed' });
    }
  }

  return res.status(405).json({ ok: false, error: 'Method not allowed' });
}
