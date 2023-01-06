import 'react-native';
import React from 'react';
import Input from '../lib/Input';
import { render, fireEvent } from '@testing-library/react-native';

describe('input', () => {
  it('snapshot', () => {
    const DefaultInput = () => {
      return <Input testID="input" />;
    };
    // const { toJSON } = render(<DefaultInput />);
    // expect(toJSON()).toMatchSnapshot();
  });
});
