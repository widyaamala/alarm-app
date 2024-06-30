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
  components: {
    Button: {
      baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        _focus: {
          outline: 0,
        },
        _hover: {
          border: "none",
        },
      },
    },
    Menu: {
      baseStyle: {
        item: {
          _hover: {
            color: 'white',
            bg: "#252526",
            borderColor: "inherit",
          },
          _focus: {
            color: 'white',
            bg: "#252526",
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
              color: '#252526',
              borderRadius: 0,
              borderBottom: '3px solid #252526' 
            },
            _hover: {
              color: '#252526',
              borderRadius: 0,
              borderBottom: '3px solid #252526' 
            },
            _focus: {
              outline: 0,
            },
          }
        },
      }
    },
    Button: {
      baseStyle: {
        fontWeight: 600,
        fontWeight:'14px',
        height: '40px',
        width: '80px',
        _focus: {
          outline: 0,
        },
        _hover: {
          border: "none",
        },
      },
    },
  },
})

export default theme
