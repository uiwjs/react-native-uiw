import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

export interface TimelineItemsProps {
  /** 标题 */
  title: string;
  /** 子标题 */
  tips?: string;
  /** 标示颜色 */
  color?: string;
  /** 子项内容 */
  desc?: string | string[];
}

export interface TimelineProps extends ViewProps {
  /** 是否倒序 */
  isReverse?: boolean;
  /** 步骤条数据列表 */
  items: TimelineItemsProps[];
}

const Desc = (desc?: string | string[]) => {
  let isArray = Array.isArray(desc);
  if (isArray) {
    const descs: string[] = desc as string[];
    return (
      <View>
        {descs.map((item, index) => (
          <Text style={styles.desc} key={index}>
            {item}
          </Text>
        ))}
      </View>
    );
  } else {
    return <Text style={styles.desc}>{desc}</Text>;
  }
};

export default (props: TimelineProps) => {
  const { items = [], isReverse, style } = props;

  const [lineItem, setLineItem] = useState<TimelineItemsProps[]>([]);

  useEffect(() => {
    if (isReverse && items.length > 0) {
      const item = items.reverse();
      setLineItem(item);
    } else {
      setLineItem(items);
    }
  }, [isReverse, items]);

  return (
    <View style={[styles.timeline, style]}>
      {lineItem.map((item, index) => {
        return (
          <View style={[styles.item]} key={index}>
            {index < items.length - 1 && <View style={styles.line}></View>}
            <View
              style={[
                styles.circular,
                {
                  backgroundColor: item.color || '#e4e7ed',
                },
              ]}
            ></View>
            <View style={styles.wrapper}>
              <View style={styles.top}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
              {item.desc && Desc(item.desc)}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  timeline: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  item: {
    position: 'relative',
    paddingBottom: 20,
    top: 0,
  },
  circular: {
    position: 'absolute',
    left: 0,
    top: 3,
    width: 14,
    height: 14,
    borderRadius: 16,
  },
  line: {
    position: 'absolute',
    left: 6,
    top: 17,
    bottom: -3,
    width: 1,
    backgroundColor: '#e4e7ed',
  },
  wrapper: {
    paddingLeft: 30,
  },
  top: {},
  tips: {
    color: '#666',
    marginTop: 8,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
  },
  desc: {
    color: '#5e6d82',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
});
