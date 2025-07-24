import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString } from "vue";
import { bG as _sfc_main$1 } from "./index-CAdFfAbw.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/dialog";
import "vue-i18n";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DonatePanel",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        value: "Donate",
        class: "donate-container"
      }, {
        default: withCtx(() => [
          createElementVNode("h2", _hoisted_1, toDisplayString(_ctx.$t("g.donate")), 1),
          createElementVNode("p", _hoisted_2, toDisplayString(_ctx.$t("g.donateMessage1")), 1),
          createElementVNode("p", _hoisted_3, toDisplayString(_ctx.$t("g.donateMessage2")), 1),
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "flex gap-4" }, [
            createElementVNode("div", null, [
              createElementVNode("h3", { class: "text-lg font-semibold mb-2" }, "Alipay")
            ]),
            createElementVNode("div", null, [
              createElementVNode("h3", { class: "text-lg font-semibold mb-2" }, "WeChat Pay")
            ])
          ], -1))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DonatePanel-Ckh3_SVY.js.map
