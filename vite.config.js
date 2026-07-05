import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "url";
import { VitePWA } from "vite-plugin-pwa";

import PWAOptions from './src/vitePWA';

export default defineConfig({
    plugins: [react(), VitePWA(PWAOptions)],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
});