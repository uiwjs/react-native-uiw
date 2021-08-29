import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

type statusType = 'success' | 'error' | string;

export interface StepsItemsProps {
  title?: string;
  desc?: string;
  status?: statusType;
}

export interface StepsProps {
  items: StepsItemsProps[];
  current?: number;
  onChange?: (value: number) => void;
}

export default (props: StepsProps) => {
  const { items = [], current = 0, onChange } = props;

  const onStepsPress = (index: number) => {
    // onChange?.(index);
    onChange && onChange(current);
  };

  return (
    <View style={styles.steps}>
      {items.map((item, index) => (
        <TouchableOpacity style={[styles.item]} key={index} onPress={() => onStepsPress(index)}>
          <View style={styles.wrap}>
            {index !== 0 && <View style={styles.leftLine}></View>}
            <View
              style={[
                styles.circular,
                {
                  backgroundColor: current >= index && !item?.status ? '#008EF0' : '#e5e5e5',
                },
              ]}
            >
              {item?.status === 'error' && <Icon name="circle-close" size={22} fill="#dc3545" />}
              {item?.status === 'success' && <Icon name="circle-check" size={22} fill="#008EF0" />}
              {!item?.status && (
                <Text
                  style={{
                    color: current >= index ? '#fff' : '#333',
                  }}
                >
                  {index + 1}
                </Text>
              )}
            </View>
            {index < items.length - 1 && <View style={styles.rightLine}></View>}
          </View>
          <Text>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  steps: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrap: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  leftLine: {
    backgroundColor: '#ccc',
    position: 'absolute',
    width: '50%',
    top: '50%',
    height: 1,
    left: '0%',
  },
  rightLine: {
    backgroundColor: '#ccc',
    position: 'absolute',
    width: '50%',
    top: '50%',
    height: 1,
    right: '0%',
  },
  circular: {
    width: 25,
    height: 25,
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    position: 'relative',
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    lineHeight: 18,
  },
});
