import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Items } from './Items';
import type { TimelineProps } from './types';
export * from './types';

const TimeLine = (props: TimelineProps) => {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    backgroundColor: theme.colors.mask,
  });
  const { items = [], isReverse, style, mode, renderItem } = props;

  const lineItem = useMemo(() => {
    if (isReverse && items.length) {
      const item = items.reverse();
      return item;
    }
    return items;
  }, [isReverse, items]);

  return (
    <View style={[styles.timeline, style]}>
      {lineItem.map((item, index) => {
        return (
          <Items
            index={index}
            item={item}
            mode={mode}
            end={index === lineItem.length - 1}
            key={index}
            renderItem={renderItem}
          />
        );
      })}
    </View>
  );
};

export default TimeLine;

function createStyles({ backgroundColor = '' }) {
  return StyleSheet.create({
    timeline: {
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: backgroundColor,
    },
  });
}
