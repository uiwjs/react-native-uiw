import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

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
}

export interface RatingState {
  icon: Array<IconsName | React.ReactElement | React.ReactNode>;
  resultRating: number;
  size: number;
  color: string;
  defaultRating: number;
  typeIcon: icoType;
}

export default class Rating extends React.Component<RatingProps, RatingState> {
  constructor(props: RatingProps) {
    super(props);
    let start = (props.icon && props.icon.unactived) || 'star-off';
    let end = (props.icon && props.icon.actived) || 'star-on';
    this.state = {
      defaultRating: props.defaultRating || 0,
      resultRating: props.resultRating || 5,
      icon: [],
      size: props.size ?? 24,
      color: props.color || '#ebc445',
      typeIcon: [start, end],
    };
  }
  componentDidMount() {
    const { defaultRating } = this.state;
    this.updateIcon(defaultRating);
  }
  flag = true;
  updateIcon = (index: number) => {
    const { resultRating } = this.state;
    const { onPress } = this.props;
    let start = this.state.typeIcon[0];
    let end = this.state.typeIcon[1];
    if (index === 1 && this.flag) {
      this.setState({ icon: [...new Array(index).fill(end), ...new Array(resultRating - index).fill(start)] });
      onPress?.(1);
      this.flag = false;
    } else if (index === 1 && !this.flag) {
      this.setState({ icon: [...new Array(index - 1).fill(end), ...new Array(resultRating - index + 1).fill(start)] });
      this.flag = true;
      onPress?.(0);
    } else {
      this.setState({ icon: [...new Array(index).fill(end), ...new Array(resultRating - index).fill(start)] });
      this.flag = true;
      onPress?.(index);
    }
  };
  render() {
    return (
      <View>
        <View style={styles.RatingContainer}>
          {this.state.icon.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.updateIcon(index + 1);
                }}
                key={index}
              >
                {typeof item === 'string' ? (
                  <Icon name={item as IconsName} color="#ebc445" size={this.state.size} />
                ) : (
                  item
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RatingContainer: {
    flexDirection: 'row',
  },
});
