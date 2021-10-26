import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Animated,
} from 'react-native';
import Icon from '../Icon';
import { checked } from './svg';
import { colors } from '../utils';
import CardTitle from './Card.Title';
import CardActions from './Card.Actions';

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
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
  };

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
            borderRadius: getBorderRadius(),
          },
        ]}
        pointerEvents="none"
      >
        <View style={styles.selectedIndicator}>
          <Icon xml={checked} size={30} />
        </View>
      </Animated.View>
    );
  };

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
          elevation: 2,
        },
      ])}
    >
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle && wrapperStyle])}>{children}</View>
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
  selectedBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.colorsPalette.violet30,
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

Card.Title = CardTitle;
Card.Actions = CardActions;

export default Card;
