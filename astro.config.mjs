// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HapiAI',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{
					label: 'GitHub',
					href: 'https://github.com/hugetiny/hapiai',
					icon: 'github',
				},
			],
			sidebar: [
				{
					label: '开始',
					translations: {
						en: 'Start',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'AI 网站聚合',
					translations: {
						en: 'AI Website Aggregation',
					},
					autogenerate: { directory: 'website-aggregation' },
				},
				{
					label: 'AI API 聚合',
					translations: {
						en: 'AI API Aggregation',
					},
					autogenerate: { directory: 'api-aggregation' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
