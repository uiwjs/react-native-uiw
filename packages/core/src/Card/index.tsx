import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import Divider from '../Divider'

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  title?: string
  titleStyle?: StyleProp<TextStyle>;
  showDriver?: boolean;
  borderRadius?: number;
  children?: React.ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
  onLongPress?: TouchableOpacityProps['onLongPress'];
};

const Card = ({
  children,
  containerStyle,
  wrapperStyle,
  title,
  titleStyle,
  showDriver = false,
  borderRadius,
  onPress,
  onLongPress,
  ...attributes
}: CardProps) => {
  const Container: any = onPress || onLongPress ? TouchableOpacity : View;
  // 获取卡片圆角度数
  const getBorderRadius = () => {
    return borderRadius === undefined ? 12 : borderRadius;
  }
  // 卡片标题
  const CardTitle = (
    <Text
      testID="cardTitle"
      style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}>
      {title}
    </Text>
  )

  return (
    <Container
      {...attributes}
      onPress={onPress}
      delayPressIn={10}
      activeOpacity={0.6}
      style={StyleSheet.flatten([
        styles.container,
        containerStyle && containerStyle,
        // 圆角
        {
          borderRadius: getBorderRadius(),
          elevation: 2
        }
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {title && CardTitle}
        {
         title && showDriver && <Divider style={StyleSheet.flatten([styles.divider])} />
        }
        {children}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: '#F5F5F5',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#D3D3D3',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
    }),
  },
  title: {
    fontSize: 14,
    color: '#808080',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    marginBottom: 15,
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
});

export default Card