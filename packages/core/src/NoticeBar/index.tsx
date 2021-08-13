import React, {Component} from 'react';
import { StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle, StyleSheet } from 'react-native';
import Icon from '../Icon';
import Marquee, { MarqueeProps } from './Marquee'


export type NoticeBarProps = {
  children?: any;
  mode?: string;
  onPress?: any;
  icon?: any;
  action?: any;
  style?: StyleProp<ViewStyle>
  marqueeProps?: MarqueeProps
};

export default class NoticeBar extends Component<NoticeBarProps>{
   constructor(props:any) {
    super(props)
    this.state = {
      show: true,
    }
  }

  onPress = () => {
    const { mode, onPress } = this.props
    if (onPress) {
      onPress()
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      })
    }
  }
  render() {
    let { children, mode, icon, style, action, marqueeProps } = this.props;
    let operationDom: any = null;
    icon = typeof icon === 'undefined' ? (<Icon fill="notification" color="#f4333c" />) : (icon);
    if (mode === 'closable') {
      operationDom = (
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.actionWrap}>
            {action ? action : <Text style={[styles.close]}>×</Text>}
          </View>
        </TouchableWithoutFeedback>
      )
    } else if (mode === 'link') {
      operationDom = (
        <View style={styles.actionWrap}>
          {action ? action : <Text style={[styles.link]}>∟</Text>}
        </View>
      )
    }
    const main = (
      <View style={[styles.notice, style]}>
        {icon && <View style={styles.left15}>{icon}</View>}
          <View
            style={[styles.container, icon ? styles.left6 : styles.left15]}>
            <Marquee
              style={styles.content}
              text={children}
              {...marqueeProps}
            />
          </View>
          {operationDom}
      </View>
      )
    return (
      <View>
        {mode === 'closable' ? (main) : (
          <TouchableWithoutFeedback onPress={this.onPress}>{ main}</TouchableWithoutFeedback>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notice: {
      backgroundColor: '#fffada',
      height: 36,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      marginRight: 15,
      overflow: 'hidden',
      width: 0, // ios bug: width size is wrong (usecase: with react-navigation).
    },
    content: {
      fontSize: 15,
      color: '#f4333c',
    },
    left6: {
      marginLeft: 5,
    },
    left15: {
      // marginLeft: 15,
    },
    actionWrap: {
      marginRight: 15,
    },
    close: {
      color: '#f4333c',
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'left',
    },
    link: {
      transform: [{ rotate: '225deg' }],
      color: '#f4333c',
      fontSize: 10,
      fontWeight: '500',
      textAlign: 'left',
    },
});