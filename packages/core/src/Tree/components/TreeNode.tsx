import React, { FC } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@shopify/restyle';
import Flex from '../../Flex';
import Icon from '../../Icon';
import Text from '../../Typography/Text';
import { Theme } from '../../theme';
import { TreeNodeProps } from '../type';
import { useTreeNode } from './useTreeNode';
import CheckBox from '../../CheckBox';

const TreeNode: FC<TreeNodeProps> = (props) => {
  const theme = useTheme<Theme>();
  const {
    icon: customIcon,
    level,
    disabled,
    checkable,
    expanded = false,
    label,
    checked = false,
    data,
    showIcon,
  } = props;
  const { style, handlerCheck, onClick } = useTreeNode(props);

  const iconRender = (checked: boolean) => {
    if (customIcon) {
      return customIcon(checked);
    }
    return (
      <Icon
        size={16}
        name={checked ? 'circle-check' : 'circle-o'}
        color={checked ? theme.colors.primary200 : theme.colors.gray300}
      />
    );
  };

  return (
    <Animated.View style={[{ overflow: 'hidden' }, style()]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          onClick?.({ expanded, key: data?.value, value: data.value, label, checked, disabled });
        }}
      >
        <View
          style={{
            height: 55,
            backgroundColor: theme.colors.mask,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#CCCCCC',
            paddingHorizontal: 12,
          }}
        >
          <Flex style={{ marginLeft: level * 16, alignItems: 'center', flex: 1 }}>
            <TouchableOpacity disabled={disabled} onPress={handlerCheck}>
              {checkable && iconRender(checked)}
            </TouchableOpacity>

            <View style={{ flex: 1, marginLeft: 4 }}>
              <Text style={{ fontSize: 14, lineHeight: 19 }} color={disabled ? 'rgba(255, 255, 255, 0.25)' : 'text'}>
                {label}
              </Text>
            </View>
            {!!data.children && !!showIcon && <Icon name={expanded ? 'up' : 'down'} color="#999999" size={18} />}
          </Flex>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
TreeNode.displayName = 'TreeNode';

export default TreeNode;
