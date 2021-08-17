import React, { Component } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import Icon from '../Icon';
import Flex, { FlexProps } from '../Flex';

const iconStr = `
<svg width="64" height="41" viewBox="0 0 64 41">
  <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
    <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
    <g fill-rule="nonzero" stroke="#D9D9D9">
      <path fill="#FFF" d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
      <path fill="#FAFAFA" d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
    </g>
  </g>
</svg>
`;

export interface EmptyProps extends FlexProps {
  /**
   * 设置提示文本
   */
  label?: string;
  /**
   * 设置提示音样式
   */
  labelStyle?: TextProps['style'];
  /**
   * 设置 图标尺寸
   */
  size?: number;
  /**
   * 传递 SVG xml 字符串，自定义图标，设为 `null` 将不展示图标。
   */
  xml?: string;
  /**
   * 不光提示文本，还有更多内容，`label` 将不起作用
   */
  children?: React.ReactNode;
}

export default class Empty extends Component<EmptyProps> {
  static defaultProps: EmptyProps = {
    size: 64,
    label: '暂无数据',
    xml: iconStr,
  };
  render() {
    const { size, label, xml, labelStyle, children, ...props } = this.props;
    return (
      <Flex direction="column" justify="center" align="center" {...props}>
        {xml && <Icon xml={xml} size={size} />}
        {!!children
          ? children
          : label &&
            typeof label === 'string' && <Text style={StyleSheet.flatten([styles.label, labelStyle])}>{label}</Text>}
      </Flex>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'rgba(0,0,0,0.25)',
  },
});
