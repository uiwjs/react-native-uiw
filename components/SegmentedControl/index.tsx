import React, { Component } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import Button from '../Button';

export interface SegmentedControlProps extends ButtonGroupProps {
  value?: string[];
  selectedIndex?: number;
  onValueChange?: (selectedIndex: number) => void;
}

export interface SegmentedControlState {
  selectedIndex: number;
}

export default class SegmentedControl extends Component<SegmentedControlProps, SegmentedControlState> {
  constructor(props: SegmentedControlProps) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex || 0,
    };
  }
  static defaultProps: SegmentedControlProps = {
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
    const { value, selectedIndex, ...otherProps } = this.props;
    return (
      <ButtonGroup {...otherProps}>
        {value!.map((label, key) => {
          const styl: ViewStyle = {};
          const textStyle: TextStyle = {};
          if (this.state.selectedIndex !== key + 1) {
            styl.backgroundColor = '#fff';
            textStyle.color = otherProps.color;
          }
          return React.cloneElement(<Button />, {
            key,
            type: 'primary',
            style: [styl, otherProps.textStyle],
            textStyle: [textStyle],
            onPress: this.handlePress.bind(this, key + 1),
          }, label);
        })}
      </ButtonGroup>
    );
  }
}