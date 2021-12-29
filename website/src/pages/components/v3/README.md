# V2 -> V3
## `react-native-uiw@3.x.x`
### Presets Updates
- #### 组件性能优化
- #### 统一ios以及android组件差异

--- 

### New Components

- Calendar
- ScreenRoot
- DragDrawer
- TreeSelect
- RNText

--- 

### Components Change

> 🚧 注意：下一版本即将删除 SelectCascader
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

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

--- 

### Dependencies Update
`react-native-gesture-handler@1.10.3` -> `react-native-gesture-handler@2.0.0`

> 🚧 注意：下一版本即将删除 @react-native-picker/picker
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

