import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	}),
	integrations: [tailwind({ applyBaseStyles: false })],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "pt-br"],
		routing: {
			prefixDefaultLocale: true
		}
	},
});
