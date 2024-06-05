// Ce fichier Vite config remplace les propriétés du manifeste de l'application Web
// Assurez-vous de définir toutes les configurations nécessaires ici pour l'apparence et le comportement de votre application Web.


import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import compression from "vite-plugin-compression";
import imageminPlugin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa'; // Import du plugin PWA

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
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
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'Parenthese Oceane',
        short_name: 'Oceane',
        "description": "Location de gîtes en Vendée : Découvrez Parenthese Oceane à Saint Vincent sur Jard. Nos gîtes confortables et bien équipés sont parfaits pour des vacances inoubliables en Vendée. Profitez de la tranquillité, du charme et de la beauté naturelle de la région tout en séjournant dans notre complexe idéalement situé. Explorez les plages, les sites historiques et les attractions touristiques de la Vendée depuis nos gîtes.",
        theme_color: '#1e55b3',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
