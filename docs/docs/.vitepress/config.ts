import { defineConfig } from 'vitepress';
import { version } from '../../package.json';
import { useSandBox } from '../../../src/plugin';
import path from 'path';

export default defineConfig({
  lang: 'en-US',
  title: 'vitepress sandbox',
  description: 'use sandpack-vue3 as directive in vitepress doc',
  lastUpdated: true,

  markdown: {
    config(md) {
      useSandBox(md, 'sandbox');
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: sidebarConfig(),

    editLink: {
      pattern: 'https://github.com/jerrywu001/vitepress-plugin-sandpack/edit/main/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jerrywu001/vitepress-plugin-sandpack' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present jerrywu001'
    },
  },

  vite: {
    resolve: {
      alias: {
        'vitepress-plugin-sandpack': `${path.resolve(__dirname, '../../../src')}`,
      },
    },
  },
})

function nav() {
  return [
    { text: 'Get Started', link: '/get-started/introduction', activeMatch: '/get-started/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/jerrywu001/vitepress-plugin-sandpack/releases'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Get Started',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/get-started/introduction' },
      ]
    },
  ];
}
