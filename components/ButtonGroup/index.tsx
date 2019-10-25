import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps } from '../Button';
import Flex, { FlexProps } from '../Flex';


const styles = StyleSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export interface ButtonGroupProps extends ButtonProps, FlexProps {
  /**
   * 按钮间隔间距
   */
  gutter?: number;
  /**
   * 换行展示
   */
  inline?: boolean;
}

export default class ButtonGroup extends Component<ButtonGroupProps> {
  static defaultProps: ButtonGroupProps = {
    bordered: true,
    inline: false,
  }
  render() {
    const {
      children, gutter, loading, inline,
      size, rounded, // Button Props
      color, type, bordered, disabled, textStyle, // Button Props
      direction, justify, align, wrap, // Flex Props
      ...otherProps
     } = this.props;
    const porps = { color, type, bordered, disabled, textStyle };
    const flexProps = { direction, justify, align, wrap };
    const childs = React.Children.toArray(children);

    if (inline) {
      flexProps.direction = 'row';
      flexProps.wrap = 'wrap';
    }

    return (
      <Flex style={styles.default} {...flexProps}  {...otherProps}>
        {childs.map((child: React.ReactNode, idx: number) => {
          if (!React.isValidElement(child)) return null;
          const childStyle: ButtonProps['style'] = {
            flex: inline ? 0 : 1,
          };
          if (inline && gutter) {
            childStyle.marginVertical = gutter / 2;
          }
          if (!gutter) {
            if (childs.length !== 1 && (idx === 0 || idx < childs.length - 1)) {
              childStyle.borderTopRightRadius = 0;
              childStyle.borderBottomRightRadius = 0;
            }
            if (childs.length > 0 && idx !== 0) {
              childStyle.borderTopLeftRadius = 0;
              childStyle.borderBottomLeftRadius = 0;
            }
          }
          if (!bordered) {
            childStyle.borderWidth = 0;
          }
          if (bordered && !gutter) {
            if ((idx > 0 && idx < (children as ButtonProps[]).length - 1) || idx === 0) {
              childStyle.borderRightWidth = StyleSheet.hairlineWidth;
            }
            if (idx > 0 && idx < (children as ButtonProps[]).length) {
              childStyle.borderLeftWidth = StyleSheet.hairlineWidth;
            }
          }
          if (gutter && inline) {
            childStyle.marginHorizontal = gutter / 2;
          } else if (gutter && idx !== 0) {
            childStyle.marginLeft = gutter / 2;
          }
          return React.cloneElement(child, { ...porps, ...child.props, size, rounded, style: [childStyle, child.props.style] });
        })}
      </Flex>
    );
  }
}

