/**
 * @format
 */

import 'react-native';
import React from 'react';
import Progress from '../lib/Progress';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { run } from '../lib/Progress/svg';

it('Progress', () => {
  const component = renderer.create(
    <Progress
      progress={30}
      position="fixed"
      progressColor="#108ee9"
      animation={{ duration: 1000 }}
      xml={run}
      iconShow={true}
      size={25}
      progressShow={true}
    />,
  );
  expect(component.root.props.progress).toBe(30);
  expect(component.root.props.position).toBe('fixed');
  expect(component.root.props.progressColor).toBe('#108ee9');
  expect(component.root.props.animation.duration).toBe(1000);
  expect(component.root.props.iconShow).toBeTruthy();
  expect(component.root.props.xml).toStrictEqual(run);
  expect(component.root.props.size).toBe(25);
  expect(component.root.props.progressShow).toBeTruthy();
});
