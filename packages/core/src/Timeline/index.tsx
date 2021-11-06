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
  /** 改变时间轴和内容的相对位置 */
  mode?: 'left' | 'alternate';
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
  const { items = [], isReverse, style, mode } = props;

  const [lineItem, setLineItem] = useState<TimelineItemsProps[]>([]);
  const [modeType, setModeType] = useState<string>('0%');

  useEffect(() => {
    if (isReverse && items.length > 0) {
      const item = items.reverse();
      setLineItem(item);
    } else {
      setLineItem(items);
    }
    if (mode) {
      if (mode === 'left') {
        setModeType('98%');
      } else if (mode === 'alternate') {
        setModeType('45%');
      } else {
        setModeType('98%');
      }
    }
  }, [isReverse, items]);

  return (
    <View style={[styles.timeline, style]}>
      {lineItem.map((item, index) => {
        return (
          <View style={[styles.item]} key={index}>
            <View style={{ width: modeType, flexDirection: 'column' }}>
              {mode && mode === 'alternate' && index % 2 !== 0 && (
                <View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
                  <View style={styles.top}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
                  {item.desc && Desc(item.desc)}
                </View>
              )}
              {mode && mode === 'left' && (
                <View style={{ paddingRight: 10, width: modeType, alignItems: 'flex-end' }}>
                  <View style={styles.top}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
                  {item.desc && Desc(item.desc)}
                </View>
              )}
            </View>

            <View style={{ flexDirection: 'column', backgroundColor: 'green' }}>
              {index < items.length - 1 && <View style={styles.line}></View>}
              <View
                style={[
                  styles.circular,
                  {
                    backgroundColor: item.color || '#e4e7ed',
                  },
                ]}
              />
            </View>

            {!mode && (
              <View style={{ paddingLeft: 20, alignItems: 'flex-start', flex: 1 }}>
                <View style={styles.top}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
                {item.desc && Desc(item.desc)}
              </View>
            )}

            <View style={{ width: modeType, flexDirection: 'column' }}>
              {mode && mode === 'alternate' && index % 2 === 0 && (
                <View style={{ alignItems: 'flex-start' }}>
                  <View style={styles.top}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  {item.tips && <Text style={styles.tips}>{item.tips}</Text>}
                  {item.desc && Desc(item.desc)}
                </View>
              )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circular: {
    position: 'absolute',
    left: -6,
    top: 3,
    width: 14,
    height: 14,
    borderRadius: 16,
  },
  line: {
    position: 'absolute',
    left: 0,
    top: 17,
    bottom: -3,
    width: 1,
    backgroundColor: '#e4e7ed',
  },
  wrapper: {
    paddingLeft: 20,
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
