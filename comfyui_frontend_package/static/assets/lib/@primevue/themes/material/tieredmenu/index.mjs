var index = {
  root: {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.navigation.shadow}',
    transitionDuration: '{transition.duration}'
  },
  list: {
    padding: '{navigation.list.padding}',
    gap: '{navigation.list.gap}'
  },
  item: {
    focusBackground: '{navigation.item.focus.background}',
    activeBackground: '{navigation.item.active.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    activeColor: '{navigation.item.active.color}',
    padding: '{navigation.item.padding}',
    borderRadius: '{navigation.item.border.radius}',
    gap: '{navigation.item.gap}',
    icon: {
      color: '{navigation.item.icon.color}',
      focusColor: '{navigation.item.icon.focus.color}',
      activeColor: '{navigation.item.icon.active.color}'
    }
  },
  submenu: {
    mobileIndent: '1rem'
  },
  submenuIcon: {
    size: '{navigation.submenu.icon.size}',
    color: '{navigation.submenu.icon.color}',
    focusColor: '{navigation.submenu.icon.focus.color}',
    activeColor: '{navigation.submenu.icon.active.color}'
  },
  separator: {
    borderColor: '{content.border.color}'
  },
  css: function css(_ref) {
    _ref.dt;
    return "\n.p-tieredmenu-overlay {\n    border-color: transparent;\n}\n";
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
