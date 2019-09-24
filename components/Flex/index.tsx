import React, { Component } from 'react';
import { View, ViewProps, FlexStyle } from 'react-native';
import FlexItem from './FlexItem';

export interface FlexProps extends ViewProps {
  direction?: FlexStyle['flexDirection'];
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export default class Flex extends Component<FlexProps> {
  static Item = FlexItem;
  static defaultProps: FlexProps = {
    direction: 'row',
    justify: 'start',
    wrap: 'nowrap',
    align: 'start',
  }
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
      sty.alignItems = align.replace(/^start$/g, 'flex-start')
        .replace(/^end$/g, 'flex-end') as FlexStyle['alignItems'];
    }
    return (
      <View style={[sty, style]}>
        {children && React.Children.map(children, (child: React.ReactNode) => {
          if (!React.isValidElement(child)) return null;
          if (child.type && (child.type as any).displayName === 'FlexItem') {
            return React.cloneElement(<FlexItem />, {
              style: [{ flex: 1 }, child.props.style],
              ...child.props,
            });
          }
          return child;
        })}
      </View>
    );
  }
}
