import React, { Component } from 'react';
import { View, ViewProps, Image, ImageProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defalut: {
    backgroundColor: '#e4e4e4',
    overflow: 'hidden',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const defaultImage = require('./assets/user.png');

export interface AvatarProps extends ViewProps {
  /** React Native `Image` 组件 Props */
  imageProps?: ImageProps;
  /** 图像源（远程URL或本地文件资源）。 */
  src?: string | number;
  /**
   * 尺寸
   * @default 40
   */
  size?: number;
  /**
   * 设置圆角
   * @default 3
   */
  rounded?: number;
  /**
   * 指定头像的形状
   * @default square
   */
  shape?: 'circle' | 'square';
}

export default class Avatar extends Component<AvatarProps> {
  static defaultProps: AvatarProps = {
    src: defaultImage,
    shape: 'square',
    rounded: 3,
    size: 40,
  };
  render() {
    const { style, src, size, shape, rounded, imageProps, ...otherProps } = this.props;
    return (
      <View
        style={[
          styles.defalut,
          style,
          { width: size, height: size },
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
