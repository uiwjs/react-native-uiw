import React, { useState, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, ViewProps, Dimensions, View, Image, Animated, Text, TouchableOpacity } from 'react-native';
import TransitionImage from '../TransitionImage';
import MaskLayer from '../MaskLayer';
import Swiper from '../Swiper';
import Icon from '../Icon';
import { ActivityIndicator } from 'react-native';
export let ImageMainWidth = Dimensions.get('window').width;
export let ImageMainHeight = Dimensions.get('window').height;
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  HandlerStateChangeEvent,
  PinchGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

const defaultImage = 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg';

export interface ImageViewerDataSourceProps {
  url: string;
  [key: string]: any;
}

export interface ImageViewerProps extends ViewProps {
  /** 图片宽度 */
  width?: number;
  /** 图片高度 */
  height?: number;
  /** 图像源（远程URL或本地文件资源 */
  src?: string | ImageViewerDataSourceProps[];
  /** 默认显示第几张图片 */
  defaultIndex?: number;
}

function ImageViewer(props: ImageViewerProps) {
  const { width = 150, height = 150, src = defaultImage, defaultIndex = 0 } = props;
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  const [canVisible, setCanVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const scale = useRef(new Animated.Value(1)).current; // 初始缩放比例为 1
  const lastScale = useRef(1); // 上一次的缩放比例

  const rotateAngle = useRef(new Animated.Value(0)).current; // 初始化旋转角度为 0
  const lastAngle = useRef(0); // 保存上次的旋转角度

  const onPinchGestureEvent = (event: PinchGestureHandlerGestureEvent) => {
    if (event.nativeEvent.scale) {
      // 更新缩放比例
      scale.setValue(lastScale.current * event.nativeEvent.scale);
    }
  };

  const onPinchHandlerStateChange = (event: HandlerStateChangeEvent<PinchGestureHandlerEventPayload>) => {
    if (event.nativeEvent.oldState === 4 && event.nativeEvent.state === 5) {
      // 手势结束后，保存缩放比例
      lastScale.current *= event.nativeEvent.scale;
      scale.setValue(lastScale.current);
    }
  };

  const onRotate = () => {
    lastAngle.current += 90; // 旋转 90 度
    Animated.timing(rotateAngle, {
      useNativeDriver: true,
      toValue: lastAngle.current,
      duration: 250,
    }).start();
  };

  useEffect(() => {
    if (!visible) {
      fadeAnim.setValue(0);
      return;
    }
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const imgUrl = useMemo(() => {
    if (Array.isArray(src)) {
      return src[defaultIndex].url;
    }
    return src;
  }, [src]);

  const PinchGestureHandlerChild = (url: string) => (
    <PinchGestureHandler onGestureEvent={onPinchGestureEvent} onHandlerStateChange={onPinchHandlerStateChange}>
      <Animated.View
        style={[
          {
            transform: [
              { scale },
              { rotate: rotateAngle.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) },
            ],
          },
          styles.imageContainer,
        ]}
      >
        <Image style={styles.image} source={{ uri: url }} />
      </Animated.View>
    </PinchGestureHandler>
  );

  return (
    <View style={{}}>
      <TransitionImage
        style={{ width: width, height: height }}
        onPress={() => canVisible && setVisible(true)}
        source={{ uri: imgUrl }}
        PlaceholderContent={<ActivityIndicator />}
        transition={true}
        transitionDuration={500}
        onError={(e) => {
          if (e?.nativeEvent?.error) setCanVisible(false);
        }}
      />
      <MaskLayer visible={visible} onDismiss={() => setVisible(false)} opacity={0.9}>
        {typeof src === 'string' ? (
          <View style={{ position: 'absolute', top: 50, right: 30 }}>
            <TouchableOpacity onPress={onRotate}>
              <Icon color="#fff" size={18} name="reload" />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {Array.isArray(src) ? (
            <Swiper dataSource={src} height={200} autoplay={false} index={index} />
          ) : (
            PinchGestureHandlerChild(imgUrl)
          )}
        </Animated.View>
      </MaskLayer>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: ImageMainHeight / 3 - 20,
    height: ImageMainHeight / 3 - 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ImageViewer;
