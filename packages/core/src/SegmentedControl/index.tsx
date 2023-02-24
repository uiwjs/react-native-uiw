import React, { useState } from 'react';
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

export default function SegmentedControl<T extends React.ReactPortal>(props: SegmentedControlProps<T>) {
  const [state, setState] = useState({
    selectedIndex: props.selectedIndex || 0,
  });

  const handlePress = (label: string | T, selectedIndex: number) => {
    setState({ selectedIndex });

    const { onValueChange } = props;
    onValueChange && onValueChange(label, selectedIndex);
    return undefined;
  };

  const {
    value,
    selectedIndex,
    renderItem,
    textColor = {
      actived: '#fff',
      unactived: props.color ?? '#108ee9',
    },
    ...otherProps
  } = props;

  return (
    <ButtonGroup {...otherProps}>
      {value &&
        (value as (string | T)[]).map((label: string | T, key: number) => {
          const styl: ViewStyle = {};
          const textStyle: TextStyle = {};
          let textStyleColor: string = textColor.actived!;
          if (state.selectedIndex !== key + 1) {
            styl.backgroundColor = '#fff';
            textStyle.color = otherProps.color;
            textStyleColor = textColor.unactived!;
          }
          const props: ButtonGroupProps = {
            type: 'primary',
            style: [styl, otherProps.textStyle],
            textStyle: [textStyle],
            onPress: () => handlePress(label, key + 1),
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

SegmentedControl.defaultProps = {
  value: [],
  size: 'small',
  selectedIndex: 0,
  color: '#108ee9',
} as SegmentedControlProps<{}>;
