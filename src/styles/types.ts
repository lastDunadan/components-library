import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export interface SingleColorPalette {
  base: string;
  background: {
    [key in '100' | '200' | '300']: string;
  };
  text: string;
}

export type Palette = {
  [key in BaseColors]: SingleColorPalette;
};

export type ViewportName = 'desktop' | 'tablet' | 'mobile';
export type ZIndexes = 'header' | 'footer';
export type BaseColors = 'primary' | 'secondary';

export interface Theme {
  palette: Palette;
  media: {
    [key in ViewportName]: string;
  };
  zIndexes: {
    [key in ZIndexes]: number;
  };
}
