import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewProps, StyleSheet } from 'react-native';
import { ButtonProps } from '../Button';

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export interface ButtonGroupProps extends ViewProps, ButtonProps {}

export default class ButtonGroup extends Component<ButtonGroupProps> {
  static defaultProps: ButtonGroupProps = {
    bordered: true,
  }
  render() {
    const { style, children, color, size, type, rounded, bordered, disabled, loading, ...otherProps } = this.props;
    const porps = { color, size, type, rounded, bordered, disabled };
    return (
      <View style={[styles.default, style]} {...otherProps}>
        {children && React.Children.map(children, (child: React.ReactNode, idx: number) => {
          if (!React.isValidElement(child)) return null;
          const childStyle: ButtonProps['style'] = {};
          if (idx === 0 || idx < (children as ButtonProps[]).length - 1) {
            childStyle.borderTopRightRadius = 0;
            childStyle.borderBottomRightRadius = 0;
          }
          if ((children as ButtonProps[]).length > 0 && idx !== 0) {
            childStyle.borderTopLeftRadius = 0;
            childStyle.borderBottomLeftRadius = 0;
          }
          if (!bordered) {
            childStyle.borderWidth = 0;
          } else {
            if ((idx > 0 && idx < (children as ButtonProps[]).length - 1) || idx === 0) {
              childStyle.borderRightWidth = StyleSheet.hairlineWidth;
            }
            if (idx > 0 && idx < (children as ButtonProps[]).length) {
              childStyle.borderLeftWidth = StyleSheet.hairlineWidth;
            }
          }
          return React.cloneElement(child, { ...child.props, ...porps, style: [child.props.style, childStyle] });
        })}
      </View>
    );
  }
}

// ButtonGroup.defaultProps = {
//   bordered: true
// };
