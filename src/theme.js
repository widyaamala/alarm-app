import { extendTheme } from "@chakra-ui/react"
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
    main: {
      light: '#212121',
      dark: '#efefef'
    },
    primary: {
      light: '#272c6f',
      dark: '#9c5bee'
    },
    secondary: {
      light: '#484c86',
      dark: '#efeefc'
    },
    tertiary: {
      light: '#636899',
      dark: '#9188e5'
    },
    base: {
      light: '#b6b9d26b',
      dark: '#e3e1ff'
    },
    mutedBase: {
      light: '#b6b9d236',
      dark: '#b6b9d236'
    },
    layout: {
      light: '#ecedf78f',
      dark: '#1a1a1df5'
    },
    background: {
      light: '#fff',
      dark: '#161616'
    },
    muted: {
      light: '#b6b9d2',
      dark: '#b5b5b6'
    },
    success: '#1CB289',
    danger: '#C53030'
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        background: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
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
          background: props.colorMode === 'light' ? 'muted.light' : 'muted.dark',
          color: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark',
        },
      }),
      variants:{ 
        solidPrimary : (props) => ({
          background: props.colorMode === 'light' ?  'base.light' : 'base.dark',
          color: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
          _focus: {
            outline: 0,
            background: props.colorMode === 'light' ? 'base.light' : 'base.dark',
            color: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
          },
          _hover: {
            border: "none",
            background: props.colorMode === 'light' ? 'base.light' : 'base.dark',
            color: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
          },
        }),
        outlinePrimary : (props) => ({
          border: '1px',
          borderColor: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark',
          background: 'transparent',
          color: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark',
        }),
      }
    },
    Divider: {
      baseStyle : (props) => ({
        borderColor: props.colorMode === 'light' ? 'darkgray' : 'gray'
      })
    },
    Input: {
      baseStyle : (props) => ({
        field: {
          fontSize: '14px',
          fontWeight: 500,
          height: "50px",
          color: props.colorMode === 'light' ? 'main.light' : 'main.dark'
        }
      })
    },
    Menu: {
      baseStyle: (props) => ({
        list: {
          background: props.colorMode === 'light' ? 'background.light' : 'background.dark'
        },
        item: {
          bg: props.colorMode === 'light' ? 'background.light' : 'background.dark',
          color: props.colorMode === 'light' ? 'main.light' : 'main.dark',
          _hover: {
            color: 'white',
            bg: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
            borderColor: "inherit",
          },
          _focus: {
            color: 'white',
            bg: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
            boxShadow: "none",
          },
        },
      }),
    },
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          background: props.colorMode === 'light' ? 'background.light' : 'background.dark'
        }
      })
    },
    Tabs: {
      variants: (props) => ({ 
        line : {
          tab: {
            px: '8',
            py: '3',
            border: 'none',
            _selected: {
              color: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark',
              borderRadius: 0,
              borderBottom: '3px',
              borderColor: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark'
            },
            _hover: {
              color: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark',
              borderRadius: 0,
              borderBottom: '3px',
              borderColor: props.colorMode === 'light' ? 'secondary.light' : 'secondary.dark'
            },
            _focus: {
              outline: 0,
            },
          }
        },
      })
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? 'main.light' : 'main.dark'
      })
    },
    Switch: {
      baseStyle: (props) => ({
        track: {
          // bg: 'tertiary',
          _checked: {
            bg: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark',
          },
        },
      })
    },
    Slider: {
      baseStyle: (props) => ({
        thumb: {
          bg: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark'
        },
        filledTrack: {
          bg: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark'
        }
      })
    }
  },
  styles: {
    global: (props) => ({
      ".picker": {
        backgroundColor: props.colorMode === 'light' ? 'background.light' : 'background.dark',
      },
    }),
  },
})

export default theme
