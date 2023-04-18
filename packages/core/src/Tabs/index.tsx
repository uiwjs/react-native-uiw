import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ViewProps, View, ViewStyle, Dimensions } from 'react-native';
import Item from './TabsItem';
import { Theme } from '../theme';
import { useTheme } from '@shopify/restyle';
export interface TabsProps extends ViewProps {
  /** 子元素 */
  children?: JSX.Element | Array<JSX.Element>;
  /** 容器样式 */
  style?: ViewStyle;
  value?: number;
  onChange?: (value: number) => void;
  defaultColor?: string;
  activeColor?: string;
}

function Tabs(props: TabsProps) {
  const theme = useTheme<Theme>();
  const styles = createStyles({
    bgColor: theme.colors.mask || '#fff',
  });
  const {
    style,
    children,
    onChange,
    activeColor,
    value,
    defaultColor = theme.colors.primary_background || '#3578e5',
  } = props;
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollViewWidth, setScrollViewWidth] = useState<number>(Dimensions.get('window').width);

  useEffect(() => {
    const handleResize = () => {
      setScrollViewWidth(Dimensions.get('window').width);
    };
    const subscription = Dimensions.addEventListener('change', handleResize);
    return () => {
      subscription.remove();
    };
  }, []);

  if (!children) {
    return null;
  }

  if (
    Array.isArray(children) &&
    children.find((item) => typeof item.type !== 'function' || !item.type.prototype.isclxItem)
  ) {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item');
  }
  if (
    (!Array.isArray(children) && typeof children.type !== 'function') ||
    ('type' in children && !children.type.prototype.isclxItem)
  ) {
    console.error('Tags component child element must be TagsItem');
    throw new Error('Child elements of tabs components must be Tabs.Item');
  }

  const handleTabChange = (tabIndex: number) => {
    scrollViewRef.current?.scrollTo({
      x: tabIndex * 50,
      y: 0,
      animated: true,
    });
    onChange && onChange(tabIndex);
  };

  return (
    <SafeAreaView>
      <View style={[styles.TabsContainer, style]}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onContentSizeChange={() => {
            setScrollViewWidth(Dimensions.get('window').width);
          }}
        >
          {children &&
            React.Children.toArray(children).map((child, index) => {
              if (!React.isValidElement(child)) {
                return;
              }
              return React.cloneElement(child, {
                ...child.props,
                ...{
                  value: value,
                  onChange: handleTabChange,
                  index: index,
                  activeColor: activeColor,
                  defaultColor: defaultColor,
                },
              });
            })}
        </ScrollView>
      </View>
      {children &&
        React.Children.toArray(children).map((child, index) => {
          if (!React.isValidElement(child)) {
            return;
          }
          if (value === index) {
            return child.props?.children;
          }
        })}
    </SafeAreaView>
  );
}

type CreStyle = {
  bgColor: string;
};

function createStyles({ bgColor }: CreStyle) {
  return StyleSheet.create({
    TabsContainer: {
      backgroundColor: bgColor,
      paddingVertical: 15,
    },
  });
}

Tabs.Item = Item;
export default Tabs;
