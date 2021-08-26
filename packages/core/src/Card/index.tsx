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
  TouchableOpacityProps,
  Animated
} from 'react-native';
import Divider from '../Divider'
import Icon from '../Icon'
import { checked } from './svg'
import { colors } from '../utils'

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  title?: string
  titleStyle?: StyleProp<TextStyle>;
  showDriver?: boolean;
  borderRadius?: number;
  selected?: boolean;
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
  selected,
  onPress,
  onLongPress,
  ...attributes
}: CardProps) => {
  const Container: any = onPress || onLongPress ? TouchableOpacity : View;
  // 获取卡片圆角度数
  const getBorderRadius = () => {
    return !borderRadius ? 0 : borderRadius;
  }
  // 卡片标题
  const CardTitle = (
    <Text
      testID="cardTitle"
      style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}>
      {title}
    </Text>
  )

  // 卡片选中icon
  const renderSelection = () => {
    if (!selected) {
      return null;
    }
    return (
      <Animated.View
        style={[
          styles.selectedBorder,
          {
            opacity: 1,
            borderRadius: getBorderRadius()
          }
        ]}
        pointerEvents="none"
      >
        <View
          style={styles.selectedIndicator}
        >
          <Icon xml={checked}  size={30} />
        </View>
      </Animated.View>
    );
  }

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
      {renderSelection()}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: colors.colorsPalette.grey80,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: colors.colorsPalette.grey40,
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
    }),
  },
  title: {
    fontSize: 14,
    color: colors.colorsPalette.grey30,
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
  selectedBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.colorsPalette.violet30
  },
  selectedIndicator: {
    borderRadius: 999,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
});

export default Card