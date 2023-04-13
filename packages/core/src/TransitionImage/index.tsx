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
  NativeSyntheticEvent,
  ImageLoadEventData,
  ImageErrorEventData,
  ActivityIndicator,
  Text,
} from 'react-native';
import Icon from '../Icon';

export type ImageProps = RNImageProps & {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  ImageComponent?: React.ComponentType<ImageProps>;
  PlaceholderContent?: React.ReactElement<any>;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<ViewStyle>;
  transition?: boolean;
  transitionDuration?: number;
  disabled?: boolean;
  children?: React.ReactNode;
};

type ImageState = {
  placeholderOpacity: Animated.Value;
  isLoading: boolean;
  hasError: boolean;
};

export default function TransitionImage(props: ImageProps & Partial<ImageProps>) {
  const [state, setState] = useState<ImageState>({
    placeholderOpacity: new Animated.Value(1),
    isLoading: true,
    hasError: false,
  });

  const onLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { transition, onLoad, transitionDuration } = props;
    if (!transition) {
      setState({ ...state, isLoading: false });
      state.placeholderOpacity.setValue(0);
      return;
    }

    Animated.timing(state.placeholderOpacity, {
      toValue: 0,
      duration: transitionDuration,
      useNativeDriver: true,
    }).start();
    setState({ ...state, isLoading: false });
    onLoad && onLoad(e);
  };

  const onError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    setState({ ...state, isLoading: false, hasError: true });
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
    disabled = false,
    ...attributes
  } = props;

  const hasImage = Boolean(attributes.source);
  const { width, height, ...styleProps } = StyleSheet.flatten(style);

  const PlaceholderContentLoading = (
    <View style={styles.errorContainer}>
      <ActivityIndicator />
      <Text style={{ color: '#fff', marginTop: 8 }}>加载中...</Text>
    </View>
  );

  const PlaceholderContentError = (
    <View style={styles.errorContainer}>
      <Icon name="circle-close-o" color="#fff" size={24} />
      <Text style={{ color: '#fff', marginTop: 8 }}>加载失败</Text>
    </View>
  );

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
      disabled={disabled || state.isLoading || state.hasError}
    >
      <ImageComponent
        testID="RNE__Image"
        transition={true}
        transitionDuration={360}
        {...attributes}
        onLoad={onLoad}
        onError={onError}
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
          {state.isLoading && PlaceholderContentLoading}
          {state.hasError && PlaceholderContentError}
          {!state.isLoading && !state.hasError && PlaceholderContent}
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
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(50, 50, 51, .88)',
    height: '100%',
    width: '100%',
  },
});
