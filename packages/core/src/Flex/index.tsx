import React, { Component } from 'react';
import { View, ViewProps, FlexStyle } from 'react-native';
import FlexItem from './FlexItem';

export interface FlexProps extends ViewProps {
  /**
   * 项目定位方向
   * `row`, `column`, `row-reverse`, `column-reverse`
   * @default row
   */
  direction?: FlexStyle['flexDirection'];
  /**
   * 子元素在主轴上的对齐方式
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  /**
   * 子元素在交叉轴上的对齐方式
   * @default start
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /**
   * 子元素的换行方式
   * @default nowrap
   */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export default class Flex extends Component<FlexProps> {
  static Item = FlexItem;
  static defaultProps: FlexProps = {
    direction: 'row',
    justify: 'start',
    wrap: 'nowrap',
    align: 'start',
  };
  render() {
    const { direction, justify, align, wrap, children, style } = this.props;
    const sty: FlexProps['style'] = {};
    if (direction) {
      sty.flexDirection = direction;
    }
    if (wrap) {
      sty.flexWrap = wrap;
    }
    if (justify) {
      sty.justifyContent = justify
        .replace(/^start$/g, 'flex-start')
        .replace(/^end$/g, 'flex-end')
        .replace(/^between$/g, 'space-between')
        .replace(/^around$/g, 'space-around')
        .replace(/^evenly$/g, 'space-evenly') as FlexStyle['justifyContent'];
    }
    if (align) {
      sty.alignItems = align.replace(/^start$/g, 'flex-start').replace(/^end$/g, 'flex-end') as FlexStyle['alignItems'];
    }
    return (
      <View style={[sty, style]}>
        {children &&
          React.Children.map(children, (child: React.ReactNode) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            if (child.type && (child.type as any).displayName === 'FlexItem') {
              return React.cloneElement(<FlexItem />, {
                ...child.props,
                style: [{ flex: 1 }, child.props.style],
              });
            }
            return child;
          })}
      </View>
    );
  }
}
