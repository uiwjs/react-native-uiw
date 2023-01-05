/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../lib/Button';
import { colors } from '../lib/utils';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';
import { colorRgb } from '../utils';
import { render, screen, fireEvent } from '@testing-library/react-native';

describe('Button', () => {
  test('renders with color', () => {
    const testInstance = TestRenderer.create(
      <>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button color="#1EABCD">自定义颜色</Button>
      </>,
    ) as any;
    expect(testInstance.toJSON()[0].props.style.backgroundColor).toBe(colorRgb(colors.blue));
    expect(testInstance.toJSON()[1].props.style.backgroundColor).toBe(colorRgb(colors.green));
    expect(testInstance.toJSON()[2].props.style.backgroundColor).toBe(colorRgb('#1EABCD'));
  });
  test('loading with ActivityIndicator', () => {
    const testInstance = TestRenderer.create(<Button loading>加载中按钮</Button>) as any;
    const testRoot = testInstance.root;

    expect(testRoot.props.loading).toBeTruthy();
    expect(testInstance.toJSON().children[0].type).toBe('ActivityIndicator');
  });

  // test('renders with onClick', () => {
  //   const DefaultButton = () => {
  //     const [loading, setLoading] = React.useState(true)
  //     return (
  //       <Button onPress={() => setLoading(false)} loading={loading}>
  //         click loading
  //       </Button>
  //     )
  //   }

  //   render(<DefaultButton />);

  //   const { getByText } = render(<DefaultButton />)

  //   const btn = getByText('click loading')

  // })
});
