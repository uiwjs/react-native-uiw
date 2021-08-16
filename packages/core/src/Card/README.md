Card 卡片
---

最基础的卡片容器，可承载文字、列表、图片、段落。

### 基础示例

<!--DemoStart--> 
```jsx
import {  SafeAreaView, View, Image  } from 'react-native';
import { Card } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card
        title="我是标题"
        showDriver={true}
        // borderRadius={12}
        // onLongPress={() => {}}
      >
        <View>
          <Image source={{ uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg' }} style={{ height: 150 }} />
        </View>
      </Card>
    </SafeAreaView>
    )
  }
}
```
<!--End-->


## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `containerStyle` | 外容器样式（可选） | object (style) | none |
| `wrapperStyle` | 内容器样式（可选） | object (style) | none |
| `title` | 标题（可选） | String | none |
| `titleStyle` | 标题样式（可选） | object (style) | none |
| `showDriver` | 是否展示下划线（可选） | Boolean | false |
| `borderRadius` | 设置卡片圆角度数（可选）  | Number | none |
| `selected` | 是否选中（可选）  | Boolean | none |
| `onPress` | 按下卡片时的动作（可选） | TouchableOpacityProps['onPress']| none |
| `onLongPress` | 长按下卡片时的动作（可选） | TouchableOpacityProps['onLongPress']| none |

