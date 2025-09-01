var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, watchEffect, computed, resolveDirective, withDirectives, openBlock, createElementBlock, normalizeStyle, createVNode, unref, createElementVNode, vShow, onMounted, onBeforeUnmount, createBlock, withCtx, renderSlot, createCommentVNode, resolveDynamicComponent, Fragment, renderList, toDisplayString, watch, ref, nextTick, mergeProps, markRaw, onUnmounted, withModifiers, withKeys, normalizeClass, createStaticVNode, Transition, shallowRef, createTextVNode, isRef, toRaw, Teleport, toRefs, useId, readonly, onUpdated, createSlots, inject, provide, mergeModels, useModel, useSlots } from "vue";
import { u as useWorkspaceStore, a as useSettingStore, b as app, s as showNativeSystemMenu, _ as _export_sfc, c as useWorkflowStore, d as useSidebarTabStore, e as useBottomPanelStore, f as useDialogService, g as useCanvasStore, h as useCanvasPositionConversion, i as useElementBounding, j as isComponentWidget, k as isDOMWidget, l as useEventListener, m as useDomWidgetStore, w as whenever, n as useChainCallback, o as useThrottleFn, p as api, r as renderMinimapToCanvas, q as useColorPaletteStore, t as calculateNodeBounds, v as enforceMinimumBounds, x as calculateMinimapScale, y as useRafFn, z as useCommandStore, L as LiteGraph, A as useNodeDefStore, B as isOverNodeInput, C as st, D as normalizeI18nKey, E as isOverNodeOutput, F as LGraphCanvas, G as getItemsColorOption, H as adjustColor, I as isColorable, S as SubgraphNode, J as isLGraphNode, K as useNodeHelpStore, M as useNodeLibrarySidebarTab, N as isLoad3dNode, O as t$2, P as isImageNode, Q as useSelectedLiteGraphItems, R as createBounds, T as useExtensionService, U as useTitleEditorStore, V as LGraphGroup, W as LGraphNode, X as EditableText, Y as defineStore, Z as useMouse, $ as useNodeFrequencyStore, a0 as useNodeBookmarkStore, a1 as highlightQuery, a2 as formatNumberWithSuffix, a3 as NodeSourceType, a4 as NodePreview, a5 as NodeSearchFilter, a6 as SearchFilterChip, a7 as useLitegraphService, a8 as storeToRefs, a9 as LinkReleaseTriggerAction, aa as axios, ab as COMFY_API_BASE_URL, ac as isAbortError, ad as useSystemStatsStore, ae as compareVersions, af as isElectron, ag as stringToLocale, ah as electronAPI, ai as formatVersionAnchor, aj as marked, ak as useUserStore, al as useKeybindingStore, am as usePragmaticDraggable, an as usePragmaticDroppable, ao as useWorkflowThumbnail, ap as useWorkflowService, aq as debounce, ar as useMutationObserver, as as useResizeObserver, at as useWorkflowBookmarkStore, au as useScroll, av as computedWithControl, aw as useExtensionStore, ax as NodeBadgeMode, ay as BadgePosition, az as LGraphBadge, aA as toolkit, aB as useModelToNodeStore, aC as ComfyNodeDefImpl, aD as ComfyModelDef, aE as ComfyWorkflow, aF as te, aG as LGraph, aH as LLink, aI as DragAndScale, aJ as ContextMenu$1, aK as CanvasPointer, aL as isVideoNode, aM as isAudioNode, aN as getStorageValue, aO as setStorageValue, aP as tryOnScopeDispose, aQ as LinkMarkerShape, aR as useExecutionStore, aS as useToastStore, aT as IS_CONTROL_WIDGET, aU as updateControlWidgetLabel, aV as useColorPaletteService, aW as ChangeTracker, aX as UnauthorizedError, aY as __vitePreload, aZ as i18n, a_ as migrateLegacyRerouteNodes, a$ as useQueueSettingsStore, b0 as useQueuePendingTaskCountStore, b1 as useLocalStorage, b2 as useDraggable, b3 as watchDebounced, b4 as useEventBus, b5 as clamp, b6 as appendJsonExt, b7 as useSubgraphNavigationStore, b8 as forEachSubgraphNode, b9 as useMenuItemStore, ba as useDialogStore, bb as useAboutPanelStore, bc as _imports_0, bd as SettingDialogHeader, be as SettingDialogContent, bf as useFirebaseAuthStore, bg as useApiKeyAuthStore, bh as useFirebaseAuthActions, bi as _sfc_main$1b, bj as isNativeWindow, bk as useTitle, bl as useBreakpoints, bm as getAllNonIoNodesInSubgraph, bn as useQueueStore, bo as getExecutionIdsForSelectedNodes, bp as LGraphEventMode, bq as DEFAULT_DARK_COLOR_PALETTE, br as DEFAULT_LIGHT_COLOR_PALETTE, bs as useNodeOutputStore, bt as getDefaultExportFromCjs, bu as config, bv as useStorage, bw as useFavicon, bx as useErrorHandling, by as useModelStore } from "./index-B77VBuPO.js";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import Button from "primevue/button";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import Tabs from "primevue/tabs";
import ButtonGroup from "primevue/buttongroup";
import { Button as Button$1, InputNumber, useToast as useToast$1 } from "primevue";
import Checkbox from "primevue/checkbox";
import Panel from "primevue/panel";
import SelectButton from "primevue/selectbutton";
import Dialog from "primevue/dialog";
import AutoComplete from "primevue/autocomplete";
import Chip from "primevue/chip";
import Tag from "primevue/tag";
import OverlayBadge from "primevue/overlaybadge";
import ContextMenu from "primevue/contextmenu";
import ScrollPanel from "primevue/scrollpanel";
import Popover from "primevue/popover";
import Toast from "primevue/toast";
import SplitButton from "primevue/splitbutton";
import InputNumber$1 from "primevue/inputnumber";
import TieredMenu from "primevue/tieredmenu";
import Breadcrumb from "primevue/breadcrumb";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import Divider from "primevue/divider";
import MultiSelect from "primevue/multiselect";
import Select from "primevue/select";
import { u as useKeybindingService } from "./keybindingService-CCOoJetz.js";
import { u as useServerConfigStore } from "./serverConfigStore-Dr7fJpce.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/message";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/dropdown";
import "primevue/textarea";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/tabpanels";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/tabpanel";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/knob";
import "primevue/slider";
import "primevue/password";
import "primevue/skeleton";
import "primevue/tabmenu";
import "primevue/dataview";
import "primevue/column";
import "primevue/datatable";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/galleria";
import "primevue/confirmdialog";
const _hoisted_1$1e = { class: "window-actions-spacer" };
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "MenuHamburger",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const exitFocusMode = /* @__PURE__ */ __name(() => {
      workspaceState.focusMode = false;
    }, "exitFocusMode");
    watchEffect(() => {
      if (settingStore.get("Comfy.UseNewMenu") !== "Disabled") {
        return;
      }
      if (workspaceState.focusMode) {
        app.ui.menuContainer.style.display = "none";
      } else {
        app.ui.menuContainer.style.display = "block";
      }
    });
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const positionCSS = computed(
      () => (
        // 'Bottom' menuSetting shows the hamburger button in the bottom right corner
        // 'Disabled', 'Top' menuSetting shows the hamburger button in the top right corner
        menuSetting.value === "Bottom" ? { bottom: "0px", right: "0px" } : { top: "0px", right: "0px" }
      )
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "comfy-menu-hamburger no-drag",
        style: normalizeStyle(positionCSS.value)
      }, [
        withDirectives(createVNode(unref(Button), {
          icon: "pi pi-bars",
          severity: "secondary",
          text: "",
          size: "large",
          "aria-label": _ctx.$t("menu.showMenu"),
          "aria-live": "assertive",
          onClick: exitFocusMode,
          onContextmenu: unref(showNativeSystemMenu)
        }, null, 8, ["aria-label", "onContextmenu"]), [
          [_directive_tooltip, { value: _ctx.$t("menu.showMenu"), showDelay: 300 }]
        ]),
        withDirectives(createElementVNode("div", _hoisted_1$1e, null, 512), [
          [vShow, menuSetting.value !== "Bottom"]
        ])
      ], 4)), [
        [vShow, unref(workspaceState).focusMode]
      ]);
    };
  }
});
const MenuHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-0831a976"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "UnloadWindowConfirmDialog",
  setup(__props) {
    const settingStore = useSettingStore();
    const workflowStore = useWorkflowStore();
    const handleBeforeUnload = /* @__PURE__ */ __name((event) => {
      if (settingStore.get("Comfy.Window.UnloadConfirmation") && workflowStore.modifiedWorkflows.length > 0) {
        event.preventDefault();
        return true;
      }
      return void 0;
    }, "handleBeforeUnload");
    onMounted(() => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "LiteGraphCanvasSplitterOverlay",
  setup(__props) {
    const settingStore = useSettingStore();
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const unifiedWidth = computed(
      () => settingStore.get("Comfy.Sidebar.UnifiedWidth")
    );
    const sidebarPanelVisible = computed(
      () => useSidebarTabStore().activeSidebarTab !== null
    );
    const bottomPanelVisible = computed(
      () => useBottomPanelStore().bottomPanelVisible
    );
    const activeSidebarTabId = computed(
      () => useSidebarTabStore().activeSidebarTabId
    );
    const sidebarStateKey = computed(() => {
      return unifiedWidth.value ? "unified-sidebar" : activeSidebarTabId.value ?? "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Splitter), {
        key: sidebarStateKey.value,
        class: "splitter-overlay-root splitter-overlay",
        "pt:gutter": sidebarPanelVisible.value ? "" : "hidden",
        "state-key": sidebarStateKey.value,
        "state-storage": "local"
      }, {
        default: withCtx(() => [
          sidebarLocation.value === "left" ? withDirectives((openBlock(), createBlock(unref(SplitterPanel), {
            key: 0,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true),
          createVNode(unref(SplitterPanel), { size: 100 }, {
            default: withCtx(() => [
              createVNode(unref(Splitter), {
                class: "splitter-overlay max-w-full",
                layout: "vertical",
                "pt:gutter": bottomPanelVisible.value ? "" : "hidden",
                "state-key": "bottom-panel-splitter",
                "state-storage": "local"
              }, {
                default: withCtx(() => [
                  createVNode(unref(SplitterPanel), { class: "graph-canvas-panel relative" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "graph-canvas-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  withDirectives(createVNode(unref(SplitterPanel), { class: "bottom-panel" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "bottom-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }, 512), [
                    [vShow, bottomPanelVisible.value]
                  ])
                ]),
                _: 3
              }, 8, ["pt:gutter"])
            ]),
            _: 3
          }),
          sidebarLocation.value === "right" ? withDirectives((openBlock(), createBlock(unref(SplitterPanel), {
            key: 1,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["pt:gutter", "state-key"]);
    };
  }
});
const LiteGraphCanvasSplitterOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-480c68de"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "ExtensionSlot",
  props: {
    extension: {}
  },
  setup(__props) {
    const props = __props;
    const mountCustomExtension = /* @__PURE__ */ __name((extension, el) => {
      extension.render(el);
    }, "mountCustomExtension");
    onBeforeUnmount(() => {
      if (props.extension.type === "custom" && props.extension.destroy) {
        props.extension.destroy();
      }
    });
    return (_ctx, _cache) => {
      return _ctx.extension.type === "vue" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.extension.component), { key: 0 })) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: /* @__PURE__ */ __name((el) => {
          if (el)
            mountCustomExtension(
              props.extension,
              el
            );
        }, "ref")
      }, null, 512));
    };
  }
});
const _hoisted_1$1d = { class: "flex flex-col h-full" };
const _hoisted_2$q = { class: "w-full flex justify-between" };
const _hoisted_3$k = { class: "tabs-container" };
const _hoisted_4$h = { class: "font-bold" };
const _hoisted_5$c = { class: "flex items-center gap-2" };
const _hoisted_6$b = { class: "flex-grow h-0" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "BottomPanel",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    const dialogService = useDialogService();
    const { t: t2 } = useI18n();
    const isShortcutsTabActive = computed(() => {
      const activeTabId = bottomPanelStore.activeBottomPanelTabId;
      return activeTabId === "shortcuts-essentials" || activeTabId === "shortcuts-view-controls";
    });
    const shouldCapitalizeTab = /* @__PURE__ */ __name((tabId) => {
      return tabId !== "shortcuts-essentials" && tabId !== "shortcuts-view-controls";
    }, "shouldCapitalizeTab");
    const getTabDisplayTitle = /* @__PURE__ */ __name((tab) => {
      const title = tab.titleKey ? t2(tab.titleKey) : tab.title || "";
      return shouldCapitalizeTab(tab.id) ? title.toUpperCase() : title;
    }, "getTabDisplayTitle");
    const openKeybindingSettings = /* @__PURE__ */ __name(async () => {
      dialogService.showSettingsDialog("keybinding");
    }, "openKeybindingSettings");
    const closeBottomPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.activePanel = null;
    }, "closeBottomPanel");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1d, [
        (openBlock(), createBlock(unref(Tabs), {
          key: _ctx.$i18n.locale,
          value: unref(bottomPanelStore).activeBottomPanelTabId,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(bottomPanelStore).activeBottomPanelTabId = $event)
        }, {
          default: withCtx(() => [
            createVNode(unref(TabList), { "pt:tab-list": "border-none" }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2$q, [
                  createElementVNode("div", _hoisted_3$k, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(bottomPanelStore).bottomPanelTabs, (tab) => {
                      return openBlock(), createBlock(unref(Tab), {
                        key: tab.id,
                        value: tab.id,
                        class: "p-3 border-none"
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", _hoisted_4$h, toDisplayString(getTabDisplayTitle(tab)), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  createElementVNode("div", _hoisted_5$c, [
                    isShortcutsTabActive.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      label: _ctx.$t("shortcuts.manageShortcuts"),
                      icon: "pi pi-cog",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: openKeybindingSettings
                    }, null, 8, ["label"])) : createCommentVNode("", true),
                    createVNode(unref(Button), {
                      class: "justify-self-end",
                      icon: "pi pi-times",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: closeBottomPanel
                    })
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"])),
        createElementVNode("div", _hoisted_6$b, [
          unref(bottomPanelStore).bottomPanelVisible && unref(bottomPanelStore).activeBottomPanelTab ? (openBlock(), createBlock(_sfc_main$17, {
            key: 0,
            extension: unref(bottomPanelStore).activeBottomPanelTab
          }, null, 8, ["extension"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
function useAbsolutePosition(options = {}) {
  const { useTransform = false } = options;
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { canvasPosToClientPos, update: updateCanvasPosition } = useCanvasPositionConversion(lgCanvas.canvas, lgCanvas);
  const settingStore = useSettingStore();
  watch(
    [
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => settingStore.get("Comfy.Sidebar.Size"),
      () => settingStore.get("Comfy.UseNewMenu")
    ],
    () => updateCanvasPosition(),
    { flush: "post" }
  );
  const style = ref({});
  const computeStyle = /* @__PURE__ */ __name((position) => {
    const { pos, size, scale = lgCanvas.ds.scale } = position;
    const [left, top] = canvasPosToClientPos(pos);
    const [width, height] = size;
    return useTransform ? {
      position: "fixed",
      transformOrigin: "0 0",
      transform: `scale(${scale})`,
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    } : {
      position: "fixed",
      left: `${left}px`,
      top: `${top}px`,
      width: `${width * scale}px`,
      height: `${height * scale}px`
    };
  }, "computeStyle");
  const updatePosition = /* @__PURE__ */ __name((config2) => {
    style.value = computeStyle(config2);
  }, "updatePosition");
  return {
    style,
    updatePosition
  };
}
__name(useAbsolutePosition, "useAbsolutePosition");
function intersect(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  if (x1 >= x2 || y1 >= y2) {
    return null;
  }
  return [x1, y1, x2 - x1, y2 - y1];
}
__name(intersect, "intersect");
const useDomClipping = /* @__PURE__ */ __name((options = {}) => {
  const style = ref({});
  const { margin = 4 } = options;
  const calculateClipPath = /* @__PURE__ */ __name((elementRect, canvasRect, isSelected, selectedArea) => {
    if (!isSelected && selectedArea) {
      const { scale, offset } = selectedArea;
      const intersection = intersect(
        {
          x: elementRect.left - canvasRect.left,
          y: elementRect.top - canvasRect.top,
          width: elementRect.width,
          height: elementRect.height
        },
        {
          x: (selectedArea.x + offset[0] - margin) * scale,
          y: (selectedArea.y + offset[1] - margin) * scale,
          width: (selectedArea.width + 2 * margin) * scale,
          height: (selectedArea.height + 2 * margin) * scale
        }
      );
      if (!intersection) {
        return "";
      }
      const clipX = (intersection[0] - elementRect.left + canvasRect.left) / scale + "px";
      const clipY = (intersection[1] - elementRect.top + canvasRect.top) / scale + "px";
      const clipWidth = intersection[2] / scale + "px";
      const clipHeight = intersection[3] / scale + "px";
      return `polygon(0% 0%, 0% 100%, ${clipX} 100%, ${clipX} ${clipY}, calc(${clipX} + ${clipWidth}) ${clipY}, calc(${clipX} + ${clipWidth}) calc(${clipY} + ${clipHeight}), ${clipX} calc(${clipY} + ${clipHeight}), ${clipX} 100%, 100% 100%, 100% 0%)`;
    }
    return "";
  }, "calculateClipPath");
  const updateClipPath = /* @__PURE__ */ __name((element, canvasElement, isSelected, selectedArea) => {
    const elementRect = element.getBoundingClientRect();
    const canvasRect = canvasElement.getBoundingClientRect();
    const clipPath = calculateClipPath(
      elementRect,
      canvasRect,
      isSelected,
      selectedArea
    );
    style.value = {
      clipPath: clipPath || "none",
      willChange: "clip-path"
    };
  }, "updateClipPath");
  return {
    style,
    updateClipPath
  };
}, "useDomClipping");
const _hoisted_1$1c = ["title"];
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "DomWidget",
  props: {
    widgetState: {}
  },
  emits: ["update:widgetValue"],
  setup(__props, { emit: __emit }) {
    const widget = __props.widgetState.widget;
    const emit = __emit;
    const widgetElement = ref();
    const style = ref({});
    const { style: positionStyle, updatePosition } = useAbsolutePosition({
      useTransform: true
    });
    const { style: clippingStyle, updateClipPath } = useDomClipping();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const enableDomClipping = computed(
      () => settingStore.get("Comfy.DOMClippingEnabled")
    );
    const updateDomClipping = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas || !widgetElement.value) return;
      const selectedNode = Object.values(lgCanvas.selected_nodes ?? {})[0];
      if (!selectedNode) {
        updateClipPath(widgetElement.value, lgCanvas.canvas, false, void 0);
        return;
      }
      const isSelected = selectedNode === widget.node;
      const renderArea = selectedNode?.renderArea;
      const offset = lgCanvas.ds.offset;
      const scale = lgCanvas.ds.scale;
      const selectedAreaConfig = renderArea ? {
        x: renderArea[0],
        y: renderArea[1],
        width: renderArea[2],
        height: renderArea[3],
        scale,
        offset: [offset[0], offset[1]]
      } : void 0;
      updateClipPath(
        widgetElement.value,
        lgCanvas.canvas,
        isSelected,
        selectedAreaConfig
      );
    }, "updateDomClipping");
    const { left, top } = useElementBounding(canvasStore.getCanvas().canvas);
    watch(
      [() => __props.widgetState, left, top],
      ([widgetState, _, __]) => {
        updatePosition(widgetState);
        if (enableDomClipping.value) {
          updateDomClipping();
        }
        style.value = {
          ...positionStyle.value,
          ...enableDomClipping.value ? clippingStyle.value : {},
          zIndex: widgetState.zIndex,
          pointerEvents: widgetState.readonly || widget.computedDisabled ? "none" : "auto",
          opacity: widget.computedDisabled ? 0.5 : 1
        };
      },
      { deep: true }
    );
    watch(
      () => __props.widgetState.visible,
      (newVisible, oldVisible) => {
        if (!newVisible && oldVisible) {
          widget.options.onHide?.(widget);
        }
      }
    );
    const setupDOMEventListeners = /* @__PURE__ */ __name(() => {
      if (!isDOMWidget(widget) || !__props.widgetState.visible) return;
      if (widget.element.blur) {
        useEventListener(document, "mousedown", (event) => {
          if (!widget.element.contains(event.target)) {
            widget.element.blur();
          }
        });
      }
      for (const evt of widget.options.selectOn ?? ["focus", "click"]) {
        useEventListener(widget.element, evt, () => {
          const lgCanvas = canvasStore.canvas;
          lgCanvas?.selectNode(widget.node);
          lgCanvas?.bringToFront(widget.node);
        });
      }
    }, "setupDOMEventListeners");
    watch(
      () => __props.widgetState.visible,
      (visible) => {
        if (visible) {
          setupDOMEventListeners();
        }
      },
      { immediate: true }
    );
    const inputSpec = widget.node.constructor.nodeData;
    const tooltip = inputSpec?.inputs?.[widget.name]?.tooltip;
    const mountElementIfVisible = /* @__PURE__ */ __name(() => {
      if (__props.widgetState.visible && isDOMWidget(widget) && widgetElement.value) {
        if (!widgetElement.value.contains(widget.element)) {
          widgetElement.value.appendChild(widget.element);
        }
      }
    }, "mountElementIfVisible");
    onMounted(() => {
      nextTick(() => {
        mountElementIfVisible();
      }).catch((error) => {
        console.error("Error mounting DOM widget element:", error);
      });
    });
    watch(
      () => __props.widgetState.visible,
      () => {
        mountElementIfVisible();
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "widgetElement",
        ref: widgetElement,
        class: "dom-widget",
        title: unref(tooltip),
        style: normalizeStyle(style.value)
      }, [
        unref(isComponentWidget)(unref(widget)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(widget).component), mergeProps({
          key: 0,
          "model-value": unref(widget).value,
          widget: unref(widget)
        }, unref(widget).props, {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:widgetValue", $event))
        }), null, 16, ["model-value", "widget"])) : createCommentVNode("", true)
      ], 12, _hoisted_1$1c)), [
        [vShow, _ctx.widgetState.visible]
      ]);
    };
  }
});
const DomWidget = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-0f0f194c"]]);
const _hoisted_1$1b = { class: "isolate" };
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "DomWidgets",
  setup(__props) {
    const domWidgetStore = useDomWidgetStore();
    const widgetStates = computed(() => [...domWidgetStore.widgetStates.values()]);
    const updateWidgets = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas) return;
      const lowQuality = lgCanvas.low_quality;
      const currentGraph = lgCanvas.graph;
      for (const widgetState of widgetStates.value) {
        const widget = widgetState.widget;
        if (!widget.isVisible()) {
          widgetState.visible = false;
          continue;
        }
        const node = widget.node;
        const isInCorrectGraph = currentGraph?.nodes.includes(node);
        widgetState.visible = !!isInCorrectGraph && lgCanvas.isNodeVisible(node) && !(widget.options.hideOnZoom && lowQuality);
        if (widgetState.visible && node) {
          const margin = widget.margin;
          widgetState.pos = [node.pos[0] + margin, node.pos[1] + margin + widget.y];
          widgetState.size = [
            (widget.width ?? node.width) - margin * 2,
            (widget.computedHeight ?? 50) - margin * 2
          ];
          widgetState.zIndex = lgCanvas.graph?.nodes.indexOf(node) ?? -1;
          widgetState.readonly = lgCanvas.read_only;
        }
      }
    }, "updateWidgets");
    const canvasStore = useCanvasStore();
    whenever(
      () => canvasStore.canvas,
      (canvas) => canvas.onDrawForeground = useChainCallback(
        canvas.onDrawForeground,
        updateWidgets
      ),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1b, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(widgetStates.value, (widgetState) => {
          return openBlock(), createBlock(DomWidget, {
            key: widgetState.widget.id,
            "widget-state": widgetState,
            "onUpdate:widgetValue": /* @__PURE__ */ __name(($event) => widgetState.widget.value = $event, "onUpdate:widgetValue")
          }, null, 8, ["widget-state", "onUpdate:widgetValue"]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$1a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$z(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1a, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "6",
        cy: "19",
        r: "3"
      }),
      createElementVNode("path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3" }),
      createElementVNode("circle", {
        cx: "18",
        cy: "5",
        r: "3"
      })
    ], -1)
  ]));
}
__name(render$z, "render$z");
const __unplugin_components_5$1 = markRaw({ name: "lucide-route-off", render: render$z });
const _hoisted_1$19 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$y(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$19, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
__name(render$y, "render$y");
const __unplugin_components_4$2 = markRaw({ name: "lucide-lightbulb", render: render$y });
const _hoisted_1$18 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$x(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$18, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
__name(render$x, "render$x");
const __unplugin_components_0$c = markRaw({ name: "lucide-chevron-down", render: render$x });
const _hoisted_1$17 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$w(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$17, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }),
      createElementVNode("path", { d: "M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" })
    ], -1)
  ]));
}
__name(render$w, "render$w");
const __unplugin_components_2$4 = markRaw({ name: "lucide-focus", render: render$w });
const _hoisted_1$16 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$16, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }),
      createElementVNode("path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
    ], -1)
  ]));
}
__name(render$v, "render$v");
const __unplugin_components_1$7 = markRaw({ name: "lucide-hand", render: render$v });
const _hoisted_1$15 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$u(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$15, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
    }, null, -1)
  ]));
}
__name(render$u, "render$u");
const __unplugin_components_0$b = markRaw({ name: "lucide-mouse-pointer2", render: render$u });
function useCanvasInteractions() {
  const settingStore = useSettingStore();
  const isStandardNavMode = computed(
    () => settingStore.get("Comfy.Canvas.NavigationMode") === "standard"
  );
  const handleWheel = /* @__PURE__ */ __name((event) => {
    if (isStandardNavMode.value && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      forwardEventToCanvas(event);
      return;
    }
    if (!isStandardNavMode.value) {
      event.preventDefault();
      forwardEventToCanvas(event);
      return;
    }
  }, "handleWheel");
  const forwardEventToCanvas = /* @__PURE__ */ __name((event) => {
    const canvasEl = app.canvas?.canvas;
    if (!canvasEl) return;
    const EventConstructor = event.constructor;
    const newEvent = new EventConstructor(event.type, event);
    canvasEl.dispatchEvent(newEvent);
  }, "forwardEventToCanvas");
  return {
    handleWheel,
    forwardEventToCanvas
  };
}
__name(useCanvasInteractions, "useCanvasInteractions");
function useZoomControls() {
  const isModalVisible = ref(false);
  const showModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = true;
  }, "showModal");
  const hideModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = false;
  }, "hideModal");
  const toggleModal = /* @__PURE__ */ __name(() => {
    isModalVisible.value = !isModalVisible.value;
  }, "toggleModal");
  const hasActivePopup = computed(() => isModalVisible.value);
  return {
    isModalVisible,
    showModal,
    hideModal,
    toggleModal,
    hasActivePopup
  };
}
__name(useZoomControls, "useZoomControls");
function useMinimapGraph(graph, onGraphChanged) {
  const nodeStatesCache = /* @__PURE__ */ new Map();
  const linksCache = ref("");
  const lastNodeCount = ref(0);
  const updateFlags = ref({
    bounds: false,
    nodes: false,
    connections: false,
    viewport: false
  });
  const originalCallbacksMap = /* @__PURE__ */ new Map();
  const handleGraphChangedThrottled = useThrottleFn(() => {
    onGraphChanged();
  }, 500);
  const setupEventListeners = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!g) return;
    if (originalCallbacksMap.has(g.id)) {
      return;
    }
    const originalCallbacks = {
      onNodeAdded: g.onNodeAdded,
      onNodeRemoved: g.onNodeRemoved,
      onConnectionChange: g.onConnectionChange
    };
    originalCallbacksMap.set(g.id, originalCallbacks);
    g.onNodeAdded = function(node) {
      originalCallbacks.onNodeAdded?.call(this, node);
      void handleGraphChangedThrottled();
    };
    g.onNodeRemoved = function(node) {
      originalCallbacks.onNodeRemoved?.call(this, node);
      nodeStatesCache.delete(node.id);
      void handleGraphChangedThrottled();
    };
    g.onConnectionChange = function(node) {
      originalCallbacks.onConnectionChange?.call(this, node);
      void handleGraphChangedThrottled();
    };
  }, "setupEventListeners");
  const cleanupEventListeners = /* @__PURE__ */ __name((oldGraph) => {
    const g = oldGraph || graph.value;
    if (!g) return;
    const originalCallbacks = originalCallbacksMap.get(g.id);
    if (!originalCallbacks) {
      console.error(
        "Attempted to cleanup event listeners for graph that was never set up"
      );
      return;
    }
    g.onNodeAdded = originalCallbacks.onNodeAdded;
    g.onNodeRemoved = originalCallbacks.onNodeRemoved;
    g.onConnectionChange = originalCallbacks.onConnectionChange;
    originalCallbacksMap.delete(g.id);
  }, "cleanupEventListeners");
  const checkForChangesInternal = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!g) return false;
    let structureChanged = false;
    let positionChanged = false;
    let connectionChanged = false;
    if (g._nodes.length !== lastNodeCount.value) {
      structureChanged = true;
      lastNodeCount.value = g._nodes.length;
    }
    for (const node of g._nodes) {
      const key = node.id;
      const currentState = `${node.pos[0]},${node.pos[1]},${node.size[0]},${node.size[1]}`;
      if (nodeStatesCache.get(key) !== currentState) {
        positionChanged = true;
        nodeStatesCache.set(key, currentState);
      }
    }
    const currentLinks = JSON.stringify(g.links || {});
    if (currentLinks !== linksCache.value) {
      connectionChanged = true;
      linksCache.value = currentLinks;
    }
    const currentNodeIds = new Set(g._nodes.map((n) => n.id));
    for (const [nodeId] of nodeStatesCache) {
      if (!currentNodeIds.has(nodeId)) {
        nodeStatesCache.delete(nodeId);
        structureChanged = true;
      }
    }
    if (structureChanged || positionChanged) {
      updateFlags.value.bounds = true;
      updateFlags.value.nodes = true;
    }
    if (connectionChanged) {
      updateFlags.value.connections = true;
    }
    return structureChanged || positionChanged || connectionChanged;
  }, "checkForChangesInternal");
  const init = /* @__PURE__ */ __name(() => {
    setupEventListeners();
    api.addEventListener("graphChanged", handleGraphChangedThrottled);
  }, "init");
  const destroy = /* @__PURE__ */ __name(() => {
    cleanupEventListeners();
    api.removeEventListener("graphChanged", handleGraphChangedThrottled);
    nodeStatesCache.clear();
  }, "destroy");
  const clearCache = /* @__PURE__ */ __name(() => {
    nodeStatesCache.clear();
    linksCache.value = "";
    lastNodeCount.value = 0;
  }, "clearCache");
  return {
    updateFlags,
    setupEventListeners,
    cleanupEventListeners,
    checkForChanges: checkForChangesInternal,
    init,
    destroy,
    clearCache
  };
}
__name(useMinimapGraph, "useMinimapGraph");
function useMinimapInteraction(containerRef, bounds, scale, width, height, centerViewOn, canvas) {
  const isDragging = ref(false);
  const containerRect = ref({
    left: 0,
    top: 0,
    width,
    height
  });
  const updateContainerRect = /* @__PURE__ */ __name(() => {
    if (!containerRef.value) return;
    const rect = containerRef.value.getBoundingClientRect();
    containerRect.value = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
  }, "updateContainerRect");
  const handlePointerDown = /* @__PURE__ */ __name((e) => {
    isDragging.value = true;
    updateContainerRect();
    handlePointerMove(e);
  }, "handlePointerDown");
  const handlePointerMove = /* @__PURE__ */ __name((e) => {
    if (!isDragging.value || !canvas.value) return;
    const x = e.clientX - containerRect.value.left;
    const y = e.clientY - containerRect.value.top;
    const offsetX = (width - bounds.value.width * scale.value) / 2;
    const offsetY = (height - bounds.value.height * scale.value) / 2;
    const worldX = (x - offsetX) / scale.value + bounds.value.minX;
    const worldY = (y - offsetY) / scale.value + bounds.value.minY;
    centerViewOn(worldX, worldY);
  }, "handlePointerMove");
  const handlePointerUp = /* @__PURE__ */ __name(() => {
    isDragging.value = false;
  }, "handlePointerUp");
  const handleWheel = /* @__PURE__ */ __name((e) => {
    e.preventDefault();
    const c = canvas.value;
    if (!c) return;
    if (containerRect.value.left === 0 && containerRect.value.top === 0 && containerRef.value) {
      updateContainerRect();
    }
    const ds = c.ds;
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = ds.scale * delta;
    const MIN_SCALE = 0.1;
    const MAX_SCALE = 10;
    if (newScale < MIN_SCALE || newScale > MAX_SCALE) return;
    const x = e.clientX - containerRect.value.left;
    const y = e.clientY - containerRect.value.top;
    const offsetX = (width - bounds.value.width * scale.value) / 2;
    const offsetY = (height - bounds.value.height * scale.value) / 2;
    const worldX = (x - offsetX) / scale.value + bounds.value.minX;
    const worldY = (y - offsetY) / scale.value + bounds.value.minY;
    ds.scale = newScale;
    centerViewOn(worldX, worldY);
  }, "handleWheel");
  return {
    isDragging,
    containerRect,
    updateContainerRect,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel
  };
}
__name(useMinimapInteraction, "useMinimapInteraction");
function useMinimapRenderer(canvasRef, graph, bounds, scale, updateFlags, settings, width, height) {
  const needsFullRedraw = ref(true);
  const needsBoundsUpdate = ref(true);
  const renderMinimap = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!canvasRef.value || !g) return;
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;
    if (!g._nodes || g._nodes.length === 0) {
      ctx.clearRect(0, 0, width, height);
      return;
    }
    const needsRedraw = needsFullRedraw.value || updateFlags.value.nodes || updateFlags.value.connections;
    if (needsRedraw) {
      renderMinimapToCanvas(canvasRef.value, g, {
        bounds: bounds.value,
        scale: scale.value,
        settings: {
          nodeColors: settings.nodeColors.value,
          showLinks: settings.showLinks.value,
          showGroups: settings.showGroups.value,
          renderBypass: settings.renderBypass.value,
          renderError: settings.renderError.value
        },
        width,
        height
      });
      needsFullRedraw.value = false;
      updateFlags.value.nodes = false;
      updateFlags.value.connections = false;
    }
  }, "renderMinimap");
  const updateMinimap = /* @__PURE__ */ __name((updateBounds, updateViewport) => {
    if (needsBoundsUpdate.value || updateFlags.value.bounds) {
      updateBounds();
      needsBoundsUpdate.value = false;
      updateFlags.value.bounds = false;
      needsFullRedraw.value = true;
      updateFlags.value.viewport = true;
    }
    if (needsFullRedraw.value || updateFlags.value.nodes || updateFlags.value.connections) {
      renderMinimap();
    }
    if (updateFlags.value.viewport) {
      updateViewport();
      updateFlags.value.viewport = false;
    }
  }, "updateMinimap");
  const forceFullRedraw = /* @__PURE__ */ __name(() => {
    needsFullRedraw.value = true;
    updateFlags.value.bounds = true;
    updateFlags.value.nodes = true;
    updateFlags.value.connections = true;
    updateFlags.value.viewport = true;
  }, "forceFullRedraw");
  return {
    needsFullRedraw,
    needsBoundsUpdate,
    renderMinimap,
    updateMinimap,
    forceFullRedraw
  };
}
__name(useMinimapRenderer, "useMinimapRenderer");
function useMinimapSettings() {
  const settingStore = useSettingStore();
  const colorPaletteStore = useColorPaletteStore();
  const nodeColors = computed(
    () => settingStore.get("Comfy.Minimap.NodeColors")
  );
  const showLinks = computed(() => settingStore.get("Comfy.Minimap.ShowLinks"));
  const showGroups = computed(
    () => settingStore.get("Comfy.Minimap.ShowGroups")
  );
  const renderBypass = computed(
    () => settingStore.get("Comfy.Minimap.RenderBypassState")
  );
  const renderError = computed(
    () => settingStore.get("Comfy.Minimap.RenderErrorState")
  );
  const width = 250;
  const height = 200;
  const isLightTheme = computed(
    () => colorPaletteStore.completedActivePalette.light_theme
  );
  const containerStyles = computed(() => ({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: isLightTheme.value ? "#FAF9F5" : "#15161C",
    border: `1px solid ${isLightTheme.value ? "#ccc" : "#333"}`,
    borderRadius: "8px"
  }));
  const panelStyles = computed(() => ({
    width: `210px`,
    height: `${height}px`,
    backgroundColor: isLightTheme.value ? "#FAF9F5" : "#15161C",
    border: `1px solid ${isLightTheme.value ? "#ccc" : "#333"}`,
    borderRadius: "8px"
  }));
  return {
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    containerStyles,
    panelStyles,
    isLightTheme
  };
}
__name(useMinimapSettings, "useMinimapSettings");
function useCanvasTransformSync(syncFn, options = {}) {
  const { onStart, onStop, autoStart = true } = options;
  const { getCanvas } = useCanvasStore();
  const isActive = ref(false);
  let rafId = null;
  let lastTransform = {
    scale: 0,
    offsetX: 0,
    offsetY: 0
  };
  const hasTransformChanged = /* @__PURE__ */ __name((canvas) => {
    const ds = canvas.ds;
    return ds.scale !== lastTransform.scale || ds.offset[0] !== lastTransform.offsetX || ds.offset[1] !== lastTransform.offsetY;
  }, "hasTransformChanged");
  const sync = /* @__PURE__ */ __name(() => {
    if (!isActive.value) return;
    const canvas = getCanvas();
    if (!canvas) return;
    try {
      if (hasTransformChanged(canvas)) {
        lastTransform = {
          scale: canvas.ds.scale,
          offsetX: canvas.ds.offset[0],
          offsetY: canvas.ds.offset[1]
        };
        syncFn(canvas);
      }
    } catch (error) {
      console.error("Canvas transform sync error:", error);
    }
    rafId = requestAnimationFrame(sync);
  }, "sync");
  const startSync = /* @__PURE__ */ __name(() => {
    if (isActive.value) return;
    isActive.value = true;
    onStart?.();
    lastTransform = { scale: 0, offsetX: 0, offsetY: 0 };
    sync();
  }, "startSync");
  const stopSync = /* @__PURE__ */ __name(() => {
    isActive.value = false;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    onStop?.();
  }, "stopSync");
  onUnmounted(stopSync);
  if (autoStart) {
    startSync();
  }
  return {
    isActive,
    startSync,
    stopSync
  };
}
__name(useCanvasTransformSync, "useCanvasTransformSync");
function useMinimapViewport(canvas, graph, width, height) {
  const bounds = ref({
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    width: 0,
    height: 0
  });
  const scale = ref(1);
  const viewportTransform = ref({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const canvasDimensions = ref({
    width: 0,
    height: 0
  });
  const updateCanvasDimensions = /* @__PURE__ */ __name(() => {
    const c = canvas.value;
    if (!c) return;
    const canvasEl = c.canvas;
    const dpr = window.devicePixelRatio || 1;
    canvasDimensions.value = {
      width: canvasEl.clientWidth || canvasEl.width / dpr,
      height: canvasEl.clientHeight || canvasEl.height / dpr
    };
  }, "updateCanvasDimensions");
  const calculateGraphBounds = /* @__PURE__ */ __name(() => {
    const g = graph.value;
    if (!g || !g._nodes || g._nodes.length === 0) {
      return { minX: 0, minY: 0, maxX: 100, maxY: 100, width: 100, height: 100 };
    }
    const bounds2 = calculateNodeBounds(g._nodes);
    if (!bounds2) {
      return { minX: 0, minY: 0, maxX: 100, maxY: 100, width: 100, height: 100 };
    }
    return enforceMinimumBounds(bounds2);
  }, "calculateGraphBounds");
  const calculateScale = /* @__PURE__ */ __name(() => {
    return calculateMinimapScale(bounds.value, width, height);
  }, "calculateScale");
  const updateViewport = /* @__PURE__ */ __name(() => {
    const c = canvas.value;
    if (!c) return;
    if (canvasDimensions.value.width === 0 || canvasDimensions.value.height === 0) {
      updateCanvasDimensions();
    }
    const ds = c.ds;
    const viewportWidth = canvasDimensions.value.width / ds.scale;
    const viewportHeight = canvasDimensions.value.height / ds.scale;
    const worldX = -ds.offset[0];
    const worldY = -ds.offset[1];
    const centerOffsetX = (width - bounds.value.width * scale.value) / 2;
    const centerOffsetY = (height - bounds.value.height * scale.value) / 2;
    viewportTransform.value = {
      x: (worldX - bounds.value.minX) * scale.value + centerOffsetX,
      y: (worldY - bounds.value.minY) * scale.value + centerOffsetY,
      width: viewportWidth * scale.value,
      height: viewportHeight * scale.value
    };
  }, "updateViewport");
  const updateBounds = /* @__PURE__ */ __name(() => {
    bounds.value = calculateGraphBounds();
    scale.value = calculateScale();
  }, "updateBounds");
  const centerViewOn = /* @__PURE__ */ __name((worldX, worldY) => {
    const c = canvas.value;
    if (!c) return;
    if (canvasDimensions.value.width === 0 || canvasDimensions.value.height === 0) {
      updateCanvasDimensions();
    }
    const ds = c.ds;
    const viewportWidth = canvasDimensions.value.width / ds.scale;
    const viewportHeight = canvasDimensions.value.height / ds.scale;
    ds.offset[0] = -(worldX - viewportWidth / 2);
    ds.offset[1] = -(worldY - viewportHeight / 2);
    c.setDirty(true, true);
  }, "centerViewOn");
  const { startSync: startViewportSync, stopSync: stopViewportSync } = useCanvasTransformSync(updateViewport, { autoStart: false });
  return {
    bounds: computed(() => bounds.value),
    scale: computed(() => scale.value),
    viewportTransform: computed(() => viewportTransform.value),
    canvasDimensions: computed(() => canvasDimensions.value),
    updateCanvasDimensions,
    updateViewport,
    updateBounds,
    centerViewOn,
    startViewportSync,
    stopViewportSync
  };
}
__name(useMinimapViewport, "useMinimapViewport");
function useMinimap() {
  const canvasStore = useCanvasStore();
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const containerRef = ref();
  const canvasRef = ref();
  const minimapRef = ref(null);
  const visible = ref(true);
  const initialized = ref(false);
  const width = 250;
  const height = 200;
  const canvas = computed(() => canvasStore.canvas);
  const graph = computed(() => {
    const activeSubgraph = workflowStore.activeSubgraph;
    return activeSubgraph || canvas.value?.graph;
  });
  const settings = useMinimapSettings();
  const {
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    containerStyles,
    panelStyles
  } = settings;
  const updateOption = /* @__PURE__ */ __name(async (key, value) => {
    await settingStore.set(key, value);
    renderer.forceFullRedraw();
    renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
  }, "updateOption");
  const viewport = useMinimapViewport(canvas, graph, width, height);
  const interaction = useMinimapInteraction(
    containerRef,
    viewport.bounds,
    viewport.scale,
    width,
    height,
    viewport.centerViewOn,
    canvas
  );
  const graphManager = useMinimapGraph(graph, () => {
    renderer.forceFullRedraw();
    renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
  });
  const renderer = useMinimapRenderer(
    canvasRef,
    graph,
    viewport.bounds,
    viewport.scale,
    graphManager.updateFlags,
    settings,
    width,
    height
  );
  const { pause: pauseChangeDetection, resume: resumeChangeDetection } = useRafFn(
    async () => {
      if (visible.value) {
        const hasChanges = await graphManager.checkForChanges();
        if (hasChanges) {
          renderer.updateMinimap(
            viewport.updateBounds,
            viewport.updateViewport
          );
        }
      }
    },
    { immediate: false }
  );
  const init = /* @__PURE__ */ __name(async () => {
    if (initialized.value) return;
    visible.value = settingStore.get("Comfy.Minimap.Visible");
    if (canvas.value && graph.value) {
      graphManager.init();
      if (containerRef.value) {
        interaction.updateContainerRect();
      }
      viewport.updateCanvasDimensions();
      window.addEventListener("resize", interaction.updateContainerRect);
      window.addEventListener("scroll", interaction.updateContainerRect);
      window.addEventListener("resize", viewport.updateCanvasDimensions);
      renderer.forceFullRedraw();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
      viewport.updateViewport();
      if (visible.value) {
        resumeChangeDetection();
        viewport.startViewportSync();
      }
      initialized.value = true;
    }
  }, "init");
  const destroy = /* @__PURE__ */ __name(() => {
    pauseChangeDetection();
    viewport.stopViewportSync();
    graphManager.destroy();
    window.removeEventListener("resize", interaction.updateContainerRect);
    window.removeEventListener("scroll", interaction.updateContainerRect);
    window.removeEventListener("resize", viewport.updateCanvasDimensions);
    initialized.value = false;
  }, "destroy");
  watch(
    canvas,
    async (newCanvas, oldCanvas) => {
      if (oldCanvas) {
        graphManager.cleanupEventListeners();
        pauseChangeDetection();
        viewport.stopViewportSync();
        graphManager.destroy();
        window.removeEventListener("resize", interaction.updateContainerRect);
        window.removeEventListener("scroll", interaction.updateContainerRect);
        window.removeEventListener("resize", viewport.updateCanvasDimensions);
      }
      if (newCanvas && !initialized.value) {
        await init();
      }
    },
    { immediate: true, flush: "post" }
  );
  watch(graph, (newGraph, oldGraph) => {
    if (newGraph && newGraph !== oldGraph) {
      graphManager.cleanupEventListeners(oldGraph || void 0);
      graphManager.setupEventListeners();
      renderer.forceFullRedraw();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
    }
  });
  watch(visible, async (isVisible) => {
    if (isVisible) {
      if (containerRef.value) {
        interaction.updateContainerRect();
      }
      viewport.updateCanvasDimensions();
      renderer.forceFullRedraw();
      await nextTick();
      await nextTick();
      renderer.updateMinimap(viewport.updateBounds, viewport.updateViewport);
      viewport.updateViewport();
      resumeChangeDetection();
      viewport.startViewportSync();
    } else {
      pauseChangeDetection();
      viewport.stopViewportSync();
    }
  });
  const toggle = /* @__PURE__ */ __name(async () => {
    visible.value = !visible.value;
    await settingStore.set("Comfy.Minimap.Visible", visible.value);
  }, "toggle");
  const setMinimapRef = /* @__PURE__ */ __name((ref2) => {
    minimapRef.value = ref2;
  }, "setMinimapRef");
  const viewportStyles = computed(() => {
    const transform = viewport.viewportTransform.value;
    return {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
      width: `${transform.width}px`,
      height: `${transform.height}px`,
      border: `2px solid ${settings.isLightTheme.value ? "#E0E0E0" : "#FFF"}`,
      backgroundColor: `rgba(255, 255, 255, 0.2)`,
      willChange: "transform",
      backfaceVisibility: "hidden",
      perspective: "1000px",
      pointerEvents: "none"
    };
  });
  return {
    visible: computed(() => visible.value),
    initialized: computed(() => initialized.value),
    containerRef,
    canvasRef,
    containerStyles,
    viewportStyles,
    panelStyles,
    width,
    height,
    nodeColors,
    showLinks,
    showGroups,
    renderBypass,
    renderError,
    init,
    destroy,
    toggle,
    renderMinimap: renderer.renderMinimap,
    handlePointerDown: interaction.handlePointerDown,
    handlePointerMove: interaction.handlePointerMove,
    handlePointerUp: interaction.handlePointerUp,
    handleWheel: interaction.handleWheel,
    setMinimapRef,
    updateOption
  };
}
__name(useMinimap, "useMinimap");
const _hoisted_1$14 = {
  key: 0,
  class: "w-[250px] absolute flex justify-center right-2 md:right-11 z-[1300] bottom-[66px] !bg-inherit !border-0"
};
const _hoisted_2$p = { class: "text-sm font-medium block" };
const _hoisted_3$j = { class: "text-sm text-gray-500 block" };
const _hoisted_4$g = { class: "text-sm font-medium block" };
const _hoisted_5$b = { class: "text-sm text-gray-500 block" };
const _hoisted_6$a = { class: "text-sm font-medium block" };
const _hoisted_7$8 = { class: "text-sm text-gray-500 block" };
const _hoisted_8$5 = { class: "text-sm font-medium block" };
const _hoisted_9$4 = { class: "text-sm text-gray-500 block" };
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "ZoomControlsModal",
  props: {
    visible: { type: Boolean }
  },
  setup(__props) {
    const { t: t2 } = useI18n();
    const minimap = useMinimap();
    const settingStore = useSettingStore();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const { formatKeySequence } = useCommandStore();
    const props = __props;
    const interval = ref(null);
    const minimapToggleText = computed(
      () => settingStore.get("Comfy.Minimap.Visible") ? t2("zoomControls.hideMinimap") : t2("zoomControls.showMinimap")
    );
    const applyZoom = /* @__PURE__ */ __name((val) => {
      const inputValue = val.value;
      if (isNaN(inputValue) || inputValue < 1 || inputValue > 1e3) {
        return;
      }
      canvasStore.setAppZoomFromPercentage(inputValue);
    }, "applyZoom");
    const executeCommand = /* @__PURE__ */ __name((command) => {
      void commandStore.execute(command);
    }, "executeCommand");
    const startRepeat = /* @__PURE__ */ __name((command) => {
      if (interval.value) return;
      const cmd = /* @__PURE__ */ __name(() => commandStore.execute(command), "cmd");
      void cmd();
      interval.value = window.setInterval(cmd, 100);
    }, "startRepeat");
    const stopRepeat = /* @__PURE__ */ __name(() => {
      if (interval.value) {
        clearInterval(interval.value);
        interval.value = null;
      }
    }, "stopRepeat");
    const filteredMinimapStyles = computed(() => {
      return {
        ...minimap.containerStyles.value,
        height: void 0,
        width: void 0
      };
    });
    const zoomInCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.ZoomIn"))
    );
    const zoomOutCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.ZoomOut"))
    );
    const zoomToFitCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.FitView"))
    );
    const showMinimapCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.ToggleMinimap"))
    );
    const zoomInput = ref(null);
    const zoomInputContainer = ref(null);
    watch(
      () => props.visible,
      async (newVal) => {
        if (newVal) {
          await nextTick();
          const input = zoomInputContainer.value?.querySelector(
            "input"
          );
          input?.focus();
        }
      }
    );
    return (_ctx, _cache) => {
      return _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$14, [
        createElementVNode("div", {
          class: "bg-white dark-theme:bg-[#2b2b2b] border border-gray-200 dark-theme:border-gray-700 rounded-lg shadow-lg p-4 w-4/5",
          style: normalizeStyle(filteredMinimapStyles.value),
          onClick: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("div", null, [
            createVNode(unref(Button$1), {
              severity: "secondary",
              text: "",
              pt: {
                root: {
                  class: "flex items-center justify-between cursor-pointer p-2 rounded w-full text-left hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                },
                label: {
                  class: "flex flex-col items-start w-full"
                }
              },
              onMousedown: _cache[0] || (_cache[0] = ($event) => startRepeat("Comfy.Canvas.ZoomIn")),
              onMouseup: stopRepeat,
              onMouseleave: stopRepeat
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_2$p, toDisplayString(_ctx.$t("graphCanvasMenu.zoomIn")), 1),
                createElementVNode("span", _hoisted_3$j, toDisplayString(zoomInCommandText.value), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Button$1), {
              severity: "secondary",
              text: "",
              pt: {
                root: {
                  class: "flex items-center justify-between cursor-pointer p-2 rounded w-full text-left hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                },
                label: {
                  class: "flex flex-col items-start w-full"
                }
              },
              onMousedown: _cache[1] || (_cache[1] = ($event) => startRepeat("Comfy.Canvas.ZoomOut")),
              onMouseup: stopRepeat,
              onMouseleave: stopRepeat
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_4$g, toDisplayString(_ctx.$t("graphCanvasMenu.zoomOut")), 1),
                createElementVNode("span", _hoisted_5$b, toDisplayString(zoomOutCommandText.value), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Button$1), {
              severity: "secondary",
              text: "",
              pt: {
                root: {
                  class: "flex items-center justify-between cursor-pointer p-2 rounded w-full text-left hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                },
                label: {
                  class: "flex flex-col items-start w-full"
                }
              },
              onClick: _cache[2] || (_cache[2] = ($event) => executeCommand("Comfy.Canvas.FitView"))
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_6$a, toDisplayString(_ctx.$t("zoomControls.zoomToFit")), 1),
                createElementVNode("span", _hoisted_7$8, toDisplayString(zoomToFitCommandText.value), 1)
              ]),
              _: 1
            }),
            _cache[6] || (_cache[6] = createElementVNode("hr", { class: "border-[#E1DED5] mb-1 dark-theme:border-[#2E3037]" }, null, -1)),
            createVNode(unref(Button$1), {
              severity: "secondary",
              text: "",
              "data-testid": "toggle-minimap-button",
              pt: {
                root: {
                  class: "flex items-center justify-between cursor-pointer p-2 rounded w-full text-left hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                },
                label: {
                  class: "flex flex-col items-start w-full"
                }
              },
              onClick: _cache[3] || (_cache[3] = ($event) => executeCommand("Comfy.Canvas.ToggleMinimap"))
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_8$5, toDisplayString(minimapToggleText.value), 1),
                createElementVNode("span", _hoisted_9$4, toDisplayString(showMinimapCommandText.value), 1)
              ]),
              _: 1
            }),
            _cache[7] || (_cache[7] = createElementVNode("hr", { class: "border-[#E1DED5] mt-1 dark-theme:border-[#2E3037]" }, null, -1)),
            createElementVNode("div", {
              ref_key: "zoomInputContainer",
              ref: zoomInputContainer,
              class: "flex items-center px-2 bg-[#E7E6E6] focus-within:bg-[#F3F3F3] dark-theme:bg-[#8282821A] rounded p-2 zoomInputContainer"
            }, [
              createVNode(unref(InputNumber), {
                ref_key: "zoomInput",
                ref: zoomInput,
                "default-value": unref(canvasStore).appScalePercentage,
                min: 1,
                max: 1e3,
                "show-buttons": false,
                "use-grouping": false,
                unstyled: true,
                "input-class": "flex-1 bg-transparent border-none outline-none text-sm shadow-none my-0 ",
                fluid: "",
                onInput: applyZoom,
                onKeyup: withKeys(applyZoom, ["enter"])
              }, null, 8, ["default-value"]),
              _cache[5] || (_cache[5] = createElementVNode("span", { class: "text-sm text-gray-500 -ml-4" }, "%", -1))
            ], 512)
          ])
        ], 4)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$13 = { class: "inline-flex text-xs" };
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvasMenu",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const { formatKeySequence } = useCommandStore();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const canvasInteractions = useCanvasInteractions();
    const workspaceStore = useWorkspaceStore();
    const minimap = useMinimap();
    const { isModalVisible, toggleModal, hideModal, hasActivePopup } = useZoomControls();
    const stringifiedMinimapStyles = computed(() => {
      const buttonGroupKeys = ["backgroundColor", "borderRadius", ""];
      const buttonKeys = ["backgroundColor", "borderRadius"];
      const additionalButtonStyles = {
        border: "none",
        width: "35px",
        height: "35px",
        "margin-right": "2px",
        "margin-left": "2px"
      };
      const containerStyles = minimap.containerStyles.value;
      const buttonStyles = {
        ...Object.fromEntries(
          Object.entries(containerStyles).filter(
            ([key]) => buttonKeys.includes(key)
          )
        ),
        ...additionalButtonStyles
      };
      const buttonGroupStyles = Object.entries(containerStyles).filter(([key]) => buttonGroupKeys.includes(key)).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      return { buttonStyles, buttonGroupStyles };
    });
    const isCanvasReadOnly = computed(() => canvasStore.canvas?.read_only ?? false);
    const isCanvasUnlocked = computed(() => !isCanvasReadOnly.value);
    const linkHidden = computed(
      () => settingStore.get("Comfy.LinkRenderMode") === LiteGraph.HIDDEN_LINK
    );
    const unlockCommandText = computed(
      () => formatKeySequence(
        commandStore.getCommand("Comfy.Canvas.Unlock")
      ).toUpperCase()
    );
    const lockCommandText = computed(
      () => formatKeySequence(commandStore.getCommand("Comfy.Canvas.Lock")).toUpperCase()
    );
    const fitViewCommandText = computed(
      () => formatKeySequence(
        commandStore.getCommand("Comfy.Canvas.FitView")
      ).toUpperCase()
    );
    const focusCommandText = computed(
      () => formatKeySequence(
        commandStore.getCommand("Workspace.ToggleFocusMode")
      ).toUpperCase()
    );
    const selectButtonClass = computed(
      () => isCanvasUnlocked.value ? "dark-theme:[&:not(:active)]:!bg-[#262729] [&:not(:active)]:!bg-[#E7E6E6]" : ""
    );
    const handButtonClass = computed(
      () => isCanvasReadOnly.value ? "dark-theme:[&:not(:active)]:!bg-[#262729] [&:not(:active)]:!bg-[#E7E6E6]" : ""
    );
    const zoomButtonClass = computed(() => [
      "!w-16",
      isModalVisible.value ? "dark-theme:[&:not(:active)]:!bg-[#262729] [&:not(:active)]:!bg-[#E7E6E6]" : "",
      "hover:dark-theme:!bg-[#262729] hover:!bg-[#E7E6E6]"
    ]);
    const focusButtonClass = computed(() => ({
      "hover:dark-theme:!bg-[#262729] hover:!bg-[#E7E6E6]": true,
      "dark-theme:[&:not(:active)]:!bg-[#262729] [&:not(:active)]:!bg-[#E7E6E6]": workspaceStore.focusMode
    }));
    const selectTooltip = computed(
      () => `${t2("graphCanvasMenu.select")} (${unlockCommandText.value})`
    );
    const handTooltip = computed(
      () => `${t2("graphCanvasMenu.hand")} (${lockCommandText.value})`
    );
    const fitViewTooltip = computed(
      () => `${t2("graphCanvasMenu.fitView")} (${fitViewCommandText.value})`
    );
    const focusModeTooltip = computed(
      () => `${t2("graphCanvasMenu.focusMode")} (${focusCommandText.value})`
    );
    const linkVisibilityTooltip = computed(
      () => linkHidden.value ? t2("graphCanvasMenu.showLinks") : t2("graphCanvasMenu.hideLinks")
    );
    const linkVisibilityAriaLabel = computed(
      () => linkHidden.value ? t2("graphCanvasMenu.showLinks") : t2("graphCanvasMenu.hideLinks")
    );
    const linkVisibleClass = computed(() => [
      linkHidden.value ? "dark-theme:[&:not(:active)]:!bg-[#262729] [&:not(:active)]:!bg-[#E7E6E6]" : "",
      "hover:dark-theme:!bg-[#262729] hover:!bg-[#E7E6E6]"
    ]);
    onMounted(() => {
      canvasStore.initScaleSync();
    });
    onBeforeUnmount(() => {
      canvasStore.cleanupScaleSync();
    });
    return (_ctx, _cache) => {
      const _component_i_lucide58mouse_pointer_2 = __unplugin_components_0$b;
      const _component_i_lucide58hand = __unplugin_components_1$7;
      const _component_i_lucide58focus = __unplugin_components_2$4;
      const _component_i_lucide58chevron_down = __unplugin_components_0$c;
      const _component_i_lucide58lightbulb = __unplugin_components_4$2;
      const _component_i_lucide58route_off = __unplugin_components_5$1;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$13, { visible: unref(isModalVisible) }, null, 8, ["visible"]),
        unref(hasActivePopup) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-[1200]",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(hideModal) && unref(hideModal)(...args))
        })) : createCommentVNode("", true),
        createVNode(unref(ButtonGroup), {
          class: "p-buttongroup-vertical p-1 absolute bottom-4 right-2 md:right-4",
          style: normalizeStyle(stringifiedMinimapStyles.value.buttonGroupStyles),
          onWheel: unref(canvasInteractions).handleWheel
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(unref(Button), {
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              severity: "secondary",
              "aria-label": selectTooltip.value,
              pressed: isCanvasReadOnly.value,
              icon: "i-material-symbols:pan-tool-outline",
              class: normalizeClass(selectButtonClass.value),
              onClick: _cache[1] || (_cache[1] = () => unref(commandStore).execute("Comfy.Canvas.Unlock"))
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58mouse_pointer_2)
              ]),
              _: 1
            }, 8, ["style", "aria-label", "pressed", "class"])), [
              [
                _directive_tooltip,
                selectTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            withDirectives((openBlock(), createBlock(unref(Button), {
              severity: "secondary",
              "aria-label": handTooltip.value,
              pressed: isCanvasUnlocked.value,
              class: normalizeClass(handButtonClass.value),
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.Canvas.Lock"))
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58hand)
              ]),
              _: 1
            }, 8, ["aria-label", "pressed", "class", "style"])), [
              [
                _directive_tooltip,
                handTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            _cache[6] || (_cache[6] = createElementVNode("div", { class: "w-px my-1 bg-[#E1DED5] dark-theme:bg-[#2E3037] mx-2" }, null, -1)),
            withDirectives((openBlock(), createBlock(unref(Button), {
              severity: "secondary",
              icon: "pi pi-expand",
              "aria-label": fitViewTooltip.value,
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              class: "hover:dark-theme:!bg-[#444444] hover:!bg-[#E7E6E6]",
              onClick: _cache[3] || (_cache[3] = () => unref(commandStore).execute("Comfy.Canvas.FitView"))
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58focus)
              ]),
              _: 1
            }, 8, ["aria-label", "style"])), [
              [
                _directive_tooltip,
                fitViewTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            withDirectives((openBlock(), createBlock(unref(Button), {
              ref: "zoomButton",
              severity: "secondary",
              label: unref(t2)("zoomControls.label"),
              class: normalizeClass(zoomButtonClass.value),
              "aria-label": unref(t2)("zoomControls.label"),
              "data-testid": "zoom-controls-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              onClick: unref(toggleModal)
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_1$13, [
                  createElementVNode("span", null, toDisplayString(unref(canvasStore).appScalePercentage) + "%", 1),
                  createVNode(_component_i_lucide58chevron_down)
                ])
              ]),
              _: 1
            }, 8, ["label", "class", "aria-label", "style", "onClick"])), [
              [
                _directive_tooltip,
                unref(t2)("zoomControls.label"),
                void 0,
                { top: true }
              ]
            ]),
            _cache[7] || (_cache[7] = createElementVNode("div", { class: "w-px my-1 bg-[#E1DED5] dark-theme:bg-[#2E3037] mx-2" }, null, -1)),
            withDirectives((openBlock(), createBlock(unref(Button), {
              ref: "focusButton",
              severity: "secondary",
              "aria-label": focusModeTooltip.value,
              "data-testid": "focus-mode-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              class: normalizeClass(focusButtonClass.value),
              onClick: _cache[4] || (_cache[4] = () => unref(commandStore).execute("Workspace.ToggleFocusMode"))
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58lightbulb)
              ]),
              _: 1
            }, 8, ["aria-label", "style", "class"])), [
              [
                _directive_tooltip,
                focusModeTooltip.value,
                void 0,
                { top: true }
              ]
            ]),
            withDirectives((openBlock(), createBlock(unref(Button), {
              severity: "secondary",
              class: normalizeClass(linkVisibleClass.value),
              "aria-label": linkVisibilityAriaLabel.value,
              "data-testid": "toggle-link-visibility-button",
              style: normalizeStyle(stringifiedMinimapStyles.value.buttonStyles),
              onClick: _cache[5] || (_cache[5] = () => unref(commandStore).execute("Comfy.Canvas.ToggleLinkVisibility"))
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58route_off)
              ]),
              _: 1
            }, 8, ["class", "aria-label", "style"])), [
              [
                _directive_tooltip,
                {
                  value: linkVisibilityTooltip.value,
                  pt: {
                    root: {
                      style: "z-index: 2; transform: translateY(-20px);"
                    }
                  }
                },
                void 0,
                { top: true }
              ]
            ])
          ]),
          _: 1
        }, 8, ["style", "onWheel"])
      ]);
    };
  }
});
const GraphCanvasMenu = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-d6eeb020"]]);
const _hoisted_1$12 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$12, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
__name(render$t, "render$t");
const __unplugin_components_1$6 = markRaw({ name: "lucide-x", render: render$t });
const _hoisted_1$11 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$11, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M20 7h-9m3 10H5" }),
      createElementVNode("circle", {
        cx: "17",
        cy: "17",
        r: "3"
      }),
      createElementVNode("circle", {
        cx: "7",
        cy: "7",
        r: "3"
      })
    ], -1)
  ]));
}
__name(render$s, "render$s");
const __unplugin_components_0$a = markRaw({ name: "lucide-settings2", render: render$s });
const _hoisted_1$10 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$10, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22ZM12 8v4m0 4h.01"
    }, null, -1)
  ]));
}
__name(render$r, "render$r");
const __unplugin_components_4$1 = markRaw({ name: "lucide-message-circle-warning", render: render$r });
const _hoisted_1$$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$$, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      createElementVNode("path", { d: "M22 2L2 22" })
    ], -1)
  ]));
}
__name(render$q, "render$q");
const __unplugin_components_3$3 = markRaw({ name: "lucide-circle-slash2", render: render$q });
const _hoisted_1$_ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$_, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 6H2m20 12H2M6 2v20M18 2v20"
    }, null, -1)
  ]));
}
__name(render$p, "render$p");
const __unplugin_components_2$3 = markRaw({ name: "lucide-frame", render: render$p });
const _hoisted_1$Z = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Z, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "6",
        cy: "19",
        r: "3"
      }),
      createElementVNode("path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }),
      createElementVNode("circle", {
        cx: "18",
        cy: "5",
        r: "3"
      })
    ], -1)
  ]));
}
__name(render$o, "render$o");
const __unplugin_components_1$5 = markRaw({ name: "lucide-route", render: render$o });
const _hoisted_1$Y = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Y, _cache[0] || (_cache[0] = [
    createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688c0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"></path></g>', 1)
  ]));
}
__name(render$n, "render$n");
const __unplugin_components_0$9 = markRaw({ name: "lucide-palette", render: render$n });
const _hoisted_1$X = { class: "flex items-center gap-2" };
const _hoisted_2$o = { for: "node-colors" };
const _hoisted_3$i = { class: "flex items-center gap-2" };
const _hoisted_4$f = { for: "show-links" };
const _hoisted_5$a = { class: "flex items-center gap-2" };
const _hoisted_6$9 = { for: "show-groups" };
const _hoisted_7$7 = { class: "flex items-center gap-2" };
const _hoisted_8$4 = { for: "render-bypass" };
const _hoisted_9$3 = { class: "flex items-center gap-2" };
const _hoisted_10$3 = { for: "render-error" };
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "MiniMapPanel",
  props: {
    panelStyles: {},
    nodeColors: { type: Boolean },
    showLinks: { type: Boolean },
    showGroups: { type: Boolean },
    renderBypass: { type: Boolean },
    renderError: { type: Boolean }
  },
  emits: ["updateOption"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_lucide58palette = __unplugin_components_0$9;
      const _component_i_lucide58route = __unplugin_components_1$5;
      const _component_i_lucide58frame = __unplugin_components_2$3;
      const _component_i_lucide58circle_slash_2 = __unplugin_components_3$3;
      const _component_i_lucide58message_circle_warning = __unplugin_components_4$1;
      return openBlock(), createElementBlock("div", {
        class: "minimap-panel p-3 mr-2 flex flex-col gap-3 text-sm",
        style: normalizeStyle(_ctx.panelStyles)
      }, [
        createElementVNode("div", _hoisted_1$X, [
          createVNode(unref(Checkbox), {
            "input-id": "node-colors",
            name: "node-colors",
            "model-value": _ctx.nodeColors,
            binary: "",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.NodeColors", value))
          }, null, 8, ["model-value"]),
          createVNode(_component_i_lucide58palette),
          createElementVNode("label", _hoisted_2$o, toDisplayString(_ctx.$t("minimap.nodeColors")), 1)
        ]),
        createElementVNode("div", _hoisted_3$i, [
          createVNode(unref(Checkbox), {
            "input-id": "show-links",
            name: "show-links",
            "model-value": _ctx.showLinks,
            binary: "",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.ShowLinks", value))
          }, null, 8, ["model-value"]),
          createVNode(_component_i_lucide58route),
          createElementVNode("label", _hoisted_4$f, toDisplayString(_ctx.$t("minimap.showLinks")), 1)
        ]),
        createElementVNode("div", _hoisted_5$a, [
          createVNode(unref(Checkbox), {
            "input-id": "show-groups",
            name: "show-groups",
            "model-value": _ctx.showGroups,
            binary: "",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.ShowGroups", value))
          }, null, 8, ["model-value"]),
          createVNode(_component_i_lucide58frame),
          createElementVNode("label", _hoisted_6$9, toDisplayString(_ctx.$t("minimap.showGroups")), 1)
        ]),
        createElementVNode("div", _hoisted_7$7, [
          createVNode(unref(Checkbox), {
            "input-id": "render-bypass",
            name: "render-bypass",
            "model-value": _ctx.renderBypass,
            binary: "",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.RenderBypassState", value))
          }, null, 8, ["model-value"]),
          createVNode(_component_i_lucide58circle_slash_2),
          createElementVNode("label", _hoisted_8$4, toDisplayString(_ctx.$t("minimap.renderBypassState")), 1)
        ]),
        createElementVNode("div", _hoisted_9$3, [
          createVNode(unref(Checkbox), {
            "input-id": "render-error",
            name: "render-error",
            "model-value": _ctx.renderError,
            binary: "",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = (value) => _ctx.$emit("updateOption", "Comfy.Minimap.RenderErrorState", value))
          }, null, 8, ["model-value"]),
          createVNode(_component_i_lucide58message_circle_warning),
          createElementVNode("label", _hoisted_10$3, toDisplayString(_ctx.$t("minimap.renderErrorState")), 1)
        ])
      ], 4);
    };
  }
});
const _hoisted_1$W = ["width", "height"];
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "MiniMap",
  setup(__props) {
    const commandStore = useCommandStore();
    const minimapRef = ref();
    const {
      initialized,
      visible,
      containerRef,
      canvasRef,
      containerStyles,
      viewportStyles,
      width,
      height,
      panelStyles,
      nodeColors,
      showLinks,
      showGroups,
      renderBypass,
      renderError,
      updateOption,
      destroy,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      handleWheel,
      setMinimapRef
    } = useMinimap();
    const showOptionsPanel = ref(false);
    const toggleOptionsPanel = /* @__PURE__ */ __name(() => {
      showOptionsPanel.value = !showOptionsPanel.value;
    }, "toggleOptionsPanel");
    onMounted(() => {
      if (minimapRef.value) {
        setMinimapRef(minimapRef.value);
      }
    });
    onUnmounted(() => {
      destroy();
    });
    return (_ctx, _cache) => {
      const _component_i_lucide58settings_2 = __unplugin_components_0$a;
      const _component_i_lucide58x = __unplugin_components_1$6;
      return unref(visible) && unref(initialized) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "minimapRef",
        ref: minimapRef,
        class: "minimap-main-container flex absolute bottom-[66px] right-2 md:right-11 z-[1000]"
      }, [
        showOptionsPanel.value ? (openBlock(), createBlock(_sfc_main$11, {
          key: 0,
          "panel-styles": unref(panelStyles),
          "node-colors": unref(nodeColors),
          "show-links": unref(showLinks),
          "show-groups": unref(showGroups),
          "render-bypass": unref(renderBypass),
          "render-error": unref(renderError),
          onUpdateOption: unref(updateOption)
        }, null, 8, ["panel-styles", "node-colors", "show-links", "show-groups", "render-bypass", "render-error", "onUpdateOption"])) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: containerRef,
          class: "litegraph-minimap relative",
          style: normalizeStyle(unref(containerStyles))
        }, [
          createVNode(unref(Button), {
            class: "absolute z-10",
            size: "small",
            text: "",
            severity: "secondary",
            onClick: withModifiers(toggleOptionsPanel, ["stop"])
          }, {
            icon: withCtx(() => [
              createVNode(_component_i_lucide58settings_2)
            ]),
            _: 1
          }),
          createVNode(unref(Button), {
            class: "absolute z-10 right-0",
            size: "small",
            text: "",
            severity: "secondary",
            "data-testid": "close-minmap-button",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => unref(commandStore).execute("Comfy.Canvas.ToggleMinimap"), ["stop"]))
          }, {
            icon: withCtx(() => [
              createVNode(_component_i_lucide58x)
            ]),
            _: 1
          }),
          createElementVNode("hr", {
            class: "absolute top-5 bg-[#E1DED5] dark-theme:bg-[#262729] h-[1px] border-0",
            style: normalizeStyle({
              width: unref(containerStyles).width
            })
          }, null, 4),
          createElementVNode("canvas", {
            ref_key: "canvasRef",
            ref: canvasRef,
            width: unref(width),
            height: unref(height),
            class: "minimap-canvas"
          }, null, 8, _hoisted_1$W),
          createElementVNode("div", {
            class: "minimap-viewport",
            style: normalizeStyle(unref(viewportStyles))
          }, null, 4),
          createElementVNode("div", {
            class: "absolute inset-0",
            onPointerdown: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => unref(handlePointerDown) && unref(handlePointerDown)(...args)),
            onPointermove: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => unref(handlePointerMove) && unref(handlePointerMove)(...args)),
            onPointerup: _cache[3] || (_cache[3] = //@ts-ignore
            (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
            onPointerleave: _cache[4] || (_cache[4] = //@ts-ignore
            (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
            onWheel: _cache[5] || (_cache[5] = //@ts-ignore
            (...args) => unref(handleWheel) && unref(handleWheel)(...args))
          }, null, 32)
        ], 4)
      ], 512)) : createCommentVNode("", true);
    };
  }
});
const MiniMap = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-20d1b5d1"]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "NodeTooltip",
  setup(__props) {
    let idleTimeout;
    const nodeDefStore = useNodeDefStore();
    const settingStore = useSettingStore();
    const tooltipRef = ref();
    const tooltipText = ref("");
    const left = ref();
    const top = ref();
    const hideTooltip = /* @__PURE__ */ __name(() => tooltipText.value = "", "hideTooltip");
    const showTooltip = /* @__PURE__ */ __name(async (tooltip) => {
      if (!tooltip) return;
      left.value = app.canvas.mouse[0] + "px";
      top.value = app.canvas.mouse[1] + "px";
      tooltipText.value = tooltip;
      await nextTick();
      const rect = tooltipRef.value?.getBoundingClientRect();
      if (!rect) return;
      if (rect.right > window.innerWidth) {
        left.value = app.canvas.mouse[0] - rect.width + "px";
      }
      if (rect.top < 0) {
        top.value = app.canvas.mouse[1] + rect.height + "px";
      }
    }, "showTooltip");
    const onIdle = /* @__PURE__ */ __name(() => {
      const { canvas } = app;
      const node = canvas.node_over;
      if (!node) return;
      const ctor = node.constructor;
      const nodeDef = nodeDefStore.nodeDefsByName[node.type ?? ""];
      if (ctor.title_mode !== LiteGraph.NO_TITLE && canvas.graph_mouse[1] < node.pos[1]) {
        return showTooltip(nodeDef.description);
      }
      if (node.flags?.collapsed) return;
      const inputSlot = isOverNodeInput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (inputSlot !== -1) {
        const inputName = node.inputs[inputSlot].name;
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(inputName)}.tooltip`,
          nodeDef.inputs[inputName]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const outputSlot = isOverNodeOutput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (outputSlot !== -1) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.outputs.${outputSlot}.tooltip`,
          nodeDef.outputs[outputSlot]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const widget = app.canvas.getWidgetAtCursor();
      if (widget && !isDOMWidget(widget)) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(widget.name)}.tooltip`,
          nodeDef.inputs[widget.name]?.tooltip ?? ""
        );
        return showTooltip(widget.tooltip ?? translatedTooltip);
      }
    }, "onIdle");
    const onMouseMove = /* @__PURE__ */ __name((e) => {
      hideTooltip();
      clearTimeout(idleTimeout);
      if (e.target.nodeName !== "CANVAS") return;
      idleTimeout = window.setTimeout(
        onIdle,
        settingStore.get("LiteGraph.Node.TooltipDelay")
      );
    }, "onMouseMove");
    useEventListener(window, "mousemove", onMouseMove);
    useEventListener(window, "click", hideTooltip);
    return (_ctx, _cache) => {
      return tooltipText.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: tooltipRef,
        class: "node-tooltip",
        style: normalizeStyle({ left: left.value, top: top.value })
      }, toDisplayString(tooltipText.value), 5)) : createCommentVNode("", true);
    };
  }
});
const NodeTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-69036aeb"]]);
const _hoisted_1$V = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$V, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M486.945 25.055L347.49 52.945l23.78 23.784L390.544 96l-56.793 56.795c-27.393-22.7-57.978-32.844-86.97-32.06c-33.838.918-64.92 15.95-87.858 38.888c-22.94 22.94-38.084 54.114-39.406 88.178c-1.138 29.306 8.49 60.407 30.742 88.485L19.27 467.27l25.46 25.46l155.48-155.484l-12.476-12.726c-24.72-25.22-33.185-51.125-32.246-75.323s11.9-47.13 28.89-64.12c16.988-16.988 39.66-27.71 63.38-28.352c23.72-.643 49.04 8.152 73.633 33.5l12.727 13.115L416 121.457l43.055 43.053zM256 192a64 64 0 0 0-64 64a64 64 0 0 0 64 64a64 64 0 0 0 64-64a64 64 0 0 0-64-64"
    }, null, -1)
  ]));
}
__name(render$m, "render$m");
const __unplugin_components_0$8 = markRaw({ name: "game-icons-detour", render: render$m });
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "BypassButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _component_i_game_icons58detour = __unplugin_components_0$8;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "data-testid": "bypass-button",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelectedNodes.Bypass"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_game_icons58detour)
        ]),
        _: 1
      })), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Bypass.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$U = { class: "relative" };
const _hoisted_2$n = { class: "flex items-center gap-1" };
const _hoisted_3$h = {
  key: 0,
  class: "color-picker-container absolute -top-10 left-1/2"
};
const _hoisted_4$e = ["data-testid"];
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "ColorPickerButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const colorPaletteStore = useColorPaletteStore();
    const workflowStore = useWorkflowStore();
    const isLightTheme = computed(
      () => colorPaletteStore.completedActivePalette.light_theme
    );
    const toLightThemeColor = /* @__PURE__ */ __name((color) => adjustColor(color, { lightness: 0.5 }), "toLightThemeColor");
    const showColorPicker = ref(false);
    const NO_COLOR_OPTION = {
      name: "noColor",
      localizedName: t2("color.noColor"),
      value: {
        dark: LiteGraph.NODE_DEFAULT_BGCOLOR,
        light: toLightThemeColor(LiteGraph.NODE_DEFAULT_BGCOLOR)
      }
    };
    const colorOptions = [
      NO_COLOR_OPTION,
      ...Object.entries(LGraphCanvas.node_colors).map(([name, color]) => ({
        name,
        localizedName: t2(`color.${name}`),
        value: {
          dark: color.bgcolor,
          light: toLightThemeColor(color.bgcolor)
        }
      }))
    ];
    const selectedColorOption = ref(null);
    const applyColor = /* @__PURE__ */ __name((colorOption) => {
      const colorName = colorOption?.name ?? NO_COLOR_OPTION.name;
      const canvasColorOption = colorName === NO_COLOR_OPTION.name ? null : LGraphCanvas.node_colors[colorName];
      for (const item of canvasStore.selectedItems) {
        if (isColorable(item)) {
          item.setColorOption(canvasColorOption);
        }
      }
      canvasStore.canvas?.setDirty(true, true);
      currentColorOption.value = canvasColorOption;
      showColorPicker.value = false;
      workflowStore.activeWorkflow?.changeTracker.checkState();
    }, "applyColor");
    const currentColorOption = ref(null);
    const currentColor = computed(
      () => currentColorOption.value ? isLightTheme.value ? toLightThemeColor(currentColorOption.value?.bgcolor) : currentColorOption.value?.bgcolor : null
    );
    const localizedCurrentColorName = computed(() => {
      if (!currentColorOption.value?.bgcolor) return null;
      const colorOption = colorOptions.find(
        (option) => option.value.dark === currentColorOption.value?.bgcolor || option.value.light === currentColorOption.value?.bgcolor
      );
      return colorOption?.localizedName ?? NO_COLOR_OPTION.localizedName;
    });
    watch(
      () => canvasStore.selectedItems,
      (newSelectedItems) => {
        showColorPicker.value = false;
        selectedColorOption.value = null;
        currentColorOption.value = getItemsColorOption(newSelectedItems);
      }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$U, [
        withDirectives((openBlock(), createBlock(unref(Button), {
          severity: "secondary",
          text: "",
          onClick: _cache[0] || (_cache[0] = () => showColorPicker.value = !showColorPicker.value)
        }, {
          icon: withCtx(() => [
            createElementVNode("div", _hoisted_2$n, [
              createElementVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({ color: currentColor.value ?? "" })
              }, null, 4),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })), [
          [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected],
          [
            _directive_tooltip,
            {
              value: localizedCurrentColorName.value ?? unref(t2)("color.noColor"),
              showDelay: 512
            },
            void 0,
            { top: true }
          ]
        ]),
        showColorPicker.value ? (openBlock(), createElementBlock("div", _hoisted_3$h, [
          createVNode(unref(SelectButton), {
            "model-value": selectedColorOption.value,
            options: colorOptions,
            "option-label": "name",
            "data-key": "value",
            "onUpdate:modelValue": applyColor
          }, {
            option: withCtx(({ option }) => [
              withDirectives(createElementVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({
                  color: isLightTheme.value ? option.value.light : option.value.dark
                }),
                "data-testid": option.name
              }, null, 12, _hoisted_4$e), [
                [
                  _directive_tooltip,
                  option.localizedName,
                  void 0,
                  { top: true }
                ]
              ])
            ]),
            _: 1
          }, 8, ["model-value"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ColorPickerButton = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-2d7cb313"]]);
const _hoisted_1$T = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$T, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 15l6 6m-6-6v4.8m0-4.8h4.8M9 19.8V15m0 0H4.2M9 15l-6 6M15 4.2V9m0 0h4.8M15 9l6-6M9 4.2V9m0 0H4.2M9 9L3 3"
    }, null, -1)
  ]));
}
__name(render$l, "render$l");
const __unplugin_components_1$4 = markRaw({ name: "lucide-shrink", render: render$l });
const _hoisted_1$S = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$S, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21 21l-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6m12-7.2V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6"
    }, null, -1)
  ]));
}
__name(render$k, "render$k");
const __unplugin_components_0$7 = markRaw({ name: "lucide-expand", render: render$k });
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "ConvertToSubgraphButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isUnpackVisible = computed(() => {
      return canvasStore.selectedItems?.length === 1 && canvasStore.selectedItems[0] instanceof SubgraphNode;
    });
    const isConvertVisible = computed(() => {
      return canvasStore.groupSelected || canvasStore.rerouteSelected || canvasStore.nodeSelected;
    });
    return (_ctx, _cache) => {
      const _component_i_lucide58expand = __unplugin_components_0$7;
      const _component_i_lucide58shrink = __unplugin_components_1$4;
      const _directive_tooltip = resolveDirective("tooltip");
      return isUnpackVisible.value ? withDirectives((openBlock(), createBlock(unref(Button), {
        key: 0,
        severity: "secondary",
        text: "",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Graph.UnpackSubgraph"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_lucide58expand)
        ]),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Graph_UnpackSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]) : isConvertVisible.value ? withDirectives((openBlock(), createBlock(unref(Button), {
        key: 1,
        severity: "secondary",
        text: "",
        onClick: _cache[1] || (_cache[1] = () => unref(commandStore).execute("Comfy.Graph.ConvertToSubgraph"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_lucide58shrink)
        ]),
        _: 1
      })), [
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Graph_ConvertToSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "DeleteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isDeletable = computed(
      () => canvasStore.selectedItems.some((x) => x.removable !== false)
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "danger",
        text: "",
        icon: "pi pi-trash",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.DeleteSelectedItems"))
      }, null, 512)), [
        [vShow, isDeletable.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_DeleteSelectedItems.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$R = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$R, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
__name(render$j, "render$j");
const __unplugin_components_1$3 = markRaw({ name: "lucide-play", render: render$j });
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "ExecuteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const commandStore = useCommandStore();
    const canvas = canvasStore.getCanvas();
    const buttonHovered = ref(false);
    const selectedOutputNodes = computed(
      () => canvasStore.selectedItems.filter(
        (item) => isLGraphNode(item) && item.constructor.nodeData?.output_node
      )
    );
    const isDisabled = computed(() => selectedOutputNodes.value.length === 0);
    function outputNodeStokeStyle() {
      if (this.selected && this.constructor.nodeData?.output_node && buttonHovered.value) {
        return { color: "orange", lineWidth: 2, padding: 10 };
      }
    }
    __name(outputNodeStokeStyle, "outputNodeStokeStyle");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      buttonHovered.value = true;
      for (const node of selectedOutputNodes.value) {
        node.strokeStyles["outputNode"] = outputNodeStokeStyle;
      }
      canvas.setDirty(true);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      buttonHovered.value = false;
      canvas.setDirty(true);
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.QueueSelectedOutputNodes");
    }, "handleClick");
    return (_ctx, _cache) => {
      const _component_i_lucide58play = __unplugin_components_1$3;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: isDisabled.value ? "secondary" : "success",
        text: "",
        disabled: isDisabled.value,
        onMouseenter: _cache[0] || (_cache[0] = () => handleMouseEnter()),
        onMouseleave: _cache[1] || (_cache[1] = () => handleMouseLeave()),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          createVNode(_component_i_lucide58play)
        ]),
        _: 1
      }, 8, ["severity", "disabled"])), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: isDisabled.value ? unref(t2)("selectionToolbox.executeButton.disabledTooltip") : unref(t2)("selectionToolbox.executeButton.tooltip"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "ExtensionCommandButton",
  props: {
    command: {}
  },
  setup(__props) {
    const commandStore = useCommandStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: typeof _ctx.command.icon === "function" ? _ctx.command.icon() : _ctx.command.icon,
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute(_ctx.command.id))
      }, null, 8, ["icon"])), [
        [
          _directive_tooltip,
          {
            value: unref(st)(`commands.${unref(normalizeI18nKey)(_ctx.command.id)}.label`, "") || void 0,
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "HelpButton",
  setup(__props) {
    const canvasStore = useCanvasStore();
    const nodeDefStore = useNodeDefStore();
    const sidebarTabStore = useSidebarTabStore();
    const nodeHelpStore = useNodeHelpStore();
    const { id: nodeLibraryTabId } = useNodeLibrarySidebarTab();
    const nodeDef = computed(() => {
      if (canvasStore.selectedItems.length !== 1) return null;
      const item = canvasStore.selectedItems[0];
      if (!isLGraphNode(item)) return null;
      return nodeDefStore.fromLGraphNode(item);
    });
    const showHelp = /* @__PURE__ */ __name(() => {
      const def = nodeDef.value;
      if (!def) return;
      if (sidebarTabStore.activeSidebarTabId !== nodeLibraryTabId) {
        sidebarTabStore.toggleSidebarTab(nodeLibraryTabId);
      }
      nodeHelpStore.openHelp(def);
    }, "showHelp");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        class: "help-button",
        text: "",
        icon: "pi pi-question-circle",
        severity: "secondary",
        onClick: showHelp
      }, null, 512)), [
        [vShow, nodeDef.value],
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.help"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "Load3DViewerButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const is3DNode = computed(() => {
      const enable3DViewer = useSettingStore().get("Comfy.Load3D.3DViewerEnable");
      const nodes = canvasStore.selectedItems.filter(isLGraphNode);
      return nodes.length === 1 && nodes.some(isLoad3dNode) && enable3DViewer;
    });
    const open3DViewer = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.3DViewer.Open3DViewer");
    }, "open3DViewer");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        onClick: open3DViewer
      }, null, 512)), [
        [vShow, is3DNode.value],
        [
          _directive_tooltip,
          {
            value: unref(t$2)("commands.Comfy_3DViewer_Open3DViewer.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "MaskEditorButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isSingleImageNode = computed(() => {
      const { selectedItems } = canvasStore;
      const item = selectedItems[0];
      return selectedItems.length === 1 && isLGraphNode(item) && isImageNode(item);
    });
    const openMaskEditor = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
    }, "openMaskEditor");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        onClick: openMaskEditor
      }, null, 512)), [
        [vShow, isSingleImageNode.value],
        [
          _directive_tooltip,
          {
            value: unref(t$2)("commands.Comfy_MaskEditor_OpenMaskEditor.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "PinButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-thumbtack",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelected.Pin"))
      }, null, 512)), [
        [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Pin.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const isRefreshableWidget = /* @__PURE__ */ __name((widget) => widget != null && typeof widget === "object" && "refresh" in widget && typeof widget.refresh === "function", "isRefreshableWidget");
const useRefreshableSelection = /* @__PURE__ */ __name(() => {
  const graphStore = useCanvasStore();
  const selectedNodes = ref([]);
  watchEffect(() => {
    selectedNodes.value = graphStore.selectedItems.filter(isLGraphNode);
  });
  const refreshableWidgets = computed(
    () => selectedNodes.value.flatMap((node) => {
      if (!node.widgets) return [];
      const items = [];
      for (const widget of node.widgets) {
        if (isRefreshableWidget(widget)) {
          items.push(widget);
        }
      }
      return items;
    })
  );
  const isRefreshable = computed(() => refreshableWidgets.value.length > 0);
  async function refreshSelected() {
    if (!isRefreshable.value) return;
    await Promise.all(refreshableWidgets.value.map((item) => item.refresh()));
  }
  __name(refreshSelected, "refreshSelected");
  return {
    isRefreshable,
    refreshSelected
  };
}, "useRefreshableSelection");
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "RefreshSelectionButton",
  setup(__props) {
    const { isRefreshable, refreshSelected } = useRefreshableSelection();
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "info",
        text: "",
        icon: "pi pi-refresh",
        onClick: unref(refreshSelected)
      }, null, 8, ["onClick"])), [
        [vShow, unref(isRefreshable)]
      ]);
    };
  }
});
function useSelectionToolboxPosition(toolboxRef) {
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { getSelectableItems } = useSelectedLiteGraphItems();
  const worldPosition = ref({ x: 0, y: 0 });
  const visible = ref(false);
  const updateSelectionBounds = /* @__PURE__ */ __name(() => {
    const selectableItems = getSelectableItems();
    if (!selectableItems.size) {
      visible.value = false;
      return;
    }
    visible.value = true;
    const bounds = createBounds(selectableItems);
    if (!bounds) {
      return;
    }
    const [xBase, y, width] = bounds;
    worldPosition.value = {
      x: xBase + width / 2,
      y
    };
    updateTransform();
  }, "updateSelectionBounds");
  const updateTransform = /* @__PURE__ */ __name(() => {
    if (!visible.value) return;
    const { scale, offset } = lgCanvas.ds;
    const canvasRect = lgCanvas.canvas.getBoundingClientRect();
    const screenX = (worldPosition.value.x + offset[0]) * scale + canvasRect.left;
    const screenY = (worldPosition.value.y + offset[1]) * scale + canvasRect.top;
    if (toolboxRef.value) {
      toolboxRef.value.style.setProperty("--tb-x", `${screenX}px`);
      toolboxRef.value.style.setProperty("--tb-y", `${screenY}px`);
    }
  }, "updateTransform");
  const { startSync, stopSync } = useCanvasTransformSync(updateTransform, {
    autoStart: false
  });
  watch(
    () => canvasStore.getCanvas().state.selectionChanged,
    (changed) => {
      if (changed) {
        updateSelectionBounds();
        canvasStore.getCanvas().state.selectionChanged = false;
        if (visible.value) {
          startSync();
        } else {
          stopSync();
        }
      }
    },
    { immediate: true }
  );
  watch(
    () => canvasStore.canvas?.state?.draggingItems,
    (dragging) => {
      if (dragging) {
        visible.value = false;
      } else {
        requestAnimationFrame(() => {
          updateSelectionBounds();
        });
      }
    }
  );
  return {
    visible
  };
}
__name(useSelectionToolboxPosition, "useSelectionToolboxPosition");
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "SelectionToolbox",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const extensionService = useExtensionService();
    const canvasInteractions = useCanvasInteractions();
    const toolboxRef = ref();
    const { visible } = useSelectionToolboxPosition(toolboxRef);
    const extensionToolboxCommands = computed(() => {
      const commandIds = new Set(
        canvasStore.selectedItems.map(
          (item) => extensionService.invokeExtensions("getSelectionToolboxCommands", item).flat()
        ).flat()
      );
      return Array.from(commandIds).map((commandId) => commandStore.getCommand(commandId)).filter((command) => command !== void 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "slide-up" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "toolboxRef",
            ref: toolboxRef,
            style: { "transform": "translate(calc(var(--tb-x) - 50%), calc(var(--tb-y) - 120%))" },
            class: "selection-toolbox fixed left-0 top-0 z-40"
          }, [
            createVNode(unref(Panel), {
              class: "rounded-lg",
              pt: {
                header: "hidden",
                content: "p-0 flex flex-row"
              },
              onWheel: unref(canvasInteractions).handleWheel
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$W),
                createVNode(ColorPickerButton),
                createVNode(_sfc_main$_),
                createVNode(_sfc_main$R),
                createVNode(_sfc_main$T),
                createVNode(_sfc_main$S),
                createVNode(_sfc_main$Y),
                createVNode(_sfc_main$X),
                createVNode(_sfc_main$Q),
                (openBlock(true), createElementBlock(Fragment, null, renderList(extensionToolboxCommands.value, (command) => {
                  return openBlock(), createBlock(_sfc_main$V, {
                    key: command.id,
                    command
                  }, null, 8, ["command"]);
                }), 128)),
                createVNode(_sfc_main$U)
              ]),
              _: 1
            }, 8, ["onWheel"])
          ], 512), [
            [vShow, unref(visible)]
          ])
        ]),
        _: 1
      });
    };
  }
});
const SelectionToolbox = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-9669a95a"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "TitleEditor",
  setup(__props) {
    const settingStore = useSettingStore();
    const showInput = ref(false);
    const editedTitle = ref("");
    const { style: inputPositionStyle, updatePosition } = useAbsolutePosition();
    const inputFontStyle = ref({});
    const inputStyle = computed(() => ({
      ...inputPositionStyle.value,
      ...inputFontStyle.value
    }));
    const titleEditorStore = useTitleEditorStore();
    const canvasStore = useCanvasStore();
    const previousCanvasDraggable = ref(true);
    const onEdit = /* @__PURE__ */ __name((newValue) => {
      if (titleEditorStore.titleEditorTarget && newValue.trim() !== "") {
        const trimmedTitle = newValue.trim();
        titleEditorStore.titleEditorTarget.title = trimmedTitle;
        const target = titleEditorStore.titleEditorTarget;
        if (target instanceof LGraphNode && target.isSubgraphNode?.()) {
          target.subgraph.name = trimmedTitle;
        }
        app.graph.setDirtyCanvas(true, true);
      }
      showInput.value = false;
      titleEditorStore.titleEditorTarget = null;
      canvasStore.canvas.allow_dragcanvas = previousCanvasDraggable.value;
    }, "onEdit");
    watch(
      () => titleEditorStore.titleEditorTarget,
      (target) => {
        if (target === null) {
          return;
        }
        editedTitle.value = target.title;
        showInput.value = true;
        const canvas = canvasStore.canvas;
        previousCanvasDraggable.value = canvas.allow_dragcanvas;
        canvas.allow_dragcanvas = false;
        const scale = canvas.ds.scale;
        if (target instanceof LGraphGroup) {
          const group = target;
          updatePosition({
            pos: group.pos,
            size: [group.size[0], group.titleHeight]
          });
          inputFontStyle.value = { fontSize: `${group.font_size * scale}px` };
        } else if (target instanceof LGraphNode) {
          const node = target;
          const [x, y] = node.getBounding();
          updatePosition({
            pos: [x, y],
            size: [node.width, LiteGraph.NODE_TITLE_HEIGHT]
          });
          inputFontStyle.value = { fontSize: `${12 * scale}px` };
        }
      }
    );
    const canvasEventHandler = /* @__PURE__ */ __name((event) => {
      if (event.detail.subType === "group-double-click") {
        if (!settingStore.get("Comfy.Group.DoubleClickTitleToEdit")) {
          return;
        }
        const group = event.detail.group;
        const [_, y] = group.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= group.titleHeight) {
          titleEditorStore.titleEditorTarget = group;
        }
      } else if (event.detail.subType === "node-double-click") {
        if (!settingStore.get("Comfy.Node.DoubleClickTitleToEdit")) {
          return;
        }
        const node = event.detail.node;
        const [_, y] = node.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= 0) {
          titleEditorStore.titleEditorTarget = node;
        }
      }
    }, "canvasEventHandler");
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return showInput.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "group-title-editor node-title-editor",
        style: normalizeStyle(inputStyle.value)
      }, [
        createVNode(EditableText, {
          "is-editing": showInput.value,
          "model-value": editedTitle.value,
          onEdit
        }, null, 8, ["is-editing", "model-value"])
      ], 4)) : createCommentVNode("", true);
    };
  }
});
const TitleEditor = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-e5829fcb"]]);
const useSearchBoxStore = defineStore("searchBox", () => {
  const settingStore = useSettingStore();
  const { x, y } = useMouse();
  const newSearchBoxEnabled = computed(
    () => settingStore.get("Comfy.NodeSearchBoxImpl") === "default"
  );
  const popoverRef = shallowRef(null);
  function setPopoverRef(popover) {
    popoverRef.value = popover;
  }
  __name(setPopoverRef, "setPopoverRef");
  const visible = ref(false);
  function toggleVisible() {
    if (newSearchBoxEnabled.value) {
      visible.value = !visible.value;
      return;
    }
    if (!popoverRef.value) return;
    popoverRef.value.showSearchBox(
      new MouseEvent("click", {
        clientX: x.value,
        clientY: y.value,
        // @ts-expect-error layerY is a nonstandard property
        layerY: y.value
      })
    );
  }
  __name(toggleVisible, "toggleVisible");
  return {
    newSearchBoxEnabled,
    setPopoverRef,
    toggleVisible,
    visible
  };
});
const _sfc_main$N = {
  name: "AutoCompletePlus",
  extends: AutoComplete,
  emits: ["focused-option-changed"],
  data() {
    return {
      // Flag to determine if IME is active
      isComposing: false
    };
  },
  mounted() {
    if (typeof AutoComplete.mounted === "function") {
      AutoComplete.mounted.call(this);
    }
    const inputEl = this.$el.querySelector("input");
    if (inputEl) {
      inputEl.addEventListener("compositionstart", () => {
        this.isComposing = true;
      });
      inputEl.addEventListener("compositionend", () => {
        this.isComposing = false;
      });
    }
    this.$watch(
      () => this.focusedOptionIndex,
      (newVal, oldVal) => {
        this.$emit("focused-option-changed", newVal);
      }
    );
  },
  methods: {
    // Override onKeyDown to block Enter when IME is active
    onKeyDown(event) {
      if (event.key === "Enter" && this.isComposing) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      AutoComplete.methods.onKeyDown.call(this, event);
    }
  }
};
const _hoisted_1$Q = { class: "option-container flex justify-between items-center px-2 py-0 cursor-pointer overflow-hidden w-full" };
const _hoisted_2$m = { class: "option-display-name font-semibold flex flex-col" };
const _hoisted_3$g = { key: 0 };
const _hoisted_4$d = ["innerHTML"];
const _hoisted_5$9 = ["innerHTML"];
const _hoisted_6$8 = {
  key: 0,
  class: "option-category font-light text-sm text-muted overflow-hidden text-ellipsis whitespace-nowrap"
};
const _hoisted_7$6 = { class: "option-badges" };
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchItem",
  props: {
    nodeDef: {},
    currentQuery: {}
  },
  setup(__props) {
    const settingStore = useSettingStore();
    const showCategory = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowCategory")
    );
    const showIdName = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowIdName")
    );
    const showNodeFrequency = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowNodeFrequency")
    );
    const nodeFrequencyStore = useNodeFrequencyStore();
    const nodeFrequency = computed(
      () => nodeFrequencyStore.getNodeFrequency(props.nodeDef)
    );
    const nodeBookmarkStore = useNodeBookmarkStore();
    const isBookmarked = computed(
      () => nodeBookmarkStore.isBookmarked(props.nodeDef)
    );
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$Q, [
        createElementVNode("div", _hoisted_2$m, [
          createElementVNode("div", null, [
            isBookmarked.value ? (openBlock(), createElementBlock("span", _hoisted_3$g, _cache[0] || (_cache[0] = [
              createElementVNode("i", { class: "pi pi-bookmark-fill text-sm mr-1" }, null, -1)
            ]))) : createCommentVNode("", true),
            createElementVNode("span", {
              innerHTML: unref(highlightQuery)(_ctx.nodeDef.display_name, _ctx.currentQuery)
            }, null, 8, _hoisted_4$d),
            _cache[1] || (_cache[1] = createElementVNode("span", null, " ", -1)),
            showIdName.value ? (openBlock(), createBlock(unref(Tag), {
              key: 1,
              severity: "secondary"
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  innerHTML: unref(highlightQuery)(_ctx.nodeDef.name, _ctx.currentQuery)
                }, null, 8, _hoisted_5$9)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          showCategory.value ? (openBlock(), createElementBlock("div", _hoisted_6$8, toDisplayString(_ctx.nodeDef.category.replaceAll("/", " > ")), 1)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_7$6, [
          _ctx.nodeDef.experimental ? (openBlock(), createBlock(unref(Tag), {
            key: 0,
            value: _ctx.$t("g.experimental"),
            severity: "primary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.deprecated ? (openBlock(), createBlock(unref(Tag), {
            key: 1,
            value: _ctx.$t("g.deprecated"),
            severity: "danger"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          showNodeFrequency.value && nodeFrequency.value > 0 ? (openBlock(), createBlock(unref(Tag), {
            key: 2,
            value: unref(formatNumberWithSuffix)(nodeFrequency.value, { roundToInt: true }),
            severity: "secondary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.nodeSource.type !== unref(NodeSourceType).Unknown ? (openBlock(), createBlock(unref(Chip), {
            key: 3,
            class: "text-sm font-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.nodeDef.nodeSource.displayText), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const NodeSearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-2f72abbe"]]);
const _hoisted_1$P = { class: "comfy-vue-node-search-container flex justify-center items-center w-full min-w-96" };
const _hoisted_2$l = {
  key: 0,
  class: "comfy-vue-node-preview-container absolute left-[-350px] top-[50px]"
};
const _hoisted_3$f = { class: "_dialog-body" };
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBox",
  props: {
    filters: {},
    searchLimit: { default: 64 }
  },
  emits: ["addFilter", "removeFilter", "addNode"],
  setup(__props, { emit: __emit }) {
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const enableNodePreview = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.NodePreview")
    );
    const nodeSearchFilterVisible = ref(false);
    const inputId = `comfy-vue-node-search-box-input-${Math.random()}`;
    const suggestions = ref([]);
    const hoveredSuggestion = ref(null);
    const currentQuery = ref("");
    const placeholder = computed(() => {
      return __props.filters.length === 0 ? t2("g.searchNodes") + "..." : "";
    });
    const nodeDefStore = useNodeDefStore();
    const nodeFrequencyStore = useNodeFrequencyStore();
    const search = /* @__PURE__ */ __name((query) => {
      const queryIsEmpty = query === "" && __props.filters.length === 0;
      currentQuery.value = query;
      suggestions.value = queryIsEmpty ? nodeFrequencyStore.topNodeDefs : [
        ...nodeDefStore.nodeSearchService.searchNode(query, __props.filters, {
          limit: __props.searchLimit
        })
      ];
    }, "search");
    const emit = __emit;
    let inputElement = null;
    const reFocusInput = /* @__PURE__ */ __name(async () => {
      inputElement ??= document.getElementById(inputId);
      if (inputElement) {
        inputElement.blur();
        await nextTick(() => inputElement?.focus());
      }
    }, "reFocusInput");
    onMounted(reFocusInput);
    const onAddFilter = /* @__PURE__ */ __name((filterAndValue) => {
      nodeSearchFilterVisible.value = false;
      emit("addFilter", filterAndValue);
    }, "onAddFilter");
    const onRemoveFilter = /* @__PURE__ */ __name(async (event, filterAndValue) => {
      event.stopPropagation();
      event.preventDefault();
      emit("removeFilter", filterAndValue);
      await reFocusInput();
    }, "onRemoveFilter");
    const setHoverSuggestion = /* @__PURE__ */ __name((index2) => {
      if (index2 === -1) {
        hoveredSuggestion.value = null;
        return;
      }
      const value = suggestions.value[index2];
      hoveredSuggestion.value = value;
    }, "setHoverSuggestion");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$P, [
        enableNodePreview.value ? (openBlock(), createElementBlock("div", _hoisted_2$l, [
          hoveredSuggestion.value ? (openBlock(), createBlock(NodePreview, {
            key: hoveredSuggestion.value?.name || "",
            "node-def": hoveredSuggestion.value
          }, null, 8, ["node-def"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(unref(Button), {
          icon: "pi pi-filter",
          severity: "secondary",
          class: "filter-button z-10",
          onClick: _cache[0] || (_cache[0] = ($event) => nodeSearchFilterVisible.value = true)
        }),
        createVNode(unref(Dialog), {
          visible: nodeSearchFilterVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => nodeSearchFilterVisible.value = $event),
          class: "min-w-96",
          "dismissable-mask": "",
          modal: "",
          onHide: reFocusInput
        }, {
          header: withCtx(() => [
            createElementVNode("h3", null, toDisplayString(_ctx.$t("g.addNodeFilterCondition")), 1)
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3$f, [
              createVNode(NodeSearchFilter, { onAddFilter })
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        createVNode(_sfc_main$N, {
          "model-value": _ctx.filters,
          class: "comfy-vue-node-search-box z-10 flex-grow",
          "scroll-height": "40vh",
          placeholder: placeholder.value,
          "input-id": inputId,
          "append-to": "self",
          suggestions: suggestions.value,
          "min-length": 0,
          delay: 100,
          loading: !unref(nodeFrequencyStore).isLoaded,
          "complete-on-focus": "",
          "auto-option-focus": "",
          "force-selection": "",
          multiple: "",
          "option-label": "display_name",
          onComplete: _cache[2] || (_cache[2] = ($event) => search($event.query)),
          onOptionSelect: _cache[3] || (_cache[3] = ($event) => emit("addNode", $event.value)),
          onFocusedOptionChanged: _cache[4] || (_cache[4] = ($event) => setHoverSuggestion($event))
        }, {
          option: withCtx(({ option }) => [
            createVNode(NodeSearchItem, {
              "node-def": option,
              "current-query": currentQuery.value
            }, null, 8, ["node-def", "current-query"])
          ]),
          chip: withCtx(({ value }) => [
            value.filterDef && value.value ? (openBlock(), createBlock(SearchFilterChip, {
              key: `${value.filterDef.id}-${value.value}`,
              text: value.value,
              badge: value.filterDef.invokeSequence.toUpperCase(),
              "badge-class": value.filterDef.invokeSequence + "-badge",
              onRemove: /* @__PURE__ */ __name(($event) => onRemoveFilter(
                $event,
                value
              ), "onRemove")
            }, null, 8, ["text", "badge", "badge-class", "onRemove"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "suggestions", "loading"])
      ]);
    };
  }
});
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBoxPopover",
  setup(__props, { expose: __expose }) {
    let triggerEvent = null;
    let listenerController = null;
    let disconnectOnReset = false;
    const settingStore = useSettingStore();
    const searchBoxStore = useSearchBoxStore();
    const litegraphService = useLitegraphService();
    const { visible, newSearchBoxEnabled } = storeToRefs(searchBoxStore);
    const dismissable = ref(true);
    const getNewNodeLocation = /* @__PURE__ */ __name(() => {
      return triggerEvent ? [triggerEvent.canvasX, triggerEvent.canvasY] : litegraphService.getCanvasCenter();
    }, "getNewNodeLocation");
    const nodeFilters = ref([]);
    const addFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value.push(filter);
    }, "addFilter");
    const removeFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value = nodeFilters.value.filter(
        (f) => toRaw(f) !== toRaw(filter)
      );
    }, "removeFilter");
    const clearFilters = /* @__PURE__ */ __name(() => {
      nodeFilters.value = [];
    }, "clearFilters");
    const closeDialog = /* @__PURE__ */ __name(() => {
      visible.value = false;
    }, "closeDialog");
    const canvasStore = useCanvasStore();
    const addNode = /* @__PURE__ */ __name((nodeDef) => {
      const node = litegraphService.addNodeOnGraph(nodeDef, {
        pos: getNewNodeLocation()
      });
      if (disconnectOnReset && triggerEvent) {
        canvasStore.getCanvas().linkConnector.connectToNode(node, triggerEvent);
      } else if (!triggerEvent) {
        console.warn("The trigger event was undefined when addNode was called.");
      }
      disconnectOnReset = false;
      useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
      window.requestAnimationFrame(closeDialog);
    }, "addNode");
    const showSearchBox = /* @__PURE__ */ __name((e) => {
      if (newSearchBoxEnabled.value) {
        if (e?.pointerType === "touch") {
          setTimeout(() => {
            showNewSearchBox(e);
          }, 128);
        } else {
          showNewSearchBox(e);
        }
      } else {
        canvasStore.getCanvas().showSearchBox(e);
      }
    }, "showSearchBox");
    const getFirstLink = /* @__PURE__ */ __name(() => canvasStore.getCanvas().linkConnector.renderLinks.at(0), "getFirstLink");
    const nodeDefStore = useNodeDefStore();
    const showNewSearchBox = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (firstLink) {
        const filter = firstLink.toType === "input" ? nodeDefStore.nodeSearchService.inputTypeFilter : nodeDefStore.nodeSearchService.outputTypeFilter;
        const dataType = firstLink.fromSlot.type?.toString() ?? "";
        addFilter({
          filterDef: filter,
          value: dataType
        });
      }
      visible.value = true;
      triggerEvent = e;
      dismissable.value = false;
      setTimeout(() => {
        dismissable.value = true;
      }, 300);
    }, "showNewSearchBox");
    const showContextMenu = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (!firstLink) return;
      const { node, fromSlot, toType } = firstLink;
      const commonOptions = {
        e,
        allow_searchbox: true,
        showSearchBox: /* @__PURE__ */ __name(() => {
          cancelResetOnContextClose();
          showSearchBox(e);
        }, "showSearchBox")
      };
      const afterRerouteId = firstLink.fromReroute?.id;
      const connectionOptions = toType === "input" ? { nodeFrom: node, slotFrom: fromSlot, afterRerouteId } : { nodeTo: node, slotTo: fromSlot, afterRerouteId };
      const canvas = canvasStore.getCanvas();
      const menu = canvas.showConnectionMenu({
        ...connectionOptions,
        ...commonOptions
      });
      if (!menu) {
        console.warn("No menu was returned from showConnectionMenu");
        return;
      }
      triggerEvent = e;
      listenerController = new AbortController();
      const { signal } = listenerController;
      const options = { once: true, signal };
      useEventListener(
        canvas.canvas,
        "connect-new-default-node",
        (createEvent) => {
          if (!(createEvent instanceof CustomEvent))
            throw new Error("Invalid event");
          const node2 = createEvent.detail?.node;
          if (!(node2 instanceof LGraphNode)) throw new Error("Invalid node");
          disconnectOnReset = false;
          createEvent.preventDefault();
          canvas.linkConnector.connectToNode(node2, e);
        },
        options
      );
      const cancelResetOnContextClose = useEventListener(
        menu.controller.signal,
        "abort",
        reset,
        options
      );
    }, "showContextMenu");
    watchEffect(() => {
      const { canvas } = canvasStore;
      if (!canvas) return;
      LiteGraph.release_link_on_empty_shows_menu = false;
      canvas.allow_searchbox = false;
      useEventListener(
        canvas.linkConnector.events,
        "dropped-on-canvas",
        handleDroppedOnCanvas
      );
    });
    const canvasEventHandler = /* @__PURE__ */ __name((e) => {
      if (e.detail.subType === "empty-double-click") {
        showSearchBox(e.detail.originalEvent);
      } else if (e.detail.subType === "group-double-click") {
        const group = e.detail.group;
        const [_, y] = group.pos;
        const relativeY = e.detail.originalEvent.canvasY - y;
        if (relativeY > group.titleHeight) {
          showSearchBox(e.detail.originalEvent);
        }
      }
    }, "canvasEventHandler");
    const linkReleaseAction = computed(
      () => settingStore.get("Comfy.LinkRelease.Action")
    );
    const linkReleaseActionShift = computed(
      () => settingStore.get("Comfy.LinkRelease.ActionShift")
    );
    const preventDefault = /* @__PURE__ */ __name((e) => e.preventDefault(), "preventDefault");
    const cancelNextReset = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.state.snapLinksPos = [e.detail.canvasX, e.detail.canvasY];
      useEventListener(canvas.linkConnector.events, "reset", preventDefault, {
        once: true
      });
    }, "cancelNextReset");
    const handleDroppedOnCanvas = /* @__PURE__ */ __name((e) => {
      disconnectOnReset = true;
      const action = e.detail.shiftKey ? linkReleaseActionShift.value : linkReleaseAction.value;
      switch (action) {
        case LinkReleaseTriggerAction.SEARCH_BOX:
          cancelNextReset(e);
          showSearchBox(e.detail);
          break;
        case LinkReleaseTriggerAction.CONTEXT_MENU:
          cancelNextReset(e);
          showContextMenu(e.detail);
          break;
        case LinkReleaseTriggerAction.NO_ACTION:
        default:
          break;
      }
    }, "handleDroppedOnCanvas");
    const reset = /* @__PURE__ */ __name(() => {
      listenerController?.abort();
      listenerController = null;
      triggerEvent = null;
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.events.removeEventListener("reset", preventDefault);
      if (disconnectOnReset) canvas.linkConnector.disconnectLinks();
      canvas.linkConnector.reset();
      canvas.setDirty(true, true);
    }, "reset");
    watch(visible, () => {
      if (!visible.value) reset();
    });
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    __expose({ showSearchBox });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Dialog), {
          visible: unref(visible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = $event : null),
          modal: "",
          "dismissable-mask": dismissable.value,
          pt: {
            root: {
              class: "invisible-dialog-root",
              role: "search"
            },
            mask: { class: "node-search-box-dialog-mask" },
            transition: {
              enterFromClass: "opacity-0 scale-75",
              // 100ms is the duration of the transition in the dialog component
              enterActiveClass: "transition-all duration-100 ease-out",
              leaveActiveClass: "transition-all duration-100 ease-in",
              leaveToClass: "opacity-0 scale-75"
            }
          },
          onHide: clearFilters
        }, {
          container: withCtx(() => [
            createVNode(_sfc_main$L, {
              filters: nodeFilters.value,
              onAddFilter: addFilter,
              onRemoveFilter: removeFilter,
              onAddNode: addNode
            }, null, 8, ["filters"])
          ]),
          _: 1
        }, 8, ["visible", "dismissable-mask"])
      ]);
    };
  }
});
const _hoisted_1$O = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$O, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18m96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24"
    }, null, -1)
  ]));
}
__name(render$i, "render$i");
const __unplugin_components_0$6 = markRaw({ name: "ph-terminal-bold", render: render$i });
const _hoisted_1$N = { class: "side-bar-button-content" };
const _hoisted_2$k = {
  key: 0,
  class: "side-bar-button-label"
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "SidebarIcon",
  props: {
    icon: { default: "" },
    selected: { type: Boolean, default: false },
    tooltip: { default: "" },
    tooltipSuffix: { default: "" },
    iconBadge: { type: [String, Function], default: "" },
    label: { default: "" },
    isSmall: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const { t: t2 } = useI18n();
    const emit = __emit;
    const overlayValue = computed(
      () => typeof __props.iconBadge === "function" ? __props.iconBadge() ?? "" : __props.iconBadge
    );
    const shouldShowBadge = computed(() => !!overlayValue.value);
    const computedTooltip = computed(() => t2(__props.tooltip) + __props.tooltipSuffix);
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        text: "",
        pt: {
          root: {
            class: `side-bar-button ${_ctx.selected ? "p-button-primary side-bar-button-selected" : "p-button-secondary"}`,
            "aria-label": computedTooltip.value
          }
        },
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
      }, {
        icon: withCtx(() => [
          createElementVNode("div", _hoisted_1$N, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              shouldShowBadge.value ? (openBlock(), createBlock(unref(OverlayBadge), {
                key: 0,
                value: overlayValue.value
              }, {
                default: withCtx(() => [
                  typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: normalizeClass(_ctx.icon + " side-bar-button-icon")
                  }, null, 2)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
                    key: 1,
                    class: "side-bar-button-icon"
                  }))
                ]),
                _: 1
              }, 8, ["value"])) : typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("i", {
                key: 1,
                class: normalizeClass(_ctx.icon + " side-bar-button-icon")
              }, null, 2)) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
                key: 2,
                class: "side-bar-button-icon"
              })) : createCommentVNode("", true)
            ], true),
            _ctx.label && !_ctx.isSmall ? (openBlock(), createElementBlock("span", _hoisted_2$k, toDisplayString(unref(t2)(_ctx.label)), 1)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["pt"])), [
        [_directive_tooltip, {
          value: computedTooltip.value,
          showDelay: 300,
          hideDelay: 300
        }]
      ]);
    };
  }
});
const SidebarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-f32248fd"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "SidebarBottomPanelToggleButton",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    return (_ctx, _cache) => {
      const _component_i_ph58terminal_bold = __unplugin_components_0$6;
      return openBlock(), createBlock(SidebarIcon, {
        tooltip: _ctx.$t("menu.toggleBottomPanel"),
        selected: unref(bottomPanelStore).activePanel == "terminal",
        onClick: unref(bottomPanelStore).toggleBottomPanel
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_ph58terminal_bold)
        ]),
        _: 1
      }, 8, ["tooltip", "selected", "onClick"]);
    };
  }
});
const _hoisted_1$M = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01" }),
      createElementVNode("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
__name(render$h, "render$h");
const __unplugin_components_0$5 = markRaw({ name: "lucide-keyboard", render: render$h });
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "SidebarShortcutsToggleButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const bottomPanelStore = useBottomPanelStore();
    const commandStore = useCommandStore();
    const command = commandStore.getCommand("Workspace.ToggleBottomPanel.Shortcuts");
    const { formatKeySequence } = commandStore;
    const isShortcutsPanelVisible = computed(
      () => bottomPanelStore.activePanel === "shortcuts"
    );
    const tooltipText = computed(
      () => `${t2("shortcuts.keyboardShortcuts")} (${formatKeySequence(command)})`
    );
    const toggleShortcutsPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.togglePanel("shortcuts");
    }, "toggleShortcutsPanel");
    return (_ctx, _cache) => {
      const _component_i_lucide58keyboard = __unplugin_components_0$5;
      return openBlock(), createBlock(SidebarIcon, {
        tooltip: tooltipText.value,
        selected: isShortcutsPanelVisible.value,
        onClick: toggleShortcutsPanel
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_lucide58keyboard)
        ]),
        _: 1
      }, 8, ["tooltip", "selected"]);
    };
  }
});
const releaseApiClient = axios.create({
  baseURL: COMFY_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
const useReleaseService = /* @__PURE__ */ __name(() => {
  const isLoading = ref(false);
  const error = ref(null);
  const handleApiError = /* @__PURE__ */ __name((err, context, routeSpecificErrors) => {
    if (!axios.isAxiosError(err))
      return err instanceof Error ? `${context}: ${err.message}` : `${context}: Unknown error occurred`;
    const axiosError = err;
    if (axiosError.response) {
      const { status, data } = axiosError.response;
      if (routeSpecificErrors && routeSpecificErrors[status])
        return routeSpecificErrors[status];
      switch (status) {
        case 400:
          return `Bad request: ${data?.message || "Invalid input"}`;
        case 401:
          return "Unauthorized: Authentication required";
        case 403:
          return `Forbidden: ${data?.message || "Access denied"}`;
        case 404:
          return `Not found: ${data?.message || "Resource not found"}`;
        case 500:
          return `Server error: ${data?.message || "Internal server error"}`;
        default:
          return `${context}: ${data?.message || axiosError.message}`;
      }
    }
    return `${context}: ${axiosError.message}`;
  }, "handleApiError");
  const executeApiRequest = /* @__PURE__ */ __name(async (apiCall, errorContext, routeSpecificErrors) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiCall();
      return response.data;
    } catch (err) {
      if (isAbortError(err)) return null;
      error.value = handleApiError(err, errorContext, routeSpecificErrors);
      return null;
    } finally {
      isLoading.value = false;
    }
  }, "executeApiRequest");
  const getReleases = /* @__PURE__ */ __name(async (params, signal) => {
    const endpoint = "/releases";
    const errorContext = "Failed to get releases";
    const routeSpecificErrors = {
      400: "Invalid project or version parameter"
    };
    const apiResponse = await executeApiRequest(
      () => releaseApiClient.get(endpoint, {
        params,
        signal
      }),
      errorContext,
      routeSpecificErrors
    );
    return apiResponse;
  }, "getReleases");
  return {
    isLoading,
    error,
    getReleases
  };
}, "useReleaseService");
const useReleaseStore = defineStore("release", () => {
  const releases = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const releaseService = useReleaseService();
  const systemStatsStore = useSystemStatsStore();
  const settingStore = useSettingStore();
  const currentComfyUIVersion = computed(
    () => systemStatsStore?.systemStats?.system?.comfyui_version ?? ""
  );
  const locale = computed(() => settingStore.get("Comfy.Locale"));
  const releaseVersion = computed(
    () => settingStore.get("Comfy.Release.Version")
  );
  const releaseStatus = computed(() => settingStore.get("Comfy.Release.Status"));
  const releaseTimestamp = computed(
    () => settingStore.get("Comfy.Release.Timestamp")
  );
  const showVersionUpdates = computed(
    () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
  );
  const recentRelease = computed(() => {
    return releases.value[0] ?? null;
  });
  const recentReleases = computed(() => {
    return releases.value.slice(0, 3);
  });
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1e3;
  const isNewVersionAvailable = computed(
    () => !!recentRelease.value && compareVersions(
      recentRelease.value.version,
      currentComfyUIVersion.value
    ) > 0
  );
  const isLatestVersion = computed(
    () => !!recentRelease.value && !compareVersions(recentRelease.value.version, currentComfyUIVersion.value)
  );
  const hasMediumOrHighAttention = computed(
    () => recentReleases.value.slice(0, -1).some(
      (release) => release.attention === "medium" || release.attention === "high"
    )
  );
  const shouldShowToast = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    if (!hasMediumOrHighAttention.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value?.version && ["skipped", "changelog seen"].includes(releaseStatus.value)) {
      return false;
    }
    return true;
  });
  const shouldShowRedDot = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    const { version } = recentRelease.value;
    if (releaseVersion.value === version && releaseStatus.value === "changelog seen") {
      return false;
    }
    if (hasMediumOrHighAttention.value) {
      return true;
    }
    if (releaseVersion.value === version && releaseStatus.value === "skipped" && releaseTimestamp.value && Date.now() - releaseTimestamp.value >= THREE_DAYS_MS) {
      return false;
    }
    return true;
  });
  const shouldShowPopup = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isLatestVersion.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value.version && releaseStatus.value === "what's new seen") {
      return false;
    }
    return true;
  });
  async function handleSkipRelease(version) {
    if (version !== recentRelease.value?.version || releaseStatus.value === "changelog seen") {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "skipped");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleSkipRelease, "handleSkipRelease");
  async function handleShowChangelog(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "changelog seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleShowChangelog, "handleShowChangelog");
  async function handleWhatsNewSeen(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "what's new seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleWhatsNewSeen, "handleWhatsNewSeen");
  async function fetchReleases() {
    if (isLoading.value) {
      return;
    }
    if (!showVersionUpdates.value) {
      return;
    }
    if (systemStatsStore.systemStats?.system?.argv?.includes(
      "--disable-api-nodes"
    )) {
      return;
    }
    isLoading.value = true;
    error.value = null;
    try {
      if (!systemStatsStore.systemStats) {
        await systemStatsStore.fetchSystemStats();
      }
      const fetchedReleases = await releaseService.getReleases({
        project: "comfyui",
        current_version: currentComfyUIVersion.value,
        form_factor: systemStatsStore.getFormFactor(),
        locale: stringToLocale(locale.value)
      });
      if (fetchedReleases !== null) {
        releases.value = fetchedReleases;
      } else if (releaseService.error.value) {
        error.value = releaseService.error.value;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error occurred";
    } finally {
      isLoading.value = false;
    }
  }
  __name(fetchReleases, "fetchReleases");
  async function initialize() {
    await fetchReleases();
  }
  __name(initialize, "initialize");
  return {
    releases,
    isLoading,
    error,
    recentRelease,
    recentReleases,
    shouldShowToast,
    shouldShowRedDot,
    shouldShowPopup,
    shouldShowUpdateButton: isNewVersionAvailable,
    handleSkipRelease,
    handleShowChangelog,
    handleWhatsNewSeen,
    fetchReleases,
    initialize
  };
});
const releaseStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useReleaseStore
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$L = {
  class: "help-center-menu",
  role: "menu",
  "aria-label": "Help Center Menu"
};
const _hoisted_2$j = {
  class: "help-menu-section",
  role: "menubar"
};
const _hoisted_3$e = ["onClick", "onMouseenter", "onMouseleave"];
const _hoisted_4$c = { class: "menu-label" };
const _hoisted_5$8 = {
  key: 0,
  class: "pi pi-chevron-right"
};
const _hoisted_6$7 = {
  key: 0,
  class: "submenu-divider"
};
const _hoisted_7$5 = ["onClick"];
const _hoisted_8$3 = { class: "menu-label" };
const _hoisted_9$2 = {
  key: 0,
  class: "whats-new-section"
};
const _hoisted_10$2 = { class: "section-description" };
const _hoisted_11$1 = {
  key: 0,
  role: "group",
  "aria-label": "Recent releases"
};
const _hoisted_12 = ["onClick", "onKeydown"];
const _hoisted_13 = { class: "release-content" };
const _hoisted_14 = { class: "release-title" };
const _hoisted_15 = ["datetime"];
const _hoisted_16 = { class: "normal-state" };
const _hoisted_17 = { class: "hover-state" };
const _hoisted_18 = {
  key: 1,
  class: "help-menu-item",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_19 = {
  key: 2,
  class: "help-menu-item",
  role: "status"
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "HelpCenterMenuContent",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const EXTERNAL_LINKS = {
      DOCS: "https://docs.comfy.org/",
      DISCORD: "https://www.comfy.org/discord",
      GITHUB: "https://github.com/comfyanonymous/ComfyUI",
      DESKTOP_GUIDE: "https://comfyorg.notion.site/",
      UPDATE_GUIDE: "https://docs.comfy.org/installation/update_comfyui"
    };
    const TIME_UNITS = {
      MINUTE: 60 * 1e3,
      HOUR: 60 * 60 * 1e3,
      DAY: 24 * 60 * 60 * 1e3,
      WEEK: 7 * 24 * 60 * 60 * 1e3,
      MONTH: 30 * 24 * 60 * 60 * 1e3,
      YEAR: 365 * 24 * 60 * 60 * 1e3
    };
    const SUBMENU_CONFIG = {
      DELAY_MS: 100,
      OFFSET_PX: 8,
      Z_INDEX: 10001
    };
    const { t: t2, locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const commandStore = useCommandStore();
    const settingStore = useSettingStore();
    const emit = __emit;
    const isSubmenuVisible = ref(false);
    const submenuRef = ref(null);
    const submenuStyle = ref({});
    let hoverTimeout = null;
    const hasReleases = computed(() => releaseStore2.releases.length > 0);
    const showVersionUpdates = computed(
      () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
    );
    const moreItems = computed(() => {
      const allMoreItems = [
        {
          key: "desktop-guide",
          type: "item",
          label: t2("helpCenter.desktopUserGuide"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DESKTOP_GUIDE);
            emit("close");
          }, "action")
        },
        {
          key: "dev-tools",
          type: "item",
          label: t2("helpCenter.openDevTools"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            openDevTools();
            emit("close");
          }, "action")
        },
        {
          key: "divider-1",
          type: "divider",
          visible: isElectron()
        },
        {
          key: "reinstall",
          type: "item",
          label: t2("helpCenter.reinstall"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            onReinstall();
            emit("close");
          }, "action")
        }
      ];
      return allMoreItems.filter((item) => item.visible !== false);
    });
    const hasVisibleMoreItems = computed(() => {
      return !!moreItems.value.length;
    });
    const moreMenuItem = computed(
      () => menuItems.value.find((item) => item.key === "more")
    );
    const menuItems = computed(() => {
      return [
        {
          key: "docs",
          type: "item",
          icon: "pi pi-book",
          label: t2("helpCenter.docs"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DOCS);
            emit("close");
          }, "action")
        },
        {
          key: "discord",
          type: "item",
          icon: "pi pi-discord",
          label: "Discord",
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DISCORD);
            emit("close");
          }, "action")
        },
        {
          key: "github",
          type: "item",
          icon: "pi pi-github",
          label: t2("helpCenter.github"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.GITHUB);
            emit("close");
          }, "action")
        },
        {
          key: "help",
          type: "item",
          icon: "pi pi-question-circle",
          label: t2("helpCenter.helpFeedback"),
          action: /* @__PURE__ */ __name(() => {
            void commandStore.execute("Comfy.Feedback");
            emit("close");
          }, "action")
        },
        {
          key: "more",
          type: "item",
          icon: "",
          label: t2("helpCenter.more"),
          visible: hasVisibleMoreItems.value,
          action: /* @__PURE__ */ __name(() => {
          }, "action"),
          // No action for more item
          items: moreItems.value
        }
      ];
    });
    const openExternalLink = /* @__PURE__ */ __name((url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, "openExternalLink");
    const clearHoverTimeout = /* @__PURE__ */ __name(() => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    }, "clearHoverTimeout");
    const calculateSubmenuPosition = /* @__PURE__ */ __name((button) => {
      const rect = button.getBoundingClientRect();
      const submenuWidth = 210;
      const visibleItemCount = moreMenuItem.value?.items?.filter((item) => item.visible !== false).length || 0;
      const estimatedHeight = visibleItemCount * 48 + 16;
      const submenuHeight = submenuRef.value?.offsetHeight || estimatedHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let top = rect.top;
      let left = rect.right + SUBMENU_CONFIG.OFFSET_PX;
      if (left + submenuWidth > viewportWidth) {
        left = rect.left - submenuWidth - SUBMENU_CONFIG.OFFSET_PX;
      }
      if (top + submenuHeight > viewportHeight) {
        top = Math.max(
          SUBMENU_CONFIG.OFFSET_PX,
          // Minimum distance from top of viewport
          rect.bottom - submenuHeight
        );
      }
      if (top < SUBMENU_CONFIG.OFFSET_PX) {
        top = SUBMENU_CONFIG.OFFSET_PX;
      }
      top -= 8;
      return {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: SUBMENU_CONFIG.Z_INDEX
      };
    }, "calculateSubmenuPosition");
    const formatReleaseDate = /* @__PURE__ */ __name((dateString) => {
      if (!dateString) return "date";
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const timeUnits = [
        { unit: TIME_UNITS.YEAR, suffix: "y" },
        { unit: TIME_UNITS.MONTH, suffix: "mo" },
        { unit: TIME_UNITS.WEEK, suffix: "w" },
        { unit: TIME_UNITS.DAY, suffix: "d" },
        { unit: TIME_UNITS.HOUR, suffix: "h" },
        { unit: TIME_UNITS.MINUTE, suffix: "min" }
      ];
      for (const { unit, suffix } of timeUnits) {
        const value = Math.floor(diffTime / unit);
        if (value > 0) {
          return `${value}${suffix} ago`;
        }
      }
      return "now";
    }, "formatReleaseDate");
    const shouldShowUpdateButton = /* @__PURE__ */ __name((release) => {
      return releaseStore2.shouldShowUpdateButton && release === releaseStore2.recentReleases[0];
    }, "shouldShowUpdateButton");
    const onMenuItemHover = /* @__PURE__ */ __name(async (key, event) => {
      if (key !== "more" || !moreMenuItem.value?.items) return;
      const hasVisibleItems = moreMenuItem.value.items.some(
        (item) => item.visible !== false
      );
      if (!hasVisibleItems) return;
      clearHoverTimeout();
      const moreButton = event.currentTarget;
      submenuStyle.value = calculateSubmenuPosition(moreButton);
      isSubmenuVisible.value = true;
      await nextTick();
      if (submenuRef.value) {
        submenuStyle.value = calculateSubmenuPosition(moreButton);
      }
    }, "onMenuItemHover");
    const onMenuItemLeave = /* @__PURE__ */ __name((key) => {
      if (key !== "more") return;
      hoverTimeout = window.setTimeout(() => {
        isSubmenuVisible.value = false;
      }, SUBMENU_CONFIG.DELAY_MS);
    }, "onMenuItemLeave");
    const onSubmenuHover = /* @__PURE__ */ __name(() => {
      clearHoverTimeout();
    }, "onSubmenuHover");
    const onSubmenuLeave = /* @__PURE__ */ __name(() => {
      isSubmenuVisible.value = false;
    }, "onSubmenuLeave");
    const openDevTools = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        electronAPI().openDevTools();
      }
    }, "openDevTools");
    const onReinstall = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        void electronAPI().reinstall();
      }
    }, "onReinstall");
    const onReleaseClick = /* @__PURE__ */ __name((release) => {
      void releaseStore2.handleShowChangelog(release.version);
      const versionAnchor = formatVersionAnchor(release.version);
      const changelogUrl = `${getChangelogUrl()}#${versionAnchor}`;
      openExternalLink(changelogUrl);
      emit("close");
    }, "onReleaseClick");
    const onUpdate = /* @__PURE__ */ __name((_) => {
      openExternalLink(EXTERNAL_LINKS.UPDATE_GUIDE);
      emit("close");
    }, "onUpdate");
    const getChangelogUrl = /* @__PURE__ */ __name(() => {
      const isChineseLocale = locale.value === "zh";
      return isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
    }, "getChangelogUrl");
    onMounted(async () => {
      if (!hasReleases.value) {
        await releaseStore2.fetchReleases();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$L, [
        createElementVNode("nav", _hoisted_2$j, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (menuItem) => {
            return withDirectives((openBlock(), createElementBlock("button", {
              key: menuItem.key,
              type: "button",
              class: normalizeClass(["help-menu-item", { "more-item": menuItem.key === "more" }]),
              role: "menuitem",
              onClick: menuItem.action,
              onMouseenter: /* @__PURE__ */ __name(($event) => onMenuItemHover(menuItem.key, $event), "onMouseenter"),
              onMouseleave: /* @__PURE__ */ __name(($event) => onMenuItemLeave(menuItem.key), "onMouseleave")
            }, [
              createElementVNode("i", {
                class: normalizeClass([menuItem.icon, "help-menu-icon"])
              }, null, 2),
              createElementVNode("span", _hoisted_4$c, toDisplayString(menuItem.label), 1),
              menuItem.key === "more" ? (openBlock(), createElementBlock("i", _hoisted_5$8)) : createCommentVNode("", true)
            ], 42, _hoisted_3$e)), [
              [vShow, menuItem.visible !== false]
            ]);
          }), 128))
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isSubmenuVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "submenuRef",
            ref: submenuRef,
            class: "more-submenu",
            style: normalizeStyle(submenuStyle.value),
            onMouseenter: onSubmenuHover,
            onMouseleave: onSubmenuLeave
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(moreMenuItem.value?.items, (submenuItem) => {
              return openBlock(), createElementBlock(Fragment, {
                key: submenuItem.key
              }, [
                submenuItem.type === "divider" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_6$7, null, 512)), [
                  [vShow, submenuItem.visible !== false]
                ]) : withDirectives((openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "help-menu-item submenu-item",
                  role: "menuitem",
                  onClick: submenuItem.action
                }, [
                  createElementVNode("span", _hoisted_8$3, toDisplayString(submenuItem.label), 1)
                ], 8, _hoisted_7$5)), [
                  [vShow, submenuItem.visible !== false]
                ])
              ], 64);
            }), 128))
          ], 36)) : createCommentVNode("", true)
        ])),
        showVersionUpdates.value ? (openBlock(), createElementBlock("section", _hoisted_9$2, [
          createElementVNode("h3", _hoisted_10$2, toDisplayString(_ctx.$t("helpCenter.whatsNew")), 1),
          hasReleases.value ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(releaseStore2).recentReleases, (release) => {
              return openBlock(), createElementBlock("article", {
                key: release.id || release.version,
                class: "help-menu-item release-menu-item",
                role: "button",
                tabindex: "0",
                onClick: /* @__PURE__ */ __name(($event) => onReleaseClick(release), "onClick"),
                onKeydown: [
                  withKeys(($event) => onReleaseClick(release), ["enter"]),
                  withKeys(withModifiers(($event) => onReleaseClick(release), ["prevent"]), ["space"])
                ]
              }, [
                _cache[0] || (_cache[0] = createElementVNode("i", {
                  class: "pi pi-refresh help-menu-icon",
                  "aria-hidden": "true"
                }, null, -1)),
                createElementVNode("div", _hoisted_13, [
                  createElementVNode("span", _hoisted_14, toDisplayString(_ctx.$t("g.releaseTitle", {
                    package: "Comfy",
                    version: release.version
                  })), 1),
                  createElementVNode("time", {
                    class: "release-date",
                    datetime: release.published_at
                  }, [
                    createElementVNode("span", _hoisted_16, toDisplayString(formatReleaseDate(release.published_at)), 1),
                    createElementVNode("span", _hoisted_17, toDisplayString(_ctx.$t("helpCenter.clickToLearnMore")), 1)
                  ], 8, _hoisted_15)
                ]),
                shouldShowUpdateButton(release) ? (openBlock(), createBlock(unref(Button), {
                  key: 0,
                  label: _ctx.$t("helpCenter.updateAvailable"),
                  size: "small",
                  class: "update-button",
                  onClick: withModifiers(($event) => onUpdate(release), ["stop"])
                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
              ], 40, _hoisted_12);
            }), 128))
          ])) : unref(releaseStore2).isLoading ? (openBlock(), createElementBlock("div", _hoisted_18, [
            _cache[1] || (_cache[1] = createElementVNode("i", {
              class: "pi pi-spin pi-spinner help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.loadingReleases")), 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
            _cache[2] || (_cache[2] = createElementVNode("i", {
              class: "pi pi-info-circle help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.noRecentReleases")), 1)
          ]))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const HelpCenterMenuContent = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-736988dd"]]);
const _hoisted_1$K = {
  key: 0,
  class: "release-toast-popup"
};
const _hoisted_2$i = { class: "release-notification-toast" };
const _hoisted_3$d = { class: "toast-header" };
const _hoisted_4$b = { class: "toast-text" };
const _hoisted_5$7 = { class: "toast-title" };
const _hoisted_6$6 = { class: "toast-version-badge" };
const _hoisted_7$4 = { class: "toast-actions-section" };
const _hoisted_8$2 = { class: "actions-row" };
const _hoisted_9$1 = { class: "left-actions" };
const _hoisted_10$1 = ["href"];
const _hoisted_11 = { class: "right-actions" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "ReleaseNotificationToast",
  setup(__props) {
    const { locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowToast && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    let hideTimer = null;
    const startAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        dismissToast();
      }, 8e3);
    }, "startAutoHide");
    const clearAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    }, "clearAutoHide");
    const dismissToast = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
      clearAutoHide();
    }, "dismissToast");
    const handleSkip = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleSkipRelease(latestRelease.value.version);
      }
      dismissToast();
    }, "handleSkip");
    const handleLearnMore = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleShowChangelog(latestRelease.value.version);
      }
      dismissToast();
    }, "handleLearnMore");
    const handleUpdate = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/installation/update_comfyui", "_blank");
      dismissToast();
    }, "handleUpdate");
    watch(shouldShow, (isVisible) => {
      if (isVisible) {
        startAutoHide();
      } else {
        clearAutoHide();
      }
    });
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$K, [
        createElementVNode("div", _hoisted_2$i, [
          createElementVNode("div", _hoisted_3$d, [
            _cache[0] || (_cache[0] = createElementVNode("div", { class: "toast-icon" }, [
              createElementVNode("i", { class: "pi pi-download" })
            ], -1)),
            createElementVNode("div", _hoisted_4$b, [
              createElementVNode("div", _hoisted_5$7, toDisplayString(_ctx.$t("releaseToast.newVersionAvailable")), 1),
              createElementVNode("div", _hoisted_6$6, toDisplayString(latestRelease.value?.version), 1)
            ])
          ]),
          createElementVNode("div", _hoisted_7$4, [
            createElementVNode("div", _hoisted_8$2, [
              createElementVNode("div", _hoisted_9$1, [
                createElementVNode("a", {
                  class: "learn-more-link",
                  href: changelogUrl.value,
                  target: "_blank",
                  rel: "noopener,noreferrer",
                  onClick: handleLearnMore
                }, toDisplayString(_ctx.$t("releaseToast.whatsNew")), 9, _hoisted_10$1)
              ]),
              createElementVNode("div", _hoisted_11, [
                createElementVNode("button", {
                  class: "skip-button",
                  onClick: handleSkip
                }, toDisplayString(_ctx.$t("releaseToast.skip")), 1),
                createElementVNode("button", {
                  class: "cta-button",
                  onClick: handleUpdate
                }, toDisplayString(_ctx.$t("releaseToast.update")), 1)
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ReleaseNotificationToast = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a462d327"]]);
const _hoisted_1$J = {
  key: 0,
  class: "whats-new-popup-container"
};
const _hoisted_2$h = ["aria-label"];
const _hoisted_3$c = { class: "popup-content" };
const _hoisted_4$a = ["innerHTML"];
const _hoisted_5$6 = { class: "popup-actions" };
const _hoisted_6$5 = ["href"];
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "WhatsNewPopup",
  setup(__props, { expose: __expose }) {
    const { locale, t: t2 } = useI18n();
    const releaseStore2 = useReleaseStore();
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowPopup && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    const formattedContent = computed(() => {
      if (!latestRelease.value?.content) {
        return `<p>${t2("whatsNewPopup.noReleaseNotes")}</p>`;
      }
      try {
        return marked(latestRelease.value.content, {
          gfm: true
          // Enable GitHub Flavored Markdown
        });
      } catch (error) {
        console.error("Error parsing markdown:", error);
        return latestRelease.value.content.replace(/\n/g, "<br>");
      }
    });
    const show = /* @__PURE__ */ __name(() => {
      isDismissed.value = false;
    }, "show");
    const hide = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
    }, "hide");
    const closePopup = /* @__PURE__ */ __name(async () => {
      if (latestRelease.value) {
        await releaseStore2.handleWhatsNewSeen(latestRelease.value.version);
      }
      hide();
    }, "closePopup");
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    __expose({
      show,
      hide
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$J, [
        _cache[2] || (_cache[2] = createStaticVNode('<div class="help-center-arrow" data-v-3488de00><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none" data-v-3488de00><path d="M15.25 1.27246L15.25 17.7275L0.999023 9.5L15.25 1.27246Z" fill="#353535" data-v-3488de00></path><path d="M15.25 1.27246L0.999023 9.5" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-3488de00></path><path d="M0.999023 9.5L15.25 17.7275" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-3488de00></path></svg></div>', 1)),
        createElementVNode("div", {
          class: "whats-new-popup",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("button", {
            class: "close-button",
            "aria-label": _ctx.$t("g.close"),
            onClick: closePopup
          }, _cache[1] || (_cache[1] = [
            createElementVNode("div", { class: "close-icon" }, null, -1)
          ]), 8, _hoisted_2$h),
          createElementVNode("div", _hoisted_3$c, [
            createElementVNode("div", {
              class: "content-text",
              innerHTML: formattedContent.value
            }, null, 8, _hoisted_4$a),
            createElementVNode("div", _hoisted_5$6, [
              createElementVNode("a", {
                class: "learn-more-link",
                href: changelogUrl.value,
                target: "_blank",
                rel: "noopener,noreferrer",
                onClick: closePopup
              }, toDisplayString(_ctx.$t("whatsNewPopup.learnMore")), 9, _hoisted_6$5)
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const WhatsNewPopup = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-3488de00"]]);
const useHelpCenterStore = defineStore("helpCenter", () => {
  const isVisible = ref(false);
  const toggle = /* @__PURE__ */ __name(() => {
    isVisible.value = !isVisible.value;
  }, "toggle");
  const show = /* @__PURE__ */ __name(() => {
    isVisible.value = true;
  }, "show");
  const hide = /* @__PURE__ */ __name(() => {
    isVisible.value = false;
  }, "hide");
  return {
    isVisible,
    toggle,
    show,
    hide
  };
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "SidebarHelpCenterIcon",
  setup(__props) {
    const settingStore = useSettingStore();
    const releaseStore2 = useReleaseStore();
    const helpCenterStore = useHelpCenterStore();
    const { shouldShowRedDot } = storeToRefs(releaseStore2);
    const { isVisible: isHelpCenterVisible } = storeToRefs(helpCenterStore);
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const sidebarSize = computed(() => settingStore.get("Comfy.Sidebar.Size"));
    const toggleHelpCenter = /* @__PURE__ */ __name(() => {
      helpCenterStore.toggle();
    }, "toggleHelpCenter");
    const closeHelpCenter = /* @__PURE__ */ __name(() => {
      helpCenterStore.hide();
    }, "closeHelpCenter");
    onMounted(async () => {
      await releaseStore2.initialize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(SidebarIcon, {
          icon: "pi pi-question-circle",
          class: "comfy-help-center-btn",
          tooltip: _ctx.$t("sideToolbar.helpCenter"),
          "icon-badge": unref(shouldShowRedDot) ? "•" : "",
          onClick: toggleHelpCenter
        }, null, 8, ["tooltip", "icon-badge"]),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          unref(isHelpCenterVisible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["help-center-popup", {
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            }])
          }, [
            createVNode(HelpCenterMenuContent, { onClose: closeHelpCenter })
          ], 2)) : createCommentVNode("", true)
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(ReleaseNotificationToast, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            })
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(WhatsNewPopup, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            })
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          unref(isHelpCenterVisible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "help-center-backdrop",
            onClick: closeHelpCenter
          })) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const SidebarHelpCenterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-610afff2"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "SidebarLogoutIcon",
  setup(__props) {
    const { t: t2 } = useI18n();
    const userStore = useUserStore();
    const tooltip = computed(
      () => `${t2("sideToolbar.logout")} (${userStore.currentUser?.username})`
    );
    const logout = /* @__PURE__ */ __name(async () => {
      await userStore.logout();
      window.location.reload();
    }, "logout");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "pi pi-sign-out",
        tooltip: tooltip.value,
        onClick: logout
      }, null, 8, ["tooltip"]);
    };
  }
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "SidebarTemplatesButton",
  setup(__props) {
    const settingStore = useSettingStore();
    const commandStore = useCommandStore();
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const openTemplates = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.BrowseTemplates");
    }, "openTemplates");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "icon-[comfy--template]",
        tooltip: _ctx.$t("sideToolbar.templates"),
        label: _ctx.$t("sideToolbar.labels.templates"),
        "is-small": isSmall.value,
        class: "templates-tab-button",
        onClick: openTemplates
      }, null, 8, ["tooltip", "label", "is-small"]);
    };
  }
});
const _hoisted_1$I = { class: "side-tool-bar-end" };
const _hoisted_2$g = {
  key: 0,
  class: "sidebar-content-container h-full overflow-y-auto overflow-x-hidden"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "SideToolbar",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const teleportTarget = computed(
      () => settingStore.get("Comfy.Sidebar.Location") === "left" ? ".comfyui-body-left" : ".comfyui-body-right"
    );
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const tabs = computed(() => workspaceStore.getSidebarTabs());
    const selectedTab = computed(() => workspaceStore.sidebarTab.activeSidebarTab);
    const onTabClick = /* @__PURE__ */ __name((item) => {
      workspaceStore.sidebarTab.toggleSidebarTab(item.id);
    }, "onTabClick");
    const keybindingStore = useKeybindingStore();
    const getTabTooltipSuffix = /* @__PURE__ */ __name((tab) => {
      const keybinding = keybindingStore.getKeybindingByCommandId(
        `Workspace.ToggleSidebarTab.${tab.id}`
      );
      return keybinding ? ` (${keybinding.combo.toString()})` : "";
    }, "getTabTooltipSuffix");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(Teleport, { to: teleportTarget.value }, [
          createElementVNode("nav", {
            class: normalizeClass(["side-tool-bar-container", { "small-sidebar": isSmall.value }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
              return openBlock(), createBlock(SidebarIcon, {
                key: tab.id,
                icon: tab.icon,
                "icon-badge": tab.iconBadge,
                tooltip: tab.tooltip,
                "tooltip-suffix": getTabTooltipSuffix(tab),
                label: tab.label || tab.title,
                "is-small": isSmall.value,
                selected: tab.id === selectedTab.value?.id,
                class: normalizeClass(tab.id + "-tab-button"),
                onClick: /* @__PURE__ */ __name(($event) => onTabClick(tab), "onClick")
              }, null, 8, ["icon", "icon-badge", "tooltip", "tooltip-suffix", "label", "is-small", "selected", "class", "onClick"]);
            }), 128)),
            createVNode(_sfc_main$B),
            createElementVNode("div", _hoisted_1$I, [
              unref(userStore).isMultiUserServer ? (openBlock(), createBlock(_sfc_main$C, { key: 0 })) : createCommentVNode("", true),
              createVNode(SidebarHelpCenterIcon),
              createVNode(_sfc_main$I),
              createVNode(_sfc_main$H)
            ])
          ], 2)
        ], 8, ["to"])),
        selectedTab.value ? (openBlock(), createElementBlock("div", _hoisted_2$g, [
          createVNode(_sfc_main$17, { extension: selectedTab.value }, null, 8, ["extension"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SideToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-1893a01d"]]);
const _hoisted_1$H = { class: "workflow-preview-content" };
const _hoisted_2$f = {
  key: 0,
  class: "workflow-preview-thumbnail relative"
};
const _hoisted_3$b = ["src"];
const _hoisted_4$9 = { class: "workflow-preview-footer" };
const _hoisted_5$5 = { class: "workflow-preview-name" };
const POPOVER_WIDTH = 250;
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabPopover",
  props: {
    workflowFilename: {},
    thumbnailUrl: {},
    isActiveTab: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { thumbnailUrl, isActiveTab } = toRefs(props);
    const settingStore = useSettingStore();
    const positions = computed(() => {
      if (settingStore.get("Comfy.Workflow.WorkflowTabsPosition") === "Topbar" && settingStore.get("Comfy.UseNewMenu") === "Bottom") {
        return {
          positioner: "top-0",
          root: "p-popover-flipped",
          active: isActiveTab.value ? "translateY(-100%)" : void 0
        };
      }
      return {
        positioner: "bottom-0"
      };
    });
    const popoverRef = ref(null);
    const positionRef = ref(null);
    let hideTimeout = null;
    let showTimeout = null;
    const id = useId();
    const showPopover = /* @__PURE__ */ __name((event) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      showTimeout = setTimeout(async () => {
        if (popoverRef.value && positionRef.value) {
          popoverRef.value.show(event, positionRef.value);
          await nextTick();
          const el = document.querySelector(
            `.workflow-popover-fade[data-popover-id="${id}"]`
          );
          if (el) {
            const middle = positionRef.value.getBoundingClientRect().left;
            const popoverWidth = el.getBoundingClientRect().width;
            const halfWidth = popoverWidth / 2;
            let pos = middle - halfWidth;
            let shift = 0;
            if (pos < 0) {
              shift = pos - 8;
              pos = 8;
            } else if (pos + popoverWidth > window.innerWidth) {
              const newPos = window.innerWidth - popoverWidth - 16;
              shift = pos - newPos;
              pos = newPos;
            }
            if (shift + halfWidth < 0) {
              shift = -halfWidth + 24;
            }
            el.style.left = `${pos}px`;
            el.style.setProperty("--shift", `${shift}px`);
          }
        }
      }, 200);
    }, "showPopover");
    const cancelHidePopover = /* @__PURE__ */ __name(() => {
    }, "cancelHidePopover");
    const hidePopover = /* @__PURE__ */ __name(() => {
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      hideTimeout = setTimeout(() => {
        if (popoverRef.value) {
          popoverRef.value.hide();
        }
      }, 100);
    }, "hidePopover");
    const togglePopover = /* @__PURE__ */ __name((event) => {
      if (popoverRef.value) {
        popoverRef.value.toggle(event);
      }
    }, "togglePopover");
    __expose({
      showPopover,
      hidePopover,
      togglePopover
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          ref_key: "positionRef",
          ref: positionRef,
          class: normalizeClass(["absolute left-1/2 -translate-x-1/2", positions.value.positioner])
        }, null, 2),
        createVNode(unref(Popover), {
          ref_key: "popoverRef",
          ref: popoverRef,
          "append-to": "body",
          pt: {
            root: {
              class: "workflow-popover-fade fit-content " + positions.value.root,
              "data-popover-id": unref(id),
              style: {
                transform: positions.value.active
              }
            }
          },
          onMouseenter: cancelHidePopover,
          onMouseleave: hidePopover
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$H, [
              unref(thumbnailUrl) && !unref(isActiveTab) ? (openBlock(), createElementBlock("div", _hoisted_2$f, [
                createElementVNode("img", {
                  src: unref(thumbnailUrl),
                  class: "block h-[200px] object-cover rounded-lg p-2",
                  style: normalizeStyle({ width: `${POPOVER_WIDTH}px` })
                }, null, 12, _hoisted_3$b)
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_4$9, [
                createElementVNode("span", _hoisted_5$5, toDisplayString(_ctx.workflowFilename), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 64);
    };
  }
});
const WorkflowTabPopover = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-44f85849"]]);
const _hoisted_1$G = { class: "workflow-label text-sm max-w-[150px] truncate inline-block" };
const _hoisted_2$e = { class: "relative" };
const _hoisted_3$a = {
  key: 0,
  class: "status-indicator"
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTab",
  props: {
    class: {},
    workflowOption: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const settingStore = useSettingStore();
    const workflowTabRef = ref(null);
    const popoverRef = ref(null);
    const workflowThumbnail = useWorkflowThumbnail();
    const autoSaveSetting = computed(
      () => settingStore.get("Comfy.Workflow.AutoSave")
    );
    const autoSaveDelay = computed(
      () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
    );
    const shouldShowStatusIndicator = computed(() => {
      if (workspaceStore.shiftDown) {
        return false;
      }
      if (!props.workflowOption.workflow.isPersisted) {
        return true;
      }
      if (props.workflowOption.workflow.isModified) {
        if (autoSaveSetting.value === "off") {
          return true;
        }
        if (autoSaveSetting.value === "after delay" && autoSaveDelay.value > 3e3) {
          return true;
        }
        return false;
      }
      return false;
    });
    const isActiveTab = computed(() => {
      return workflowStore.activeWorkflow?.key === props.workflowOption.workflow.key;
    });
    const thumbnailUrl = computed(() => {
      return workflowThumbnail.getThumbnail(props.workflowOption.workflow.key);
    });
    const handleMouseEnter = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.showPopover(event);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      popoverRef.value?.hidePopover();
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.togglePopover(event);
    }, "handleClick");
    const closeWorkflows = /* @__PURE__ */ __name(async (options) => {
      for (const opt of options) {
        if (!await useWorkflowService().closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown,
          hint: t2("sideToolbar.workflowTab.dirtyCloseHint")
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const tabGetter = /* @__PURE__ */ __name(() => workflowTabRef.value, "tabGetter");
    usePragmaticDraggable(tabGetter, {
      getInitialData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getInitialData")
    });
    usePragmaticDroppable(tabGetter, {
      getData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getData"),
      onDrop: /* @__PURE__ */ __name((e) => {
        const fromIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.source.data.workflowKey
        );
        const toIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.location.current.dropTargets[0]?.data.workflowKey
        );
        if (fromIndex !== toIndex) {
          workflowStore.reorderWorkflows(fromIndex, toIndex);
        }
      }, "onDrop")
    });
    onUnmounted(() => {
      popoverRef.value?.hidePopover();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", mergeProps({
          ref_key: "workflowTabRef",
          ref: workflowTabRef,
          class: "flex p-2 gap-2 workflow-tab"
        }, _ctx.$attrs, {
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave,
          onClick: handleClick
        }), [
          createElementVNode("span", _hoisted_1$G, toDisplayString(_ctx.workflowOption.workflow.filename), 1),
          createElementVNode("div", _hoisted_2$e, [
            shouldShowStatusIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_3$a, "•")) : createCommentVNode("", true),
            createVNode(unref(Button), {
              class: "close-button p-0 w-auto",
              icon: "pi pi-times",
              text: "",
              severity: "secondary",
              size: "small",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onCloseWorkflow(_ctx.workflowOption), ["stop"]))
            })
          ])
        ], 16),
        createVNode(WorkflowTabPopover, {
          ref_key: "popoverRef",
          ref: popoverRef,
          "workflow-filename": _ctx.workflowOption.workflow.filename,
          "thumbnail-url": thumbnailUrl.value,
          "is-active-tab": isActiveTab.value
        }, null, 8, ["workflow-filename", "thumbnail-url", "is-active-tab"])
      ], 64);
    };
  }
});
const WorkflowTab = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-15631bdb"]]);
const useOverflowObserver = /* @__PURE__ */ __name((element, options) => {
  options = {
    debounceTime: 25,
    useMutationObserver: true,
    useResizeObserver: true,
    ...options
  };
  const isOverflowing = ref(false);
  const disposeFns = [];
  const disposed = ref(false);
  const checkOverflowFn = /* @__PURE__ */ __name(() => {
    isOverflowing.value = element.scrollWidth > element.clientWidth;
    options.onCheck?.(isOverflowing.value);
  }, "checkOverflowFn");
  const checkOverflow = options.debounceTime ? debounce(checkOverflowFn, options.debounceTime) : checkOverflowFn;
  if (options.useMutationObserver) {
    disposeFns.push(
      useMutationObserver(element, checkOverflow, {
        subtree: true,
        childList: true
      }).stop
    );
  }
  if (options.useResizeObserver) {
    disposeFns.push(useResizeObserver(element, checkOverflow).stop);
  }
  return {
    isOverflowing: readonly(isOverflowing),
    disposed: readonly(disposed),
    checkOverflow,
    dispose: /* @__PURE__ */ __name(() => {
      disposed.value = true;
      disposeFns.forEach((fn) => fn());
    }, "dispose")
  };
}, "useOverflowObserver");
const whileMouseDown = /* @__PURE__ */ __name((elementOrEvent, callback, interval = 30) => {
  const element = elementOrEvent instanceof HTMLElement ? elementOrEvent : elementOrEvent.target;
  let iteration = 0;
  const intervalId = setInterval(() => {
    callback(iteration++);
  }, interval);
  const dispose = /* @__PURE__ */ __name(() => {
    clearInterval(intervalId);
    disposeGlobal();
    disposeLocal();
  }, "dispose");
  const disposeGlobal = useEventListener(document, "mouseup", dispose);
  const disposeLocal = useEventListener(element, "mouseup", dispose);
  return {
    dispose
  };
}, "whileMouseDown");
const _hoisted_1$F = {
  key: 2,
  class: "window-actions-spacer flex-shrink-0 app-drag"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabs",
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const workflowBookmarkStore = useWorkflowBookmarkStore();
    const settingStore = useSettingStore();
    const workflowService = useWorkflowService();
    const rightClickedTab = ref();
    const menu = ref();
    const scrollPanelRef = ref();
    const showOverflowArrows = ref(false);
    const leftArrowEnabled = ref(false);
    const rightArrowEnabled = ref(false);
    const isDesktop = isElectron();
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const workflowToOption = /* @__PURE__ */ __name((workflow) => ({
      value: workflow.path,
      workflow
    }), "workflowToOption");
    const options = computed(
      () => workflowStore.openWorkflows.map(workflowToOption)
    );
    const selectedWorkflow = computed(
      () => workflowStore.activeWorkflow ? workflowToOption(workflowStore.activeWorkflow) : null
    );
    const onWorkflowChange = /* @__PURE__ */ __name(async (option) => {
      if (!option) {
        return;
      }
      if (selectedWorkflow.value?.value === option.value) {
        return;
      }
      await workflowService.openWorkflow(option.workflow);
    }, "onWorkflowChange");
    const closeWorkflows = /* @__PURE__ */ __name(async (options2) => {
      for (const opt of options2) {
        if (!await workflowService.closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const showContextMenu = /* @__PURE__ */ __name((event, option) => {
      rightClickedTab.value = option;
      menu.value.show(event);
    }, "showContextMenu");
    const contextMenuItems = computed(() => {
      const tab = rightClickedTab.value;
      if (!tab) return [];
      const index2 = options.value.findIndex((v) => v.workflow === tab.workflow);
      return [
        {
          label: t2("tabMenu.duplicateTab"),
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(tab.workflow);
          }, "command")
        },
        {
          separator: true
        },
        {
          label: t2("tabMenu.closeTab"),
          command: /* @__PURE__ */ __name(() => onCloseWorkflow(tab), "command")
        },
        {
          label: t2("tabMenu.closeTabsToLeft"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(0, index2)), "command"),
          disabled: index2 <= 0
        },
        {
          label: t2("tabMenu.closeTabsToRight"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(index2 + 1)), "command"),
          disabled: index2 === options.value.length - 1
        },
        {
          label: t2("tabMenu.closeOtherTabs"),
          command: /* @__PURE__ */ __name(() => closeWorkflows([
            ...options.value.slice(index2 + 1),
            ...options.value.slice(0, index2)
          ]), "command"),
          disabled: options.value.length <= 1
        },
        {
          label: workflowBookmarkStore.isBookmarked(tab.workflow.path) ? t2("tabMenu.removeFromBookmarks") : t2("tabMenu.addToBookmarks"),
          command: /* @__PURE__ */ __name(() => workflowBookmarkStore.toggleBookmarked(tab.workflow.path), "command"),
          disabled: tab.workflow.isTemporary
        }
      ];
    });
    const commandStore = useCommandStore();
    const handleWheel = /* @__PURE__ */ __name((event) => {
      const scrollElement = event.currentTarget;
      const scrollAmount = event.deltaX || event.deltaY;
      scrollElement.scroll({
        left: scrollElement.scrollLeft + scrollAmount
      });
    }, "handleWheel");
    const scroll = /* @__PURE__ */ __name((direction) => {
      const scrollElement = scrollPanelRef.value.$el.querySelector(
        ".p-scrollpanel-content"
      );
      scrollElement.scrollBy({ left: direction * 20 });
    }, "scroll");
    watch(
      () => workflowStore.activeWorkflow,
      async () => {
        if (!selectedWorkflow.value) return;
        await nextTick();
        const activeTabElement = document.querySelector(".p-togglebutton-checked");
        if (!activeTabElement || !scrollPanelRef.value) return;
        const container = scrollPanelRef.value.$el.querySelector(
          ".p-scrollpanel-content"
        );
        if (!container) return;
        const tabRect = activeTabElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetLeft = tabRect.left - containerRect.left;
        const offsetRight = tabRect.right - containerRect.right;
        if (offsetRight > 0) {
          container.scrollBy({ left: offsetRight });
        } else if (offsetLeft < 0) {
          container.scrollBy({ left: offsetLeft });
        }
      },
      { immediate: true }
    );
    const scrollContent = computed(
      () => scrollPanelRef.value?.$el.querySelector(
        ".p-scrollpanel-content"
      )
    );
    let overflowObserver = null;
    let overflowWatch = null;
    watch(scrollContent, (value) => {
      const scrollState = useScroll(value);
      watch(scrollState.arrivedState, () => {
        leftArrowEnabled.value = !scrollState.arrivedState.left;
        rightArrowEnabled.value = !scrollState.arrivedState.right;
      });
      overflowObserver?.dispose();
      overflowWatch?.stop();
      overflowObserver = useOverflowObserver(value);
      overflowWatch = watch(
        overflowObserver.isOverflowing,
        (value2) => {
          showOverflowArrows.value = value2;
          void nextTick(() => {
            scrollState.measure();
          });
        },
        { immediate: true }
      );
    });
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["workflow-tabs-container flex flex-row max-w-full h-full flex-auto overflow-hidden", { "workflow-tabs-container-desktop": unref(isDesktop) }])
      }, [
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          icon: "pi pi-chevron-left",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-left",
          disabled: !leftArrowEnabled.value,
          onMousedown: _cache[0] || (_cache[0] = ($event) => unref(whileMouseDown)($event, () => scroll(-1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        createVNode(unref(ScrollPanel), {
          ref_key: "scrollPanelRef",
          ref: scrollPanelRef,
          class: "overflow-hidden no-drag",
          "pt:content": {
            class: "p-0 w-full",
            onwheel: handleWheel
          },
          "pt:bar-x": "h-1"
        }, {
          default: withCtx(() => [
            createVNode(unref(SelectButton), {
              class: normalizeClass(["workflow-tabs bg-transparent", props.class]),
              "model-value": selectedWorkflow.value,
              options: options.value,
              "option-label": "label",
              "data-key": "value",
              "onUpdate:modelValue": onWorkflowChange
            }, {
              option: withCtx(({ option }) => [
                createVNode(WorkflowTab, {
                  "workflow-option": option,
                  onContextmenu: /* @__PURE__ */ __name(($event) => showContextMenu($event, option), "onContextmenu"),
                  onMouseup: withModifiers(($event) => onCloseWorkflow(option), ["middle"])
                }, null, 8, ["workflow-option", "onContextmenu", "onMouseup"])
              ]),
              _: 1
            }, 8, ["class", "model-value", "options"])
          ]),
          _: 1
        }, 8, ["pt:content"]),
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 1,
          icon: "pi pi-chevron-right",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-right",
          disabled: !rightArrowEnabled.value,
          onMousedown: _cache[1] || (_cache[1] = ($event) => unref(whileMouseDown)($event, () => scroll(1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        withDirectives(createVNode(unref(Button), {
          class: "new-blank-workflow-button flex-shrink-0 no-drag rounded-none",
          icon: "pi pi-plus",
          text: "",
          severity: "secondary",
          "aria-label": _ctx.$t("sideToolbar.newBlankWorkflow"),
          onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.NewBlankWorkflow"))
        }, null, 8, ["aria-label"]), [
          [_directive_tooltip, { value: _ctx.$t("sideToolbar.newBlankWorkflow"), showDelay: 300 }]
        ]),
        createVNode(unref(ContextMenu), {
          ref_key: "menu",
          ref: menu,
          model: contextMenuItems.value
        }, null, 8, ["model"]),
        menuSetting.value !== "Bottom" && unref(isDesktop) ? (openBlock(), createElementBlock("div", _hoisted_1$F)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const WorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-a1b65b34"]]);
const _hoisted_1$E = { class: "w-auto max-w-full" };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "SecondRowWorkflowTabs",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$E, [
        createVNode(WorkflowTabs)
      ]);
    };
  }
});
const SecondRowWorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-2dbac56c"]]);
function safePricingExecution(fn, node, fallback = "") {
  try {
    return fn(node);
  } catch (error) {
    if (false) {
      console.warn(
        "Pricing calculation failed for node:",
        node.constructor?.nodeData?.name,
        error
      );
    }
    return fallback;
  }
}
__name(safePricingExecution, "safePricingExecution");
const calculateRunwayDurationPrice = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration"
  );
  if (!durationWidget) return "$0.05/second";
  const duration = Number(durationWidget.value);
  const validDuration = isNaN(duration) ? 5 : duration;
  const cost = (0.05 * validDuration).toFixed(2);
  return `$${cost}/Run`;
}, "calculateRunwayDurationPrice");
const pixversePricingCalculator = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration_seconds"
  );
  const qualityWidget = node.widgets?.find(
    (w) => w.name === "quality"
  );
  const motionModeWidget = node.widgets?.find(
    (w) => w.name === "motion_mode"
  );
  if (!durationWidget || !qualityWidget) {
    return "$0.45-1.2/Run (varies with duration, quality & motion mode)";
  }
  const duration = String(durationWidget.value);
  const quality = String(qualityWidget.value);
  const motionMode = String(motionModeWidget?.value);
  if (duration.includes("5")) {
    if (quality.includes("1080p")) return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$0.6/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  } else if (duration.includes("8")) {
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  }
  return "$0.9/Run";
}, "pixversePricingCalculator");
const apiNodeCosts = {
  FluxProCannyNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProDepthNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProExpandNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProFillNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProUltraImageNode: {
    displayPrice: "$0.06/Run"
  },
  FluxProKontextProNode: {
    displayPrice: "$0.04/Run"
  },
  FluxProKontextMaxNode: {
    displayPrice: "$0.08/Run"
  },
  IdeogramV1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.02-0.06 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.02 : 0.06;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.05-0.08 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.05 : 0.08;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const renderingSpeedWidget = node.widgets?.find(
        (w) => w.name === "rendering_speed"
      );
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      if (!renderingSpeedWidget)
        return "$0.03-0.08 x num_images/Run (varies with rendering speed & num_images)";
      const numImages = Number(numImagesWidget?.value) || 1;
      let basePrice = 0.06;
      const renderingSpeed = String(renderingSpeedWidget.value);
      if (renderingSpeed.toLowerCase().includes("quality")) {
        basePrice = 0.09;
      } else if (renderingSpeed.toLowerCase().includes("balanced")) {
        basePrice = 0.06;
      } else if (renderingSpeed.toLowerCase().includes("turbo")) {
        basePrice = 0.03;
      }
      const totalCost = (basePrice * numImages).toFixed(2);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingCameraControlI2VNode: {
    displayPrice: "$0.49/Run"
  },
  KlingCameraControlT2VNode: {
    displayPrice: "$0.14/Run"
  },
  KlingDualCharacterVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget || !modelWidget || !durationWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      console.log("modelValue", modelValue);
      console.log("modeValue", modeValue);
      console.log("durationValue", durationValue);
      if (modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImage2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget) {
        if (!modelWidget)
          return "$0.14-2.80/Run (varies with model, mode & duration)";
        const modelValue2 = String(modelWidget.value);
        if (modelValue2.includes("v2-1-master") || modelValue2.includes("v2-master")) {
          return "$1.40/Run";
        } else if (modelValue2.includes("v1-6") || modelValue2.includes("v1-5")) {
          return "$0.28/Run";
        }
        return "$0.14/Run";
      }
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      console.log("modelValue", modelValue);
      console.log("modeValue", modeValue);
      console.log("durationValue", durationValue);
      if (modelValue.includes("v2-1-master") || modelValue.includes("v2-master")) {
        if (durationValue.includes("10")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modelValue.includes("v2-1") || modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImageGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const imageInputWidget = node.inputs?.find((i) => i.name === "image");
      const modality = imageInputWidget?.link ? "image to image" : "text to image";
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!modelWidget)
        return "$0.0035-0.028 x n/Run (varies with modality & model)";
      const model = String(modelWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.014;
      if (modality.includes("text to image")) {
        if (model.includes("kling-v1-5") || model.includes("kling-v2")) {
          basePrice = 0.014;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      } else if (modality.includes("image to image")) {
        if (model.includes("kling-v1-5")) {
          basePrice = 0.028;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      }
      const totalCost = (basePrice * n).toFixed(4);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingLipSyncAudioToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingLipSyncTextToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingSingleImageVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const effectSceneWidget = node.widgets?.find(
        (w) => w.name === "effect_scene"
      );
      if (!effectSceneWidget)
        return "$0.28-0.49/Run (varies with effect scene)";
      const effectScene = String(effectSceneWidget.value);
      if (effectScene.includes("fuzzyfuzzy") || effectScene.includes("squish")) {
        return "$0.28/Run";
      } else if (effectScene.includes("dizzydizzy")) {
        return "$0.49/Run";
      } else if (effectScene.includes("bloombloom")) {
        return "$0.49/Run";
      } else if (effectScene.includes("expansion")) {
        return "$0.28/Run";
      }
      return "$0.28/Run";
    }, "displayPrice")
  },
  KlingStartEndFrameNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingTextToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-1-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingVideoExtendNode: {
    displayPrice: "$0.28/Run"
  },
  KlingVirtualTryOnNode: {
    displayPrice: "$0.07/Run"
  },
  LumaImageToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      console.log("model", model);
      console.log("resolution", resolution);
      console.log("duration", duration);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1.6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  LumaVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1-6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  MinimaxImageToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  MinimaxTextToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  MinimaxHailuoVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!resolutionWidget || !durationWidget) {
        return "$0.28-0.56/Run (varies with resolution & duration)";
      }
      const resolution = String(resolutionWidget.value);
      const duration = String(durationWidget.value);
      if (resolution.includes("768P")) {
        if (duration.includes("6")) return "$0.28/Run";
        if (duration.includes("10")) return "$0.56/Run";
      } else if (resolution.includes("1080P")) {
        if (duration.includes("6")) return "$0.49/Run";
      }
      return "$0.43/Run";
    }, "displayPrice")
  },
  OpenAIDalle2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!sizeWidget) return "$0.016-0.02 x n/Run (varies with size & n)";
      const size = String(sizeWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.02;
      if (size.includes("1024x1024")) {
        basePrice = 0.02;
      } else if (size.includes("512x512")) {
        basePrice = 0.018;
      } else if (size.includes("256x256")) {
        basePrice = 0.016;
      }
      const totalCost = (basePrice * n).toFixed(3);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  OpenAIDalle3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      if (!sizeWidget || !qualityWidget)
        return "$0.04-0.12/Run (varies with size & quality)";
      const size = String(sizeWidget.value);
      const quality = String(qualityWidget.value);
      if (size.includes("1024x1024")) {
        return quality.includes("hd") ? "$0.08/Run" : "$0.04/Run";
      } else if (size.includes("1792x1024") || size.includes("1024x1792")) {
        return quality.includes("hd") ? "$0.12/Run" : "$0.08/Run";
      }
      return "$0.04/Run";
    }, "displayPrice")
  },
  OpenAIGPTImage1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!qualityWidget)
        return "$0.011-0.30 x n/Run (varies with quality & n)";
      const quality = String(qualityWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePriceRange = "$0.046-0.07";
      if (quality.includes("high")) {
        basePriceRange = "$0.167-0.30";
      } else if (quality.includes("medium")) {
        basePriceRange = "$0.046-0.07";
      } else if (quality.includes("low")) {
        basePriceRange = "$0.011-0.02";
      }
      if (n === 1) {
        return `${basePriceRange}/Run`;
      } else {
        return `${basePriceRange} x ${n}/Run`;
      }
    }, "displayPrice")
  },
  PikaImageToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaScenesV2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.3/Run";
        if (resolution.includes("1080p")) return "$0.5/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.4/Run";
        if (resolution.includes("1080p")) return "$1.5/Run";
      }
      return "$0.3/Run";
    }, "displayPrice")
  },
  PikaStartEndFrameNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.2/Run";
        if (resolution.includes("1080p")) return "$0.3/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.25/Run";
        if (resolution.includes("1080p")) return "$1.0/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaTextToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.5/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.45/Run";
    }, "displayPrice")
  },
  Pikadditions: {
    displayPrice: "$0.3/Run"
  },
  Pikaffects: {
    displayPrice: "$0.45/Run"
  },
  Pikaswaps: {
    displayPrice: "$0.3/Run"
  },
  PixverseImageToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTextToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTransitionVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  RecraftCreativeUpscaleNode: {
    displayPrice: "$0.25/Run"
  },
  RecraftCrispUpscaleNode: {
    displayPrice: "$0.004/Run"
  },
  RecraftGenerateColorFromImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateVectorImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageInpaintingNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftRemoveBackgroundNode: {
    displayPrice: "$0.01/Run"
  },
  RecraftReplaceBackgroundNode: {
    displayPrice: "$0.04/Run"
  },
  RecraftTextToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftTextToVectorNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftVectorizeImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.01 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.01 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  StabilityStableImageSD_3_5Node: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "$0.035-0.065/Run (varies with model)";
      const model = String(modelWidget.value).toLowerCase();
      if (model.includes("large")) {
        return "$0.065/Run";
      } else if (model.includes("medium")) {
        return "$0.035/Run";
      }
      return "$0.035/Run";
    }, "displayPrice")
  },
  StabilityStableImageUltraNode: {
    displayPrice: "$0.08/Run"
  },
  StabilityUpscaleConservativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleCreativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleFastNode: {
    displayPrice: "$0.01/Run"
  },
  VeoVideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration_seconds"
      );
      if (!durationWidget) return "$2.50-5.0/Run (varies with duration)";
      const price = 0.5 * Number(durationWidget.value);
      return `$${price.toFixed(2)}/Run`;
    }, "displayPrice")
  },
  Veo3VideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const generateAudioWidget = node.widgets?.find(
        (w) => w.name === "generate_audio"
      );
      if (!modelWidget || !generateAudioWidget) {
        return "$2.00-6.00/Run (varies with model & audio generation)";
      }
      const model = String(modelWidget.value);
      const generateAudio = String(generateAudioWidget.value).toLowerCase() === "true";
      if (model.includes("veo-3.0-fast-generate-001")) {
        return generateAudio ? "$3.20/Run" : "$2.00/Run";
      } else if (model.includes("veo-3.0-generate-001")) {
        return generateAudio ? "$6.00/Run" : "$4.00/Run";
      }
      return "$2.00-6.00/Run";
    }, "displayPrice")
  },
  LumaImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const aspectRatioWidget = node.widgets?.find(
        (w) => w.name === "aspect_ratio"
      );
      if (!modelWidget || !aspectRatioWidget) {
        return "$0.0045-0.0182/Run (varies with model & aspect ratio)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  LumaImageModifyNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) {
        return "$0.0019-0.0073/Run (varies with model)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  MoonvalleyTxt2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyImg2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyVideo2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$2.25/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$2.25/Run";
      } else if (length === "10s") {
        return "$4.00/Run";
      }
      return "$2.25/Run";
    }, "displayPrice")
  },
  // Runway nodes - using actual node names from ComfyUI
  RunwayTextToImageNode: {
    displayPrice: "$0.08/Run"
  },
  RunwayImageToVideoNodeGen3a: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayImageToVideoNodeGen4: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayFirstLastFrameNode: {
    displayPrice: calculateRunwayDurationPrice
  },
  // Rodin nodes - all have the same pricing structure
  Rodin3D_Regular: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Detail: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Smooth: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Sketch: {
    displayPrice: "$0.4/Run"
  },
  // Tripo nodes - using actual node names from ComfyUI
  TripoTextToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.1-0.4/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.10/Run";
          else return "$0.15/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          } else {
            if (!texture) return "$0.20/Run";
            else return "$0.25/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.15/Run";
          else return "$0.20/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          } else {
            if (!texture) return "$0.25/Run";
            else return "$0.30/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoImageToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoRefineNode: {
    displayPrice: "$0.3/Run"
  },
  TripoTextureNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!textureQualityWidget) return "$0.1-0.2/Run (varies with quality)";
      const textureQuality = String(textureQualityWidget.value);
      return textureQuality.includes("detailed") ? "$0.2/Run" : "$0.1/Run";
    }, "displayPrice")
  },
  TripoConvertModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoRetargetRiggedModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoMultiviewToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  // Google/Gemini nodes
  GeminiNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("veo-2.0")) {
        return "$0.5/second";
      } else if (model.includes("gemini-2.5-flash-preview-04-17")) {
        return "$0.0003/$0.0025 per 1K tokens";
      } else if (model.includes("gemini-2.5-flash")) {
        return "$0.0003/$0.0025 per 1K tokens";
      } else if (model.includes("gemini-2.5-pro-preview-05-06")) {
        return "$0.00125/$0.01 per 1K tokens";
      } else if (model.includes("gemini-2.5-pro")) {
        return "$0.00125/$0.01 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  },
  // OpenAI nodes
  OpenAIChatNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("o4-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o1-pro")) {
        return "$0.15/$0.60 per 1K tokens";
      } else if (model.includes("o1")) {
        return "$0.015/$0.06 per 1K tokens";
      } else if (model.includes("o3-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o3")) {
        return "$0.01/$0.04 per 1K tokens";
      } else if (model.includes("gpt-4o")) {
        return "$0.0025/$0.01 per 1K tokens";
      } else if (model.includes("gpt-4.1-nano")) {
        return "$0.0001/$0.0004 per 1K tokens";
      } else if (model.includes("gpt-4.1-mini")) {
        return "$0.0004/$0.0016 per 1K tokens";
      } else if (model.includes("gpt-4.1")) {
        return "$0.002/$0.008 per 1K tokens";
      } else if (model.includes("gpt-5-nano")) {
        return "$0.00005/$0.0004 per 1K tokens";
      } else if (model.includes("gpt-5-mini")) {
        return "$0.00025/$0.002 per 1K tokens";
      } else if (model.includes("gpt-5")) {
        return "$0.00125/$0.01 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  },
  ViduTextToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduImageToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduReferenceVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ViduStartEndToVideoNode: {
    displayPrice: "$0.4/Run"
  },
  ByteDanceImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("seedream-3-0-t2i")) {
        return "$0.03/Run";
      }
      return "Token-based";
    }, "displayPrice")
  },
  ByteDanceImageEditNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("seededit-3-0-i2i")) {
        return "$0.03/Run";
      }
      return "Token-based";
    }, "displayPrice")
  }
};
const useNodePricing = /* @__PURE__ */ __name(() => {
  const getNodeDisplayPrice = /* @__PURE__ */ __name((node) => {
    if (!node.constructor?.nodeData?.api_node) return "";
    const nodeName = node.constructor.nodeData.name;
    const priceConfig = apiNodeCosts[nodeName];
    if (!priceConfig) return "";
    if (typeof priceConfig.displayPrice === "function") {
      return safePricingExecution(priceConfig.displayPrice, node, "");
    }
    return priceConfig.displayPrice;
  }, "getNodeDisplayPrice");
  const getNodePricingConfig = /* @__PURE__ */ __name((node) => apiNodeCosts[node.constructor.nodeData?.name ?? ""], "getNodePricingConfig");
  const getRelevantWidgetNames = /* @__PURE__ */ __name((nodeType) => {
    const widgetMap = {
      KlingTextToVideoNode: ["mode", "model_name", "duration"],
      KlingImage2VideoNode: ["mode", "model_name", "duration"],
      KlingImageGenerationNode: ["modality", "model_name", "n"],
      KlingDualCharacterVideoEffectNode: ["mode", "model_name", "duration"],
      KlingSingleImageVideoEffectNode: ["effect_scene"],
      KlingStartEndFrameNode: ["mode", "model_name", "duration"],
      MinimaxHailuoVideoNode: ["resolution", "duration"],
      OpenAIDalle3: ["size", "quality"],
      OpenAIDalle2: ["size", "n"],
      OpenAIGPTImage1: ["quality", "n"],
      IdeogramV1: ["num_images", "turbo"],
      IdeogramV2: ["num_images", "turbo"],
      IdeogramV3: ["rendering_speed", "num_images"],
      FluxProKontextProNode: [],
      FluxProKontextMaxNode: [],
      VeoVideoGenerationNode: ["duration_seconds"],
      Veo3VideoGenerationNode: ["model", "generate_audio"],
      LumaVideoNode: ["model", "resolution", "duration"],
      LumaImageToVideoNode: ["model", "resolution", "duration"],
      LumaImageNode: ["model", "aspect_ratio"],
      LumaImageModifyNode: ["model", "aspect_ratio"],
      PikaTextToVideoNode2_2: ["duration", "resolution"],
      PikaImageToVideoNode2_2: ["duration", "resolution"],
      PikaScenesV2_2: ["duration", "resolution"],
      PikaStartEndFrameNode2_2: ["duration", "resolution"],
      PixverseTextToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      PixverseTransitionVideoNode: [
        "duration_seconds",
        "motion_mode",
        "quality"
      ],
      PixverseImageToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      StabilityStableImageSD_3_5Node: ["model"],
      RecraftTextToImageNode: ["n"],
      RecraftImageToImageNode: ["n"],
      RecraftImageInpaintingNode: ["n"],
      RecraftTextToVectorNode: ["n"],
      RecraftVectorizeImageNode: ["n"],
      RecraftGenerateColorFromImageNode: ["n"],
      RecraftGenerateImageNode: ["n"],
      RecraftGenerateVectorImageNode: ["n"],
      MoonvalleyTxt2VideoNode: ["length"],
      MoonvalleyImg2VideoNode: ["length"],
      MoonvalleyVideo2VideoNode: ["length"],
      // Runway nodes
      RunwayImageToVideoNodeGen3a: ["duration"],
      RunwayImageToVideoNodeGen4: ["duration"],
      RunwayFirstLastFrameNode: ["duration"],
      // Tripo nodes
      TripoTextToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoImageToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoTextureNode: ["texture_quality"],
      // Google/Gemini nodes
      GeminiNode: ["model"],
      // OpenAI nodes
      OpenAIChatNode: ["model"],
      // ByteDance
      ByteDanceImageNode: ["model"],
      ByteDanceImageEditNode: ["model"]
    };
    return widgetMap[nodeType] || [];
  }, "getRelevantWidgetNames");
  return {
    getNodeDisplayPrice,
    getNodePricingConfig,
    getRelevantWidgetNames
  };
}, "useNodePricing");
const useComputedWithWidgetWatch = /* @__PURE__ */ __name((node, options = {}) => {
  const { widgetNames, triggerCanvasRedraw = false } = options;
  const widgetValues = ref({});
  if (node.widgets) {
    const widgetsToObserve = widgetNames ? node.widgets.filter((widget) => widgetNames.includes(widget.name)) : node.widgets;
    const currentValues = {};
    widgetsToObserve.forEach((widget) => {
      currentValues[widget.name] = widget.value;
    });
    widgetValues.value = currentValues;
    widgetsToObserve.forEach((widget) => {
      widget.callback = useChainCallback(widget.callback, () => {
        widgetValues.value = {
          ...widgetValues.value,
          [widget.name]: widget.value
        };
        if (triggerCanvasRedraw) {
          node.graph?.setDirtyCanvas(true, true);
        }
      });
    });
  }
  return (computeFn) => {
    return computedWithControl(widgetValues, computeFn);
  };
}, "useComputedWithWidgetWatch");
const useNodeBadge = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const extensionStore = useExtensionStore();
  const colorPaletteStore = useColorPaletteStore();
  const nodeSourceBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeSourceBadgeMode")
  );
  const nodeIdBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeIdBadgeMode")
  );
  const nodeLifeCycleBadgeMode = computed(
    () => settingStore.get(
      "Comfy.NodeBadge.NodeLifeCycleBadgeMode"
    )
  );
  const showApiPricingBadge = computed(
    () => settingStore.get("Comfy.NodeBadge.ShowApiPricing")
  );
  watch(
    [
      nodeSourceBadgeMode,
      nodeIdBadgeMode,
      nodeLifeCycleBadgeMode,
      showApiPricingBadge
    ],
    () => {
      app.graph?.setDirtyCanvas(true, true);
    }
  );
  const nodeDefStore = useNodeDefStore();
  function badgeTextVisible(nodeDef, badgeMode) {
    return !(badgeMode === NodeBadgeMode.None || nodeDef?.isCoreNode && badgeMode === NodeBadgeMode.HideBuiltIn);
  }
  __name(badgeTextVisible, "badgeTextVisible");
  onMounted(() => {
    const nodePricing = useNodePricing();
    extensionStore.registerExtension({
      name: "Comfy.NodeBadge",
      nodeCreated(node) {
        node.badgePosition = BadgePosition.TopRight;
        const badge = computed(() => {
          const nodeDef = nodeDefStore.fromLGraphNode(node);
          return new LGraphBadge({
            text: toolkit.truncate(
              [
                badgeTextVisible(nodeDef, nodeIdBadgeMode.value) ? `#${node.id}` : "",
                badgeTextVisible(nodeDef, nodeLifeCycleBadgeMode.value) ? nodeDef?.nodeLifeCycleBadgeText ?? "" : "",
                badgeTextVisible(nodeDef, nodeSourceBadgeMode.value) ? nodeDef?.nodeSource?.badgeText ?? "" : ""
              ].filter((s) => s.length > 0).join(" "),
              {
                length: 31
              }
            ),
            fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
            bgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_BG_COLOR
          });
        });
        node.badges.push(() => badge.value);
        if (node.constructor.nodeData?.api_node && showApiPricingBadge.value) {
          const pricingConfig = nodePricing.getNodePricingConfig(node);
          const hasDynamicPricing = typeof pricingConfig?.displayPrice === "function";
          let creditsBadge;
          const createBadge = /* @__PURE__ */ __name(() => {
            const price = nodePricing.getNodeDisplayPrice(node);
            const isLightTheme = colorPaletteStore.completedActivePalette.light_theme;
            return new LGraphBadge({
              text: price,
              iconOptions: {
                unicode: "",
                fontFamily: "PrimeIcons",
                color: isLightTheme ? adjustColor("#FABC25", { lightness: 0.5 }) : "#FABC25",
                bgColor: isLightTheme ? adjustColor("#654020", { lightness: 0.5 }) : "#654020",
                fontSize: 8
              },
              fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
              bgColor: isLightTheme ? adjustColor("#8D6932", { lightness: 0.5 }) : "#8D6932"
            });
          }, "createBadge");
          if (hasDynamicPricing) {
            const relevantWidgetNames = nodePricing.getRelevantWidgetNames(
              node.constructor.nodeData?.name
            );
            const computedWithWidgetWatch = useComputedWithWidgetWatch(node, {
              widgetNames: relevantWidgetNames,
              triggerCanvasRedraw: true
            });
            creditsBadge = computedWithWidgetWatch(createBadge);
          } else {
            creditsBadge = computed(createBadge);
          }
          node.badges.push(() => creditsBadge.value);
        }
      }
    });
  });
}, "useNodeBadge");
const useCanvasDrop = /* @__PURE__ */ __name((canvasRef) => {
  const modelToNodeStore = useModelToNodeStore();
  const litegraphService = useLitegraphService();
  const workflowService = useWorkflowService();
  usePragmaticDroppable(() => canvasRef.value, {
    getDropEffect: /* @__PURE__ */ __name((args) => args.source.data.type === "tree-explorer-node" ? "copy" : "move", "getDropEffect"),
    onDrop: /* @__PURE__ */ __name(async (event) => {
      const loc = event.location.current.input;
      const dndData = event.source.data;
      if (dndData.type === "tree-explorer-node") {
        const node = dndData.data;
        if (node.data instanceof ComfyNodeDefImpl) {
          const nodeDef = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
          litegraphService.addNodeOnGraph(nodeDef, { pos });
        } else if (node.data instanceof ComfyModelDef) {
          const model = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          const nodeAtPos = app.graph.getNodeOnPos(pos[0], pos[1]);
          let targetProvider = null;
          let targetGraphNode = null;
          if (nodeAtPos) {
            const providers = modelToNodeStore.getAllNodeProviders(
              model.directory
            );
            for (const provider of providers) {
              if (provider.nodeDef.name === nodeAtPos.comfyClass) {
                targetGraphNode = nodeAtPos;
                targetProvider = provider;
              }
            }
          }
          if (!targetGraphNode) {
            const provider = modelToNodeStore.getNodeProvider(model.directory);
            if (provider) {
              targetGraphNode = litegraphService.addNodeOnGraph(
                provider.nodeDef,
                {
                  pos
                }
              );
              targetProvider = provider;
            }
          }
          if (targetGraphNode) {
            const widget = targetGraphNode.widgets?.find(
              (widget2) => widget2.name === targetProvider?.key
            );
            if (widget) {
              widget.value = model.file_name;
            }
          }
        } else if (node.data instanceof ComfyWorkflow) {
          const workflow = node.data;
          const position = app.clientPosToCanvasPos([
            loc.clientX,
            loc.clientY
          ]);
          await workflowService.insertWorkflow(workflow, { position });
        }
      }
    }, "onDrop")
  });
}, "useCanvasDrop");
const useContextMenuTranslation = /* @__PURE__ */ __name(() => {
  const f = LGraphCanvas.prototype.getCanvasMenuOptions;
  const getCanvasCenterMenuOptions = /* @__PURE__ */ __name(function(...args) {
    const res = f.apply(this, args);
    for (const item of res) {
      if (item?.content) {
        item.content = st(`contextMenu.${item.content}`, item.content);
      }
    }
    return res;
  }, "getCanvasCenterMenuOptions");
  LGraphCanvas.prototype.getCanvasMenuOptions = getCanvasCenterMenuOptions;
  function translateMenus(values, options) {
    if (!values) return;
    const reInput = /Convert (.*) to input/;
    const reWidget = /Convert (.*) to widget/;
    const cvt = st("contextMenu.Convert ", "Convert ");
    const tinp = st("contextMenu. to input", " to input");
    const twgt = st("contextMenu. to widget", " to widget");
    for (const value of values) {
      if (typeof value === "string") continue;
      translateMenus(value?.submenu?.options, options);
      if (!value?.content) {
        continue;
      }
      if (te(`contextMenu.${value.content}`)) {
        value.content = st(`contextMenu.${value.content}`, value.content);
      }
      const extraInfo = options.extra || options.parentMenu?.options?.extra;
      const matchInput = value.content?.match(reInput);
      if (matchInput) {
        let match = matchInput[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + tinp;
        continue;
      }
      const matchWidget = value.content?.match(reWidget);
      if (matchWidget) {
        let match = matchWidget[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + twgt;
        continue;
      }
    }
  }
  __name(translateMenus, "translateMenus");
  const OriginalContextMenu = LiteGraph.ContextMenu;
  function ContextMenu2(values, options) {
    if (options.title) {
      options.title = st(
        `nodeDefs.${normalizeI18nKey(options.title)}.display_name`,
        options.title
      );
    }
    translateMenus(values, options);
    const ctx = new OriginalContextMenu(values, options);
    return ctx;
  }
  __name(ContextMenu2, "ContextMenu");
  LiteGraph.ContextMenu = ContextMenu2;
  LiteGraph.ContextMenu.prototype = OriginalContextMenu.prototype;
}, "useContextMenuTranslation");
const useCopy = /* @__PURE__ */ __name(() => {
  const canvasStore = useCanvasStore();
  useEventListener(document, "copy", (e) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
      return;
    }
    const isTargetInGraph = e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas";
    const canvas = canvasStore.canvas;
    if (isTargetInGraph && canvas?.selectedItems) {
      canvas.copyToClipboard();
      e.clipboardData?.setData("text", " ");
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  });
}, "useCopy");
const useGlobalLitegraph = /* @__PURE__ */ __name(() => {
  window["LiteGraph"] = LiteGraph;
  window["LGraph"] = LGraph;
  window["LLink"] = LLink;
  window["LGraphNode"] = LGraphNode;
  window["LGraphGroup"] = LGraphGroup;
  window["DragAndScale"] = DragAndScale;
  window["LGraphCanvas"] = LGraphCanvas;
  window["ContextMenu"] = ContextMenu$1;
  window["LGraphBadge"] = LGraphBadge;
}, "useGlobalLitegraph");
const useLitegraphSettings = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const canvasStore = useCanvasStore();
  watchEffect(() => {
    const canvasInfoEnabled = settingStore.get("Comfy.Graph.CanvasInfo");
    if (canvasStore.canvas) {
      canvasStore.canvas.show_info = canvasInfoEnabled;
      canvasStore.canvas.draw(false, true);
    }
  });
  watchEffect(() => {
    const zoomSpeed = settingStore.get("Comfy.Graph.ZoomSpeed");
    if (canvasStore.canvas) {
      canvasStore.canvas.zoom_speed = zoomSpeed;
    }
  });
  watchEffect(() => {
    LiteGraph.snaps_for_comfy = settingStore.get(
      "Comfy.Node.AutoSnapLinkToSlot"
    );
  });
  watchEffect(() => {
    LiteGraph.snap_highlights_node = settingStore.get(
      "Comfy.Node.SnapHighlightsNode"
    );
  });
  watchEffect(() => {
    LGraphNode.keepAllLinksOnBypass = settingStore.get(
      "Comfy.Node.BypassAllLinksOnDelete"
    );
  });
  watchEffect(() => {
    LiteGraph.middle_click_slot_add_default_node = settingStore.get(
      "Comfy.Node.MiddleClickRerouteNode"
    );
  });
  watchEffect(() => {
    const linkRenderMode = settingStore.get("Comfy.LinkRenderMode");
    if (canvasStore.canvas) {
      canvasStore.canvas.links_render_mode = linkRenderMode;
      canvasStore.canvas.setDirty(
        /* fg */
        false,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const lowQualityRenderingZoomThreshold = settingStore.get(
      "LiteGraph.Canvas.LowQualityRenderingZoomThreshold"
    );
    if (canvasStore.canvas) {
      canvasStore.canvas.low_quality_zoom_threshold = lowQualityRenderingZoomThreshold;
      canvasStore.canvas.setDirty(
        /* fg */
        true,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const linkMarkerShape = settingStore.get("Comfy.Graph.LinkMarkers");
    const { canvas } = canvasStore;
    if (canvas) {
      canvas.linkMarkerShape = linkMarkerShape;
      canvas.setDirty(false, true);
    }
  });
  watchEffect(() => {
    const maximumFps = settingStore.get("LiteGraph.Canvas.MaximumFps");
    const { canvas } = canvasStore;
    if (canvas) canvas.maximumFps = maximumFps;
  });
  watchEffect(() => {
    const dragZoomEnabled = settingStore.get("Comfy.Graph.CtrlShiftZoom");
    const { canvas } = canvasStore;
    if (canvas) canvas.dragZoomEnabled = dragZoomEnabled;
  });
  watchEffect(() => {
    CanvasPointer.doubleClickTime = settingStore.get(
      "Comfy.Pointer.DoubleClickTime"
    );
  });
  watchEffect(() => {
    CanvasPointer.bufferTime = settingStore.get("Comfy.Pointer.ClickBufferTime");
  });
  watchEffect(() => {
    CanvasPointer.maxClickDrift = settingStore.get("Comfy.Pointer.ClickDrift");
  });
  watchEffect(() => {
    LiteGraph.CANVAS_GRID_SIZE = settingStore.get("Comfy.SnapToGrid.GridSize");
  });
  watchEffect(() => {
    LiteGraph.alwaysSnapToGrid = settingStore.get("pysssss.SnapToGrid");
  });
  watchEffect(() => {
    LiteGraph.context_menu_scaling = settingStore.get(
      "LiteGraph.ContextMenu.Scaling"
    );
  });
  watchEffect(() => {
    LiteGraph.Reroute.maxSplineOffset = settingStore.get(
      "LiteGraph.Reroute.SplineOffset"
    );
  });
  watchEffect(() => {
    const navigationMode = settingStore.get("Comfy.Canvas.NavigationMode");
    LiteGraph.canvasNavigationMode = navigationMode;
    LiteGraph.macTrackpadGestures = navigationMode === "standard";
  });
  watchEffect(() => {
    LiteGraph.saveViewportWithGraph = settingStore.get(
      "Comfy.EnableWorkflowViewRestore"
    );
  });
}, "useLitegraphSettings");
const usePaste = /* @__PURE__ */ __name(() => {
  const workspaceStore = useWorkspaceStore();
  const canvasStore = useCanvasStore();
  const pasteItemsOnNode = /* @__PURE__ */ __name((items, node, contentType) => {
    if (!node) return;
    const filteredItems = Array.from(items).filter(
      (item) => item.type.startsWith(contentType)
    );
    const blob = filteredItems[0]?.getAsFile();
    if (!blob) return;
    node.pasteFile?.(blob);
    node.pasteFiles?.(
      Array.from(filteredItems).map((i) => i.getAsFile()).filter((f) => f !== null)
    );
  }, "pasteItemsOnNode");
  useEventListener(document, "paste", async (e) => {
    const isTargetInGraph = e.target instanceof Element && (e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas");
    if (!isTargetInGraph) return;
    if (workspaceStore.shiftDown) return;
    const { canvas } = canvasStore;
    if (!canvas) return;
    const { graph } = canvas;
    let data = e.clipboardData;
    if (!data) throw new Error("No clipboard data on clipboard event");
    const { items } = data;
    const currentNode = canvas.current_node;
    const isNodeSelected = currentNode?.is_selected;
    const isImageNodeSelected = isNodeSelected && isImageNode(currentNode);
    const isVideoNodeSelected = isNodeSelected && isVideoNode(currentNode);
    const isAudioNodeSelected = isNodeSelected && isAudioNode(currentNode);
    let imageNode = isImageNodeSelected ? currentNode : null;
    let audioNode = isAudioNodeSelected ? currentNode : null;
    const videoNode = isVideoNodeSelected ? currentNode : null;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        if (!imageNode) {
          const newNode = LiteGraph.createNode("LoadImage");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            imageNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, imageNode, "image");
        return;
      } else if (item.type.startsWith("video/")) {
        if (!videoNode) {
        } else {
          pasteItemsOnNode(items, videoNode, "video");
          return;
        }
      } else if (item.type.startsWith("audio/")) {
        if (!audioNode) {
          const newNode = LiteGraph.createNode("LoadAudio");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            audioNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, audioNode, "audio");
        return;
      }
    }
    data = data.getData("text/plain");
    let workflow = null;
    try {
      data = data.slice(data.indexOf("{"));
      workflow = JSON.parse(data);
    } catch (err) {
      try {
        data = data.slice(data.indexOf("workflow\n"));
        data = data.slice(data.indexOf("{"));
        workflow = JSON.parse(data);
      } catch (error) {
        workflow = null;
      }
    }
    if (workflow && workflow.version && workflow.nodes && workflow.extra) {
      await app.loadGraphData(workflow);
    } else {
      if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
        return;
      }
      canvas.pasteFromClipboard();
    }
  });
}, "usePaste");
function useWorkflowAutoSave() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowService = useWorkflowService();
  const autoSaveSetting = computed(
    () => settingStore.get("Comfy.Workflow.AutoSave")
  );
  const autoSaveDelay = computed(
    () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
  );
  let autoSaveTimeout = null;
  let isSaving = false;
  let needsAutoSave = false;
  const scheduleAutoSave = /* @__PURE__ */ __name(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    if (autoSaveSetting.value === "after delay") {
      if (isSaving) {
        needsAutoSave = true;
        return;
      }
      const delay = autoSaveDelay.value;
      autoSaveTimeout = setTimeout(async () => {
        const activeWorkflow = workflowStore.activeWorkflow;
        if (activeWorkflow?.isModified && activeWorkflow.isPersisted) {
          try {
            isSaving = true;
            await workflowService.saveWorkflow(activeWorkflow);
          } catch (err) {
            console.error("Auto save failed:", err);
          } finally {
            isSaving = false;
            if (needsAutoSave) {
              needsAutoSave = false;
              scheduleAutoSave();
            }
          }
        }
      }, delay);
    }
  }, "scheduleAutoSave");
  watch(
    autoSaveSetting,
    (newSetting) => {
      if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = null;
      }
      if (newSetting === "after delay" && workflowStore.activeWorkflow?.isModified) {
        scheduleAutoSave();
      }
    },
    { immediate: true }
  );
  const onGraphChanged = /* @__PURE__ */ __name(() => {
    scheduleAutoSave();
  }, "onGraphChanged");
  api.addEventListener("graphChanged", onGraphChanged);
  onUnmounted(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    api.removeEventListener("graphChanged", onGraphChanged);
  });
}
__name(useWorkflowAutoSave, "useWorkflowAutoSave");
function useWorkflowPersistence() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowPersistenceEnabled = computed(
    () => settingStore.get("Comfy.Workflow.Persist")
  );
  const persistCurrentWorkflow = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const workflow = JSON.stringify(app.graph.serialize());
    localStorage.setItem("workflow", workflow);
    if (api.clientId) {
      sessionStorage.setItem(`workflow:${api.clientId}`, workflow);
    }
  }, "persistCurrentWorkflow");
  const loadWorkflowFromStorage = /* @__PURE__ */ __name(async (json, workflowName) => {
    if (!json) return false;
    const workflow = JSON.parse(json);
    await app.loadGraphData(workflow, true, true, workflowName);
    return true;
  }, "loadWorkflowFromStorage");
  const loadPreviousWorkflowFromStorage = /* @__PURE__ */ __name(async () => {
    const workflowName = getStorageValue("Comfy.PreviousWorkflow");
    const clientId = api.initialClientId ?? api.clientId;
    if (clientId) {
      const sessionWorkflow = sessionStorage.getItem(`workflow:${clientId}`);
      if (await loadWorkflowFromStorage(sessionWorkflow, workflowName)) {
        return true;
      }
    }
    const localWorkflow = localStorage.getItem("workflow");
    return await loadWorkflowFromStorage(localWorkflow, workflowName);
  }, "loadPreviousWorkflowFromStorage");
  const loadDefaultWorkflow = /* @__PURE__ */ __name(async () => {
    if (!settingStore.get("Comfy.TutorialCompleted")) {
      await settingStore.set("Comfy.TutorialCompleted", true);
      await useWorkflowService().loadBlankWorkflow();
      await useCommandStore().execute("Comfy.BrowseTemplates");
    } else {
      await app.loadGraphData();
    }
  }, "loadDefaultWorkflow");
  const restorePreviousWorkflow = /* @__PURE__ */ __name(async () => {
    if (!workflowPersistenceEnabled.value) return;
    try {
      const restored = await loadPreviousWorkflowFromStorage();
      if (!restored) {
        await loadDefaultWorkflow();
      }
    } catch (err) {
      console.error("Error loading previous workflow", err);
      await loadDefaultWorkflow();
    }
  }, "restorePreviousWorkflow");
  watch(
    () => workflowStore.activeWorkflow?.key,
    (activeWorkflowKey) => {
      if (!activeWorkflowKey) return;
      setStorageValue("Comfy.PreviousWorkflow", activeWorkflowKey);
      persistCurrentWorkflow();
    }
  );
  api.addEventListener("graphChanged", persistCurrentWorkflow);
  tryOnScopeDispose(() => {
    api.removeEventListener("graphChanged", persistCurrentWorkflow);
  });
  const openWorkflows = computed(() => workflowStore.openWorkflows);
  const activeWorkflow = computed(() => workflowStore.activeWorkflow);
  const restoreState = computed(
    () => {
      if (!openWorkflows.value || !activeWorkflow.value) {
        return { paths: [], activeIndex: -1 };
      }
      const paths = openWorkflows.value.filter((workflow) => workflow?.isPersisted && !workflow.isModified).map((workflow) => workflow.path);
      const activeIndex = openWorkflows.value.findIndex(
        (workflow) => workflow.path === activeWorkflow.value?.path
      );
      return { paths, activeIndex };
    }
  );
  const storedWorkflows = JSON.parse(
    getStorageValue("Comfy.OpenWorkflowsPaths") || "[]"
  );
  const storedActiveIndex = JSON.parse(
    getStorageValue("Comfy.ActiveWorkflowIndex") || "-1"
  );
  watch(restoreState, ({ paths, activeIndex }) => {
    if (workflowPersistenceEnabled.value) {
      setStorageValue("Comfy.OpenWorkflowsPaths", JSON.stringify(paths));
      setStorageValue("Comfy.ActiveWorkflowIndex", JSON.stringify(activeIndex));
    }
  });
  const restoreWorkflowTabsState = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const isRestorable = storedWorkflows?.length > 0 && storedActiveIndex >= 0;
    if (isRestorable) {
      workflowStore.openWorkflowsInBackground({
        left: storedWorkflows.slice(0, storedActiveIndex),
        right: storedWorkflows.slice(storedActiveIndex)
      });
    }
  }, "restoreWorkflowTabsState");
  return {
    restorePreviousWorkflow,
    restoreWorkflowTabsState
  };
}
__name(useWorkflowPersistence, "useWorkflowPersistence");
const CORE_SETTINGS = [
  {
    id: "Comfy.Validation.Workflows",
    name: "Validate workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl",
    category: ["Comfy", "Node Search Box", "Implementation"],
    experimental: true,
    name: "Node search box implementation",
    type: "combo",
    options: ["default", "litegraph (legacy)"],
    defaultValue: "default"
  },
  {
    id: "Comfy.LinkRelease.Action",
    category: ["LiteGraph", "LinkRelease", "Action"],
    name: "Action on link release (No modifier)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.CONTEXT_MENU,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.SEARCH_BOX
    }
  },
  {
    id: "Comfy.LinkRelease.ActionShift",
    category: ["LiteGraph", "LinkRelease", "ActionShift"],
    name: "Action on link release (Shift)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.SEARCH_BOX,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.CONTEXT_MENU
    }
  },
  {
    id: "Comfy.NodeSearchBoxImpl.NodePreview",
    category: ["Comfy", "Node Search Box", "NodePreview"],
    name: "Node preview",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowCategory",
    category: ["Comfy", "Node Search Box", "ShowCategory"],
    name: "Show node category in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowIdName",
    category: ["Comfy", "Node Search Box", "ShowIdName"],
    name: "Show node id name in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowNodeFrequency",
    category: ["Comfy", "Node Search Box", "ShowNodeFrequency"],
    name: "Show node frequency in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Sidebar.Location",
    category: ["Appearance", "Sidebar", "Location"],
    name: "Sidebar location",
    type: "combo",
    options: ["left", "right"],
    defaultValue: "left"
  },
  {
    id: "Comfy.Sidebar.Size",
    category: ["Appearance", "Sidebar", "Size"],
    name: "Sidebar size",
    type: "combo",
    options: ["normal", "small"],
    // Default to small if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "small" : "normal", "defaultValue")
  },
  {
    id: "Comfy.Sidebar.UnifiedWidth",
    category: ["Appearance", "Sidebar", "UnifiedWidth"],
    name: "Unified sidebar width",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.18.1"
  },
  {
    id: "Comfy.TextareaWidget.FontSize",
    category: ["Appearance", "Node Widget", "TextareaWidget", "FontSize"],
    name: "Textarea widget font size",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 8,
      max: 24
    }
  },
  {
    id: "Comfy.TextareaWidget.Spellcheck",
    category: ["Comfy", "Node Widget", "TextareaWidget", "Spellcheck"],
    name: "Textarea widget spellcheck",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Workflow.SortNodeIdOnSave",
    name: "Sort node IDs when saving workflow",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Graph.CanvasInfo",
    category: ["LiteGraph", "Canvas", "CanvasInfo"],
    name: "Show canvas info on bottom left corner (fps, etc.)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.ShowDeprecated",
    name: "Show deprecated nodes in search",
    tooltip: "Deprecated nodes are hidden by default in the UI, but remain functional in existing workflows that use them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Node.ShowExperimental",
    name: "Show experimental nodes in search",
    tooltip: "Experimental nodes are marked as such in the UI and may be subject to significant changes or removal in future versions. Use with caution in production workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.Opacity",
    category: ["Appearance", "Node", "Opacity"],
    name: "Node opacity",
    type: "slider",
    defaultValue: 1,
    attrs: {
      min: 0.01,
      max: 1,
      step: 0.01
    }
  },
  {
    id: "Comfy.Workflow.ShowMissingNodesWarning",
    name: "Show missing nodes warning",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Workflow.ShowMissingModelsWarning",
    name: "Show missing models warning",
    type: "boolean",
    defaultValue: true,
    experimental: true
  },
  {
    id: "Comfy.Graph.ZoomSpeed",
    category: ["LiteGraph", "Canvas", "ZoomSpeed"],
    name: "Canvas zoom speed",
    type: "slider",
    defaultValue: 1.1,
    attrs: {
      min: 1.01,
      max: 2.5,
      step: 0.01
    }
  },
  // Bookmarks are stored in the settings store.
  // Bookmarks are in format of category/display_name. e.g. "conditioning/CLIPTextEncode"
  {
    id: "Comfy.NodeLibrary.Bookmarks",
    name: "Node library bookmarks with display name (deprecated)",
    type: "hidden",
    defaultValue: [],
    deprecated: true
  },
  {
    id: "Comfy.NodeLibrary.Bookmarks.V2",
    name: "Node library bookmarks v2 with unique name",
    type: "hidden",
    defaultValue: []
  },
  // Stores mapping from bookmark folder name to its customization.
  {
    id: "Comfy.NodeLibrary.BookmarksCustomization",
    name: "Node library bookmarks customization",
    type: "hidden",
    defaultValue: {}
  },
  // Hidden setting used by the queue for how to fit images
  {
    id: "Comfy.Queue.ImageFit",
    name: "Queue image fit",
    type: "hidden",
    defaultValue: "cover"
  },
  {
    id: "Comfy.GroupSelectedNodes.Padding",
    category: ["LiteGraph", "Group", "Padding"],
    name: "Group selected nodes padding",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 0,
      max: 100
    }
  },
  {
    id: "Comfy.Node.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Node", "DoubleClickTitleToEdit"],
    name: "Double click node title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.AllowImageSizeDraw",
    category: ["LiteGraph", "Node Widget", "AllowImageSizeDraw"],
    name: "Show width × height below the image preview",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Group.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Group", "DoubleClickTitleToEdit"],
    name: "Double click group title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Window.UnloadConfirmation",
    name: "Show confirmation when closing window",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.7.12"
  },
  {
    id: "Comfy.TreeExplorer.ItemPadding",
    category: ["Appearance", "Tree Explorer", "ItemPadding"],
    name: "Tree explorer item padding",
    type: "slider",
    defaultValue: 2,
    attrs: {
      min: 0,
      max: 8,
      step: 1
    }
  },
  {
    id: "Comfy.ModelLibrary.AutoLoadAll",
    name: "Automatically load all model folders",
    tooltip: "If true, all folders will load as soon as you open the model library (this may cause delays while it loads). If false, root level model folders will only load once you click on them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.ModelLibrary.NameFormat",
    name: "What name to display in the model library tree view",
    tooltip: 'Select "filename" to render a simplified view of the raw filename (without directory or ".safetensors" extension) in the model list. Select "title" to display the configurable model metadata title.',
    type: "combo",
    options: ["filename", "title"],
    defaultValue: "title"
  },
  {
    id: "Comfy.Locale",
    name: "Language",
    type: "combo",
    options: [
      { value: "en", text: "English" },
      { value: "zh", text: "中文" },
      { value: "zh-TW", text: "繁體中文" },
      { value: "ru", text: "Русский" },
      { value: "ja", text: "日本語" },
      { value: "ko", text: "한국어" },
      { value: "fr", text: "Français" },
      { value: "es", text: "Español" },
      { value: "ar", text: "عربي" }
    ],
    defaultValue: /* @__PURE__ */ __name(() => navigator.language.split("-")[0] || "en", "defaultValue")
  },
  {
    id: "Comfy.NodeBadge.NodeSourceBadgeMode",
    category: ["LiteGraph", "Node", "NodeSourceBadgeMode"],
    name: "Node source badge mode",
    type: "combo",
    options: Object.values(NodeBadgeMode),
    defaultValue: NodeBadgeMode.HideBuiltIn
  },
  {
    id: "Comfy.NodeBadge.NodeIdBadgeMode",
    category: ["LiteGraph", "Node", "NodeIdBadgeMode"],
    name: "Node ID badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.None
  },
  {
    id: "Comfy.NodeBadge.NodeLifeCycleBadgeMode",
    category: ["LiteGraph", "Node", "NodeLifeCycleBadgeMode"],
    name: "Node life cycle badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.ShowAll
  },
  {
    id: "Comfy.NodeBadge.ShowApiPricing",
    category: ["Comfy", "API Nodes"],
    name: "Show API node pricing badge",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.20.3"
  },
  {
    id: "Comfy.Notification.ShowVersionUpdates",
    category: ["Comfy", "Notification Preferences"],
    name: "Show version updates",
    tooltip: "Show updates for new models, and major new features.",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.ConfirmClear",
    category: ["Comfy", "Workflow", "ConfirmClear"],
    name: "Require confirmation when clearing workflow",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.PromptFilename",
    category: ["Comfy", "Workflow", "PromptFilename"],
    name: "Prompt for filename when saving workflow",
    type: "boolean",
    defaultValue: true
  },
  /**
   * file format for preview
   *
   * format;quality
   *
   * ex)
   * webp;50 -> webp, quality 50
   * jpeg;80 -> rgb, jpeg, quality 80
   *
   * @type {string}
   */
  {
    id: "Comfy.PreviewFormat",
    category: ["LiteGraph", "Node Widget", "PreviewFormat"],
    name: "Preview image format",
    tooltip: "When displaying a preview in the image widget, convert it to a lightweight image, e.g. webp, jpeg, webp;50, etc.",
    type: "text",
    defaultValue: ""
  },
  {
    id: "Comfy.DisableSliders",
    category: ["LiteGraph", "Node Widget", "DisableSliders"],
    name: "Disable node widget sliders",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.DisableFloatRounding",
    category: ["LiteGraph", "Node Widget", "DisableFloatRounding"],
    name: "Disable default float widget rounding.",
    tooltip: "(requires page reload) Cannot disable round when round is set by the node in the backend.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.FloatRoundingPrecision",
    category: ["LiteGraph", "Node Widget", "FloatRoundingPrecision"],
    name: "Float widget rounding decimal places [0 = auto].",
    tooltip: "(requires page reload)",
    type: "slider",
    attrs: {
      min: 0,
      max: 6,
      step: 1
    },
    defaultValue: 0
  },
  {
    id: "LiteGraph.Node.TooltipDelay",
    name: "Tooltip Delay",
    type: "number",
    attrs: {
      min: 100,
      max: 3e3,
      step: 50
    },
    defaultValue: 500,
    versionAdded: "1.9.0"
  },
  {
    id: "Comfy.EnableTooltips",
    category: ["LiteGraph", "Node", "EnableTooltips"],
    name: "Enable Tooltips",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.DevMode",
    name: "Enable dev mode options (API save, etc.)",
    type: "boolean",
    defaultValue: false,
    onChange: /* @__PURE__ */ __name((value) => {
      const element = document.getElementById("comfy-dev-save-api-button");
      if (element) {
        element.style.display = value ? "flex" : "none";
      }
    }, "onChange")
  },
  {
    id: "Comfy.UseNewMenu",
    category: ["Comfy", "Menu", "UseNewMenu"],
    defaultValue: "Top",
    name: "Use new menu",
    type: "combo",
    options: ["Disabled", "Top", "Bottom"],
    tooltip: "Menu bar position. On mobile devices, the menu is always shown at the top.",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      if (value === "Floating") {
        return "Top";
      }
      return value;
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Workflow.WorkflowTabsPosition",
    name: "Opened workflows position",
    type: "combo",
    options: ["Sidebar", "Topbar", "Topbar (2nd-row)"],
    // Default to topbar (2nd-row) if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "Topbar (2nd-row)" : "Topbar", "defaultValue")
  },
  {
    id: "Comfy.Graph.CanvasMenu",
    category: ["LiteGraph", "Canvas", "CanvasMenu"],
    name: "Show graph canvas menu",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.QueueButton.BatchCountLimit",
    name: "Batch count limit",
    tooltip: "The maximum number of tasks added to the queue at one button click",
    type: "number",
    defaultValue: 100,
    versionAdded: "1.3.5"
  },
  {
    id: "Comfy.Keybinding.UnsetBindings",
    name: "Keybindings unset by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7",
    versionModified: "1.7.3",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      return value.map((keybinding) => {
        if (keybinding["targetSelector"] === "#graph-canvas") {
          keybinding["targetElementId"] = "graph-canvas";
        }
        return keybinding;
      });
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Keybinding.NewBindings",
    name: "Keybindings set by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7"
  },
  {
    id: "Comfy.Extension.Disabled",
    name: "Disabled extension names",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.11"
  },
  {
    id: "Comfy.LinkRenderMode",
    category: ["LiteGraph", "Graph", "LinkRenderMode"],
    name: "Link Render Mode",
    defaultValue: 2,
    type: "combo",
    options: [
      { value: LiteGraph.STRAIGHT_LINK, text: "Straight" },
      { value: LiteGraph.LINEAR_LINK, text: "Linear" },
      { value: LiteGraph.SPLINE_LINK, text: "Spline" },
      { value: LiteGraph.HIDDEN_LINK, text: "Hidden" }
    ]
  },
  {
    id: "Comfy.Node.AutoSnapLinkToSlot",
    category: ["LiteGraph", "Node", "AutoSnapLinkToSlot"],
    name: "Auto snap link to node slot",
    tooltip: "When dragging a link over a node, the link automatically snap to a viable input slot on the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.SnapHighlightsNode",
    category: ["LiteGraph", "Node", "SnapHighlightsNode"],
    name: "Snap highlights node",
    tooltip: "When dragging a link over a node with viable input slot, highlight the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.BypassAllLinksOnDelete",
    category: ["LiteGraph", "Node", "BypassAllLinksOnDelete"],
    name: "Keep all links when deleting nodes",
    tooltip: "When deleting a node, attempt to reconnect all of its input and output links (bypassing the deleted node)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.40"
  },
  {
    id: "Comfy.Node.MiddleClickRerouteNode",
    category: ["LiteGraph", "Node", "MiddleClickRerouteNode"],
    name: "Middle-click creates a new Reroute node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.Graph.LinkMarkers",
    category: ["LiteGraph", "Link", "LinkMarkers"],
    name: "Link midpoint markers",
    defaultValue: LinkMarkerShape.Circle,
    type: "combo",
    options: [
      { value: LinkMarkerShape.None, text: "None" },
      { value: LinkMarkerShape.Circle, text: "Circle" },
      { value: LinkMarkerShape.Arrow, text: "Arrow" }
    ],
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.DOMClippingEnabled",
    category: ["LiteGraph", "Node", "DOMClippingEnabled"],
    name: "Enable DOM element clipping (enabling may reduce performance)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Graph.CtrlShiftZoom",
    category: ["LiteGraph", "Canvas", "CtrlShiftZoom"],
    name: "Enable fast-zoom shortcut (Ctrl + Shift + Drag)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.4.0"
  },
  {
    id: "Comfy.Pointer.ClickDrift",
    category: ["LiteGraph", "Pointer", "ClickDrift"],
    name: "Pointer click drift (maximum distance)",
    tooltip: "If the pointer moves more than this distance while holding a button down, it is considered dragging (rather than clicking).\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 20,
      step: 1
    },
    defaultValue: 6,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.ClickBufferTime",
    category: ["LiteGraph", "Pointer", "ClickBufferTime"],
    name: "Pointer click drift delay",
    tooltip: "After pressing a pointer button down, this is the maximum time (in milliseconds) that pointer movement can be ignored for.\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 1e3,
      step: 25
    },
    defaultValue: 150,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.DoubleClickTime",
    category: ["LiteGraph", "Pointer", "DoubleClickTime"],
    name: "Double click interval (maximum)",
    tooltip: "The maximum time in milliseconds between the two clicks of a double-click.  Increasing this value may assist if double-clicks are sometimes not registered.",
    type: "slider",
    attrs: {
      min: 100,
      max: 1e3,
      step: 50
    },
    defaultValue: 300,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.SnapToGrid.GridSize",
    category: ["LiteGraph", "Canvas", "GridSize"],
    name: "Snap to grid size",
    type: "slider",
    attrs: {
      min: 1,
      max: 500
    },
    tooltip: "When dragging and resizing nodes while holding shift they will be aligned to the grid, this controls the size of that grid.",
    defaultValue: LiteGraph.CANVAS_GRID_SIZE
  },
  // Keep the 'pysssss.SnapToGrid' setting id so we don't need to migrate setting values.
  // Using a new setting id can cause existing users to lose their existing settings.
  {
    id: "pysssss.SnapToGrid",
    category: ["LiteGraph", "Canvas", "AlwaysSnapToGrid"],
    name: "Always snap to grid",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.3.13"
  },
  {
    id: "Comfy.Server.ServerConfigValues",
    name: "Server config values for frontend display",
    tooltip: "Server config values used for frontend display only",
    type: "hidden",
    // Mapping from server config id to value.
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Server.LaunchArgs",
    name: "Server launch arguments",
    tooltip: "These are the actual arguments that are passed to the server when it is launched.",
    type: "hidden",
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Queue.MaxHistoryItems",
    name: "Queue history size",
    tooltip: "The maximum number of tasks that show in the queue history.",
    type: "slider",
    attrs: {
      min: 2,
      max: 256,
      step: 2
    },
    defaultValue: 64,
    versionAdded: "1.4.12"
  },
  {
    id: "LiteGraph.Canvas.MaximumFps",
    name: "Maximum FPS",
    tooltip: "The maximum frames per second that the canvas is allowed to render. Caps GPU usage at the cost of smoothness. If 0, the screen refresh rate is used. Default: 0",
    type: "slider",
    attrs: {
      min: 0,
      max: 120
    },
    defaultValue: 0,
    versionAdded: "1.5.1"
  },
  {
    id: "Comfy.EnableWorkflowViewRestore",
    category: ["Comfy", "Workflow", "EnableWorkflowViewRestore"],
    name: "Save and restore canvas position and zoom level in workflows",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.5.4"
  },
  {
    id: "Comfy.Workflow.ConfirmDelete",
    name: "Show confirmation when deleting workflows",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.5.6"
  },
  {
    id: "Comfy.ColorPalette",
    name: "The active color palette id",
    type: "hidden",
    defaultValue: "dark",
    versionModified: "1.6.7",
    migrateDeprecatedValue(value) {
      return value.startsWith("custom_") ? value.replace("custom_", "") : value;
    }
  },
  {
    id: "Comfy.CustomColorPalettes",
    name: "Custom color palettes",
    type: "hidden",
    defaultValue: {},
    versionModified: "1.6.7"
  },
  {
    id: "Comfy.WidgetControlMode",
    category: ["Comfy", "Node Widget", "WidgetControlMode"],
    name: "Widget control mode",
    tooltip: "Controls when widget values are updated (randomize/increment/decrement), either before the prompt is queued or after.",
    type: "combo",
    defaultValue: "after",
    options: ["before", "after"],
    versionModified: "1.6.10"
  },
  {
    id: "Comfy.TutorialCompleted",
    name: "Tutorial completed",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.8.7"
  },
  {
    id: "Comfy.InstalledVersion",
    name: "The frontend version that was running when the user first installed ComfyUI",
    type: "hidden",
    defaultValue: null,
    versionAdded: "1.24.0"
  },
  {
    id: "LiteGraph.ContextMenu.Scaling",
    name: "Scale node combo widget menus (lists) when zoomed in",
    defaultValue: false,
    type: "boolean",
    versionAdded: "1.8.8"
  },
  {
    id: "LiteGraph.Canvas.LowQualityRenderingZoomThreshold",
    name: "Low quality rendering zoom threshold",
    tooltip: "Zoom level threshold for performance mode. Lower values (0.1) = quality at all zoom levels. Higher values (1.0) = performance mode even when zoomed in. Performance mode simplifies rendering by hiding text labels, shadows, and details.",
    type: "slider",
    attrs: {
      min: 0.1,
      max: 1,
      step: 0.01
    },
    defaultValue: 0.6,
    versionAdded: "1.9.1"
  },
  {
    id: "Comfy.Canvas.NavigationMode",
    category: ["LiteGraph", "Canvas", "CanvasNavigationMode"],
    name: "Canvas Navigation Mode",
    defaultValue: "legacy",
    type: "combo",
    options: [
      { value: "standard", text: "Standard (New)" },
      { value: "legacy", text: "Drag Navigation" }
    ],
    versionAdded: "1.25.0",
    defaultsByInstallVersion: {
      "1.25.0": "legacy"
    }
  },
  {
    id: "Comfy.Canvas.SelectionToolbox",
    category: ["LiteGraph", "Canvas", "SelectionToolbox"],
    name: "Show selection toolbox",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.10.5"
  },
  {
    id: "LiteGraph.Reroute.SplineOffset",
    name: "Reroute spline offset",
    tooltip: "The bezier control point offset from the reroute centre point",
    type: "slider",
    defaultValue: 20,
    attrs: {
      min: 0,
      max: 400
    },
    versionAdded: "1.15.7"
  },
  {
    id: "Comfy.Toast.DisableReconnectingToast",
    name: "Disable toasts when reconnecting or reconnected",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.15.12"
  },
  {
    id: "Comfy.Minimap.Visible",
    name: "Display minimap on canvas",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.25.0"
  },
  {
    id: "Comfy.Minimap.NodeColors",
    name: "Display node with its original color on minimap",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.ShowLinks",
    name: "Display links on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.ShowGroups",
    name: "Display node groups on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.RenderBypassState",
    name: "Render bypass state on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Minimap.RenderErrorState",
    name: "Render error state on minimap",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.26.0"
  },
  {
    id: "Comfy.Workflow.AutoSaveDelay",
    name: "Auto Save Delay (ms)",
    defaultValue: 1e3,
    type: "number",
    tooltip: 'Only applies if Auto Save is set to "after delay".',
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.AutoSave",
    name: "Auto Save",
    type: "combo",
    options: ["off", "after delay"],
    // Room for other options like on focus change, tab change, window change
    defaultValue: "off",
    // Popular requst by users (https://github.com/Comfy-Org/ComfyUI_frontend/issues/1584#issuecomment-2536610154)
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.Persist",
    name: "Persist workflow state and restore on page (re)load",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.16.1"
  },
  {
    id: "LiteGraph.Node.DefaultPadding",
    name: "Always shrink new nodes",
    tooltip: "Resize nodes to the smallest possible size when created. When disabled, a newly added node will be widened slightly to show widget values.",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.18.0"
  },
  {
    id: "Comfy.Canvas.BackgroundImage",
    category: ["Appearance", "Canvas", "Background"],
    name: "Canvas background image",
    type: "backgroundImage",
    tooltip: 'Image URL for the canvas background. You can right-click an image in the outputs panel and select "Set as Background" to use it, or upload your own image using the upload button.',
    defaultValue: "",
    versionAdded: "1.20.4",
    versionModified: "1.20.5"
  },
  // Release data stored in settings
  {
    id: "Comfy.Release.Version",
    name: "Last seen release version",
    type: "hidden",
    defaultValue: ""
  },
  {
    id: "Comfy.Release.Status",
    name: "Release status",
    type: "hidden",
    defaultValue: "skipped"
  },
  {
    id: "Comfy.Release.Timestamp",
    name: "Release seen timestamp",
    type: "hidden",
    defaultValue: 0
  }
];
let pendingCallbacks = [];
let isNewUserDetermined = false;
let isNewUserCached = null;
const newUserService = /* @__PURE__ */ __name(() => {
  function checkIsNewUser(settingStore) {
    const isNewUserSettings = Object.keys(settingStore.settingValues).length === 0 || !settingStore.get("Comfy.TutorialCompleted");
    const hasNoWorkflow = !localStorage.getItem("workflow");
    const hasNoPreviousWorkflow = !localStorage.getItem(
      "Comfy.PreviousWorkflow"
    );
    return isNewUserSettings && hasNoWorkflow && hasNoPreviousWorkflow;
  }
  __name(checkIsNewUser, "checkIsNewUser");
  async function registerInitCallback(callback) {
    if (isNewUserDetermined) {
      if (isNewUserCached) {
        try {
          await callback();
        } catch (error) {
          console.error("New user initialization callback failed:", error);
        }
      }
    } else {
      pendingCallbacks.push(callback);
    }
  }
  __name(registerInitCallback, "registerInitCallback");
  async function initializeIfNewUser(settingStore) {
    if (isNewUserDetermined) return;
    isNewUserCached = checkIsNewUser(settingStore);
    isNewUserDetermined = true;
    if (!isNewUserCached) {
      pendingCallbacks = [];
      return;
    }
    await settingStore.set(
      "Comfy.InstalledVersion",
      "1.26.6"
    );
    for (const callback of pendingCallbacks) {
      try {
        await callback();
      } catch (error) {
        console.error("New user initialization callback failed:", error);
      }
    }
    pendingCallbacks = [];
  }
  __name(initializeIfNewUser, "initializeIfNewUser");
  function isNewUser() {
    return isNewUserDetermined ? isNewUserCached : null;
  }
  __name(isNewUser, "isNewUser");
  return {
    registerInitCallback,
    initializeIfNewUser,
    isNewUser
  };
}, "newUserService");
const _hoisted_1$D = { class: "absolute top-0 left-0 w-auto max-w-full pointer-events-auto" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvas",
  emits: ["ready"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const canvasRef = ref(null);
    const nodeSearchboxPopoverRef = shallowRef(null);
    const settingStore = useSettingStore();
    const nodeDefStore = useNodeDefStore();
    const workspaceStore = useWorkspaceStore();
    const canvasStore = useCanvasStore();
    const executionStore = useExecutionStore();
    const toastStore = useToastStore();
    const betaMenuEnabled = computed(
      () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const canvasMenuEnabled = computed(
      () => settingStore.get("Comfy.Graph.CanvasMenu")
    );
    const tooltipEnabled = computed(() => settingStore.get("Comfy.EnableTooltips"));
    const selectionToolboxEnabled = computed(
      () => settingStore.get("Comfy.Canvas.SelectionToolbox")
    );
    const minimapEnabled = computed(() => settingStore.get("Comfy.Minimap.Visible"));
    watchEffect(() => {
      nodeDefStore.showDeprecated = settingStore.get("Comfy.Node.ShowDeprecated");
    });
    watchEffect(() => {
      nodeDefStore.showExperimental = settingStore.get(
        "Comfy.Node.ShowExperimental"
      );
    });
    watchEffect(() => {
      const spellcheckEnabled = settingStore.get("Comfy.TextareaWidget.Spellcheck");
      const textareas = document.querySelectorAll(
        "textarea.comfy-multiline-input"
      );
      textareas.forEach((textarea) => {
        textarea.spellcheck = spellcheckEnabled;
        textarea.focus();
        textarea.blur();
      });
    });
    watch(
      () => settingStore.get("Comfy.WidgetControlMode"),
      () => {
        if (!canvasStore.canvas) return;
        for (const n of app.graph.nodes) {
          if (!n.widgets) continue;
          for (const w of n.widgets) {
            if (w[IS_CONTROL_WIDGET]) {
              updateControlWidgetLabel(w);
              if (w.linkedWidgets) {
                for (const l of w.linkedWidgets) {
                  updateControlWidgetLabel(l);
                }
              }
            }
          }
        }
        app.graph.setDirtyCanvas(true);
      }
    );
    const colorPaletteService = useColorPaletteService();
    const colorPaletteStore = useColorPaletteStore();
    watch(
      [() => canvasStore.canvas, () => settingStore.get("Comfy.ColorPalette")],
      async ([canvas, currentPaletteId]) => {
        if (!canvas) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
      }
    );
    watch(
      () => settingStore.get("Comfy.Canvas.BackgroundImage"),
      async () => {
        if (!canvasStore.canvas) return;
        const currentPaletteId = colorPaletteStore.activePaletteId;
        if (!currentPaletteId) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
        canvasStore.canvas.setDirty(false, true);
      }
    );
    watch(
      () => colorPaletteStore.activePaletteId,
      async (newValue) => {
        await settingStore.set("Comfy.ColorPalette", newValue);
      }
    );
    watch(
      () => [executionStore.nodeLocationProgressStates, canvasStore.canvas],
      ([nodeLocationProgressStates, canvas]) => {
        if (!canvas?.graph) return;
        for (const node of canvas.graph.nodes) {
          const nodeLocatorId = useWorkflowStore().nodeIdToNodeLocatorId(node.id);
          const progressState = nodeLocationProgressStates[nodeLocatorId];
          if (progressState && progressState.state === "running") {
            node.progress = progressState.value / progressState.max;
          } else {
            node.progress = void 0;
          }
        }
        canvas.graph.setDirtyCanvas(true, false);
      },
      { deep: true }
    );
    watch(
      () => executionStore.lastNodeErrors,
      (lastNodeErrors) => {
        const removeSlotError = /* @__PURE__ */ __name((node) => {
          for (const slot of node.inputs) {
            delete slot.hasErrors;
          }
          for (const slot of node.outputs) {
            delete slot.hasErrors;
          }
        }, "removeSlotError");
        for (const node of app.graph.nodes) {
          removeSlotError(node);
          const nodeErrors = lastNodeErrors?.[node.id];
          if (!nodeErrors) continue;
          for (const error of nodeErrors.errors) {
            if (error.extra_info && error.extra_info.input_name) {
              const inputIndex = node.findInputSlot(error.extra_info.input_name);
              if (inputIndex !== -1) {
                node.inputs[inputIndex].hasErrors = true;
              }
            }
          }
        }
        app.canvas.draw(true, true);
      }
    );
    useEventListener(
      canvasRef,
      "litegraph:no-items-selected",
      () => {
        toastStore.add({
          severity: "warn",
          summary: t$2("toastMessages.nothingSelected"),
          life: 2e3
        });
      },
      { passive: true }
    );
    const loadCustomNodesI18n = /* @__PURE__ */ __name(async () => {
      try {
        const i18nData = await api.getCustomNodesI18n();
        Object.entries(i18nData).forEach(([locale, message]) => {
          i18n.global.mergeLocaleMessage(locale, message);
        });
      } catch (error) {
        console.error("Failed to load custom nodes i18n", error);
      }
    }, "loadCustomNodesI18n");
    const comfyAppReady = ref(false);
    const workflowPersistence = useWorkflowPersistence();
    useCanvasDrop(canvasRef);
    useLitegraphSettings();
    useNodeBadge();
    onMounted(async () => {
      useGlobalLitegraph();
      useContextMenuTranslation();
      useCopy();
      usePaste();
      useWorkflowAutoSave();
      app.vueAppReady = true;
      workspaceStore.spinner = true;
      ChangeTracker.init();
      await loadCustomNodesI18n();
      try {
        await settingStore.loadSettingValues();
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          console.log(
            "Failed loading user settings, user unauthorized, cleaning local Comfy.userId"
          );
          localStorage.removeItem("Comfy.userId");
          localStorage.removeItem("Comfy.userName");
          window.location.reload();
        } else {
          throw error;
        }
      }
      CORE_SETTINGS.forEach((setting) => {
        settingStore.addSetting(setting);
      });
      await newUserService().initializeIfNewUser(settingStore);
      await app.setup(canvasRef.value);
      canvasStore.canvas = app.canvas;
      canvasStore.canvas.render_canvas_border = false;
      workspaceStore.spinner = false;
      useSearchBoxStore().setPopoverRef(nodeSearchboxPopoverRef.value);
      window.app = app;
      window.graph = app.graph;
      comfyAppReady.value = true;
      app.canvas.onSelectionChange = useChainCallback(
        app.canvas.onSelectionChange,
        () => canvasStore.updateSelectedItems()
      );
      colorPaletteStore.customPalettes = settingStore.get(
        "Comfy.CustomColorPalettes"
      );
      await workflowPersistence.restorePreviousWorkflow();
      workflowPersistence.restoreWorkflowTabsState();
      const { useReleaseStore: useReleaseStore2 } = await __vitePreload(async () => {
        const { useReleaseStore: useReleaseStore3 } = await Promise.resolve().then(() => releaseStore);
        return { useReleaseStore: useReleaseStore3 };
      }, true ? void 0 : void 0, import.meta.url);
      const releaseStore$1 = useReleaseStore2();
      void releaseStore$1.initialize();
      watch(
        () => settingStore.get("Comfy.Locale"),
        async () => {
          await useCommandStore().execute("Comfy.RefreshNodeDefinitions");
          await useWorkflowService().reloadCurrentWorkflow();
        }
      );
      whenever(
        () => useCanvasStore().canvas,
        (canvas) => {
          useEventListener(canvas.canvas, "litegraph:set-graph", () => {
            useWorkflowStore().updateActiveGraph();
          });
        },
        { immediate: true }
      );
      emit("ready");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        comfyAppReady.value && betaMenuEnabled.value ? (openBlock(), createBlock(LiteGraphCanvasSplitterOverlay, { key: 0 }, createSlots({
          "graph-canvas-panel": withCtx(() => [
            createElementVNode("div", _hoisted_1$D, [
              workflowTabsPosition.value === "Topbar (2nd-row)" ? (openBlock(), createBlock(SecondRowWorkflowTabs, { key: 0 })) : createCommentVNode("", true)
            ]),
            canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, {
              key: 0,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true),
            comfyAppReady.value && minimapEnabled.value ? (openBlock(), createBlock(MiniMap, {
              key: 1,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true)
          ]),
          _: 2
        }, [
          !unref(workspaceStore).focusMode ? {
            name: "side-bar-panel",
            fn: withCtx(() => [
              createVNode(SideToolbar)
            ]),
            key: "0"
          } : void 0,
          !unref(workspaceStore).focusMode ? {
            name: "bottom-panel",
            fn: withCtx(() => [
              createVNode(_sfc_main$16)
            ]),
            key: "1"
          } : void 0
        ]), 1024)) : createCommentVNode("", true),
        !betaMenuEnabled.value && canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, { key: 1 })) : createCommentVNode("", true),
        createElementVNode("canvas", {
          id: "graph-canvas",
          ref_key: "canvasRef",
          ref: canvasRef,
          tabindex: "1",
          class: "w-full h-full touch-none"
        }, null, 512),
        tooltipEnabled.value ? (openBlock(), createBlock(NodeTooltip, { key: 2 })) : createCommentVNode("", true),
        createVNode(_sfc_main$K, {
          ref_key: "nodeSearchboxPopoverRef",
          ref: nodeSearchboxPopoverRef
        }, null, 512),
        comfyAppReady.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(TitleEditor),
          selectionToolboxEnabled.value ? (openBlock(), createBlock(SelectionToolbox, { key: 0 })) : createCommentVNode("", true),
          createVNode(_sfc_main$14)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "GlobalToast",
  setup(__props) {
    const toast = useToast();
    const toastStore = useToastStore();
    const settingStore = useSettingStore();
    watch(
      () => toastStore.messagesToAdd,
      (newMessages) => {
        if (newMessages.length === 0) {
          return;
        }
        newMessages.forEach((message) => {
          toast.add(message);
        });
        toastStore.messagesToAdd = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.messagesToRemove,
      (messagesToRemove) => {
        if (messagesToRemove.length === 0) {
          return;
        }
        messagesToRemove.forEach((message) => {
          toast.remove(message);
        });
        toastStore.messagesToRemove = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.removeAllRequested,
      (requested) => {
        if (requested) {
          toast.removeAllGroups();
          toastStore.removeAllRequested = false;
        }
      }
    );
    function updateToastPosition() {
      const styleElement = document.getElementById("dynamic-toast-style") || createStyleElement();
      const rect = document.querySelector(".graph-canvas-container")?.getBoundingClientRect();
      if (!rect) return;
      styleElement.textContent = `
    .p-toast.p-component.p-toast-top-right {
      top: ${rect.top + 20}px !important;
      right: ${window.innerWidth - (rect.left + rect.width) + 20}px !important;
    }
  `;
    }
    __name(updateToastPosition, "updateToastPosition");
    function createStyleElement() {
      const style = document.createElement("style");
      style.id = "dynamic-toast-style";
      document.head.appendChild(style);
      return style;
    }
    __name(createStyleElement, "createStyleElement");
    watch(
      () => settingStore.get("Comfy.UseNewMenu"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    watch(
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast));
    };
  }
});
const _hoisted_1$C = { class: "flex flex-col items-start flex-auto" };
const _hoisted_2$d = { class: "font-medium text-lg my-4" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "RerouteMigrationToast",
  setup(__props) {
    const { t: t2 } = useI18n();
    const toast = useToast$1();
    const workflowStore = useWorkflowStore();
    const migrateToLitegraphReroute = /* @__PURE__ */ __name(async () => {
      const workflowJSON = app.graph.serialize();
      const migratedWorkflowJSON = migrateLegacyRerouteNodes(workflowJSON);
      await app.loadGraphData(
        migratedWorkflowJSON,
        false,
        false,
        workflowStore.activeWorkflow
      );
      toast.removeGroup("reroute-migration");
    }, "migrateToLitegraphReroute");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast), { group: "reroute-migration" }, {
        message: withCtx(() => [
          createElementVNode("div", _hoisted_1$C, [
            createElementVNode("div", _hoisted_2$d, toDisplayString(unref(t2)("toastMessages.migrateToLitegraphReroute")), 1),
            createVNode(unref(Button), {
              class: "self-end",
              size: "small",
              label: unref(t2)("g.migrate"),
              severity: "warn",
              onClick: migrateToLitegraphReroute
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$B = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 4v16m4-16l10 8l-10 8z"
    }, null, -1)
  ]));
}
__name(render$g, "render$g");
const __unplugin_components_3$2 = markRaw({ name: "lucide-step-forward", render: render$g });
const _hoisted_1$A = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m13 19l9-7l-9-7zM2 19l9-7l-9-7z"
    }, null, -1)
  ]));
}
__name(render$f, "render$f");
const __unplugin_components_2$2 = markRaw({ name: "lucide-fast-forward", render: render$f });
const _hoisted_1$z = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M16 12H3m13 6H3m7-12H3m18 12V8a2 2 0 0 0-2-2h-5" }),
      createElementVNode("path", { d: "m16 8l-2-2l2-2" })
    ], -1)
  ]));
}
__name(render$e, "render$e");
const __unplugin_components_0$4 = markRaw({ name: "lucide-list-start", render: render$e });
const _hoisted_1$y = ["aria-label"];
const minQueueCount = 1;
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "BatchCountEdit",
  setup(__props) {
    const queueSettingsStore = useQueueSettingsStore();
    const { batchCount } = storeToRefs(queueSettingsStore);
    const settingStore = useSettingStore();
    const maxQueueCount = computed(
      () => settingStore.get("Comfy.QueueButton.BatchCountLimit")
    );
    const handleClick = /* @__PURE__ */ __name((increment) => {
      let newCount;
      if (increment) {
        const originalCount = batchCount.value - 1;
        newCount = Math.min(originalCount * 2, maxQueueCount.value);
      } else {
        const originalCount = batchCount.value + 1;
        newCount = Math.floor(originalCount / 2);
      }
      batchCount.value = newCount;
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "batch-count",
        "aria-label": _ctx.$t("menu.batchCount")
      }, [
        createVNode(unref(InputNumber$1), {
          modelValue: unref(batchCount),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(batchCount) ? batchCount.value = $event : null),
          class: "w-14",
          min: minQueueCount,
          max: maxQueueCount.value,
          fluid: "",
          "show-buttons": "",
          pt: {
            incrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(true);
              }, "onmousedown")
            },
            decrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(false);
              }, "onmousedown")
            }
          }
        }, null, 8, ["modelValue", "max", "pt"])
      ], 8, _hoisted_1$y)), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("menu.batchCount"),
            showDelay: 600
          },
          void 0,
          { bottom: true }
        ]
      ]);
    };
  }
});
const BatchCountEdit = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-78201e86"]]);
const _hoisted_1$x = { class: "queue-button-group flex" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ComfyQueueButton",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const queueCountStore = storeToRefs(useQueuePendingTaskCountStore());
    const { mode: queueMode } = storeToRefs(useQueueSettingsStore());
    const { t: t2 } = useI18n();
    const queueModeMenuItemLookup = computed(() => ({
      disabled: {
        key: "disabled",
        label: t2("menu.run"),
        tooltip: t2("menu.disabledTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "disabled";
        }, "command")
      },
      instant: {
        key: "instant",
        label: `${t2("menu.run")} (${t2("menu.instant")})`,
        tooltip: t2("menu.instantTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "instant";
        }, "command")
      },
      change: {
        key: "change",
        label: `${t2("menu.run")} (${t2("menu.onChange")})`,
        tooltip: t2("menu.onChangeTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "change";
        }, "command")
      }
    }));
    const activeQueueModeMenuItem = computed(
      () => queueModeMenuItemLookup.value[queueMode.value]
    );
    const queueModeMenuItems = computed(
      () => Object.values(queueModeMenuItemLookup.value)
    );
    const executingPrompt = computed(() => !!queueCountStore.count.value);
    const hasPendingTasks = computed(
      () => queueCountStore.count.value > 1 || queueMode.value !== "disabled"
    );
    const commandStore = useCommandStore();
    const queuePrompt = /* @__PURE__ */ __name(async (e) => {
      const commandId = "shiftKey" in e && e.shiftKey ? "Comfy.QueuePromptFront" : "Comfy.QueuePrompt";
      await commandStore.execute(commandId);
    }, "queuePrompt");
    return (_ctx, _cache) => {
      const _component_i_lucide58list_start = __unplugin_components_0$4;
      const _component_i_lucide58play = __unplugin_components_1$3;
      const _component_i_lucide58fast_forward = __unplugin_components_2$2;
      const _component_i_lucide58step_forward = __unplugin_components_3$2;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        withDirectives((openBlock(), createBlock(unref(SplitButton), {
          class: "comfyui-queue-button",
          label: activeQueueModeMenuItem.value.label,
          severity: "primary",
          size: "small",
          model: queueModeMenuItems.value,
          "data-testid": "queue-button",
          onClick: queuePrompt
        }, {
          icon: withCtx(() => [
            unref(workspaceStore).shiftDown ? (openBlock(), createBlock(_component_i_lucide58list_start, { key: 0 })) : unref(queueMode) === "disabled" ? (openBlock(), createBlock(_component_i_lucide58play, { key: 1 })) : unref(queueMode) === "instant" ? (openBlock(), createBlock(_component_i_lucide58fast_forward, { key: 2 })) : unref(queueMode) === "change" ? (openBlock(), createBlock(_component_i_lucide58step_forward, { key: 3 })) : createCommentVNode("", true)
          ]),
          item: withCtx(({ item }) => [
            withDirectives(createVNode(unref(Button), {
              label: String(item.label),
              icon: item.icon,
              severity: item.key === unref(queueMode) ? "primary" : "secondary",
              size: "small",
              text: ""
            }, null, 8, ["label", "icon", "severity"]), [
              [_directive_tooltip, {
                value: item.tooltip,
                showDelay: 600
              }]
            ])
          ]),
          _: 1
        }, 8, ["label", "model"])), [
          [
            _directive_tooltip,
            {
              value: unref(workspaceStore).shiftDown ? _ctx.$t("menu.runWorkflowFront") : _ctx.$t("menu.runWorkflow"),
              showDelay: 600
            },
            void 0,
            { bottom: true }
          ]
        ]),
        createVNode(BatchCountEdit),
        createVNode(unref(ButtonGroup), { class: "execution-actions flex flex-nowrap" }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-times",
              severity: executingPrompt.value ? "danger" : "secondary",
              disabled: !executingPrompt.value,
              text: "",
              "aria-label": _ctx.$t("menu.interrupt"),
              onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Interrupt"))
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("menu.interrupt"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ]),
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-stop",
              severity: hasPendingTasks.value ? "danger" : "secondary",
              disabled: !hasPendingTasks.value,
              text: "",
              "aria-label": _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
              onClick: _cache[1] || (_cache[1] = () => {
                if (unref(queueCountStore).count.value > 1) {
                  unref(commandStore).execute("Comfy.ClearPendingTasks");
                }
                queueMode.value = "disabled";
              })
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ComfyQueueButton = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-43776fb9"]]);
const overlapThreshold = 20;
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "ComfyActionbar",
  setup(__props) {
    const settingsStore = useSettingStore();
    const position = computed(() => settingsStore.get("Comfy.UseNewMenu"));
    const visible = computed(() => position.value !== "Disabled");
    const topMenuRef = inject("topMenuRef");
    const panelRef = ref(null);
    const dragHandleRef = ref(null);
    const isDocked = useLocalStorage("Comfy.MenuPosition.Docked", false);
    const storedPosition = useLocalStorage("Comfy.MenuPosition.Floating", {
      x: 0,
      y: 0
    });
    const {
      x,
      y,
      style,
      isDragging
    } = useDraggable(panelRef, {
      initialValue: { x: 0, y: 0 },
      handle: dragHandleRef,
      containerElement: document.body,
      onMove: /* @__PURE__ */ __name((event) => {
        if (position.value === "Top") {
          const minY = topMenuRef?.value?.getBoundingClientRect().top ?? 40;
          if (event.y < minY) {
            event.y = minY;
          }
        }
      }, "onMove")
    });
    watchDebounced(
      [x, y],
      ([newX, newY]) => {
        storedPosition.value = { x: newX, y: newY };
      },
      { debounce: 300 }
    );
    const setInitialPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        if (menuWidth === 0 || menuHeight === 0) {
          return;
        }
        if (storedPosition.value.x !== 0 || storedPosition.value.y !== 0) {
          x.value = clamp(storedPosition.value.x, 0, screenWidth - menuWidth);
          y.value = clamp(storedPosition.value.y, 0, screenHeight - menuHeight);
          captureLastDragState();
          return;
        }
        if (x.value === 0 && y.value === 0) {
          x.value = clamp((screenWidth - menuWidth) / 2, 0, screenWidth - menuWidth);
          y.value = clamp(
            screenHeight - menuHeight - 10,
            0,
            screenHeight - menuHeight
          );
          captureLastDragState();
        }
      }
    }, "setInitialPosition");
    onMounted(setInitialPosition);
    watch(visible, async (newVisible) => {
      if (newVisible) {
        await nextTick(setInitialPosition);
      }
    });
    const lastDragState = ref({
      x: x.value,
      y: y.value,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    const captureLastDragState = /* @__PURE__ */ __name(() => {
      lastDragState.value = {
        x: x.value,
        y: y.value,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    }, "captureLastDragState");
    watch(
      isDragging,
      (newIsDragging) => {
        if (!newIsDragging) {
          captureLastDragState();
        }
      },
      { immediate: true }
    );
    const adjustMenuPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        const distanceLeft = lastDragState.value.x;
        const distanceRight = lastDragState.value.windowWidth - (lastDragState.value.x + menuWidth);
        const distanceTop = lastDragState.value.y;
        const distanceBottom = lastDragState.value.windowHeight - (lastDragState.value.y + menuHeight);
        const distances = [
          { edge: "left", distance: distanceLeft },
          { edge: "right", distance: distanceRight },
          { edge: "top", distance: distanceTop },
          { edge: "bottom", distance: distanceBottom }
        ];
        const closestEdge = distances.reduce(
          (min, curr) => curr.distance < min.distance ? curr : min
        );
        const verticalRatio = lastDragState.value.y / lastDragState.value.windowHeight;
        const horizontalRatio = lastDragState.value.x / lastDragState.value.windowWidth;
        if (closestEdge.edge === "left") {
          x.value = closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "right") {
          x.value = screenWidth - menuWidth - closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "top") {
          x.value = horizontalRatio * screenWidth;
          y.value = closestEdge.distance;
        } else {
          x.value = horizontalRatio * screenWidth;
          y.value = screenHeight - menuHeight - closestEdge.distance;
        }
        x.value = clamp(x.value, 0, screenWidth - menuWidth);
        y.value = clamp(y.value, 0, screenHeight - menuHeight);
      }
    }, "adjustMenuPosition");
    useEventListener(window, "resize", adjustMenuPosition);
    const topMenuBounds = useElementBounding(topMenuRef);
    const isOverlappingWithTopMenu = computed(() => {
      if (!panelRef.value) {
        return false;
      }
      const { height } = panelRef.value.getBoundingClientRect();
      const actionbarBottom = y.value + height;
      const topMenuBottom = topMenuBounds.bottom.value;
      const overlapPixels = Math.min(actionbarBottom, topMenuBottom) - Math.max(y.value, topMenuBounds.top.value);
      return overlapPixels > overlapThreshold;
    });
    watch(isDragging, (newIsDragging) => {
      if (!newIsDragging) {
        isDocked.value = isOverlappingWithTopMenu.value;
      } else {
        isDocked.value = false;
      }
    });
    const eventBus = useEventBus("topMenu");
    watch([isDragging, isOverlappingWithTopMenu], ([dragging, overlapping]) => {
      eventBus.emit("updateHighlight", {
        isDragging: dragging,
        isOverlapping: overlapping
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Panel), {
        class: normalizeClass(["actionbar w-fit", { "is-dragging": unref(isDragging), "is-docked": unref(isDocked) }]),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "panelRef",
            ref: panelRef,
            class: "actionbar-content flex items-center select-none"
          }, [
            createElementVNode("span", {
              ref_key: "dragHandleRef",
              ref: dragHandleRef,
              class: "drag-handle cursor-move mr-2 p-0!"
            }, null, 512),
            createVNode(ComfyQueueButton)
          ], 512)
        ]),
        _: 1
      }, 8, ["style", "class"]);
    };
  }
});
const Actionbar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-896553a8"]]);
const _hoisted_1$w = { class: "p-breadcrumb-item-label" };
const _hoisted_2$c = {
  key: 0,
  class: "pi pi-angle-down text-[10px]"
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumbItem",
  props: {
    item: {},
    isActive: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const menu = ref();
    const dialogService = useDialogService();
    const workflowStore = useWorkflowStore();
    const workflowService = useWorkflowService();
    const isEditing = ref(false);
    const itemLabel = ref();
    const itemInputRef = ref();
    const wrapperRef = ref();
    const rename = /* @__PURE__ */ __name(async (newName, initialName) => {
      if (newName && newName !== initialName) {
        props.item.updateTitle?.(newName);
        if (workflowStore.activeSubgraph) {
          workflowStore.activeSubgraph.name = newName;
        } else if (workflowStore.activeWorkflow) {
          try {
            await workflowService.renameWorkflow(
              workflowStore.activeWorkflow,
              ComfyWorkflow.basePath + appendJsonExt(newName)
            );
          } catch (error) {
            console.error(error);
            dialogService.showErrorDialog(error);
            return;
          }
        }
        const navigationStore = useSubgraphNavigationStore();
        navigationStore.restoreState(navigationStore.exportState());
      }
    }, "rename");
    const menuItems = computed(() => {
      return [
        {
          label: t2("g.rename"),
          icon: "pi pi-pencil",
          command: startRename
        },
        {
          label: t2("breadcrumbsMenu.duplicate"),
          icon: "pi pi-copy",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: props.item.key === "root"
        },
        {
          separator: true
        },
        {
          label: t2("breadcrumbsMenu.clearWorkflow"),
          icon: "pi pi-trash",
          command: /* @__PURE__ */ __name(async () => {
            await useCommandStore().execute("Comfy.ClearWorkflow");
          }, "command")
        },
        {
          separator: true,
          visible: props.item.key === "root"
        },
        {
          label: t2("breadcrumbsMenu.deleteWorkflow"),
          icon: "pi pi-times",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.deleteWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: props.item.key === "root"
        }
      ];
    });
    const handleClick = /* @__PURE__ */ __name((event) => {
      if (isEditing.value) {
        return;
      }
      if (event.detail === 1) {
        if (props.isActive) {
          menu.value?.toggle(event);
        } else {
          props.item.command?.({ item: props.item, originalEvent: event });
        }
      } else if (props.isActive && event.detail === 2) {
        menu.value?.hide();
        event.stopPropagation();
        event.preventDefault();
        startRename();
      }
    }, "handleClick");
    const startRename = /* @__PURE__ */ __name(() => {
      isEditing.value = true;
      itemLabel.value = props.item.label;
      void nextTick(() => {
        if (itemInputRef.value?.$el) {
          itemInputRef.value.$el.focus();
          itemInputRef.value.$el.select();
          if (wrapperRef.value) {
            itemInputRef.value.$el.style.width = `${Math.max(200, wrapperRef.value.offsetWidth)}px`;
          }
        }
      });
    }, "startRename");
    const inputBlur = /* @__PURE__ */ __name(async (doRename) => {
      if (doRename) {
        await rename(itemLabel.value, props.item.label);
      }
      isEditing.value = false;
    }, "inputBlur");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives((openBlock(), createElementBlock("a", {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          href: "#",
          class: normalizeClass(["cursor-pointer p-breadcrumb-item-link", {
            "flex items-center gap-1": _ctx.isActive,
            "p-breadcrumb-item-link-menu-visible": menu.value?.overlayVisible,
            "p-breadcrumb-item-link-icon-visible": _ctx.isActive,
            "active-breadcrumb-item": _ctx.isActive
          }]),
          onClick: handleClick
        }, [
          createElementVNode("span", _hoisted_1$w, toDisplayString(_ctx.item.label), 1),
          _ctx.isActive ? (openBlock(), createElementBlock("i", _hoisted_2$c)) : createCommentVNode("", true)
        ], 2)), [
          [
            _directive_tooltip,
            {
              value: _ctx.item.label,
              showDelay: 512
            },
            void 0,
            { bottom: true }
          ]
        ]),
        _ctx.isActive ? (openBlock(), createBlock(unref(Menu), {
          key: 0,
          ref_key: "menu",
          ref: menu,
          model: menuItems.value,
          popup: true,
          pt: {
            root: {
              style: "background-color: var(--comfy-menu-secondary-bg)"
            },
            itemLink: {
              class: "py-2"
            }
          }
        }, null, 8, ["model"])) : createCommentVNode("", true),
        isEditing.value ? (openBlock(), createBlock(unref(InputText), {
          key: 1,
          ref_key: "itemInputRef",
          ref: itemInputRef,
          modelValue: itemLabel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => itemLabel.value = $event),
          class: "fixed z-[10000] text-[.8rem] px-2 py-2",
          onBlur: _cache[1] || (_cache[1] = ($event) => inputBlur(true)),
          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["stop"])),
          onKeydown: [
            _cache[3] || (_cache[3] = withKeys(($event) => inputBlur(true), ["enter"])),
            _cache[4] || (_cache[4] = withKeys(($event) => inputBlur(false), ["esc"]))
          ]
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SubgraphBreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-2d792da5"]]);
const MIN_WIDTH = 28;
const ITEM_GAP = 8;
const ITEM_PADDING = 8;
const ICON_WIDTH = 20;
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumb",
  setup(__props) {
    const workflowStore = useWorkflowStore();
    const navigationStore = useSubgraphNavigationStore();
    const breadcrumbRef = ref();
    const workflowName = computed(() => workflowStore.activeWorkflow?.filename);
    const collapseTabs = ref(false);
    const overflowingTabs = ref(false);
    const breadcrumbElement = computed(() => {
      if (!breadcrumbRef.value) return null;
      const el = breadcrumbRef.value.$el;
      const list = el?.querySelector(".p-breadcrumb-list");
      return list;
    });
    const items = computed(() => {
      const items2 = navigationStore.navigationStack.map((subgraph) => ({
        label: subgraph.name,
        command: /* @__PURE__ */ __name(() => {
          const canvas = useCanvasStore().getCanvas();
          if (!canvas.graph) throw new TypeError("Canvas has no graph");
          canvas.setGraph(subgraph);
        }, "command"),
        updateTitle: /* @__PURE__ */ __name((title) => {
          const rootGraph = useCanvasStore().getCanvas().graph?.rootGraph;
          if (!rootGraph) return;
          forEachSubgraphNode(rootGraph, subgraph.id, (node) => {
            node.title = title;
          });
        }, "updateTitle")
      }));
      return [home.value, ...items2];
    });
    const home = computed(() => ({
      label: workflowName.value,
      icon: "pi pi-home",
      key: "root",
      command: /* @__PURE__ */ __name(() => {
        const canvas = useCanvasStore().getCanvas();
        if (!canvas.graph) throw new TypeError("Canvas has no graph");
        canvas.setGraph(canvas.graph.rootGraph);
      }, "command")
    }));
    let overflowObserver;
    watch(breadcrumbElement, (el) => {
      overflowObserver?.dispose();
      overflowObserver = void 0;
      if (!el) return;
      overflowObserver = useOverflowObserver(el, {
        onCheck: /* @__PURE__ */ __name((isOverflowing) => {
          overflowingTabs.value = isOverflowing;
          if (collapseTabs.value) {
            if (!isOverflowing) {
              const items2 = [
                ...el.querySelectorAll(".p-breadcrumb-item")
              ];
              if (items2.length < 3) return;
              const itemsWithIcon = items2.filter(
                (item) => item.querySelector(".p-breadcrumb-item-link-icon-visible")
              ).length;
              const separators = el.querySelectorAll(
                ".p-breadcrumb-separator"
              );
              const separator = separators[separators.length - 1];
              const separatorWidth = separator.offsetWidth;
              const itemsWidth = (MIN_WIDTH + ITEM_PADDING + ITEM_PADDING) * items2.length + itemsWithIcon * ICON_WIDTH;
              const separatorsWidth = (items2.length - 1) * separatorWidth;
              const gapsWidth = (items2.length - 1) * (ITEM_GAP * 2);
              const totalWidth = itemsWidth + separatorsWidth + gapsWidth;
              const containerWidth = el.clientWidth;
              if (totalWidth <= containerWidth) {
                collapseTabs.value = false;
              }
            }
          } else if (isOverflowing) {
            collapseTabs.value = true;
          }
        }, "onCheck")
      });
    });
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["subgraph-breadcrumb w-auto", {
          "subgraph-breadcrumb-collapse": collapseTabs.value,
          "subgraph-breadcrumb-overflow": overflowingTabs.value
        }]),
        style: normalizeStyle({
          "--p-breadcrumb-gap": `${ITEM_GAP}px`,
          "--p-breadcrumb-item-min-width": `${MIN_WIDTH}px`,
          "--p-breadcrumb-item-padding": `${ITEM_PADDING}px`,
          "--p-breadcrumb-icon-width": `${ICON_WIDTH}px`
        })
      }, [
        createVNode(unref(Breadcrumb), {
          ref_key: "breadcrumbRef",
          ref: breadcrumbRef,
          class: "bg-transparent p-0",
          model: items.value,
          "aria-label": "Graph navigation"
        }, {
          item: withCtx(({ item }) => [
            createVNode(SubgraphBreadcrumbItem, {
              item,
              "is-active": item === items.value.at(-1)
            }, null, 8, ["item", "is-active"])
          ]),
          separator: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode("span", { style: { "transform": "scale(1.5)" } }, " / ", -1)
          ])),
          _: 1
        }, 8, ["model"])
      ], 6);
    };
  }
});
const SubgraphBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-37d77d51"]]);
const _hoisted_1$v = { class: "flex items-center gap-2" };
const _hoisted_2$b = {
  key: 0,
  class: "pi pi-sun"
};
const _hoisted_3$9 = {
  key: 1,
  class: "pi pi-moon"
};
const _hoisted_4$8 = ["href", "onMousedown", "onClick"];
const _hoisted_5$4 = { class: "p-menubar-item-label text-nowrap" };
const _hoisted_6$4 = {
  key: 3,
  class: "ml-auto border border-surface rounded text-muted text-xs text-nowrap p-1 keybinding-tag"
};
const _hoisted_7$3 = {
  key: 4,
  class: "ml-auto pi pi-angle-right"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "CommandMenubar",
  setup(__props) {
    const colorPaletteStore = useColorPaletteStore();
    const menuItemsStore = useMenuItemStore();
    const commandStore = useCommandStore();
    const dialogStore = useDialogStore();
    const aboutPanelStore = useAboutPanelStore();
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const menuRef = ref(null);
    const isLargeSidebar = computed(
      () => settingStore.get("Comfy.Sidebar.Size") !== "small"
    );
    const isTopMenu = computed(() => settingStore.get("Comfy.UseNewMenu") === "Top");
    const translateMenuItem = /* @__PURE__ */ __name((item) => {
      const label = typeof item.label === "function" ? item.label() : item.label;
      const translatedLabel = label ? t2(`menuLabels.${normalizeI18nKey(label)}`, label) : void 0;
      return {
        ...item,
        label: translatedLabel,
        items: item.items?.map(translateMenuItem)
      };
    }, "translateMenuItem");
    const showSettings = /* @__PURE__ */ __name((defaultPanel) => {
      dialogStore.showDialog({
        key: "global-settings",
        headerComponent: SettingDialogHeader,
        component: SettingDialogContent,
        props: {
          defaultPanel
        }
      });
    }, "showSettings");
    const isManagerInstalled = computed(() => {
      return aboutPanelStore.badges.some(
        (badge) => badge.label.includes("ComfyUI-Manager") || badge.url.includes("ComfyUI-Manager")
      );
    });
    const showManageExtensions = /* @__PURE__ */ __name(() => {
      if (isManagerInstalled.value) {
        useDialogService().showManagerDialog();
      } else {
        showSettings("extension");
      }
    }, "showManageExtensions");
    const extraMenuItems = computed(() => [
      { separator: true },
      {
        key: "theme",
        label: t2("menu.theme")
      },
      { separator: true },
      {
        key: "browse-templates",
        label: t2("menuLabels.Browse Templates"),
        icon: "icon-[comfy--template]",
        command: /* @__PURE__ */ __name(() => commandStore.execute("Comfy.BrowseTemplates"), "command")
      },
      {
        key: "settings",
        label: t2("g.settings"),
        icon: "mdi mdi-cog-outline",
        command: /* @__PURE__ */ __name(() => showSettings(), "command")
      },
      {
        key: "manage-extensions",
        label: t2("menu.manageExtensions"),
        icon: "mdi mdi-puzzle-outline",
        command: showManageExtensions
      }
    ]);
    const lightLabel = computed(() => t2("menu.light"));
    const darkLabel = computed(() => t2("menu.dark"));
    const activeTheme = computed(() => {
      return colorPaletteStore.completedActivePalette.light_theme ? lightLabel.value : darkLabel.value;
    });
    const onThemeChange = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.ToggleTheme");
    }, "onThemeChange");
    const translatedItems = computed(() => {
      const items = menuItemsStore.menuItems.map(translateMenuItem);
      let helpIndex = items.findIndex((item) => item.key === "Help");
      let helpItem;
      if (helpIndex !== -1) {
        items[helpIndex].icon = "mdi mdi-help-circle-outline";
        const isLastItem = helpIndex !== items.length - 1;
        helpItem = items.splice(
          helpIndex,
          1,
          ...isLastItem ? [
            {
              separator: true
            }
          ] : []
        )[0];
      }
      helpIndex = items.length;
      items.splice(
        helpIndex,
        0,
        ...extraMenuItems.value,
        ...helpItem ? [
          {
            separator: true
          },
          helpItem
        ] : []
      );
      return items;
    });
    const onMenuShow = /* @__PURE__ */ __name(() => {
      void nextTick(() => {
        if (menuRef.value) {
          menuRef.value.dirty = true;
        }
      });
    }, "onMenuShow");
    const isZoomCommand = /* @__PURE__ */ __name((item) => {
      return item.comfyCommand?.id === "Comfy.Canvas.ZoomIn" || item.comfyCommand?.id === "Comfy.Canvas.ZoomOut";
    }, "isZoomCommand");
    const handleZoomMouseDown = /* @__PURE__ */ __name((item, event) => {
      if (item.comfyCommand) {
        whileMouseDown(
          event,
          async () => {
            await commandStore.execute(item.comfyCommand.id);
          },
          50
        );
      }
    }, "handleZoomMouseDown");
    const handleItemClick = /* @__PURE__ */ __name((item, event) => {
      if (isZoomCommand(item) || item.comfyCommand?.active) {
        event.preventDefault();
        event.stopPropagation();
        if (item.comfyCommand?.active) {
          item.command?.({
            item,
            originalEvent: event
          });
        }
        return false;
      }
    }, "handleItemClick");
    const hasActiveStateSiblings = /* @__PURE__ */ __name((item) => {
      return menuItemsStore.menuItemHasActiveStateChildren[item.parentPath];
    }, "hasActiveStateSiblings");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(["comfyui-logo-wrapper p-1 flex justify-center items-center cursor-pointer rounded-md mr-2", {
            "comfyui-logo-menu-visible": menuRef.value?.visible
          }]),
          style: normalizeStyle({
            minWidth: isLargeSidebar.value ? "4rem" : "auto"
          }),
          onClick: _cache[1] || (_cache[1] = ($event) => menuRef.value?.toggle($event))
        }, [
          createElementVNode("img", {
            src: _imports_0,
            alt: "ComfyUI Logo",
            class: "comfyui-logo h-7",
            onContextmenu: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(showNativeSystemMenu) && unref(showNativeSystemMenu)(...args))
          }, null, 32),
          _cache[4] || (_cache[4] = createElementVNode("i", { class: "pi pi-angle-down ml-1 text-[10px]" }, null, -1))
        ], 6),
        createVNode(unref(TieredMenu), {
          ref_key: "menuRef",
          ref: menuRef,
          model: translatedItems.value,
          popup: true,
          class: normalizeClass(["comfy-command-menu", {
            "comfy-command-menu-top": isTopMenu.value
          }]),
          onShow: onMenuShow
        }, {
          item: withCtx(({ item, props }) => [
            item.key === "theme" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "flex items-center gap-4 px-4 py-5",
              onClick: _cache[3] || (_cache[3] = withModifiers(() => {
              }, ["stop", "prevent"]))
            }, [
              createTextVNode(toDisplayString(item.label) + " ", 1),
              createVNode(unref(SelectButton), {
                options: [darkLabel.value, lightLabel.value],
                "model-value": activeTheme.value,
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop", "prevent"])),
                "onUpdate:modelValue": onThemeChange
              }, {
                option: withCtx(({ option }) => [
                  createElementVNode("div", _hoisted_1$v, [
                    option === lightLabel.value ? (openBlock(), createElementBlock("i", _hoisted_2$b)) : createCommentVNode("", true),
                    option === darkLabel.value ? (openBlock(), createElementBlock("i", _hoisted_3$9)) : createCommentVNode("", true),
                    createElementVNode("span", null, toDisplayString(option), 1)
                  ])
                ]),
                _: 1
              }, 8, ["options", "model-value"])
            ])) : (openBlock(), createElementBlock("a", mergeProps({
              key: 1,
              class: "p-menubar-item-link px-4 py-2"
            }, props.action, {
              href: item.url,
              target: "_blank",
              class: typeof item.class === "function" ? item.class() : item.class,
              onMousedown: /* @__PURE__ */ __name(($event) => isZoomCommand(item) ? handleZoomMouseDown(item, $event) : void 0, "onMousedown"),
              onClick: /* @__PURE__ */ __name(($event) => handleItemClick(item, $event), "onClick")
            }), [
              hasActiveStateSiblings(item) ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["p-menubar-item-icon pi pi-check text-sm", { invisible: !item.comfyCommand?.active?.() }])
              }, null, 2)) : item.icon && item.comfyCommand?.id !== "Comfy.NewBlankWorkflow" ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(["p-menubar-item-icon", item.icon])
              }, null, 2)) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_5$4, toDisplayString(item.label), 1),
              item.comfyCommand?.id === "Comfy.NewBlankWorkflow" ? (openBlock(), createElementBlock("i", {
                key: 2,
                class: normalizeClass(["ml-auto", item.icon])
              }, null, 2)) : createCommentVNode("", true),
              item?.comfyCommand?.keybinding ? (openBlock(), createElementBlock("span", _hoisted_6$4, toDisplayString(item.comfyCommand.keybinding.combo.toString()), 1)) : createCommentVNode("", true),
              item.items ? (openBlock(), createElementBlock("i", _hoisted_7$3)) : createCommentVNode("", true)
            ], 16, _hoisted_4$8))
          ]),
          _: 1
        }, 8, ["model", "class"]),
        createVNode(SubgraphBreadcrumb)
      ], 64);
    };
  }
});
const CommandMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-480c3d1d"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "UserAvatar",
  props: {
    photoUrl: {},
    ariaLabel: {}
  },
  setup(__props) {
    const imageError = ref(false);
    const handleImageError = /* @__PURE__ */ __name(() => {
      imageError.value = true;
    }, "handleImageError");
    const hasAvatar = computed(() => __props.photoUrl && !imageError.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Avatar), {
        image: _ctx.photoUrl ?? void 0,
        icon: hasAvatar.value ? void 0 : "pi pi-user",
        shape: "circle",
        "aria-label": _ctx.ariaLabel ?? _ctx.$t("auth.login.userAvatar"),
        onError: handleImageError
      }, null, 8, ["image", "icon", "aria-label"]);
    };
  }
});
const useCurrentUser = /* @__PURE__ */ __name(() => {
  const authStore = useFirebaseAuthStore();
  const commandStore = useCommandStore();
  const apiKeyStore = useApiKeyAuthStore();
  const firebaseUser = computed(() => authStore.currentUser);
  const isApiKeyLogin = computed(() => apiKeyStore.isAuthenticated);
  const isLoggedIn = computed(
    () => !!isApiKeyLogin.value || firebaseUser.value !== null
  );
  const userDisplayName = computed(() => {
    if (isApiKeyLogin.value) {
      return apiKeyStore.currentUser?.name;
    }
    return firebaseUser.value?.displayName;
  });
  const userEmail = computed(() => {
    if (isApiKeyLogin.value) {
      return apiKeyStore.currentUser?.email;
    }
    return firebaseUser.value?.email;
  });
  const providerName = computed(() => {
    if (isApiKeyLogin.value) {
      return "Comfy API Key";
    }
    const providerId = firebaseUser.value?.providerData[0]?.providerId;
    if (providerId?.includes("google")) {
      return "Google";
    }
    if (providerId?.includes("github")) {
      return "GitHub";
    }
    return providerId;
  });
  const providerIcon = computed(() => {
    if (isApiKeyLogin.value) {
      return "pi pi-key";
    }
    const providerId = firebaseUser.value?.providerData[0]?.providerId;
    if (providerId?.includes("google")) {
      return "pi pi-google";
    }
    if (providerId?.includes("github")) {
      return "pi pi-github";
    }
    return "pi pi-user";
  });
  const isEmailProvider = computed(() => {
    if (isApiKeyLogin.value) {
      return false;
    }
    const providerId = firebaseUser.value?.providerData[0]?.providerId;
    return providerId === "password";
  });
  const userPhotoUrl = computed(() => {
    if (isApiKeyLogin.value) return null;
    return firebaseUser.value?.photoURL;
  });
  const handleSignOut = /* @__PURE__ */ __name(async () => {
    if (isApiKeyLogin.value) {
      await apiKeyStore.clearStoredApiKey();
    } else {
      await commandStore.execute("Comfy.User.SignOut");
    }
  }, "handleSignOut");
  const handleSignIn = /* @__PURE__ */ __name(async () => {
    await commandStore.execute("Comfy.User.OpenSignInDialog");
  }, "handleSignIn");
  return {
    loading: authStore.loading,
    isLoggedIn,
    isApiKeyLogin,
    isEmailProvider,
    userDisplayName,
    userEmail,
    userPhotoUrl,
    providerName,
    providerIcon,
    handleSignOut,
    handleSignIn
  };
}, "useCurrentUser");
const _hoisted_1$u = { class: "current-user-popover w-72" };
const _hoisted_2$a = { class: "p-3" };
const _hoisted_3$8 = { class: "flex flex-col items-center" };
const _hoisted_4$7 = { class: "text-lg font-semibold truncate my-0 mb-1" };
const _hoisted_5$3 = {
  key: 0,
  class: "text-sm text-muted truncate my-0"
};
const _hoisted_6$3 = { class: "w-full flex flex-col gap-2 p-2" };
const _hoisted_7$2 = { class: "text-muted text-sm" };
const _hoisted_8$1 = { class: "flex justify-between items-center" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserPopover",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { userDisplayName, userEmail, userPhotoUrl } = useCurrentUser();
    const authActions = useFirebaseAuthActions();
    const dialogService = useDialogService();
    const handleOpenUserSettings = /* @__PURE__ */ __name(() => {
      dialogService.showSettingsDialog("user");
      emit("close");
    }, "handleOpenUserSettings");
    const handleTopUp = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
      emit("close");
    }, "handleTopUp");
    const handleLogout = /* @__PURE__ */ __name(async () => {
      await authActions.logout();
      emit("close");
    }, "handleLogout");
    const handleOpenApiPricing = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/tutorials/api-nodes/pricing", "_blank");
      emit("close");
    }, "handleOpenApiPricing");
    onMounted(() => {
      void authActions.fetchBalance();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        createElementVNode("div", _hoisted_2$a, [
          createElementVNode("div", _hoisted_3$8, [
            createVNode(_sfc_main$m, {
              class: "mb-3",
              "photo-url": unref(userPhotoUrl),
              "pt:icon:class": {
                "!text-2xl": !unref(userPhotoUrl)
              },
              size: "large"
            }, null, 8, ["photo-url", "pt:icon:class"]),
            createElementVNode("h3", _hoisted_4$7, toDisplayString(unref(userDisplayName) || _ctx.$t("g.user")), 1),
            unref(userEmail) ? (openBlock(), createElementBlock("p", _hoisted_5$3, toDisplayString(unref(userEmail)), 1)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("userSettings.title"),
          icon: "pi pi-cog",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenUserSettings
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("auth.signOut.signOut"),
          icon: "pi pi-sign-out",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleLogout
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("credits.apiPricing"),
          icon: "pi pi-external-link",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenApiPricing
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createElementVNode("div", _hoisted_6$3, [
          createElementVNode("div", _hoisted_7$2, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
          createElementVNode("div", _hoisted_8$1, [
            createVNode(_sfc_main$1b, { "text-class": "text-2xl" }),
            createVNode(unref(Button), {
              label: _ctx.$t("credits.topUp.topUp"),
              onClick: handleTopUp
            }, null, 8, ["label"])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$t = { class: "flex items-center rounded-full bg-[var(--p-content-background)]" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserButton",
  setup(__props) {
    const { isLoggedIn, userPhotoUrl } = useCurrentUser();
    const popover = ref(null);
    const photoURL = computed(
      () => userPhotoUrl.value ?? void 0
    );
    const closePopover = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "closePopover");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isLoggedIn) ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          class: "user-profile-button p-1",
          severity: "secondary",
          text: "",
          "aria-label": "user profile",
          onClick: _cache[0] || (_cache[0] = ($event) => popover.value?.toggle($event))
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$t, [
              createVNode(_sfc_main$m, { "photo-url": photoURL.value }, null, 8, ["photo-url"]),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down px-1",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "show-arrow": false
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$l, { onClose: closePopover })
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
const _hoisted_1$s = {
  class: "w-full flex content-end z-[1001] h-[38px]",
  style: { "background": "var(--border-color)" }
};
const _hoisted_2$9 = { class: "fixed top-0 left-0 app-drag w-full h-[var(--comfy-topbar-height)]" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TopMenubar",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const betaMenuEnabled = computed(() => menuSetting.value !== "Disabled");
    const showTopMenu = computed(
      () => betaMenuEnabled.value && !workspaceState.focusMode
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const menuRight = ref(null);
    onMounted(() => {
      if (menuRight.value) {
        app.menu.element.style.width = "fit-content";
        menuRight.value.appendChild(app.menu.element);
      }
    });
    const topMenuRef = ref(null);
    provide("topMenuRef", topMenuRef);
    const eventBus = useEventBus("topMenu");
    const isDropZone = ref(false);
    const isDroppable = ref(false);
    eventBus.on((event, payload) => {
      if (event === "updateHighlight") {
        isDropZone.value = payload.isDragging;
        isDroppable.value = payload.isOverlapping && payload.isDragging;
      }
    });
    onMounted(() => {
      if (isElectron()) {
        electronAPI().changeTheme({
          height: topMenuRef.value?.getBoundingClientRect().height ?? 0
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        withDirectives(createElementVNode("div", _hoisted_1$s, [
          createVNode(WorkflowTabs)
        ], 512), [
          [vShow, showTopMenu.value && workflowTabsPosition.value === "Topbar"]
        ]),
        withDirectives(createElementVNode("div", {
          ref_key: "topMenuRef",
          ref: topMenuRef,
          class: normalizeClass(["comfyui-menu flex items-center", { dropzone: isDropZone.value, "dropzone-active": isDroppable.value }])
        }, [
          createVNode(CommandMenubar),
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "flex-grow min-w-0 app-drag h-full" }, null, -1)),
          createElementVNode("div", {
            ref_key: "menuRight",
            ref: menuRight,
            class: "comfyui-menu-right flex-shrink-1 overflow-auto"
          }, null, 512),
          createVNode(Actionbar),
          createVNode(_sfc_main$k, { class: "flex-shrink-0" })
        ], 2), [
          [vShow, showTopMenu.value]
        ]),
        withDirectives(createElementVNode("div", _hoisted_2$9, null, 512), [
          [vShow, unref(isNativeWindow)() && !showTopMenu.value]
        ])
      ]);
    };
  }
});
const TopMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b2376bdd"]]);
const DEFAULT_TITLE = "ComfyUI";
const TITLE_SUFFIX = " - ComfyUI";
const useBrowserTabTitle = /* @__PURE__ */ __name(() => {
  const executionStore = useExecutionStore();
  const settingStore = useSettingStore();
  const workflowStore = useWorkflowStore();
  const executionText = computed(
    () => executionStore.isIdle ? "" : `[${Math.round(executionStore.executionProgress * 100)}%]`
  );
  const newMenuEnabled = computed(
    () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
  );
  const isUnsavedText = computed(
    () => workflowStore.activeWorkflow?.isModified || !workflowStore.activeWorkflow?.isPersisted ? " *" : ""
  );
  const workflowNameText = computed(() => {
    const workflowName = workflowStore.activeWorkflow?.filename;
    return workflowName ? isUnsavedText.value + workflowName + TITLE_SUFFIX : DEFAULT_TITLE;
  });
  const nodeExecutionTitle = computed(() => {
    const nodeProgressEntries = Object.entries(
      executionStore.nodeProgressStates
    );
    const runningNodes = nodeProgressEntries.filter(
      ([_, state2]) => state2.state === "running"
    );
    if (runningNodes.length === 0) {
      return "";
    }
    if (runningNodes.length > 1) {
      return `${executionText.value}[${runningNodes.length} ${t$2("g.nodesRunning", "nodes running")}]`;
    }
    const [nodeId, state] = runningNodes[0];
    const progress = Math.round(state.value / state.max * 100);
    const nodeType = executionStore.activePrompt?.workflow?.changeTracker?.activeState.nodes.find(
      (n) => String(n.id) === nodeId
    )?.type || "Node";
    return `${executionText.value}[${progress}%] ${nodeType}`;
  });
  const workflowTitle = computed(
    () => executionText.value + (newMenuEnabled.value ? workflowNameText.value : DEFAULT_TITLE)
  );
  const title = computed(() => nodeExecutionTitle.value || workflowTitle.value);
  useTitle(title);
}, "useBrowserTabTitle");
const _hoisted_1$r = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
__name(render$d, "render$d");
const __unplugin_components_6 = markRaw({ name: "lucide-folder", render: render$d });
const _hoisted_1$q = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      createElementVNode("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
__name(render$c, "render$c");
const __unplugin_components_5 = markRaw({ name: "lucide-info", render: render$c });
const _hoisted_1$p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 3H2l8 9.46V19l4 2v-8.54z"
    }, null, -1)
  ]));
}
__name(render$b, "render$b");
const __unplugin_components_4 = markRaw({ name: "lucide-filter", render: render$b });
const _hoisted_1$o = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }),
      createElementVNode("path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" })
    ], -1)
  ]));
}
__name(render$a, "render$a");
const __unplugin_components_3$1 = markRaw({ name: "lucide-scroll", render: render$a });
const _hoisted_1$n = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"
    }, null, -1)
  ]));
}
__name(render$9, "render$9");
const __unplugin_components_2$1 = markRaw({ name: "lucide-download", render: render$9 });
const _hoisted_1$m = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5l-5 5m5-5v12"
    }, null, -1)
  ]));
}
__name(render$8, "render$8");
const __unplugin_components_1$2 = markRaw({ name: "lucide-upload", render: render$8 });
const _hoisted_1$l = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.98.98 0 0 1-.276.837l-1.61 1.61a2.4 2.4 0 0 1-1.705.707a2.4 2.4 0 0 1-1.704-.706l-1.568-1.568a1.03 1.03 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.03 1.03 0 0 0-.289-.877l-1.568-1.568A2.4 2.4 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303c.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073c-.05-.336.062-.676.303-.917l1.525-1.525A2.4 2.4 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29c.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
    }, null, -1)
  ]));
}
__name(render$7, "render$7");
const __unplugin_components_0$3 = markRaw({ name: "lucide-puzzle", render: render$7 });
const getButtonSizeClasses = /* @__PURE__ */ __name((size = "md") => {
  const sizeClasses = {
    "fit-content": "",
    sm: "px-2 py-1.5 text-xs",
    md: "px-2.5 py-2 text-sm"
  };
  return sizeClasses[size];
}, "getButtonSizeClasses");
const getButtonTypeClasses = /* @__PURE__ */ __name((type = "primary") => {
  const typeClasses = {
    primary: "bg-neutral-900 text-white dark-theme:bg-white dark-theme:text-neutral-900",
    secondary: "bg-white text-neutral-950 dark-theme:bg-zinc-700 dark-theme:text-white",
    transparent: "bg-transparent text-neutral-600 dark-theme:text-neutral-400"
  };
  return typeClasses[type];
}, "getButtonTypeClasses");
const getIconButtonSizeClasses = /* @__PURE__ */ __name((size = "md") => {
  const sizeClasses = {
    "fit-content": "w-auto h-auto",
    sm: "w-6 h-6 text-xs !rounded-md",
    md: "w-8 h-8 text-sm"
  };
  return sizeClasses[size];
}, "getIconButtonSizeClasses");
const getBaseButtonClasses = /* @__PURE__ */ __name(() => {
  return "flex items-center justify-center flex-shrink-0 outline-none border-none rounded-lg cursor-pointer transition-all duration-200";
}, "getBaseButtonClasses");
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "IconButton",
  props: {
    onClick: { type: Function },
    size: { default: "md" },
    type: { default: "secondary" },
    class: {}
  },
  setup(__props) {
    const buttonStyle = computed(() => {
      const baseClasses = `${getBaseButtonClasses()} p-0`;
      const sizeClasses = getIconButtonSizeClasses(__props.size);
      const typeClasses = getButtonTypeClasses(__props.type);
      return [baseClasses, sizeClasses, typeClasses, __props.class].filter(Boolean).join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        unstyled: "",
        class: normalizeClass(buttonStyle.value),
        onClick: _ctx.onClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "onClick"]);
    };
  }
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "IconTextButton",
  props: {
    iconPosition: { default: "left" },
    label: {},
    onClick: { type: Function },
    size: { default: "md" },
    type: { default: "primary" },
    class: {}
  },
  setup(__props) {
    const buttonStyle = computed(() => {
      const baseClasses = `${getBaseButtonClasses()} !justify-start gap-2`;
      const sizeClasses = getButtonSizeClasses(__props.size);
      const typeClasses = getButtonTypeClasses(__props.type);
      return [baseClasses, sizeClasses, typeClasses, __props.class].filter(Boolean).join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        unstyled: "",
        class: normalizeClass(buttonStyle.value),
        onClick: _ctx.onClick
      }, {
        default: withCtx(() => [
          _ctx.iconPosition !== "right" ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : createCommentVNode("", true),
          createElementVNode("span", null, toDisplayString(_ctx.label), 1),
          _ctx.iconPosition === "right" ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "onClick"]);
    };
  }
});
const _hoisted_1$k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      createElementVNode("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      createElementVNode("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
__name(render$6, "render$6");
const __unplugin_components_0$2 = markRaw({ name: "lucide-more-vertical", render: render$6 });
const _hoisted_1$j = { class: "relative inline-flex items-center" };
const _hoisted_2$8 = { class: "flex flex-col gap-1 p-2 min-w-40" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "MoreButton",
  setup(__props) {
    const popover = ref();
    const toggle = /* @__PURE__ */ __name((event) => {
      popover.value?.toggle(event);
    }, "toggle");
    const hide = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "hide");
    const pt = computed(() => ({
      root: {
        class: "absolute z-50"
      },
      content: {
        class: [
          "mt-2 bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white rounded-lg",
          "shadow-lg border border-zinc-200 dark-theme:border-zinc-700"
        ]
      }
    }));
    return (_ctx, _cache) => {
      const _component_i_lucide58more_vertical = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        createVNode(_sfc_main$i, { onClick: toggle }, {
          default: withCtx(() => [
            createVNode(_component_i_lucide58more_vertical, { class: "text-sm" })
          ]),
          _: 1
        }),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "append-to": "body",
          "auto-z-index": true,
          "base-z-index": 1e3,
          dismissable: true,
          "close-on-escape": true,
          unstyled: "",
          pt: pt.value
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2$8, [
              renderSlot(_ctx.$slots, "default", { close: hide })
            ])
          ]),
          _: 3
        }, 8, ["pt"])
      ]);
    };
  }
});
const _sfc_main$f = {};
const _hoisted_1$i = { class: "flex-1 w-full h-full" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
__name(_sfc_render$2, "_sfc_render$2");
const CardBottom = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$2]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CardContainer",
  props: {
    maxWidth: {},
    minWidth: {},
    ratio: { default: "square" }
  },
  setup(__props) {
    const containerClasses = computed(() => {
      const baseClasses = "flex flex-col bg-white dark-theme:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark-theme:border-zinc-700 overflow-hidden";
      const ratioClasses = {
        square: "aspect-[256/308]",
        portrait: "aspect-[256/325]",
        tallPortrait: "aspect-[256/353]"
      };
      return `${baseClasses} ${ratioClasses[__props.ratio]}`;
    });
    const containerStyle = computed(
      () => __props.maxWidth || __props.minWidth ? {
        maxWidth: `${__props.maxWidth}px`,
        minWidth: `${__props.minWidth}px`
      } : {}
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClasses.value),
        style: normalizeStyle(containerStyle.value)
      }, [
        renderSlot(_ctx.$slots, "top"),
        renderSlot(_ctx.$slots, "bottom")
      ], 6);
    };
  }
});
const _hoisted_1$h = { class: "absolute top-2 left-2 flex gap-2" };
const _hoisted_2$7 = { class: "absolute top-2 right-2 flex gap-2" };
const _hoisted_3$7 = { class: "absolute bottom-2 left-2 flex gap-2" };
const _hoisted_4$6 = { class: "absolute bottom-2 right-2 flex gap-2" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CardTop",
  props: {
    ratio: { default: "square" }
  },
  setup(__props) {
    const topStyle = computed(() => {
      const baseClasses = "relative p-0";
      const ratioClasses = {
        square: "aspect-[1/1]",
        landscape: "aspect-[48/27]"
      };
      return `${baseClasses} ${ratioClasses[__props.ratio]}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(topStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default", { class: "absolute top-0 left-0 w-full h-full" }),
        createElementVNode("div", _hoisted_1$h, [
          renderSlot(_ctx.$slots, "top-left")
        ]),
        createElementVNode("div", _hoisted_2$7, [
          renderSlot(_ctx.$slots, "top-right")
        ]),
        createElementVNode("div", _hoisted_3$7, [
          renderSlot(_ctx.$slots, "bottom-left")
        ]),
        createElementVNode("div", _hoisted_4$6, [
          renderSlot(_ctx.$slots, "bottom-right")
        ])
      ], 2);
    };
  }
});
const _hoisted_1$g = { class: "inline-flex justify-center items-center gap-1 flex-shrink-0 py-1 px-2 text-xs bg-[#D9D9D966]/40 rounded font-bold text-white/90" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SquareChip",
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        renderSlot(_ctx.$slots, "icon", { class: "text-xs text-white/90" }),
        createElementVNode("span", null, toDisplayString(_ctx.label), 1)
      ]);
    };
  }
});
const _hoisted_1$f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
__name(render$5, "render$5");
const __unplugin_components_1$1 = markRaw({ name: "lucide-check", render: render$5 });
const _hoisted_1$e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      createElementVNode("path", { d: "m21 21l-4.3-4.3" })
    ], -1)
  ]));
}
__name(render$4, "render$4");
const __unplugin_components_0$1 = markRaw({ name: "lucide-search", render: render$4 });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  props: /* @__PURE__ */ mergeModels({
    placeHolder: {},
    hasBorder: { type: Boolean, default: false }
  }, {
    "": {},
    "Modifiers": {}
  }),
  emits: ["update:"],
  setup(__props) {
    const searchQuery = useModel(__props, "");
    const wrapperStyle = computed(() => {
      return __props.hasBorder ? "flex w-full items-center rounded gap-2 bg-white dark-theme:bg-zinc-800 p-1 border border-solid border-zinc-200 dark-theme:border-zinc-700" : "flex w-full items-center rounded px-2 py-1.5 gap-2 bg-white dark-theme:bg-zinc-800";
    });
    const iconColorStyle = computed(() => {
      return !__props.hasBorder ? "text-neutral" : "text-zinc-300 dark-theme:text-zinc-700";
    });
    return (_ctx, _cache) => {
      const _component_i_lucide58search = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(wrapperStyle.value)
      }, [
        createVNode(_component_i_lucide58search, {
          class: normalizeClass(iconColorStyle.value)
        }, null, 8, ["class"]),
        createVNode(unref(InputText), {
          modelValue: searchQuery.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
          placeholder: _ctx.placeHolder || "Search...",
          type: "text",
          unstyled: "",
          class: "w-full p-0 border-none outline-none bg-transparent text-xs text-neutral dark-theme:text-white"
        }, null, 8, ["modelValue", "placeholder"])
      ], 2);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TextButton",
  props: {
    label: {},
    onClick: { type: Function },
    size: { default: "md" },
    type: { default: "primary" },
    class: {}
  },
  setup(__props) {
    const buttonStyle = computed(() => {
      const baseClasses = getBaseButtonClasses();
      const sizeClasses = getButtonSizeClasses(__props.size);
      const typeClasses = getButtonTypeClasses(__props.type);
      return [baseClasses, sizeClasses, typeClasses, __props.class].filter(Boolean).join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), {
        unstyled: "",
        class: normalizeClass(buttonStyle.value),
        role: "button",
        onClick: _ctx.onClick
      }, {
        default: withCtx(() => [
          createElementVNode("span", null, toDisplayString(_ctx.label), 1)
        ]),
        _: 1
      }, 8, ["class", "onClick"]);
    };
  }
});
const _hoisted_1$d = { class: "relative inline-block" };
const _hoisted_2$6 = { class: "p-2 flex flex-col gap-y-4 pb-0" };
const _hoisted_3$6 = { class: "flex items-center justify-between" };
const _hoisted_4$5 = {
  key: 0,
  class: "text-sm text-neutral-400 dark-theme:text-zinc-500 px-1"
};
const _hoisted_5$2 = { class: "text-sm text-zinc-700 dark-theme:text-gray-200" };
const _hoisted_6$2 = { class: "flex items-center gap-2" };
const _hoisted_7$1 = {
  key: 0,
  class: "pointer-events-none absolute -right-2 -top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 dark-theme:bg-blue-500 text-xs font-semibold text-white"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MultiSelect",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    options: {},
    hasSearchBox: { type: Boolean, default: false },
    showSelectedCount: { type: Boolean, default: false },
    hasClearButton: { type: Boolean, default: false },
    searchPlaceholder: { default: "Search..." }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {},
    "searchQuery": {},
    "searchQueryModifiers": {}
  }),
  emits: ["update:modelValue", "update:searchQuery"],
  setup(__props) {
    const selectedItems = useModel(__props, "modelValue");
    const searchQuery = useModel(__props, "searchQuery");
    const selectedCount = computed(() => selectedItems.value.length);
    const pt = computed(() => ({
      root: /* @__PURE__ */ __name(({ props }) => ({
        class: [
          "relative inline-flex cursor-pointer select-none w-full",
          "rounded-lg bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white",
          "transition-all duration-200 ease-in-out",
          "border-[2.5px] border-solid",
          selectedCount.value > 0 ? "border-blue-400 dark-theme:border-blue-500" : "border-transparent",
          { "opacity-60 cursor-default": props.disabled }
        ]
      }), "root"),
      labelContainer: {
        class: "flex-1 flex items-center overflow-hidden whitespace-nowrap pl-4 py-2 "
      },
      label: {
        class: "p-0"
      },
      dropdown: {
        class: "flex shrink-0 cursor-pointer items-center justify-center px-3"
      },
      header: /* @__PURE__ */ __name(() => ({
        class: __props.hasSearchBox || __props.showSelectedCount || __props.hasClearButton ? "block" : "hidden"
      }), "header"),
      // Overlay & list visuals unchanged
      overlay: "mt-2 bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white rounded-lg border border-solid border-zinc-100 dark-theme:border-zinc-700",
      list: {
        class: "flex flex-col gap-1 p-0 list-none border-none text-xs"
      },
      // Option row hover tone identical
      option: "flex gap-1 items-center p-2 hover:bg-neutral-100/50 dark-theme:hover:bg-zinc-700/50",
      // Hide built-in checkboxes entirely via PT (no :deep)
      pcHeaderCheckbox: {
        root: { class: "hidden" },
        style: "display: none !important"
      },
      pcOptionCheckbox: {
        root: { class: "hidden" },
        style: "display: none !important"
      }
    }));
    return (_ctx, _cache) => {
      const _component_i_lucide58chevron_down = __unplugin_components_0$c;
      const _component_i_lucide58check = __unplugin_components_1$1;
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(unref(MultiSelect), {
          modelValue: selectedItems.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedItems.value = $event),
          options: _ctx.options,
          "option-label": "name",
          unstyled: "",
          placeholder: _ctx.label,
          "max-selected-labels": 0,
          pt: pt.value
        }, createSlots({
          value: withCtx(() => [
            createElementVNode("span", _hoisted_5$2, toDisplayString(_ctx.label), 1)
          ]),
          dropdownicon: withCtx(() => [
            createVNode(_component_i_lucide58chevron_down, { class: "text-lg text-neutral-400" })
          ]),
          option: withCtx((slotProps) => [
            createElementVNode("div", _hoisted_6$2, [
              createElementVNode("div", {
                class: normalizeClass([
                  "flex h-4 w-4 p-0.5 flex-shrink-0 items-center justify-center rounded border-[3px] transition-all duration-200",
                  slotProps.selected ? "border-blue-400 bg-blue-400 dark-theme:border-blue-500 dark-theme:bg-blue-500" : "border-neutral-300 dark-theme:border-zinc-600 bg-neutral-100 dark-theme:bg-zinc-700"
                ])
              }, [
                slotProps.selected ? (openBlock(), createBlock(_component_i_lucide58check, {
                  key: 0,
                  class: "text-xs text-bold text-white"
                })) : createCommentVNode("", true)
              ], 2),
              createElementVNode("span", null, toDisplayString(slotProps.option.name), 1)
            ])
          ]),
          _: 2
        }, [
          _ctx.hasSearchBox || _ctx.showSelectedCount || _ctx.hasClearButton ? {
            name: "header",
            fn: withCtx(() => [
              createElementVNode("div", _hoisted_2$6, [
                _ctx.hasSearchBox ? (openBlock(), createBlock(_sfc_main$b, {
                  key: 0,
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                  "has-border": true,
                  "place-holder": _ctx.searchPlaceholder
                }, null, 8, ["modelValue", "place-holder"])) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_3$6, [
                  _ctx.showSelectedCount ? (openBlock(), createElementBlock("span", _hoisted_4$5, toDisplayString(selectedCount.value > 0 ? _ctx.$t("g.itemsSelected", { selectedCount: selectedCount.value }) : _ctx.$t("g.itemSelected", { selectedCount: selectedCount.value })), 1)) : createCommentVNode("", true),
                  _ctx.hasClearButton ? (openBlock(), createBlock(_sfc_main$a, {
                    key: 1,
                    label: _ctx.$t("g.clearAll"),
                    type: "transparent",
                    size: "fit-content",
                    class: "text-sm !text-blue-500 !dark-theme:text-blue-600",
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => selectedItems.value = [], ["stop"]))
                  }, null, 8, ["label"])) : createCommentVNode("", true)
                ]),
                _cache[3] || (_cache[3] = createElementVNode("div", { class: "h-px bg-zinc-200 dark-theme:bg-zinc-700" }, null, -1))
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "options", "placeholder", "pt"]),
        selectedCount.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(selectedCount.value), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$c = { class: "relative inline-flex items-center" };
const _hoisted_2$5 = { class: "flex items-center gap-2 text-sm" };
const _hoisted_3$5 = {
  key: 0,
  class: "text-zinc-700 dark-theme:text-gray-200"
};
const _hoisted_4$4 = {
  key: 1,
  class: "text-zinc-700 dark-theme:text-gray-200"
};
const _hoisted_5$1 = { class: "flex items-center justify-between gap-3 w-full" };
const _hoisted_6$1 = { class: "truncate" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SingleSelect",
  props: /* @__PURE__ */ mergeModels({
    label: {},
    options: {}
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const selectedItem = useModel(__props, "modelValue");
    const getLabel = /* @__PURE__ */ __name((val) => {
      if (val == null) return __props.label ?? "";
      const found = __props.options.find((o) => o.value === val);
      return found ? found.name : __props.label ?? "";
    }, "getLabel");
    const pt = computed(() => ({
      root: /* @__PURE__ */ __name(({
        props
      }) => ({
        class: [
          // container
          "relative inline-flex w-full cursor-pointer select-none items-center",
          // trigger surface
          "rounded-md",
          "bg-transparent text-neutral dark-theme:text-white",
          "border-0",
          // disabled
          { "opacity-60 cursor-default": props.disabled }
        ]
      }), "root"),
      label: {
        class: (
          // Align with MultiSelect labelContainer spacing
          "flex-1 flex items-center overflow-hidden whitespace-nowrap pl-4 py-2 outline-none"
        )
      },
      dropdown: {
        class: (
          // Right chevron touch area
          "flex shrink-0 items-center justify-center px-3 py-2"
        )
      },
      overlay: {
        class: [
          // dropdown panel
          "mt-2 bg-white dark-theme:bg-zinc-800 text-neutral dark-theme:text-white rounded-lg border border-solid border-zinc-100 dark-theme:border-zinc-700"
        ]
      },
      list: {
        class: (
          // Same list tone/size as MultiSelect
          "flex flex-col gap-1 p-0 list-none border-none text-xs"
        )
      },
      option: /* @__PURE__ */ __name(({
        context
      }) => ({
        class: [
          // Row layout
          "flex items-center justify-between gap-3 px-3 py-2",
          "hover:bg-neutral-100/50 dark-theme:hover:bg-zinc-700/50",
          // Selected state + check icon
          { "bg-neutral-100/50 dark-theme:bg-zinc-700/50": context.selected }
        ]
      }), "option"),
      optionLabel: {
        class: "truncate"
      },
      optionGroupLabel: {
        class: "px-3 py-2 text-xs uppercase tracking-wide text-zinc-500 dark-theme:text-zinc-400"
      },
      emptyMessage: {
        class: "px-3 py-2 text-sm text-zinc-500 dark-theme:text-zinc-400"
      }
    }));
    return (_ctx, _cache) => {
      const _component_i_lucide58chevron_down = __unplugin_components_0$c;
      const _component_i_lucide58check = __unplugin_components_1$1;
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(unref(Select), {
          modelValue: selectedItem.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedItem.value = $event),
          options: _ctx.options,
          "option-label": "name",
          "option-value": "value",
          unstyled: "",
          placeholder: _ctx.label,
          pt: pt.value
        }, {
          value: withCtx((slotProps) => [
            createElementVNode("div", _hoisted_2$5, [
              renderSlot(_ctx.$slots, "icon"),
              slotProps.value !== null && slotProps.value !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(getLabel(slotProps.value)), 1)) : (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(_ctx.label), 1))
            ])
          ]),
          dropdownicon: withCtx(() => [
            createVNode(_component_i_lucide58chevron_down, { class: "text-base text-neutral-400 dark-theme:text-gray-300" })
          ]),
          option: withCtx(({ option, selected }) => [
            createElementVNode("div", _hoisted_5$1, [
              createElementVNode("span", _hoisted_6$1, toDisplayString(option.name), 1),
              selected ? (openBlock(), createBlock(_component_i_lucide58check, {
                key: 0,
                class: "text-neutral-900 dark-theme:text-white"
              })) : createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["modelValue", "options", "placeholder", "pt"])
      ]);
    };
  }
});
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      createElementVNode("path", { d: "M15 3v18M8 9l3 3l-3 3" })
    ], -1)
  ]));
}
__name(render$3, "render$3");
const __unplugin_components_3 = markRaw({ name: "lucide-panel-right-close", render: render$3 });
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      createElementVNode("path", { d: "M9 3v18m7-6l-3-3l3-3" })
    ], -1)
  ]));
}
__name(render$2, "render$2");
const __unplugin_components_2 = markRaw({ name: "lucide-panel-left-close", render: render$2 });
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      createElementVNode("path", { d: "M9 3v18" })
    ], -1)
  ]));
}
__name(render$1, "render$1");
const __unplugin_components_1 = markRaw({ name: "lucide-panel-left", render: render$1 });
const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      createElementVNode("path", { d: "M15 3v18" })
    ], -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "lucide-panel-right", render });
const OnCloseKey = Symbol();
const _hoisted_1$7 = { class: "base-widget-layout rounded-2xl overflow-hidden relative bg-zinc-50 dark-theme:bg-zinc-800" };
const _hoisted_2$4 = { class: "flex w-full h-full" };
const _hoisted_3$4 = { class: "flex-1 flex bg-zinc-100 dark-theme:bg-neutral-900" };
const _hoisted_4$3 = { class: "w-full h-full flex flex-col" };
const _hoisted_5 = {
  key: 0,
  class: "w-full h-16 px-6 py-4 flex justify-between gap-2"
};
const _hoisted_6 = { class: "flex-1 flex gap-2 flex-shrink-0" };
const _hoisted_7 = { class: "flex flex-col flex-1 min-h-0" };
const _hoisted_8 = {
  key: 0,
  class: "text-xxl px-6 pt-2 pb-6 m-0"
};
const _hoisted_9 = { class: "min-h-0 px-6 pt-0 pb-10 overflow-y-auto scrollbar-hide" };
const _hoisted_10 = {
  key: 0,
  class: "w-1/4 min-w-40 max-w-80"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BaseWidgetLayout",
  props: {
    contentTitle: {}
  },
  setup(__props) {
    const BREAKPOINTS = { md: 880 };
    const PANEL_SIZES = {
      width: "w-1/3",
      minWidth: "min-w-40",
      maxWidth: "max-w-56"
    };
    const slots = useSlots();
    const closeDialog = inject(OnCloseKey, () => {
    });
    const breakpoints = useBreakpoints(BREAKPOINTS);
    const notMobile = breakpoints.greater("md");
    const isLeftPanelOpen = ref(true);
    const isRightPanelOpen = ref(false);
    const mobileMenuOpen = ref(false);
    const hasRightPanel = computed(() => !!slots.rightPanel);
    watch(notMobile, (isDesktop) => {
      if (!isDesktop) {
        mobileMenuOpen.value = false;
      }
    });
    const showLeftPanel = computed(() => {
      const shouldShow = notMobile.value ? isLeftPanelOpen.value : mobileMenuOpen.value;
      return shouldShow;
    });
    const toggleLeftPanel = /* @__PURE__ */ __name(() => {
      if (notMobile.value) {
        isLeftPanelOpen.value = !isLeftPanelOpen.value;
      } else {
        mobileMenuOpen.value = !mobileMenuOpen.value;
      }
    }, "toggleLeftPanel");
    const toggleRightPanel = /* @__PURE__ */ __name(() => {
      isRightPanelOpen.value = !isRightPanelOpen.value;
    }, "toggleRightPanel");
    return (_ctx, _cache) => {
      const _component_i_lucide58panel_right = __unplugin_components_0;
      const _component_i_lucide58panel_left = __unplugin_components_1;
      const _component_i_lucide58panel_left_close = __unplugin_components_2;
      const _component_i_lucide58panel_right_close = __unplugin_components_3;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        withDirectives(createVNode(_sfc_main$i, {
          class: normalizeClass(["absolute top-4 right-16 z-10 transition-opacity duration-200", {
            "opacity-0 pointer-events-none": isRightPanelOpen.value || !hasRightPanel.value
          }]),
          onClick: toggleRightPanel
        }, {
          default: withCtx(() => [
            createVNode(_component_i_lucide58panel_right, { class: "text-sm" })
          ]),
          _: 1
        }, 8, ["class"]), [
          [vShow, !isRightPanelOpen.value && hasRightPanel.value]
        ]),
        createVNode(_sfc_main$i, {
          class: "absolute top-4 right-6 z-10 transition-opacity duration-200",
          onClick: unref(closeDialog)
        }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode("i", { class: "pi pi-times text-sm" }, null, -1)
          ])),
          _: 1
        }, 8, ["onClick"]),
        createElementVNode("div", _hoisted_2$4, [
          createVNode(Transition, { name: "slide-panel" }, {
            default: withCtx(() => [
              _ctx.$slots.leftPanel && showLeftPanel.value ? (openBlock(), createElementBlock("nav", {
                key: 0,
                class: normalizeClass([
                  PANEL_SIZES.width,
                  PANEL_SIZES.minWidth,
                  PANEL_SIZES.maxWidth
                ])
              }, [
                renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          createElementVNode("div", _hoisted_3$4, [
            createElementVNode("div", _hoisted_4$3, [
              _ctx.$slots.header ? (openBlock(), createElementBlock("header", _hoisted_5, [
                createElementVNode("div", _hoisted_6, [
                  !unref(notMobile) ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 0,
                    onClick: toggleLeftPanel
                  }, {
                    default: withCtx(() => [
                      !showLeftPanel.value ? (openBlock(), createBlock(_component_i_lucide58panel_left, {
                        key: 0,
                        class: "text-sm"
                      })) : (openBlock(), createBlock(_component_i_lucide58panel_left_close, {
                        key: 1,
                        class: "text-sm"
                      }))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "header", {}, void 0, true)
                ]),
                renderSlot(_ctx.$slots, "header-right-area", {}, void 0, true),
                createElementVNode("div", {
                  class: normalizeClass([
                    "flex justify-end gap-2 w-0",
                    hasRightPanel.value && !isRightPanelOpen.value ? "min-w-18" : "min-w-8"
                  ])
                }, [
                  isRightPanelOpen.value && hasRightPanel.value ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 0,
                    onClick: toggleRightPanel
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_i_lucide58panel_right_close, { class: "text-sm" })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2)
              ])) : createCommentVNode("", true),
              createElementVNode("main", _hoisted_7, [
                renderSlot(_ctx.$slots, "contentFilter", {}, void 0, true),
                !_ctx.$slots.leftPanel ? (openBlock(), createElementBlock("h2", _hoisted_8, toDisplayString(_ctx.contentTitle), 1)) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_9, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ])
              ])
            ]),
            hasRightPanel.value && isRightPanelOpen.value ? (openBlock(), createElementBlock("aside", _hoisted_10, [
              renderSlot(_ctx.$slots, "rightPanel", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const BaseWidgetLayout = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-bb3ca715"]]);
const _hoisted_1$6 = { class: "flex items-center" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavItem",
  props: {
    hasFolderIcon: { type: Boolean, default: true },
    active: { type: Boolean },
    onClick: { type: Function }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_lucide58folder = __unplugin_components_6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "flex items-center gap-2 px-4 py-2 text-xs rounded-md transition-colors cursor-pointer",
          _ctx.active ? "bg-neutral-100 dark-theme:bg-zinc-700 text-neutral" : "text-neutral hover:bg-zinc-100 hover:dark-theme:bg-zinc-700/50"
        ]),
        role: "button",
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        _ctx.hasFolderIcon ? (openBlock(), createBlock(_component_i_lucide58folder, {
          key: 0,
          class: "text-xs text-neutral"
        })) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_1$6, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
const _hoisted_1$5 = { class: "m-0 px-3 py-0 pt-5 text-xxs font-bold uppercase text-neutral-400 dark-theme:text-neutral-400" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavTitle",
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h3", _hoisted_1$5, toDisplayString(_ctx.title), 1);
    };
  }
});
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "flex items-center justify-between h-16 px-6" };
const _hoisted_2$3 = { class: "flex items-center gap-2 pl-1" };
const _hoisted_3$3 = { class: "font-bold text-base text-neutral" };
function _sfc_render$1(_ctx, _cache) {
  const _component_i_lucide58puzzle = __unplugin_components_0$3;
  return openBlock(), createElementBlock("header", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createVNode(_component_i_lucide58puzzle, { class: "text-neutral text-base" })
      ]),
      createElementVNode("h2", _hoisted_3$3, [
        renderSlot(_ctx.$slots, "default")
      ])
    ])
  ]);
}
__name(_sfc_render$1, "_sfc_render$1");
const PanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1]]);
const _hoisted_1$3 = { class: "flex flex-col h-full w-full bg-white dark-theme:bg-zinc-800" };
const _hoisted_2$2 = { class: "flex-1 px-3 py-4 flex flex-col gap-1" };
const _hoisted_3$2 = {
  key: 0,
  class: "flex flex-col gap-2"
};
const _hoisted_4$2 = {
  key: 1,
  class: "flex flex-col gap-2"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LeftSidePanel",
  props: {
    navItems: { default: /* @__PURE__ */ __name(() => [], "default") },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const getFirstItemId = /* @__PURE__ */ __name(() => {
      if (!__props.navItems || __props.navItems.length === 0) {
        return null;
      }
      const firstEntry = __props.navItems[0];
      if ("items" in firstEntry && firstEntry.items.length > 0) {
        return firstEntry.items[0].id;
      }
      if ("id" in firstEntry) {
        return firstEntry.id;
      }
      return null;
    }, "getFirstItemId");
    const activeItem = computed({
      get: /* @__PURE__ */ __name(() => __props.modelValue ?? getFirstItemId(), "get"),
      set: /* @__PURE__ */ __name((value) => emit("update:modelValue", value), "set")
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(PanelHeader, null, {
          icon: withCtx(() => [
            renderSlot(_ctx.$slots, "header-icon")
          ]),
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "header-title")
          ]),
          _: 3
        }),
        createElementVNode("nav", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.navItems, (item, index2) => {
            return openBlock(), createElementBlock(Fragment, { key: index2 }, [
              "items" in item ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                createVNode(_sfc_main$5, {
                  title: item.title
                }, null, 8, ["title"]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.items, (subItem) => {
                  return openBlock(), createBlock(_sfc_main$6, {
                    key: subItem.id,
                    active: activeItem.value === subItem.id,
                    onClick: /* @__PURE__ */ __name(($event) => activeItem.value = subItem.id, "onClick")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(subItem.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["active", "onClick"]);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
                createVNode(_sfc_main$6, {
                  active: activeItem.value === item.id,
                  onClick: /* @__PURE__ */ __name(($event) => activeItem.value = item.id, "onClick")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["active", "onClick"])
              ]))
            ], 64);
          }), 128))
        ])
      ]);
    };
  }
});
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "w-full h-full pl-4 pr-6 pb-8 bg-white dark-theme:bg-zinc-800" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
__name(_sfc_render, "_sfc_render");
const RightSidePanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = { class: "text-neutral text-base" };
const _hoisted_2$1 = { class: "flex gap-2" };
const _hoisted_3$1 = { class: "relative px-6 pt-2 pb-4 flex gap-2" };
const _hoisted_4$1 = { class: "flex flex-wrap gap-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModelSelector",
  props: {
    onClose: { type: Function }
  },
  setup(__props) {
    const frameworkOptions = ref([
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Angular", value: "angular" },
      { name: "Svelte", value: "svelte" }
    ]);
    const projectOptions = ref([
      { name: "Project A", value: "proj-a" },
      { name: "Project B", value: "proj-b" },
      { name: "Project C", value: "proj-c" }
    ]);
    const sortOptions = ref([
      { name: "Popular", value: "popular" },
      { name: "Latest", value: "latest" },
      { name: "A → Z", value: "az" }
    ]);
    const tempNavigation = ref([
      { id: "installed", label: "Installed" },
      {
        title: "TAGS",
        items: [
          { id: "tag-sd15", label: "SD 1.5" },
          { id: "tag-sdxl", label: "SDXL" },
          { id: "tag-utility", label: "Utility" }
        ]
      },
      {
        title: "CATEGORIES",
        items: [
          { id: "cat-models", label: "Models" },
          { id: "cat-nodes", label: "Nodes" }
        ]
      }
    ]);
    const { t: t2 } = useI18n();
    provide(OnCloseKey, __props.onClose);
    const searchQuery = ref("");
    const selectedFrameworks = ref([]);
    const selectedProjects = ref([]);
    const selectedSort = ref("popular");
    const selectedNavItem = ref("installed");
    return (_ctx, _cache) => {
      const _component_i_lucide58puzzle = __unplugin_components_0$3;
      const _component_i_lucide58upload = __unplugin_components_1$2;
      const _component_i_lucide58download = __unplugin_components_2$1;
      const _component_i_lucide58scroll = __unplugin_components_3$1;
      const _component_i_lucide58filter = __unplugin_components_4;
      const _component_i_lucide58info = __unplugin_components_5;
      const _component_i_lucide58folder = __unplugin_components_6;
      return openBlock(), createBlock(BaseWidgetLayout, {
        "content-title": _ctx.$t("Checkpoints")
      }, {
        leftPanel: withCtx(() => [
          createVNode(_sfc_main$3, {
            modelValue: selectedNavItem.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedNavItem.value = $event),
            "nav-items": tempNavigation.value
          }, {
            "header-icon": withCtx(() => [
              createVNode(_component_i_lucide58puzzle, { class: "text-neutral" })
            ]),
            "header-title": withCtx(() => [
              createElementVNode("span", _hoisted_1$1, toDisplayString(unref(t2)("g.title")), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "nav-items"])
        ]),
        header: withCtx(() => [
          createVNode(_sfc_main$b, {
            modelValue: searchQuery.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
            class: "max-w-[384px]"
          }, null, 8, ["modelValue"])
        ]),
        "header-right-area": withCtx(() => [
          createElementVNode("div", _hoisted_2$1, [
            createVNode(_sfc_main$h, {
              type: "primary",
              label: "Upload Model",
              onClick: /* @__PURE__ */ __name(() => {
              }, "onClick")
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58upload)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$g, null, {
              default: withCtx(({ close }) => [
                createVNode(_sfc_main$h, {
                  type: "secondary",
                  label: "Settings",
                  onClick: /* @__PURE__ */ __name(() => {
                    close();
                  }, "onClick")
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_i_lucide58download)
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_sfc_main$h, {
                  type: "primary",
                  label: "Profile",
                  onClick: /* @__PURE__ */ __name(() => {
                    close();
                  }, "onClick")
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_i_lucide58scroll)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 1
            })
          ])
        ]),
        contentFilter: withCtx(() => [
          createElementVNode("div", _hoisted_3$1, [
            createVNode(_sfc_main$9, {
              modelValue: selectedFrameworks.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedFrameworks.value = $event),
              class: "w-[250px]",
              "has-search-box": true,
              "show-selected-count": true,
              "has-clear-button": true,
              label: "Select Frameworks",
              options: frameworkOptions.value
            }, null, 8, ["modelValue", "options"]),
            createVNode(_sfc_main$9, {
              modelValue: selectedProjects.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedProjects.value = $event),
              label: "Select Projects",
              options: projectOptions.value
            }, null, 8, ["modelValue", "options"]),
            createVNode(_sfc_main$8, {
              modelValue: selectedSort.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedSort.value = $event),
              label: "Sorting Type",
              options: sortOptions.value,
              class: "w-[135px]"
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58filter)
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ])
        ]),
        content: withCtx(() => [
          createElementVNode("div", _hoisted_4$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(100, (i) => {
              return createVNode(_sfc_main$e, {
                key: i,
                ratio: "square",
                "max-width": 480,
                "min-width": 230
              }, {
                top: withCtx(() => [
                  createVNode(_sfc_main$d, { ratio: "landscape" }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createElementVNode("div", { class: "w-full h-full bg-blue-500" }, null, -1)
                    ])),
                    "top-right": withCtx(() => [
                      createVNode(_sfc_main$i, {
                        class: "!bg-white !text-neutral-900",
                        onClick: /* @__PURE__ */ __name(() => {
                        }, "onClick")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_i_lucide58info)
                        ]),
                        _: 1
                      })
                    ]),
                    "bottom-right": withCtx(() => [
                      createVNode(_sfc_main$c, { label: "png" }),
                      createVNode(_sfc_main$c, { label: "1.2 MB" }),
                      createVNode(_sfc_main$c, { label: "LoRA" }, {
                        icon: withCtx(() => [
                          createVNode(_component_i_lucide58folder)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                bottom: withCtx(() => [
                  createVNode(CardBottom)
                ]),
                _: 2
              }, 1024);
            }), 64))
          ])
        ]),
        rightPanel: withCtx(() => [
          createVNode(RightSidePanel)
        ]),
        _: 1
      }, 8, ["content-title"]);
    };
  }
});
const DIALOG_KEY = "global-model-selector";
const useModelSelectorDialog = /* @__PURE__ */ __name(() => {
  const dialogService = useDialogService();
  const dialogStore = useDialogStore();
  function hide() {
    dialogStore.closeDialog({ key: DIALOG_KEY });
  }
  __name(hide, "hide");
  function show() {
    dialogService.showLayoutDialog({
      key: DIALOG_KEY,
      component: _sfc_main$1,
      props: {
        onClose: hide
      }
    });
  }
  __name(show, "show");
  return {
    show,
    hide
  };
}, "useModelSelectorDialog");
const isOutputNode = /* @__PURE__ */ __name((node) => node.constructor.nodeData?.output_node, "isOutputNode");
const filterOutputNodes = /* @__PURE__ */ __name((nodes) => nodes.filter(isOutputNode), "filterOutputNodes");
const moveSelectedNodesVersionAdded = "1.22.2";
function useCoreCommands() {
  const workflowService = useWorkflowService();
  const workflowStore = useWorkflowStore();
  const dialogService = useDialogService();
  const colorPaletteStore = useColorPaletteStore();
  const firebaseAuthActions = useFirebaseAuthActions();
  const toastStore = useToastStore();
  const canvasStore = useCanvasStore();
  const executionStore = useExecutionStore();
  const bottomPanelStore = useBottomPanelStore();
  const { getSelectedNodes, toggleSelectedNodesMode } = useSelectedLiteGraphItems();
  const getTracker = /* @__PURE__ */ __name(() => workflowStore.activeWorkflow?.changeTracker, "getTracker");
  const moveSelectedNodes = /* @__PURE__ */ __name((positionUpdater) => {
    const selectedNodes = getSelectedNodes();
    if (selectedNodes.length === 0) return;
    const gridSize = useSettingStore().get("Comfy.SnapToGrid.GridSize");
    selectedNodes.forEach((node) => {
      node.pos = positionUpdater(node.pos, gridSize);
    });
    app.canvas.state.selectionChanged = true;
    app.canvas.setDirty(true, true);
  }, "moveSelectedNodes");
  const commands = [
    {
      id: "Comfy.NewBlankWorkflow",
      icon: "pi pi-plus",
      label: "New Blank Workflow",
      menubarLabel: "New",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => workflowService.loadBlankWorkflow(), "function")
    },
    {
      id: "Comfy.OpenWorkflow",
      icon: "pi pi-folder-open",
      label: "Open Workflow",
      menubarLabel: "Open",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        app.ui.loadFile();
      }, "function")
    },
    {
      id: "Comfy.LoadDefaultWorkflow",
      icon: "pi pi-code",
      label: "Load Default Workflow",
      function: /* @__PURE__ */ __name(() => workflowService.loadDefaultWorkflow(), "function")
    },
    {
      id: "Comfy.SaveWorkflow",
      icon: "pi pi-save",
      label: "Save Workflow",
      menubarLabel: "Save",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflow(workflow);
      }, "function")
    },
    {
      id: "Comfy.SaveWorkflowAs",
      icon: "pi pi-save",
      label: "Save Workflow As",
      menubarLabel: "Save As",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflowAs(workflow);
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflow",
      icon: "pi pi-download",
      label: "Export Workflow",
      menubarLabel: "Export",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow", "workflow");
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflowAPI",
      icon: "pi pi-download",
      label: "Export Workflow (API Format)",
      menubarLabel: "Export (API)",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow_api", "output");
      }, "function")
    },
    {
      id: "Comfy.Undo",
      icon: "pi pi-undo",
      label: "Undo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.undo?.();
      }, "function")
    },
    {
      id: "Comfy.Redo",
      icon: "pi pi-refresh",
      label: "Redo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.redo?.();
      }, "function")
    },
    {
      id: "Comfy.ClearWorkflow",
      icon: "pi pi-trash",
      label: "Clear Workflow",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const settingStore = useSettingStore();
        if (!settingStore.get("Comfy.ConfirmClear") || confirm("Clear workflow?")) {
          app.clean();
          if (app.canvas.subgraph) {
            const subgraph = app.canvas.subgraph;
            const nonIoNodes = getAllNonIoNodesInSubgraph(subgraph);
            nonIoNodes.forEach((node) => subgraph.remove(node));
          } else {
            app.graph.clear();
          }
          api.dispatchCustomEvent("graphCleared");
        }
      }, "function")
    },
    {
      id: "Comfy.Canvas.ResetView",
      icon: "pi pi-expand",
      label: "Reset View",
      function: /* @__PURE__ */ __name(() => {
        useLitegraphService().resetView();
      }, "function")
    },
    {
      id: "Comfy.OpenClipspace",
      icon: "pi pi-clipboard",
      label: "Clipspace",
      function: /* @__PURE__ */ __name(() => {
        app.openClipspace();
      }, "function")
    },
    {
      id: "Comfy.RefreshNodeDefinitions",
      icon: "pi pi-refresh",
      label: "Refresh Node Definitions",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await app.refreshComboInNodes();
      }, "function")
    },
    {
      id: "Comfy.Interrupt",
      icon: "pi pi-stop",
      label: "Interrupt",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await api.interrupt(executionStore.activePromptId);
        toastStore.add({
          severity: "info",
          summary: t$2("g.interrupted"),
          detail: t$2("toastMessages.interrupted"),
          life: 1e3
        });
      }, "function")
    },
    {
      id: "Comfy.ClearPendingTasks",
      icon: "pi pi-stop",
      label: "Clear Pending Tasks",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await useQueueStore().clear(["queue"]);
        toastStore.add({
          severity: "info",
          summary: t$2("g.confirmed"),
          detail: t$2("toastMessages.pendingTasksDeleted"),
          life: 3e3
        });
      }, "function")
    },
    {
      id: "Comfy.BrowseTemplates",
      icon: "pi pi-folder-open",
      label: "Browse Templates",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showTemplateWorkflowsDialog();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomIn",
      icon: "pi pi-plus",
      label: "Zoom In",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale * 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomOut",
      icon: "pi pi-minus",
      label: "Zoom Out",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale / 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.FitView",
      icon: "pi pi-expand",
      label: "Fit view to selected nodes",
      menubarLabel: "Zoom to fit",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        if (app.canvas.empty) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.emptyCanvas"),
            life: 3e3
          });
          return;
        }
        app.canvas.fitViewToSelectionAnimated();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLock",
      icon: "pi pi-lock",
      label: "Canvas Toggle Lock",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = !app.canvas.state.readOnly;
      }, "function")
    },
    {
      id: "Comfy.Canvas.Lock",
      icon: "pi pi-lock",
      label: "Lock Canvas",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = true;
      }, "function")
    },
    {
      id: "Comfy.Canvas.Unlock",
      icon: "pi pi-lock-open",
      label: "Unlock Canvas",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.state.readOnly = false;
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLinkVisibility",
      icon: "pi pi-eye",
      label: "Canvas Toggle Link Visibility",
      menubarLabel: "Node Links",
      versionAdded: "1.3.6",
      function: (() => {
        const settingStore = useSettingStore();
        let lastLinksRenderMode = LiteGraph.SPLINE_LINK;
        return async () => {
          const currentMode = settingStore.get("Comfy.LinkRenderMode");
          if (currentMode === LiteGraph.HIDDEN_LINK) {
            await settingStore.set("Comfy.LinkRenderMode", lastLinksRenderMode);
          } else {
            lastLinksRenderMode = currentMode;
            await settingStore.set(
              "Comfy.LinkRenderMode",
              LiteGraph.HIDDEN_LINK
            );
          }
        };
      })(),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.LinkRenderMode") !== LiteGraph.HIDDEN_LINK, "active")
    },
    {
      id: "Comfy.Canvas.ToggleMinimap",
      icon: "pi pi-map",
      label: "Canvas Toggle Minimap",
      menubarLabel: "Minimap",
      versionAdded: "1.24.1",
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        await settingStore.set(
          "Comfy.Minimap.Visible",
          !settingStore.get("Comfy.Minimap.Visible")
        );
      }, "function"),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.Minimap.Visible"), "active")
    },
    {
      id: "Comfy.QueuePrompt",
      icon: "pi pi-play",
      label: "Queue Prompt",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(0, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueuePromptFront",
      icon: "pi pi-play",
      label: "Queue Prompt (Front)",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(-1, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueueSelectedOutputNodes",
      icon: "pi pi-play",
      label: "Queue Selected Output Nodes",
      versionAdded: "1.19.6",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        const selectedNodes = getSelectedNodes();
        const selectedOutputNodes = filterOutputNodes(selectedNodes);
        if (selectedOutputNodes.length === 0) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.nothingToQueue"),
            detail: t$2("toastMessages.pleaseSelectOutputNodes"),
            life: 3e3
          });
          return;
        }
        const executionIds = getExecutionIdsForSelectedNodes(selectedOutputNodes);
        await app.queuePrompt(0, batchCount, executionIds);
      }, "function")
    },
    {
      id: "Comfy.ShowSettingsDialog",
      icon: "pi pi-cog",
      label: "Show Settings Dialog",
      versionAdded: "1.3.7",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog();
      }, "function")
    },
    {
      id: "Comfy.Graph.GroupSelectedNodes",
      icon: "pi pi-sitemap",
      label: "Group Selected Nodes",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const { canvas } = app;
        if (!canvas.selectedItems?.size) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.nothingToGroup"),
            detail: t$2("toastMessages.pleaseSelectNodesToGroup"),
            life: 3e3
          });
          return;
        }
        const group = new LGraphGroup();
        const padding = useSettingStore().get(
          "Comfy.GroupSelectedNodes.Padding"
        );
        group.resizeTo(canvas.selectedItems, padding);
        canvas.graph?.add(group);
        useTitleEditorStore().titleEditorTarget = group;
      }, "function")
    },
    {
      id: "Workspace.NextOpenedWorkflow",
      icon: "pi pi-step-forward",
      label: "Next Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadNextOpenedWorkflow();
      }, "function")
    },
    {
      id: "Workspace.PreviousOpenedWorkflow",
      icon: "pi pi-step-backward",
      label: "Previous Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadPreviousOpenedWorkflow();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Mute",
      icon: "pi pi-volume-off",
      label: "Mute/Unmute Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.NEVER);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
      icon: "pi pi-shield",
      label: "Bypass/Unbypass Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.BYPASS);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.pin(!node.pinned);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelected.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Items",
      versionAdded: "1.3.33",
      function: /* @__PURE__ */ __name(() => {
        for (const item of app.canvas.selectedItems) {
          if (item instanceof LGraphNode || item instanceof LGraphGroup) {
            item.pin(!item.pinned);
          }
        }
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.Resize",
      icon: "pi pi-minus",
      label: "Resize Selected Nodes",
      versionAdded: "",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          const optimalSize = node.computeSize();
          node.setSize([optimalSize[0], optimalSize[1]]);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
      icon: "pi pi-minus",
      label: "Collapse/Expand Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.collapse();
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.ToggleTheme",
      icon: "pi pi-moon",
      label: "Toggle Theme (Dark/Light)",
      versionAdded: "1.3.12",
      function: (() => {
        let previousDarkTheme = DEFAULT_DARK_COLOR_PALETTE.id;
        let previousLightTheme = DEFAULT_LIGHT_COLOR_PALETTE.id;
        return async () => {
          const settingStore = useSettingStore();
          const theme = colorPaletteStore.completedActivePalette;
          if (theme.light_theme) {
            previousLightTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousDarkTheme);
          } else {
            previousDarkTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousLightTheme);
          }
        };
      })()
    },
    {
      id: "Workspace.ToggleBottomPanel",
      icon: "pi pi-list",
      label: "Toggle Bottom Panel",
      menubarLabel: "Bottom Panel",
      versionAdded: "1.3.22",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.toggleBottomPanel();
      }, "function"),
      active: /* @__PURE__ */ __name(() => bottomPanelStore.bottomPanelVisible, "active")
    },
    {
      id: "Workspace.ToggleFocusMode",
      icon: "pi pi-eye",
      label: "Toggle Focus Mode",
      menubarLabel: "Focus Mode",
      versionAdded: "1.3.27",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        useWorkspaceStore().toggleFocusMode();
      }, "function"),
      active: /* @__PURE__ */ __name(() => useWorkspaceStore().focusMode, "active")
    },
    {
      id: "Comfy.Graph.FitGroupToContents",
      icon: "pi pi-expand",
      label: "Fit Group To Contents",
      versionAdded: "1.4.9",
      function: /* @__PURE__ */ __name(() => {
        for (const group of app.canvas.selectedItems) {
          if (group instanceof LGraphGroup) {
            group.recomputeInsideNodes();
            const padding = useSettingStore().get(
              "Comfy.GroupSelectedNodes.Padding"
            );
            group.resizeTo(group.children, padding);
            app.graph.change();
          }
        }
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIIssues",
      icon: "pi pi-github",
      label: "Open ComfyUI Issues",
      menubarLabel: "ComfyUI Issues",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open(
          "https://github.com/comfyanonymous/ComfyUI/issues",
          "_blank"
        );
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIDocs",
      icon: "pi pi-info-circle",
      label: "Open ComfyUI Docs",
      menubarLabel: "ComfyUI Docs",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://docs.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyOrgDiscord",
      icon: "pi pi-discord",
      label: "Open Comfy-Org Discord",
      menubarLabel: "Comfy-Org Discord",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://www.comfy.org/discord", "_blank");
      }, "function")
    },
    {
      id: "Workspace.SearchBox.Toggle",
      icon: "pi pi-search",
      label: "Toggle Search Box",
      versionAdded: "1.5.7",
      function: /* @__PURE__ */ __name(() => {
        useSearchBoxStore().toggleVisible();
      }, "function")
    },
    {
      id: "Comfy.Help.AboutComfyUI",
      icon: "pi pi-info-circle",
      label: "Open About ComfyUI",
      menubarLabel: "About ComfyUI",
      versionAdded: "1.6.4",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog("about");
      }, "function")
    },
    {
      id: "Comfy.Help.Donate",
      icon: "pi pi-heart",
      label: "Support Us",
      menubarLabel: "Donate",
      versionAdded: "1.0.0",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog("donate");
      }, "function")
    },
    {
      id: "Comfy.DuplicateWorkflow",
      icon: "pi pi-clone",
      label: "Duplicate Current Workflow",
      versionAdded: "1.6.15",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Workspace.CloseWorkflow",
      icon: "pi pi-times",
      label: "Close Current Workflow",
      versionAdded: "1.7.3",
      function: /* @__PURE__ */ __name(async () => {
        if (workflowStore.activeWorkflow)
          await workflowService.closeWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Comfy.Feedback",
      icon: "pi pi-megaphone",
      label: "Give Feedback",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t$2("g.feedback"),
          subtitle: t$2("issueReport.feedbackTitle"),
          panelProps: {
            errorType: "Feedback",
            defaultFields: ["SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.ContactSupport",
      icon: "pi pi-question",
      label: "Contact Support",
      versionAdded: "1.17.8",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t$2("issueReport.contactSupportTitle"),
          subtitle: t$2("issueReport.contactSupportDescription"),
          panelProps: {
            errorType: "ContactSupport",
            defaultFields: ["Workflow", "Logs", "SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIForum",
      icon: "pi pi-comments",
      label: "Open ComfyUI Forum",
      menubarLabel: "ComfyUI Forum",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://forum.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Canvas.DeleteSelectedItems",
      icon: "pi pi-trash",
      label: "Delete Selected Items",
      versionAdded: "1.10.5",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.deleteSelected();
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Manager.CustomNodesManager",
      icon: "pi pi-puzzle",
      label: "Toggle the Custom Nodes Manager",
      versionAdded: "1.12.10",
      function: /* @__PURE__ */ __name(() => {
        dialogService.toggleManagerDialog();
      }, "function")
    },
    {
      id: "Comfy.Manager.ToggleManagerProgressDialog",
      icon: "pi pi-spinner",
      label: "Toggle the Custom Nodes Manager Progress Bar",
      versionAdded: "1.13.9",
      function: /* @__PURE__ */ __name(() => {
        dialogService.toggleManagerProgressDialog();
      }, "function")
    },
    {
      id: "Comfy.User.OpenSignInDialog",
      icon: "pi pi-user",
      label: "Open Sign In Dialog",
      versionAdded: "1.17.6",
      function: /* @__PURE__ */ __name(async () => {
        await dialogService.showSignInDialog();
      }, "function")
    },
    {
      id: "Comfy.User.SignOut",
      icon: "pi pi-sign-out",
      label: "Sign Out",
      versionAdded: "1.18.1",
      function: /* @__PURE__ */ __name(async () => {
        await firebaseAuthActions.logout();
      }, "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Up",
      icon: "pi pi-arrow-up",
      label: "Move Selected Nodes Up",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y - gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Down",
      icon: "pi pi-arrow-down",
      label: "Move Selected Nodes Down",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y + gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Left",
      icon: "pi pi-arrow-left",
      label: "Move Selected Nodes Left",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x - gridSize, y]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Right",
      icon: "pi pi-arrow-right",
      label: "Move Selected Nodes Right",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x + gridSize, y]), "function")
    },
    {
      id: "Comfy.Graph.ConvertToSubgraph",
      icon: "pi pi-sitemap",
      label: "Convert Selection to Subgraph",
      versionAdded: "1.20.1",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const canvas = canvasStore.getCanvas();
        const graph = canvas.subgraph ?? canvas.graph;
        if (!graph) throw new TypeError("Canvas has no graph or subgraph set.");
        const res = graph.convertToSubgraph(canvas.selectedItems);
        if (!res) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.cannotCreateSubgraph"),
            detail: t$2("toastMessages.failedToConvertToSubgraph"),
            life: 3e3
          });
          return;
        }
        const { node } = res;
        canvas.select(node);
        canvasStore.updateSelectedItems();
      }, "function")
    },
    {
      id: "Comfy.Graph.UnpackSubgraph",
      icon: "pi pi-sitemap",
      label: "Unpack the selected Subgraph",
      versionAdded: "1.20.1",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const canvas = canvasStore.getCanvas();
        const graph = canvas.subgraph ?? canvas.graph;
        if (!graph) throw new TypeError("Canvas has no graph or subgraph set.");
        const subgraphNode = app.canvas.selectedItems.values().next().value;
        if (!(subgraphNode instanceof SubgraphNode)) return;
        useNodeOutputStore().revokeSubgraphPreviews(subgraphNode);
        graph.unpackSubgraph(subgraphNode);
      }, "function")
    },
    {
      id: "Comfy.OpenManagerDialog",
      icon: "mdi mdi-puzzle-outline",
      label: "Manager",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showManagerDialog();
      }, "function")
    },
    {
      id: "Comfy.ToggleHelpCenter",
      icon: "pi pi-question-circle",
      label: "Help Center",
      function: /* @__PURE__ */ __name(() => {
        useHelpCenterStore().toggle();
      }, "function"),
      active: /* @__PURE__ */ __name(() => useHelpCenterStore().isVisible, "active")
    },
    {
      id: "Comfy.ToggleCanvasInfo",
      icon: "pi pi-info-circle",
      label: "Canvas Performance",
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        const currentValue = settingStore.get("Comfy.Graph.CanvasInfo");
        await settingStore.set("Comfy.Graph.CanvasInfo", !currentValue);
      }, "function"),
      active: /* @__PURE__ */ __name(() => useSettingStore().get("Comfy.Graph.CanvasInfo"), "active")
    },
    {
      id: "Workspace.ToggleBottomPanel.Shortcuts",
      icon: "pi pi-key",
      label: "Show Keybindings Dialog",
      versionAdded: "1.24.1",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.togglePanel("shortcuts");
      }, "function")
    },
    {
      id: "Comfy.Graph.ExitSubgraph",
      icon: "pi pi-arrow-up",
      label: "Exit Subgraph",
      versionAdded: "1.20.1",
      function: /* @__PURE__ */ __name(() => {
        const canvas = useCanvasStore().getCanvas();
        const navigationStore = useSubgraphNavigationStore();
        if (!canvas.graph) return;
        canvas.setGraph(
          navigationStore.navigationStack.at(-2) ?? canvas.graph.rootGraph
        );
      }, "function")
    },
    {
      id: "Comfy.Dev.ShowModelSelector",
      icon: "pi pi-box",
      label: "Show Model Selector (Dev)",
      versionAdded: "1.26.2",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const modelSelectorDialog = useModelSelectorDialog();
        modelSelectorDialog.show();
      }, "function")
    }
  ];
  return commands.map((command) => ({ ...command, source: "System" }));
}
__name(useCoreCommands, "useCoreCommands");
var re$3 = { exports: {} };
"use strict";
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var constants$1 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const constants$2 = /* @__PURE__ */ getDefaultExportFromCjs(constants$1);
"use strict";
var define_process_env_default = {};
const debug$1 = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
const debug$2 = /* @__PURE__ */ getDefaultExportFromCjs(debug_1);
var re_1 = re$3.exports;
(function(module, exports) {
  "use strict";
  const {
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
    MAX_LENGTH: MAX_LENGTH2
  } = constants$1;
  const debug2 = debug_1;
  exports = module.exports = {};
  const re2 = exports.re = [];
  const safeRe = exports.safeRe = [];
  const src = exports.src = [];
  const safeSrc = exports.safeSrc = [];
  const t2 = exports.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [
    ["\\s", 1],
    ["\\d", MAX_LENGTH2],
    [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
  ];
  const makeSafeRegex = /* @__PURE__ */ __name((value) => {
    for (const [token, max] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
  }, "makeSafeRegex");
  const createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index2 = R++;
    debug2(name, index2, value);
    t2[name] = index2;
    src[index2] = value;
    safeSrc[index2] = safe;
    re2[index2] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
  }, "createToken");
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
  createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t2.COERCE], true);
  createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$3, re$3.exports);
var reExports = re$3.exports;
const re$2 = /* @__PURE__ */ getDefaultExportFromCjs(reExports);
"use strict";
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$1 = /* @__PURE__ */ __name((options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
}, "parseOptions$1");
var parseOptions_1 = parseOptions$1;
const parseOptions$2 = /* @__PURE__ */ getDefaultExportFromCjs(parseOptions_1);
"use strict";
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = /* @__PURE__ */ __name((a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
}, "compareIdentifiers$1");
const rcompareIdentifiers = /* @__PURE__ */ __name((a, b) => compareIdentifiers$1(b, a), "rcompareIdentifiers");
var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const identifiers$2 = /* @__PURE__ */ getDefaultExportFromCjs(identifiers$1);
"use strict";
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$1;
const { safeRe: re$1, t: t$1 } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  static {
    __name(this, "SemVer");
  }
  constructor(version, options) {
    options = parseOptions(options);
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("build compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    if (release.startsWith("pre")) {
      if (!identifier && identifierBase === false) {
        throw new Error("invalid increment argument: identifier is empty");
      }
      if (identifier) {
        const match = `-${identifier}`.match(this.options.loose ? re$1[t$1.PRERELEASELOOSE] : re$1[t$1.PRERELEASE]);
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`);
        }
      }
    }
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "release":
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`);
        }
        this.prerelease.length = 0;
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease2 = [identifier, base];
          if (identifierBase === false) {
            prerelease2 = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease2;
            }
          } else {
            this.prerelease = prerelease2;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver$1 = SemVer$d;
const semver$2 = /* @__PURE__ */ getDefaultExportFromCjs(semver$1);
"use strict";
const SemVer$c = semver$1;
const parse$6 = /* @__PURE__ */ __name((version, options, throwErrors = false) => {
  if (version instanceof SemVer$c) {
    return version;
  }
  try {
    return new SemVer$c(version, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
}, "parse$6");
var parse_1 = parse$6;
const parse$7 = /* @__PURE__ */ getDefaultExportFromCjs(parse_1);
"use strict";
const parse$5 = parse_1;
const valid$3 = /* @__PURE__ */ __name((version, options) => {
  const v = parse$5(version, options);
  return v ? v.version : null;
}, "valid$3");
var valid_1 = valid$3;
const valid$4 = /* @__PURE__ */ getDefaultExportFromCjs(valid_1);
"use strict";
const parse$4 = parse_1;
const clean$1 = /* @__PURE__ */ __name((version, options) => {
  const s = parse$4(version.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
}, "clean$1");
var clean_1 = clean$1;
const clean$2 = /* @__PURE__ */ getDefaultExportFromCjs(clean_1);
"use strict";
const SemVer$b = semver$1;
const inc$1 = /* @__PURE__ */ __name((version, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer$b(
      version instanceof SemVer$b ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
}, "inc$1");
var inc_1 = inc$1;
const inc$2 = /* @__PURE__ */ getDefaultExportFromCjs(inc_1);
"use strict";
const parse$3 = parse_1;
const diff$1 = /* @__PURE__ */ __name((version1, version2) => {
  const v1 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v1.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;
  if (lowHasPre && !highHasPre) {
    if (!lowVersion.patch && !lowVersion.minor) {
      return "major";
    }
    if (lowVersion.compareMain(highVersion) === 0) {
      if (lowVersion.minor && !lowVersion.patch) {
        return "minor";
      }
      return "patch";
    }
  }
  const prefix = highHasPre ? "pre" : "";
  if (v1.major !== v2.major) {
    return prefix + "major";
  }
  if (v1.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v1.patch !== v2.patch) {
    return prefix + "patch";
  }
  return "prerelease";
}, "diff$1");
var diff_1 = diff$1;
const diff$2 = /* @__PURE__ */ getDefaultExportFromCjs(diff_1);
"use strict";
const SemVer$a = semver$1;
const major$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$a(a, loose).major, "major$1");
var major_1 = major$1;
const major$2 = /* @__PURE__ */ getDefaultExportFromCjs(major_1);
"use strict";
const SemVer$9 = semver$1;
const minor$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$9(a, loose).minor, "minor$1");
var minor_1 = minor$1;
const minor$2 = /* @__PURE__ */ getDefaultExportFromCjs(minor_1);
"use strict";
const SemVer$8 = semver$1;
const patch$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$8(a, loose).patch, "patch$1");
var patch_1 = patch$1;
const patch$2 = /* @__PURE__ */ getDefaultExportFromCjs(patch_1);
"use strict";
const parse$2 = parse_1;
const prerelease$1 = /* @__PURE__ */ __name((version, options) => {
  const parsed = parse$2(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}, "prerelease$1");
var prerelease_1 = prerelease$1;
const prerelease$2 = /* @__PURE__ */ getDefaultExportFromCjs(prerelease_1);
"use strict";
const SemVer$7 = semver$1;
const compare$b = /* @__PURE__ */ __name((a, b, loose) => new SemVer$7(a, loose).compare(new SemVer$7(b, loose)), "compare$b");
var compare_1 = compare$b;
const compare$c = /* @__PURE__ */ getDefaultExportFromCjs(compare_1);
"use strict";
const compare$a = compare_1;
const rcompare$1 = /* @__PURE__ */ __name((a, b, loose) => compare$a(b, a, loose), "rcompare$1");
var rcompare_1 = rcompare$1;
const rcompare$2 = /* @__PURE__ */ getDefaultExportFromCjs(rcompare_1);
"use strict";
const compare$9 = compare_1;
const compareLoose$1 = /* @__PURE__ */ __name((a, b) => compare$9(a, b, true), "compareLoose$1");
var compareLoose_1 = compareLoose$1;
const compareLoose$2 = /* @__PURE__ */ getDefaultExportFromCjs(compareLoose_1);
"use strict";
const SemVer$6 = semver$1;
const compareBuild$3 = /* @__PURE__ */ __name((a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
}, "compareBuild$3");
var compareBuild_1 = compareBuild$3;
const compareBuild$4 = /* @__PURE__ */ getDefaultExportFromCjs(compareBuild_1);
"use strict";
const compareBuild$2 = compareBuild_1;
const sort$1 = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose)), "sort$1");
var sort_1 = sort$1;
const sort$2 = /* @__PURE__ */ getDefaultExportFromCjs(sort_1);
"use strict";
const compareBuild$1 = compareBuild_1;
const rsort$1 = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose)), "rsort$1");
var rsort_1 = rsort$1;
const rsort$2 = /* @__PURE__ */ getDefaultExportFromCjs(rsort_1);
"use strict";
const compare$8 = compare_1;
const gt$4 = /* @__PURE__ */ __name((a, b, loose) => compare$8(a, b, loose) > 0, "gt$4");
var gt_1 = gt$4;
const gt$5 = /* @__PURE__ */ getDefaultExportFromCjs(gt_1);
"use strict";
const compare$7 = compare_1;
const lt$3 = /* @__PURE__ */ __name((a, b, loose) => compare$7(a, b, loose) < 0, "lt$3");
var lt_1 = lt$3;
const lt$4 = /* @__PURE__ */ getDefaultExportFromCjs(lt_1);
"use strict";
const compare$6 = compare_1;
const eq$2 = /* @__PURE__ */ __name((a, b, loose) => compare$6(a, b, loose) === 0, "eq$2");
var eq_1 = eq$2;
const eq$3 = /* @__PURE__ */ getDefaultExportFromCjs(eq_1);
"use strict";
const compare$5 = compare_1;
const neq$2 = /* @__PURE__ */ __name((a, b, loose) => compare$5(a, b, loose) !== 0, "neq$2");
var neq_1 = neq$2;
const neq$3 = /* @__PURE__ */ getDefaultExportFromCjs(neq_1);
"use strict";
const compare$4 = compare_1;
const gte$3 = /* @__PURE__ */ __name((a, b, loose) => compare$4(a, b, loose) >= 0, "gte$3");
var gte_1 = gte$3;
const gte$4 = /* @__PURE__ */ getDefaultExportFromCjs(gte_1);
"use strict";
const compare$3 = compare_1;
const lte$3 = /* @__PURE__ */ __name((a, b, loose) => compare$3(a, b, loose) <= 0, "lte$3");
var lte_1 = lte$3;
const lte$4 = /* @__PURE__ */ getDefaultExportFromCjs(lte_1);
"use strict";
const eq$1 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;
const cmp$1 = /* @__PURE__ */ __name((a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq$1(a, b, loose);
    case "!=":
      return neq$1(a, b, loose);
    case ">":
      return gt$3(a, b, loose);
    case ">=":
      return gte$2(a, b, loose);
    case "<":
      return lt$2(a, b, loose);
    case "<=":
      return lte$2(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
}, "cmp$1");
var cmp_1 = cmp$1;
const cmp$2 = /* @__PURE__ */ getDefaultExportFromCjs(cmp_1);
"use strict";
const SemVer$5 = semver$1;
const parse$1 = parse_1;
const { safeRe: re, t } = reExports;
const coerce$1 = /* @__PURE__ */ __name((version, options) => {
  if (version instanceof SemVer$5) {
    return version;
  }
  if (typeof version === "number") {
    version = String(version);
  }
  if (typeof version !== "string") {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
  } else {
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
    let next;
    while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
    }
    coerceRtlRegex.lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  const major2 = match[2];
  const minor2 = match[3] || "0";
  const patch2 = match[4] || "0";
  const prerelease2 = options.includePrerelease && match[5] ? `-${match[5]}` : "";
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
  return parse$1(`${major2}.${minor2}.${patch2}${prerelease2}${build}`, options);
}, "coerce$1");
var coerce_1 = coerce$1;
const coerce$2 = /* @__PURE__ */ getDefaultExportFromCjs(coerce_1);
"use strict";
class LRUCache {
  static {
    __name(this, "LRUCache");
  }
  constructor() {
    this.max = 1e3;
    this.map = /* @__PURE__ */ new Map();
  }
  get(key) {
    const value = this.map.get(key);
    if (value === void 0) {
      return void 0;
    } else {
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
  }
  delete(key) {
    return this.map.delete(key);
  }
  set(key, value) {
    const deleted = this.delete(key);
    if (!deleted && value !== void 0) {
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value;
        this.delete(firstKey);
      }
      this.map.set(key, value);
    }
    return this;
  }
}
var lrucache = LRUCache;
const lrucache$1 = /* @__PURE__ */ getDefaultExportFromCjs(lrucache);
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  "use strict";
  const SPACE_CHARACTERS = /\s+/g;
  class Range2 {
    static {
      __name(this, "Range");
    }
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator2) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer3(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lrucache;
  const cache = new LRU();
  const parseOptions2 = parseOptions_1;
  const Comparator2 = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$1;
  const isNullSet = /* @__PURE__ */ __name((c) => c.value === "<0.0.0-0", "isNullSet");
  const isAny = /* @__PURE__ */ __name((c) => c.value === "", "isAny");
  const isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  }, "isSatisfiable");
  const parseComparator = /* @__PURE__ */ __name((comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  }, "parseComparator");
  const isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
  const replaceTildes = /* @__PURE__ */ __name((comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  }, "replaceTildes");
  const replaceTilde = /* @__PURE__ */ __name((comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  }, "replaceTilde");
  const replaceCarets = /* @__PURE__ */ __name((comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  }, "replaceCarets");
  const replaceCaret = /* @__PURE__ */ __name((comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  }, "replaceCaret");
  const replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  }, "replaceXRanges");
  const replaceXRange = /* @__PURE__ */ __name((comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  }, "replaceXRange");
  const replaceStars = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  }, "replaceStars");
  const replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  }, "replaceGTE0");
  const hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  }, "hyphenReplace");
  const testSet = /* @__PURE__ */ __name((set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug2(set[i].semver);
        if (set[i].semver === Comparator2.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }, "testSet");
  return range;
}
__name(requireRange, "requireRange");
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  "use strict";
  const ANY2 = Symbol("SemVer ANY");
  class Comparator2 {
    static {
      __name(this, "Comparator");
    }
    static get ANY() {
      return ANY2;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY2) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY2;
      } else {
        this.semver = new SemVer3(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug2("Comparator.test", version, this.options.loose);
      if (this.semver === ANY2 || version === ANY2) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer3(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator2;
  const parseOptions2 = parseOptions_1;
  const { safeRe: re2, t: t2 } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const Range2 = requireRange();
  return comparator;
}
__name(requireComparator, "requireComparator");
"use strict";
const Range$9 = requireRange();
const satisfies$4 = /* @__PURE__ */ __name((version, range2, options) => {
  try {
    range2 = new Range$9(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version);
}, "satisfies$4");
var satisfies_1 = satisfies$4;
const satisfies$5 = /* @__PURE__ */ getDefaultExportFromCjs(satisfies_1);
"use strict";
const Range$8 = requireRange();
const toComparators$1 = /* @__PURE__ */ __name((range2, options) => new Range$8(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" ")), "toComparators$1");
var toComparators_1 = toComparators$1;
const toComparators$2 = /* @__PURE__ */ getDefaultExportFromCjs(toComparators_1);
"use strict";
const SemVer$4 = semver$1;
const Range$7 = requireRange();
const maxSatisfying$1 = /* @__PURE__ */ __name((versions, range2, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max || maxSV.compare(v) === -1) {
        max = v;
        maxSV = new SemVer$4(max, options);
      }
    }
  });
  return max;
}, "maxSatisfying$1");
var maxSatisfying_1 = maxSatisfying$1;
const maxSatisfying$2 = /* @__PURE__ */ getDefaultExportFromCjs(maxSatisfying_1);
"use strict";
const SemVer$3 = semver$1;
const Range$6 = requireRange();
const minSatisfying$1 = /* @__PURE__ */ __name((versions, range2, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min;
}, "minSatisfying$1");
var minSatisfying_1 = minSatisfying$1;
const minSatisfying$2 = /* @__PURE__ */ getDefaultExportFromCjs(minSatisfying_1);
"use strict";
const SemVer$2 = semver$1;
const Range$5 = requireRange();
const gt$2 = gt_1;
const minVersion$1 = /* @__PURE__ */ __name((range2, loose) => {
  range2 = new Range$5(range2, loose);
  let minver = new SemVer$2("0.0.0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = new SemVer$2("0.0.0-0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let setMin = null;
    comparators.forEach((comparator2) => {
      const compver = new SemVer$2(comparator2.semver.version);
      switch (comparator2.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator2.operator}`);
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range2.test(minver)) {
    return minver;
  }
  return null;
}, "minVersion$1");
var minVersion_1 = minVersion$1;
const minVersion$2 = /* @__PURE__ */ getDefaultExportFromCjs(minVersion_1);
"use strict";
const Range$4 = requireRange();
const validRange$1 = /* @__PURE__ */ __name((range2, options) => {
  try {
    return new Range$4(range2, options).range || "*";
  } catch (er) {
    return null;
  }
}, "validRange$1");
var valid$1 = validRange$1;
const valid$2 = /* @__PURE__ */ getDefaultExportFromCjs(valid$1);
"use strict";
const SemVer$1 = semver$1;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;
const outside$3 = /* @__PURE__ */ __name((version, range2, hilo, options) => {
  version = new SemVer$1(version, options);
  range2 = new Range$3(range2, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$3(version, range2, options)) {
    return false;
  }
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let high = null;
    let low = null;
    comparators.forEach((comparator2) => {
      if (comparator2.semver === ANY$1) {
        comparator2 = new Comparator$2(">=0.0.0");
      }
      high = high || comparator2;
      low = low || comparator2;
      if (gtfn(comparator2.semver, high.semver, options)) {
        high = comparator2;
      } else if (ltfn(comparator2.semver, low.semver, options)) {
        low = comparator2;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}, "outside$3");
var outside_1 = outside$3;
const outside$4 = /* @__PURE__ */ getDefaultExportFromCjs(outside_1);
"use strict";
const outside$2 = outside_1;
const gtr$1 = /* @__PURE__ */ __name((version, range2, options) => outside$2(version, range2, ">", options), "gtr$1");
var gtr_1 = gtr$1;
const gtr$2 = /* @__PURE__ */ getDefaultExportFromCjs(gtr_1);
"use strict";
const outside$1 = outside_1;
const ltr$1 = /* @__PURE__ */ __name((version, range2, options) => outside$1(version, range2, "<", options), "ltr$1");
var ltr_1 = ltr$1;
const ltr$2 = /* @__PURE__ */ getDefaultExportFromCjs(ltr_1);
"use strict";
const Range$2 = requireRange();
const intersects$1 = /* @__PURE__ */ __name((r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options);
}, "intersects$1");
var intersects_1 = intersects$1;
const intersects$2 = /* @__PURE__ */ getDefaultExportFromCjs(intersects_1);
"use strict";
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = /* @__PURE__ */ __name((versions, range2, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$2(a, b, options));
  for (const version of v) {
    const included = satisfies$2(version, range2, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }
  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push("*");
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range2.raw === "string" ? range2.raw : String(range2);
  return simplified.length < original.length ? simplified : range2;
}, "simplify");
const simplify$1 = /* @__PURE__ */ getDefaultExportFromCjs(simplify);
"use strict";
const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;
const subset$1 = /* @__PURE__ */ __name((sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;
  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER;
      }
    }
    if (sawNonNull) {
      return false;
    }
  }
  return true;
}, "subset$1");
const minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
const minimumVersion = [new Comparator$1(">=0.0.0")];
const simpleSubset = /* @__PURE__ */ __name((sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt2, lt2;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt2 = higherGT(gt2, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt2 = lowerLT(lt2, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt2 && lt2) {
    gtltComp = compare$1(gt2.semver, lt2.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
      return null;
    }
  }
  for (const eq2 of eqSet) {
    if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
      return null;
    }
    if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies$1(eq2, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
  let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt2) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt2, c, options);
        if (higher === c && higher !== gt2) {
          return false;
        }
      } else if (gt2.operator === ">=" && !satisfies$1(gt2.semver, String(c), options)) {
        return false;
      }
    }
    if (lt2) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt2, c, options);
        if (lower === c && lower !== lt2) {
          return false;
        }
      } else if (lt2.operator === "<=" && !satisfies$1(lt2.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
    return false;
  }
  if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
}, "simpleSubset");
const higherGT = /* @__PURE__ */ __name((a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
}, "higherGT");
const lowerLT = /* @__PURE__ */ __name((a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
}, "lowerLT");
var subset_1 = subset$1;
const subset$2 = /* @__PURE__ */ getDefaultExportFromCjs(subset_1);
"use strict";
const internalRe = reExports;
const constants = constants$1;
const SemVer2 = semver$1;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer: SemVer2,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
};
const index = /* @__PURE__ */ getDefaultExportFromCjs(semver);
const DISMISSAL_DURATION_MS = 7 * 24 * 60 * 60 * 1e3;
const useVersionCompatibilityStore = defineStore(
  "versionCompatibility",
  () => {
    const systemStatsStore = useSystemStatsStore();
    const frontendVersion = computed(() => config.app_version);
    const backendVersion = computed(
      () => systemStatsStore.systemStats?.system?.comfyui_version ?? ""
    );
    const requiredFrontendVersion = computed(
      () => systemStatsStore.systemStats?.system?.required_frontend_version ?? ""
    );
    const isFrontendOutdated = computed(() => {
      if (!frontendVersion.value || !requiredFrontendVersion.value || !semver.valid(frontendVersion.value) || !semver.valid(requiredFrontendVersion.value)) {
        return false;
      }
      return semver.gt(requiredFrontendVersion.value, frontendVersion.value);
    });
    const isFrontendNewer = computed(() => {
      return false;
    });
    const hasVersionMismatch = computed(() => {
      return isFrontendOutdated.value;
    });
    const versionKey = computed(() => {
      if (!frontendVersion.value || !backendVersion.value || !requiredFrontendVersion.value) {
        return null;
      }
      return `${frontendVersion.value}-${backendVersion.value}-${requiredFrontendVersion.value}`;
    });
    const dismissalStorage = useStorage(
      "comfy.versionMismatch.dismissals",
      {},
      localStorage,
      {
        serializer: {
          read: /* @__PURE__ */ __name((value) => {
            try {
              return JSON.parse(value);
            } catch {
              return {};
            }
          }, "read"),
          write: /* @__PURE__ */ __name((value) => JSON.stringify(value), "write")
        }
      }
    );
    const isDismissed = computed(() => {
      if (!versionKey.value) return false;
      const dismissedUntil = dismissalStorage.value[versionKey.value];
      if (!dismissedUntil) return false;
      return Date.now() < dismissedUntil;
    });
    const shouldShowWarning = computed(() => {
      return hasVersionMismatch.value && !isDismissed.value;
    });
    const warningMessage = computed(() => {
      if (isFrontendOutdated.value) {
        return {
          type: "outdated",
          frontendVersion: frontendVersion.value,
          requiredVersion: requiredFrontendVersion.value
        };
      }
      return null;
    });
    async function checkVersionCompatibility() {
      if (!systemStatsStore.systemStats) {
        await systemStatsStore.fetchSystemStats();
      }
    }
    __name(checkVersionCompatibility, "checkVersionCompatibility");
    function dismissWarning() {
      if (!versionKey.value) return;
      const dismissUntil = Date.now() + DISMISSAL_DURATION_MS;
      dismissalStorage.value = {
        ...dismissalStorage.value,
        [versionKey.value]: dismissUntil
      };
    }
    __name(dismissWarning, "dismissWarning");
    async function initialize() {
      await checkVersionCompatibility();
    }
    __name(initialize, "initialize");
    return {
      frontendVersion,
      backendVersion,
      requiredFrontendVersion,
      hasVersionMismatch,
      shouldShowWarning,
      warningMessage,
      isFrontendOutdated,
      isFrontendNewer,
      checkVersionCompatibility,
      dismissWarning,
      initialize
    };
  }
);
function useFrontendVersionMismatchWarning(options = {}) {
  const { immediate = false } = options;
  const { t: t2 } = useI18n();
  const toastStore = useToastStore();
  const versionCompatibilityStore = useVersionCompatibilityStore();
  let hasShownWarning = false;
  const showWarning = /* @__PURE__ */ __name(() => {
    if (hasShownWarning) return;
    const message = versionCompatibilityStore.warningMessage;
    if (!message) return;
    const detailMessage = t2("g.frontendOutdated", {
      frontendVersion: message.frontendVersion,
      requiredVersion: message.requiredVersion
    });
    const fullMessage = t2("g.versionMismatchWarningMessage", {
      warning: t2("g.versionMismatchWarning"),
      detail: detailMessage
    });
    toastStore.addAlert(fullMessage);
    hasShownWarning = true;
    versionCompatibilityStore.dismissWarning();
  }, "showWarning");
  onMounted(() => {
    if (immediate) {
      whenever(
        () => versionCompatibilityStore.shouldShowWarning,
        () => {
          showWarning();
        },
        {
          immediate: true,
          once: true
        }
      );
    }
  });
  return {
    showWarning,
    shouldShowWarning: computed(
      () => versionCompatibilityStore.shouldShowWarning
    ),
    dismissWarning: versionCompatibilityStore.dismissWarning,
    hasVersionMismatch: computed(
      () => versionCompatibilityStore.hasVersionMismatch
    )
  };
}
__name(useFrontendVersionMismatchWarning, "useFrontendVersionMismatchWarning");
const useProgressFavicon = /* @__PURE__ */ __name(() => {
  const defaultFavicon = "/assets/images/favicon_progress_16x16/frame_9.png";
  const favicon = useFavicon(defaultFavicon);
  const executionStore = useExecutionStore();
  const totalFrames = 10;
  watch(
    [() => executionStore.executionProgress, () => executionStore.isIdle],
    ([progress, isIdle]) => {
      if (isIdle) {
        favicon.value = defaultFavicon;
      } else {
        const frame = Math.min(
          Math.max(0, Math.floor(progress * totalFrames)),
          totalFrames - 1
        );
        favicon.value = `/assets/images/favicon_progress_16x16/frame_${frame}.png`;
      }
    }
  );
}, "useProgressFavicon");
var LatentPreviewMethod = /* @__PURE__ */ ((LatentPreviewMethod2) => {
  LatentPreviewMethod2["NoPreviews"] = "none";
  LatentPreviewMethod2["Auto"] = "auto";
  LatentPreviewMethod2["Latent2RGB"] = "latent2rgb";
  LatentPreviewMethod2["TAESD"] = "taesd";
  return LatentPreviewMethod2;
})(LatentPreviewMethod || {});
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["DEBUG"] = "DEBUG";
  LogLevel2["INFO"] = "INFO";
  LogLevel2["WARNING"] = "WARNING";
  LogLevel2["ERROR"] = "ERROR";
  LogLevel2["CRITICAL"] = "CRITICAL";
  return LogLevel2;
})(LogLevel || {});
var HashFunction = /* @__PURE__ */ ((HashFunction2) => {
  HashFunction2["MD5"] = "md5";
  HashFunction2["SHA1"] = "sha1";
  HashFunction2["SHA256"] = "sha256";
  HashFunction2["SHA512"] = "sha512";
  return HashFunction2;
})(HashFunction || {});
var AutoLaunch = /* @__PURE__ */ ((AutoLaunch2) => {
  AutoLaunch2["Auto"] = "auto";
  AutoLaunch2["Disable"] = "disable";
  AutoLaunch2["Enable"] = "enable";
  return AutoLaunch2;
})(AutoLaunch || {});
var CudaMalloc = /* @__PURE__ */ ((CudaMalloc2) => {
  CudaMalloc2["Auto"] = "auto";
  CudaMalloc2["Disable"] = "disable";
  CudaMalloc2["Enable"] = "enable";
  return CudaMalloc2;
})(CudaMalloc || {});
var FloatingPointPrecision = /* @__PURE__ */ ((FloatingPointPrecision2) => {
  FloatingPointPrecision2["AUTO"] = "auto";
  FloatingPointPrecision2["FP64"] = "fp64";
  FloatingPointPrecision2["FP32"] = "fp32";
  FloatingPointPrecision2["FP16"] = "fp16";
  FloatingPointPrecision2["BF16"] = "bf16";
  FloatingPointPrecision2["FP8E4M3FN"] = "fp8_e4m3fn";
  FloatingPointPrecision2["FP8E5M2"] = "fp8_e5m2";
  return FloatingPointPrecision2;
})(FloatingPointPrecision || {});
var CrossAttentionMethod = /* @__PURE__ */ ((CrossAttentionMethod2) => {
  CrossAttentionMethod2["Auto"] = "auto";
  CrossAttentionMethod2["Split"] = "split";
  CrossAttentionMethod2["Quad"] = "quad";
  CrossAttentionMethod2["Pytorch"] = "pytorch";
  return CrossAttentionMethod2;
})(CrossAttentionMethod || {});
var VramManagement = /* @__PURE__ */ ((VramManagement2) => {
  VramManagement2["Auto"] = "auto";
  VramManagement2["GPUOnly"] = "gpu-only";
  VramManagement2["HighVram"] = "highvram";
  VramManagement2["NormalVram"] = "normalvram";
  VramManagement2["LowVram"] = "lowvram";
  VramManagement2["NoVram"] = "novram";
  VramManagement2["CPU"] = "cpu";
  return VramManagement2;
})(VramManagement || {});
const WEB_ONLY_CONFIG_ITEMS = [
  // Launch behavior
  {
    id: "auto-launch",
    name: "Automatically opens in the browser on startup",
    category: ["Launch"],
    type: "combo",
    options: Object.values(AutoLaunch),
    defaultValue: AutoLaunch.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case AutoLaunch.Auto:
          return {};
        case AutoLaunch.Enable:
          return {
            ["auto-launch"]: true
          };
        case AutoLaunch.Disable:
          return {
            ["disable-auto-launch"]: true
          };
      }
    }, "getValue")
  }
];
const SERVER_CONFIG_ITEMS = [
  // Network settings
  {
    id: "listen",
    name: "Host: The IP address to listen on",
    category: ["Network"],
    type: "text",
    defaultValue: "127.0.0.1"
  },
  {
    id: "port",
    name: "Port: The port to listen on",
    category: ["Network"],
    type: "number",
    // The default launch port for desktop app is 8000 instead of 8188.
    defaultValue: 8e3
  },
  {
    id: "tls-keyfile",
    name: "TLS Key File: Path to TLS key file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "tls-certfile",
    name: "TLS Certificate File: Path to TLS certificate file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "enable-cors-header",
    name: 'Enable CORS header: Use "*" for all origins or specify domain',
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "max-upload-size",
    name: "Maximum upload size (MB)",
    category: ["Network"],
    type: "number",
    defaultValue: 100
  },
  // CUDA settings
  {
    id: "cuda-device",
    name: "CUDA device index to use",
    category: ["CUDA"],
    type: "number",
    defaultValue: null
  },
  {
    id: "cuda-malloc",
    name: "Use CUDA malloc for memory allocation",
    category: ["CUDA"],
    type: "combo",
    options: Object.values(CudaMalloc),
    defaultValue: CudaMalloc.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CudaMalloc.Auto:
          return {};
        case CudaMalloc.Enable:
          return {
            ["cuda-malloc"]: true
          };
        case CudaMalloc.Disable:
          return {
            ["disable-cuda-malloc"]: true
          };
      }
    }, "getValue")
  },
  // Precision settings
  {
    id: "global-precision",
    name: "Global floating point precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Global floating point precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        case FloatingPointPrecision.FP32:
          return {
            ["force-fp32"]: true
          };
        case FloatingPointPrecision.FP16:
          return {
            ["force-fp16"]: true
          };
        default:
          return {};
      }
    }, "getValue")
  },
  // UNET precision
  {
    id: "unet-precision",
    name: "UNET precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP64,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.BF16,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "UNET precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-unet`]: true
          };
      }
    }, "getValue")
  },
  // VAE settings
  {
    id: "vae-precision",
    name: "VAE precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.BF16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "VAE precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-vae`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "cpu-vae",
    name: "Run VAE on CPU",
    category: ["Inference"],
    type: "boolean",
    defaultValue: false
  },
  // Text Encoder settings
  {
    id: "text-encoder-precision",
    name: "Text Encoder precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Text Encoder precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-text-enc`]: true
          };
      }
    }, "getValue")
  },
  // Memory and performance settings
  {
    id: "force-channels-last",
    name: "Force channels-last memory format",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "directml",
    name: "DirectML device index",
    category: ["Memory"],
    type: "number",
    defaultValue: null
  },
  {
    id: "disable-ipex-optimize",
    name: "Disable IPEX optimization",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  // Preview settings
  {
    id: "preview-method",
    name: "Method used for latent previews",
    category: ["Preview"],
    type: "combo",
    options: Object.values(LatentPreviewMethod),
    defaultValue: LatentPreviewMethod.NoPreviews
  },
  {
    id: "preview-size",
    name: "Size of preview images",
    category: ["Preview"],
    type: "slider",
    defaultValue: 512,
    attrs: {
      min: 128,
      max: 2048,
      step: 128
    }
  },
  // Cache settings
  {
    id: "cache-classic",
    name: "Use classic cache system",
    category: ["Cache"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "cache-lru",
    name: "Use LRU caching with a maximum of N node results cached.",
    category: ["Cache"],
    type: "number",
    defaultValue: null,
    tooltip: "May use more RAM/VRAM."
  },
  // Attention settings
  {
    id: "cross-attention-method",
    name: "Cross attention method",
    category: ["Attention"],
    type: "combo",
    options: Object.values(CrossAttentionMethod),
    defaultValue: CrossAttentionMethod.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CrossAttentionMethod.Auto:
          return {};
        default:
          return {
            [`use-${value.toLowerCase()}-cross-attention`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "disable-xformers",
    name: "Disable xFormers optimization",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "force-upcast-attention",
    name: "Force attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-upcast-attention",
    name: "Prevent attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  // VRAM management
  {
    id: "vram-management",
    name: "VRAM management mode",
    category: ["Memory"],
    type: "combo",
    options: Object.values(VramManagement),
    defaultValue: VramManagement.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case VramManagement.Auto:
          return {};
        default:
          return {
            [value]: true
          };
      }
    }, "getValue")
  },
  {
    id: "reserve-vram",
    name: "Reserved VRAM (GB)",
    category: ["Memory"],
    type: "number",
    defaultValue: null,
    tooltip: "Set the amount of vram in GB you want to reserve for use by your OS/other software. By default some amount is reverved depending on your OS."
  },
  // Misc settings
  {
    id: "default-hashing-function",
    name: "Default hashing function for model files",
    type: "combo",
    options: Object.values(HashFunction),
    defaultValue: HashFunction.SHA256
  },
  {
    id: "disable-smart-memory",
    name: "Disable smart memory management",
    tooltip: "Force ComfyUI to aggressively offload to regular ram instead of keeping models in vram when it can.",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "deterministic",
    name: "Make pytorch use slower deterministic algorithms when it can.",
    type: "boolean",
    defaultValue: false,
    tooltip: "Note that this might not make images deterministic in all cases."
  },
  {
    id: "fast",
    name: "Enable some untested and potentially quality deteriorating optimizations.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-print-server",
    name: "Don't print server output to console.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-metadata",
    name: "Disable saving prompt metadata in files.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-all-custom-nodes",
    name: "Disable loading all custom nodes.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "log-level",
    name: "Logging verbosity level",
    type: "combo",
    options: Object.values(LogLevel),
    defaultValue: LogLevel.INFO,
    getValue: /* @__PURE__ */ __name((value) => {
      return {
        verbose: value
      };
    }, "getValue")
  },
  // Directories
  {
    id: "input-directory",
    name: "Input directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "output-directory",
    name: "Output directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  }
];
function setupAutoQueueHandler() {
  const queueCountStore = useQueuePendingTaskCountStore();
  const queueSettingsStore = useQueueSettingsStore();
  let graphHasChanged = false;
  let internalCount = 0;
  api.addEventListener("graphChanged", () => {
    if (queueSettingsStore.mode === "change") {
      if (internalCount) {
        graphHasChanged = true;
      } else {
        graphHasChanged = false;
        void app.queuePrompt(0, queueSettingsStore.batchCount);
        internalCount++;
      }
    }
  });
  queueCountStore.$subscribe(
    async () => {
      internalCount = queueCountStore.count;
      if (!internalCount && !app.lastExecutionError) {
        if (queueSettingsStore.mode === "instant" || queueSettingsStore.mode === "change" && graphHasChanged) {
          graphHasChanged = false;
          await app.queuePrompt(0, queueSettingsStore.batchCount);
        }
      }
    },
    { detached: true }
  );
}
__name(setupAutoQueueHandler, "setupAutoQueueHandler");
const _hoisted_1 = { class: "comfyui-body grid h-full w-full overflow-hidden" };
const _hoisted_2 = {
  id: "comfyui-body-top",
  class: "comfyui-body-top"
};
const _hoisted_3 = {
  id: "comfyui-body-bottom",
  class: "comfyui-body-bottom"
};
const _hoisted_4 = {
  id: "graph-canvas-container",
  class: "graph-canvas-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GraphView",
  setup(__props) {
    setupAutoQueueHandler();
    useProgressFavicon();
    useBrowserTabTitle();
    const { t: t2 } = useI18n();
    const toast = useToast();
    const settingStore = useSettingStore();
    const executionStore = useExecutionStore();
    const colorPaletteStore = useColorPaletteStore();
    const queueStore = useQueueStore();
    const versionCompatibilityStore = useVersionCompatibilityStore();
    const breakpoints = useBreakpoints({ md: 961 });
    const isMobile = breakpoints.smaller("md");
    const showTopMenu = computed(() => isMobile.value || useNewMenu.value === "Top");
    const showBottomMenu = computed(
      () => !isMobile.value && useNewMenu.value === "Bottom"
    );
    watch(
      () => colorPaletteStore.completedActivePalette,
      (newTheme) => {
        const DARK_THEME_CLASS = "dark-theme";
        if (newTheme.light_theme) {
          document.body.classList.remove(DARK_THEME_CLASS);
        } else {
          document.body.classList.add(DARK_THEME_CLASS);
        }
        if (isElectron()) {
          electronAPI().changeTheme({
            color: "rgba(0, 0, 0, 0)",
            symbolColor: newTheme.colors.comfy_base["input-text"]
          });
        }
      },
      { immediate: true }
    );
    if (isElectron()) {
      watch(
        () => queueStore.tasks,
        (newTasks, oldTasks) => {
          const oldRunningTaskIds = new Set(
            oldTasks.filter((task) => task.isRunning).map((task) => task.promptId)
          );
          newTasks.filter(
            (task) => oldRunningTaskIds.has(task.promptId) && task.isHistory
          ).forEach((task) => {
            electronAPI().Events.incrementUserProperty(
              `execution:${task.displayStatus.toLowerCase()}`,
              1
            );
            electronAPI().Events.trackEvent("execution", {
              status: task.displayStatus.toLowerCase()
            });
          });
        },
        { deep: true }
      );
    }
    watchEffect(() => {
      const fontSize = settingStore.get("Comfy.TextareaWidget.FontSize");
      document.documentElement.style.setProperty(
        "--comfy-textarea-font-size",
        `${fontSize}px`
      );
    });
    watchEffect(() => {
      const padding = settingStore.get("Comfy.TreeExplorer.ItemPadding");
      document.documentElement.style.setProperty(
        "--comfy-tree-explorer-item-padding",
        `${padding}px`
      );
    });
    watchEffect(() => {
      const locale = settingStore.get("Comfy.Locale");
      if (locale) {
        i18n.global.locale.value = locale;
      }
    });
    const useNewMenu = computed(() => {
      return settingStore.get("Comfy.UseNewMenu");
    });
    watchEffect(() => {
      if (useNewMenu.value === "Disabled") {
        app.ui.menuContainer.style.setProperty("display", "block");
        app.ui.restoreMenuPosition();
      } else {
        app.ui.menuContainer.style.setProperty("display", "none");
      }
    });
    watchEffect(() => {
      queueStore.maxHistoryItems = settingStore.get("Comfy.Queue.MaxHistoryItems");
    });
    const init = /* @__PURE__ */ __name(() => {
      const coreCommands = useCoreCommands();
      useCommandStore().registerCommands(coreCommands);
      useMenuItemStore().registerCoreMenuCommands();
      useKeybindingService().registerCoreKeybindings();
      useSidebarTabStore().registerCoreSidebarTabs();
      useBottomPanelStore().registerCoreBottomPanelTabs();
      app.extensionManager = useWorkspaceStore();
    }, "init");
    const queuePendingTaskCountStore = useQueuePendingTaskCountStore();
    const onStatus = /* @__PURE__ */ __name(async (e) => {
      queuePendingTaskCountStore.update(e);
      await queueStore.update();
    }, "onStatus");
    const onExecutionSuccess = /* @__PURE__ */ __name(async () => {
      await queueStore.update();
    }, "onExecutionSuccess");
    const reconnectingMessage = {
      severity: "error",
      summary: t2("g.reconnecting")
    };
    const onReconnecting = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add(reconnectingMessage);
      }
    }, "onReconnecting");
    const onReconnected = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add({
          severity: "success",
          summary: t2("g.reconnected"),
          life: 2e3
        });
      }
    }, "onReconnected");
    onMounted(() => {
      api.addEventListener("status", onStatus);
      api.addEventListener("execution_success", onExecutionSuccess);
      api.addEventListener("reconnecting", onReconnecting);
      api.addEventListener("reconnected", onReconnected);
      executionStore.bindExecutionEvents();
      try {
        init();
      } catch (e) {
        console.error("Failed to init ComfyUI frontend", e);
      }
    });
    onBeforeUnmount(() => {
      api.removeEventListener("status", onStatus);
      api.removeEventListener("execution_success", onExecutionSuccess);
      api.removeEventListener("reconnecting", onReconnecting);
      api.removeEventListener("reconnected", onReconnected);
      executionStore.unbindExecutionEvents();
    });
    useEventListener(window, "keydown", useKeybindingService().keybindHandler);
    const { wrapWithErrorHandling, wrapWithErrorHandlingAsync } = useErrorHandling();
    useFrontendVersionMismatchWarning({ immediate: true });
    void nextTick(() => {
      versionCompatibilityStore.initialize().catch((error) => {
        console.warn("Version compatibility check failed:", error);
      });
    });
    const onGraphReady = /* @__PURE__ */ __name(() => {
      requestIdleCallback(
        () => {
          wrapWithErrorHandling(useKeybindingService().registerUserKeybindings)();
          wrapWithErrorHandling(useServerConfigStore().loadServerConfig)(
            SERVER_CONFIG_ITEMS,
            settingStore.get("Comfy.Server.ServerConfigValues")
          );
          void wrapWithErrorHandlingAsync(useModelStore().loadModelFolders)();
          void wrapWithErrorHandlingAsync(
            useNodeFrequencyStore().loadNodeFrequencies
          )();
          useNodeDefStore().nodeSearchService.searchNode("");
        },
        { timeout: 1e3 }
      );
    }, "onGraphReady");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            showTopMenu.value ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          createElementVNode("div", _hoisted_3, [
            showBottomMenu.value ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          _cache[0] || (_cache[0] = createElementVNode("div", {
            id: "comfyui-body-left",
            class: "comfyui-body-left"
          }, null, -1)),
          _cache[1] || (_cache[1] = createElementVNode("div", {
            id: "comfyui-body-right",
            class: "comfyui-body-right"
          }, null, -1)),
          createElementVNode("div", _hoisted_4, [
            createVNode(_sfc_main$v, { onReady: onGraphReady })
          ])
        ]),
        createVNode(_sfc_main$u),
        createVNode(_sfc_main$t),
        !unref(isElectron)() ? (openBlock(), createBlock(_sfc_main$19, { key: 0 })) : createCommentVNode("", true),
        createVNode(MenuHamburger)
      ], 64);
    };
  }
});
const GraphView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d25259c0"]]);
export {
  GraphView as default
};
//# sourceMappingURL=GraphView-DDWLziIo.js.map
