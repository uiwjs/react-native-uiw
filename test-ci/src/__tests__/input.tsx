import 'react-native';
import React from 'react';
import Input from '../lib/Input';
import Icon from '../lib/Icon';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { keys, toObject } from '../utils';

const BORDERS: keys = {
  bottom: 'borderBottomWidth',
  top: 'borderTopWidth',
  left: 'borderLeftWidth',
  right: 'borderRightWidth',
  always: 'borderWidth',
};

describe('Input', () => {
  it('placeholder', () => {
    const { getByTestId } = render(<Input placeholder="My Placeholder" />);
    const component = getByTestId('RNE__Input__input');
    expect(component.props.placeholder).toBe('My Placeholder');
  });

  it('extraStart', () => {
    const { getByText } = render(<Input extraStart="小数" />);
    expect(getByText('小数')).toBeTruthy();
  });

  it('extraEnd', () => {
    const { getByText } = render(<Input extraEnd="小数" />);
    expect(getByText('小数')).toBeTruthy();
  });

  /**
   * 正则效验只能输入数字。
   * 当模拟输入字母 `a`时，模拟函数被触发1次，反之输入数字，则模拟函数不会触发。
   */
  it('rule', async () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Input rule={/^[\d]+$/} wrongfulHandle={fn} />);
    const component = getByTestId('RNE__Input__input');
    fireEvent.changeText(component, 'a');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('disabled', () => {
    const { getByTestId } = render(<Input disabled />);
    const component = getByTestId('RNE__Input__input');
    expect(component.props.editable).toBe(false);
  });

  it('clear', () => {
    const { getByText } = render(<Input clear />);
    expect(getByText('清除')).toBeTruthy();
  });

  it('renderClear', () => {
    const { getByText } = render(<Input clear renderClear={<Text>remove</Text>} />);
    expect(getByText('remove')).toBeTruthy();
  });

  it('error', () => {
    const { UNSAFE_getByType } = render(<Input error />);
    const icons = UNSAFE_getByType(Icon);
    expect(icons.props.name).toBe('circle-close');
  });

  it('renderError', () => {
    const { getByText } = render(<Input error renderError={<Text>error text</Text>} />);
    expect(getByText('error text')).toBeTruthy();
  });

  describe.each`
    border
    ${'bottom'}
    ${'top'}
    ${'left'}
    ${'right'}
    ${'always'}
  `('$border', ({ border }) => {
    it(`should display border ${border} input`, () => {
      const { getByTestId } = render(<Input border={border} />);
      const component = getByTestId('RNE__Input__view');
      const styles = toObject(component.props.style);
      expect(styles[BORDERS[border]]).toBe(1);
    });
  });

  it('borderColor', () => {
    const { getByTestId } = render(<Input borderColor="red" />);
    const component = getByTestId('RNE__Input__view');
    const styles = toObject(component.props.style);
    expect(styles.borderColor).toBe('red');
  });

  it('containerStyle', () => {
    const { getByTestId } = render(<Input border="bottom" containerStyle={{ marginBottom: 10 }} />);
    const component = getByTestId('RNE__Input__wrap');
    const styles = toObject(component.props.style);
    expect(styles.marginBottom).toBe(10);
  });

  it('onChangeText', async () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Input onChangeText={fn} />);
    const component = getByTestId('RNE__Input__input');
    fireEvent.changeText(component, 'a');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
