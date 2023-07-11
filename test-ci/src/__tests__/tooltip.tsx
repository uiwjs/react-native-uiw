import { View, Text } from 'react-native';
import React from 'react';
import Tooltip from '../lib/Tooltip';
import { render, fireEvent, act } from '@testing-library/react-native';
import { toObject } from '../utils';

describe('Tooltip', () => {
  it('title', () => {
    jest.useFakeTimers();
    const { getByTestId, getByText } = render(
      <Tooltip title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    const pressable = getByTestId('RNE__Tooltip__pressable');
    act(() => {
      jest.runAllTimers();
    });
    fireEvent(pressable, 'press');
    expect(getByText('标题')).toBeTruthy();
  });
  it('height', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Tooltip title="标题" height={80}>
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    act(() => {
      jest.runAllTimers();
    });
    const pressable = getByTestId('RNE__Tooltip__pressable');
    // const component = getByTestId('RNE__Tooltip__wrap');
    fireEvent(pressable, 'press');
    // expect(component.props.height).toBe(80)
  });
  it('width', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(
      <Tooltip title="标题" width={100}>
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    act(() => {
      jest.runAllTimers();
    });
    const pressable = getByTestId('RNE__Tooltip__pressable');
    // const component = getByTestId('RNE__Tooltip__wrap');
    fireEvent(pressable, 'press');
    // expect(component.props.width).toBe(100)
  });
  it('backgroundColor', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Tooltip backgroundColor="red" title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    act(() => {
      jest.runAllTimers();
    });
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');

    const component = getByTestId('RNE__Tooltip__cloud__view');
    const styles = toObject(component.props.style);
    expect(styles.backgroundColor).toBe('red');
  });
  it('borderRadius', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Tooltip borderRadius={10} title="标题">
        <View>
          <Text>我是一个文本</Text>
        </View>
      </Tooltip>,
    );
    act(() => {
      jest.runAllTimers();
    });
    const pressable = getByTestId('RNE__Tooltip__pressable');
    fireEvent(pressable, 'press');

    const component = getByTestId('RNE__Tooltip__cloud__view');
    const styles = toObject(component.props.style);
    expect(styles.borderRadius).toBe(10);
  });
});
