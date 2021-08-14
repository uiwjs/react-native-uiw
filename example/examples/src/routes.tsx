import {StackNavigationProp} from '@react-navigation/stack';

type ModalStackNavigation = StackNavigationProp<{}>;

export interface ComProps {
  navigation: ModalStackNavigation;
  route: Routes;
}

export type Routes = {
  name: string;
  component: JSX.Element;
  params: {
    title: string;
    description: string;
  };
};

export const stackPageData: Routes[] = [
  {
    name: 'Avatar',
    component: require('./routes/Avatar').default,
    params: {
      title: 'Avatar 头像',
      description: '用来代表用户或事物，支持图片展示。',
    },
  },
  {
    name: 'Badge',
    component: require('./routes/Badge').default,
    params: {
      title: 'Badge 标记',
      description: '出现在按钮、图标旁的数字或状态标记。',
    },
  },
  {
    name: 'Button',
    component: require('./routes/Button').default,
    params: {
      title: 'Button 按钮',
      description: '按钮用于开始一个即时操作。',
    },
  },
  {
    name: 'ButtonGroup',
    component: require('./routes/ButtonGroup').default,
    params: {
      title: 'ButtonGroup 按钮组',
      description: '用于一组按钮的排版展示。',
    },
  },
  {
    name: 'CheckBox',
    component: require('./routes/CheckBox').default,
    params: {
      title: 'CheckBox 复选框',
      description: '一组备选项中进行多选。',
    },
  },
  {
    name: 'Divider',
    component: require('./routes/Divider').default,
    params: {
      title: 'Divider 分割线',
      description: '区隔内容的分割线。',
    },
  },
  {
    name: 'Drawer',
    component: require('./routes/Drawer').default,
    params: {
      title: 'Drawer 抽屉',
      description: '用于在屏幕边缘显示应用导航等内容的面板。',
    },
  },
  {
    name: 'Ellipsis',
    component: require('./routes/Ellipsis').default,
    params: {
      title: 'Ellipsis 超出省略',
      description: '用于文本过长，超出长度显示 "..."',
    },
  },
  {
    name: 'Empty',
    component: require('./routes/Empty').default,
    params: {
      title: 'Empty 空状态',
      description: '空状态时的展示占位图。',
    },
  },
  {
    name: 'Flex',
    component: require('./routes/Flex').default,
    params: {
      title: 'Flex Flex布局',
      description: 'Flex 是 React Native CSS flex 布局的一个封装。',
    },
  },
  {
    name: 'Grid',
    component: require('./routes/Grid').default,
    params: {
      title: 'Grid 宫格',
      description: '在水平和垂直方向，将布局切分成若干等大的区块。',
    },
  },
  {
    name: 'Icon',
    component: require('./routes/Icon').default,
    params: {
      title: 'Icon 图标',
      description: '用于引用图标。',
    },
  },
  {
    name: 'Input',
    component: require('./routes/Input').default,
    params: {
      title: 'Input 输入文本',
      description: '用于输入文本。',
    },
  },
  {
    name: 'List',
    component: require('./routes/List').default,
    params: {
      title: 'List 列表',
      description: '一个高性能的界面，用于呈现分段列表。',
    },
  },
  {
    name: 'Loader',
    component: require('./routes/Loader').default,
    params: {
      title: 'Loader 加载器',
      description: '用于页面和区块的加载中状态。',
    },
  },
  {
    name: 'MenuDropdown',
    component: require('./routes/MenuDropdown').default,
    params: {
      title: 'MenuDropdown 菜单下拉按钮',
      description: '用于显示菜单',
    },
  },
  {
    name: 'Modal',
    component: require('./routes/Modal').default,
    params: {
      title: 'Modal 模态对话框',
      description: '模态对话框，React Native 原生组件。',
    },
  },
  {
    name: 'MaskLayer',
    component: require('./routes/MaskLayer').default,
    params: {
      title: 'MaskLayer 遮罩层',
      description: '用于模态对话框，中的遮罩层。',
    },
  },
  {
    name: 'Radio',
    component: require('./routes/Radio').default,
    params: {
      title: 'Radio 单选框',
      description: '单选框，在一组备选项中进行单选。',
    },
  },
  {
    name: 'Result',
    component: require('./routes/Result').default,
    params: {
      title: 'Result 结果页',
      description:
        '在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。',
    },
  },
  {
    name: 'Slider',
    component: require('./routes/Slider').default,
    params: {
      title: 'Slider 滑块输入条',
      description: '允许用户在一个区间中选择特定值。',
    },
  },
  {
    name: 'SegmentedControl',
    component: require('./routes/SegmentedControl').default,
    params: {
      title: 'SegmentedControl 分段器',
      description: '由至少 2 个分段控件组成，用作不同视图的显示。',
    },
  },
  {
    name: 'SelectCascader',
    component: require('./routes/SelectCascader').default,
    params: {
      title: 'SelectCascader 级联选择',
      description: '可用于类似于省市区选择。',
    },
  },
  {
    name: 'Spacing',
    component: require('./routes/Spacing').default,
    params: {
      title: 'Spacing 间距',
      description: '组件之间的间距。',
    },
  },
  {
    name: 'SwipeAction',
    component: require('./routes/SwipeAction').default,
    params: {
      title: 'SwipeAction 唤出操作',
      description: '结合手势操作，从屏幕一侧唤出操作。',
    },
  },
  {
    name: 'Switch',
    component: require('./routes/Switch').default,
    params: {
      title: 'Switch 开关',
      description: '表示两种相互对立的状态间的切换，多用于触发「开/关」。',
    },
  },
  {
    name: 'Typography',
    component: require('./routes/Typography').default,
    params: {
      title: 'Typography 排版',
      description: '包含 H1~H6,<U>,<S>,<P>等，类似于 HTML 中的标签。',
    },
  },
  {
    name: 'Toast',
    component: require('./routes/Toast').default,
    params: {
      title: 'Toast 提示',
      description: '一种轻量级反馈/提示。',
    },
  },
  {
    name: 'WingBlank',
    component: require('./routes/WingBlank').default,
    params: {
      title: 'WingBlank 两翼留白',
      description: '布局控件。',
    },
  },
  {
    name: 'SearchBar',
    component: require('./routes/SearchBar').default,
    params: {
      title: 'SearchBar 模糊搜索select',
      description: '模糊搜索select。',
    },
  },
  {
    name: 'Table',
    component: require('./routes/Table').default,
    params: {
      title: 'Table 表格',
      description: '表格Table',
    },
  },
  {
    name: 'ExpandableSection',
    component: require('./routes/ExpandableSection').default,
    params: {
      title: 'ExpandableSection 折叠展开',
      description: '折叠展开ExpandableSection',
    },
  },
  {
    name: 'Steps',
    component: require('./routes/Steps').default,
    params: {
      title: 'Steps 步骤条',
      description: '步骤条',
    },
  },
  {
    name: 'Rating',
    component: require('./routes/Rating').default,
    params: {
      title: 'Rating 评分',
      description: '评分 Rating',
    },
  },
  {
    name: 'Timeline',
    component: require('./routes/Timeline').default,
    params: {
      title: 'Timeline 时间轴',
      description: '时间轴',
    },
  },
  {
    name: 'Tabs',
    component: require('./routes/Tabs').default,
    params: {
      title: 'Tabs 选项卡',
      description: 'Tabs 选项卡组件跨不同屏幕、数据集和其他交互的内容。',
    },
  },
  {
    name: 'QuickList',
    component: require('./routes/QuickList').default,
    params: {
      title: 'QuickList 快速请求列表',
      description: 'QuickList 快速请求上拉下拉数据列表',
    },
  },
  {
    name: 'Card',
    component: require('./routes/Card').default,
    params: {
      title: 'Card 卡片',
      description: 'Card 最基础的卡片容器，可承载文字、列表、图片、段落。',
    },
  },
  {
    name: 'NoticeBar',
    component: require('./routes/NoticeBar').default,
    params: {
      title: 'NoticeBar 通告栏',
      description: '通告栏',
    },
  },
  {
    name: 'Stepper',
    component: require('./routes/Stepper').default,
    params: {
      title: 'Stepper 步进器',
      description: 'Stepper 步进器 用作增加或者减少当前数值。',
    },
  },
];
