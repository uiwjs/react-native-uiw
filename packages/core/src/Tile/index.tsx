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
  Image,
  ImageURISource,
  ImageProps,
  ImageSourcePropType
} from 'react-native';

import Icon, { IconsName } from '../Icon';

export type TileProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps&{
    /** Text inside the tile. */
    title?: string;
    /** Icon Component Props. */
    icon?: IconsName;
    /** Width for the tile. */
    width?: number;
    /** Height for the tile. */
    height?: number;
    /** Styling for the title. */
    titleStyle?: StyleProp<TextStyle>;
    /** Styling for bottom container when not featured tile. */
    contentContainerStyle?: StyleProp<ViewStyle>;
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
  titleNumberOfLines,
  imageProps = {},
  width = Dimensions.get('window').width,
  height = width * 0.8,
  ImageComponent = Image,
  ...attributes
}: TileProps) => {
  console.log('11111',width)
  console.log('22222',height)
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
      resizeMode="cover"
      source={imageSrc as ImageURISource}
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height: '100%'
      }}
      {...(imageProps as Partial<ImageProps>)}
    >
      {/* <View
        style={StyleSheet.flatten([
          styles.iconContainer,
          iconContainerStyle && iconContainerStyle,
        ])}
      >
        {icon && <Icon {...icon} />}
      </View> */}
    </ImageComponent>

    <View
      style={StyleSheet.flatten([
        styles.contentContainer,
        contentContainerStyle && contentContainerStyle,
      ])}
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