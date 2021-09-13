import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils';
interface BodyRowProps {
  columns: Array<columnsState>;
  record: Object | any;
  style?: Object;
}

interface columnsState {
  dataIndex: string;
  title: string;
  style?: Object;
  render?: (record: any) => React.ReactNode;
  ellipsis?: boolean;
}
interface textEllipsizeState {
  numberOfLines: number;
  ellipsizeMode: string;
}
export default function BodyRow({ columns, record, style }: BodyRowProps) {
  return (
    <View style={[styles.row, style]}>
      {columns.map((itm, idx) => {
        // row渲染的内容
        let val = '';
        if (itm.dataIndex.indexOf('.') > -1) {
          const firstKey = itm.dataIndex.split('.')[0];
          const secondKey = itm.dataIndex.split('.')[1];
          val = record[firstKey][secondKey];
        } else {
          val = record[itm.dataIndex];
        }

        // 是否省略多余文字
        let textEllipsize: textEllipsizeState | any =
          itm.ellipsis && itm.ellipsis
            ? {
                numberOfLines: 1,
                ellipsizeMode: 'tail',
              }
            : null;

        return (
          <View key={itm.dataIndex} style={[idx === 0 && styles.firstLeftCell, styles.cell, itm.style]}>
            {itm.render ? (
              itm.render(record)
            ) : (
              <Text selectable={true} {...textEllipsize} style={styles.content}>
                {val}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.colorsPalette.dark70,
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: colors.colorsPalette.dark70,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#fff',
  },
  firstLeftCell: {
    borderLeftWidth: 1,
    borderColor: colors.colorsPalette.dark70,
  },
  content: {
    color: '#888888',
  },
});
