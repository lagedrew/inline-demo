import { useScriptTag } from "@vueuse/core";

export function useInline(element) {
  useScriptTag(
    "inline.js",
    // on script tag loaded.
    () => {
      // do somethin

      // eslint-disable-next-line no-undef
      new inLine(`#${element.value.id}`);
    }
  );
  // expose managed state as return value
  return {};
}
