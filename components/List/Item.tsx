import React, { Component } from 'react';
import { View, ViewProps, StyleSheet, TouchableHighlight, TouchableWithoutFeedbackProps, Text } from 'react-native';

export interface ListItemProps extends ViewProps, TouchableWithoutFeedbackProps {
  paddingLeft?: number;
  underlayColor?: string;
  extra?: React.ReactNode;
}

export default class ListItem extends Component<ListItemProps> {
  static defaultProps: ListItemProps = {
    underlayColor: '#DADADA',
    paddingLeft: 16,
  }
  render() {
    const { children, style, onPress, paddingLeft, underlayColor, extra, ...otherProps } = this.props;
    if (onPress) {
      return (
        <TouchableHighlight underlayColor={underlayColor} style={[styles.warpper, { paddingLeft }]} onPress={onPress} {...otherProps}>
          <View style={[styles.border, { flex: 1 }, style]} {...otherProps}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              {typeof children === 'string' ? <Text>{children}</Text> : children}
            </View>
            <View style={{ paddingRight: 10 }}>
              {typeof extra === 'string' ? <Text>{extra}</Text> : <View>{extra}</View>}
            </View>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <View style={[{ paddingLeft }, styles.warpper]}>
        <View style={[styles.border, style]} {...otherProps}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            {typeof children === 'string' ? <Text>{children}</Text> : children}
          </View>
          <View style={{ paddingRight: 10 }}>
            {typeof extra === 'string' ? <Text>{extra}</Text> : <View>{extra}</View>}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#fff'
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  }
});
