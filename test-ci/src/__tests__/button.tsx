import 'react-native';
import React from 'react';
import Button from '../lib/Button';
import { colors } from '../lib/utils';
import { ActivityIndicator } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { keys, colorRgb, toObject } from '../utils';

const TYPES: keys = {
  primary: colors.blue,
  success: colors.green,
  warning: colors.yellow,
  danger: colors.red,
  light: colors.white,
  dark: colors.black,
};

const SIZES: keys = { small: 3, default: 8, large: 10 };

describe('Button', () => {
  it('color', () => {
    const { getByTestId } = render(<Button color="#1EABCD">自定义颜色</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.style.backgroundColor).toBe(colorRgb('#1EABCD'));
  });

  it('disabled', () => {
    const { getByTestId } = render(<Button disabled>disabled</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.accessibilityState.disabled).toBe(true);
  });

  it('border', () => {
    const { getByTestId } = render(<Button bordered={false}>bordered</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.style.borderWidth).toBe(0);
  });

  it('loading', () => {
    const { UNSAFE_getByType } = render(<Button loading>loading</Button>);
    const icons = UNSAFE_getByType(ActivityIndicator);
    expect(icons.props.size).toBe(16);
  });

  it('rounded', () => {
    const { getByTestId } = render(<Button rounded={20}>rounded</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.style.borderRadius).toBe(20);
  });

  it('textStyle', () => {
    const { getByTestId } = render(<Button textStyle={{ fontSize: 20 }}>textStyle</Button>);
    const component = getByTestId('RNE__Button__div');
    const styles = toObject(component.props.style);
    expect(styles.fontSize).toBe(20);
  });

  describe.each`
    type
    ${'primary'}
    ${'success'}
    ${'warning'}
    ${'danger'}
    ${'light'}
    ${'dark'}
  `('$type', ({ type }) => {
    it(`should display type ${type} button`, () => {
      const { getByTestId } = render(<Button type={type}>{type}</Button>);
      const component = getByTestId('RNE__Button__wrap');
      expect(component.props.style.backgroundColor).toBe(colorRgb(TYPES[type]));
    });
  });

  describe.each`
    size
    ${'small'}
    ${'default'}
    ${'large'}
  `('$size', ({ size }) => {
    it(`should display size ${size} button`, () => {
      const { getByTestId } = render(<Button size={size}>{size}</Button>);
      const component = getByTestId('RNE__Button__wrap');
      expect(component.props.style.paddingHorizontal).toBe(SIZES[size]);
    });
  });

  it('onPress events', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Button onPress={fn}>onPress</Button>);
    const component = getByTestId('RNE__Button__wrap');
    fireEvent(component, 'press');
    expect(fn).toHaveBeenCalled();
  });

  it('onPress events if disabled', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Button disabled onPress={fn}>
        onPress
      </Button>,
    );
    const component = getByTestId('RNE__Button__wrap');
    fireEvent(component, 'press');
    expect(fn).not.toHaveBeenCalled();
  });
});
