import { addClass, focus, blockBodyScroll, unblockBodyScroll } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import TimesIcon from '@primevue/icons/times';
import Button from 'primevue/button';
import FocusTrap from 'primevue/focustrap';
import Portal from 'primevue/portal';
import BaseComponent from '@primevue/core/basecomponent';
import DrawerStyle from 'primevue/drawer/style';
import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, createElementBlock, mergeProps, createVNode, Transition, withDirectives, renderSlot, Fragment, createElementVNode, normalizeClass, toDisplayString, createCommentVNode, resolveDynamicComponent } from 'vue';

var script$1 = {
  name: 'BaseDrawer',
  "extends": BaseComponent,
  props: {
    visible: {
      type: Boolean,
      "default": false
    },
    position: {
      type: String,
      "default": 'left'
    },
    header: {
      type: null,
      "default": null
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    dismissable: {
      type: Boolean,
      "default": true
    },
    showCloseIcon: {
      type: Boolean,
      "default": true
    },
    closeButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: 'secondary',
          text: true,
          rounded: true
        };
      }
    },
    closeIcon: {
      type: String,
      "default": undefined
    },
    modal: {
      type: Boolean,
      "default": true
    },
    blockScroll: {
      type: Boolean,
      "default": false
    }
  },
  style: DrawerStyle,
  provide: function provide() {
    return {
      $pcDrawer: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'Drawer',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['update:visible', 'show', 'after-show', 'hide', 'after-hide'],
  data: function data() {
    return {
      containerVisible: this.visible
    };
  },
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  closeButton: null,
  outsideClickListener: null,
  documentKeydownListener: null,
  watch: {
    dismissable: function dismissable(newValue) {
      if (newValue) {
        this.enableDocumentSettings();
      } else {
        this.disableDocumentSettings();
      }
    }
  },
  updated: function updated() {
    if (this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.disableDocumentSettings();
    if (this.mask && this.autoZIndex) {
      ZIndex.clear(this.mask);
    }
    this.container = null;
    this.mask = null;
  },
  methods: {
    hide: function hide() {
      this.$emit('update:visible', false);
    },
    onEnter: function onEnter() {
      this.$emit('show');
      this.focus();
      this.bindDocumentKeyDownListener();
      if (this.autoZIndex) {
        ZIndex.set('modal', this.mask, this.baseZIndex || this.$primevue.config.zIndex.modal);
      }
    },
    onAfterEnter: function onAfterEnter() {
      this.enableDocumentSettings();
      this.$emit('after-show');
    },
    onBeforeLeave: function onBeforeLeave() {
      if (this.modal) {
        !this.isUnstyled && addClass(this.mask, 'p-overlay-mask-leave');
      }
    },
    onLeave: function onLeave() {
      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave() {
      if (this.autoZIndex) {
        ZIndex.clear(this.mask);
      }
      this.unbindDocumentKeyDownListener();
      this.containerVisible = false;
      this.disableDocumentSettings();
      this.$emit('after-hide');
    },
    onMaskClick: function onMaskClick(event) {
      if (this.dismissable && this.modal && this.mask === event.target) {
        this.hide();
      }
    },
    focus: function focus$1() {
      var findFocusableElement = function findFocusableElement(container) {
        return container && container.querySelector('[autofocus]');
      };
      var focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);
      if (!focusTarget) {
        focusTarget = this.$slots["default"] && findFocusableElement(this.container);
        if (!focusTarget) {
          focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);
          if (!focusTarget) {
            focusTarget = this.closeButton;
          }
        }
      }
      focusTarget && focus(focusTarget);
    },
    enableDocumentSettings: function enableDocumentSettings() {
      if (this.dismissable && !this.modal) {
        this.bindOutsideClickListener();
      }
      if (this.blockScroll) {
        blockBodyScroll();
      }
    },
    disableDocumentSettings: function disableDocumentSettings() {
      this.unbindOutsideClickListener();
      if (this.blockScroll) {
        unblockBodyScroll();
      }
    },
    onKeydown: function onKeydown(event) {
      if (event.code === 'Escape') {
        this.hide();
      }
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    },
    headerContainerRef: function headerContainerRef(el) {
      this.headerContainer = el;
    },
    footerContainerRef: function footerContainerRef(el) {
      this.footerContainer = el;
    },
    closeButtonRef: function closeButtonRef(el) {
      this.closeButton = el ? el.$el : undefined;
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeydown;
        document.addEventListener('keydown', this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        document.removeEventListener('keydown', this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this.isOutsideClicked(event)) {
            _this.hide();
          }
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return this.container && !this.container.contains(event.target);
    }
  },
  computed: {
    fullScreen: function fullScreen() {
      return this.position === 'full';
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
    }
  },
  directives: {
    focustrap: FocusTrap
  },
  components: {
    Button: Button,
    Portal: Portal,
    TimesIcon: TimesIcon
  }
};

var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    "default": withCtx(function () {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        onMousedown: _cache[0] || (_cache[0] = function () {
          return $options.onMaskClick && $options.onMaskClick.apply($options, arguments);
        }),
        "class": _ctx.cx('mask'),
        style: _ctx.sx('mask', true, {
          position: _ctx.position,
          modal: _ctx.modal
        })
      }, _ctx.ptm('mask')), [createVNode(Transition, mergeProps({
        name: "p-drawer",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, _ctx.ptm('transition')), {
        "default": withCtx(function () {
          return [_ctx.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            "class": _ctx.cx('root'),
            style: _ctx.sx('root'),
            role: "complementary",
            "aria-modal": _ctx.modal
          }, _ctx.ptmi('root')), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            closeCallback: $options.hide
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [createElementVNode("div", mergeProps({
            ref: $options.headerContainerRef,
            "class": _ctx.cx('header')
          }, _ctx.ptm('header')), [renderSlot(_ctx.$slots, "header", {
            "class": normalizeClass(_ctx.cx('title'))
          }, function () {
            return [_ctx.header ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              "class": _ctx.cx('title')
            }, _ctx.ptm('title')), toDisplayString(_ctx.header), 17)) : createCommentVNode("", true)];
          }), _ctx.showCloseIcon ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 0,
            ref: $options.closeButtonRef,
            type: "button",
            "class": _ctx.cx('pcCloseButton'),
            "aria-label": $options.closeAriaLabel,
            unstyled: _ctx.unstyled,
            onClick: $options.hide
          }, _ctx.closeButtonProps, {
            pt: _ctx.ptm('pcCloseButton'),
            "data-pc-group-section": "iconcontainer"
          }), {
            icon: withCtx(function (slotProps) {
              return [renderSlot(_ctx.$slots, "closeicon", {}, function () {
                return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon ? 'span' : 'TimesIcon'), mergeProps({
                  "class": [_ctx.closeIcon, slotProps["class"]]
                }, _ctx.ptm('pcCloseButton')['icon']), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true)], 16), createElementVNode("div", mergeProps({
            ref: $options.contentRef,
            "class": _ctx.cx('content')
          }, _ctx.ptm('content')), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.footerContainerRef,
            "class": _ctx.cx('footer')
          }, _ctx.ptm('footer')), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 64))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16)) : createCommentVNode("", true)];
    }),
    _: 3
  });
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
