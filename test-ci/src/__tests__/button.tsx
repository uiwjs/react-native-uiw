/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../lib/Button';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Button', () => {
  renderer.create(<Button />);
});
