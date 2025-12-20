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
			},
			social: {
				github: 'https://github.com/hugetiny/hapiai',
			},
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '项目介绍', link: '/guides/intro/' },
						{ label: '安装指南', link: '/guides/installation/' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
