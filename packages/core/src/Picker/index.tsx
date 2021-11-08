import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  LayoutChangeEvent,
  Text,
  ScrollView,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
  Pressable,
} from 'react-native';

export interface PickerData {
  label?: string;
  render?: (key: string, record: PickerData, index: number) => React.ReactNode;
  [key: string]: any;
}

export interface PickerProps {
  /** 显示几行, 默认 3 */
  lines?: number;
  /** 指定需要显示的 key, 默认使用 data 的 label 属性 */
  key?: string;
  /** 需要渲染的数据 */
  data?: Array<PickerData>;
  /** item 容器样式 */
  containerStyle?: {
    /** 激活的容器样式 */
    actived?: StyleProp<ViewStyle>;
    /** 未激活的容器样式 */
    unactived?: StyleProp<ViewStyle>;
  };
  /** 容器的文本样式 */
  textStyle?: {
    /** 激活的文本样式 */
    actived?: StyleProp<TextStyle>;
    /** 未激活的文本样式 */
    unactived?: StyleProp<TextStyle>;
  };
  /** 选中当前项的下标 */
  value?: number;
  /** 是否只读 */
  readonly?: boolean;
  /** value 改变时触发 */
  onChange?: (value: number) => unknown;
}

const Picker = (props: PickerProps) => {
  const {
    lines = 3,
    key = 'label',
    data = new Array<PickerData>(),
    containerStyle = {},
    textStyle = {},
    value = 0,
    onChange,
    readonly = false,
  } = props;
  const Y = useRef(new Animated.Value(0)).current;
  const scrollView = useRef<ScrollView>();
  const ItemHeights = useRef<Array<number>>([]).current;
  const saveY = useRef<number>(0);
  const timer = useRef<NodeJS.Timeout>();
  const onPressTimer = useRef<NodeJS.Timeout>();
  const onPressORonScroll = useRef<'onPress' | 'onScroll'>('onScroll');
  const currentY = useRef<number>(0);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    onChange?.(current);
    onPressORonScroll.current = 'onScroll';
    clearTimeout(timer.current!);
    timer.current = undefined;
    clearTimeout(onPressTimer.current!);
  }, [current]);
  useEffect(() => {
    if (value !== current) {
      let leng = value > data.length - 1 ? data.length - 1 : value;
      leng = leng < 0 ? 0 : leng;
      location((style.containerHeight as number) * (leng + 1), leng);
    }
  }, [value]);
  const style = useMemo(() => {
    const containerUn = StyleSheet.flatten([styles.container, containerStyle.unactived]);
    const containerAc = StyleSheet.flatten([styles.container, styles.border, containerStyle.actived]);
    const textUn = StyleSheet.flatten([styles.textStyle, textStyle.unactived]);
    const textAc = StyleSheet.flatten([styles.textStyle, styles.acTextStyle, textStyle.unactived, textStyle.actived]);
    const containerHeight = containerUn.height || 50;
    return {
      containerAc,
      containerUn,
      textUn,
      textAc,
      containerHeight,
    };
  }, [containerStyle, textStyle]);
  const getItemHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const round = Math.round(height);
    ItemHeights.push(round * ItemHeights.length + round);
  };
  const location = (scrollY: number, index: number) => {
    saveY.current = scrollY - (style.containerHeight as number);
    currentY.current = index;
    let an = Platform.OS === 'android' && { duration: 0 };
    let os = Platform.OS === 'ios' && { animated: false };
    scrollView.current?.scrollTo({ x: 0, y: scrollY - (style.containerHeight as number), ...an, ...os });
  };
  const setScrollHandle = (val: number) => {
    const spot = val / ItemHeights[0];
    if (spot <= 0.6) {
      scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
      setCurrent(0);
      return false;
    }
    const stringSpot = spot + '.0';
    const integer = Math.floor(spot);
    const decimal = Number(stringSpot[stringSpot.indexOf('.') + 1]);
    const itemIndex = decimal >= 6 ? integer + 1 : integer;
    scrollView.current?.scrollTo({ x: 0, y: ItemHeights[itemIndex] - ItemHeights[0], animated: true });
    saveY.current = ItemHeights[itemIndex] - ItemHeights[0];
    setCurrent(itemIndex);
    clearTimeout(timer.current!);
    timer.current = undefined;
  };
  const listener = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (onPressORonScroll.current === 'onPress') {
      clearTimeout(onPressTimer.current!);
      onPressTimer.current = setTimeout(() => {
        setCurrent(currentY.current);
        clearTimeout(onPressTimer.current!);
      }, 16);
      return;
    }
    saveY.current = event.nativeEvent.contentOffset.y;
    if (timer.current) {
      clearTimeout(timer.current!);
      timer.current = undefined;
    }
    timer.current = setTimeout(() => {
      setScrollHandle(saveY.current);
    }, 160);
  };
  const onTouchEnd = () => {
    if (readonly) return;
    if (Platform.OS === 'ios') {
      if (onPressORonScroll.current === 'onPress') {
        setCurrent(currentY.current);
        return;
      }
      if (timer.current) return;
      setScrollHandle(saveY.current);
    }
  };
  const getBlankHeight = useMemo(() => {
    if (lines % 2) {
      return {
        top: Math.floor(lines / 2),
        center: Number((lines / 2).toFixed()),
        bottom: Math.floor(lines / 2),
      };
    }
    return {
      top: lines / 2 - 1,
      center: lines / 2 + 1,
      bottom: lines / 2,
    };
  }, [lines]);

  return (
    <View style={{ paddingVertical: 0, height: (style.containerHeight as number) * lines }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollView as React.LegacyRef<ScrollView>}
        scrollEventThrottle={16}
        onTouchEnd={Platform.OS === 'ios' ? onTouchEnd : undefined}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: Y } } }], {
          listener,
          useNativeDriver: false,
        })}
        scrollEnabled={!readonly}
      >
        {
          <Pressable
            style={[style.containerUn, { height: (style.containerHeight as number) * getBlankHeight.top }]}
            onPressOut={Platform.OS === 'android' ? onTouchEnd : undefined}
          />
        }
        {data.map((item, index) => (
          <Pressable
            onLayout={getItemHeight}
            key={index}
            onPressOut={Platform.OS === 'android' ? onTouchEnd : undefined}
            onPress={() => {
              if (readonly) return;
              // if (timer.current) return;
              clearTimeout(onPressTimer.current!);
              onPressORonScroll.current = 'onPress';
              location(ItemHeights![index], index);
            }}
          >
            {React.isValidElement(item.render?.(item[key], item, index)) ? (
              item.render?.(item[key], item, index)
            ) : (
              <View style={style.containerUn}>
                <Text style={current === index ? style.textAc : style.textUn}>{item[key]}</Text>
              </View>
            )}
          </Pressable>
        ))}
        {
          <Pressable
            style={[style.containerUn, { height: (style.containerHeight as number) * getBlankHeight.bottom }]}
            onPressOut={Platform.OS === 'android' ? onTouchEnd : undefined}
          />
        }
      </ScrollView>
      <View style={[style.containerAc, { top: (-style.containerHeight as number) * getBlankHeight.center }]} />
      <View style={[style.containerAc, { top: (-style.containerHeight as number) * (getBlankHeight.center - 1) }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  border: {
    backgroundColor: '#E6E6E6',
    height: 1,
    position: 'relative',
    zIndex: 999,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  acTextStyle: {
    color: '#1677ff',
  },
});

export default Picker;
