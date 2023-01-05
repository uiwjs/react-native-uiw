/**
 * @format
 */

import 'react-native';
import React from 'react';
import Steps, { StepsItemsProps } from '../lib/Steps';
import TestRenderer, { act } from 'react-test-renderer';

describe('Steps', () => {
  const items: StepsItemsProps[] = [
    { title: '步骤一', desc: '这里是额外的信息，这里是额外的信息' },
    { title: '步骤二', desc: '这里是额外的信息,这里是额' },
    { title: '步骤三', desc: '这里是' },
  ];

  it('Steps', () => {
    const testRender = TestRenderer.create(<Steps items={items} current={1} />);
    expect(testRender.root.props.current).toBe(1);
    expect(testRender.root.props.items).toMatchObject(items);
  });

  it('should handle onChange event', () => {
    const onChange = jest.fn();
    const testRender = TestRenderer.create(<Steps testID="Steps" items={items} current={1} onChange={onChange} />);
    const testInstance = testRender.root;
    act(() => {
      testInstance.findByProps({ testID: 'Steps' }).props.onChange(1);
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
