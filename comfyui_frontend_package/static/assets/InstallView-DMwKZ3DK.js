var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, useModel, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode, unref, withModifiers, withCtx, markRaw, normalizeClass, createCommentVNode, computed, createBlock, withDirectives, vShow, createTextVNode, watchEffect, Fragment, renderList, mergeModels, onMounted, watch, toRaw } from "vue";
import StepPanel from "primevue/steppanel";
import StepPanels from "primevue/steppanels";
import Stepper from "primevue/stepper";
import { bm as cn, E as st, av as electronAPI, cy as MigrationItems, cz as ValidationState, F as normalizeI18nKey, cA as _sfc_main$8, cB as isInChina, cC as TorchMirrorUrl, _ as _export_sfc, cu as useRouter } from "./index-CCYTB1GP.js";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import ToggleSwitch from "primevue/toggleswitch";
import Tag from "primevue/tag";
import Button from "primevue/button";
import Step from "primevue/step";
import StepList from "primevue/steplist";
import Accordion from "primevue/accordion";
import AccordionContent from "primevue/accordioncontent";
import AccordionHeader from "primevue/accordionheader";
import AccordionPanel from "primevue/accordionpanel";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import { useI18n } from "vue-i18n";
import Checkbox from "primevue/checkbox";
import { c as checkMirrorReachable, P as PYTHON_MIRROR, a as PYPI_MIRROR } from "./uvMirrors-DVsZSzSp.js";
import { _ as _sfc_main$9 } from "./BaseViewTemplate-Zohw0YYu.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/scrollpanel";
import "primevue/skeleton";
import "primevue/usetoast";
import "primevue/card";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/password";
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
const _hoisted_1$8 = { class: "flex flex-col gap-6 w-[600px]" };
const _hoisted_2$6 = { class: "flex flex-col gap-4" };
const _hoisted_3$5 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_4$5 = { class: "text-neutral-400 my-0" };
const _hoisted_5$5 = { class: "flex flex-col bg-neutral-800 p-4 rounded-lg text-sm" };
const _hoisted_6$5 = { class: "flex items-center gap-4" };
const _hoisted_7$1 = { class: "flex-1" };
const _hoisted_8$1 = { class: "text-lg font-medium text-neutral-100" };
const _hoisted_9$1 = { class: "text-neutral-400 mt-1" };
const _hoisted_10$1 = { class: "flex items-center gap-4" };
const _hoisted_11$1 = { class: "flex-1" };
const _hoisted_12 = { class: "text-lg font-medium text-neutral-100" };
const _hoisted_13 = { class: "text-neutral-400" };
const _hoisted_14 = { class: "text-neutral-300" };
const _hoisted_15 = { class: "font-medium mb-2" };
const _hoisted_16 = { class: "list-disc pl-6 space-y-1" };
const _hoisted_17 = { class: "font-medium mt-4 mb-2" };
const _hoisted_18 = { class: "list-disc pl-6 space-y-1" };
const _hoisted_19 = { class: "mt-4" };
const _hoisted_20 = {
  href: "https://comfy.org/privacy",
  target: "_blank"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DesktopSettingsConfiguration",
  props: {
    "autoUpdate": { type: Boolean, ...{ required: true } },
    "autoUpdateModifiers": {},
    "allowMetrics": { type: Boolean, ...{ required: true } },
    "allowMetricsModifiers": {}
  },
  emits: ["update:autoUpdate", "update:allowMetrics"],
  setup(__props) {
    const showDialog = ref(false);
    const autoUpdate = useModel(__props, "autoUpdate");
    const allowMetrics = useModel(__props, "allowMetrics");
    const showMetricsInfo = /* @__PURE__ */ __name(() => {
      showDialog.value = true;
    }, "showMetricsInfo");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$6, [
          createElementVNode("h2", _hoisted_3$5, toDisplayString(_ctx.$t("install.desktopAppSettings")), 1),
          createElementVNode("p", _hoisted_4$5, toDisplayString(_ctx.$t("install.desktopAppSettingsDescription")), 1)
        ]),
        createElementVNode("div", _hoisted_5$5, [
          createElementVNode("div", _hoisted_6$5, [
            createElementVNode("div", _hoisted_7$1, [
              createElementVNode("h3", _hoisted_8$1, toDisplayString(_ctx.$t("install.settings.autoUpdate")), 1),
              createElementVNode("p", _hoisted_9$1, toDisplayString(_ctx.$t("install.settings.autoUpdateDescription")), 1)
            ]),
            createVNode(unref(ToggleSwitch), {
              modelValue: autoUpdate.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => autoUpdate.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          createVNode(unref(Divider)),
          createElementVNode("div", _hoisted_10$1, [
            createElementVNode("div", _hoisted_11$1, [
              createElementVNode("h3", _hoisted_12, toDisplayString(_ctx.$t("install.settings.allowMetrics")), 1),
              createElementVNode("p", _hoisted_13, toDisplayString(_ctx.$t("install.settings.allowMetricsDescription")), 1),
              createElementVNode("a", {
                href: "#",
                onClick: withModifiers(showMetricsInfo, ["prevent"])
              }, toDisplayString(_ctx.$t("install.settings.learnMoreAboutData")), 1)
            ]),
            createVNode(unref(ToggleSwitch), {
              modelValue: allowMetrics.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => allowMetrics.value = $event)
            }, null, 8, ["modelValue"])
          ])
        ]),
        createVNode(unref(Dialog), {
          visible: showDialog.value,
          "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => showDialog.value = $event),
          modal: "",
          "dismissable-mask": "",
          header: _ctx.$t("install.settings.dataCollectionDialog.title"),
          class: "select-none"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_14, [
              createElementVNode("h4", _hoisted_15, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.whatWeCollect")), 1),
              createElementVNode("ul", _hoisted_16, [
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.collect.errorReports")), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.collect.systemInfo")), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.collect.userJourneyEvents"
                )), 1)
              ]),
              createElementVNode("h4", _hoisted_17, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.whatWeDoNotCollect")), 1),
              createElementVNode("ul", _hoisted_18, [
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.personalInformation"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.workflowContents"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.fileSystemInformation"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.customNodeConfigurations"
                )), 1)
              ]),
              createElementVNode("div", _hoisted_19, [
                createElementVNode("a", _hoisted_20, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.viewFullPolicy")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76" }),
      createElementVNode("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "lucide-badge-check", render });
const _hoisted_1$6 = { class: "relative" };
const _hoisted_2$5 = { class: "icon-container w-[110px] h-[110px] shrink-0 rounded-2xl bg-neutral-800 flex items-center justify-center overflow-hidden" };
const _hoisted_3$4 = ["src", "alt"];
const _hoisted_4$4 = {
  key: 1,
  class: "text-xl font-medium text-neutral-400"
};
const _hoisted_5$4 = {
  key: 0,
  class: "text-center mt-4"
};
const _hoisted_6$4 = { class: "text-sm text-neutral-500" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HardwareOption",
  props: {
    imagePath: {},
    placeholderText: {},
    subtitle: {},
    value: {},
    selected: { type: Boolean },
    recommended: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("button", {
          class: normalizeClass(
            unref(cn)(
              "hardware-option w-[170px] h-[190px] p-5 flex flex-col items-center rounded-3xl transition-all duration-200 bg-neutral-900/70 border-4",
              _ctx.selected ? "border-solid border-brand-yellow" : "border-transparent"
            )
          ),
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
        }, [
          createElementVNode("div", _hoisted_2$5, [
            _ctx.imagePath ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.imagePath,
              alt: _ctx.placeholderText,
              class: "w-full h-full object-cover",
              style: { "object-position": "57% center" },
              draggable: "false"
            }, null, 8, _hoisted_3$4)) : (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(_ctx.placeholderText), 1))
          ]),
          _ctx.subtitle ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
            createElementVNode("div", _hoisted_6$4, toDisplayString(_ctx.subtitle), 1)
          ])) : createCommentVNode("", true)
        ], 2)
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "grid grid-rows-[1fr_auto_auto_1fr] w-full max-w-3xl mx-auto h-[40rem] select-none" };
const _hoisted_2$4 = { class: "font-inter font-bold text-3xl text-neutral-100 text-center" };
const _hoisted_3$3 = { class: "flex-1 flex gap-8 justify-center items-center" };
const _hoisted_4$3 = { class: "pt-12 px-24 h-16" };
const _hoisted_5$3 = { class: "flex items-center gap-2" };
const _hoisted_6$3 = { class: "text-neutral-300 px-24" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GpuPicker",
  props: {
    "device": {
      required: true
    },
    "deviceModifiers": {}
  },
  emits: ["update:device"],
  setup(__props) {
    const selected = useModel(__props, "device");
    const electron = electronAPI();
    const platform = electron.getPlatform();
    const showRecommendedBadge = computed(
      () => selected.value === "mps" || selected.value === "nvidia"
    );
    const descriptionKeys = {
      mps: "appleMetal",
      nvidia: "nvidia",
      cpu: "cpu",
      unsupported: "manual"
    };
    const descriptionText = computed(() => {
      const key = selected.value ? descriptionKeys[selected.value] : void 0;
      return st(`install.gpuPicker.${key}Description`, "");
    });
    const pickGpu = /* @__PURE__ */ __name((value) => {
      selected.value = value;
    }, "pickGpu");
    return (_ctx, _cache) => {
      const _component_i_lucide58badge_check = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("h2", _hoisted_2$4, toDisplayString(_ctx.$t("install.gpuPicker.title")), 1),
        createElementVNode("div", _hoisted_3$3, [
          unref(platform) === "darwin" ? (openBlock(), createBlock(_sfc_main$6, {
            key: 0,
            "image-path": "/assets/images/apple-mps-logo.png",
            "placeholder-text": "Apple Metal",
            subtitle: "Apple Metal",
            value: "mps",
            selected: selected.value === "mps",
            recommended: true,
            onClick: _cache[0] || (_cache[0] = ($event) => pickGpu("mps"))
          }, null, 8, ["selected"])) : (openBlock(), createBlock(_sfc_main$6, {
            key: 1,
            "image-path": "/assets/images/nvidia-logo-square.jpg",
            "placeholder-text": "NVIDIA",
            subtitle: _ctx.$t("install.gpuPicker.nvidiaSubtitle"),
            value: "nvidia",
            selected: selected.value === "nvidia",
            recommended: true,
            onClick: _cache[1] || (_cache[1] = ($event) => pickGpu("nvidia"))
          }, null, 8, ["subtitle", "selected"])),
          createVNode(_sfc_main$6, {
            "placeholder-text": "CPU",
            subtitle: _ctx.$t("install.gpuPicker.cpuSubtitle"),
            value: "cpu",
            selected: selected.value === "cpu",
            onClick: _cache[2] || (_cache[2] = ($event) => pickGpu("cpu"))
          }, null, 8, ["subtitle", "selected"]),
          createVNode(_sfc_main$6, {
            "placeholder-text": "Manual Install",
            subtitle: _ctx.$t("install.gpuPicker.manualSubtitle"),
            value: "unsupported",
            selected: selected.value === "unsupported",
            onClick: _cache[3] || (_cache[3] = ($event) => pickGpu("unsupported"))
          }, null, 8, ["subtitle", "selected"])
        ]),
        createElementVNode("div", _hoisted_4$3, [
          withDirectives(createElementVNode("div", _hoisted_5$3, [
            createVNode(unref(Tag), {
              value: _ctx.$t("install.gpuPicker.recommended"),
              class: "bg-neutral-300 text-neutral-900 rounded-full text-sm font-bold px-2 py-[1px]"
            }, null, 8, ["value"]),
            createVNode(_component_i_lucide58badge_check, { class: "text-neutral-300 text-lg" })
          ], 512), [
            [vShow, showRecommendedBadge.value]
          ])
        ]),
        createElementVNode("div", _hoisted_6$3, [
          withDirectives(createElementVNode("p", { class: "leading-relaxed" }, toDisplayString(descriptionText.value), 513), [
            [vShow, descriptionText.value]
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "grid grid-cols-[1fr_auto_1fr] items-center gap-4" };
const _hoisted_2$3 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InstallFooter",
  props: {
    currentStep: {},
    canProceed: { type: Boolean },
    disableLocationStep: { type: Boolean },
    disableMigrationStep: { type: Boolean },
    disableSettingsStep: { type: Boolean }
  },
  emits: ["previous", "next", "install"],
  setup(__props) {
    const stepPassthrough = {
      root: { class: "flex-none p-0 m-0" },
      header: /* @__PURE__ */ __name(({ context }) => ({
        class: [
          "h-2.5 p-0 m-0 border-0 rounded-full transition-all duration-300",
          context.active ? "bg-brand-yellow w-8 rounded-sm" : "bg-neutral-700 w-2.5",
          context.disabled ? "opacity-60 cursor-not-allowed" : ""
        ].join(" ")
      }), "header"),
      number: { class: "hidden" },
      title: { class: "hidden" }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _ctx.currentStep !== "1" ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          label: _ctx.$t("g.back"),
          severity: "secondary",
          icon: "pi pi-arrow-left",
          class: "font-inter rounded-lg border-0 px-6 py-2 justify-self-start",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("previous"))
        }, null, 8, ["label"])) : (openBlock(), createElementBlock("div", _hoisted_2$3)),
        createVNode(unref(StepList), { class: "flex justify-center items-center gap-3 select-none" }, {
          default: withCtx(() => [
            createVNode(unref(Step), {
              value: "1",
              pt: stepPassthrough
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("install.gpu")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Step), {
              value: "2",
              disabled: _ctx.disableLocationStep,
              pt: stepPassthrough
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("install.installLocation")), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(unref(Step), {
              value: "3",
              disabled: _ctx.disableSettingsStep,
              pt: stepPassthrough
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("install.desktopSettings")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          _: 1
        }),
        createVNode(unref(Button), {
          label: _ctx.currentStep !== "3" ? _ctx.$t("g.next") : _ctx.$t("g.install"),
          class: "px-8 py-2 bg-brand-yellow hover:bg-brand-yellow/90 font-inter rounded-lg border-0 transition-colors justify-self-end",
          pt: {
            label: { class: "text-neutral-900 font-inter font-black" }
          },
          disabled: !_ctx.canProceed,
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.currentStep !== "3" ? _ctx.$emit("next") : _ctx.$emit("install"))
        }, null, 8, ["label", "disabled"])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "flex flex-col gap-6 w-[600px]" };
const _hoisted_2$2 = { class: "flex flex-col gap-4" };
const _hoisted_3$2 = { class: "text-neutral-400 my-0" };
const _hoisted_4$2 = { class: "flex gap-2" };
const _hoisted_5$2 = {
  key: 0,
  class: "flex flex-col gap-4 p-4 rounded-lg"
};
const _hoisted_6$2 = { class: "text-lg mt-0 font-medium text-neutral-100" };
const _hoisted_7 = { class: "flex flex-col gap-3" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["for"];
const _hoisted_10 = { class: "text-sm text-neutral-400 my-1" };
const _hoisted_11 = {
  key: 1,
  class: "text-neutral-400 italic"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MigrationPicker",
  props: {
    "sourcePath": { required: false },
    "sourcePathModifiers": {},
    "migrationItemIds": {
      required: false
    },
    "migrationItemIdsModifiers": {}
  },
  emits: ["update:sourcePath", "update:migrationItemIds"],
  setup(__props) {
    const { t } = useI18n();
    const electron = electronAPI();
    const sourcePath = useModel(__props, "sourcePath");
    const migrationItemIds = useModel(__props, "migrationItemIds");
    const migrationItems = ref(
      MigrationItems.map((item) => ({
        ...item,
        selected: true
      }))
    );
    const pathError = ref("");
    const isValidSource = computed(
      () => sourcePath.value !== "" && pathError.value === ""
    );
    const validateSource = /* @__PURE__ */ __name(async (sourcePath2) => {
      if (!sourcePath2) {
        pathError.value = "";
        return;
      }
      try {
        pathError.value = "";
        const validation = await electron.validateComfyUISource(sourcePath2);
        if (!validation.isValid) pathError.value = validation.error ?? "ERROR";
      } catch (error) {
        console.error(error);
        pathError.value = t("install.pathValidationFailed");
      }
    }, "validateSource");
    const browsePath = /* @__PURE__ */ __name(async () => {
      try {
        const result = await electron.showDirectoryPicker();
        if (result) {
          sourcePath.value = result;
          await validateSource(result);
        }
      } catch (error) {
        console.error(error);
        pathError.value = t("install.failedToSelectDirectory");
      }
    }, "browsePath");
    watchEffect(() => {
      migrationItemIds.value = migrationItems.value.filter((item) => item.selected).map((item) => item.id);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("p", _hoisted_3$2, toDisplayString(_ctx.$t("install.migrationSourcePathDescription")), 1),
          createElementVNode("div", _hoisted_4$2, [
            createVNode(unref(InputText), {
              modelValue: sourcePath.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => sourcePath.value = $event),
                validateSource
              ],
              placeholder: _ctx.$t("install.locationPicker.migrationPathPlaceholder"),
              class: normalizeClass(["flex-1", { "p-invalid": pathError.value }])
            }, null, 8, ["modelValue", "placeholder", "class"]),
            createVNode(unref(Button), {
              icon: "pi pi-folder",
              class: "w-12",
              onClick: browsePath
            })
          ]),
          pathError.value ? (openBlock(), createBlock(unref(Message), {
            key: 0,
            severity: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(pathError.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        isValidSource.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          createElementVNode("h3", _hoisted_6$2, toDisplayString(_ctx.$t("install.selectItemsToMigrate")), 1),
          createElementVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(migrationItems.value, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "flex items-center gap-3 p-2 hover:bg-neutral-700 rounded",
                onClick: /* @__PURE__ */ __name(($event) => item.selected = !item.selected, "onClick")
              }, [
                createVNode(unref(Checkbox), {
                  modelValue: item.selected,
                  "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => item.selected = $event, "onUpdate:modelValue"),
                  "input-id": item.id,
                  binary: true,
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id"]),
                createElementVNode("div", null, [
                  createElementVNode("label", {
                    for: item.id,
                    class: "text-neutral-200 font-medium"
                  }, toDisplayString(item.label), 9, _hoisted_9),
                  createElementVNode("p", _hoisted_10, toDisplayString(item.description), 1)
                ])
              ], 8, _hoisted_8);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(_ctx.$t("install.migrationOptional")), 1))
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "flex flex-col gap-4 text-neutral-400 text-sm" };
const _hoisted_2$1 = { class: "text-lg font-medium text-neutral-100 mb-3 mt-0" };
const _hoisted_3$1 = { class: "my-1" };
const _hoisted_4$1 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_5$1 = { class: "text-neutral-300" };
const _hoisted_6$1 = { class: "mt-1 whitespace-pre-wrap" };
const FILE_URL_SCHEME = "file://";
const EXAMPLE_FILE_URL = "/C:/MyPythonInstallers/";
const EXAMPLE_URL_FIRST_PART = "https://github.com/astral-sh/python-build-standalone/releases/download";
const EXAMPLE_URL_SECOND_PART = "/20250902/cpython-3.12.11+20250902-x86_64-pc-windows-msvc-install_only.tar.gz";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MirrorItem",
  props: /* @__PURE__ */ mergeModels({
    item: {}
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["state-change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const modelValue = useModel(__props, "modelValue");
    const validationState = ref(ValidationState.IDLE);
    const showDialog = ref(false);
    const normalizedSettingId = computed(() => {
      return normalizeI18nKey(__props.item.settingId);
    });
    const secondParagraph = computed(
      () => st(`settings.${normalizedSettingId.value}.urlDescription`, "")
    );
    onMounted(() => {
      modelValue.value = __props.item.mirror;
    });
    watch(validationState, (newState) => {
      emit("state-change", newState);
      if (newState === ValidationState.INVALID && modelValue.value === __props.item.mirror) {
        modelValue.value = __props.item.fallbackMirror;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", null, [
          createElementVNode("h3", _hoisted_2$1, toDisplayString(_ctx.$t(`settings.${normalizedSettingId.value}.name`)), 1),
          createElementVNode("p", _hoisted_3$1, toDisplayString(_ctx.$t(`settings.${normalizedSettingId.value}.tooltip`)), 1)
        ]),
        createVNode(_sfc_main$8, {
          modelValue: modelValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
          "validate-url-fn": /* @__PURE__ */ __name((mirror) => unref(checkMirrorReachable)(mirror + (_ctx.item.validationPathSuffix ?? "")), "validate-url-fn"),
          onStateChange: _cache[1] || (_cache[1] = ($event) => validationState.value = $event)
        }, null, 8, ["modelValue", "validate-url-fn"]),
        secondParagraph.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createElementVNode("a", {
            href: "#",
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => showDialog.value = true, ["prevent"]))
          }, toDisplayString(_ctx.$t("g.learnMore")), 1),
          createVNode(unref(Dialog), {
            visible: showDialog.value,
            "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => showDialog.value = $event),
            modal: "",
            "dismissable-mask": "",
            header: _ctx.$t(`settings.${normalizedSettingId.value}.urlFormatTitle`),
            class: "select-none max-w-3xl"
          }, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_5$1, [
                createElementVNode("p", _hoisted_6$1, toDisplayString(secondParagraph.value), 1),
                createElementVNode("div", { class: "mt-2 break-all" }, [
                  createElementVNode("span", { class: "text-neutral-300 font-semibold" }, toDisplayString(EXAMPLE_URL_FIRST_PART)),
                  createElementVNode("span", null, toDisplayString(EXAMPLE_URL_SECOND_PART))
                ]),
                createVNode(unref(Divider)),
                createElementVNode("p", null, toDisplayString(_ctx.$t(`settings.${normalizedSettingId.value}.fileUrlDescription`)), 1),
                createElementVNode("span", { class: "text-neutral-300 font-semibold" }, toDisplayString(FILE_URL_SCHEME)),
                createElementVNode("span", null, toDisplayString(EXAMPLE_FILE_URL))
              ])
            ]),
            _: 1
          }, 8, ["visible", "header"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-8 w-full max-w-3xl mx-auto select-none" };
const _hoisted_2 = { class: "grow flex flex-col gap-6 text-neutral-300" };
const _hoisted_3 = { class: "font-inter font-bold text-3xl text-neutral-100 text-center" };
const _hoisted_4 = { class: "text-center text-neutral-400 px-12" };
const _hoisted_5 = { class: "flex gap-2 px-12" };
const _hoisted_6 = {
  key: 0,
  class: "px-12"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InstallLocationPicker",
  props: /* @__PURE__ */ mergeModels({
    device: {}
  }, {
    "installPath": { required: true },
    "installPathModifiers": {},
    "pathError": { required: true },
    "pathErrorModifiers": {},
    "migrationSourcePath": {},
    "migrationSourcePathModifiers": {},
    "migrationItemIds": {},
    "migrationItemIdsModifiers": {},
    "pythonMirror": {
      default: ""
    },
    "pythonMirrorModifiers": {},
    "pypiMirror": {
      default: ""
    },
    "pypiMirrorModifiers": {},
    "torchMirror": {
      default: ""
    },
    "torchMirrorModifiers": {}
  }),
  emits: ["update:installPath", "update:pathError", "update:migrationSourcePath", "update:migrationItemIds", "update:pythonMirror", "update:pypiMirror", "update:torchMirror"],
  setup(__props) {
    const { t } = useI18n();
    const installPath = useModel(__props, "installPath");
    const pathError = useModel(__props, "pathError");
    const migrationSourcePath = useModel(__props, "migrationSourcePath");
    const migrationItemIds = useModel(__props, "migrationItemIds");
    const pythonMirror = useModel(__props, "pythonMirror");
    const pypiMirror = useModel(__props, "pypiMirror");
    const torchMirror = useModel(__props, "torchMirror");
    const pathExists = ref(false);
    const nonDefaultDrive = ref(false);
    const inputTouched = ref(false);
    const activeAccordionIndex = ref(void 0);
    const electron = electronAPI();
    const getTorchMirrorItem = /* @__PURE__ */ __name((device) => {
      const settingId = "Comfy-Desktop.UV.TorchInstallMirror";
      switch (device) {
        case "mps":
          return {
            settingId,
            mirror: TorchMirrorUrl.NightlyCpu,
            fallbackMirror: TorchMirrorUrl.NightlyCpu
          };
        case "nvidia":
          return {
            settingId,
            mirror: TorchMirrorUrl.Cuda,
            fallbackMirror: TorchMirrorUrl.Cuda
          };
        case "cpu":
        default:
          return {
            settingId,
            mirror: PYPI_MIRROR.mirror,
            fallbackMirror: PYPI_MIRROR.fallbackMirror
          };
      }
    }, "getTorchMirrorItem");
    const userIsInChina = ref(false);
    const useFallbackMirror = /* @__PURE__ */ __name((mirror) => ({
      ...mirror,
      mirror: mirror.fallbackMirror
    }), "useFallbackMirror");
    const mirrors = computed(
      () => [
        [PYTHON_MIRROR, pythonMirror],
        [PYPI_MIRROR, pypiMirror],
        [getTorchMirrorItem(__props.device ?? "cpu"), torchMirror]
      ].map(([item, modelValue]) => [
        userIsInChina.value ? useFallbackMirror(item) : item,
        modelValue
      ])
    );
    const validationStates = ref(
      mirrors.value.map(() => ValidationState.IDLE)
    );
    onMounted(async () => {
      const paths = await electron.getSystemPaths();
      installPath.value = paths.defaultInstallPath;
      await validatePath(paths.defaultInstallPath);
      userIsInChina.value = await isInChina();
    });
    const validatePath = /* @__PURE__ */ __name(async (path) => {
      try {
        pathError.value = "";
        pathExists.value = false;
        nonDefaultDrive.value = false;
        const validation = await electron.validateInstallPath(path ?? "");
        if (!validation.isValid) {
          const errors = [];
          if (validation.cannotWrite) errors.push(t("install.cannotWrite"));
          if (validation.freeSpace < validation.requiredSpace) {
            const requiredGB = validation.requiredSpace / 1024 / 1024 / 1024;
            errors.push(`${t("install.insufficientFreeSpace")}: ${requiredGB} GB`);
          }
          if (validation.parentMissing) errors.push(t("install.parentMissing"));
          if (validation.isOneDrive) errors.push(t("install.isOneDrive"));
          if (validation.error)
            errors.push(`${t("install.unhandledError")}: ${validation.error}`);
          pathError.value = errors.join("\n");
        }
        if (validation.isNonDefaultDrive) nonDefaultDrive.value = true;
        if (validation.exists) pathExists.value = true;
      } catch (error) {
        pathError.value = t("install.pathValidationFailed");
      }
    }, "validatePath");
    const browsePath = /* @__PURE__ */ __name(async () => {
      try {
        const result = await electron.showDirectoryPicker();
        if (result) {
          installPath.value = result;
          await validatePath(result);
        }
      } catch (error) {
        pathError.value = t("install.failedToSelectDirectory");
      }
    }, "browsePath");
    const onFocus = /* @__PURE__ */ __name(async () => {
      if (!inputTouched.value) {
        inputTouched.value = true;
        return;
      }
      await validatePath(installPath.value);
    }, "onFocus");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("install.locationPicker.title")), 1),
          createElementVNode("p", _hoisted_4, toDisplayString(_ctx.$t("install.locationPicker.subtitle")), 1),
          createElementVNode("div", _hoisted_5, [
            createVNode(unref(InputText), {
              modelValue: installPath.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => installPath.value = $event),
                validatePath
              ],
              placeholder: _ctx.$t("install.locationPicker.pathPlaceholder"),
              class: normalizeClass(["flex-1 bg-neutral-800/50 border-neutral-700 text-neutral-200 placeholder:text-neutral-500", { "p-invalid": pathError.value }]),
              onFocus
            }, null, 8, ["modelValue", "placeholder", "class"]),
            createVNode(unref(Button), {
              icon: "pi pi-folder-open",
              severity: "secondary",
              class: "bg-neutral-700 hover:bg-neutral-600 border-0",
              onClick: browsePath
            })
          ]),
          pathError.value || pathExists.value || nonDefaultDrive.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            pathError.value ? (openBlock(), createBlock(unref(Message), {
              key: 0,
              severity: "error",
              class: "whitespace-pre-line w-full"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(pathError.value), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            pathExists.value ? (openBlock(), createBlock(unref(Message), {
              key: 1,
              severity: "warn",
              class: "w-full"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("install.pathExists")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            nonDefaultDrive.value ? (openBlock(), createBlock(unref(Message), {
              key: 2,
              severity: "warn",
              class: "w-full"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("install.nonDefaultDrive")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode(unref(Accordion), {
            value: activeAccordionIndex.value,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => activeAccordionIndex.value = $event),
            multiple: true,
            class: "location-picker-accordion",
            pt: {
              root: "bg-transparent border-0",
              panel: {
                root: "border-0 mb-0"
              },
              header: {
                root: "border-0",
                content: "text-neutral-400 hover:text-neutral-300 px-4 py-2 flex items-center gap-3",
                toggleicon: "text-xs order-first mr-0"
              },
              content: {
                root: "bg-transparent border-0",
                content: "text-neutral-500 text-sm pl-11 pb-3 pt-0"
              }
            }
          }, {
            default: withCtx(() => [
              createVNode(unref(AccordionPanel), { value: "0" }, {
                default: withCtx(() => [
                  createVNode(unref(AccordionHeader), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.locationPicker.migrateFromExisting")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(AccordionContent), null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3, {
                        "source-path": migrationSourcePath.value,
                        "onUpdate:sourcePath": _cache[1] || (_cache[1] = ($event) => migrationSourcePath.value = $event),
                        "migration-item-ids": migrationItemIds.value,
                        "onUpdate:migrationItemIds": _cache[2] || (_cache[2] = ($event) => migrationItemIds.value = $event)
                      }, null, 8, ["source-path", "migration-item-ids"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(AccordionPanel), { value: "1" }, {
                default: withCtx(() => [
                  createVNode(unref(AccordionHeader), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.locationPicker.chooseDownloadServers")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(AccordionContent), null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(mirrors.value, ([item, modelValue], index) => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: item.settingId + item.mirror
                        }, [
                          index > 0 ? (openBlock(), createBlock(unref(Divider), {
                            key: 0,
                            class: "my-8"
                          })) : createCommentVNode("", true),
                          createVNode(_sfc_main$2, {
                            modelValue: modelValue.value,
                            "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => modelValue.value = $event, "onUpdate:modelValue"),
                            item,
                            onStateChange: /* @__PURE__ */ __name(($event) => validationStates.value[index] = $event, "onStateChange")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "item", "onStateChange"])
                        ], 64);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"])
        ])
      ]);
    };
  }
});
const InstallLocationPicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1da4f95a"]]);
const _hoisted_1 = { class: "w-full h-full flex flex-col" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InstallView",
  setup(__props) {
    const device = ref(null);
    const installPath = ref("");
    const pathError = ref("");
    const migrationSourcePath = ref("");
    const migrationItemIds = ref([]);
    const autoUpdate = ref(true);
    const allowMetrics = ref(true);
    const pythonMirror = ref("");
    const pypiMirror = ref("");
    const torchMirror = ref("");
    const currentStep = ref("1");
    const highestStep = ref(0);
    const handleStepChange = /* @__PURE__ */ __name((value) => {
      setHighestStep(value);
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: value
      });
    }, "handleStepChange");
    const setHighestStep = /* @__PURE__ */ __name((value) => {
      const int = typeof value === "number" ? value : parseInt(value, 10);
      if (!isNaN(int) && int > highestStep.value) highestStep.value = int;
    }, "setHighestStep");
    const hasError = computed(() => pathError.value !== "");
    const noGpu = computed(() => typeof device.value !== "string");
    const regex = /^Insufficient space - minimum free space: \d+ GB$/;
    const canProceed = computed(() => {
      switch (currentStep.value) {
        case "1":
          return typeof device.value === "string";
        case "2":
          return pathError.value === "" || regex.test(pathError.value);
        case "3":
          return !hasError.value;
        default:
          return false;
      }
    });
    const goToNextStep = /* @__PURE__ */ __name(() => {
      const nextStep = (parseInt(currentStep.value) + 1).toString();
      currentStep.value = nextStep;
      setHighestStep(nextStep);
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: nextStep
      });
    }, "goToNextStep");
    const goToPreviousStep = /* @__PURE__ */ __name(() => {
      const prevStep = (parseInt(currentStep.value) - 1).toString();
      currentStep.value = prevStep;
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: prevStep
      });
    }, "goToPreviousStep");
    const electron = electronAPI();
    const router = useRouter();
    const install = /* @__PURE__ */ __name(async () => {
      const options = {
        installPath: installPath.value,
        autoUpdate: autoUpdate.value,
        allowMetrics: allowMetrics.value,
        migrationSourcePath: migrationSourcePath.value,
        migrationItemIds: toRaw(migrationItemIds.value),
        pythonMirror: pythonMirror.value,
        pypiMirror: pypiMirror.value,
        torchMirror: torchMirror.value,
        // @ts-expect-error fixme ts strict error
        device: device.value
      };
      electron.installComfyUI(options);
      const nextPage = options.device === "unsupported" ? "/manual-configuration" : "/server-start";
      await router.push(nextPage);
    }, "install");
    onMounted(async () => {
      if (!electron) return;
      const detectedGpu = await electron.Config.getDetectedGpu();
      if (detectedGpu === "mps" || detectedGpu === "nvidia") {
        device.value = detectedGpu;
      }
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: currentStep.value,
        gpu: detectedGpu
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(Stepper), {
              value: currentStep.value,
              "onUpdate:value": [
                _cache[10] || (_cache[10] = ($event) => currentStep.value = $event),
                handleStepChange
              ],
              class: "flex flex-col h-full"
            }, {
              default: withCtx(() => [
                createVNode(unref(StepPanels), {
                  class: "flex-1 overflow-auto",
                  style: { scrollbarGutter: "stable" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(StepPanel), {
                      value: "1",
                      class: "flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          device: device.value,
                          "onUpdate:device": _cache[0] || (_cache[0] = ($event) => device.value = $event)
                        }, null, 8, ["device"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(StepPanel), { value: "2" }, {
                      default: withCtx(() => [
                        createVNode(InstallLocationPicker, {
                          "install-path": installPath.value,
                          "onUpdate:installPath": _cache[1] || (_cache[1] = ($event) => installPath.value = $event),
                          "path-error": pathError.value,
                          "onUpdate:pathError": _cache[2] || (_cache[2] = ($event) => pathError.value = $event),
                          "migration-source-path": migrationSourcePath.value,
                          "onUpdate:migrationSourcePath": _cache[3] || (_cache[3] = ($event) => migrationSourcePath.value = $event),
                          "migration-item-ids": migrationItemIds.value,
                          "onUpdate:migrationItemIds": _cache[4] || (_cache[4] = ($event) => migrationItemIds.value = $event),
                          "python-mirror": pythonMirror.value,
                          "onUpdate:pythonMirror": _cache[5] || (_cache[5] = ($event) => pythonMirror.value = $event),
                          "pypi-mirror": pypiMirror.value,
                          "onUpdate:pypiMirror": _cache[6] || (_cache[6] = ($event) => pypiMirror.value = $event),
                          "torch-mirror": torchMirror.value,
                          "onUpdate:torchMirror": _cache[7] || (_cache[7] = ($event) => torchMirror.value = $event),
                          device: device.value
                        }, null, 8, ["install-path", "path-error", "migration-source-path", "migration-item-ids", "python-mirror", "pypi-mirror", "torch-mirror", "device"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(StepPanel), { value: "3" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          "auto-update": autoUpdate.value,
                          "onUpdate:autoUpdate": _cache[8] || (_cache[8] = ($event) => autoUpdate.value = $event),
                          "allow-metrics": allowMetrics.value,
                          "onUpdate:allowMetrics": _cache[9] || (_cache[9] = ($event) => allowMetrics.value = $event)
                        }, null, 8, ["auto-update", "allow-metrics"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  class: "w-full max-w-2xl my-6 mx-auto",
                  "current-step": currentStep.value,
                  "can-proceed": canProceed.value,
                  "disable-location-step": noGpu.value,
                  "disable-migration-step": noGpu.value || hasError.value || highestStep.value < 2,
                  "disable-settings-step": noGpu.value || hasError.value || highestStep.value < 3,
                  onPrevious: goToPreviousStep,
                  onNext: goToNextStep,
                  onInstall: install
                }, null, 8, ["current-step", "can-proceed", "disable-location-step", "disable-migration-step", "disable-settings-step"])
              ]),
              _: 1
            }, 8, ["value"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const InstallView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ca0018b"]]);
export {
  InstallView as default
};
//# sourceMappingURL=InstallView-DMwKZ3DK.js.map
