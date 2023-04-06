import React, { useState } from 'react';
import { ViewStyle, TextStyle, Text } from 'react-native';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import Button from '../Button';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';

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
  colors?: string;
}

export interface SegmentedControlState {
  selectedIndex: number;
}

export default function SegmentedControl<T extends React.ReactPortal>(props: SegmentedControlProps<T>) {
  const theme = useTheme<Theme>();
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
      actived: theme.colors.text_active || '#fff',
      unactived: props.color ?? (theme.colors.primary_background || '#3578e5'),
    },
    colors = props.color || theme.colors.primary_background || '#3578e5',
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
            textStyle.color = colors;
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
} as SegmentedControlProps<{}>;
