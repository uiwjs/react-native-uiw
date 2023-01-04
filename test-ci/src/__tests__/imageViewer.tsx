/**
 * @format
 */

import 'react-native';
import React from 'react';
import ImageViewer from '../lib/ImageViewer';
import jest from 'jest';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const defaultImage = 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg';
it('ImageViewer', () => {
  const component = renderer.create(<ImageViewer height={100} width={100} src={defaultImage} />);
  expect(component.root.props.height).toBe(100);
  expect(component.root.props.width).toBe(100);
  expect(component.root.props.src).toStrictEqual(defaultImage);
});
