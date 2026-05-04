import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '12mb',
    },
  },
};

function safeName(name = 'image') {
  return String(name).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'image';
}

function blobToken() {
  return process.env.BLOB1_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = blobToken();
  if (!token) {
    return res.status(500).json({ ok: false, error: 'Missing BLOB1_READ_WRITE_TOKEN' });
  }

  try {
    const { filename, contentType, data } = req.body || {};
    if (!data) return res.status(400).json({ ok: false, error: 'Missing image data' });
    const buffer = Buffer.from(String(data), 'base64');
    const blob = await put(`uploads/${Date.now()}-${safeName(filename)}`, buffer, {
      access: 'public',
      contentType: contentType || 'application/octet-stream',
      token,
    });
    return res.status(200).json({ ok: true, path: blob.url, url: blob.url });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message || 'Upload failed' });
  }
}
