import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, View, ViewProps, StyleProp } from 'react-native';
import Icon, { IconsName } from '../Icon';
import { color } from '../utils';
import Div from '../Typography/Div';

export interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  checkedIcon?: string;
  unCheckedIcon?: string;
  onChange?: (checked: boolean) => void;
}

export interface CheckBoxState {
  checked: boolean;
}

export default class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = {
      checked: !!props.checked,
    }
  }
  static defaultProps = {
    checkedIcon: 'circle-check',
    unCheckedIcon: 'circle-check-o',
    color: '#008EF0',
  }
  onPress = () => {
    const { onChange } = this.props;
    this.setState({ checked: !this.state.checked }, () => {
      onChange && onChange(this.state.checked);
    });
  }
  render() {
    const { children, style, checkedIcon, unCheckedIcon, checked, disabled, color: $color, ...otherProps } = this.props;
    const { checked: $checked } = this.state;
    const iconName = (!!$checked ? checkedIcon : unCheckedIcon) as IconsName;
    const styIcon: ViewProps['style'] = {};
    if (children) {
      styIcon.marginRight = 6;
    }
    let colorIcon = $color;
    let divStyl: ViewProps['style'] = {};
    if (disabled) {
      colorIcon =  color(colorIcon).alpha(0.52).rgb().string();
      divStyl.opacity = 0.5;
    }
    return (
      <TouchableOpacity disabled={disabled} {...otherProps} style={[styles.default, style]} onPress={this.onPress}>
        <View style={[styIcon]}>
          <Icon size={16} fill={colorIcon} name={iconName} />
        </View>
        {children && <Div children={children} style={divStyl} />}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
})
