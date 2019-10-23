import React, { Component } from 'react';
import { View, ViewProps, Image, ImageProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defalut: {
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
    overflow: 'hidden',
  },
});

export interface AvatarProps extends ViewProps {
  imageProps?: ImageProps;
  src?: string | number;
  size?: number;
  shape?: 'circle' | 'square',
}

export default class Avatar extends Component<AvatarProps> {
  static defaultProps: AvatarProps = {
    src: '',
    shape: 'square',
    size: 40,
  }
  render() {
    const { style, src, size, shape, imageProps, ...otherProps } = this.props;
    return (
      <View
        style={[
          styles.defalut, style, { width: size, height: size },
          shape === 'circle' ? { borderRadius: size! / 2 } : {}
        ]}
        {...otherProps}
      >
        <Image
          style={{ width: size, height: size }}
          source={typeof src === 'number' ? src : { uri: src as string }}
          {...imageProps}
        />
      </View>
    );
  }
}
