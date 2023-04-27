import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Text,
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

import Box from '../Typography/Box';
import Flex from '../Flex';
import Icon from '../Icon';
import WingBlank from '../WingBlank';
import helpers from './helpers';
// import AnimateHeader from './AnimateHeader';

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
  /** 头部背景图片 */
  headerBackgroundImg: ImageSourcePropType;
  /** 头部高度 */
  headerHeight?: number;
  /** 左侧点击事件 */
  onPress?: () => void;
  /** 是否显示左侧图标 */
  showLeft?: boolean;
  /** 头部title */
  headerTitle?: ReactNode;
  statusBarStyle?: 'default' | 'dark-content' | 'light-content';
}>;

const ImageHeader: FC<ImageHeaderProps> = (props) => {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();

  const {
    headerRight,
    headerLeft,
    headerLeftColor = theme.colors.icon,
    headerBackgroundColor = theme.colors.transparent,
    headerBackgroundImg,
    headerHeight,
    children,
    onPress,
    showLeft = true,
    headerTitle,
    statusBarStyle = 'default',
  } = props;

  let DefaultHeaderLeft: ReactNode = <Icon name="left" size={px(20)} color={headerLeftColor} />;
  if (headerLeft) {
    if (typeof headerLeft === 'string') {
      DefaultHeaderLeft = <Text style={{ color: headerLeftColor, fontSize: px(16) }}>{headerLeft}</Text>;
    } else {
      DefaultHeaderLeft = headerLeft;
    }
  }

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <ImageBackground source={headerBackgroundImg} style={{ width: '100%', height: headerHeight }}>
        <Flex
          style={{
            paddingTop: isIOS ? insets.top + theme.spacing.x2 : theme.spacing.x5,
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
            <Text style={{ color: theme.colors.gray200, fontSize: px(16) }}>{headerTitle}</Text>
          ) : (
            headerTitle
          )}
          <Box flex={1} alignItems="flex-end">
            {headerRight}
          </Box>
        </Flex>
        <WingBlank>{children}</WingBlank>
      </ImageBackground>
    </>
  );
};
export default ImageHeader;
// ImageHeader.displayName = 'ImageHeader';

// export default Object.assign(ImageHeader, { AnimateHeader });
