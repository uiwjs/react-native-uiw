import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider as ShopifyThemeProvider } from '@shopify/restyle';
import theme, { Theme } from '../theme';

const { lightTheme } = theme;
const ThemeProvider: FC<
  PropsWithChildren<{
    theme?: Theme;
  }>
> = ({ theme = lightTheme, children }) => {
  return <ShopifyThemeProvider theme={theme}>{children}</ShopifyThemeProvider>;
};
ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
