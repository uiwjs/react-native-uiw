import 'react-native';
import React from 'react';
import Radio from '../lib/Radio';
import { render, fireEvent, act } from '@testing-library/react-native';

describe('Radio', () => {
  it('disabled', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<Radio disabled />);
    act(() => jest.runAllTimers());

    const component = getByTestId('RNE__Radio__view');
    expect(component.props.accessibilityState.disabled).toBe(true);
  });

  it('borderColor', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<Radio borderColor="#bdc1cc" />);
    act(() => jest.runAllTimers());

    const component = getByTestId('RNE__Radio__border');

    expect(component.props.style.borderColor).toBe('#bdc1cc');
  });

  it('checkedColor', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<Radio checkedColor="#008EF0" />);
    act(() => jest.runAllTimers());

    const component = getByTestId('RNE__Radio__box');
    expect(component.props.style.backgroundColor).toBe('#008EF0');
  });

  it('circleSize', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<Radio circleSize={21} />);
    act(() => jest.runAllTimers());
    const component = getByTestId('RNE__Radio__border');
    expect(component.props.style.width).toBe(21);
    expect(component.props.style.height).toBe(21);
  });

  it('onPress events', () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    const { getByTestId } = render(<Radio onPress={fn} />);
    act(() => jest.runAllTimers());
    const component = getByTestId('RNE__Radio__view');
    fireEvent(component, 'press');
    expect(fn).toHaveBeenCalled();
  });

  it('disabled onPress events', () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    const { getByTestId } = render(<Radio disabled onPress={fn} />);
    act(() => jest.runAllTimers());
    const component = getByTestId('RNE__Radio__view');
    fireEvent(component, 'press');
    expect(fn).not.toHaveBeenCalled();
  });
});
