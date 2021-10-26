import React from 'react';
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

export default class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = {
      checked: !!props.checked,
      controlChecked: 'props',
    };
  }
  static defaultProps = {
    checkedIcon: 'circle-check',
    unCheckedIcon: 'circle-o',
    color: '#008EF0',
    size: 16,
  };
  static getDerivedStateFromProps(props: CheckBoxProps, state: CheckBoxState) {
    if (props.checked === state.checked && state.controlChecked === 'props') {
      return null;
    }
    if (state.controlChecked === 'props') {
      return {
        checked: props.checked,
      };
    }
    return {
      controlChecked: 'props',
    };
  }

  onPress = () => {
    const { onChange } = this.props;
    this.setState({ checked: !this.state.checked, controlChecked: 'state' }, () => {
      onChange && onChange(this.state.checked);
    });
  };
  render() {
    const {
      children,
      style,
      textStyle,
      checkedIcon,
      unCheckedIcon,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      checked,
      disabled,
      color: $color,
      size,
      ...otherProps
    } = this.props;
    const { checked: $checked } = this.state;
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
      <TouchableOpacity disabled={disabled} {...otherProps} style={[styles.default, style]} onPress={this.onPress}>
        <View style={[styIcon]}>
          {typeof iconName === 'string' ? <Icon size={size} fill={colorIcon} name={iconName} /> : iconName}
        </View>
        {children && <Div children={children} style={[divStyl, textStyle]} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
