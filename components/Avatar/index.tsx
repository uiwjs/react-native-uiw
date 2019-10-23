import React, { Component } from 'react';
import { View, ViewProps, Image, ImageProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defalut: {
    backgroundColor: '#e4e4e4',
    overflow: 'hidden',
  },
});

const defaultImage = require('./assets/user.png')

export interface AvatarProps extends ViewProps {
  imageProps?: ImageProps;
  src?: string | number;
  size?: number;
  rounded?: number;
  shape?: 'circle' | 'square',
}

export default class Avatar extends Component<AvatarProps> {
  static defaultProps: AvatarProps = {
    src: defaultImage,
    shape: 'square',
    rounded: 3,
    size: 40,
  }
  render() {
    const { style, src, size, shape, rounded, imageProps, ...otherProps } = this.props;
    return (
      <View
        style={[
          styles.defalut, style, { width: size, height: size },
          { borderRadius: shape === 'circle' ? size! / 2 : rounded },
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
