/**
 * @format
 */

import 'react-native';
import React from 'react';
import ExpandableSection from '../lib/ExpandableSection';
import { View, Text } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('ExpandableSection', () => {
  const onPressMock = jest.fn();

  const component = renderer.create(
    <ExpandableSection
      expanded={true}
      onPress={onPressMock}
      sectionHeader={
        <View>
          <Text>展开</Text>
        </View>
      }
      top={false}
    >
      <Text>折叠的内容</Text>
    </ExpandableSection>,
  );
  expect(component.root.props.expanded).toBeTruthy();
  // 调用点击事件，确保模拟函数被调用的确切次数
  component.root.props.onPress(onPressMock);
  expect(onPressMock).toHaveBeenCalledTimes(1);
  expect(component.root.props.sectionHeader).toStrictEqual(
    <View>
      <Text>展开</Text>
    </View>,
  );
  expect(component.root.props.children).toStrictEqual(<Text>折叠的内容</Text>);
  expect(component.root.props.top).toBeFalsy();
});
