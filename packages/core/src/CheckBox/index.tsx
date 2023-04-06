import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon, { IconsName } from '../Icon';
import { color } from '../utils';
import Div from '../Typography/Div';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

export interface CheckBoxProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle & ViewStyle>;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  size?: number;
  checkedIcon?: string | JSX.Element;
  unCheckedIcon?: string | JSX.Element;
  onChange?: (checked: boolean) => void;
}

export interface CheckBoxState {
  checked: boolean;
  controlChecked: 'props' | 'state';
}

function CheckBox(props: CheckBoxProps) {
  const theme = useTheme<Theme>();
  const [state, setState] = useState({
    checked: !!props.checked,
    controlChecked: 'props',
  });

  useEffect(() => {
    if (state.controlChecked === 'props') {
      setState({ ...state, checked: !!props.checked });
    }
    setState({ ...state, controlChecked: 'props' });
  }, []);

  const onPress = () => {
    const { onChange } = props;
    setState({ checked: !state.checked, controlChecked: 'state' });

    onChange && onChange(state.checked);
  };

  const {
    children,
    style,
    textStyle,
    checkedIcon = 'circle-check',
    unCheckedIcon = 'circle-o',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    checked,
    disabled,
    color: $color = theme.colors.primary_background || '#3578e5',
    size = 16,
    ...otherProps
  } = props;
  const { checked: $checked } = state;
  const iconName = ($checked ? checkedIcon : unCheckedIcon) as IconsName;
  const styIcon: ViewProps['style'] = {};
  if (children) {
    styIcon.marginRight = 6;
  }
  let colorIcon = $color;
  let divStyl: ViewProps['style'] = {};
  if (disabled) {
    colorIcon = color(colorIcon).alpha(0.52).rgb().string();
    divStyl.opacity = 0.5;
  }
  return (
    <TouchableOpacity disabled={disabled} {...otherProps} style={[styles.default, style]} onPress={onPress}>
      <View style={[styIcon]}>
        {typeof iconName === 'string' ? <Icon size={size} fill={colorIcon} name={iconName} /> : iconName}
      </View>
      {children && <Div children={children} style={[divStyl, textStyle]} />}
    </TouchableOpacity>
  );
}

// console.log('theme', theme);
// CheckBox.defaultProps = {
//   checkedIcon: 'circle-check',
//   unCheckedIcon: 'circle-o',
//   color: '#3578e5', //theme.colors.primary_background,
//   size: 16,
// };

export default CheckBox;

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
