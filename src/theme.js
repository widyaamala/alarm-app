import { baseTheme, extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  textStyles: {
    bold: {
      fontWeight: 800
    },
    semi: {
      fontWeight: 700,
    },
    primary: {
      fontWeight: 600
    },
    light: {
      fontWeight: 500,
    },
    large: {
      fontSize: '18px'
    },
    medium: {
      fontSize: '16px'
    },
    small: {
      fontSize: '14px',
    },
    xsmall: {
      fontSize: '12px',
    },
  },
  colors: {
    main: '#212121',
    primary: '#272c6f',
    secondary: '#484c86',
    tertiary: '#636899',
    base: '#b6b9d26b',
    mutedBase: '#b6b9d236',
    layout: '#ecedf78f',
    muted: '#b6b9d2',
    success: '#1CB289',
    danger: '#C53030'
  },
  components: {
    Button: {
      baseStyle: {
        background: 'primary',
        color: 'white',
        borderRadius: '20px',
        fontWeight: '500',
        height: 'auto',
        width: '100px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        _disabled: {
          background: 'muted',
          color: 'tertiary',
        },
      },
      variants: { 
        solidPrimary : {
          background: 'base',
          color: 'primary',
          _focus: {
            outline: 0,
            background: 'base',
            color: 'primary',
          },
          _hover: {
            border: "none",
            background: 'base',
            color: 'primary',
          },
        },
        outlinePrimary : {
          border: '1px',
          borderColor: 'secondary',
          background: 'transparent',
          color: 'secondary',
        },
      }
    },
    Input: {
      baseStyle : {
        field: {
          fontSize: '14px',
          fontWeight: 500,
          height: "50px",
        }
      }
    },
    Menu: {
      baseStyle: {
        item: {
          _hover: {
            color: 'white',
            bg: "primary",
            borderColor: "inherit",
          },
          _focus: {
            color: 'white',
            bg: "primary",
            boxShadow: "none",
          },
        },
      },
    },
    Tabs: {
      variants: { 
        line : {
          tab: {
            px: '8',
            py: '3',
            border: 'none',
            _selected: {
              color: 'secondary',
              borderRadius: 0,
              borderBottom: '3px',
              borderColor: 'secondary'
            },
            _hover: {
              color: 'secondary',
              borderRadius: 0,
              borderBottom: '3px',
              borderColor: 'secondary'
            },
            _focus: {
              outline: 0,
            },
          }
        },
      }
    },
    Switch: {
      baseStyle: {
        track: {
          bg: 'tertiary',
          _checked: {
            bg: 'tertiary',
          },
        },
      }
    },
    Slider: {
      baseStyle: {
        thumb: {
          bg: 'tertiary'
        },
        filledTrack: {
          bg: 'tertiary'
        }
      }
    }
  },
})

export default theme
