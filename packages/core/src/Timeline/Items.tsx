import { Fragment } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import { IconCustom } from './Icons';
import { Desc } from './Desc';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import type { TimelineItemsProps, TimelineItemsMode, TimelineProps } from './types';

interface LineItemProps {
  item: TimelineItemsProps;
  mode?: TimelineItemsMode;
  end?: boolean;
  index: number;
  renderItem?: TimelineProps['renderItem'];
}

export const Items = (props: LineItemProps) => {
  const theme = useTheme<Theme>();
  const { item, end, mode, index, renderItem } = props;

  const styles = createStyles({
    backgroundColor: theme.colors.mask,
    title: theme.colors.primary_text,
    line: theme.colors.primary_text,
    tips: theme.colors.primary_text,
  });

  const render = () => {
    if (item.renderItem) {
      return item.renderItem(item, index);
    } else if (renderItem) {
      return renderItem(item, index);
    }
    return (
      <Fragment>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
        {item.desc && <Desc theme={theme} desc={item.desc} />}
      </Fragment>
    );
  };

  return (
    <View
      style={[
        styles.item,
        mode === 'left' && styles.itemLeft,
        mode === 'alternate' && index % 2 === 0 && styles.itemEnd,
      ]}
    >
      <View style={[styles.left, mode === 'alternate' && styles.leftAlternate]}>
        {!end && <View style={styles.line} />}
        <View style={styles.icons}>
          <IconCustom theme={theme} icon={item.icon} size={item.size} color={item.color} />
        </View>
      </View>

      <View
        style={[
          !mode && styles.content,
          mode === 'left' && styles.contentLeft,
          mode === 'alternate' && styles.contentAlternate,
          mode === 'alternate' && index % 2 !== 0 && styles.contentAlternateLeft,
          mode === 'alternate' && index % 2 === 0 && styles.contentAlternateRight,
        ]}
      >
        {render()}
      </View>
    </View>
  );
};

function createStyles({ backgroundColor = '', title = '#666', tips = '#666', line = '#e4e7ed' }) {
  return StyleSheet.create({
    item: {
      position: 'relative',
      paddingBottom: 20,
      display: 'flex',
      flexDirection: 'row',
    },
    itemLeft: {
      flexDirection: 'row-reverse',
    },
    itemEnd: {
      justifyContent: 'flex-end',
    },

    left: {
      width: 24,
      position: 'relative',
    },
    leftAlternate: {
      position: 'absolute',
      left: '50%',
      marginLeft: -12,
      top: 5,
      bottom: 10,
    },
    content: {
      paddingLeft: 12,
      paddingRight: 12,
      flex: 1,
    },
    contentLeft: {
      flex: 1,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: 'flex-end',
    },
    contentAlternate: {
      paddingLeft: 12,
      paddingRight: 12,
      width: '47%',
    },
    contentAlternateLeft: {
      alignItems: 'flex-end',
      textAlign: 'right',
    },
    contentAlternateRight: {},
    icons: {
      width: 24,
      display: 'flex',
      alignItems: 'center',
    },

    line: {
      position: 'absolute',
      left: 12,
      top: 22,
      bottom: -17,
      width: 1,
      backgroundColor: line,
    },
    wrapper: {
      paddingLeft: 20,
    },
    top: {},
    tips: {
      color: tips,
      marginTop: 8,
    },
    title: {
      fontSize: 15,
      lineHeight: 20,
      color: title,
    },
  });
}
