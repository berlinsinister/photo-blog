import { IBreakpoints, ITheme } from '../types/theme';

const colorPalette = {
  beiges: {
    100: '#c4aaa0',
  },
  grays: {
    100: '#ececec',
    200: '#d2d4d4',
    300: '#9a9c9b',
    400: '#222222',
  },
  greens: {
    100: '#008080',
  },
  blues: {
    100: '#0000ff',
  },
};

const breakpoints: IBreakpoints = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1170px',
};

const theme: ITheme = {
  colors: {
    primary: {
      main: colorPalette.beiges[100],
    },
    secondary: {
      main: colorPalette.greens[100],
    },
    neutral: {
      main: colorPalette.grays[400],
      aux: colorPalette.grays[300],
      light: colorPalette.grays[200],
      lightest: colorPalette.grays[100],
    },
    action: {
      main: colorPalette.blues[100],
    },
  },

  devices: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    tablet: `screen and (max-width: ${breakpoints.tablet})`,
    laptop: `screen and (max-width: ${breakpoints.laptop})`,
    desktop: `screen and (max-width: ${breakpoints.desktop})`,
  },

  layout: {
    sizes: {
      width: { main: '1100px' },
      height: { main: '100vh - 200px' },
    },
    offsets: {
      margin: { main: '140px', scroll: '140px' },
      padding: { main: '50px' },
    },
  },
};

export default theme;
