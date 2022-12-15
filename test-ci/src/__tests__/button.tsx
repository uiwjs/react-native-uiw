/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../lib/Button';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Button', () => {
  // const component = TestRenderer.create(<Radio value="1">Radio</Radio>);
  const component = renderer.create(<Button type="primary">按钮</Button>);
  expect(component.root.props.type).toBe('primary');
  expect(component.root.props.children).toBe('按钮');
});
