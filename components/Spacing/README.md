Spacing 间距
---

## 基础示例

```jsx
import { Spacing, Button } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Button>默认按钮</Button>
        <Spacing />
        <Button>默认按钮</Button>
        <Spacing />
      </View>
    )
  }
}
```

## props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|------|
| size | 按钮大小 | Enum{'small', 'default', 'large'} | default |
| gutter | 间距值 | number | `10` |