// Ce fichier Vite config remplace les propriétés du manifeste de l'application Web
// Assurez-vous de définir toutes les configurations nécessaires ici pour l'apparence et le comportement de votre application Web.
// Ce fichier Vite config remplace les propriétés du manifeste de l'application Web
// Assurez-vous de définir toutes les configurations nécessaires ici pour l'apparence et le comportement de votre application Web.
import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import imageminPlugin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

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
        imageminPlugin({
          gifsicle: { optimizationLevel: 7 },
          optipng: { optimizationLevel: 7 },
          mozjpeg: { quality: 80 },
          pngquant: { quality: [0.65, 0.8], speed: 4 },
          svgo: {
            plugins: [
              { removeViewBox: false },
              { removeEmptyAttrs: false },
              { removeDimensions: true }
            ]
          }
        })
      ],
    },
  },
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'Gîtes de Charme en Vendée | Parenthèse Océane',
        short_name: 'Oceane',
        description: "Location de gîtes en Vendée : Découvrez Parenthese Oceane à Saint Vincent sur Jard. Nos gîtes confortables et bien équipés sont parfaits pour des vacances inoubliables en Vendée. Profitez de la tranquillité, du charme et de la beauté naturelle de la région tout en séjournant dans notre complexe idéalement situé. Explorez les plages, les sites historiques et les attractions touristiques de la Vendée depuis nos gîtes.",
        theme_color: '#1e55b3',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          }
        ],
        "og:title": "Parenthese Oceane - Gîtes de Charme en Vendée | Vacances à Saint Vincent sur Jard",
        "og:description": "Découvrez notre site de location de gîtes en Vendée pour des vacances inoubliables. Explorez nos hébergements, consultez nos tarifs compétitifs et trouvez toutes les informations légales dont vous avez besoin. Réservez dès maintenant et vivez des moments de détente et de plaisir au cœur de la nature vendéenne.",
        "og:image": "https://www.parentheseoceane.com/favicon.svg",
        "og:url": "https://www.parentheseoceane.com",
        "og:type": "website",
        "twitter:card": "summary_large_image",
        "twitter:title": "Parenthese Oceane - Gîtes de Charme en Vendée | Vacances à Saint Vincent sur Jard",
        "twitter:description": "Découvrez notre site de location de gîtes en Vendée pour des vacances inoubliables. Explorez nos hébergements, consultez nos tarifs compétitifs et trouvez toutes les informations légales dont vous avez besoin. Réservez dès maintenant et vivez des moments de détente et de plaisir au cœur de la nature vendéenne.",
        "twitter:image": "https://www.parentheseoceane.com/favicon.svg"
      }
    }),
    {
      name: 'alias-assets',
      resolveId(source) {
        if (source === '$lib') {
          return { id: path.resolve('./src/assets') };
        }
        return null;
      },
    },
    {
      name: 'preload',
      transformIndexHtml(html) {
        return html.replace(
          '</head>',
          `
          <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap">
          <link rel="preload" as="image"/logo.pn">
          </head>
          `
        );
      }
    }
  ]
});
