import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import Button,{ ButtonProps } from '../Button';

export interface RightButtonProps extends ButtonProps {
  // 是否显示
  isShow?: boolean,
  // 右侧按钮文案
  actionName?: string,
  /** 宽度 */
  width: number
}

interface RightButtonState {
  
}

export default class RightButton extends React.PureComponent<RightButtonProps, RightButtonState> {

  constructor(props: RightButtonProps) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { isShow=false, actionName='搜索',width, ...other } = this.props
    return (
      <View style={[styles.rightStyle,{width: width-10, opacity: Number(isShow)}]}>
        <Button type="primary" {...other} style={{flex: 1,paddingHorizontal: 10,}}>{actionName}</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rightStyle: {
    marginLeft: 10,
    height: 40,
  },
});
