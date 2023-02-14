/**
 * @format
 */

import 'react-native';
import React from 'react';
import Rating from '../lib/Rating';
import Icon from '../lib/Icon';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Rating', () => {
  const desc = ['0星', '1星', '2星', '3星', '4星', '5星'];
  const component = renderer.create(
    <Rating
      defaultRating={3}
      resultRating={10}
      size={24}
      color="green"
      tooltips={desc}
      tooltipsStyle={{ fontSize: 25, color: 'blue' }}
      icon={{
        unactived: <Icon name="smile-o" fill="red" />,
        actived: <Icon name="smile" fill="red" />,
      }}
      disabled
    />,
  );
  expect(component.root.props.defaultRating).toBe(3);
  expect(component.root.props.resultRating).toBe(10);
  expect(component.root.props.size).toBe(24);
  expect(component.root.props.color).toBe('green');
  expect(component.root.props.disabled).toBeTruthy();
  expect(component.root.props.tooltipsStyle).toMatchObject({ fontSize: 25, color: 'blue' });
  expect(component.root.props.icon.unactived).toStrictEqual(<Icon name="smile-o" fill="red" />);
  expect(component.root.props.icon.actived).toStrictEqual(<Icon name="smile" fill="red" />);
});
