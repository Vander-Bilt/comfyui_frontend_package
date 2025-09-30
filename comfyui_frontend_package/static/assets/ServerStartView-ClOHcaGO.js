var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, computed, onMounted, onUnmounted, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, createVNode, createCommentVNode, unref, createTextVNode, toDisplayString } from "vue";
import { cv as ProgressStatus, cw as InstallStage, cx as BaseTerminal, av as electronAPI, _ as _export_sfc } from "./index-CCYTB1GP.js";
import Button from "primevue/button";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$2 } from "./StartupDisplay-CrkckNTE.js";
import { _ as _sfc_main$1 } from "./BaseViewTemplate-Zohw0YYu.js";
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
import "./comfy-brand-mark-XJkMJ9aQ.js";
const _hoisted_1 = { class: "relative min-h-screen" };
const _hoisted_2 = {
  key: 0,
  class: "fixed inset-0 overflow-hidden z-0"
};
const _hoisted_3 = { class: "h-full w-full" };
const _hoisted_4 = {
  key: 1,
  class: "fixed inset-0 bg-neutral-900/80 z-5"
};
const _hoisted_5 = {
  key: 2,
  class: "fixed inset-0 z-8",
  style: { "background": "radial-gradient(\n            ellipse 800px 600px at center,\n            rgba(23, 23, 23, 0.95) 0%,\n            rgba(23, 23, 23, 0.93) 10%,\n            rgba(23, 23, 23, 0.9) 20%,\n            rgba(23, 23, 23, 0.85) 30%,\n            rgba(23, 23, 23, 0.75) 40%,\n            rgba(23, 23, 23, 0.6) 50%,\n            rgba(23, 23, 23, 0.4) 60%,\n            rgba(23, 23, 23, 0.2) 70%,\n            rgba(23, 23, 23, 0.1) 80%,\n            rgba(23, 23, 23, 0.05) 90%,\n            transparent 100%\n          )" }
};
const _hoisted_6 = { class: "relative z-10" };
const _hoisted_7 = {
  key: 0,
  class: "absolute bottom-20 left-0 right-0 flex flex-col items-center gap-4"
};
const _hoisted_8 = { class: "flex gap-4 justify-center" };
const _hoisted_9 = { class: "text-center" };
const _hoisted_10 = {
  key: 1,
  class: "absolute bottom-4 left-4 right-4 max-w-4xl mx-auto z-10"
};
const _hoisted_11 = { class: "bg-neutral-900/95 rounded-lg p-4 border border-neutral-700 h-[300px]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServerStartView",
  setup(__props) {
    const { t } = useI18n();
    const electron = electronAPI();
    const status = ref(ProgressStatus.INITIAL_STATE);
    const electronVersion = ref("");
    const terminalVisible = ref(false);
    const installStage = ref(null);
    const installStageMessage = ref("");
    const installStageProgress = ref(void 0);
    let xterm;
    const updateInstallStage = /* @__PURE__ */ __name((stageInfo) => {
      console.warn("[InstallStage.onUpdate] Received:", {
        stage: stageInfo.stage,
        progress: stageInfo.progress,
        message: stageInfo.message,
        error: stageInfo.error,
        timestamp: stageInfo.timestamp,
        fullInfo: stageInfo
      });
      installStage.value = stageInfo.stage;
      installStageMessage.value = stageInfo.message || "";
      installStageProgress.value = stageInfo.progress;
    }, "updateInstallStage");
    const currentStatusLabel = computed(() => {
      if (installStageMessage.value) {
        return installStageMessage.value;
      }
      return t(`serverStart.process.${status.value}`);
    });
    const isError = computed(
      () => status.value === ProgressStatus.ERROR || installStage.value === InstallStage.ERROR
    );
    const isInstallationStage = computed(() => {
      const installationStages = [
        InstallStage.WELCOME_SCREEN,
        InstallStage.INSTALL_OPTIONS_SELECTION,
        InstallStage.CREATING_DIRECTORIES,
        InstallStage.INITIALIZING_CONFIG,
        InstallStage.PYTHON_ENVIRONMENT_SETUP,
        InstallStage.INSTALLING_REQUIREMENTS,
        InstallStage.INSTALLING_PYTORCH,
        InstallStage.INSTALLING_COMFYUI_REQUIREMENTS,
        InstallStage.INSTALLING_MANAGER_REQUIREMENTS,
        InstallStage.MIGRATING_CUSTOM_NODES
      ];
      return installStage.value !== null && installationStages.includes(installStage.value);
    });
    const displayTitle = computed(() => {
      if (isError.value) {
        return t("serverStart.errorMessage");
      }
      if (isInstallationStage.value) {
        return t("serverStart.installation.title");
      }
      return t("serverStart.title");
    });
    const displayStatusText = computed(() => {
      if (isError.value && electronVersion.value) {
        return `v${electronVersion.value}`;
      }
      return currentStatusLabel.value;
    });
    const updateProgress = /* @__PURE__ */ __name(({ status: newStatus }) => {
      status.value = newStatus;
      if (newStatus === ProgressStatus.ERROR) terminalVisible.value = false;
    }, "updateProgress");
    const terminalCreated = /* @__PURE__ */ __name(({ terminal, useAutoSize }, root) => {
      xterm = terminal;
      useAutoSize({ root, autoRows: true, autoCols: true });
      electron.onLogMessage((message) => {
        terminal.write(message);
      });
      terminal.options.cursorBlink = false;
      terminal.options.disableStdin = true;
      terminal.options.cursorInactiveStyle = "block";
    }, "terminalCreated");
    const troubleshoot = /* @__PURE__ */ __name(() => electron.startTroubleshooting(), "troubleshoot");
    const reportIssue = /* @__PURE__ */ __name(() => {
      window.open("https://forum.comfy.org/c/v1-feedback/", "_blank");
    }, "reportIssue");
    const openLogs = /* @__PURE__ */ __name(() => electron.openLogsFolder(), "openLogs");
    let cleanupInstallStageListener;
    onMounted(async () => {
      electron.sendReady();
      electron.onProgressUpdate(updateProgress);
      cleanupInstallStageListener = electron.InstallStage.onUpdate(updateInstallStage);
      const stageInfo = await electron.InstallStage.getCurrent();
      updateInstallStage(stageInfo);
      electronVersion.value = await electron.getElectronVersion();
    });
    onUnmounted(() => {
      xterm?.dispose();
      cleanupInstallStageListener?.();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            !isError.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                createVNode(BaseTerminal, { onCreated: terminalCreated })
              ])
            ])) : createCommentVNode("", true),
            !isError.value ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("", true),
            !isError.value ? (openBlock(), createElementBlock("div", _hoisted_5)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_6, [
              createVNode(_sfc_main$2, {
                title: displayTitle.value,
                "status-text": displayStatusText.value,
                "progress-percentage": installStageProgress.value,
                "hide-progress": isError.value
              }, null, 8, ["title", "status-text", "progress-percentage", "hide-progress"]),
              isError.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createElementVNode("div", _hoisted_8, [
                  createVNode(unref(Button), {
                    icon: "pi pi-flag",
                    label: _ctx.$t("serverStart.reportIssue"),
                    severity: "secondary",
                    onClick: reportIssue
                  }, null, 8, ["label"]),
                  createVNode(unref(Button), {
                    icon: "pi pi-file",
                    label: _ctx.$t("serverStart.openLogs"),
                    severity: "secondary",
                    onClick: openLogs
                  }, null, 8, ["label"]),
                  createVNode(unref(Button), {
                    icon: "pi pi-wrench",
                    label: _ctx.$t("serverStart.troubleshoot"),
                    onClick: troubleshoot
                  }, null, 8, ["label"])
                ]),
                createElementVNode("div", _hoisted_9, [
                  !terminalVisible.value ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "text-sm text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-2 mx-auto",
                    onClick: _cache[0] || (_cache[0] = ($event) => terminalVisible.value = true)
                  }, [
                    _cache[1] || (_cache[1] = createElementVNode("i", { class: "pi pi-search" }, null, -1)),
                    createTextVNode(" " + toDisplayString(_ctx.$t("serverStart.showTerminal")), 1)
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              terminalVisible.value && isError.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createElementVNode("div", _hoisted_11, [
                  createVNode(BaseTerminal, { onCreated: terminalCreated })
                ])
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const ServerStartView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fe68266"]]);
export {
  ServerStartView as default
};
//# sourceMappingURL=ServerStartView-ClOHcaGO.js.map
