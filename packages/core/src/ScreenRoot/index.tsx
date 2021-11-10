import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleProp,
} from 'react-native';
import Icon from '../Icon';
import MaskLayer from '../MaskLayer';

export interface ScreenRootProps {
  /**
   * 无需头部导航栏
   */
  noHeader?: boolean;
  /**
   * modal根结点样式，有时需要
   */
  rootStyle?: StyleProp<any>;
  /**
   * 导航栏中间标题，支持字符串和ReactNode
   */
  title?: string | React.ReactNode;
  // 导航栏左侧显示
  headerLeft?: React.ReactNode;
  // 导航栏右侧显示
  headerRight?: React.ReactNode;
  // 导航栏整体样式
  headerStyle?: StyleProp<any>;
  // 导航栏右侧显示样式
  headerRightStyle?: StyleProp<any>;
  // 页面内容样式
  containerStyle?: StyleProp<any>;
  loading?: boolean;
  // 默认左侧图标点击事件
  onBack?: () => void;
  // 图标颜色
  iconColor?: string;
  // screen背景色
  screenBackgroundColor?: string;
  // modal背景色
  modalBackgroundColor?: string;
  // 页面导航类型，screen  modal
  pageType?: 'screen' | 'modal';
  children?: React.ReactNode;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const ScreenRoot = (props: ScreenRootProps) => {
  const {
    // 无需头部导航栏
    noHeader = false,
    // modal根结点样式，有时需要
    rootStyle = {},
    // 导航栏中间标题，支持字符串和ReactNode
    title = '',
    // 导航栏左侧显示
    headerLeft = null,
    // 导航栏右侧显示
    headerRight = null,
    // 导航栏整体样式
    headerStyle = {},
    // 页面内容样式
    containerStyle = {},
    loading = false,
    // 默认左侧图标点击事件
    onBack = null,
    iconColor = '#333333',
    screenBackgroundColor = '#f9f9f9',
    modalBackgroundColor = '#fff',
    // 页面导航类型，screen  modal
    pageType = 'screen',
    children = null,
    // 状态栏主题 default light-content dark-content
    barStyle = 'dark-content',
    headerRightStyle = {},
  } = props;

  const isScreen = pageType === 'screen';
  const isIOS = Platform.OS === 'ios';

  const bgc = isScreen ? screenBackgroundColor : modalBackgroundColor;

  // 页面左侧
  const pageHeaderLeft = (
    <Pressable style={styles.headerLeft} onPress={() => onBack && onBack()}>
      <Icon
        xml={`
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
      <polyline fill="none" stroke="${iconColor}" stroke-width="2" points="26.871 58 19 65.935 26.871 73.935" transform="translate(-17 -57)"/>
      </svg>
      `}
        size={18}
      />
    </Pressable>
  );

  // modal弹框左侧
  const modalHeaderLeft = (
    <Pressable style={styles.headerLeft} onPress={() => onBack && onBack()}>
      <Icon name="close" size={16} color={iconColor} />
    </Pressable>
  );

  const renderHeader = () => {
    let centerContainer = null;
    if (typeof title === 'string') {
      centerContainer = (
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      );
    } else {
      centerContainer = title;
    }
    if (!noHeader) {
      return (
        <View
          style={[
            styles.header,
            {
              backgroundColor: bgc,
            },
            isScreen ? { elevation: 4 } : {},
            isIOS ? styles.iosHeader : '',
            headerStyle,
          ]}
        >
          <View style={styles.leftContainer}>
            {headerLeft ? headerLeft : isScreen ? pageHeaderLeft : modalHeaderLeft}
          </View>
          <View style={styles.centerContainer}>{centerContainer}</View>
          <View style={[styles.rightContainer, headerRightStyle]}>{headerRight}</View>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={[isScreen ? {} : { backgroundColor: modalBackgroundColor, ...rootStyle }, { flex: 1 }]}>
      <StatusBar barStyle={barStyle} backgroundColor="red" translucent={true} animated={true} />
      {loading && (
        <MaskLayer visible={loading} opacity={0.3}>
          <ActivityIndicator color="#333" size="large" style={{ marginTop: 300 }} />
        </MaskLayer>
      )}
      {renderHeader()}
      <View
        style={[
          {
            flex: 1,
            backgroundColor: bgc,
          },
          containerStyle,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalRootStyle: {
    backgroundColor: '#fff',
  },
  header: {
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
  },
  iosHeader: {
    height: 44,
    paddingTop: 0,
  },
  leftContainer: {
    flex: 1,
    width: 60,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  rightContainer: {
    flex: 1,
    width: 60,
    paddingRight: 10,
    flexDirection: 'row',
  },
});

export default ScreenRoot;
