import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { arrayTreeFilter } from '../utils/utils';
import Flex from '../Flex';
import H6 from '../Typography/H6';
import Modal from '../Modal';
import WheelPicker from './components/WheelPicker';
import { CascadePickerItemProps, ItemValue, WheelPickerPropsBase } from './components/WheelPicker/type';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

interface PickerProps extends WheelPickerPropsBase {
  /** 选择项列表 */
  data: CascadePickerItemProps[] | Array<CascadePickerItemProps[]>;
  /** 展示几列 */
  cols?: number;
  /** 当前值 */
  value?: ItemValue[];
  /** 修改事件 */
  onChange?: (value?: ItemValue[]) => void;
  /** 选择器显示类型。view表示在页面显示；modal表示在弹窗中显示；默认为modal */
  displayType?: 'view' | 'modal';
}

/** 弹窗Picker的属性 */
interface ModalPickerProps {
  /** 选择器标题 */
  title?: string;
  /** 是否弹窗显示 */
  visible?: boolean;
  /** 弹窗关闭事件 */
  onClosed?: () => void;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 确认按钮文本 */
  okText?: string;
}

export type ComPickerProps = Omit<PickerProps, 'data'> & {
  data: CascadePickerItemProps[];
} & ModalPickerProps;

const generateNextValue = (data: CascadePickerItemProps[], value?: ItemValue[], cols?: number): ItemValue[] => {
  let d = data;
  let level = 0;
  const nextValue: ItemValue[] = [];

  if (value && value.length) {
    do {
      const index = d.findIndex((item) => item.value + '' === value[level] + '');

      if (index < 0) {
        break;
      }

      nextValue[level] = value[level] + '';
      level += 1;
      d = d[index].children || [];
    } while (d.length > 0);
  }

  for (let i = level; i < cols!; i++) {
    if (d && d.length) {
      nextValue[i] = d[0].value! + '';
      d = d[0].children || [];
    } else {
      break;
    }
  }
  return nextValue;
};

function Picker(props: ComPickerProps) {
  const {
    cols = 1,
    data = [],
    visible = false,
    displayType = 'view',
    cancelText = '取消',
    okText = '确定',
    title,
    onClosed,
    onChange,
    ...restProps
  } = props;
  const theme = useTheme<Theme>();

  const [value, setValue] = React.useState(generateNextValue(data, props.value, cols));

  React.useEffect(() => {
    setValue(generateNextValue(data, props.value, cols));
  }, [data, props.value]);

  const onValueChange = (value: ItemValue | any, index: number) => {
    // 修改当前的值，然后把后面的值都清掉
    const newValue = [...value];
    newValue[index] = value + '';
    newValue.length = index + 1;
    const nextValue = generateNextValue(data, newValue, cols);
    setValue(nextValue);
    if (displayType === 'view') {
      onChange?.(value);
    }
  };

  const getCols = () => {
    const childrenTree = arrayTreeFilter(data, (c, level) => {
      return c.value + '' === value[level] + '';
    }).map((c) => c.children);
    // in case the users data is async get when select change
    const needPad = cols! - childrenTree.length;
    if (needPad > 0) {
      for (let i = 0; i < needPad; i++) {
        childrenTree.push([]);
      }
    }
    childrenTree.length = cols! - 1;
    childrenTree.unshift(data);
    return childrenTree.map((item: CascadePickerItemProps[] = [], level) => (
      <WheelPicker
        containerStyle={{ marginRight: level !== childrenTree.length - 1 ? 5 : 0 }}
        key={level}
        {...restProps}
        {...{ data: item.map((el) => ({ ...el, value: `${el.value}` })), value: `${value[level]}` }}
        onChange={(val) => onValueChange(val, level)}
      />
    ));
  };

  const handleOk = () => {
    onChange?.(value);
    onClosed?.();
  };

  const handleClose = () => {
    onClosed?.();
  };

  const PickerComp = <Flex>{getCols()}</Flex>;
  if (displayType === 'modal') {
    return (
      <Modal visible={visible} onClosed={handleClose}>
        <SafeAreaView>
          <View style={{ padding: theme.spacing.x2 }}>
            <Flex justify="between">
              <Flex.Item>
                <TouchableOpacity activeOpacity={0.5} onPress={handleClose}>
                  <H6 style={{ color: theme.colors.primary_background || '#3578e5' }}>{cancelText}</H6>
                </TouchableOpacity>
              </Flex.Item>
              <Flex.Item>
                <H6 style={{ color: theme.colors.primary_background || '#3578e5' }}>{title}</H6>
              </Flex.Item>
              <Flex.Item>
                <TouchableOpacity activeOpacity={0.5} onPress={handleOk}>
                  <H6 style={{ color: theme.colors.primary_background || '#3578e5' }}>{okText}</H6>
                </TouchableOpacity>
              </Flex.Item>
            </Flex>
            <View style={{ height: '100%' }}>{PickerComp}</View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
  return PickerComp;
}

export default Picker;
