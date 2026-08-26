/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
  if (typeof window === "undefined") return;

  // VuePress rewrites /de/faq -> /de/faq.html and drops location.hash.
  const initialHash = window.location.hash;
  const NAVBAR_OFFSET_PX = 72;

  const decodeId = (hash) => {
    const raw = hash.replace(/^#/, "");
    try {
      return decodeURIComponent(raw);
    } catch (e) {
      return raw;
    }
  };

  const scrollToHash = (hash) => {
    if (!hash) return false;
    const el = document.getElementById(decodeId(hash));
    if (!el) return false;
    const target =
      el.getBoundingClientRect().height === 0 && el.nextElementSibling
        ? el.nextElementSibling
        : el;
    if (window.location.hash !== hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search + hash
      );
    }
    window.scrollTo(
      0,
      target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET_PX
    );
    return true;
  };

  router.onReady(() => {
    const hash = () => window.location.hash || initialHash;
    if (scrollToHash(hash())) return;
    setTimeout(() => {
      if (scrollToHash(hash())) return;
      setTimeout(() => scrollToHash(hash()), 200);
    }, 0);
  });
};
