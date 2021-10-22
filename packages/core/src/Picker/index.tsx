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

export interface PickerDate {
  label?: string;
  render?: (key: string, record: PickerDate, index: number) => React.ReactNode;
  [key: string]: any;
}

export interface PickerProps {
  /** 显示几行, 默认 3 */
  lines?: number;
  /** 指定需要显示的 key, 默认使用 data 的 label 属性 */
  key?: string;
  /** 需要渲染的数据 */
  date?: Array<PickerDate>;
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
  /** value 改变时触发 */
  onChange?: (value: number) => unknown;
}

const Picker = (props: PickerProps) => {
  const {
    lines = 3,
    key = 'label',
    date = new Array<PickerDate>(),
    containerStyle = {},
    textStyle = {},
    value = 0,
    onChange,
  } = props;
  const Y = useRef(new Animated.Value(0)).current;
  const scrollView = useRef<ScrollView>();
  const ItemHeights = useRef<Array<number>>([]).current;
  const saveY = useRef<number>(0);
  const timer = useRef<NodeJS.Timeout>();
  const onPressORonScroll = useRef<'onPress' | 'onScroll'>('onScroll');
  const currentY = useRef<number>(0);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    onChange?.(current);
    onPressORonScroll.current = 'onScroll';
  }, [current]);
  useEffect(() => {
    if (value !== current) {
      let leng = value > date.length - 1 ? date.length - 1 : value;
      leng = leng < 0 ? 0 : leng;
      location((style.containerHeight as number) * (leng + 1), leng);
      setCurrent(leng);
    }
  }, [value]);
  const style = useMemo(() => {
    const containerUn = StyleSheet.flatten([styles.container, containerStyle.unactived]);
    const containerAc = StyleSheet.flatten([styles.container, styles.border, containerStyle.actived]);
    const textUn = StyleSheet.flatten([styles.textStyle, textStyle.unactived]);
    const textAc = StyleSheet.flatten([styles.textStyle, styles.acTextStyle, textStyle.unactived]);
    const containerHeight = containerUn.height || 50;
    return {
      containerAc,
      containerUn,
      textUn,
      textAc,
      containerHeight,
    };
  }, [containerStyle, textStyle]);
  const getItemHeight = (event: LayoutChangeEvent, index: number) => {
    const { height } = event.nativeEvent.layout;
    const round = Math.round(height);
    ItemHeights[index] = round * ItemHeights.length + round;
  };

  const location = (scrollY: number, index: number) => {
    saveY.current = scrollY - (style.containerHeight as number);
    currentY.current = index;
    let an = Platform.OS === 'android' && { duration: 0 };
    let os = Platform.OS === 'ios' && { animated: false };
    scrollView.current?.scrollTo({ x: 0, y: scrollY - (style.containerHeight as number), ...an, ...os });
    setCurrent(index);
  };
  const setScrollHandle = (val: number) => {
    const spot = val / ItemHeights[0];
    if (spot <= 0.6) {
      scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
      setCurrent(0);
      return false;
    }
    const stringSpot = spot + '';
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
    if (onPressORonScroll.current === 'onPress') return;
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
    if (Platform.OS === 'ios') {
      if (onPressORonScroll.current === 'onPress') {
        setCurrent(currentY.current);
        return;
      }
      if (timer.current) return;
      setScrollHandle(saveY.current);
    }
  };
  return (
    <View style={{ paddingVertical: 10, height: (style.containerHeight as number) * lines + 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollView as React.LegacyRef<ScrollView>}
        scrollEventThrottle={16}
        onTouchEnd={Platform.OS === 'ios' ? onTouchEnd : undefined}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: Y } } }], {
          listener,
          useNativeDriver: false,
        })}
      >
        {date.map((item, index) => (
          <Pressable
            onLayout={(event: LayoutChangeEvent) => getItemHeight(event, index)}
            key={index}
            onPressOut={Platform.OS === 'android' ? onTouchEnd : undefined}
            onPress={() => {
              if (timer.current) return;
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
            style={[style.containerUn, { height: (style.containerHeight as number) * (lines - 1) }]}
            onPressOut={Platform.OS === 'android' ? onTouchEnd : undefined}
          />
        }
      </ScrollView>
      <View style={[style.containerAc, { top: (-style.containerHeight as number) * lines + 10 }]} />
      <View style={[style.containerAc, { top: (-style.containerHeight as number) * (lines - 1) + 10 }]} />
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
    color: '#fd8a00',
  },
});

export default Picker;
