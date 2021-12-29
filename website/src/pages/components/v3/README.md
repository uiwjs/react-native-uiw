# V2 -> V3
## `@uiw/react-native3.0.3`
### Presets Updates
- #### 组件性能优化
- #### 统一ios以及android组件差异
- #### 减少第三方依赖 `即将删除 component SelectCascader 以及 dependencies @react-native-picker/picker `

--- 

### New Components

- `Calendar` 日历
- `ScreenRoot` 自定义导航栏
- `DragDrawer` 拖曳抽屉
- `TreeSelect` 级联选择器
- `RNText` 字体文本

--- 

### Components Change

##### Radio
新增选中颜色
- add `borderColor`
- add `checkedColor`

##### Card
新增自定选中状态
- add `selectedStyle`

##### Rating
新增只读功能 & 自定义每项的提示信息
- add `tooltips`
- add `tooltipsText`
- add `disabled`

##### Timeline
新增自定义图标 
- icon?:IconsProps -> `icon?: IconsName | React.ReactElement | React.ReactNode`
- add `size`
- add `color`

#### Pagination
新增简洁版本
- add `simple`

##### NoticeBar
解决 NoticeBar首次渲染报错问题

##### Modal
解决 Modal弹出动画底层延迟收起问题

##### SwipeAction
解决 SwipeAction key报错



--- 

### Dependencies Update
`react-native-gesture-handler@1.10.3` -> `react-native-gesture-handler@2.0.0`

