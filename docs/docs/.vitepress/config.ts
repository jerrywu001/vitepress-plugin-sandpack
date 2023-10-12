import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import { version } from '../../../package.json';
import renderSandbox from '../../../src/plugin';
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
        })
        .use(container, 'opts-sandbox', {
          render (tokens, idx) {
            return renderSandbox(tokens, idx, 'opts-sandbox');
          },
        });
    },
  },

  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'SKCYNAKILD',
        apiKey: 'fb798fe990d2e20c0c862afd47f919c2',
        indexName: 'vitepress-sandbox',
        insights: true, // Optional, automatically send insights when user interacts with search results
      },
    },

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
      text: 'Basic Usage',
      collapsible: true,
      items: [
        { text: 'Entry File', link: '/basic-usage/entry' },
        { text: 'Default active File', link: '/basic-usage/active' },
        { text: 'Custom File', link: '/basic-usage/custom-file-content' },
        { text: 'Templates', link: '/basic-usage/templates' },
        { text: 'Themes', link: '/basic-usage/themes' },
        { text: 'Hidden some file', link: '/basic-usage/hidden' },
        { text: 'RTL Layout', link: '/basic-usage/rtl' },
        { text: 'Use snippets', link: '/basic-usage/snippets' },
        { text: 'Options', link: '/basic-usage/options' },
      ],
    },
    {
      text: 'Custom Usage',
      collapsible: true,
      items: [
        { text: 'Custom Dependencies', link: '/custom-usage/custom' },
        { text: 'Custom Options', link: '/custom-usage/custom-options' },
      ],
    },
    {
      text: 'vite templates',
      collapsible: true,
      items: [
        { text: 'astro', link: '/vite-templates/astro' },
        { text: 'vite', link: '/vite-templates/vite' },
        { text: 'vite-vue', link: '/vite-templates/vite-vue' },
        { text: 'vite-vue-ts', link: '/vite-templates/vite-vue-ts' },
        { text: 'vite-react', link: '/vite-templates/vite-react' },
        { text: 'vite-react-ts', link: '/vite-templates/vite-react-ts' },
        { text: 'vite-preact', link: '/vite-templates/vite-preact' },
        { text: 'vite-preact-ts', link: '/vite-templates/vite-preact-ts' },
        { text: 'vite-svelte', link: '/vite-templates/vite-svelte' },
        { text: 'vite-svelte-ts', link: '/vite-templates/vite-svelte-ts' },
        { text: 'vite-solid', link: '/vite-templates/vite-solid' },
        { text: 'vite-lit', link: '/vite-templates/vite-lit' },
      ],
    },
  ];
}
