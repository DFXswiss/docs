const { description } = require("../../package");

module.exports = {
  title: "Documents",
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#072440" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "DFXswiss/docs",
    logo: "/assets/logo.svg",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    docsBranch: "main",
    docsDir: "src",
    lastUpdated: true,

    nav: [
      {
        text: "English",
        link: "/english/",
      },
      {
        text: "Deutsch",
        link: "/german/",
      },
      {
        text: "DFX.swiss",
        link: "https://dfx.swiss",
      },
    ],

    sidebar: [
      { title: "Home", path: "/" },
      {
        title: "English",
        path: "/english/",
        children: [
          "/english/tnc",
          "/english/privacy",
          "/english/imprint",
          "/english/pof",
          "/english/disclaimer",
          "/english/faq",
        ],
      },
      {
        title: "Deutsch",
        path: "/german/",
        children: [
          "/german/tnc",
          "/german/privacy",
          "/german/imprint",
          "/german/pof",
          "/german/disclaimer",
          "/german/faq",
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
