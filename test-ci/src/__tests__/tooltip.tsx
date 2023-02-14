import { View, Text } from 'react-native';
import React from 'react';
import Tooltip from '../lib/Tooltip';
import { render, fireEvent } from '@testing-library/react-native';
import { toObject } from '../utils';

describe('Tooltip', () => {
  it('title', () => {
    const { getByTestId, getByText } = render(
      <Tooltip title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');
    expect(getByText('标题')).toBeTruthy();
  });
  it('height', () => {
    const { getByTestId } = render(
      <Tooltip title="标题" height={80}>
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');
    const component = getByTestId('RNE__Tooltip__wrap');
    expect(component.props.height).toBe(80);
  });
  it('width', () => {
    const { getByTestId } = render(
      <Tooltip title="标题" width={100}>
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');
    const component = getByTestId('RNE__Tooltip__wrap');
    expect(component.props.width).toBe(100);
  });
  it('backgroundColor', () => {
    const { getByTestId } = render(
      <Tooltip backgroundColor="red" title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');
    const component = getByTestId('RNE__Tooltip__cloud__view');
    const styles = toObject(component.props.style);
    expect(styles.backgroundColor).toBe('red');
  });
  it('borderRadius', () => {
    const { getByTestId } = render(
      <Tooltip borderRadius={10} title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');
    const component = getByTestId('RNE__Tooltip__cloud__view');
    const styles = toObject(component.props.style);
    expect(styles.borderRadius).toBe(10);
  });
});
