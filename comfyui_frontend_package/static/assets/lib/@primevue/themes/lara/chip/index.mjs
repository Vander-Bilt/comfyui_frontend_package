var index = {
  root: {
    borderRadius: '16px',
    paddingX: '0.875rem',
    paddingY: '0.625rem',
    gap: '0.5rem',
    transitionDuration: '{transition.duration}'
  },
  image: {
    width: '2rem',
    height: '2rem'
  },
  icon: {
    size: '1rem'
  },
  removeIcon: {
    size: '1rem',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '{focus.ring.offset}',
      shadow: '{focus.ring.shadow}'
    }
  },
  colorScheme: {
    light: {
      root: {
        background: '{surface.100}',
        color: '{surface.800}'
      },
      icon: {
        color: '{surface.800}'
      },
      removeIcon: {
        color: '{surface.800}'
      }
    },
    dark: {
      root: {
        background: '{surface.800}',
        color: '{surface.0}'
      },
      icon: {
        color: '{surface.0}'
      },
      removeIcon: {
        color: '{surface.0}'
      }
    }
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
