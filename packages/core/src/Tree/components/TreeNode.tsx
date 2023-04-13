import React, { FC } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@shopify/restyle';
import Flex from '../../Flex';
import { px } from '../util';
import Icon from '../../Icon';
import Text from '../../Typography/Text';
import { Theme } from '../../theme';
import { TreeNodeProps } from '../type';
import Chevron from './Chevron';
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
  const { progress, style, handlerCheck, onClick } = useTreeNode(props);

  const iconRender = (checked: boolean) => {
    if (customIcon) {
      return customIcon(checked);
    }
    // return (
    //   <Icon
    //     name={checked ? 'up' : 'down'}
    //     color={checked ? theme.colors.primary200 : '#999999'}
    //   />
    // );
    return (
      <CheckBox
        checked={checked}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );
  };

  return (
    <Animated.View style={[{ overflow: 'hidden' }, style()]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          onClick?.({ expanded, value: data.value, label, checked, disabled });
        }}
      >
        <View
          style={{
            height: px(55),
            backgroundColor: '#F5F5F5',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#CCCCCC',
            paddingHorizontal: px(12),
          }}
        >
          <Flex style={{ marginLeft: level * px(16), alignItems: 'center', flex: 1 }}>
            <TouchableOpacity disabled={disabled} onPress={handlerCheck}>
              {checkable && iconRender(checked)}
            </TouchableOpacity>

            <View style={{ flex: 1, marginLeft: px(4) }}>
              <Text
                style={{ fontSize: px(14), lineHeight: px(19) }}
                color={disabled ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.8)'}
              >
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
