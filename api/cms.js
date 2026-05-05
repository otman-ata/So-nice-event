import fs from 'node:fs/promises';
import path from 'node:path';
import { list, put } from '@vercel/blob';

const CMS_SITE_PATH = 'cms/site-images.json';
const CMS_GALLERY_PATH = 'cms/gallery.json';
const blobToken = () => process.env.BLOB1_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN;

async function readFallbackJson(relativePath, fallbackValue) {
  try {
    const file = path.join(process.cwd(), 'so-nice-event', 'public', 'assets', relativePath);
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return fallbackValue;
  }
}

function normalizeGallery(gallery = []) {
  if (!Array.isArray(gallery)) return [];
  return gallery.filter((item) => item && item.category !== 'About Us');
}

function mergeSiteImages(fallbackSiteImages = {}, storedSiteImages = {}) {
  const merged = { ...fallbackSiteImages };
  for (const [key, value] of Object.entries(storedSiteImages || {})) {
    if (Array.isArray(value)) {
      if (value.length) merged[key] = value;
    } else if (value) {
      merged[key] = value;
    }
  }
  return merged;
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
    const fallbackSiteImages = await readFallbackJson('site-images.json', {});
    const fallbackGallery = await readFallbackJson('gallery.json', []);
    const storedSiteImages = await readBlobJson(CMS_SITE_PATH, {});
    const storedGallery = normalizeGallery(await readBlobJson(CMS_GALLERY_PATH, []));
    const siteImages = mergeSiteImages(fallbackSiteImages, storedSiteImages);
    const gallery = storedGallery.length ? storedGallery : fallbackGallery;
    return res.status(200).json({ ok: true, hasBlobToken: Boolean(blobToken()), siteImages, gallery });
  }

  if (req.method === 'POST') {
    try {
      const { siteImages, gallery } = req.body || {};
      if (siteImages) await writeBlobJson(CMS_SITE_PATH, siteImages);
      if (gallery) await writeBlobJson(CMS_GALLERY_PATH, normalizeGallery(gallery));
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ ok: false, error: error.message || 'Save failed' });
    }
  }

  return res.status(405).json({ ok: false, error: 'Method not allowed' });
}
