import 'react-native';
import React from 'react';
import ButtonGroup from '../lib/ButtonGroup';
import Button from '../lib/Button';
import Flex from '../lib/Flex';
import { render } from '@testing-library/react-native';
import { toObject } from '../utils';

describe('ButtonGroup', () => {
  it('gutter', () => {
    const { UNSAFE_getByType } = render(
      <ButtonGroup gutter={20}>
        <Button>警告</Button>
        <Button>警告</Button>
        <Button>主要</Button>
        <Button>警告</Button>
      </ButtonGroup>,
    );
    const flex = UNSAFE_getByType(Flex);
    flex.props.children.map((item: any, index: number) => {
      const marginLeft = index === 0 ? undefined : 10;
      const styles = toObject(item.props.style);
      expect(styles.marginLeft).toBe(marginLeft);
    });
  });

  it('inline', () => {
    const { UNSAFE_getByType } = render(
      <ButtonGroup inline>
        <Button>警告</Button>
        <Button>警告</Button>
        <Button>主要</Button>
        <Button>警告</Button>
      </ButtonGroup>,
    );
    const flex = UNSAFE_getByType(Flex);
    flex.props.children.map((item: any) => {
      const styles = toObject(item.props.style);
      expect(styles.flex).toBe(0);
    });
  });
});
