import 'react-native';
import React from 'react';
import Icon from '../lib/Icon';
import { render, fireEvent } from '@testing-library/react-native';
// import svgPaths from '@uiw/icons/fonts/w-icon.json';

describe('Icon', () => {
  // it('name', () => {
  //   const { getByTestId } = render(<Icon name='apple' />);
  //   const component = getByTestId('RNE__Icon__svg');
  //   const svg = component.props.children.props.children[0].props.d;
  //   expect(svg).toBe(svgPaths['apple'][0]);
  // });

  it('fill', () => {
    const { getByTestId } = render(<Icon name="apple" fill="#ff0000" />);
    const component = getByTestId('RNE__Icon__svg');
    expect(component.props.fill).toBe('#ff0000');
  });

  it('stroke', () => {
    const { getByTestId } = render(<Icon name="apple" stroke="#ffff00" />);
    const component = getByTestId('RNE__Icon__svg');
    expect(component.props.stroke).toBe('#ffff00');
  });

  it('xml', () => {
    const xml = `
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          fill="#000"
          d="M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z"
        />
      </svg>
    `;
    const { getByTestId } = render(<Icon xml={xml} />);
    const component = getByTestId('RNE__Icon__svgXml');
    expect(component.props.xml).toBe(xml);
  });

  it('size', () => {
    const { getByTestId } = render(<Icon name="apple" size={21} />);
    const component = getByTestId('RNE__Icon__svg');
    expect(component.props.width).toBe(21);
    expect(component.props.height).toBe(21);
  });

  it('width and height', () => {
    const { getByTestId } = render(<Icon name="apple" width={21} height={22} />);
    const component = getByTestId('RNE__Icon__svg');
    expect(component.props.width).toBe(21);
    expect(component.props.height).toBe(22);
  });

  it('onPress', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Icon name="apple" onPress={fn} />);
    const component = getByTestId('RNE__Icon__svg');
    fireEvent(component, 'press');
    expect(fn).toHaveBeenCalled();
  });
});
