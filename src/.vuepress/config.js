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
    docsBranch: "main",
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
          "/en/tnc",
          "/en/privacy",
          "/en/imprint",
          "/en/disclaimer",
          "/en/faq",
        ],
      },
      {
        title: "Deutsch",
        path: "/de/",
        children: [
          "/de/tnc",
          "/de/privacy",
          "/de/imprint",
          "/de/disclaimer",
          "/de/faq",
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
