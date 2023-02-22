import React, { useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, StyleProp, Text, TextStyle, View } from 'react-native';

export interface MarqueeProps {
  text?: React.ReactNode;
  loop?: boolean;
  leading?: number;
  trailing?: number;
  className?: string;
  fps?: number;
  style?: StyleProp<TextStyle>;
  maxWidth?: number;
}

type StateType = { twidth: number; width: number };

function Marquee(props: MarqueeProps) {
  // const [texts, setTexts] = useState({});
  const [left, _setLeft] = useState(new Animated.Value(0));
  const [state, setState] = useState<StateType>({ twidth: 0, width: 0 });

  function tryStart(state: StateType) {
    if (state.twidth > state.width && state.width) {
      startMove();
    }
  }

  const onLayout = (e: LayoutChangeEvent) => {
    if (state.twidth) {
      return;
    }

    const states = { ...state, twidth: e.nativeEvent.layout.width };
    setState(states);
    tryStart(states);
  };

  const onLayoutContainer = (e: LayoutChangeEvent) => {
    if (!state.width) {
      const states = { ...state, width: e.nativeEvent.layout.width };
      setState(states);
      left.setValue(0);
      tryStart(states);
    }
  };

  const startMove = () => {
    const { fps = 40, loop } = props;
    const SPPED = (1 / fps) * 1000;
    // tslint:disable-next-line:no-this-assignment
    Animated.timing(left, {
      toValue: 1,
      duration: state.twidth * SPPED,
      easing: Easing.linear,
      delay: props.leading,
      isInteraction: false,
      useNativeDriver: true,
    }).start(() => {
      if (loop) {
        moveToHeader();
      }
    });
  };

  const moveToHeader = () => {
    Animated.timing(left, {
      toValue: 0,
      duration: 0,
      delay: props.trailing,
      isInteraction: false,
      useNativeDriver: true,
    }).start(() => {
      startMove();
    });
  };

  const { width, twidth } = state;
  const { style, text, maxWidth } = props;

  const textChildren = (
    <Text onLayout={onLayout} numberOfLines={1} ellipsizeMode="tail" style={style}>
      {text}
    </Text>
  );

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onLayout={onLayoutContainer}>
      <Animated.View
        // tslint:disable-next-line:jsx-no-multiline-js
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: left.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -twidth + width],
              }),
            },
          ],
          width: maxWidth,
        }}
      >
        {textChildren}
      </Animated.View>
    </View>
  );
}

Marquee.defaultProps = {
  text: '',
  loop: false,
  leading: 500,
  trailing: 800,
  fps: 40,
  maxWidth: 1000,
} as MarqueeProps;

export default Marquee;
