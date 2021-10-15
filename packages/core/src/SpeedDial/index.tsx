import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ViewProps,
  Dimensions,
  TouchableOpacity, // 点击事件
  Platform, // 动画
  UIManager, // 动画
  Animated, // 动画
  PanResponder, // 手指拖拽
} from 'react-native';
import Icon, { IconsName } from '../Icon';
import { icoType } from '../Rating';
import Item, { SpeedDialItemProps } from './SpeedDialItem';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

let MainHeight = Dimensions.get('window').height;

export interface PanXY extends Animated.Value {
  _value: number;
}

export interface SpeedDialProps extends ViewProps {
  /** 显示的图标 [默认显示, 展开显示] */
  icon?: icoType;
  /** 盒子样式 */
  style?: ViewStyle;
  /** 初始距离下边位置 */
  bottom?: number; //
  /** 初始距离右边位置 */
  right?: number; //
  /** 展开显示的标记 */
  children?: Array<SpeedDialItemProps>;
  /** 是否支持拖拽 */
  isDrag?: boolean;
  /** 动画时间 */
  transitionDuration?: number;
  /**
   * 打开时触发
   */
  onOpen?: Function;
  /**
   * 关闭时触发
   */
  onClose?: Function;
}

function SpeedDial(props: SpeedDialProps) {
  const {
    icon = ['plus', 'close'],
    style,
    onOpen,
    onClose,
    children = new Array<SpeedDialItemProps>(),
    transitionDuration = 200,
    isDrag = false,
    bottom = 350,
    right = 40,
    ...other
  } = props;
  const [success, setSuccess] = useState(false);
  const [iconName, setIconName] = useState('plus');
  const pan: Animated.ValueXY = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: (pan.x as PanXY)._value,
          y: (pan.y as PanXY)._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;
  const fadeAnim = useRef<Animated.Value[]>(new Array(children.length).fill(new Animated.Value(0))).current;
  useEffect(() => {
    Animated.stagger(
      100,
      fadeAnim
        .map((_, i) =>
          Animated.timing(fadeAnim[i], {
            toValue: iconName !== 'plus' ? 1 : 0,
            duration: transitionDuration,
            useNativeDriver: true,
          }),
        )
        [iconName !== 'plus' ? 'sort' : 'reverse'](),
    ).start(({ finished }) => {
      if (iconName === 'plus') {
        if (!finished) {
          fadeAnim.forEach((_, i) =>
            Animated.timing(fadeAnim[i], {
              toValue: iconName !== 'plus' ? 1 : 0,
              duration: 50,
              useNativeDriver: true,
            }).stop(),
          );
        }
        setSuccess(false);
      }
    });
  }, [iconName]);
  const PlusDom = useMemo(() => {
    if (icon[0] instanceof Object) {
      return <React.Fragment>{icon[0]}</React.Fragment>;
    } else {
      return <Icon name={icon[0] as IconsName} color="#fff" size={18} />;
    }
  }, []);
  const CloseDom = useMemo(() => {
    if (icon[1] instanceof Object) {
      return <React.Fragment>{icon[1]}</React.Fragment>;
    } else {
      return <Icon name={icon[1] as IconsName} color="#fff" size={18} />;
    }
  }, []);
  const onOpenHome = () => {
    setSuccess(true);
    if (iconName === 'plus') {
      setIconName('close');
      onOpen && onOpen();
    } else {
      setIconName('plus');
      onClose && onClose();
    }
  };
  return (
    <View>
      <Animated.View
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        // {...panResponder.panHandlers}
      >
        <View style={[styles.viewPosition, { bottom: bottom - MainHeight, right: right }]}>
          {success &&
            children.map((item, i) => (
              <Animated.View
                style={[
                  styles.fadingContainer,
                  {
                    // Bind opacity to animated value
                    opacity: fadeAnim[i],
                  },
                ]}
                key={i}
              >
                <Item {...item} move={panResponder.panHandlers} />
              </Animated.View>
            ))}
          <View {...panResponder.panHandlers}>
            <TouchableOpacity activeOpacity={1} onPress={onOpenHome}>
              <View style={[styles.homeContainer, { ...style }]} {...other}>
                {iconName === 'plus' ? PlusDom : CloseDom}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    alignItems: 'flex-end',
    opacity: 0,
  },
  viewPosition: {
    position: 'absolute',
    // bottom: 350 - MainHeight,
    // right: 40,
    zIndex: 9999,
    alignItems: 'flex-end',
  },

  homeContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#b779e2',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeedDial;
