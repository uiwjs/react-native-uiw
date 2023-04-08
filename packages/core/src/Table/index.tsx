import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BodyRow from './BodyRow';
import { colors } from '../utils';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

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
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.background || '#F5F5F5',
    textColor: theme.colors.primary_text || '#ccc',
  });
  const getRowKey: (record: any) => string = (record) => {
    const key = typeof rowKey === 'function' ? rowKey(record) : record && record[rowKey];
    return key;
  };

  return (
    <ScrollView testID="RNE__Table__wrap" style={[styles.conW, style]} horizontal={horizontal}>
      <ScrollView horizontal={!horizontal}>
        <View testID="RNE__Table__header" style={styles.conTitle}>
          {columns.map((itm, idx) => (
            <View
              key={itm.dataIndex + idx}
              style={[
                styles.contRight,
                { borderRightWidth: idx === columns.length - 1 ? 0 : 1 },
                itm.style ? itm.style : styles.titleFlex,
              ]}
            >
              <Text style={styles.content}>{itm.title}</Text>
            </View>
          ))}
        </View>
        <View testID="RNE__Table__body">
          {data.map((item, idx) => {
            const key = getRowKey(item);
            return <BodyRow key={key} columns={columns} record={item} />;
          })}
        </View>
        {data.length === 0 && <Text style={styles.noDataText}>暂无数据...</Text>}
      </ScrollView>
    </ScrollView>
  );
};

type CreStyle = {
  bgColor: string;
  textColor: string;
};

function createStyles({ bgColor, textColor }: CreStyle) {
  return StyleSheet.create({
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
      color: textColor,
    },
    contRight: {
      borderRightWidth: 1,
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
      backgroundColor: bgColor,
    },
    noDataText: {
      color: '#888888',
      textAlign: 'center',
      paddingTop: 4,
      paddingBottom: 4,
    },
    titleFlex: {
      flex: 1,
    },
  });
}

export default Table;
