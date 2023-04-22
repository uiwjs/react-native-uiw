import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Loader from '../Loader';
import { colors } from '../utils';
export interface dataSourceType {
  url: string;
  onClick?: () => void;
}
export type dotType = 'dot' | 'block';
export interface SwiperProps {
  /** 图片数据源 */
  dataSource?: dataSourceType[];
  /** 轮播图宽度 */
  width?: number;
  /** 轮播图高度 */
  height?: number;
  /** 播放时间 */
  time?: number;
  /** 圆角边框 */
  borderRadius?: number;
  /** 是否开启自动播放 */
  autoplay?: boolean;
  /** 指示点样式 dot: 圆点  block: 方块 */
  dotStyle?: dotType;
  /** 初始位置 */
  index?: number;
  /** 是否加载中 */
  loading?: boolean;
}
const Swiper = (porps: SwiperProps) => {
  const gitwidth = Dimensions.get('window').width;
  const {
    dataSource = [],
    width = gitwidth,
    height = 130,
    time = 6000,
    autoplay = true,
    borderRadius = 0,
    dotStyle = 'dot',
    loading = false,
    index = 0,
  } = porps;
  let [curIndex, setCurIndex] = useState(index);
  let timer = useRef<NodeJS.Timeout | undefined>();
  const scrollToRef: any = useRef();

  // 设置初始变量
  const onContentSizeChange = () => {
    if (scrollToRef && scrollToRef.current && index !== 0) {
      setCurIndex(index);
      scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: false });
    }
  };

  // 自动播放
  const autoPlay = useCallback(() => {
    clearInterval(timer.current as unknown as number);
    timer.current = setInterval(() => {
      let index = curIndex + 1;
      if (curIndex === dataSource.length - 1) {
        index = 0;
        setCurIndex(0);
      } else {
        setCurIndex(curIndex + 1);
      }
      scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: true });
    }, time);
  }, [curIndex]);

  // 开启播放
  useEffect(() => {
    if (autoplay && !loading) autoPlay();
  }, [autoPlay]);

  // 页面离开停止播放
  useEffect(() => {
    return () => {
      clearInterval(timer.current as unknown as number);
    };
  }, []);

  // 开始拖拽终止定时器
  const onScrollBeginDrag = () => {
    if (autoplay) {
      clearInterval(timer.current as unknown as number);
      // setCurIndex(0);
    }
  };

  // 停止拖拽开启定时器
  const onScrollEndDrag = () => {
    if (autoplay) autoPlay();
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist();
    let offSetX = e.nativeEvent.contentOffset.x;
    let mentWidth = e.nativeEvent.layoutMeasurement.width;
    let page = offSetX / mentWidth;
    // 第一张图片
    if (page === 0 && offSetX <= 0) {
      setCurIndex(dataSource.length - 1);
      scrollToRef.current.scrollTo({ x: dataSource.length * width, y: 0, animated: false }); // 让 ScrollView 定位到最后一张图片
    }
    // 最后一张图片
    if (page === dataSource.length) {
      setCurIndex(0);
      scrollToRef.current.scrollTo({ x: 0, y: 0, animated: false });
    } else {
      setCurIndex(page);
    }
  };

  // 点击原点跳转
  const onClickDot = (index: number) => {
    setCurIndex(index);
    scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: true });
  };
  return (
    <Loader loading={loading} rounded={5} maskColor="transparent">
      <View style={StyleSheet.flatten([styles.banner, { width, height }])}>
        <ScrollView
          ref={scrollToRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScrollBeginDrag={onScrollBeginDrag}
          onScrollEndDrag={onScrollEndDrag}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onContentSizeChange={onContentSizeChange}
        >
          {[...dataSource, dataSource[0]].map((item: dataSourceType, index: number) => {
            return (
              <View key={index} style={{ width, height }}>
                <View style={{ padding: 12 }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      item.onClick && item.onClick();
                    }}
                  >
                    <Image
                      key={index}
                      style={StyleSheet.flatten([{ borderRadius, width: '100%', height: '100%' }])}
                      resizeMode="cover"
                      source={typeof item.url === 'number' ? item.url : { uri: item.url }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.dotBox}>
          {dataSource.map((_: dataSourceType, index: number) => {
            return (
              <TouchableOpacity
                onPress={onClickDot.bind(this, index)}
                key={index}
                style={StyleSheet.flatten([
                  dotStyle === 'block' ? styles.block : styles.dot,
                  index === curIndex ? styles.dotSetColor : styles.dotColor,
                ])}
              />
            );
          })}
        </View>
      </View>
    </Loader>
  );
};
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  dotBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 22,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8,
  },
  block: {
    width: 16,
    height: 3,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8,
  },
  dotColor: {
    backgroundColor: colors.white,
  },
  dotSetColor: {
    backgroundColor: colors.colorsPalette.grey50,
  },
});
export default Swiper;
