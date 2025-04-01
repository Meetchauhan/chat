import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update the service worker
      manifest: {
        name: "Chat App",
        short_name: "Chat",
        description: "A messaging app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/fav.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/fav.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
