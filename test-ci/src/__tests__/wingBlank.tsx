import 'react-native';
import React from 'react';
import WingBlank from '../lib/WingBlank';
import { render } from '@testing-library/react-native';
import { keys, toObject } from '../utils';

const SIZE: keys = {
  small: 6,
  default: 12,
  large: 16,
};

describe('WingBlank', () => {
  describe.each`
    size
    ${'small'}
    ${'default'}
    ${'large'}
  `('$size', ({ size }) => {
    it(`should display size ${size} wingBlank`, () => {
      const { getByTestId } = render(<WingBlank size={size} />);
      const component = getByTestId('RNE__WingBlank__view');
      const styles = toObject(component.props.style);
      expect(styles.marginHorizontal).toBe(SIZE[size]);
    });
  });
});
