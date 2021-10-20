import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  LayoutChangeEvent,
  TouchableOpacity,
  Text,
  ScrollView,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
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
  const scrollView = useRef<ScrollView>();
  const ItemHeights = useRef<Array<number>>([]).current;
  const onPressORonScroll = useRef<'onPress' | 'onScroll'>('onScroll');
  const timer = useRef<NodeJS.Timeout>();
  const saveY = useRef<number>(0);
  const Y = useRef(new Animated.Value(0)).current;
  const currentY = useRef<number>(0);
  const isTouchEnd = useRef<boolean>(false);
  const isScroll = useRef<boolean>(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    onChange?.(current);
  }, [current]);
  useEffect(() => {
    if (value !== current) {
      const leng = value > date.length - 1 ? date.length - 1 : value;
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
  const location = (scrollY: number, index: number) => {
    scrollView.current?.scrollTo({ x: 0, y: scrollY - (style.containerHeight as number), animated: true });
    saveY.current = scrollY - (style.containerHeight as number);
    currentY.current = index;
    if (Platform.OS === 'android') {
      setCurrent(index);
    }
  };
  const scrollYEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (onPressORonScroll.current === 'onScroll') {
      return;
    }
    const scrollY = event.nativeEvent.contentOffset.y;
    const currentHeight = ItemHeights[currentY.current] - ItemHeights[0];
    if (scrollY - 2 <= currentHeight && scrollY + 2 >= currentHeight) {
      setCurrent(currentY.current);
    }
    onPressORonScroll.current = 'onScroll';
  };
  const setScrollY = () => {
    if (onPressORonScroll.current === 'onPress') {
      return false;
    }
    isTouchEnd.current = true;
    if (!isTouchEnd.current || !isScroll.current) {
      return false;
    }
    if (saveY.current <= ItemHeights[0] / 1.1) {
      scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
      saveY.current = 0;
      setCurrent(0);
      return false;
    }
    const spot = saveY.current / ItemHeights[0] + '';
    const integer = Number(spot.substr(0, spot.indexOf('.')));
    const decimal = Number(spot[spot.indexOf('.') + 1]);
    const itemIndex = decimal >= 9 ? integer + 1 : integer;
    scrollView.current?.scrollTo({ x: 0, y: ItemHeights[itemIndex] - ItemHeights[0], animated: true });
    setCurrent(itemIndex);
    saveY.current = ItemHeights[itemIndex] - ItemHeights[0];
    isScroll.current = false;
    isTouchEnd.current = false;
  };
  const getItemHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    ItemHeights?.push(height * ItemHeights.length + height);
  };
  return (
    <View style={{ paddingVertical: 10, height: (style.containerHeight as number) * lines + 10 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -1 }}
        ref={scrollView as React.LegacyRef<ScrollView>}
        onMomentumScrollEnd={scrollYEnd}
        scrollEventThrottle={16}
        onTouchEnd={setScrollY}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: Y } } }], {
          listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const flag = Platform.OS === 'android' ? false : !isTouchEnd.current;
            if (onPressORonScroll.current === 'onPress' || flag) {
              return false;
            }
            if (saveY.current === event.nativeEvent.contentOffset.y) {
              return false;
            }
            isScroll.current = false;
            saveY.current = event.nativeEvent.contentOffset.y;
            if (timer.current) {
              clearTimeout(timer.current!);
              timer.current = undefined;
            }
            timer.current = setTimeout(() => {
              isScroll.current = true;
              setScrollY();
              clearTimeout(timer.current!);
              timer.current = undefined;
            }, 160);
          },
          useNativeDriver: false,
        })}
      >
        {date.map((item, index) => (
          <TouchableOpacity
            onLayout={getItemHeight}
            key={index}
            activeOpacity={1}
            onPress={() => {
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
          </TouchableOpacity>
        ))}
        {new Array(lines - 1).fill('').map((item, index) => (
          <View key={index} style={style.containerUn} />
        ))}
        {/* style.containerHeight as number * lines + 10 */}
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
  },
  border: {
    backgroundColor: '#E6E6E6',
    height: 1,
    position: 'relative',
    zIndex: 999,
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
  },
  acTextStyle: {
    color: '#fd8a00',
  },
});

export default Picker;
