import React from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps, TextStyle, Animated, StyleProp } from 'react-native';
import _ from 'lodash';
import Tooltip from '../Tooltip';
import { rnTextType, getTextPartsByHighlight, sliceText } from '../utils/rn-text';

export type RnTextProps = RNTextProps & {
  // header:Header标题 ｜ title:列表/From标题 ｜ label:正文,说明,备注label ｜ subLabel:辅助性文字
  type?: 'header' | 'title' | 'label' | 'subLabel';
  // 文本正文
  label?: string;
  // 文本颜色
  color?: string;
  // 文本居中
  center?: boolean;
  // 将文本转换为全大写
  uppercase?: boolean;
  animated?: boolean;
  // 高亮的文本
  highlightText?: string;
  // 高亮文本样式
  highlightTextStyle?: TextStyle;
  // 背景色
  backgroundColor?: any;
  tooltipProps?: {
    // 截取文本长度
    number?: number;
    // 提示的文本
    content?: string;
  };
  children?: React.ReactNode;
  style?: StyleProp<TextStyle | Animated.AnimatedProps<TextStyle>>;
};

const TooltipContainer = ({ content, children }: { content?: string; children?: any }) => {
  return content ? <Tooltip title={content}>{children}</Tooltip> : <React.Fragment>{children}</React.Fragment>;
};

export default (props: RnTextProps) => {
  const {
    type,
    color,
    center,
    uppercase,
    animated,
    backgroundColor,
    style,
    children,
    label,
    highlightText,
    highlightTextStyle,
    tooltipProps = {
      number: 0,
      content: '',
    },
    ...others
  } = props;

  const { number, content } = tooltipProps;

  const TextContainer: React.ClassType<any, any, any> = animated ? Animated.createAnimatedComponent(RNText) : RNText;

  /**
   * 文本渲染
   * @param children
   * @returns
   */
  const renderText = (children: any): any => {
    // 递归渲染子级的Text
    if (!_.isEmpty(highlightText)) {
      if (_.isArray(children)) {
        return children.map((child) => renderText(child));
      }
      if (_.isString(children)) {
        const textParts = getTextPartsByHighlight(children, highlightText);
        return textParts.map((text, index) => {
          const shouldHighlight = _.lowerCase(text) === _.lowerCase(highlightText);
          return (
            <RNText key={index} style={shouldHighlight ? [styles.highlight, highlightTextStyle] : styles.notHighlight}>
              {text}
            </RNText>
          );
        });
      }
    }
    return children;
  };

  const textStyle = [
    {
      ...rnTextType(type),
    },
    styles.container,
    color && { color },
    backgroundColor && { backgroundColor },
    center && styles.centered,
    uppercase && styles.uppercase,
    style,
  ];

  return (
    <TooltipContainer content={content}>
      <TextContainer {...others} style={textStyle}>
        {number ? sliceText(renderText(label || children), number) : renderText(label || children)}
      </TextContainer>
    </TooltipContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  centered: {
    textAlign: 'center',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  highlight: {
    color: '#333333',
    fontSize: 14,
  },
  notHighlight: {
    color: undefined,
  },
});
