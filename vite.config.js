import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import compression from "vite-plugin-compression";
import imageminPlugin from 'vite-plugin-imagemin'; // Import du plugin

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      plugins: [
        compression({
          verbose: true,
          filter: /\.(js|css|json|txt|html|svg)$/,
          deleteOriginFile: false,
          algorithm: 'gzip',
          ext: '.gz'
        }),
        imageminPlugin(), // Ajout du plugin d'optimisation des images
        {
          name: 'alias-assets',
          resolveId(source) {
            if (source === '$lib') {
              return { id: path.resolve('./src/assets') };
            }
            return null;
          },
        },
      ],
    },
  },
  plugins: [svelte()],
});
