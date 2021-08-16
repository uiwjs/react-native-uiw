import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  ImageURISource,
  ImageProps,
  ImageSourcePropType
} from 'react-native';

import Icon, { IconsProps } from '../Icon';
import Image from '../Image';

export type TileProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps&{
    /** Text inside the tile. */
    title?: string;
    /** Icon Component Props. */
    icon?:  IconsProps;
    /** Width for the tile. */
    width?: number;
    /** Height for the tile. */
    height?: number;
    /** Styling for the title. */
    titleStyle?: StyleProp<TextStyle>;
    /** Styling for bottom container when not featured tile. */
    contentContainerStyle?: StyleProp<ViewStyle>;
      /** Styling for the image. */
      imageContainerStyle?: StyleProp<ViewStyle>;
    /** Number passed to control opacity on press. */
    activeOpacity?: number;
    /** Styling for the outer icon container. */
    iconContainerStyle?: StyleProp<ViewStyle>;
    /** Source for the image. */
    imageSrc?: ImageSourcePropType | string | number;
    /** Number of lines for Title. */
    titleNumberOfLines?: number;
    /** Styling for the outer tile container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Optional properties to pass to the image if provided e.g "resizeMode". */
    imageProps?: Partial<ImageProps>;
    /** Custom ImageComponent for Tile. */
    ImageComponent?: typeof React.Component;

    children?: any
  }

const Tile = ({
  imageSrc,
  icon,
  title,
  onPress,
  children,
  activeOpacity,
  containerStyle,
  titleStyle,
  iconContainerStyle,
  contentContainerStyle,
  imageContainerStyle,
  titleNumberOfLines,
  imageProps = {},
  width = Dimensions.get('window').width,
  height = width * 0.8,
  ImageComponent = Image,
  ...attributes
}: TileProps) => {
  console.log('11111',width)
  console.log('22222',height)
  console.log('33333',icon)
  console.log('44444',imageSrc)
  return (
    <TouchableOpacity
    {...attributes}
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={StyleSheet.flatten([
      {
        width: width,
        height: height,
      },
      containerStyle && containerStyle,
    ])}
  >
    <ImageComponent
        source={imageSrc}
        containerStyle={StyleSheet.flatten([
          styles.imageContainer,
          imageContainerStyle && imageContainerStyle,
        ])}
        style={{
          // ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height: 200
        }}
        {...(imageProps as Partial<ImageProps>)}
      >
      <View
        style={StyleSheet.flatten([
          iconContainerStyle && iconContainerStyle,
        ])}
      >
        {icon && <Icon {...icon} />}
      </View>
    </ImageComponent>

    <View
      style={StyleSheet.flatten([
        styles.contentContainer,
        contentContainerStyle && contentContainerStyle,
      ]),
      {...StyleSheet.absoluteFillObject,}
    }
    >
      <Text
        testID="tileTitle"
        style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])}
        numberOfLines={titleNumberOfLines}
      >
        {title}
      </Text>
      {children}
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red'
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 5,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Tile