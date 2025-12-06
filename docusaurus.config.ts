import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'T3x Documentation',
  tagline: 'Semantic Version Control for AI Conversations',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.t3x.dev',
  baseUrl: '/',

  organizationName: 't3x',
  projectName: 't3x',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/t3x/t3x/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/t3x-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'T3x',
      logo: {
        alt: 'T3x Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/cli',
          label: 'CLI',
          position: 'left',
        },
        {
          to: '/api',
          label: 'API',
          position: 'left',
        },
        {
          to: '/webui',
          label: 'WebUI',
          position: 'left',
        },
        {
          href: 'https://t3x.dev',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/t3x/t3x',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'CLI Reference',
              to: '/cli',
            },
            {
              label: 'API Reference',
              to: '/api',
            },
          ],
        },
        {
          title: 'Concepts',
          items: [
            {
              label: 'Semantic Layers',
              to: '/concepts/semantic-layers',
            },
            {
              label: 'Diff & Merge',
              to: '/concepts/diff-merge',
            },
            {
              label: 'Import & Export',
              to: '/concepts/import-export',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Website',
              href: 'https://t3x.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/t3x/t3x',
            },
          ],
        },
      ],
      copyright: `T3x — Semantic Version Control`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
