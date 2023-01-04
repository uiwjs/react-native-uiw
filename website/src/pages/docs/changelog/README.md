更新日志
===

[![](https://img.shields.io/github/release/uiwjs/react-native-uiw.svg)](https://github.com/uiwjs/react-native-uiw/releases)

严格遵循 [`Semantic Versioning 2.0.0`](http://semver.org/lang/zh-CN/) 语义化版本规范。

Github [`更新日志`](https://github.com/uiwjs/react-native-uiw/releases)

## `v3.0.3`

- Presets Updates
  - 组件性能优化
  - 统一 `ios` 以及 `android` 组件差异
  - 🚧 减少第三方依赖
    - 即将删除组件 ~~`SelectCascader`~~<!--rehype:style=color: #e00000;-->
    - 即将删除依赖 ~~`@react-native-picker/picker`~~<!--rehype:style=color: #e00000;-->
- New Components
  - 🌟 `Calendar` 日历
  - 🌟 `ScreenRoot` 自定义导航栏
  - 🌟 `DragDrawer` 拖曳抽屉
  - 🌟 `TreeSelect` 级联选择器
  - 🌟 `RNText` 字体文本
- Components Change
  - `Radio` 新增选中颜色
    - 🌟 add `borderColor`
    - 🌟 add `checkedColor`
  - `Card` 新增自定选中状态
    - 🌟 add `selectedStyle`
  - `Rating` 新增只读功能 & 自定义每项的提示信息
    - 🌟 add `tooltips`
    - 🌟 add `tooltipsText`
    - 🌟 add `disabled`
  - `Timeline` 新增自定义图标 
    - 🚧 ~~`icon?:IconsProps`~~<!--rehype:style=color: #e00000;--> => `icon?: IconsName | React.ReactElement | React.ReactNode`
    - 🌟 add `size`
    - 🌟 add `color`
  - `Pagination` 新增简洁版本
    - 🌟 add `simple`
  - 🐞 `NoticeBar` 解决 NoticeBar首次渲染报错问题
  - 🐞 `Modal` 解决 Modal弹出动画底层延迟收起问题
  - 🐞 `SwipeAction` 解决 SwipeAction key报错
- Dependencies Update
  - 💄 ~~`react-native-gesture-handler@1.10.3`~~ -> `react-native-gesture-handler@2.0.0`

## `v3.0.2`

- New Components
  - 🌟 `RnText` 组件
- Components Change
  - `Picker` ~~`<Picker  key="label" />`~~<!--rehype:style=color: #e00000;--> => `<Picker rowKey="label" />`
  - `DragDrawer` 自定义抽屉样式
    - add `style` props.
    - add `icon` props.
  - `DragDrawer`
- Dependencies Update
  - update dependency color to v4.0.2
  - update dependency react-native-gesture-handler to v2.0.0
