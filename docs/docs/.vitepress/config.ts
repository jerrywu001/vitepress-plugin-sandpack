import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import { version } from '../../../package.json';
import { renderSandbox } from '../../../src';
import path from 'path';

export default defineConfig({
  lang: 'en-US',
  title: 'vitepress sandbox',
  description: 'Use sandpack-vue3 as directive in vitepress doc',
  lastUpdated: true,

  head: [
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdn.staticfile.org/highlight.js/11.7.0/styles/atom-one-dark.min.css' },
    ],
  ],

  markdown: {
    config(md) {
      md
        .use(container, 'sandbox', { // the second parameter is html tag name
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'sandbox');
          },
        })
        .use(container, 'my-sandbox', {
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'my-sandbox');
          },
        });
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
        { text: 'Install', link: '/get-started/install' },
      ]
    },
    {
      text: 'Props Introduction',
      collapsible: true,
      items: [
        { text: 'Props', link: '/api-reference/api' },
      ],
    },
    {
      text: 'Basic Usage',
      collapsible: true,
      items: [
      ],
    },
    {
      text: 'Custom Usage',
      collapsible: true,
      items: [
        { text: 'Custom Usage', link: '/custom-usage/custom' },
      ],
    }
  ];
}
