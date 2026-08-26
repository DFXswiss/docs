/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
  if (typeof window === "undefined") return;

  // VuePress rewrites /{lang}/faq -> /{lang}/faq.html and drops location.hash.
  const initialHash = window.location.hash;
  const NAVBAR_OFFSET_PX = 72;
  const HASH_SCROLL_RETRY_DELAY_MS = 200;

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
        history.state,
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
    const startPath = window.location.pathname + window.location.search;
    const hash = () => {
      if (window.location.pathname + window.location.search !== startPath) return "";
      return window.location.hash || initialHash;
    };
    scrollToHash(hash());
    setTimeout(() => {
      if (scrollToHash(hash())) return;
      setTimeout(() => scrollToHash(hash()), HASH_SCROLL_RETRY_DELAY_MS);
    }, 0);
  });
};
