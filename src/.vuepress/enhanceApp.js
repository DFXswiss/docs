/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
  if (typeof window === "undefined") return;

  // VuePress rewrites /de/faq -> /de/faq.html and drops location.hash.
  let pendingHash = window.location.hash;

  const decodeId = (hash) => {
    const raw = hash.replace(/^#/, "");
    try {
      return decodeURIComponent(raw);
    } catch (e) {
      return raw;
    }
  };

  const restoreHash = (hash) => {
    if (!hash || window.location.hash === hash) return;
    history.replaceState(null, "", window.location.pathname + window.location.search + hash);
  };

  const scrollToHash = (hash) => {
    if (!hash) return false;
    const el = document.getElementById(decodeId(hash));
    if (!el) return false;
    const target =
      el.getBoundingClientRect().height === 0 && el.nextElementSibling
        ? el.nextElementSibling
        : el;
    window.scrollTo(0, target.getBoundingClientRect().top + window.pageYOffset - 72);
    return true;
  };

  const tryScroll = (hash) => {
    if (!hash) return false;
    restoreHash(hash);
    if (!scrollToHash(hash)) return false;
    pendingHash = "";
    return true;
  };

  const retryScroll = (hash) => {
    if (tryScroll(hash)) return;
    setTimeout(() => tryScroll(hash), 0);
    setTimeout(() => tryScroll(hash), 200);
  };

  router.onReady(() => retryScroll(window.location.hash || pendingHash));

  router.afterEach(() => {
    const hash = window.location.hash || pendingHash;
    if (!hash) return;
    router.app.$nextTick(() => retryScroll(hash));
  });
}
