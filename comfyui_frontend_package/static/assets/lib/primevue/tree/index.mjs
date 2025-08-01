import { resolveFieldData, isFunction } from '@primeuix/utils/object';
import SearchIcon from '@primevue/icons/search';
import SpinnerIcon from '@primevue/icons/spinner';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import BaseComponent from '@primevue/core/basecomponent';
import TreeStyle from 'primevue/tree/style';
import { getAttribute, findSingle, find } from '@primeuix/utils/dom';
import CheckIcon from '@primevue/icons/check';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import MinusIcon from '@primevue/icons/minus';
import Checkbox from 'primevue/checkbox';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, mergeProps, createElementVNode, withDirectives, Fragment, createBlock, resolveDynamicComponent, normalizeClass, withCtx, createCommentVNode, withModifiers, createTextVNode, toDisplayString, renderList, renderSlot, createVNode } from 'vue';

var script$2 = {
  name: 'BaseTree',
  "extends": BaseComponent,
  props: {
    value: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    metaKeySelection: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    loadingIcon: {
      type: String,
      "default": undefined
    },
    loadingMode: {
      type: String,
      "default": 'mask'
    },
    filter: {
      type: Boolean,
      "default": false
    },
    filterBy: {
      type: [String, Function],
      "default": 'label'
    },
    filterMode: {
      type: String,
      "default": 'lenient'
    },
    filterPlaceholder: {
      type: String,
      "default": null
    },
    filterLocale: {
      type: String,
      "default": undefined
    },
    highlightOnSelect: {
      type: Boolean,
      "default": false
    },
    scrollHeight: {
      type: String,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: TreeStyle,
  provide: function provide() {
    return {
      $pcTree: this,
      $parentInstance: this
    };
  }
};

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _createForOfIteratorHelper$1(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$2(e, r, t) { return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray$1(r) { return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray$1(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0; } }
function _iterableToArray$1(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles$1(r) { if (Array.isArray(r)) return _arrayLikeToArray$1(r); }
function _arrayLikeToArray$1(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var script$1 = {
  name: 'TreeNode',
  hostName: 'Tree',
  "extends": BaseComponent,
  emits: ['node-toggle', 'node-click', 'checkbox-change'],
  props: {
    node: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    loadingMode: {
      type: String,
      "default": 'mask'
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    level: {
      type: Number,
      "default": null
    },
    index: null
  },
  nodeTouched: false,
  toggleClicked: false,
  mounted: function mounted() {
    this.setAllNodesTabIndexes();
  },
  methods: {
    toggle: function toggle() {
      this.$emit('node-toggle', this.node);
      this.toggleClicked = true;
    },
    label: function label(node) {
      return typeof node.label === 'function' ? node.label() : node.label;
    },
    onChildNodeToggle: function onChildNodeToggle(node) {
      this.$emit('node-toggle', node);
    },
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          node: this.node,
          index: this.index,
          expanded: this.expanded,
          selected: this.selected,
          checked: this.checked,
          partialChecked: this.partialChecked,
          leaf: this.leaf
        }
      });
    },
    onClick: function onClick(event) {
      if (this.toggleClicked || getAttribute(event.target, '[data-pc-section="nodetogglebutton"]') || getAttribute(event.target.parentElement, '[data-pc-section="nodetogglebutton"]')) {
        this.toggleClicked = false;
        return;
      }
      if (this.isCheckboxSelectionMode()) {
        if (this.node.selectable != false) {
          this.toggleCheckbox();
        }
      } else {
        this.$emit('node-click', {
          originalEvent: event,
          nodeTouched: this.nodeTouched,
          node: this.node
        });
      }
      this.nodeTouched = false;
    },
    onChildNodeClick: function onChildNodeClick(event) {
      this.$emit('node-click', event);
    },
    onTouchEnd: function onTouchEnd() {
      this.nodeTouched = true;
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.isSameNode(event)) return;
      switch (event.code) {
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'ArrowDown':
          this.onArrowDown(event);
          break;
        case 'ArrowUp':
          this.onArrowUp(event);
          break;
        case 'ArrowRight':
          this.onArrowRight(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeft(event);
          break;
        case 'Enter':
        case 'NumpadEnter':
        case 'Space':
          this.onEnterKey(event);
          break;
      }
    },
    onArrowDown: function onArrowDown(event) {
      var nodeElement = event.target.getAttribute('data-pc-section') === 'nodetogglebutton' ? event.target.closest('[role="treeitem"]') : event.target;
      var listElement = nodeElement.children[1];
      if (listElement) {
        this.focusRowChange(nodeElement, listElement.children[0]);
      } else {
        if (nodeElement.nextElementSibling) {
          this.focusRowChange(nodeElement, nodeElement.nextElementSibling);
        } else {
          var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
          if (nextSiblingAncestor) {
            this.focusRowChange(nodeElement, nextSiblingAncestor);
          }
        }
      }
      event.preventDefault();
    },
    onArrowUp: function onArrowUp(event) {
      var nodeElement = event.target;
      if (nodeElement.previousElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
      } else {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          this.focusRowChange(nodeElement, parentNodeElement);
        }
      }
      event.preventDefault();
    },
    onArrowRight: function onArrowRight(event) {
      var _this = this;
      if (this.leaf || this.expanded) return;
      event.currentTarget.tabIndex = -1;
      this.$emit('node-toggle', this.node);
      this.$nextTick(function () {
        _this.onArrowDown(event);
      });
    },
    onArrowLeft: function onArrowLeft(event) {
      var togglerElement = findSingle(event.currentTarget, '[data-pc-section="nodetogglebutton"]');
      if (this.level === 0 && !this.expanded) {
        return false;
      }
      if (this.expanded && !this.leaf) {
        togglerElement.click();
        return false;
      }
      var target = this.findBeforeClickableNode(event.currentTarget);
      if (target) {
        this.focusRowChange(event.currentTarget, target);
      }
    },
    onEnterKey: function onEnterKey(event) {
      this.setTabIndexForSelectionMode(event, this.nodeTouched);
      this.onClick(event);
      event.preventDefault();
    },
    onTabKey: function onTabKey() {
      this.setAllNodesTabIndexes();
    },
    setAllNodesTabIndexes: function setAllNodesTabIndexes() {
      var nodes = find(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'), '[role="treeitem"]');
      var hasSelectedNode = _toConsumableArray$1(nodes).some(function (node) {
        return node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true';
      });
      _toConsumableArray$1(nodes).forEach(function (node) {
        node.tabIndex = -1;
      });
      if (hasSelectedNode) {
        var selectedNodes = _toConsumableArray$1(nodes).filter(function (node) {
          return node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true';
        });
        selectedNodes[0].tabIndex = 0;
        return;
      }
      _toConsumableArray$1(nodes)[0].tabIndex = 0;
    },
    setTabIndexForSelectionMode: function setTabIndexForSelectionMode(event, nodeTouched) {
      if (this.selectionMode !== null) {
        var elements = _toConsumableArray$1(find(this.$refs.currentNode.parentElement, '[role="treeitem"]'));
        event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
        if (elements.every(function (element) {
          return element.tabIndex === -1;
        })) {
          elements[0].tabIndex = 0;
        }
      }
    },
    focusRowChange: function focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
      firstFocusableRow.tabIndex = '-1';
      currentFocusedRow.tabIndex = '0';
      this.focusNode(lastVisibleDescendant || currentFocusedRow);
    },
    findBeforeClickableNode: function findBeforeClickableNode(node) {
      var parentListElement = node.closest('ul').closest('li');
      if (parentListElement) {
        var prevNodeButton = findSingle(parentListElement, 'button');
        if (prevNodeButton && prevNodeButton.style.visibility !== 'hidden') {
          return parentListElement;
        }
        return this.findBeforeClickableNode(node.previousElementSibling);
      }
      return null;
    },
    toggleCheckbox: function toggleCheckbox() {
      var _selectionKeys = this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
      var _check = !this.checked;
      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit('checkbox-change', {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys
      });
    },
    propagateDown: function propagateDown(node, check, selectionKeys) {
      if (check && node.selectable != false) selectionKeys[node.key] = {
        checked: true,
        partialChecked: false
      };else delete selectionKeys[node.key];
      if (node.children && node.children.length) {
        var _iterator = _createForOfIteratorHelper$1(node.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            this.propagateDown(child, check, selectionKeys);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    propagateUp: function propagateUp(event) {
      var check = event.check;
      var _selectionKeys = _objectSpread$2({}, event.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator2 = _createForOfIteratorHelper$1(this.node.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.node.key] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.node.key];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.node.key] = {
          checked: false,
          partialChecked: true
        };else delete _selectionKeys[this.node.key];
      }
      this.$emit('checkbox-change', {
        node: event.node,
        check: event.check,
        selectionKeys: _selectionKeys
      });
    },
    onChildCheckboxChange: function onChildCheckboxChange(event) {
      this.$emit('checkbox-change', event);
    },
    findNextSiblingOfAncestor: function findNextSiblingOfAncestor(nodeElement) {
      var parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
      } else {
        return null;
      }
    },
    findLastVisibleDescendant: function findLastVisibleDescendant(nodeElement) {
      var childrenListElement = nodeElement.children[1];
      if (childrenListElement) {
        var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
        return this.findLastVisibleDescendant(lastChildElement);
      } else {
        return nodeElement;
      }
    },
    getParentNodeElement: function getParentNodeElement(nodeElement) {
      var parentNodeElement = nodeElement.parentElement.parentElement;
      return getAttribute(parentNodeElement, 'role') === 'treeitem' ? parentNodeElement : null;
    },
    focusNode: function focusNode(element) {
      element.focus();
    },
    isCheckboxSelectionMode: function isCheckboxSelectionMode() {
      return this.selectionMode === 'checkbox';
    },
    isSameNode: function isSameNode(event) {
      return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
    }
  },
  computed: {
    hasChildren: function hasChildren() {
      return this.node.children && this.node.children.length > 0;
    },
    expanded: function expanded() {
      return this.expandedKeys && this.expandedKeys[this.node.key] === true;
    },
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selectable: function selectable() {
      return this.node.selectable === false ? false : this.selectionMode != null;
    },
    selected: function selected() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
    },
    checkboxMode: function checkboxMode() {
      return this.selectionMode === 'checkbox' && this.node.selectable !== false;
    },
    checked: function checked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
    },
    partialChecked: function partialChecked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
    },
    ariaChecked: function ariaChecked() {
      return this.selectionMode === 'single' || this.selectionMode === 'multiple' ? this.selected : undefined;
    },
    ariaSelected: function ariaSelected() {
      return this.checkboxMode ? this.checked : undefined;
    }
  },
  components: {
    Checkbox: Checkbox,
    ChevronDownIcon: ChevronDownIcon,
    ChevronRightIcon: ChevronRightIcon,
    CheckIcon: CheckIcon,
    MinusIcon: MinusIcon,
    SpinnerIcon: SpinnerIcon
  },
  directives: {
    ripple: Ripple
  }
};

var _hoisted_1$1 = ["aria-label", "aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-level", "aria-checked", "tabindex"];
var _hoisted_2 = ["data-p-selected", "data-p-selectable"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  var _component_TreeNode = resolveComponent("TreeNode", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("li", mergeProps({
    ref: "currentNode",
    "class": _ctx.cx('node'),
    role: "treeitem",
    "aria-label": $options.label($props.node),
    "aria-selected": $options.ariaSelected,
    "aria-expanded": $options.expanded,
    "aria-setsize": $props.node.children ? $props.node.children.length : 0,
    "aria-posinset": $props.index + 1,
    "aria-level": $props.level,
    "aria-checked": $options.ariaChecked,
    tabindex: $props.index === 0 ? 0 : -1,
    onKeydown: _cache[4] || (_cache[4] = function () {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, $props.level === 1 ? $options.getPTOptions('node') : _ctx.ptm('nodeChildren')), [createElementVNode("div", mergeProps({
    "class": _ctx.cx('nodeContent'),
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onTouchend: _cache[3] || (_cache[3] = function () {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    style: $props.node.style
  }, $options.getPTOptions('nodeContent'), {
    "data-p-selected": $options.checkboxMode ? $options.checked : $options.selected,
    "data-p-selectable": $options.selectable
  }), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
    type: "button",
    "class": _ctx.cx('nodeToggleButton'),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    tabindex: "-1"
  }, $options.getPTOptions('nodeToggleButton')), [$props.node.loading && $props.loadingMode === 'icon' ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [$props.templates['nodetoggleicon'] || $props.templates['nodetogglericon'] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates['nodetoggleicon'] || $props.templates['nodetogglericon']), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    "class": normalizeClass(_ctx.cx('nodeToggleIcon'))
  }, null, 8, ["node", "expanded", "class"])) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
    key: 1,
    spin: "",
    "class": _ctx.cx('nodeToggleIcon')
  }, $options.getPTOptions('nodeToggleIcon')), null, 16, ["class"]))], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [$props.templates['nodetoggleicon'] || $props.templates['togglericon'] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates['nodetoggleicon'] || $props.templates['togglericon']), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    "class": normalizeClass(_ctx.cx('nodeToggleIcon'))
  }, null, 8, ["node", "expanded", "class"])) : $options.expanded ? (openBlock(), createBlock(resolveDynamicComponent($props.node.expandedIcon ? 'span' : 'ChevronDownIcon'), mergeProps({
    key: 1,
    "class": _ctx.cx('nodeToggleIcon')
  }, $options.getPTOptions('nodeToggleIcon')), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.node.collapsedIcon ? 'span' : 'ChevronRightIcon'), mergeProps({
    key: 2,
    "class": _ctx.cx('nodeToggleIcon')
  }, $options.getPTOptions('nodeToggleIcon')), null, 16, ["class"]))], 64))], 16)), [[_directive_ripple]]), $options.checkboxMode ? (openBlock(), createBlock(_component_Checkbox, {
    key: 0,
    defaultValue: $options.checked,
    binary: true,
    indeterminate: $options.partialChecked,
    "class": normalizeClass(_ctx.cx('nodeCheckbox')),
    tabindex: -1,
    unstyled: _ctx.unstyled,
    pt: $options.getPTOptions('pcNodeCheckbox'),
    "data-p-partialchecked": $options.partialChecked
  }, {
    icon: withCtx(function (slotProps) {
      return [$props.templates['checkboxicon'] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates['checkboxicon']), {
        key: 0,
        checked: slotProps.checked,
        partialChecked: $options.partialChecked,
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["checked", "partialChecked", "class"])) : createCommentVNode("", true)];
    }),
    _: 1
  }, 8, ["defaultValue", "indeterminate", "class", "unstyled", "pt", "data-p-partialchecked"])) : createCommentVNode("", true), $props.templates['nodeicon'] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates['nodeicon']), mergeProps({
    key: 1,
    node: $props.node,
    "class": [_ctx.cx('nodeIcon')]
  }, $options.getPTOptions('nodeIcon')), null, 16, ["node", "class"])) : (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": [_ctx.cx('nodeIcon'), $props.node.icon]
  }, $options.getPTOptions('nodeIcon')), null, 16)), createElementVNode("span", mergeProps({
    "class": _ctx.cx('nodeLabel')
  }, $options.getPTOptions('nodeLabel'), {
    onKeydown: _cache[1] || (_cache[1] = withModifiers(function () {}, ["stop"]))
  }), [$props.templates[$props.node.type] || $props.templates['default'] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates[$props.node.type] || $props.templates['default']), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    selected: $options.checkboxMode ? $options.checked : $options.selected
  }, null, 8, ["node", "expanded", "selected"])) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [createTextVNode(toDisplayString($options.label($props.node)), 1)], 64))], 16)], 16, _hoisted_2), $options.hasChildren && $options.expanded ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    "class": _ctx.cx('nodeChildren'),
    role: "group"
  }, _ctx.ptm('nodeChildren')), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, function (childNode) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: childNode.key,
      node: childNode,
      templates: $props.templates,
      level: $props.level + 1,
      loadingMode: $props.loadingMode,
      expandedKeys: $props.expandedKeys,
      onNodeToggle: $options.onChildNodeToggle,
      onNodeClick: $options.onChildNodeClick,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys,
      onCheckboxChange: $options.propagateUp,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["node", "templates", "level", "loadingMode", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "unstyled", "pt"]);
  }), 128))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1);
}

script$1.render = render$1;

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'Tree',
  "extends": script$2,
  inheritAttrs: false,
  emits: ['node-expand', 'node-collapse', 'update:expandedKeys', 'update:selectionKeys', 'node-select', 'node-unselect', 'filter'],
  data: function data() {
    return {
      d_expandedKeys: this.expandedKeys || {},
      filterValue: null
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.d_expandedKeys = newValue;
    }
  },
  methods: {
    onNodeToggle: function onNodeToggle(node) {
      var key = node.key;
      if (this.d_expandedKeys[key]) {
        delete this.d_expandedKeys[key];
        this.$emit('node-collapse', node);
      } else {
        this.d_expandedKeys[key] = true;
        this.$emit('node-expand', node);
      }
      this.d_expandedKeys = _objectSpread$1({}, this.d_expandedKeys);
      this.$emit('update:expandedKeys', this.d_expandedKeys);
    },
    onNodeClick: function onNodeClick(event) {
      if (this.selectionMode != null && event.node.selectable !== false) {
        var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
        var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
        this.$emit('update:selectionKeys', _selectionKeys);
      }
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit('update:selectionKeys', event.selectionKeys);
      if (event.check) this.$emit('node-select', event.node);else this.$emit('node-unselect', event.node);
    },
    handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event) {
      var originalEvent = event.originalEvent;
      var node = event.node;
      var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      var selected = this.isNodeSelected(node);
      var _selectionKeys;
      if (selected && metaKey) {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[node.key];
        }
        this.$emit('node-unselect', node);
      } else {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else if (this.isMultipleSelectionMode()) {
          _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
        }
        _selectionKeys[node.key] = true;
        this.$emit('node-select', node);
      }
      return _selectionKeys;
    },
    handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event) {
      var node = event.node;
      var selected = this.isNodeSelected(node);
      var _selectionKeys;
      if (this.isSingleSelectionMode()) {
        if (selected) {
          _selectionKeys = {};
          this.$emit('node-unselect', node);
        } else {
          _selectionKeys = {};
          _selectionKeys[node.key] = true;
          this.$emit('node-select', node);
        }
      } else {
        if (selected) {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[node.key];
          this.$emit('node-unselect', node);
        } else {
          _selectionKeys = this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
          _selectionKeys[node.key] = true;
          this.$emit('node-select', node);
        }
      }
      return _selectionKeys;
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === 'single';
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === 'multiple';
    },
    isNodeSelected: function isNodeSelected(node) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[node.key] === true : false;
    },
    isChecked: function isChecked(node) {
      return this.selectionKeys ? this.selectionKeys[node.key] && this.selectionKeys[node.key].checked : false;
    },
    isNodeLeaf: function isNodeLeaf(node) {
      return node.leaf === false ? false : !(node.children && node.children.length);
    },
    onFilterKeydown: function onFilterKeydown(event) {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
      }
      this.$emit('filter', {
        originalEvent: event,
        value: event.target.value
      });
    },
    findFilteredNodes: function findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        var matched = false;
        if (node.children) {
          var childNodes = _toConsumableArray(node.children);
          node.children = [];
          var _iterator = _createForOfIteratorHelper(childNodes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var childNode = _step.value;
              var copyChildNode = _objectSpread$1({}, childNode);
              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (matched) {
          return true;
        }
      }
    },
    isFilterMatched: function isFilterMatched(node, _ref) {
      var searchFields = _ref.searchFields,
        filterText = _ref.filterText,
        strict = _ref.strict;
      var matched = false;
      var _iterator2 = _createForOfIteratorHelper(searchFields),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;
          var fieldValue = String(resolveFieldData(node, field)).toLocaleLowerCase(this.filterLocale);
          if (fieldValue.indexOf(filterText) > -1) {
            matched = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!matched || strict && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          searchFields: searchFields,
          filterText: filterText,
          strict: strict
        }) || matched;
      }
      return matched;
    }
  },
  computed: {
    filteredValue: function filteredValue() {
      var filteredNodes = [];
      var searchFields = isFunction(this.filterBy) ? [this.filterBy] : this.filterBy.split(',');
      var filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
      var strict = this.filterMode === 'strict';
      var _iterator3 = _createForOfIteratorHelper(this.value),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var node = _step3.value;
          var _node = _objectSpread$1({}, node);
          var paramsWithoutNode = {
            searchFields: searchFields,
            filterText: filterText,
            strict: strict
          };
          if (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode)) || !strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode))) {
            filteredNodes.push(_node);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return filteredNodes;
    },
    valueToRender: function valueToRender() {
      if (this.filterValue && this.filterValue.trim().length > 0) return this.filteredValue;else return this.value;
    }
  },
  components: {
    TreeNode: script$1,
    InputText: InputText,
    InputIcon: InputIcon,
    IconField: IconField,
    SearchIcon: SearchIcon,
    SpinnerIcon: SpinnerIcon
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _hoisted_1 = ["aria-labelledby", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_TreeNode = resolveComponent("TreeNode");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx('root')
  }, _ctx.ptmi('root')), [_ctx.loading && _ctx.loadingMode === 'mask' ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx('mask')
  }, _ctx.ptm('mask')), [renderSlot(_ctx.$slots, "loadingicon", {
    "class": normalizeClass(_ctx.cx('loadingIcon'))
  }, function () {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": [_ctx.cx('loadingIcon'), 'pi-spin', _ctx.loadingIcon]
    }, _ctx.ptm('loadingIcon')), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      spin: "",
      "class": _ctx.cx('loadingIcon')
    }, _ctx.ptm('loadingIcon')), null, 16, ["class"]))];
  })], 16)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createBlock(_component_IconField, {
    key: 1,
    unstyled: _ctx.unstyled,
    pt: _objectSpread(_objectSpread({}, _ctx.ptm('pcFilter')), _ctx.ptm('pcFilterContainer')),
    "class": normalizeClass(_ctx.cx('pcFilterContainer'))
  }, {
    "default": withCtx(function () {
      return [createVNode(_component_InputText, {
        modelValue: $data.filterValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.filterValue = $event;
        }),
        autocomplete: "off",
        "class": normalizeClass(_ctx.cx('pcFilterInput')),
        placeholder: _ctx.filterPlaceholder,
        unstyled: _ctx.unstyled,
        onKeydown: $options.onFilterKeydown,
        pt: _ctx.ptm('pcFilterInput')
      }, null, 8, ["modelValue", "class", "placeholder", "unstyled", "onKeydown", "pt"]), createVNode(_component_InputIcon, {
        unstyled: _ctx.unstyled,
        pt: _ctx.ptm('pcFilterIconContainer')
      }, {
        "default": withCtx(function () {
          return [renderSlot(_ctx.$slots, _ctx.$slots.filtericon ? 'filtericon' : 'searchicon', {
            "class": normalizeClass(_ctx.cx('filterIcon'))
          }, function () {
            return [createVNode(_component_SearchIcon, mergeProps({
              "class": _ctx.cx('filterIcon')
            }, _ctx.ptm('filterIcon')), null, 16, ["class"])];
          })];
        }),
        _: 3
      }, 8, ["unstyled", "pt"])];
    }),
    _: 3
  }, 8, ["unstyled", "pt", "class"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx('wrapper'),
    style: {
      maxHeight: _ctx.scrollHeight
    }
  }, _ctx.ptm('wrapper')), [renderSlot(_ctx.$slots, "header", {
    value: _ctx.value,
    expandedKeys: _ctx.expandedKeys,
    selectionKeys: _ctx.selectionKeys
  }), createElementVNode("ul", mergeProps({
    "class": _ctx.cx('rootChildren'),
    role: "tree",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm('rootChildren')), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.valueToRender, function (node, index) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: node.key,
      node: node,
      templates: _ctx.$slots,
      level: _ctx.level + 1,
      index: index,
      expandedKeys: $data.d_expandedKeys,
      onNodeToggle: $options.onNodeToggle,
      onNodeClick: $options.onNodeClick,
      selectionMode: _ctx.selectionMode,
      selectionKeys: _ctx.selectionKeys,
      onCheckboxChange: $options.onCheckboxChange,
      loadingMode: _ctx.loadingMode,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["node", "templates", "level", "index", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "loadingMode", "unstyled", "pt"]);
  }), 128))], 16, _hoisted_1), renderSlot(_ctx.$slots, "footer", {
    value: _ctx.value,
    expandedKeys: _ctx.expandedKeys,
    selectionKeys: _ctx.selectionKeys
  })], 16)], 16);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
