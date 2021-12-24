import React, { FC, useMemo } from 'react';
import { usePropsValue } from '../utils/hooks';
import { getTreeDeep } from '../utils/tree-select';
import { View, Text, TouchableOpacity, ScrollView, ColorValue } from 'react-native';
import { style } from './styles';

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
};

const defaultProps = {
  options: [],
  fieldNames: {},
  defaultValue: [],
  activeColor: '#5847FF',
};

export const TreeSelect: FC<TreeSelectProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const labelName = props.fieldNames.label || 'label';
  const valueName = props.fieldNames.value || 'value';
  const childrenName = props.fieldNames.children || 'children';

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

  return <View style={{ flex: 1, flexDirection: 'row' }}>{renderColumns()}</View>;
};
