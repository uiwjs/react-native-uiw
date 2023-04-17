/**
 * @format
 */

import 'react-native';
import React from 'react';
import Progress from '../lib/Progress';
import renderer from 'react-test-renderer';

it('Progress', () => {
  const component = renderer.create(
    <Progress type='line' value={60} />,
  );
  expect(component.root.props.type).toBe('line');
  expect(component.root.props.value).toBe(60);
});
