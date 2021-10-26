import React from 'react';
import { View, ViewProps, ViewStyle, StyleSheet, Text } from 'react-native';
import { xLocation } from './utils';

interface CloudProps extends ViewProps {
  /** 显示的文本主体 */
  title: React.ReactNode;
  /** 三角是否在下面 */
  isDown: boolean;
  /** 三角形位置 */
  triangle: number;
  /** 排列方式 */
  isStart: xLocation;
  /** 颜色 */
  backgroundColor?: string;
  /** 圆角大小 */
  borderRadius?: number;
}

export default class Cloud extends React.Component<CloudProps> {
  constructor(props: CloudProps) {
    super(props);
  }
  render() {
    const { title, isDown, isStart, triangle, backgroundColor, borderRadius } = this.props;
    const style: ViewStyle = {
      flexDirection: isDown ? 'column-reverse' : 'column',
      alignItems: isStart,
    };
    const TextContainerStyle: ViewStyle = {
      position: triangle ? 'absolute' : 'relative',
      marginVertical: triangle ? 10 : 0,
      backgroundColor,
      borderRadius,
      paddingHorizontal: 10,
      paddingVertical: 10,
    };
    return (
      <View style={[style]}>
        <View
          style={[
            styles.cloudFoot,
            {
              transform: [{ rotateX: isDown ? '180deg' : '0deg' }],
              position: triangle ? 'absolute' : 'relative',
              left: triangle,
              zIndex: 9999,
              borderBottomColor: backgroundColor,
            },
          ]}
        />
        <View style={[{ ...TextContainerStyle }]}>
          <Text style={[styles.cloudText]}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cloudFoot: {
    width: 0,
    height: 0,
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: 'transparent',
    borderBottomWidth: 12,
    borderBottomColor: '#000',
  },
  cloudText: {
    color: '#fff',
  },
});
