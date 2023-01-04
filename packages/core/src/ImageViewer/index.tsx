import React, { useState, useMemo, useRef } from 'react';
import { StyleSheet, ViewProps, Dimensions, View, Image, Animated } from 'react-native';
import TransitionImage, { ImageProps } from '../TransitionImage';
import MaskLayer, { MaskLayerProps } from '../MaskLayer';
import { ActivityIndicator } from 'react-native';
export let ImageMainWidth = Dimensions.get('window').width;
export let ImageMainHeight = Dimensions.get('window').height;

const defaultImage = 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg';

export interface ImageViewerProps extends ViewProps {
  /** 图片宽度 */
  width?: number;
  /** 图片高度 */
  height?: number;
  /** 图像源（远程URL或本地文件资源 */
  src?: string | number;
}

function ImageViewer(props: ImageViewerProps) {
  const { width = 150, height = 150, src = defaultImage, ...others } = props;
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

  return (
    <View style={{}}>
      <TransitionImage
        style={{ width: width, height: height }}
        onPress={() => setVisible(true)}
        source={typeof src === 'number' ? src : { uri: src as string }}
        PlaceholderContent={<ActivityIndicator />}
        transition={true}
        transitionDuration={500}
      />
      <MaskLayer visible={visible} onDismiss={() => setVisible(false)} opacity={0.9}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={typeof src === 'number' ? src : { uri: src as string }}
          />
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
