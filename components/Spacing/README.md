Spacing 间距
---


## 基础示例

```jsx
import { Icon } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Icon type="entypo" name='aircraft' size={46} color='#50CB42' />
      </View>
    )
  }
}
```


| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| size | 按钮大小 | Enum{'small', 'default', 'large'} | default | - |