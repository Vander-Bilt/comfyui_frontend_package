var index = {
  root: {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledHoverBackground: '{form.field.filled.hover.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
      width: '{form.field.focus.ring.width}',
      style: '{form.field.focus.ring.style}',
      color: '{form.field.focus.ring.color}',
      offset: '{form.field.focus.ring.offset}',
      shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
      fontSize: '{form.field.sm.font.size}',
      paddingX: '{form.field.sm.padding.x}',
      paddingY: '{form.field.sm.padding.y}'
    },
    lg: {
      fontSize: '{form.field.lg.font.size}',
      paddingX: '{form.field.lg.padding.x}',
      paddingY: '{form.field.lg.padding.y}'
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-textarea.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: ".concat(dt('textarea.filled.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.focus.border.color'), ", ").concat(dt('textarea.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.border.color'), ", ").concat(dt('textarea.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-textarea.p-variant-filled:enabled:hover {\n    background: ").concat(dt('textarea.filled.hover.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.focus.border.color'), ", ").concat(dt('textarea.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.hover.border.color'), ", ").concat(dt('textarea.hover.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:focus {\n    outline: 0 none;\n    background: ").concat(dt('textarea.filled.focus.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.focus.border.color'), ", ").concat(dt('textarea.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.border.color'), ", ").concat(dt('textarea.border.color'), ");\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:hover:focus {\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.focus.border.color'), ", ").concat(dt('textarea.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.hover.border.color'), ", ").concat(dt('textarea.hover.border.color'), ");\n}\n\n.p-textarea.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.invalid.border.color'), ", ").concat(dt('textarea.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.invalid.border.color'), ", ").concat(dt('textarea.invalid.border.color'), ");\n}\n\n.p-textarea.p-variant-filled.p-invalid:enabled:focus {\n    background-image: linear-gradient(to bottom, ").concat(dt('textarea.invalid.border.color'), ", ").concat(dt('textarea.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('textarea.invalid.border.color'), ", ").concat(dt('textarea.invalid.border.color'), ");\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
