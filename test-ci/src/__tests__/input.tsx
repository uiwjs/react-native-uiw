import 'react-native';
import React from 'react';
import Input from '../lib/Input';
import Icon from '../lib/Icon';
import { TextInput, Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

describe('input', () => {
  it('disabled', () => {
    const { getByTestId } = render(<Input disabled testID="input" />);
    const component = getByTestId('input');
    expect(component.props.editable).toBe(false);
  });

  it('clear', () => {
    const { getByText } = render(<Input clear />);
    expect(getByText('清除')).toBeTruthy();
  });

  it('renderClear', () => {
    const { getByText } = render(<Input clear renderClear={<Text>remove</Text>} />);
    expect(getByText('remove')).toBeTruthy();
  });

  it('error', () => {
    const { UNSAFE_getByType } = render(<Input error testID="input" />);
    const icons = UNSAFE_getByType(Icon);
    expect(icons.props.name).toBe('circle-close');
  });

  it('renderError', () => {
    const { getByText } = render(<Input error renderError={<Text>error text</Text>} />);
    expect(getByText('error text')).toBeTruthy();
  });
});
