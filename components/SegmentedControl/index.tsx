import React, { Component } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import Button from '../Button';

export interface SegmentedControlProps<T> extends ButtonGroupProps {
  value?: string[] | T[];
  selectedIndex?: number;
  renderItem?: (label: string | T, selectedIndex: number, props: ButtonGroupProps) => JSX.Element;
  onValueChange?: (selectedIndex: number) => void;
}

export interface SegmentedControlState {
  selectedIndex: number;
}

export default class SegmentedControl<T> extends Component<SegmentedControlProps<T>, SegmentedControlState> {
  constructor(props: SegmentedControlProps<T>) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex || 0,
    };
  }
  static defaultProps: SegmentedControlProps<{}> = {
    value: [],
    size: 'small',
    selectedIndex: 0,
    color: '#108ee9',
  }
  handlePress = (selectedIndex: number) => {
    const { onValueChange } = this.props;
    this.setState({ selectedIndex }, () => {
      onValueChange && onValueChange(selectedIndex);
    });
  }
  render() {
    const { value, selectedIndex, renderItem, ...otherProps } = this.props;
    return (
      <ButtonGroup {...otherProps}>
        {value && (value as (string | T)[]).map((label: string | T, key: number) => {
          const styl: ViewStyle = {};
          const textStyle: TextStyle = {};
          if (this.state.selectedIndex !== key + 1) {
            styl.backgroundColor = '#fff';
            textStyle.color = otherProps.color;
          }
          const props: ButtonGroupProps = {
            type: 'primary',
            style: [styl, otherProps.textStyle],
            textStyle: [textStyle],
            onPress: this.handlePress.bind(this, key + 1),
          }
          const child = renderItem ? <View>{renderItem(label, key + 1, props)}</View> : label;
          return React.cloneElement(<Button key={key} />, { ...props }, child);
        })}
      </ButtonGroup>
    );
  }
}