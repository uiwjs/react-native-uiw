import React, { Fragment } from 'react';
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
  Animated,
  GestureResponderEvent
} from 'react-native';
import Divider from '../Divider'
import Icon from '../Icon'
import { checked } from './svg'
import { colors } from '../utils'
import map from 'lodash/map'

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  title?: string
  titleStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
  selected?: boolean;
  children?: React.ReactNode;
  actions?: Array<{
    text?: string;
    icon?: JSX.Element;
    onPress?: (e: GestureResponderEvent, index: number) => void;
  }>;
  actionsContainerStyle?: StyleProp<ViewStyle>;
  actionsTextStyle?: StyleProp<ViewStyle>;
  onPress?: TouchableOpacityProps['onPress'];
  onLongPress?: TouchableOpacityProps['onLongPress'];
};


const Card = ({
  children,
  containerStyle,
  wrapperStyle,
  title,
  titleStyle,
  borderRadius,
  selected,
  actions,
  actionsContainerStyle,
  actionsTextStyle,
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
    <Fragment>
      <Text
        testID="cardTitle"
        style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}>
        {title}
      </Text>
      <Divider style={StyleSheet.flatten([styles.divider])} />
    </Fragment>
  )

  const CardActions = (
    <Fragment>
      <Divider style={StyleSheet.flatten({ marginTop: 15 })} />
      <View style={[styles.actionsContainer, actionsContainerStyle]}>
        {map(actions, (item, index) => {
          return (
            <TouchableOpacity
              style={[styles.actionsTitleContainer, { marginLeft: index === 0 ? 0 : 10 }]}
              key={index}
              onPress={(event) => item.onPress && item.onPress(event, index)}
            >
              {item.icon && item.icon}
              {item.text && <Text style={[styles.actionsTitle, actionsTextStyle]}>{item.text}</Text>}
            </TouchableOpacity>
          )
        })}
      </View>
    </Fragment>
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
          <Icon xml={checked} size={30} />
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
        {children}
      </View>
      {renderSelection()}
      {actions && actions.length > 0 && CardActions}
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
    color: colors.colorsPalette.grey10,
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
  actionsContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 15
  },
  actionsTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
  },
  actionsTitle: {
    color: colors.colorsPalette.violet30,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center'
  },
});

export default Card