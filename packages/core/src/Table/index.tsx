import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BodyRow from './BodyRow';
import { colors } from '../utils';

interface TableProps {
  data: Array<Object>;
  columns: Array<columnsState>;
  rowKey: any;
  horizontal?: boolean;
  style?: Object;
}

interface columnsState {
  dataIndex: string;
  title: string;
  style?: Object;
  render?: (record: any) => React.ReactNode;
  ellipsis?: boolean;
}
// table组件
const Table = ({ data, columns, rowKey, horizontal = true, style }: TableProps) => {
  const getRowKey: (record: any) => string = (record) => {
    const key = typeof rowKey === 'function' ? rowKey(record) : record && record[rowKey];
    return key;
  };

  return (
    <ScrollView style={[styles.conW, style]} horizontal={horizontal}>
      <ScrollView horizontal={!horizontal}>
        <View style={styles.conTitle}>
          {columns.map((itm, idx) => (
            <View
              key={itm.dataIndex + idx}
              style={[styles.contRight, { borderRightWidth: idx === columns.length - 1 ? 0 : 1 }, itm.style]}
            >
              <Text style={styles.content}>{itm.title}</Text>
            </View>
          ))}
        </View>
        {data.map((item, idx) => {
          const key = getRowKey(item);
          return (
            <BodyRow
              key={key}
              columns={columns}
              record={item}
              style={{ borderBottomWidth: idx === data.length - 1 ? 1 : 1 }}
            />
          );
        })}
        {data.length === 0 && <Text style={styles.noDataText}>暂无数据...</Text>}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.white,
    height: 30,
  },
  conTitle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.colorsPalette.dark70,
  },
  content: {
    color: colors.colorsPalette.dark30,
  },
  contRight: {
    borderRightWidth: 1,
    flex: 1,
    borderRightColor: colors.colorsPalette.dark70,
    borderBottomColor: colors.colorsPalette.dark70,
    color: '#888888',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  conW: {
    backgroundColor: colors.white,
  },
  noDataText: {
    color: '#888888',
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
});

export default Table;
