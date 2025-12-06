import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'quickstart',
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
      label: 'CLI',
      collapsed: false,
      items: [
        'cli/index',
        'cli/commands',
        'cli/configuration',
        'cli/workflows',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/index',
        'api/projects',
        'api/turns',
        'api/commits',
        'api/branches',
        'api/diff-merge',
        'api/drafts',
        'api/export',
      ],
    },
    {
      type: 'category',
      label: 'WebUI',
      collapsed: true,
      items: [
        'webui/index',
        'webui/workflows',
        'webui/canvas',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      items: [
        'use-cases/trip-planning',
        'use-cases/meeting-notes',
        'use-cases/product-specs',
        'use-cases/agent-workflows',
      ],
    },
  ],
};

export default sidebars;
