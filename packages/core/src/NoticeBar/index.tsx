import React, { useState } from 'react';
import { StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import Icon from '../Icon';
import Marquee, { MarqueeProps } from './Marquee';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

export type NoticeBarProps = {
  children?: any;
  mode?: string;
  onPress?: any;
  icon?: any;
  action?: any;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  marqueeProps?: MarqueeProps;
};

const NoticeBar = (props: NoticeBarProps) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.func100 || '#fffada',
    smalCol: theme.colors.func600 || '#f4333c',
  });
  const [show, setShow] = useState(true);

  const onPress = () => {
    const { mode, onPress } = props;
    if (onPress) {
      onPress();
    }
    if (mode === 'closable') {
      setShow(false);
    }
  };
  let { children, mode, icon, style, action, marqueeProps, textStyle } = props;

  let operationDom: any = null;
  icon =
    typeof icon === 'undefined' ? (
      <Icon name="notification" color={theme.colors.func600 || '#f4333c'} size={15} />
    ) : (
      icon
    );
  if (mode === 'closable') {
    operationDom = (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.actionWrap}>{action ? action : <Text style={[styles.close]}>×</Text>}</View>
      </TouchableWithoutFeedback>
    );
  } else if (mode === 'link') {
    operationDom = <View style={styles.actionWrap}>{action ? action : <Text style={[styles.link]}>∟</Text>}</View>;
  }
  const main = (
    <View style={[styles.notice, style]} testID="RNE__NoticeBar__style">
      {icon && <View style={styles.left15}>{icon}</View>}
      <View style={[styles.container, icon ? styles.left6 : styles.left15]}>
        <Marquee style={[styles.content, textStyle]} text={children} {...marqueeProps} />
      </View>
      {operationDom}
    </View>
  );
  return (
    <View>
      {show ? (
        mode === 'closable' ? (
          main
        ) : (
          <TouchableWithoutFeedback onPress={onPress} testID="RNE__NoticeBar__link">
            {main}
          </TouchableWithoutFeedback>
        )
      ) : null}
    </View>
  );
};

type CreStyle = {
  bgColor: string;
  smalCol: string;
};

function createStyles({ bgColor, smalCol }: CreStyle) {
  return StyleSheet.create({
    notice: {
      backgroundColor: bgColor,
      height: 36,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      color: smalCol,
    },
    container: {
      flex: 1,
      marginRight: 15,
      overflow: 'hidden',
      width: 0, // ios bug: width size is wrong (usecase: with react-navigation).
    },
    content: {
      fontSize: 15,
      color: smalCol,
    },
    left6: {
      marginLeft: 5,
    },
    left15: {
      marginLeft: 15,
    },
    actionWrap: {
      marginRight: 15,
    },
    close: {
      color: smalCol,
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'left',
    },
    link: {
      transform: [{ rotate: '225deg' }],
      color: smalCol,
      fontSize: 10,
      fontWeight: '500',
      textAlign: 'left',
    },
  });
}

export default NoticeBar;
