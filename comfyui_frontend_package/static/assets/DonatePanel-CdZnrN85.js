import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, unref, createElementBlock } from "vue";
import { useI18n } from "vue-i18n";
import { bG as _sfc_main$1 } from "./index-DBlfa0Ip.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/dialog";
import "primevue/scrollpanel";
import "primevue/button";
import "primevue/message";
import "primevue/divider";
import "primevue/usetoast";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/checkbox";
import "primevue/dropdown";
import "primevue/inputtext";
import "primevue/panel";
import "primevue/textarea";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/select";
import "primevue/tabpanel";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/knob";
import "primevue/slider";
import "primevue/password";
import "primevue/skeleton";
import "primevue/popover";
import "primevue/tab";
import "primevue/tablist";
import "primevue/multiselect";
import "primevue/autocomplete";
import "primevue/tabmenu";
import "primevue/dataview";
import "primevue/selectbutton";
import "primevue/column";
import "primevue/datatable";
import "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/galleria";
import "primevue/confirmdialog";
const _hoisted_1 = { class: "text-2xl font-bold mb-2" };
const _hoisted_2 = { class: "mb-4" };
const _hoisted_3 = { class: "mb-4" };
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DonatePanel",
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        value: "Donate",
        class: "donate-container"
      }, {
        default: withCtx(() => [
          createElementVNode("h2", _hoisted_1, toDisplayString(_ctx.$t("g.donate")), 1),
          createElementVNode("p", _hoisted_2, toDisplayString(_ctx.$t("g.donateMessage1")), 1),
          createElementVNode("p", _hoisted_3, toDisplayString(_ctx.$t("g.donateMessage2")), 1),
          createElementVNode("div", _hoisted_4, [
            unref(locale) === "zh" ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[0] || (_cache[0] = [
              createElementVNode("iframe", {
                id: "pay_zh",
                src: "https://donate.nav001.online/index_zh.html",
                style: { "border": "none", "width": "100%", "padding": "0px", "background": "#f9f9f9" },
                height: "600",
                title: "vanderbilt"
              }, null, -1)
            ]))) : (openBlock(), createElementBlock("div", _hoisted_6, _cache[1] || (_cache[1] = [
              createElementVNode("iframe", {
                id: "kofiframe",
                src: "https://ko-fi.com/vanderbilt/?hidefeed=true&widget=true&embed=true&preview=true",
                style: { "border": "none", "width": "100%", "padding": "4px", "background": "#f9f9f9" },
                height: "600",
                title: "vanderbilt"
              }, null, -1)
            ])))
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DonatePanel-CdZnrN85.js.map
