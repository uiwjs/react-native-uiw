import React, { FC, PropsWithChildren, useContext } from 'react';
import { ThemeProvider as ShopifyThemeProvider, ThemeContext } from '@shopify/restyle';
import theme, { Theme } from '../theme';

const { lightTheme } = theme;
const ThemeProvider: FC<
  PropsWithChildren<{
    theme?: Theme;
  }>
> = ({ theme = lightTheme, children }) => {
  return <ShopifyThemeProvider theme={theme}>{children}</ShopifyThemeProvider>;
};

function useTheme() {
  const theme = useContext(ThemeContext);
  return theme as Theme;
}

ThemeProvider.displayName = 'ThemeProvider';
export { useTheme };
export default ThemeProvider;
