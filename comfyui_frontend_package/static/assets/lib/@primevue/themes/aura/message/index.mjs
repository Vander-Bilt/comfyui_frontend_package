var index = {
  root: {
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    transitionDuration: '{transition.duration}'
  },
  content: {
    padding: '0.5rem 0.75rem',
    gap: '0.5rem',
    sm: {
      padding: '0.375rem 0.625rem'
    },
    lg: {
      padding: '0.625rem 0.875rem'
    }
  },
  text: {
    fontSize: '1rem',
    fontWeight: '500',
    sm: {
      fontSize: '0.875rem'
    },
    lg: {
      fontSize: '1.125rem'
    }
  },
  icon: {
    size: '1.125rem',
    sm: {
      size: '1rem'
    },
    lg: {
      size: '1.25rem'
    }
  },
  closeButton: {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      offset: '{focus.ring.offset}'
    }
  },
  closeIcon: {
    size: '1rem',
    sm: {
      size: '0.875rem'
    },
    lg: {
      size: '1.125rem'
    }
  },
  outlined: {
    root: {
      borderWidth: '1px'
    }
  },
  simple: {
    content: {
      padding: '0'
    }
  },
  colorScheme: {
    light: {
      info: {
        background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
        borderColor: '{blue.200}',
        color: '{blue.600}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{blue.100}',
          focusRing: {
            color: '{blue.600}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{blue.600}',
          borderColor: '{blue.600}'
        },
        simple: {
          color: '{blue.600}'
        }
      },
      success: {
        background: 'color-mix(in srgb, {green.50}, transparent 5%)',
        borderColor: '{green.200}',
        color: '{green.600}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{green.100}',
          focusRing: {
            color: '{green.600}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{green.600}',
          borderColor: '{green.600}'
        },
        simple: {
          color: '{green.600}'
        }
      },
      warn: {
        background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
        borderColor: '{yellow.200}',
        color: '{yellow.600}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{yellow.100}',
          focusRing: {
            color: '{yellow.600}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{yellow.600}',
          borderColor: '{yellow.600}'
        },
        simple: {
          color: '{yellow.600}'
        }
      },
      error: {
        background: 'color-mix(in srgb, {red.50}, transparent 5%)',
        borderColor: '{red.200}',
        color: '{red.600}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{red.100}',
          focusRing: {
            color: '{red.600}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{red.600}',
          borderColor: '{red.600}'
        },
        simple: {
          color: '{red.600}'
        }
      },
      secondary: {
        background: '{surface.100}',
        borderColor: '{surface.200}',
        color: '{surface.600}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{surface.200}',
          focusRing: {
            color: '{surface.600}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{surface.500}',
          borderColor: '{surface.500}'
        },
        simple: {
          color: '{surface.500}'
        }
      },
      contrast: {
        background: '{surface.900}',
        borderColor: '{surface.950}',
        color: '{surface.50}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
        closeButton: {
          hoverBackground: '{surface.800}',
          focusRing: {
            color: '{surface.50}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{surface.950}',
          borderColor: '{surface.950}'
        },
        simple: {
          color: '{surface.950}'
        }
      }
    },
    dark: {
      info: {
        background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
        borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
        color: '{blue.500}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.05)',
          focusRing: {
            color: '{blue.500}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{blue.500}',
          borderColor: '{blue.500}'
        },
        simple: {
          color: '{blue.500}'
        }
      },
      success: {
        background: 'color-mix(in srgb, {green.500}, transparent 84%)',
        borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
        color: '{green.500}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.05)',
          focusRing: {
            color: '{green.500}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{green.500}',
          borderColor: '{green.500}'
        },
        simple: {
          color: '{green.500}'
        }
      },
      warn: {
        background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
        borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
        color: '{yellow.500}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.05)',
          focusRing: {
            color: '{yellow.500}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{yellow.500}',
          borderColor: '{yellow.500}'
        },
        simple: {
          color: '{yellow.500}'
        }
      },
      error: {
        background: 'color-mix(in srgb, {red.500}, transparent 84%)',
        borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
        color: '{red.500}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.05)',
          focusRing: {
            color: '{red.500}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{red.500}',
          borderColor: '{red.500}'
        },
        simple: {
          color: '{red.500}'
        }
      },
      secondary: {
        background: '{surface.800}',
        borderColor: '{surface.700}',
        color: '{surface.300}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
        closeButton: {
          hoverBackground: '{surface.700}',
          focusRing: {
            color: '{surface.300}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{surface.400}',
          borderColor: '{surface.400}'
        },
        simple: {
          color: '{surface.400}'
        }
      },
      contrast: {
        background: '{surface.0}',
        borderColor: '{surface.100}',
        color: '{surface.950}',
        shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
        closeButton: {
          hoverBackground: '{surface.100}',
          focusRing: {
            color: '{surface.950}',
            shadow: 'none'
          }
        },
        outlined: {
          color: '{surface.0}',
          borderColor: '{surface.0}'
        },
        simple: {
          color: '{surface.0}'
        }
      }
    }
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
