import React from 'react';
import { LayoutAnimation, StyleSheet, View, TouchableOpacity } from 'react-native';

export type ExpandableSectionProps = {
  /**
   * 标题
   */
  sectionHeader?: JSX.Element;
  /**
   * 折叠内容
   */
  children?: React.ReactNode;
  /**
   * 是否展开
   */
  expanded?: boolean;
  /**
   * 展开后显示位置 标题上或标题下
   */
  top?: boolean;
  /**
   * 点击事件
   */
  onPress?: () => void;
};

function ExpandableSection(props: ExpandableSectionProps) {
  const { expanded, sectionHeader, children, top } = props;

  const onPress = () => {
    props.onPress?.();
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 300 });
  };

  return (
    <View style={styles.container}>
      {top && expanded && children}
      <TouchableOpacity onPress={onPress}>{sectionHeader}</TouchableOpacity>
      {!top && expanded && children}
    </View>
  );
}

export default ExpandableSection;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
