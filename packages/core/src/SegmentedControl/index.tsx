import React, { Component } from 'react';
import { ViewStyle, TextStyle, Text } from 'react-native';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import Button from '../Button';

export interface TextColorType {
  actived?: string;
  unactived?: string;
}
export interface SegmentedControlProps<T> extends ButtonGroupProps {
  value?: string[] | T[];
  selectedIndex?: number;
  renderItem?: (label: string | T, selectedIndex: number, props: ButtonGroupProps) => JSX.Element;
  onValueChange?: (label: string | T, selectedIndex: number) => void;
  textColor?: TextColorType;
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
  };
  handlePress = (label: string | T, selectedIndex: number) => {
    const { onValueChange } = this.props;
    this.setState({ selectedIndex }, () => {
      onValueChange && onValueChange(label, selectedIndex);
    });
  };
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      value,
      selectedIndex,
      renderItem,
      textColor = {
        actived: '#fff',
        unactived: this.props.color ?? '#108ee9',
      },
      ...otherProps
    } = this.props;
    return (
      <ButtonGroup {...otherProps}>
        {value &&
          (value as (string | T)[]).map((label: string | T, key: number) => {
            const styl: ViewStyle = {};
            const textStyle: TextStyle = {};
            let textStyleColor: string = textColor.actived!;
            if (this.state.selectedIndex !== key + 1) {
              styl.backgroundColor = '#fff';
              textStyle.color = otherProps.color;
              textStyleColor = textColor.unactived!;
            }
            const props: ButtonGroupProps = {
              type: 'primary',
              style: [styl, otherProps.textStyle],
              textStyle: [textStyle],
              onPress: this.handlePress.bind(this, label, key + 1),
            };
            if (renderItem) {
              return renderItem(label, key + 1, props);
            }
            return React.cloneElement(
              <Button key={key} />,
              { ...props },
              <Text style={{ color: textStyleColor }}>{label}</Text>,
            );
          })}
      </ButtonGroup>
    );
  }
}
