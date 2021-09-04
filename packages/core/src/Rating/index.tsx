import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon, { IconsName } from '../Icon';
import { TabsItemIconTypes } from '../Tabs/TabsItem';

export type icoType = [TabsItemIconTypes, TabsItemIconTypes];
export interface RatingProps {
  /**  默认几个 */
  defaultRating?: number;
  /** 总分 */
  count?: number;
  /** 默认分数 */
  defaultCount?: number;
  /** icon 大小 */
  size?: number;
  /** icon 颜色 */
  color?: string;
  /** [未选中, 已选中] */
  icon?: icoType;
  /**
   * void
   * @param score type: number 得到几分
   */
  onPress?: (score: number) => void;
}

export interface RatingState {
  icon: Array<IconsName | React.ReactElement | React.ReactNode>;
  count: number;
  defaultCount: number;
  size: number;
  color: string;
  defaultRating: number;
  typeIcon: icoType;
}

export default class Rating extends React.Component<RatingProps, RatingState> {
  // static state: RatingState
  constructor(props: RatingProps) {
    super(props);
    let start = (props.icon && props.icon[0]) || 'star-off';
    let end = (props.icon && props.icon[1]) || 'star-on';
    this.state = {
      defaultRating: props.defaultRating || 5,
      icon: [],
      count: props.count ?? 5,
      defaultCount: props.defaultCount ?? 1,
      size: props.size ?? 24,
      color: props.color || '#ebc445',
      typeIcon: [start, end],
    };
  }
  componentDidMount() {
    const { defaultCount } = this.state;
    this.updateIcon(defaultCount);
  }
  flag = true;
  updateIcon = (index: number) => {
    const { defaultRating } = this.state;
    let start = this.state.typeIcon[0];
    let end = this.state.typeIcon[1];
    if (index === 1 && this.flag) {
      this.setState({ icon: [...new Array(index).fill(end), ...new Array(defaultRating - index).fill(start)] });
      this.flag = false;
    } else if (index === 1 && !this.flag) {
      this.setState({ icon: [...new Array(index - 1).fill(end), ...new Array(defaultRating - index + 1).fill(start)] });
      this.flag = true;
    } else {
      this.setState({ icon: [...new Array(index).fill(end), ...new Array(defaultRating - index).fill(start)] });
      this.flag = true;
    }
  };
  render() {
    return (
      <View>
        {/* <Text >{this.state.count}</Text> */}
        <View style={styles.RatingContainer}>
          {this.state.icon.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.updateIcon(index + 1);
                    this.props.onPress &&
                      this.props.onPress((this.state.count / this.state.defaultRating) * (index + 1));
                  }}
                  key={index}
                >
                  <Icon name={item as IconsName} color="#ebc445" size={this.state.size} />
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.updateIcon(index + 1);
                    this.props.onPress &&
                      this.props.onPress((this.state.count / this.state.defaultRating) * (index + 1));
                  }}
                  key={index}
                >
                  {item}
                </TouchableOpacity>
              );
            }
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
