import type { Theme } from './types';

const theme: Theme = {
  media: {
    mobile: '',
    tablet: '',
    desktop: '',
  },
  palette: {
    primary: {
      base: '#000000',
      text: '#FFFFFF',
      background: {
        '100': '#FFFFFF',
        '200': '#DDDDDD',
        '300': '#AAAAAA',
      },
    },
    secondary: {
      base: '#FFFFFF',
      text: '#000000',
      background: {
        '100': '#000000',
        '200': '#333333',
        '300': '#555555',
      },
    },
  },
  zIndexes: {
    footer: 10,
    header: 10,
  },
};

export default theme;
