import React, { useState, useMemo, useRef } from 'react';
import { StyleSheet, ViewProps, Dimensions, View, Image, Animated } from 'react-native';
import TransitionImage, { ImageProps } from '../TransitionImage';
import MaskLayer, { MaskLayerProps } from '../MaskLayer';
import Swiper from '../Swiper';
import { ActivityIndicator } from 'react-native';
export let ImageMainWidth = Dimensions.get('window').width;
export let ImageMainHeight = Dimensions.get('window').height;

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
  const { width = 150, height = 150, src = defaultImage, defaultIndex = 0, ...others } = props;
  const [visible, setVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useMemo(() => {
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

  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {Array.isArray(src) ? (
          src.map((item: ImageViewerDataSourceProps, index: number) => {
            return (
              <TransitionImage
                key={index}
                style={{ width: width, height: height, flex: 1 }}
                onPress={() => setVisible(true)}
                source={{ uri: item.url }}
                PlaceholderContent={<ActivityIndicator />}
                transition={true}
                transitionDuration={500}
              />
            );
          })
        ) : (
          <TransitionImage
            style={{ width: width, height: height }}
            onPress={() => setVisible(true)}
            source={{ uri: imgUrl }}
            PlaceholderContent={<ActivityIndicator />}
            transition={true}
            transitionDuration={500}
          />
        )}
      </View>
      <MaskLayer visible={visible} onDismiss={() => setVisible(false)} opacity={0.9}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {Array.isArray(src) ? (
            <Swiper dataSource={src} height={200} autoplay={false} />
          ) : (
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: src }} />
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
});

export default ImageViewer;
