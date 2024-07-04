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
  components: {
    Button: {
      baseStyle: {
        background: '#272c6f',
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
          background: '#b6b9d2',
          color: '#ecedf78f',
        },
      },
      variants: { 
        solidnavy : {
          background: '#484c86',
          color: 'white',
          _focus: {
            outline: 0,
            background: '#484c86',
            color: 'white',
          },
          _hover: {
            border: "none",
            background: '#484c86',
            color: 'white',
          },
        },
        outlinenavy : {
          border: '1px solid #484c86',
          background: 'transparent',
          color: '#484c86',
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
            bg: "#272c6f",
            borderColor: "inherit",
          },
          _focus: {
            color: 'white',
            bg: "#272c6f",
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
              color: '#484c86',
              borderRadius: 0,
              borderBottom: '3px solid #484c86' 
            },
            _hover: {
              color: '#484c86',
              borderRadius: 0,
              borderBottom: '3px solid #484c86' 
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
          bg: '#b6b9d2',
          _checked: {
            bg: '#484c86',
          },
        },
      }
    },
    Slider: {
      baseStyle: {
        thumb: {
          bg: '#636899'
        },
        filledTrack: {
          bg: '#636899'
        }
      }
    }
  },
})

export default theme
