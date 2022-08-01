import keys from 'lodash/keys';
import map from 'lodash/map';
import React, { ReactNode, useMemo, useRef, useEffect } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  ScrollView,
  TouchableOpacity,
  TextStyle,
  SafeAreaView,
  Platform,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  I18nManager,
  Image,
  LayoutChangeEvent,
} from 'react-native';
import { useSetState } from 'ahooks';
import RnText from '../Typography/RnText';
import { last } from '../utils/utils';

export type ActionBarProps = {
  height?: number;
  backgroundColor?: string;
  actions?: Array<{
    label?: string;
    onPress?: () => void;
    fontStyle?: TextStyle;
    render?: ReactNode;
  }>;
  keepAbsoulte?: boolean;
  style?: ViewStyle;
  scroll?: boolean;
  useSafeArea?: boolean;
  focusIndex?: number;
};

function ActionBar({
  actions = [],
  style,
  keepAbsoulte = true,
  height = 48,
  backgroundColor = '#fff',
  scroll = false,
  useSafeArea = true,
  focusIndex = 0,
}: ActionBarProps) {
  const ios = Platform.OS === 'ios';
  const baseRef: any = useRef();

  const [state, setState] = useSetState<any>({
    itemsLayouts: {}, // items/layout
    contentOffset: 0, // 内容距离
    scrollContentWidth: 0, // 滚动距离
    containerWidth: 0,
    gradientOpacity: new Animated.Value(0),
    gradientOpacityLeft: new Animated.Value(0),
  });

  const { itemsLayouts, contentOffset, scrollContentWidth, containerWidth, gradientOpacity, gradientOpacityLeft } =
    state;

  const Component: any = scroll ? ScrollView : useSafeArea && ios ? SafeAreaView : View;

  const styles = createStyles({ height: height, backgroundColor: backgroundColor });

  useEffect(() => {
    scroll && onFocusIndex(focusIndex);
  }, [focusIndex]);

  // 跳转
  const onFocusIndex = (index = 0) => {
    const focusedItemLayout = itemsLayouts[index];
    if (focusedItemLayout && scroll) {
      const { x, width } = focusedItemLayout;
      if (x < contentOffset) {
        baseRef?.current?.scrollTo({ x: x - width });
      } else if (x + width > contentOffset + containerWidth) {
        const offsetChange = Math.max(0, x - (contentOffset + containerWidth));
        baseRef?.current?.scrollTo({ x: contentOffset + offsetChange + width });
      }
    }
  };

  // 计算 continer/width
  const onLayout = (event: LayoutChangeEvent) => {
    setState({
      containerWidth: event.nativeEvent.layout.width,
      gradientOpacity: new Animated.Value(scrollContentWidth > containerWidth ? 1 : 0),
    });
  };
  // 计算 items/layout
  const onItemsLayout = (event: LayoutChangeEvent, index: number) => {
    const layout = event.nativeEvent.layout || {};
    itemsLayouts[index] = layout;
    if (actions && keys(itemsLayouts).length === keys(actions).length) {
      onFocusIndex(focusIndex);
    }
  };

  const animateGradientOpacity = (offsetX: number, contentWidth: number, containerWidth: number) => {
    const overflow = contentWidth - containerWidth;
    const newValue = offsetX > 0 && offsetX >= overflow - 1 ? 0 : 1;
    const newValueLeft = offsetX > 0 ? 1 : 0;
    Animated.parallel([
      Animated.spring(gradientOpacity, {
        toValue: newValue,
        speed: 20,
        useNativeDriver: true,
      }),
      Animated.spring(gradientOpacityLeft, {
        toValue: newValueLeft,
        speed: 20,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onContentSizeChange = (contentWidth: number) => {
    if (scrollContentWidth !== contentWidth) {
      setState({
        scrollContentWidth: contentWidth,
      });
      if (contentWidth > containerWidth) {
        setState({
          gradientOpacity: new Animated.Value(1),
        });
      }
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    setState({
      contentOffset: contentOffset.x,
    });
    const offsetX = contentOffset.x;
    const contentWidth = contentSize.width;
    const containerWidth = layoutMeasurement.width;
    animateGradientOpacity(offsetX, contentWidth, containerWidth);
  };

  /**
   * 下面为dom部分
   *  renderGradient 左侧 或 右侧 阴影判断
   *  Items
   */

  const renderGradient = (left: boolean) => {
    const imageTransform = I18nManager.isRTL
      ? left
        ? undefined
        : [{ scaleX: -1 }]
      : left
      ? [{ scaleX: -1 }]
      : undefined;
    const heightToUse = 48 || height || '100%';
    return (
      <Animated.View
        pointerEvents="none"
        style={{
          opacity: left ? gradientOpacityLeft : gradientOpacity,
          width: 76,
          height: heightToUse,
          position: 'absolute',
          right: !left ? 0 : undefined,
          left: left ? 0 : undefined,
        }}
      >
        <Image
          source={require('./assets/gradientOverlay.png')}
          style={{
            width: 76,
            height: heightToUse,
            tintColor: '#fff',
            transform: imageTransform,
          }}
          resizeMode="stretch"
        />
      </Animated.View>
    );
  };

  const Items = useMemo(() => {
    return (
      <View
        style={[styles.container, { justifyContent: 'space-between', paddingHorizontal: scroll ? 0 : 20, ...style }]}
      >
        {map(actions, ({ label = '', onPress, render, fontStyle }, i) => {
          const prop = {
            onLayout: (event: LayoutChangeEvent) => onItemsLayout(event, i),
            key: i,
            style: { marginRight: scroll && !last(actions.length, i) ? 20 : 0 },
          };
          // 自定义
          if (render) {
            return <View {...prop}>{render}</View>;
          }
          return (
            <TouchableOpacity {...prop} onPress={onPress && onPress}>
              <RnText style={{ ...fontStyle }} label={label} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }, [actions]);

  return (
    <Component
      ref={baseRef}
      horizontal
      scrollEventThrottle={100}
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      onContentSizeChange={onContentSizeChange}
      style={[keepAbsoulte && styles.absoluteContainer]}
      onLayout={onLayout}
    >
      {Items}
      {scroll && renderGradient(true)}
      {scroll && renderGradient(false)}
    </Component>
  );
}

function createStyles({ height, backgroundColor }: any) {
  return StyleSheet.create({
    container: {
      height,
      flexDirection: 'row',
      alignItems: 'center',
    },
    absoluteContainer: {
      ...StyleSheet.absoluteFillObject,
      top: undefined,
      backgroundColor,
      shadowColor: '#43515C',
      shadowOpacity: 0.06,
      shadowRadius: 18.5,
    },
  });
}

export default ActionBar;
