const theme = {
  config: {
    initialColorModeName: 'light',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#00ffaa',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        // primary: '#0cf',
      },
    },
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Helvetica Neue", Roboto, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [11, 15, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      color: 'text',
      fontSize: 1,
      mt: '1rem',
      mb: '1rem',
    },
    large: {
      fontSize: 2,
      mt: '1rem',
      mb: '1rem',
    },
    small: {
      fontSize: 0,
      mt: '5px',
      mb: '5px',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    H1: {
      textTransform: 'uppercase',
      variant: 'text.heading',
      fontSize: 6,
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4,
    },
    H4: {
      textTransform: 'uppercase',
      variant: 'text.heading',
      fontSize: 4,
      color: 'primary',
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 2,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 0,
      borderRadius: 2,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      cursor: 'pointer',
      color: 'text',
      bg: 'background',
      '&:hover': {
        bg: 'primary',
      },
    },
  },
}

export default theme
