var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, unref, Fragment, renderList, createBlock } from "vue";
import Button from "primevue/button";
import { cH as useRoute, V as t, F as normalizeI18nKey, av as electronAPI, _ as _export_sfc } from "./index-CCYTB1GP.js";
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
import "primevue/skeleton";
import "primevue/checkbox";
import "primevue/message";
import "primevue/divider";
import "primevue/usetoast";
import "primevue/card";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/inputtext";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/tabpanel";
import "primevue/select";
import "primevue/multiselect";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/radiobutton";
import "primevue/knob";
import "primevue/slider";
import "primevue/panel";
import "primevue/tabmenu";
import "primevue/popover";
import "primevue/tab";
import "primevue/tablist";
import "primevue";
import "primevue/chart";
import "primevue/galleria";
import "primevue/imagecompare";
import "primevue/textarea";
import "primevue/treeselect";
import "primevue/autocomplete";
import "primevue/dropdown";
import "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/selectbutton";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/confirmdialog";
const DESKTOP_DIALOGS = {
  /** Shown when a corrupt venv is detected. */
  reinstallVenv: {
    title: "Reinstall ComfyUI (Fresh Start)?",
    message: `Sorry, we can't launch ComfyUI because some installed packages aren't compatible.

Click Reinstall to restore ComfyUI and get back up and running.

Please note: if you've added custom nodes, you'll need to reinstall them after this process.`,
    buttons: [
      {
        label: "Learn More",
        action: "openUrl",
        url: "https://docs.comfy.org",
        returnValue: "openDocs"
      },
      {
        label: "Reinstall",
        action: "close",
        severity: "danger",
        returnValue: "resetVenv"
      }
    ]
  },
  /** A dialog that is shown when an invalid dialog ID is provided. */
  invalidDialog: {
    title: "Invalid Dialog",
    message: `Invalid dialog ID was provided.`,
    buttons: [
      {
        label: "Close",
        action: "cancel",
        returnValue: "cancel"
      }
    ]
  }
};
function isDialogId(id) {
  return typeof id === "string" && id in DESKTOP_DIALOGS;
}
__name(isDialogId, "isDialogId");
function getDialog(dialogId) {
  const id = isDialogId(dialogId) ? dialogId : "invalidDialog";
  return { id, ...structuredClone(DESKTOP_DIALOGS[id]) };
}
__name(getDialog, "getDialog");
const _hoisted_1 = { class: "w-full h-full flex flex-col rounded-lg p-6 justify-between" };
const _hoisted_2 = { class: "font-inter font-semibold text-xl m-0 italic" };
const _hoisted_3 = { class: "whitespace-pre-wrap" };
const _hoisted_4 = { class: "flex w-full gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DesktopDialogView",
  setup(__props) {
    const route = useRoute();
    const { id, title, message, buttons } = getDialog(route.params.dialogId);
    const handleButtonClick = /* @__PURE__ */ __name(async (button) => {
      await electronAPI().Dialog.clickButton(button.returnValue);
    }, "handleButtonClick");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("h1", _hoisted_2, toDisplayString(unref(t)(`desktopDialogs.${unref(id)}.title`, unref(title))), 1),
        createElementVNode("p", _hoisted_3, toDisplayString(unref(t)(`desktopDialogs.${unref(id)}.message`, unref(message))), 1),
        createElementVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(buttons), (button) => {
            return openBlock(), createBlock(unref(Button), {
              key: button.label,
              class: "rounded-lg first:mr-auto",
              label: unref(t)(
                `desktopDialogs.${unref(id)}.buttons.${unref(normalizeI18nKey)(button.label)}`,
                button.label
              ),
              severity: button.severity ?? "secondary",
              onClick: /* @__PURE__ */ __name(($event) => handleButtonClick(button), "onClick")
            }, null, 8, ["label", "severity", "onClick"]);
          }), 128))
        ])
      ]);
    };
  }
});
const DesktopDialogView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a7f4119"]]);
export {
  DesktopDialogView as default
};
//# sourceMappingURL=DesktopDialogView-BX1KmmBR.js.map
