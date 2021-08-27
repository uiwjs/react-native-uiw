import { MenuData } from '../component/SubMenus';

export const componentMenus: MenuData[] = [
  { path: '/components/about', name: '关于 UIW' },
  { divider: true, name: "通用" },
  { path: "/components/button", name: "Button 按钮" },
  { path: "/components/icon", name: "Icon 图标" },
  { path: "/components/typography", name: "Typography 排版" },
  { divider: true, name: "Layout" },
  { path: "/components/divider", name: "Divider 分割线" },
  { path: "/components/flex", name: "Flex 布局" },
  { path: "/components/spacing", name: "Spacing 间距" },
  { path: "/components/winblank", name: "WingBlank 两翼留白" },
  { divider: true, name: "Navigation" },
  { path: "/components/drawer", name: "Drawer 抽屉" },
  { path: "/components/menudropdown", name: "MenuDropdown 菜单下拉按钮" },
  { path: "/components/swipeaction", name: "SwipeAction 滑动操作组件" },
  { path: "/components/expandablesection", name: "ExpandableSection 展开缩放组件" },
  { path: "/components/cardcollapse", name: "CardCollapse 可折叠卡片列表" },
  { divider: true, name: "Data Entry" },
  { path: "/components/buttongroup", name: "ButtonGroup 按钮组" },
  { path: "/components/checkbox", name: "CheckBox 复选框" },
  { path: "/components/input", name: "Input 文本输入" },
  { path: "/components/radio", name: "Radio 单选框" },
  { path: "/components/rating", name: "Rating 评分" },
  { path: "/components/segmentedcontrol", name: "SegmentedControl 分段器" },
  { path: "/components/slider", name: "Slider 滑块输入条" },
  { path: "/components/switch", name: "Switch 开关" },
  { path: "/components/searchbar", name: "SearchBar 模糊搜素组件" },
  { path: "/components/selectcascader", name: "SelectCascader 级联选择" },
  { divider: true, name: "Data Display" },
  { path: "/components/avatar", name: "Avatar 头像" },
  { path: "/components/badge", name: "Badge 标记" },
  { path: "/components/ellipsis", name: "Ellipsis 超出省略" },
  { path: "/components/empty", name: "Empty 空状态" },
  { path: "/components/grid", name: "Grid 宫格" },
  { path: "/components/list", name: "List 列表" },
  { path: "/components/steps", name: "Steps 步骤条" },
  { path: "/components/timeLine", name: "Timeline 时间轴" },
  { path: "/components/quicklist", name: "QuicList 快速列表" },
  { path: "/components/card", name: "Card 卡片" },
  { path: "/components/noticebar", name: "NoticeBar 通告栏" },
  { path: "/components/swiper", name: "Swiper 轮播图" },
  { divider: true, name: "Feedback" },
  { path: "/components/loader", name: "Loader 加载" },
  { path: "/components/modal", name: "Modal 模态框" },
  { path: "/components/masklayer", name: "MaskLayer 遮罩层" },
  { path: "/components/result", name: "Result 结果页" },
  { path: "/components/toast", name: "Toast 轻提示" },
  { path: "/components/tabs", name: "Tabs 选项卡" },
  { path: "/components/speeddial", name: "SpeedDial 悬浮标记" },
  { path: "/components/stepper", name: "Stepper 步进器" },
  { path: "/components/tile", name: "Tile 卡片" },
  { path: "/components/transitionImage", name: "TransitionImage 图片过渡" },
  { path: "/components/progress", name: "Progress 进度条" },
  { path: "/components/tooltip", name: "Tooltip 工具提示" },
  { divider: true, name: "其它" },
  { href: "https://github.com/uiwjs/react-native-alipay", name: "Alipay 支付宝", target: '__blank' },
  { href: "https://github.com/uiwjs/react-native-amap-geolocation", name: "AMapGeolocation 高德地图定位", target: '__blank' },
];

export const docsMenus: MenuData[] = [
  { path: '/docs/getting-started', name: '快速上手' },
  { path: '/docs/development/components', name: '参与组件开发' },
  { path: '/docs/development/document', name: '参与文档网站编辑开发' },
  { divider: true, name: "环境安装" },
  { path: '/docs/environment-setup/ios', name: 'iOS 环境安装' },
  { path: '/docs/environment-setup/android', name: 'Android(Mac) 环境安装' },
  { path: '/docs/environment-setup/android-windows', name: 'Android(Windows) 环境安装' },
  { divider: true, name: "发布应用商店" },
  { path: '/docs/app-store/ios', name: '发布 iOS 应用商店' },
  { path: '/docs/app-store/android', name: '发布 Android 应用商店' },
  { divider: true, name: "其它" },
  { path: '/docs/react-native-template', name: 'React Native Template' },
  { path: '/docs/awesome-react-native', name: 'Awesome React Native' },
  { href: 'https://github.com/facebook/react', target: '_blank', name: 'React 官方文档' },
  { href: 'https://github.com/facebook/react-native', target: '_blank', name: 'React Native 官方文档' },
  { href: 'https://github.com/uiwjs/react-native-uiw/releases', target: '_blank', name: '更新日志' },
]