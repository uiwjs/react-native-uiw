/**
 * @format
 */

import 'react-native';
import React from 'react';
import Badge from '../lib/Badge';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Badge', () => {
  const component = renderer.create(
    <Badge text="标记" color="red" rounded={12} />
  );
  expect(component.root.props.type).toBeTruthy();
  expect(component.root.props.color).toBe('red');
  expect(component.root.props.text).toBe('标记');
  expect(component.root.props.rounded).toBe(12);
});