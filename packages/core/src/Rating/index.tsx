import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';

import Icon, { IconsName } from '../Icon';
import { TabsItemIconTypes } from '../Tabs/TabsItem';

export type icoType = [TabsItemIconTypes, TabsItemIconTypes];
export interface RatingProps {
  /**  默认选中几个 */
  defaultRating?: number;
  /** 总数*/
  resultRating?: number;
  /** icon 大小 */
  size?: number;
  /** icon 颜色 */
  color?: string;
  /** actived 激活 unactived 未激活 */
  icon?: {
    actived?: TabsItemIconTypes;
    unactived?: TabsItemIconTypes;
  };
  /**
   * void
   * @param score type: number 得到几分
   */
  onPress?: (score: number) => void;
  /** 自定义每项的提示信息 */
  tooltips?: string[];
  /** 自定义提示信息样式 */
  tooltipsStyle?: StyleProp<TextStyle>;
  /** 只读模式 */
  disabled: boolean;
  itemStyle?: ViewStyle;
}

export interface RatingState {
  icon: Array<IconsName | React.ReactElement | React.ReactNode>;
  resultRating: number;
  size: number;
  color: string;
  defaultRating: number;
  typeIcon: icoType;
  tooltips?: string[];
  tooltipsText?: string;
  disabled: boolean;
}

function Rating(props: RatingProps) {
  const [state, setState] = useState<RatingState>(() => {
    let start = (props.icon && props.icon.unactived) || 'star-off';
    let end = (props.icon && props.icon.actived) || 'star-on';
    return {
      defaultRating: props.defaultRating || 0,
      resultRating: props.resultRating || 5,
      icon: [],
      size: props.size ?? 24,
      color: props.color || '#ebc445',
      typeIcon: [start, end],
      tooltips: props.tooltips,
      tooltipsText: '',
      disabled: false,
    };
  });
  const [flag, setFlag] = useState(true);
  const updateIcon = (index: number) => {
    const { resultRating } = state;
    const { onPress, disabled } = props;
    let start = state.typeIcon[0];
    let end = state.typeIcon[1];
    if (disabled) {
      setState({ ...state, disabled: disabled });
    }
    if (index === 1 && flag) {
      setState({ ...state, icon: [...new Array(index).fill(end), ...new Array(resultRating - index).fill(start)] });
      onPress?.(1);
      if (state.tooltips) {
        setState({ ...state, tooltipsText: state.tooltips[index] });
      }
      setFlag(false);
    } else if (index === 1 && !flag) {
      setState({
        ...state,
        icon: [...new Array(index - 1).fill(end), ...new Array(resultRating - index + 1).fill(start)],
      });
      if (state.tooltips) {
        setState({ ...state, tooltipsText: state.tooltips[index - 1] });
      }
      setFlag(true);
      onPress?.(0);
    } else {
      setState({ ...state, icon: [...new Array(index).fill(end), ...new Array(resultRating - index).fill(start)] });
      if (state.tooltips) {
        setState({ ...state, tooltipsText: state.tooltips[index] });
      }
      setFlag(true);
      onPress?.(index);
    }
  };

  useEffect(() => {
    updateIcon(state.defaultRating);
  }, []);

  const { icon, size, color, tooltipsText, disabled } = state;
  const { tooltipsStyle } = props;
  return (
    <View>
      <View style={styles.RatingContainer}>
        {icon.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (disabled === false) {
                  updateIcon(index + 1);
                }
              }}
              key={index}
              style={{ marginRight: 5, ...props.itemStyle }}
            >
              {typeof item === 'string' ? <Icon name={item as IconsName} color={color} size={size} /> : item}
            </TouchableOpacity>
          );
        })}
        <Text style={[styles.tooltipsText, { fontSize: size - 5, color: color }, tooltipsStyle]}>{tooltipsText}</Text>
      </View>
    </View>
  );
}
export default Rating;
const styles = StyleSheet.create({
  RatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooltipsText: {
    marginHorizontal: 10,
  },
});
