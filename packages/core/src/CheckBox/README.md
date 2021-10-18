CheckBox 复选框
---

一组备选项中进行多选。

### 基础示例

```jsx
import { CheckBox } from '@uiw/react-native';

function Demo() {
  return (
    <CheckBox
      checked={true}
      onChange={(checked) => {
        console.log(checked)
      }}
    >
      默认点击选中
    </CheckBox>
  );
}
```


### 基础示例

```jsx
import { Badge, List, CheckBox } from '@uiw/react-native';

function Demo() {
  return (
    <List size="large" flat={false}>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox checked={true} style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认点击选中</CheckBox>
      </List.Item>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
      </List.Item>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox disabled style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认禁用未选中</CheckBox>
      </List.Item>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox checked={true} disabled style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认禁用选中</CheckBox>
      </List.Item>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
      </List.Item>
      <List.Item style={{ paddingVertical: 0 }}>
        <CheckBox style={{ paddingVertical: 10 }} onChange={(checked) => { console.log(checked)}}>默认未选中</CheckBox>
      </List.Item>
    </List>
  );
}
```

### props

继承 [TouchableOpacityProps](https://facebook.github.io/react-native/docs/touchableopacity#props) 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `style` | 自定义样式 | Object | - |
| `textStyle` | 设置文本样式 | TextStyle & ViewStyle | - |
| `color` | 设置颜色 | String | - |
| `checked` | 指定当前是否选中 | Boolean | - |
| `checkedIcon` | 选中图标 | Icon['name']/`JSX.Elemen` | - |
| `unCheckedIcon` | 未选中图标 | Icon['name']/`JSX.Elemen` | - |
| `onChange` | 事件触发的回调函数 | (checked):void | `5` |