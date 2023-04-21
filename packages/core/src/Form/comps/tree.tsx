import Tree from '../../Tree';
import { KeyType } from '../types';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, View, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import Ellipsis from '../../Ellipsis';
import Modal from '../../Modal';
import Icon from '../../Icon';
import { Theme } from '../../theme';
import { useTheme } from '@shopify/restyle';

interface FormTreeProps {
  value?: any;
  onChange?: (value: KeyType) => void;
  options?: Array<{ label: string; value: KeyType }>;
  disabled?: boolean;
  placeholder?: string;
  contentStyle?: ViewStyle;
  extra?: JSX.Element;
  showClear?: boolean;
}

interface entity {
  value: KeyType;
  label: string;
  children?: children[];
}
interface children {
  value: KeyType;
  label: string;
  children?: children[];
}

const FormTree = ({
  value,
  onChange,
  options = [],
  // ...others,
  disabled,
  placeholder = '请选择',
  contentStyle,
  extra,
  showClear,
  ...attr
}: FormTreeProps) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme<Theme>();
  const style = createStyles({
    disabled: theme.colors.disabled,
    backgroundColor: theme.colors.mask,
    title: theme.colors.primary_text,
  });

  function treeToArray(tree: any) {
    var res: any = [];
    for (const item of tree) {
      const { children, ...i } = item;
      if (children && children.length) {
        res = res.concat(treeToArray(children));
      }
      res.push(i);
    }
    return res;
  }
  let arrTools = treeToArray(options).filter((filItem: any) =>
    value?.some((somItem: any) => Object.is(filItem.value, somItem)),
  );

  const labelVal = arrTools.map((a: any) => {
    return a.label;
  });

  const extraContent = React.useMemo(() => {
    if (React.isValidElement(extra)) {
      return extra;
    }
    if (value && showClear) {
      return (
        <Pressable onPress={() => onChange} style={{ paddingRight: 3 }} disabled={disabled}>
          <Icon name="circle-close-o" size={18} color={theme.colors.primary_text || '#ccc'} />
        </Pressable>
      );
    }
    return <Icon name="right" size={18} color={theme.colors.text || '#ccc'} />;
  }, [extra, value, showClear]);
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          if (disabled) return;
          setVisible(true);
        }}
      >
        <View style={[disabled ? style.disabled : style.content, contentStyle]}>
          <Ellipsis style={[style.contentTitle]} maxLen={30}>
            {(labelVal.length > 0 && labelVal) || placeholder}
          </Ellipsis>
          {extraContent}
        </View>
      </Pressable>
      <Modal visible={visible} placement="bottom" onClosed={() => setVisible(false)}>
        <ScrollView style={{ height: 400 }}>
          <Tree
            defaultCheckedKeys={value}
            treeData={options}
            defaultExpandAll
            onCheck={(value: any) => {
              onChange?.(value);
            }}
          />
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default FormTree;

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
