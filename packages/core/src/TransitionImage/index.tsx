import React, { useState } from 'react';
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageProps as RNImageProps,
  ViewStyle,
  StyleProp,
  ImageStyle,
} from 'react-native';

export type ImageProps = RNImageProps & {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  ImageComponent?: React.ComponentType<any>;
  PlaceholderContent?: React.ReactElement<any>;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  transitionDuration?: number;
  children?: React.ReactNode;
};

type ImageState = {
  placeholderOpacity: Animated.Value;
};

export default function TransitionImage(props: ImageProps & Partial<ImageProps>) {
  const [state, _] = useState<ImageState>({
    placeholderOpacity: new Animated.Value(1),
  });

  const onLoad = (e: any) => {
    const { transition, onLoad, transitionDuration } = props;
    if (!transition) {
      state.placeholderOpacity.setValue(0);
      return;
    }

    Animated.timing(state.placeholderOpacity, {
      toValue: 0,
      duration: transitionDuration,
      useNativeDriver: true,
    }).start();
    onLoad && onLoad(e);
  };

  const {
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? TouchableOpacity : View,
    placeholderStyle,
    PlaceholderContent,
    containerStyle,
    childrenContainerStyle = null,
    style = {},
    ImageComponent = ImageNative,
    children,
    ...attributes
  } = props;

  const hasImage = Boolean(attributes.source);
  const { width, height, ...styleProps } = StyleSheet.flatten(style);

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      <ImageComponent
        testID="RNE__Image"
        transition={true}
        transitionDuration={360}
        {...attributes}
        onLoad={onLoad}
        style={StyleSheet.flatten([
          StyleSheet.absoluteFill,
          {
            width: width,
            height: height,
          } as StyleProp<ImageStyle>,
          styleProps,
        ])}
      />

      <Animated.View
        pointerEvents={hasImage ? 'none' : 'auto'}
        accessibilityElementsHidden={hasImage}
        importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
        style={[
          styles.placeholderContainer,
          {
            opacity: hasImage ? state.placeholderOpacity : 1,
          },
        ]}
      >
        <View
          testID="RNE__Image__placeholder"
          style={StyleSheet.flatten([style, styles.placeholder, placeholderStyle])}
        >
          {PlaceholderContent}
        </View>
      </Animated.View>

      <View testID="RNE__Image__children__container" style={childrenContainerStyle ?? style}>
        {children}
      </View>
    </Component>
  );
}

TransitionImage.displayName = 'Image';
TransitionImage.getSize = ImageNative.getSize;
TransitionImage.getSizeWithHeaders = ImageNative.getSizeWithHeaders;
TransitionImage.prefetch = ImageNative.prefetch;
TransitionImage.abortPrefetch = ImageNative.abortPrefetch;
TransitionImage.queryCache = ImageNative.queryCache;
TransitionImage.resolveAssetSource = ImageNative.resolveAssetSource;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
