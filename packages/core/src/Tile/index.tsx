import React, { FC } from 'react';
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
  ImageProps,
  ImageSourcePropType,
} from 'react-native';
import Icon, { IconsProps } from '../Icon';
import TransitionImage from '../TransitionImage';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

export interface TileProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  /** 标题内容（可选）*/
  title?: string;
  /** 标题样式 */
  titleStyle?: StyleProp<TextStyle>;
  /** 图标（可选）*/
  icon?: IconsProps;
  /** 图标样式（可选） */
  iconContainerStyle?: StyleProp<ViewStyle>;
  /** 文本内容（可选） */
  caption?: React.ReactNode;
  /** 文本内容样式（可选） */
  captionStyle?: StyleProp<TextStyle>;
  /** 底部容器样式（可选） */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** 图片链接（可选） */
  imageSrc?: ImageSourcePropType | string | number;
  /** 图片容器样式（可选） */
  imageContainerStyle?: StyleProp<ViewStyle>;
  /** 文字行数（可选） */
  titleNumberOfLines?: number;
  /** Tile样式（可选） */
  containerStyle?: StyleProp<ViewStyle>;
  /** Tile宽度（可选） */
  width?: number;
  /** Tile高度（可选）*/
  height?: number;
  /** Tile透明度（可选）*/
  activeOpacity?: number;
  /** 继承image的api */
  imageProps?: Partial<ImageProps>;
  /** Custom ImageComponent for Tile. */
  ImageComponent?: typeof TransitionImage;
}

const Tile: FC<TileProps> = (props) => {
  const {
    imageSrc,
    icon,
    title,
    onPress,
    caption,
    activeOpacity,
    captionStyle,
    containerStyle,
    titleStyle,
    iconContainerStyle,
    contentContainerStyle,
    imageContainerStyle,
    titleNumberOfLines,
    imageProps = {},
    width = Dimensions.get('window').width,
    height = width * 0.8,
    ImageComponent = TransitionImage,
    ...attributes
  } = props;
  const theme = useTheme<Theme>();
  const styles = createStyles({
    titleColor: theme.colors.primary_text,
    captionColor: theme.colors.text,
  });
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
        source={imageSrc as ImageSourcePropType}
        containerStyle={StyleSheet.flatten([styles.imageContainer, imageContainerStyle && imageContainerStyle])}
        style={{
          // ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height: 200,
        }}
        {...(imageProps as Partial<ImageProps>)}
      >
        <View style={StyleSheet.flatten([iconContainerStyle && iconContainerStyle])}>{icon && <Icon {...icon} />}</View>
      </ImageComponent>

      <View
        style={[
          StyleSheet.flatten([styles.contentContainer, contentContainerStyle && contentContainerStyle]),
          { ...StyleSheet.absoluteFillObject },
        ]}
      >
        <Text
          testID="tileTitle"
          style={StyleSheet.flatten([styles.titleText, titleStyle && titleStyle])}
          numberOfLines={titleNumberOfLines}
        >
          {title}
        </Text>
        <Text
          testID="tileText"
          style={StyleSheet.flatten([styles.captionText, captionStyle && captionStyle])}
          numberOfLines={titleNumberOfLines}
        >
          {caption}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

type CreStyle = {
  titleColor: string;
  captionColor: string;
};
function createStyles({ titleColor, captionColor }: CreStyle) {
  return StyleSheet.create({
    imageContainer: {},
    titleText: {
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 5,
      color: titleColor,
    },
    captionText: {
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 5,
      color: captionColor,
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
}

export default Tile;
