import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableHighlight,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, {Component} from 'react';
import arrayTreeFilter from '../utils/arrayTreeFilter';
import Modal from '../Modal';
import {colors} from '../utils';

export declare type CascaderOneValue = string | number | undefined;
export declare type CascaderValue = CascaderOneValue[];

export interface ICascaderDataItem {
  label: React.ReactNode;
  value: CascaderOneValue;
  children?: ICascaderDataItem[];
}

export interface ISelectCascaderProps {
  onDismiss?: () => void;
  title?: string;
  dismissText?: string;
  okText?: string;
  value?: CascaderValue;
  onChange?: (value: CascaderValue, label: string) => void;
  visible: boolean;
  onVisibleChange?: () => {};
  data: ICascaderDataItem[];
  defaultValue?: CascaderValue | undefined;
  onOk?: (value: CascaderValue, label: string) => void;
  disabled?: boolean;
  cols?: number;
  pickerItemStyle?: StyleProp<TextStyle>;
}

export interface Istate {
  modalVisible: boolean;
  value: CascaderValue;
}

export default class SelectCascader extends Component<
  ISelectCascaderProps,
  Istate
> {
  static defaultProps = {
    dismissText: '取消',
    okText: '确定',
    title: '请选择',
    disabled: false,
    cols: 3,
  };
  state = {
    value: this.getValue(
      this.props.data,
      this.props.defaultValue || this.props.value,
    ),
    modalVisible: this.props.visible,
  };

  outerCtrl = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  componentWillReceiveProps(nextProps: ISelectCascaderProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value),
      });
    }
    if ('visible' in nextProps) {
      this.setState({
        modalVisible: nextProps.visible,
      });
    }
  }

  getSel(value: CascaderValue) {
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

  onValueChange = (itemValue: CascaderOneValue, index: number) => {
    const value = this.state.value.concat();
    value[index] = itemValue;
    const children = arrayTreeFilter(this.props.data, (c, level) => {
      return level <= index && c.value === value[level];
    });
    let data = children[index];
    let i;
    for (
      i = index + 1;
      data && data.children && data.children.length && i < this.props.cols!;
      i++
    ) {
      data = data.children[0];

      value[i] = data.value;
    }
    value.length = i;
    value[index] = itemValue;
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(value, this.getSel(value));
    }
  };

  getValue(d: ICascaderDataItem[], val: CascaderValue | undefined) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length || value.indexOf(undefined) > -1) {
      value = [];
      for (let i = 0; i < this.props.cols!; i++) {
        if (data && data.length) {
          value[i] = data[0].value;
          if (data[0].children) {
            data = data[0].children;
          }
        }
      }
    }
    return value;
  }

  getCols = () => {
    const {data, cols, pickerItemStyle} = this.props;
    const {value} = this.state;
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
        style={{flex: 1}}
        selectedValue={value[level]}
        onValueChange={(itemValue) => this.onValueChange(itemValue, level)}
        itemStyle={pickerItemStyle}>
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
      const {value} = this.state;
      this.props.onOk(value, this.getSel(value));
    }
  };

  render() {
    const {title, dismissText, okText, onDismiss} = this.props;
    const cols = this.getCols();
    return (
      <Modal
        visible={this.state.modalVisible}
        onClosed={() => {
          this.setState({modalVisible: false});
        }}>
        <View style={[styles.header]}>
          <TouchableHighlight
            onPress={onDismiss}
            style={[styles.headerItem]}
            underlayColor={colors.blue}>
            <Text>{dismissText}</Text>
          </TouchableHighlight>
          <View style={[styles.headerItem]}>
            <Text>{title}</Text>
          </View>
          <TouchableHighlight
            onPress={this.onOk}
            style={[styles.headerItem]}
            underlayColor={colors.blue}>
            <Text>{okText}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.list}>{cols}</View>
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
