import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps } from '../Button';
import Flex, { FlexProps } from '../Flex';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

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

export default function ButtonGroup(props: ButtonGroupProps) {
  const {
    children,
    gutter,
    inline = false,
    size,
    rounded, // Button Props
    color,
    type,
    bordered = true,
    disabled,
    textStyle, // Button Props
    direction,
    justify,
    align,
    wrap, // Flex Props
    ...otherProps
  } = props;
  const porps = { color, type, bordered, disabled, textStyle };
  const flexProps = { direction, justify, align, wrap };
  const childs = React.Children.toArray(children);
  const theme = useTheme<Theme>();

  if (inline) {
    flexProps.direction = 'row';
    flexProps.wrap = 'wrap';
  }

  return (
    <Flex testID="RNE__ButtonGroup__wrap" style={styles.default} {...flexProps} {...otherProps}>
      {childs.map((child: React.ReactNode, idx: number) => {
        if (!React.isValidElement(child)) {
          return null;
        }
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
            childStyle.borderColor = theme.colors.text_active;
          }
          if (idx > 0 && idx < (children as ButtonProps[]).length) {
            childStyle.borderLeftWidth = StyleSheet.hairlineWidth;
            childStyle.borderColor = theme.colors.text_active;
          }
        }
        if (gutter && inline) {
          childStyle.marginHorizontal = gutter / 2;
        } else if (gutter && idx !== 0) {
          childStyle.marginLeft = gutter / 2;
        }
        return React.cloneElement(child, {
          ...porps,
          ...child.props,
          size,
          rounded,
          style: [childStyle, child.props.style],
        });
      })}
    </Flex>
  );
}
