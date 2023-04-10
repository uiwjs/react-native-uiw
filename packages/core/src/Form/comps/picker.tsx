import React from 'react';
import { Pressable, View, StyleSheet, ViewStyle } from 'react-native';
import Picker, { PickerProps } from '../../Picker';
import { OptionItem, CascadePickerItemProps } from '../../Picker/components/WheelPicker/type';
import Ellipsis from '../../Ellipsis';
import Icon from '../../Icon';
import { Theme } from '../../theme';
import { useTheme } from '@shopify/restyle';
import { getTreeDeep } from '../../utils/tree-select';

export interface RnPickerProps extends Omit<PickerProps, 'data'> {
  disabled?: boolean;
  placeholder?: string;
  contentStyle?: ViewStyle;
  extra?: JSX.Element;
  showClear?: boolean;
  options?: CascadePickerItemProps[];
}

export default function (props: RnPickerProps) {
  const {
    disabled,
    placeholder,
    contentStyle,
    extra,
    showClear,
    options = [],
    value = [],
    onChange,
    ...others
  } = props;
  const theme = useTheme<Theme>();
  const [visible, setVisible] = React.useState(false);

  // 递归树数据
  const [deep, optionsMap, optionsParentMap] = React.useMemo(() => {
    const deep = getTreeDeep(options, 'children');
    const optionsMap = new Map<string | number, CascadePickerItemProps>();
    const optionsParentMap = new Map<string, CascadePickerItemProps | undefined>();
    function traverse(current: OptionItem | undefined, children: CascadePickerItemProps[]) {
      children.forEach((item) => {
        optionsParentMap.set(item['value'] + '', current);
        optionsMap.set(item['value'] + '', item);
        if (item['children']) {
          traverse(item, item['children']);
        }
      });
    }
    traverse(undefined, options);
    return [deep, optionsMap, optionsParentMap];
  }, [props.options]);

  const initialLabelValues = React.useMemo(() => {
    const labels: string[] = [];
    value?.forEach((defaultValue: string | number) => {
      const defaultOption = optionsMap.get(defaultValue);
      if (defaultOption) {
        labels.push(defaultOption['label']);
      }
    });
    return labels;
  }, [value, options]);

  const style = createStyles({
    disabled: theme.colors.disabled,
    backgroundColor: theme.colors.mask,
    title: theme.colors.primary_text,
  });

  return (
    <React.Fragment>
      <Pressable
        onPress={() => {
          if (disabled) return;
          setVisible(true);
        }}
      >
        <View style={[disabled ? style.disabled : style.content, contentStyle]}>
          <Ellipsis style={[style.contentTitle]} maxLen={30}>
            {(initialLabelValues.length > 0 && initialLabelValues.join()) || placeholder}
          </Ellipsis>
          {React.isValidElement(extra) ? (
            extra
          ) : value && value.length > 0 && showClear ? (
            <Pressable onPress={() => props.onChange?.([])} style={{ paddingRight: 3 }} disabled={disabled}>
              <Icon name="circle-close-o" size={18} color={theme.colors.primary_text || '#ccc'} />
            </Pressable>
          ) : (
            <Icon name="right" size={18} color={theme.colors.text || '#ccc'} />
          )}
        </View>
      </Pressable>
      <Picker
        displayType="modal"
        visible={visible}
        cols={1}
        value={value}
        onChange={(value) => {
          onChange?.(value);
        }}
        onClosed={() => setVisible(false)}
        {...others}
        data={options}
      />
    </React.Fragment>
  );
}

function createStyles({ backgroundColor = '#fff', disabled = '#f5f5f5', title = '#000' }) {
  return StyleSheet.create({
    content: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: backgroundColor,
      paddingHorizontal: 16,
    },
    disabled: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
      backgroundColor: disabled,
      paddingHorizontal: 16,
    },
    contentTitle: {
      fontSize: 16,
      color: title,
    },
  });
}
