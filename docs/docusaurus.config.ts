import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FastUI",
  tagline: "Set up a modern web app by quickly.",
  favicon: "img/favicon.ico",

  url: "https://fastui.paion-data.com",
  baseUrl: "/",
  organizationName: "paion-data",
  projectName: "fast-ui",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/paion-data/fast-ui/tree/master/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "FastUI",
      logo: {
        alt: "FastUI Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://fastui.paion-data.com/api/",
          label: "API",
          position: "left",
        },
        {
          href: "https://github.com/paion-data/fast-ui",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Contributor Covenant",
              href: "https://www.contributor-covenant.org/version/1/4/code-of-conduct",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/paion-data/fast-ui",
            },
          ],
        },
      ],
      copyright: '<div><a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备2024234224<a><div>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
