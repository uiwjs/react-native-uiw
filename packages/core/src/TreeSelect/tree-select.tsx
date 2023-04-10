import React, { FC, useMemo, useState } from 'react';
import { usePropsValue } from '../utils/hooks';
import { getTreeDeep } from '../utils/tree-select';
import { View, Text, TouchableOpacity, ScrollView, ColorValue, Pressable, StyleProp, ViewStyle } from 'react-native';
import Icon from '../Icon';
import Ellipsis from '../Ellipsis';
import Modal, { ModalProps } from '../Modal';
import { style } from './styles';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

export interface TreeSelectOption {
  [key: string]: any;
}

export type TreeSelectProps = {
  options: TreeSelectOption[];
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[], extend: { options: TreeSelectOption[] }) => void;
  fieldNames?: { label: string; value: string; children: string } | any;
  activeColor?: ColorValue;
  disabled?: boolean;
  placeholder?: string;
  extra?: JSX.Element;
  showClear?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  placeholderColor?: ColorValue;
  height?: number;
  modalProps?: ModalProps;
};

export const TreeSelect: FC<TreeSelectProps> = (p) => {
  const theme = useTheme<Theme>();

  const defaultProps = {
    options: [],
    fieldNames: {},
    defaultValue: [],
    activeColor: theme.colors.primary_background || '#3578e5',
    placeholder: '请选择',
    extra: undefined,
    showClear: true,
    contentStyle: {},
    placeholderColor: '',
    disabled: false,
    height: 300,
    modalProps: {},
  };

  const props = { ...defaultProps, ...p };
  const labelName = props.fieldNames.label || 'label';
  const valueName = props.fieldNames.value || 'value';
  const childrenName = props.fieldNames.children || 'children';

  const [visible, setVisible] = useState(false);
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
  });
  const [deep, optionsMap, optionsParentMap] = useMemo(() => {
    const deep = getTreeDeep(props.options, childrenName);
    const optionsMap = new Map<string, TreeSelectOption>();
    const optionsParentMap = new Map<string, TreeSelectOption | undefined>();

    function traverse(current: TreeSelectOption | undefined, children: TreeSelectOption[]) {
      children.forEach((item) => {
        optionsParentMap.set(item[valueName], current);
        optionsMap.set(item[valueName], item);
        if (item[childrenName]) {
          traverse(item, item[childrenName]);
        }
      });
    }
    traverse(undefined, props.options);
    return [deep, optionsMap, optionsParentMap];
  }, [props.options]);

  const initialLabelValues = useMemo(() => {
    const labels: string[] = [];
    props.defaultValue?.forEach((defaultValue) => {
      const defaultOption = optionsMap.get(defaultValue);
      if (defaultOption) {
        labels.push(defaultOption[labelName]);
      }
    });
    return labels;
  }, [props.defaultValue, optionsMap, labelName]);

  const [labelValues, setLabelValues] = useState<string[]>(initialLabelValues);

  const onItemSelect = (node: TreeSelectOption) => {
    // 找到父级节点
    const parentNodes: TreeSelectOption[] = [];
    let current: TreeSelectOption | undefined = node;
    while (current) {
      parentNodes.unshift(current);
      const next = optionsParentMap.get(current[valueName]);
      current = next;
    }

    const values = parentNodes.map((i) => i[valueName]);
    const labels = parentNodes.map((i) => i[labelName]);
    setLabelValues(labels);
    setValue(values);
    props.onChange?.(values, {
      options: parentNodes,
    });
  };

  // item样式
  const activeStyles = (index: number, isActive: boolean, isLast: boolean) => {
    let styles;
    // 选中第一排
    if (isActive && index === 0) {
      styles = {
        ...style.active_first_item,
      };
    }
    // 未选中第一排
    if (!isActive && index === 0) {
      styles = {
        ...style.not_active_first_item,
      };
    }
    // 选中后排
    if (isActive && index !== 0) {
      styles = {
        ...style.active_nth_item,
        borderColor: props.activeColor,
        marginRight: isLast ? 10 : 0,
      };
    }
    // 未选中后排
    if (!isActive && index !== 0) {
      styles = {
        ...style.not_active_nth_item,
        marginRight: isLast ? 10 : 0,
      };
    }
    return styles;
  };

  const renderItems = (columnOptions: TreeSelectOption[] = [], index: number) => {
    return columnOptions.map((item) => {
      const isActive = item[valueName] === value[index];
      const active_font_color = index === 0 ? '#333' : props.activeColor;
      // 是否是最后一列
      const isLast = deep - 1 === index;
      return (
        <TouchableOpacity
          key={item[valueName]}
          onPress={() => {
            if (!isActive) {
              onItemSelect(item);
            }
          }}
          style={[style.item, { ...activeStyles(index, isActive, isLast) }]}
        >
          <Text style={isActive ? { color: active_font_color, fontWeight: 'bold' } : { color: '#666' }}>
            {item[labelName]}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const renderColumns = () => {
    const columns = [];
    for (let i = 0; i < deep; i++) {
      let width = `${100 / deep}%`;

      // 两列的第一列宽度为 33.33，两列的第二列为 66.67%
      if (deep === 2 && i === 0) {
        width = `33.33%`;
      }
      if (deep === 2 && i === 1) {
        width = `66.67%`;
      }
      const column = (
        <ScrollView key={i} style={{ width, flex: 1, backgroundColor: i === 0 ? '#f6f7f9' : '#fff' }}>
          {renderItems(i === 0 ? props.options : optionsMap.get(value[i - 1])?.[childrenName], i)}
        </ScrollView>
      );
      columns.push(column);
    }
    return columns;
  };

  return (
    <React.Fragment>
      <Pressable
        onPress={() => {
          if (props.disabled) return;
          setVisible(true);
        }}
      >
        <View style={[props.disabled ? style.disabled : style.content, props.contentStyle]}>
          <Ellipsis style={[style.contentTitle, { color: props.placeholderColor }]} maxLen={30}>
            {labelValues.join() || props.placeholder}
          </Ellipsis>
          {React.isValidElement(props.extra) ? (
            props.extra
          ) : value && props.showClear ? (
            <Pressable
              onPress={() => {
                setValue([]);
                setLabelValues([]);
                props.onChange?.([], {
                  options: [],
                });
              }}
              style={{ paddingRight: 3 }}
            >
              <Icon name="circle-close-o" size={18} color="#ccc" />
            </Pressable>
          ) : (
            <Icon name="right" size={18} color="#A19EA0" />
          )}
        </View>
      </Pressable>
      <Modal visible={visible} onClosed={() => setVisible(false)} {...props.modalProps}>
        <View style={{ marginBottom: 10 }} />
        <View style={{ height: props.height, flexDirection: 'row' }}>{renderColumns()}</View>
      </Modal>
    </React.Fragment>
  );
};
