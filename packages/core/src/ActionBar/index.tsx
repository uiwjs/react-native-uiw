import _ from 'lodash';
import React, { ReactNode, useMemo } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextStyle,
  SafeAreaView,
  Platform,
} from 'react-native';

export type ActionBarProps = {
  height?: number;
  backgroundColor?: string;
  actions: Array<{
    label?: string;
    onPress?: () => void;
    fontStyle?: TextStyle;
    render?: ReactNode;
  }>;
  keepAbsoulte?: boolean;
  style?: ViewStyle;
  scroll?: boolean;
  useSafeArea?: boolean;
};

const Container = (props: { scroll: boolean; children: ReactNode; useSafeArea: boolean; style: any }) => {
  const { scroll, children, useSafeArea, ...others } = props;
  const renderDom = useMemo(() => {
    if (scroll) {
      return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} {...others}>
          {children}
        </ScrollView>
      );
    }
    if (!scroll && useSafeArea && Platform.OS === 'ios') {
      return <SafeAreaView {...others}>{children}</SafeAreaView>;
    }
    return <View {...others}>{children}</View>;
  }, [scroll, useSafeArea, children]);
  return renderDom;
};

function ActionBar(props: ActionBarProps) {
  const {
    actions,
    style,
    keepAbsoulte = true,
    height = 48,
    backgroundColor = '#fff',
    scroll = true,
    useSafeArea = true,
  } = props;

  const styles = createStyles({ height: height, backgroundColor: backgroundColor });

  // 按钮长度
  const actionLeg = actions.length || 0;

  // 是否是数组最后一个
  const last = (i: number) => actionLeg - 1 === i;

  return (
    <Container scroll={scroll} useSafeArea={useSafeArea} style={[keepAbsoulte && styles.absoluteContainer]}>
      <View style={[styles.container, { justifyContent: 'space-between', ...style }]}>
        {_.map(actions, ({ label = '', onPress, render, fontStyle }, i) => {
          return (
            <TouchableOpacity key={i} onPress={onPress && onPress} style={{ marginRight: scroll && !last(i) ? 20 : 0 }}>
              {render ? render : <Text style={{ ...fontStyle }}>{label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </Container>
  );
}

function createStyles({ height, backgroundColor }: any) {
  return StyleSheet.create({
    container: {
      height,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    absoluteContainer: {
      ...StyleSheet.absoluteFillObject,
      top: undefined,
      backgroundColor,
      shadowColor: '#43515C',
      shadowOpacity: 0.06,
      shadowRadius: 18.5,
    },
  });
}

export default ActionBar;
