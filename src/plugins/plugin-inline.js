import { useScriptTag } from "@vueuse/core";

export default {
  install: (app, options) => {
    useScriptTag(
      "./inline.js",
      // on script tag loaded.
      (el) => {
        console.log(el);
      }
    );

    const plausible = Plausible({
      domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
      trackLocalhost: false,
    });
    plausible.enableAutoPageviews();
    plausible.enableAutoOutboundTracking();

    app.config.globalProperties.$plausible = plausible;

    app.provide("plausible", plausible);
  },
};
