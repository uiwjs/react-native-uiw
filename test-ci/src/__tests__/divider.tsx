import renderer from 'react-test-renderer';

import 'react-native';
import React from 'react';
import Divider from '../lib/Divider';
import { render } from '@testing-library/react-native';
import { keys, toObject } from '../utils';

const TYPES: keys = {
  horizontal: 'row',
  vertical: 'column',
};

describe('Divider', () => {
  it('label', () => {
    const { getByTestId } = render(<Divider label="这是一条分割线" />);
    const component = getByTestId('RNE__Divider__label');
    const lable = component.props.children[1];
    expect(lable).toBe('这是一条分割线');
  });

  describe.each`
    type
    ${'horizontal'}
    ${'vertical'}
  `('$type', ({ type }) => {
    it(`should display type ${type} divider`, () => {
      const { getByTestId } = render(<Divider type={type} />);
      const component = getByTestId('RNE__Divider__wrap');
      const styles = toObject(component.props.style);
      expect(styles.flexDirection).toBe(TYPES[type]);
    });
  });

  it('gutter', () => {
    const { getByTestId } = render(<Divider gutter={12} />);
    const component = getByTestId('RNE__Divider__start');
    const styles = toObject(component.props.style);
    expect(styles.marginHorizontal).toBe(12);
  });

  describe.each`
    orientation
    ${'left'}
    ${'right'}
    ${'center'}
  `('$orientation', ({ orientation }) => {
    it(`should display orientation ${orientation} divider`, () => {
      const { toJSON } = render(<Divider label="这是一条分割线" orientation={orientation} />);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
