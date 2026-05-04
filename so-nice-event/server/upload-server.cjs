const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'assets', 'images');

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true }));
// Simple CORS so the admin UI (on Vite dev, port 3001) can call this server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Ensure directories exist
fs.mkdirSync(IMAGES_DIR, { recursive: true });

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, IMAGES_DIR),
  filename: (req, file, cb) => {
    const safe = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, safe);
  }
});
const upload = multer({ storage });

app.post('/upload-image', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ ok: false, error: 'No file' });
  const rel = '/assets/images/' + req.file.filename;
  return res.json({ ok: true, path: rel });
});

// Import an external image URL and save to /public/assets/images
app.post('/import-image', async (req, res) => {
  try {
    const url = (req.body && (req.body.url || req.query.url)) || '';
    if (!url || !/^https?:\/\//i.test(url)) {
      return res.status(400).json({ ok: false, error: 'Invalid URL' });
    }
    const r = await fetch(url);
    if (!r.ok) return res.status(400).json({ ok: false, error: 'Fetch failed' });
    const ct = r.headers.get('content-type') || '';
    const buf = Buffer.from(await r.arrayBuffer());
    const ext = ct.includes('png') ? '.png' : ct.includes('webp') ? '.webp' : '.jpg';
    const name = Date.now() + '-' + Math.random().toString(36).slice(2) + ext;
    const filePath = path.join(IMAGES_DIR, name);
    fs.writeFileSync(filePath, buf);
    return res.json({ ok: true, path: '/assets/images/' + name });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});

app.post('/save-gallery', (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : JSON.parse(JSON.stringify(req.body));
    const file = path.join(PUBLIC_DIR, 'assets', 'gallery.json');
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
    return res.json({ ok: true });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
});

app.post('/save-site', (req, res) => {
  try {
    const data = req.body || {};
    const file = path.join(PUBLIC_DIR, 'assets', 'site-images.json');
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
    return res.json({ ok: true });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
});

app.post('/save-content', (req, res) => {
  try {
    const data = req.body || {};
    const file = path.join(PUBLIC_DIR, 'assets', 'cms-content.json');
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
    return res.json({ ok: true });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Upload server running at http://localhost:${PORT}`));
