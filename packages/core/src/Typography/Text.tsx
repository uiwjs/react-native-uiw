import { TextProps as RNTextProps, Text as BaseText, ColorValue } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import { isEmpty } from 'lodash';

type ColorSchemeProps = {
  [key: string]: string;
};

export interface BaseTextProps extends RNTextProps {
  color?: string;
}

const Text = (props: BaseTextProps) => {
  const { color = 'text', children, style, ...others } = props;
  const theme = useTheme<Theme>();

  const getColorScheme = (): ColorSchemeProps => {
    // app.ts 包裹了ThemeProvider传递了theme
    if (!isEmpty(theme.colors)) {
      return theme.colors;
    }
    return {
      [color]: '#000',
    };
  };

  return (
    <BaseText style={[{ color: getColorScheme()[color] }, style]} {...others}>
      {children}
    </BaseText>
  );
};
Text.displayName = 'Text';

export default Text;
