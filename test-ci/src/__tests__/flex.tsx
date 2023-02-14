import 'react-native';
import React from 'react';
import Flex from '../lib/Flex';
import Button from '../lib/Button';
import { render } from '@testing-library/react-native';
import { keys, toObject } from '../utils';

const JUSTIFYS: keys = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
};

const ALIGNS: keys = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
};

describe('Flex', () => {
  describe.each`
    direction
    ${'row'}
    ${'column'}
    ${'row-reverse'}
    ${'column-reverse'}
  `('$direction', ({ direction }) => {
    it(`should display direction ${direction} flex`, () => {
      const { getByTestId } = render(
        <Flex direction={direction}>
          <Flex.Item>
            <Button>A</Button>
          </Flex.Item>
          <Flex.Item>
            <Button>B</Button>
          </Flex.Item>
        </Flex>,
      );
      const component = getByTestId('RNE__Flex__wrap');
      const styles = toObject(component.props.style);
      expect(styles.flexDirection).toBe(direction);
    });
  });

  describe.each`
    justify
    ${'start'}
    ${'end'}
    ${'center'}
    ${'between'}
    ${'around'}
  `('$justify', ({ justify }) => {
    it(`should display justify ${justify} flex`, () => {
      const { getByTestId } = render(
        <Flex justify={justify}>
          <Flex.Item>
            <Button>A</Button>
          </Flex.Item>
          <Flex.Item>
            <Button>B</Button>
          </Flex.Item>
        </Flex>,
      );
      const component = getByTestId('RNE__Flex__wrap');
      const styles = toObject(component.props.style);
      expect(styles.justifyContent).toBe(JUSTIFYS[justify]);
    });
  });

  describe.each`
    align
    ${'start'}
    ${'end'}
    ${'center'}
    ${'stretch'}
    ${'baseline'}
  `('$align', ({ align }) => {
    it(`should display align ${align} flex`, () => {
      const { getByTestId } = render(
        <Flex align={align}>
          <Flex.Item>
            <Button>A</Button>
          </Flex.Item>
          <Flex.Item>
            <Button>B</Button>
          </Flex.Item>
        </Flex>,
      );
      const component = getByTestId('RNE__Flex__wrap');
      const styles = toObject(component.props.style);
      expect(styles.alignItems).toBe(ALIGNS[align]);
    });
  });

  describe.each`
    wrap
    ${'wrap'}
    ${'nowrap'}
    ${'wrap-reverse'}
  `('$wrap', ({ wrap }) => {
    it(`should display align ${wrap} flex`, () => {
      const { getByTestId } = render(
        <Flex wrap={wrap}>
          <Flex.Item>
            <Button>A</Button>
          </Flex.Item>
          <Flex.Item>
            <Button>B</Button>
          </Flex.Item>
        </Flex>,
      );
      const component = getByTestId('RNE__Flex__wrap');
      const styles = toObject(component.props.style);
      expect(styles.flexWrap).toBe(wrap);
    });
  });
});
