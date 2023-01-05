import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableHighlight,
  TouchableWithoutFeedbackProps,
  Text,
} from 'react-native';

export interface ListItemProps extends ViewProps, TouchableWithoutFeedbackProps {
  underlayColor?: string;
  paddingLeft?: number;
  extra?: React.ReactNode;
  extraStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  /**
   * 单元格大小
   */
  size?: 'small' | 'default' | 'large';
}

export default class ListItem extends React.PureComponent<ListItemProps> {
  static defaultProps: ListItemProps = {
    underlayColor: '#DADADA',
    // paddingLeft: 16,
  };
  render() {
    const {
      children,
      style,
      onPress,
      paddingLeft,
      underlayColor,
      extra,
      extraStyle,
      touchableStyle,
      size,
      ...otherProps
    } = this.props;
    let sizeStyle = {};
    if (size && styles[size]) {
      sizeStyle = styles[size];
    }
    const cell = (
      <View style={[styles.border, sizeStyle, style]} {...otherProps}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {React.Children.toArray(children).map((child, idx) => {
            if (typeof children === 'string') {
              return <Text key={idx}>{children}</Text>;
            }
            if (!React.isValidElement(child)) {
              return null;
            }
            return React.cloneElement(child, { key: idx });
          })}
        </View>
        {extra && (
          <View style={{ paddingRight: 10 }}>
            {typeof extra === 'string' ? (
              <Text style={extraStyle}>{extra}</Text>
            ) : (
              <View style={[{ flexDirection: 'row', alignItems: 'center' }, extraStyle]}>{extra}</View>
            )}
          </View>
        )}
      </View>
    );

    if (onPress) {
      return (
        <TouchableHighlight
          underlayColor={underlayColor}
          style={[styles.warpper, { paddingLeft }, touchableStyle]}
          onPress={onPress}
          {...otherProps}
        >
          {cell}
        </TouchableHighlight>
      );
    }
    return <View style={[{ paddingLeft }, styles.warpper]}>{cell}</View>;
  }
}

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#fff',
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  default: {
    paddingVertical: 12,
  },
  small: {
    paddingVertical: 10,
  },
  large: {
    paddingVertical: 16,
  },
});
