import { View, Modal, Dimensions, GestureResponderEvent } from "react-native";
import React, { Component } from "react";
import Cascader from 'rmc-cascader'
import PopupCascader from 'rmc-cascader/lib/Popup'
import PopupStyles from 'rmc-picker/lib/PopupStyles'
import { ICascaderProps, CascaderValue } from 'rmc-cascader/lib/CascaderTypes'
import arrayTreeFilter from 'array-tree-filter';
import Button from '../Button';

export interface Istate {
}

const COLS = 3;

export interface ISelectCascaderProps extends  Omit<ICascaderProps, 'onChange'> {
  onDismiss?: () => {};
  title?: string;
  dismissText?: string;
  okText?: string;
  onChange?: (value: CascaderValue, label: string) => void;
  visible?: boolean,
  onVisibleChange?: () => {}
}

export default class SelectCascader extends Component<ISelectCascaderProps, Istate> {
  static defaultProps = {
    dismissText: '取消',
    okText: '确定',
    title: '请选择'
  };
  state = {
    value: '',
    visible: false,
  }

  outerCtrl = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  componentWillReceiveProps(nextProps: ISelectCascaderProps) {

  }

  getSel(value: any) {
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren.map((v) => {
      return v.label;
    }).join(',');
  }

  onDismiss = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss()
    }
    this.outerCtrl()
  }

  onChange = (value: any) => {
    if (this.props.onChange) {
      this.props.onChange(value, this.getSel(value))
    }
    this.outerCtrl()
  }

  render() {
    const { data, title, dismissText, okText, defaultValue } = this.props;
    const cascader = (
      <Cascader
        data={data}
        cols={COLS}
        defaultValue={defaultValue}
      />
    );
    return (

      <PopupCascader
        styles={PopupStyles}
        cascader={cascader}
        value={this.props.value}
        onDismiss={this.onDismiss}
        onChange={this.onChange}
        title={title}
        dismissText={dismissText}
        okText={okText}
        
      >

        <Button
          // editable={false}
          onPress={this.outerCtrl}
        >
          点击显示
        </Button>
      </PopupCascader>
    );
  }
}

export { Cascader }