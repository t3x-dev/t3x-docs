import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'T3X Documentation',
  tagline: 'Git for meaning',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://t3x-docs.vercel.app',
  baseUrl: '/',

  organizationName: 't3x-dev',
  projectName: 't3x-docs',

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
          editUrl: 'https://github.com/t3x-dev/t3x-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/screenshots/chat-light.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'T3X',
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
          to: '/local',
          label: 'Local',
          position: 'left',
        },
        {
          to: '/yops',
          label: 'YOps',
          position: 'left',
        },
        {
          to: '/webui',
          label: 'WebUI',
          position: 'left',
        },
        {
          to: '/preview/cli',
          label: 'Preview',
          position: 'left',
        },
        {
          to: '/release',
          label: 'v0.3.0 pending',
          position: 'right',
        },
        {
          href: 'https://t3x.dev',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/t3x-dev/t3x-core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    announcementBar: {
      id: 'alpha-0-3-0-pending',
      content:
        'T3X alpha v0.3.0 is being prepared. npm commands become available after publish completes.',
      backgroundColor: '#fef3c7',
      textColor: '#111827',
      isCloseable: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quickstart',
              to: '/quickstart',
            },
            {
              label: 'Local Alpha',
              to: '/local',
            },
            {
              label: 'YOps',
              to: '/yops',
            },
            {
              label: 'Preview',
              to: '/preview/cli',
            },
            {
              label: 'Release status',
              to: '/release',
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
              label: 'GitHub',
              href: 'https://github.com/t3x-dev/t3x-core',
            },
          ],
        },
      ],
      copyright: `T3X — Git for meaning`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
