/**
 * @format
 */

import 'react-native';
import React from 'react';
import ActionBar, { ActionBarActionsProps } from '../lib/ActionBar';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('ActionBar', () => {
  const actions: ActionBarActionsProps[] = [
    {
      label: 'Delete',
      fontStyle: { fontWeight: 'bold', color: '#fff' },
    },
    {
      label: 'Replace',
      fontStyle: { fontWeight: 'bold', color: '#fff' },
    },
    {
      label: 'Edit',
      fontStyle: { fontWeight: 'bold', color: '#fff' },
    },
  ];
  const component = renderer.create(
    <ActionBar scroll keepAbsoulte useSafeArea focusIndex={1} height={48} backgroundColor="red" actions={actions} />,
  );
  expect(component.root.props.scroll).toBeTruthy();
  expect(component.root.props.keepAbsoulte).toBeTruthy();
  expect(component.root.props.useSafeArea).toBeTruthy();
  expect(component.root.props.height).toBe(48);
  expect(component.root.props.focusIndex).toBe(1);
  expect(component.root.props.backgroundColor).toBe('red');
  expect(component.root.props.actions).toMatchObject(actions);
});
