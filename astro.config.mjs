import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: 'static',

    adapter: vercel({
        webAnalytics: {
            enabled: true
        }
    }),

    i18n: {
        defaultLocale: "en",
        locales: ["en", "pt-br"]
    },

    vite: {
        plugins: [tailwindcss()],
    },
});
