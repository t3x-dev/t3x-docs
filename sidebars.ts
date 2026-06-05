import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'quickstart',
    {
      type: 'category',
      label: 'Alpha',
      collapsed: false,
      items: [
        'release/index',
        'release/stability',
        'release/limitations',
        'release/deployment',
        'release/security',
        'release/stability-policy',
      ],
    },
    'local/index',
    {
      type: 'category',
      label: 'YOps',
      collapsed: false,
      items: ['yops/index', 'yops/operations'],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/semantic-layers',
        'concepts/turns-and-commits',
        'concepts/branching',
        'concepts/diff-merge',
        'concepts/import-export',
      ],
    },
    {
      type: 'category',
      label: 'WebUI',
      collapsed: false,
      items: [
        'webui/index',
        {
          type: 'doc',
          id: 'webui/workflows',
          label: 'Chat Workspace',
        },
        'webui/canvas',
        'webui/leaf',
      ],
    },
    {
      type: 'category',
      label: 'Preview',
      collapsed: false,
      items: [
        'preview/cli',
        'preview/mcp',
        'preview/api',
        'preview/runner',
      ],
    },
  ],
};

export default sidebars;
