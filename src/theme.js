import { extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
      light: '#1c1c1c',
      dark: '#efefef'
    },
    primary: {
      light: '#D32F2F',
      dark: '#bd2e32'
    },
    secondary: {
      light: '#9E9E9E',
      dark: '#616161'
    },
    tertiary: {
      light: '#757575',
      dark: '#BDBDBD'
    },
    base: {
      light: '#E0E0E0',
      dark: '#424242'
    },
    mutedBase: {
      light: '#fff',
      dark: '#474747'
    },
    background: {
      light: '#efefef',
      dark: '#1e1e1e'
    },
    muted: {
      light: '#9E9E9E',
      dark: '#757575'
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
    Select: {
      baseStyle : (props) => ({
        field: {
          fontSize: '14px',
          fontWeight: 500,
          height: "50px",
          color: props.colorMode === 'light' ? 'main.light' : 'main.dark'
        }
      })
    },
    Link: {
      baseStyle: (props) => ({
        fontSize: '14px',
        fontWeight: 500,
        color: props.colorMode === 'light' ? 'main.light' : 'main.dark',
        _hover: {
          color: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark',
        },
        _focus: {
          color: props.colorMode === 'light' ? 'tertiary.light' : 'tertiary.dark',
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
          background: props.colorMode === 'light' ? 'mutedBase.light' : 'mutedBase.dark'
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
            bg: props.colorMode === 'light' ? 'primary.light' : 'primary.dark',
          },
        },
      })
    },
    Slider: {
      baseStyle: (props) => ({
        thumb: {
          bg: props.colorMode === 'light' ? 'main.light' : 'tertiary.dark'
        },
        filledTrack: {
          bg: props.colorMode === 'light' ? 'main.light' : 'tertiary.dark'
        }
      })
    }
  },
  styles: {
    global: (props) => ({
      ".picker": {
        backgroundColor: props.colorMode === 'light' ? 'mutedBase.light' : 'mutedBase.dark',
      },
    }),
  },
})

export default theme
