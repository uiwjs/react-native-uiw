import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ComProps } from './typings';

export type Otions = (props: ComProps) => void;

/**
 * https://reactnavigation.org/docs/en/stack-navigator-2.0.html#navigationoptions-for-screens-inside-of-the-navigator
 */
export interface NavigationOptions {
  /**
   * 可用作headerTitle后备的字符串。 此外，将用作tabBarLabel（如果嵌套在TabNavigator中）或drawerLabel（如果嵌套在DrawerNavigator中）的后备。
   */
  title?: string;
  /**
   * 给定 `HeaderProps` 的函数返回 `React` 元素，以显示为标题。 设置为 `null` 隐藏标题。
   */
  header?: () => React.ReactNode;
  /**
   * 标签栏中显示的标签的标题字符串。
   * 未定义时，使用场景标题。 要隐藏，请参阅上一节中的已标记选项。
   */
  tabBarLabel?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerBackTitleStyle?: StyleProp<TextStyle>;
  gestureResponseDistance?: {
    horizontal?: number; // default 25
    vertical?: number; // default 135
  },
  params: { [key:string]: any }
}

export type Routes = {
  [key: string]: any | {
    screen: React.ReactNode;
    path: string;
    navigationOptions: NavigationOptions | Otions;
  };
};

const navOtions = {
  headerBackTitle: null,
  headerBackTitleStyle: {
    color: 'red',
    opacity: 0
  },
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
}

export const routes: Routes = {
  Badge: {
    screen: require('./routes/Badge').default,
    path: 'Badge',
    params: {
      title: 'Badge 标记',
      description: '出现在按钮、图标旁的数字或状态标记。'
    },
    navigationOptions: {
      title: 'Badge 标记',
      ...navOtions,
    },
  },
  Button: {
    screen: require('./routes/Button').default,
    path: 'Button',
    params: {
      title: 'Button 按钮',
      description: '按钮用于开始一个即时操作。'
    },
    navigationOptions: {
      title: 'Button 按钮',
      ...navOtions,
    },
  },
  ButtonGroup: {
    screen: require('./routes/ButtonGroup').default,
    path: 'ButtonGroup',
    params: {
      title: 'ButtonGroup 按钮组',
      description: '用于一组按钮的排版展示。'
    },
    navigationOptions: {
      title: 'ButtonGroup 按钮组',
      ...navOtions,
    },
  },
  Divider: {
    screen: require('./routes/Divider').default,
    path: 'Divider',
    params: {
      title: 'Divider 分割线',
      description: '区隔内容的分割线。'
    },
    navigationOptions: {
      title: 'Divider 分割线',
      ...navOtions,
    },
  },
  Icon: {
    screen: require('./routes/Icon').default,
    path: 'Icon',
    params: {
      title: 'Icon 图标',
      description: '用于引用图标。'
    },
    navigationOptions: {
      title: 'Icon 图标',
      ...navOtions,
    },
  },
  List: {
    screen: require('./routes/List').default,
    path: 'List',
    params: {
      title: 'List 列表',
      description: '一个高性能的界面，用于呈现分段列表。'
    },
    navigationOptions: {
      title: 'List 按钮',
      ...navOtions,
    },
  },
  Loader: {
    screen: require('./routes/Loader').default,
    path: 'Loader',
    params: {
      title: 'Loader 加载器',
      description: '用于页面和区块的加载中状态。'
    },
    navigationOptions: {
      title: 'Loader 按钮',
      ...navOtions,
    },
  },
  Modal: {
    screen: require('./routes/Modal').default,
    path: 'Modal',
    params: {
      title: 'Modal 模态对话框',
      description: '模态对话框，React Native 原生组件。'
    },
    navigationOptions: {
      title: 'Modal 模态对话框',
      ...navOtions,
    },
  },
  Spacing: {
    screen: require('./routes/Spacing').default,
    path: 'Spacing',
    params: {
      title: 'Spacing 间距',
      description: '组件之间的间距。'
    },
    navigationOptions: {
      title: 'Spacing 间距',
      ...navOtions,
    },
  },
  Typography: {
    screen: require('./routes/Typography').default,
    path: 'Typography',
    params: {
      title: 'Typography 排版',
      description: '包含 H1~H6,<U>,<S>,<P>等，类似于 HTML 中的标签。'
    },
    navigationOptions: {
      title: 'Typography 排版',
      ...navOtions,
    },
  },
};
