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
  ViewProps,
} from 'react-native';
import Icon from '../Icon';
import { checked } from './svg';
import CardTitle from './Card.Title';
import CardActions from './Card.Actions';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

export interface CardProps extends ViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  selected?: boolean;
  children?: React.ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
  onLongPress?: TouchableOpacityProps['onLongPress'];
  selectedStyle?: {
    icon?: React.ReactNode;
    style?: ViewStyle;
    iconStyle?: ViewStyle;
  };
}

const Card = ({
  children,
  containerStyle,
  wrapperStyle,
  borderRadius,
  selected,
  onPress,
  onLongPress,
  selectedStyle = {
    icon: <Icon xml={checked} size={30} />,
    style: {},
    iconStyle: {},
  },
  ...attributes
}: CardProps) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.mask,
    shadowColor: theme.colors.gray300,
    selectBorderColor: theme.colors.primary_background,
  });
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
            ...selectedStyle?.style,
          },
        ]}
        pointerEvents="none"
      >
        <View style={[styles.selectedIndicator, selectedStyle?.iconStyle]}>{selectedStyle?.icon}</View>
      </Animated.View>
    );
  };

  return (
    <Container
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
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

function createStyles({ backgroundColor = '#fff', shadowColor = '#999', selectBorderColor = '#3578e5' }) {
  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      padding: 10,
      // margin: 10,
      marginBottom: 0,
      ...Platform.select({
        android: {
          elevation: 1,
        },
        default: {
          shadowColor: shadowColor,
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
      borderColor: selectBorderColor,
    },
    selectedIndicator: {
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
}

Card.Title = CardTitle;
Card.Actions = CardActions;

export default Card;
