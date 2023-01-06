/**
 * @format
 */

import 'react-native';
import React from 'react';
import ExpandableSection from '../lib/ExpandableSection';
import { View, Text } from 'react-native';
import renderer from 'react-test-renderer';

it('ExpandableSection', () => {
  const component = renderer.create(
    <ExpandableSection sectionHeader={<h5>我是标题</h5>} expanded={true} top={true}>
      <View>
        <Text style={{ color: 'red' }}>展开的内容</Text>
      </View>
    </ExpandableSection>,
  );

  expect(component.root.props.top).toBeTruthy();
  expect(component.root.props.expanded).toBeTruthy();
  expect(component.root.props.sectionHeader).toStrictEqual(<h5>我是标题</h5>);
  expect(component.root.props.children).toStrictEqual(
    <View>
      <Text style={{ color: 'red' }}>展开的内容</Text>
    </View>
  );
});
