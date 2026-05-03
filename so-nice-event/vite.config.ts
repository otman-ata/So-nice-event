import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Same short URLs as Vercel rewrites — handy for local dev (`npm run dev`). */
function adminShortUrls(): Plugin {
  return {
    name: 'admin-short-urls',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const u = req.url?.split('?')[0] ?? '';
        if (u === '/manage' || u === '/staff' || u === '/admin' || u === '/admin/') {
          res.statusCode = 302;
          res.setHeader('Location', '/admin/gallery-manager.html');
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [adminShortUrls(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
