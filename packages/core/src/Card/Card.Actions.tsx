import React, { Fragment } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Divider from '../Divider';
import map from 'lodash/map';
import Text from '../Typography/Text';

export type CardActionsProps = {
  actions?: Array<{
    text?: string;
    icon?: JSX.Element;
    onPress?: (e: GestureResponderEvent, index: number) => void;
    actionsTextStyle?: StyleProp<TextStyle>;
  }>;
  actionsContainerStyle?: StyleProp<ViewStyle>;
  driver?: boolean;
  children?: React.ReactNode;
};

const CardActions = ({ actions = [], actionsContainerStyle, children, driver = true }: CardActionsProps) => {
  return (
    <Fragment>
      {driver && <Divider style={StyleSheet.flatten({ marginTop: 15 })} lineStyle={{ backgroundColor: '#e6e6e6' }} />}
      {React.isValidElement(children) ? React.cloneElement(children) : null}
      <View style={[styles.actionsContainer, actionsContainerStyle]}>
        {map(actions, (item, index) => {
          return (
            <TouchableOpacity
              style={[styles.actionsTitleContainer, { marginLeft: index === 0 ? 0 : 10 }]}
              key={index}
              onPress={(event) => item.onPress && item.onPress(event, index)}
            >
              {item.icon && item.icon}
              {item.text && (
                <Text color="primary_background" style={[styles.actionsTitle, item.actionsTextStyle]}>
                  {item.text}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
  actionsTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
  },
  actionsTitle: {
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
  },
});

export default CardActions;
