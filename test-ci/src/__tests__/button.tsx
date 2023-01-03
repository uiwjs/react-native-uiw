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
  const component = renderer.create(
    <Button type="primary" rounded disabled loading={true} size="large" bordered color="red">
      按钮
    </Button>,
  );
  expect(component.root.props.type).toBe('primary');
  expect(component.root.props.color).toBe('red');
  expect(component.root.props.rounded).toBeTruthy();
  expect(component.root.props.disabled).toBeTruthy();
  expect(component.root.props.loading).toBeTruthy();
  expect(component.root.props.bordered).toBeTruthy();
  expect(component.root.props.size).toBe('large');
  expect(component.root.props.children).toBe('按钮');
});
