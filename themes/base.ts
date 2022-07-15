export default {
    breakpoints: ["639px", "831px", "1023px", "1440px"],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
      blue6: '#0029FF',
      orange6: "#EF692B",
      green5: "#6EFF95",
      yellow6: "#F6FB18",
      gray1: "#F5F5F5",
      gray2: "#E9E9E9",
      gray3: '#CCCCCC',
      gray9: "#272727",
      gray10: "#0B0B0B",
      white: '#FFFFFF',
      black: '#000000',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
      body: "system-ui, sans-serif",
      heading: "inherit",
      monospace: "IBM Plex Mono, monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: "0 0 4px rgba(0, 0, 0, .125)",
      large: "0 0 24px rgba(0, 0, 0, .125)",
    },
    variants: {},
    boxSizes: {
      defaultBox: {
        // bg: ['blue', 'yellow', 'red', 'green'],
        width: [
          "calc(100vw - 4rem)", 
          "calc(100vw - 9.6rem)", 
          "calc(100vw - 19.2rem)",
          "calc(100vw - 19.2rem)",
        ],
        maxWidth: [null, null, '1440px', '1600px'],
        mx: "auto",
        '@media screen and (min-width: 1440px)': {
          width: "calc(100vw - 19.2rem) !important",
        }
      },
      expandedBox: {
        // bg: ['yellow', 'blue', 'red', 'purple'],
        width: [
          "calc(100vw - 2rem)", 
          "calc(100vw - 4.8rem)", 
          "calc(100vw - 9.6rem)",
          "calc(100vw - 19.2rem)"
        ],
        left: [
          '1rem',
          '2.4rem',
          '4.8rem',
          '9.6rem'
        ],
      },
      reducedBox: {
        width: [
          "calc(100vw - 4rem)", 
          "calc(100vw - 9.6rem)", 
          "calc(100vw - 19.2rem)",
          "calc(70vw)"
        ],
        mx: "auto",
      },
    },
    text: {
      paragraph: {
        fontSize: ["1.4rem", "1.4rem", "1.9rem"],
        lineHeight: ["2.2rem", "2.2rem", "2.85rem"],
        fontFamily: 'IBM Plex Mono'
      },
    },
    buttons: {
      primary: {
        color: "white",
        bg: "primary",
      },
    },
    misc: {
        invertedProtocolLogo: false
    }
  };
  