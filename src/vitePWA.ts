import { VitePWAOptions } from 'vite-plugin-pwa';

const PWAOptions: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    workbox: {
        clientsClaim: true,
        skipWaiting: true
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
    manifest: {
        icons: [
            {
                src: "/cover.png",
                sizes: "1366 x 615",
                type: "image/png",
                density: "0.75"
            },
            {
                src: "/android-icon-36x36.png",
                sizes: "36x36",
                type: "image/png",
                density: "0.75"
            },
            {
                src: "/android-icon-48x48.png",
                sizes: "48x48",
                type: "image/png",
                density: "1.0"
            },
            {
                src: "/android-icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
                density: "1.5"
            },
            {
                src: "/android-icon-96x96.png",
                sizes: "96x96",
                type: "image/png",
                density: "2.0"
            },
            {
                src: "/android-icon-144x144.png",
                sizes: "144x144",
                type: "image/png",
                density: "3.0"
            },
            {
                src: "/android-icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                density: "4.0"
            },
            {
                src: "favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon"
            },
            {
                src: "logo192.png",
                type: "image/png",
                sizes: "192x192"
            },
            {
                src: "maskable_icon_x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            }
        ],
    }
};

export default PWAOptions;