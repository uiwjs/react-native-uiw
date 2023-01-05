import 'react-native';
import React from 'react';
import Input from '../lib/Input';
import { render, fireEvent } from '@testing-library/react-native';

describe('input', () => {
  it('snapshot', () => {
    const DefaultInput = () => {
      return <Input testID="input" />;
    };
    const { getByTestId, toJSON } = render(<DefaultInput />);
    const box = getByTestId('input');
    fireEvent.changeText(box, 'aaaa');
    expect(box.props.value).toBe('aaaa');
    expect(toJSON()).toMatchSnapshot();
  });
});
