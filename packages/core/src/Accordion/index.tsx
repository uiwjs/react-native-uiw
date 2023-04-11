import React, { FC, useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle, LayoutAnimation, Animated } from 'react-native';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
import Icon from '../Icon';

interface AccordionProps {
  /** 自定义手风琴列表*/
  sections: {
    /** 列表标题内容*/
    title: JSX.Element;
    /** 展开内容*/
    content: JSX.Element;
    /** 是否可以点击，默认可以点击*/
    isOnPress?: boolean;
  }[];
  /** 是否展示多个，默认展示多个*/
  isMultiple?: boolean;
  /** 手风琴每行列表样式 */
  accordionStyle?: StyleProp<ViewStyle>;
  /** 点击展开内容样式 */
  contentStyle?: StyleProp<ViewStyle>;
  /** 是否展示图标 */
  iconShow?: boolean;
  /** 图标源 */
  customIcon?: string | JSX.Element;
  /** 图标尺寸 */
  iconSize?: number;
}

const Accordion: FC<AccordionProps> = (props) => {
  const { sections, isMultiple = true, iconShow = true, iconSize = 18, accordionStyle, contentStyle } = props;
  const [activeIndex, setActiveIndex] = useState<number[] | number>(isMultiple ? [] : -1);
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.mask,
    headerColor: theme.colors.background,
    borderColor: theme.colors.border,
  });
  const animatedController = useRef(new Animated.Value(0)).current;

  const onPress = (index: number | never) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (isMultiple) {
      const currentIndex = Array.isArray(activeIndex) ? activeIndex.indexOf(index) : -1;
      if (currentIndex > -1) {
        const newActiveIndex = Array.isArray(activeIndex) ? [...activeIndex] : [];
        if (currentIndex > -1) {
          newActiveIndex.splice(currentIndex, 1);
        }
        setActiveIndex(newActiveIndex);
      } else {
        setActiveIndex(Array.isArray(activeIndex) ? [...activeIndex, index] : [index]);
      }
    } else {
      setActiveIndex(activeIndex === index ? -1 : index);
    }
    Animated.timing(animatedController, {
      toValue: activeIndex === index ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const rotateZ = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View>
      {sections.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            disabled={item?.isOnPress || false}
            activeOpacity={0.8}
            onPress={() => onPress(index)}
            style={[styles.header, accordionStyle]}
          >
            <View style={styles.titleBy} key={index}>
              {item.title}
              {iconShow && (
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotateZ:
                          activeIndex === index || (Array.isArray(activeIndex) && activeIndex.indexOf(index) > -1)
                            ? rotateZ
                            : '0deg',
                      },
                    ],
                  }}
                >
                  <Icon name="right" size={iconSize} color={theme.colors.border} />
                </Animated.View>
              )}
            </View>
          </TouchableOpacity>
          {((isMultiple && Array.isArray(activeIndex) && activeIndex.indexOf(index) > -1) ||
            (!isMultiple && activeIndex === index)) && (
            <View style={[styles.content, contentStyle]}>{item.content}</View>
          )}
        </View>
      ))}
    </View>
  );
};

type CreStyle = {
  bgColor: string;
  headerColor: string;
  borderColor: string;
};

function createStyles({ bgColor, borderColor, headerColor }: CreStyle) {
  return StyleSheet.create({
    titleBy: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
      padding: 15,
      backgroundColor: headerColor,
    },
    content: {
      padding: 15,
      backgroundColor: bgColor,
    },
  });
}

export default Accordion;
