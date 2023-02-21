/**
 * @format
 */

import 'react-native';
import React from 'react';
import Empty from '../lib/Empty';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Empty', () => {
  const component = renderer.create(
    <Empty label="冇得数据咯" size={120} labelStyle={{ color: 'red' }}>
      冇得数据咯
    </Empty>,
  );
  expect(component.root.props.label).toBe('冇得数据咯');
  expect(component.root.props.size).toBe(120);
  expect(component.root.props.labelStyle).toBeTruthy();
  expect(component.root.props.xml).toBeTruthy();
  expect(component.root.props.children).toBe('冇得数据咯');
});
