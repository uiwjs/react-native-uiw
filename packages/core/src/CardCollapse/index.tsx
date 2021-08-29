import React, { useState, useEffect } from 'react';
import invoke from 'lodash/invoke';
import {
  StyleSheet,
  Animated,
  Easing,
  LayoutAnimation,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
  View,
  ViewProps,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from '../Icon';
import { colors } from '../utils';
import { down } from './svg';

export type CardCollapseProps = ViewProps & {
  /**
   * 是否折叠
   */
  isCollapsed: boolean;
  /**
   * 渲染的内容
   */
  children: JSX.Element | JSX.Element[];
  /**
   * 外层样式
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * 内容样式
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * 卡片圆角
   */
  itemBorderRadius?: number;
  /**
   * 点击卡片回调
   */
  onItemPress?: (index: number) => void;
  /**
   * 卡片折叠回调（值是未来折叠状态）
   */
  onCollapseWillChange?: (changed: boolean) => void;
  /**
   * 卡片折叠回调（值是目前状态）
   */
  onCollapseChanged?: (changed: boolean) => void;
  /**
   * 卡片是否可以点击
   */
  disablePresses?: boolean;
};

const PEEP = 8;
const DURATION = 300;
const MARGIN_BOTTOM = 24;
const buttonStartValue = 0.8;

export default function CardCollapse(props: CardCollapseProps) {
  const {
    isCollapsed,
    children,
    contentContainerStyle,
    itemBorderRadius,
    disablePresses,
    containerStyle,
    onCollapseChanged,
  } = props;

  const getAnimatedScales = (): Animated.Value[] => {
    return React.Children.map(children, (_item, index) => {
      return new Animated.Value(getItemScale(index));
    });
  };

  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [firstItemHeight, setFirstItemHeight]: any = useState(undefined);
  const animatedScale: Animated.Value = new Animated.Value(collapsed ? buttonStartValue : 1);
  const animatedOpacity: any = new Animated.Value(collapsed ? buttonStartValue : 1);
  const animatedContentOpacity: any = new Animated.Value(collapsed ? 0 : 1);
  const animatedScaleArray: Animated.Value[] = getAnimatedScales();
  const itemsCount = React.Children.count(children);
  const easeOut = Easing.bezier(0, 0, 0.58, 1);
  const Container: any = !disablePresses ? TouchableOpacity : View;
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [collapsed]);

  function getItemScale(index: number) {
    if (collapsed) {
      if (index === itemsCount - 2) {
        return 0.95;
      }
      if (index === itemsCount - 1) {
        return 0.9;
      }
    }
    return 1;
  }
  // 动画
  const animate = async () => {
    return Promise.all([animateValues(), animateCards()]);
  };

  const animateValues = () => {
    const newValue = collapsed ? buttonStartValue : 1;
    return new Promise((resolve) => {
      Animated.parallel([
        Animated.timing(animatedOpacity, {
          duration: DURATION,
          toValue: Number(newValue),
          useNativeDriver: true,
        }),
        Animated.timing(animatedScale, {
          toValue: Number(newValue),
          easing: easeOut,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(animatedContentOpacity, {
          toValue: Number(collapsed ? 0 : 1),
          easing: easeOut,
          duration: DURATION,
          useNativeDriver: true,
        }),
      ]).start(resolve);
    });
  };

  const animateCards = () => {
    const promises = [];
    for (let index = 0; index < itemsCount; index++) {
      const newScale = getItemScale(index);
      promises.push(
        new Promise((resolve) => {
          Animated.timing(animatedScaleArray[index], {
            toValue: Number(newScale),
            easing: easeOut,
            duration: DURATION,
            useNativeDriver: true,
          }).start(resolve);
        }),
      );
    }
    return Promise.all(promises);
  };
  // 关闭折叠
  const close = async () => {
    setCollapsed(true);
    invoke(props, 'onCollapseWillChange', true);
    if (onCollapseChanged) {
      await animate();
      onCollapseChanged(true);
    } else {
      animate();
    }
  };
  // 打开折叠
  const open = async () => {
    setCollapsed(false);
    invoke(props, 'onCollapseWillChange', false);
    if (onCollapseChanged) {
      await animate();
      onCollapseChanged(false);
    } else {
      animate();
    }
  };
  const getTop = (index: number) => {
    let start = 0;
    if (index === itemsCount - 2) {
      start += PEEP;
    }
    if (index === itemsCount - 1) {
      start += PEEP * 2;
    }
    return start;
  };

  const getStyle = (index: number): StyleProp<ViewStyle> => {
    const top = getTop(index);
    if (collapsed) {
      return {
        position: index !== 0 ? 'absolute' : undefined,
        top,
      };
    }
    return {
      marginBottom: MARGIN_BOTTOM,
      marginTop: index === 0 ? 40 : undefined,
    };
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const height: number = event.nativeEvent.layout.height;
    if (height) {
      setFirstItemHeight(height);
    }
  };

  const onItemPress = (index: number) => {
    invoke(props, 'onItemPress', index);
  };

  const renderItem = (item: JSX.Element | JSX.Element[], index: number) => {
    return (
      <Animated.View
        key={index}
        onLayout={index === 0 ? onLayout : undefined}
        style={[
          Platform.OS === 'ios' && styles.containerShadow,
          getStyle(index),
          {
            borderRadius: Platform.OS === 'ios' ? itemBorderRadius : undefined,
            alignSelf: 'center',
            zIndex: itemsCount - index,
            transform: [{ scaleX: animatedScaleArray[index] }],
            width: Dimensions.get('screen').width - 40,
            height: collapsed ? firstItemHeight : undefined,
          },
        ]}
        collapsable={false}
      >
        <Container
          style={[contentContainerStyle, styles.card, { borderRadius: itemBorderRadius }]}
          onPress={() => disablePresses && onItemPress(index)}
        >
          <Animated.View style={index !== 0 ? { opacity: animatedContentOpacity } : undefined} collapsable={false}>
            {item}
          </Animated.View>
        </Container>
      </Animated.View>
    );
  };
  return (
    <View style={containerStyle}>
      <View style={{ marginBottom: PEEP * 3 }}>
        <Animated.View
          style={{
            position: 'absolute',
            right: 0,
            opacity: animatedOpacity,
            transform: [{ scale: animatedScale }],
          }}
        >
          {collapsed ? null : (
            <TouchableOpacity onPress={close}>
              <Icon xml={down} size={30} />
            </TouchableOpacity>
          )}
        </Animated.View>
        {React.Children.map(children, (item, index) => {
          return renderItem(item, index);
        })}
        {collapsed && (
          <TouchableOpacity
            onPress={open}
            activeOpacity={1}
            style={[
              styles.touchable,
              {
                height: firstItemHeight ? firstItemHeight + PEEP * 2 : undefined,
                zIndex: itemsCount,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
    width: '100%',
  },
  containerShadow: {
    backgroundColor: colors.white,
    shadowColor: colors.colorsPalette.dark40,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { height: 5, width: 0 },
  },
  card: {
    overflow: 'hidden',
    flexShrink: 1,
  },
});
