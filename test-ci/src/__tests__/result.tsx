/**
 * @format
 */

import 'react-native';
import React from 'react';
import Result from '../lib/Result';
import Icon from '../lib/Icon';
import Del from '../lib/Typography/S';
import { Text } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Result', () => {
  // const component = TestRenderer.create(<Radio value="1">Radio</Radio>);
  const component = renderer.create(
    <Result
      img={<Icon name="pay-circle-o" size={60} fill="#008EF0" />}
      title="支付成功"
      message={
        <Text>
          998.00元 <Del>1098元</Del>
        </Text>
      }
    />,
  );
  expect(component.root.props.img).toStrictEqual(<Icon name="pay-circle-o" size={60} fill="#008EF0" />);
  expect(component.root.props.title).toBe('支付成功');
  expect(component.root.props.message).toStrictEqual(
    <Text>
      998.00元 <Del>1098元</Del>
    </Text>,
  );
});
