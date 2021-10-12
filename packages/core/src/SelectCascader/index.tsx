import { View, Text, StyleSheet, TouchableHighlight, StyleProp, TextStyle, ViewStyle } from 'react-native';
import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import arrayTreeFilter from '../utils/arrayTreeFilter';
import Modal from '../Modal';
import { colors } from '../utils';

export type SelectCascaderOneValue = string | number | undefined;
export type SelectCascaderValue = SelectCascaderOneValue[];

export interface ICascaderDataItem {
  label: React.ReactNode;
  value: SelectCascaderOneValue;
  children?: ICascaderDataItem[];
}

export interface SelectCascaderProps {
  /** 隐藏 */
  onDismiss?: () => void;
  /** 弹框标题 */
  title?: string;
  /** 取消button文字 */
  dismissText?: string;
  /** 确定button文字 */
  okText?: string;
  /** 自定义取消元素 */
  renderDismissNode: React.ReactNode;
  /** 自定义标题元素 */
  renderTitleNode: React.ReactNode;
  /** 自定义确定元素 */
  renderOkNode: React.ReactNode;
  /** 选中的值 */
  value?: SelectCascaderValue;
  /** 选中时执行此回调 */
  onChange?: (value: SelectCascaderValue, label: string) => void;
  /** 显示隐藏控制值 */
  visible: boolean;
  /** 列表数据 */
  data: ICascaderDataItem[];
  /** 默认选择的值 */
  defaultValue?: SelectCascaderValue | undefined;
  /** 确定选中的值 */
  onOk?: (value: SelectCascaderValue, label: string) => void;
  /** 列数 默认 3 */
  cols?: number;
  /** 选择器样式 */
  pickerItemStyle?: StyleProp<TextStyle>;
  /** 选择器头部样式 */
  headerStyle?: StyleProp<ViewStyle>;
  /** 点击蒙层是否关闭 */
  maskClosable?: boolean;
  /** 动作在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 动作有触摸操作时显示出来的底层的颜色 */
  underlayColor?: string;
}

export interface Istate {
  value: SelectCascaderValue;
  modalVisible: boolean;
  controlVisible: 'state' | 'props';
}

export default class SelectCascader extends Component<SelectCascaderProps, Istate> {
  static defaultProps = {
    dismissText: '取消',
    okText: '确定',
    title: '请选择',
    cols: 3,
    maskClosable: true,
  };
  state: Istate = {
    value: new Array<SelectCascaderOneValue>(),
    modalVisible: this.props.visible,
    controlVisible: 'props',
  };

  static getDerivedStateFromProps(props: SelectCascaderProps, state: Istate) {
    if (
      JSON.stringify(props.value) === JSON.stringify(state.value) &&
      state.controlVisible === 'props' &&
      state.modalVisible === props.visible
    ) {
      return null;
    }
    if (JSON.stringify(props.value) === JSON.stringify(state.value)) {
      return {
        modalVisible: state.controlVisible === 'props' ? props.visible : state.modalVisible,
        controlVisible: 'props',
      };
    }
    const getValue = (d: ICascaderDataItem[], val: SelectCascaderValue | undefined) => {
      let data = d || props.data;
      let value = val || props.value || props.defaultValue;
      if (!value || !value.length || value.indexOf(undefined) > -1) {
        value = [];
        for (let i = 0; i < props.cols!; i++) {
          if (data && data.length) {
            value[i] = data[0].value;
            if (data[0].children) {
              data = data[0].children;
            }
          }
        }
      }
      return value;
    };
    if (
      JSON.stringify(props.value) !== JSON.stringify(state.value) &&
      state.controlVisible === 'props' &&
      state.modalVisible === props.visible
    ) {
      return {
        value: getValue(props.data, props.value),
      };
    }
    return {
      value: getValue(props.data, props.value),
      modalVisible: state.controlVisible === 'props' ? props.visible : state.modalVisible,
      controlVisible: 'props',
    };
  }

  getSel(value: SelectCascaderValue) {
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren
      .map((v) => {
        return v.label;
      })
      .join(',');
  }

  onValueChange = (itemValue: SelectCascaderOneValue, index: number) => {
    const value = this.state.value.concat();
    value[index] = itemValue;
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    let i;
    for (i = index + 1; data && data.children && data.children.length && i < this.props.cols!; i++) {
      data = data.children[0];

      value[i] = data.value;
    }
    value.length = i;
    value[index] = itemValue;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value, this.getSel(value));
    }
  };

  getCols = () => {
    const { data, cols, pickerItemStyle } = this.props;
    const { value } = this.state;
    const childrenTree = arrayTreeFilter(data, (c, level) => {
      return c.value === value[level];
    }).map((c) => c.children);
    const needPad = cols! - childrenTree.length;
    if (needPad > 0) {
      for (let i = 0; i < needPad; i++) {
        childrenTree.push([]);
      }
    }
    childrenTree.length = cols! - 1;
    childrenTree.unshift(data);
    return childrenTree.map((children: any[] = [], level) => (
      <Picker
        key={level}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
        selectedValue={value[level]}
        onValueChange={(itemValue) => this.onValueChange(itemValue, level)}
        itemStyle={pickerItemStyle}
      >
        {children.map((item) => (
          <Picker.Item value={item.value} label={item.label} key={item.value} />
        ))}
      </Picker>
    ));
  };

  onDismiss = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  };
  onOk = () => {
    if (this.props.onOk) {
      const { value } = this.state;
      this.props.onOk(value, this.getSel(value));
    }
  };

  render() {
    const {
      title,
      dismissText,
      okText,
      activeOpacity = 1,
      underlayColor = '#f1f1f1',
      onDismiss,
      headerStyle,
      maskClosable,
      renderDismissNode,
      renderTitleNode,
      renderOkNode,
    } = this.props;

    const cols = this.getCols();
    return (
      <Modal
        visible={this.state.modalVisible}
        onClosed={() => {
          maskClosable && this.setState({ modalVisible: false, controlVisible: 'state' });
        }}
      >
        <>
          <View style={[styles.header, headerStyle]}>
            <TouchableHighlight
              activeOpacity={activeOpacity}
              underlayColor={underlayColor}
              onPress={onDismiss}
              style={[styles.headerItem]}
            >
              {renderDismissNode ?? <Text>{dismissText}</Text>}
            </TouchableHighlight>
            <View style={[styles.headerItem]}>{renderTitleNode ?? <Text>{title}</Text>}</View>
            <TouchableHighlight
              activeOpacity={activeOpacity}
              underlayColor={underlayColor}
              onPress={this.onOk}
              style={[styles.headerItem]}
            >
              {renderOkNode ?? <Text>{okText}</Text>}
            </TouchableHighlight>
          </View>
          <View style={styles.list}>{cols}</View>
        </>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
  },
  headerItem: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
