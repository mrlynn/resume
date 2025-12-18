import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Michael Lynn - Resume',
  tagline: 'Principal Staff Developer Advocate | Technical Leader | AI & Database Expert',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://mrlynn.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/resume/',

  // GitHub pages deployment config.
  organizationName: 'mrlynn',
  projectName: 'resume',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/mrlynn/resume/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Michael Lynn',
      logo: {
        alt: 'Michael Lynn Logo',
        src: 'img/letter-m-circle.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'resumeSidebar',
          position: 'left',
          label: 'Resume',
        },
        {
          href: 'https://github.com/mrlynn',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/mlynn',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://mlynn.org',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/mlynn',
            },
            {
              label: 'Website',
              href: 'https://mlynn.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mrlynn',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'The MongoDB Podcast',
              href: 'https://mongodb.com/podcast',
            },
            {
              label: 'Resume (Markdown)',
              href: 'https://github.com/mrlynn/resume/blob/main/resume.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael Lynn. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

