const { description } = require("../../package");

module.exports = {
  title: "Docs",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#072440" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["script", { src: "https://services.dfx.swiss/widget/v1.0", defer: true }],
  ],

  themeConfig: {
    repo: "DFXswiss/docs",
    logo: "/assets/logo.svg",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    docsBranch: "develop",
    docsDir: "src",
    lastUpdated: true,

    nav: [
      {
        text: "English",
        link: "/en/",
      },
      {
        text: "Deutsch",
        link: "/de/",
      },
      {
        text: "French",
        link: "/fr/",
      },
      {
        text: "Italian",
        link: "/it/",
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
        path: "/en/",
        children: [
          "/en/disclaimer",
          "/en/tnc",
          "/en/privacy",
          "/en/imprint",
          "/en/faq",
        ],
      },
      {
        title: "Deutsch",
        path: "/de/",
        children: [
          "/de/disclaimer",
          "/de/tnc",
          "/de/privacy",
          "/de/imprint",
          "/de/faq",
        ],
      },
      {
        title: "French",
        path: "/fr/",
        children: [
          "/fr/disclaimer",
          "/fr/tnc",
          "/fr/privacy",
          "/fr/imprint",
          "/fr/faq",
        ],
      },
      {
        title: "Italian",
        path: "/it/",
        children: [
          "/it/disclaimer",
          "/it/tnc",
          "/it/privacy",
          "/it/imprint",
          "/it/faq",
        ],
      },
    ],
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("dfx"),
        },
      }));
  },
};
