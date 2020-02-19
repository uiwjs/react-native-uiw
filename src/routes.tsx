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
  Avatar: {
    screen: require('./routes/Avatar').default,
    path: 'Avatar',
    params: {
      title: 'Avatar 头像',
      description: '用来代表用户或事物，支持图片展示。'
    },
    navigationOptions: {
      title: 'Avatar 头像',
      ...navOtions,
    },
  },
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
  CheckBox: {
    screen: require('./routes/CheckBox').default,
    path: 'CheckBox',
    params: {
      title: 'CheckBox 复选框',
      description: '一组备选项中进行多选。'
    },
    navigationOptions: {
      title: 'CheckBox 复选框',
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
  Drawer: {
    screen: require('./routes/Drawer').default,
    path: 'Drawer',
    params: {
      title: 'Drawer 抽屉',
      description: '用于在屏幕边缘显示应用导航等内容的面板。'
    },
    navigationOptions: {
      title: 'Drawer 抽屉',
      ...navOtions,
    },
  },
  Ellipsis: {
    screen: require('./routes/Ellipsis').default,
    path: 'Ellipsis',
    params: {
      title: 'Ellipsis 超出省略',
      description: '用于文本过长，超出长度显示 "..."'
    },
    navigationOptions: {
      title: 'Ellipsis 超出省略',
      ...navOtions,
    },
  },
  Empty: {
    screen: require('./routes/Empty').default,
    path: 'Empty',
    params: {
      title: 'Empty 空状态',
      description: '空状态时的展示占位图。'
    },
    navigationOptions: {
      title: 'Empty 空状态',
      ...navOtions,
    },
  },
  Flex: {
    screen: require('./routes/Flex').default,
    path: 'Flex',
    params: {
      title: 'Flex Flex布局',
      description: 'Flex 是 React Native CSS flex 布局的一个封装。'
    },
    navigationOptions: {
      title: 'Flex Flex布局',
      ...navOtions,
    },
  },
  Grid: {
    screen: require('./routes/Grid').default,
    path: 'Grid',
    params: {
      title: 'Grid 宫格',
      description: '在水平和垂直方向，将布局切分成若干等大的区块。'
    },
    navigationOptions: {
      title: 'Grid 宫格',
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
  MenuDropdown: {
    screen: require('./routes/MenuDropdown').default,
    path: 'MenuDropdown',
    params: {
      title: 'MenuDropdown 菜单下拉按钮',
      description: '用于显示菜单'
    },
    navigationOptions: {
      title: 'MenuDropdown 下拉框',
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
  Radio: {
    screen: require('./routes/Radio').default,
    path: 'Radio',
    params: {
      title: 'Radio 单选框',
      description: '单选框，在一组备选项中进行单选。'
    },
    navigationOptions: {
      title: 'Radio 单选框',
      ...navOtions,
    },
  },
  Result: {
    screen: require('./routes/Result').default,
    path: 'Result',
    params: {
      title: 'Result 结果页',
      description: '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。'
    },
    navigationOptions: {
      title: 'Result 结果页',
      ...navOtions,
    },
  },
  Slider: {
    screen: require('./routes/Slider').default,
    path: 'Slider',
    params: {
      title: 'Slider 滑块输入条',
      description: '允许用户在一个区间中选择特定值。'
    },
    navigationOptions: {
      title: 'Slider 滑块输入条',
      ...navOtions,
    },
  },
  SegmentedControl: {
    screen: require('./routes/SegmentedControl').default,
    path: 'SegmentedControl',
    params: {
      title: 'SegmentedControl 分段器',
      description: '由至少 2 个分段控件组成，用作不同视图的显示。'
    },
    navigationOptions: {
      title: 'SegmentedControl 分段器',
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
  SwipeAction: {
    screen: require('./routes/SwipeAction').default,
    path: 'SwipeAction',
    params: {
      title: 'SwipeAction 唤出操作',
      description: '结合手势操作，从屏幕一侧唤出操作。'
    },
    navigationOptions: {
      title: 'SwipeAction 唤出操作',
      ...navOtions,
    },
  },
  Switch: {
    screen: require('./routes/Switch').default,
    path: 'Switch',
    params: {
      title: 'Switch 开关',
      description: '表示两种相互对立的状态间的切换，多用于触发「开/关」。'
    },
    navigationOptions: {
      title: 'Switch 开关',
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
  Toast: {
    screen: require('./routes/Toast').default,
    path: 'Toast',
    params: {
      title: 'Toast 提示',
      description: '一种轻量级反馈/提示。'
    },
    navigationOptions: {
      title: 'Toast 提示',
      ...navOtions,
    },
  },
  WingBlank: {
    screen: require('./routes/WingBlank').default,
    path: 'WingBlank',
    params: {
      title: 'WingBlank 两翼留白',
      description: '布局控件。'
    },
    navigationOptions: {
      title: 'WingBlank 两翼留白',
      ...navOtions,
    },
  },
};
