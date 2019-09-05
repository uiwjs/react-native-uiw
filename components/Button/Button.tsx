import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import color from 'color';
import { red, green, white, black } from '../styles/colors';

export interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'primary' | 'warning';
}

export default class ButtonView extends Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    activeOpacity: .9
  };
  render() {
    const { children, style, type, disabled, loading, activeOpacity, ...restProps } = this.props;
    let backgroundColor, textColor, borderColor, borderWidth;
    if (type === 'warning') {
      backgroundColor = color(red).rgb().string();
      textColor = color(white).rgb().string();
    }
    if (type === 'primary') {
      backgroundColor = color(green).rgb().string();
      textColor = color(white).rgb().string();
    }
    if(!type) {
      borderColor = color(black).alpha(0.32).rgb().string();
      borderWidth = 1;
    }
    if (disabled) {
      textColor = color(textColor).alpha(0.3).rgb().string();
    }
    const buttonStyle = { backgroundColor, borderColor, borderWidth };
    const textStyle = { color: textColor };
    return (
      <TouchableOpacity
        style={[styles.button, styles.content, buttonStyle, style]}
        disabled={disabled}
        activeOpacity={activeOpacity}
        {...restProps}
      >
        {loading && (
          <ActivityIndicator
            size={16}
            color={textColor}
            style={styles.icon}
          />
        )}
        {React.isValidElement(children) ? children : <Text style={[textStyle, styles.label]}>{children}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 3,
    borderRadius: 5,
    borderStyle: 'solid',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    marginLeft: 12,
    marginRight: -4,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16,
    fontSize: 17,
  },
});