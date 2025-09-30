import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, createBlock, createCommentVNode, toDisplayString } from "vue";
import { _ as _imports_0 } from "./comfy-brand-mark-XJkMJ9aQ.js";
import ProgressBar from "primevue/progressbar";
import { useI18n } from "vue-i18n";
const _hoisted_1 = { class: "grid grid-rows-2 gap-8" };
const _hoisted_2 = { class: "flex items-end justify-center" };
const _hoisted_3 = ["alt"];
const _hoisted_4 = { class: "flex flex-col items-center justify-center gap-4" };
const _hoisted_5 = {
  key: 1,
  class: "font-inter font-bold text-3xl text-neutral-300"
};
const _hoisted_6 = {
  key: 2,
  class: "text-lg text-neutral-400"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StartupDisplay",
  props: {
    progressPercentage: {},
    title: {},
    statusText: {},
    hideProgress: { type: Boolean, default: false },
    fullScreen: { type: Boolean, default: true }
  },
  setup(__props) {
    const { t } = useI18n();
    const progressMode = computed(
      () => __props.progressPercentage === void 0 ? "indeterminate" : "determinate"
    );
    const wrapperClass = computed(
      () => __props.fullScreen ? "flex items-center justify-center min-h-screen" : "flex items-center justify-center"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(wrapperClass.value)
      }, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("img", {
              src: _imports_0,
              alt: unref(t)("g.logoAlt"),
              class: "w-60"
            }, null, 8, _hoisted_3)
          ]),
          createElementVNode("div", _hoisted_4, [
            !_ctx.hideProgress ? (openBlock(), createBlock(unref(ProgressBar), {
              key: 0,
              mode: progressMode.value,
              value: _ctx.progressPercentage ?? 0,
              "show-value": false,
              class: "w-90 h-2 mt-8",
              pt: { value: { class: "bg-brand-yellow" } }
            }, null, 8, ["mode", "value"])) : createCommentVNode("", true),
            _ctx.title ? (openBlock(), createElementBlock("h1", _hoisted_5, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
            _ctx.statusText ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(_ctx.statusText), 1)) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=StartupDisplay-CrkckNTE.js.map
