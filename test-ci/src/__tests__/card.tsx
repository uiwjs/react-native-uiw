/**
 * @format
 */

import 'react-native';
import React from 'react';
import Card from '../lib/Card';
import { Image } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Card', () => {
  const onPressMock = jest.fn();

  const component = renderer.create(
    <Card selected={true} borderRadius={12} onPress={onPressMock}>
      <Image
        source={{
          uri: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d',
        }}
        style={{ height: 200, marginTop: 10 }}
      />
    </Card>,
  );
  // 判断selected是否为真
  expect(component.root.props.selected).toBeTruthy();
  expect(component.root.props.borderRadius).toBe(12);
  // 调用点击事件，确保模拟函数被调用的确切次数
  component.root.props.onPress(onPressMock);
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
