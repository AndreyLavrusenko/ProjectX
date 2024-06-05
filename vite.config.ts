import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: process.env.NODE_ENV === "development" ? "/" : "/",
    resolve: {
        alias: {
            "@": "/src",
        },
        preserveSymlinks: true, 
    },
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico"],
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
            },
            manifest: {
                name: "Celestial",
                short_name: "Celestial",
                description: "Приложение для Full Body тренировок",
                theme_color: "#F8F8F8",
                icons: [
                    {
                        src: "pwa-64x64.png",
                        sizes: "64x64",
                        type: "image/png"
                    },
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "maskable-icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
            }
        })
    ],
})
