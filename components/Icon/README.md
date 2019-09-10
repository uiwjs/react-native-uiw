Icon 图标
---

图标组件基于 [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons), [所有的图标](https://oblador.github.io/react-native-vector-icons/)

### 基础示例

<!--DemoStart--> 
```js
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
<!--End-->

## 参数

### Icon

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| name | 图标名称 | String | - | 必须 |
| type | 类型 | Enum{`zocial`,`oct`,`material`,`material-community` ,`ion`,`foundation`,`evil`,`entypo`,`font-awesome`,`simple-line`,`feather`,`ant-design`;} | material | - |
| size | 大小 | Number | 26 | - |
| color | 颜色 | String | '#000000' | - |
| onPress | 点击函数 | Function | - | - |
| underlayColor | 按下时图标颜色 | String | - | - |
