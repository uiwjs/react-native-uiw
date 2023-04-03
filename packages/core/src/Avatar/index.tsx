import React from 'react';
import { View, ViewProps, Image, ImageProps, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

const defaultImage = require('./assets/user.png');

export interface AvatarProps extends ViewProps {
  /* React Native `Image` 组件 Props */
  imageProps?: ImageProps;
  /* 图像源（远程URL或本地文件资源） */
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
  loading?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    color: theme.colors.gray100,
  });

  const {
    style,
    src = defaultImage,
    size = 40,
    shape = 'square',
    rounded = 3,
    imageProps,
    loading = false,
    ...otherProps
  } = props;
  return (
    <View
      style={[
        styles.default,
        style,
        { width: size, height: size, borderRadius: shape === 'circle' ? size / 2 : rounded },
      ]}
      {...otherProps}
    >
      <View
        style={[
          styles.default,
          {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: size,
            height: size,
            zIndex: loading ? 2023 : 0,
          },
        ]}
      >
        {loading && <ActivityIndicator size="small" color={theme.colors.gray300} />}
      </View>

      <Image
        style={{ width: size, height: size, position: 'absolute', top: 0, left: 0 }}
        source={typeof src === 'number' ? src : { uri: src as string }}
        {...imageProps}
      />
    </View>
  );
};

export default Avatar;

type CreStyle = {
  color: string;
};

function createStyles({ color }: CreStyle) {
  return StyleSheet.create({
    default: {
      backgroundColor: color,
      overflow: 'hidden',
    },
  });
}
