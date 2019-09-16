Icon 图标
---

图标组件基于 [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons), [所有的图标](https://oblador.github.io/react-native-vector-icons/)

### 基础示例

<!--DemoStart--> 
```js
import { Icon } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Icon name='aircraft' size={46} color='#50CB42' />
      </View>
    )
  }
}
```
<!--End-->

## 参数

### Icon

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| name | 图标名称 | String | - |
| fill | 填充颜色 | String | '#000000' |
| stroke | 轮廓颜色 | String | - |
| size | 大小 | Number | 26 |
| width | 宽度(默认为`size`的值) | Number | 26 |
| height | 高度(默认为`size`的值) | Number | 26 |
