import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Text, SafeAreaView, StatusBar, TouchableOpacity, View, Platform } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

import Box from '../Typography/Box';
import Flex from '../Flex';
import Icon from '../Icon';
import WingBlank from '../WingBlank';
import helpers from './helpers';

const { px, isIOS } = helpers;
export type ImageHeaderProps = PropsWithChildren<{
  /** 头部右侧内容 */
  headerRight?: ReactNode;
  /** 头部左侧内容 */
  headerLeft?: ReactNode;
  /** 左侧返回键和字体颜色 */
  headerLeftColor?: string;
  /** 头部底色，默认为透明 */
  headerBackgroundColor?: string;
  /** 设置全局背景色 */
  safeBgColor?: string;
  /** 头部高度 */
  headerHeight?: number;
  /** 左侧点击事件 */
  onPress?: () => void;
  /** 是否显示左侧图标 */
  showLeft?: boolean;
  /** 头部title */
  headerTitle?: ReactNode;
  /** 设置状态栏颜色 */
  statusBarStyle?: 'default' | 'dark-content' | 'light-content';
}>;

const ImageHeader: FC<ImageHeaderProps> = (props) => {
  const theme = useTheme<Theme>();

  const {
    headerRight,
    headerLeft,
    headerLeftColor = theme.colors.icon,
    headerBackgroundColor = theme.colors.transparent,
    headerHeight,
    children,
    onPress,
    showLeft = true,
    headerTitle,
    statusBarStyle = 'default',
    safeBgColor,
  } = props;

  let DefaultHeaderLeft: ReactNode = <Icon name="left" size={px(20)} color={headerLeftColor} />;
  if (headerLeft) {
    if (typeof headerLeft === 'string') {
      DefaultHeaderLeft = <Text style={{ color: headerLeftColor, fontSize: px(16) }}>{headerLeft}</Text>;
    } else {
      DefaultHeaderLeft = headerLeft;
    }
  }
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 70 : StatusBar.currentHeight;

  return (
    <>
      <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: safeBgColor }}>
        <StatusBar translucent backgroundColor={safeBgColor} barStyle={statusBarStyle} />
      </View>
      <SafeAreaView style={{ width: '100%', height: headerHeight, backgroundColor: safeBgColor }}>
        <Flex
          style={{
            paddingTop: isIOS ? theme.spacing.x2 : theme.spacing.x5,
            paddingBottom: theme.spacing.x2,
            paddingRight: theme.spacing.x3,
            backgroundColor: headerBackgroundColor,
          }}
        >
          {showLeft ? (
            <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={{ flex: 1, paddingLeft: theme.spacing.x2 }}>
              {DefaultHeaderLeft}
            </TouchableOpacity>
          ) : (
            <Box flex={1} />
          )}
          {typeof headerTitle === 'string' ? (
            <Text style={{ color: headerLeftColor, fontSize: px(16) }}>{headerTitle}</Text>
          ) : (
            headerTitle
          )}
          <Box flex={1} alignItems="flex-end">
            {headerRight}
          </Box>
        </Flex>
        <WingBlank>{children}</WingBlank>
      </SafeAreaView>
    </>
  );
};
export default ImageHeader;
