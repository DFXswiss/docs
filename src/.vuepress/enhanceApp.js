/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
  if (typeof window === "undefined") return;

  // VuePress rewrites /de/faq -> /de/faq.html and drops location.hash.
  const initialHash = window.location.hash;

  const scrollToHash = (hash) => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72;
    window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - offset);
  };

  router.onReady(() => {
    const tryScroll = () => scrollToHash(window.location.hash || initialHash);
    tryScroll();
    setTimeout(tryScroll, 0);
    setTimeout(tryScroll, 200);
  });
}
