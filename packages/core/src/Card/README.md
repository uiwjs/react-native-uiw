Card 卡片
---

最基础的卡片容器，可承载文字、列表、图片、段落。

### 基础示例

```jsx mdx:preview
import React,{ Component } from "react"
import { SafeAreaView, View, Image  } from 'react-native';
import Card from '@uiw/react-native/lib/Card';
function Demo() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <View>
          <Image source={{ uri: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg' }} style={{ height: 150 }} />
        </View>
      </Card>
    </SafeAreaView>
    )
}
export default Demo
```
### 带标题圆角卡片
```jsx mdx:preview
import React,{ Component } from "react"
import { SafeAreaView, View, Image } from 'react-native';
import Card from '@uiw/react-native/lib/Card';
function Demo() {
   return (
    <SafeAreaView style={{ flex: 1 }}>
     <Card borderRadius={12}>
        <Card.Title title="@uiw/react-native" />
        <Image
          source={{
            uri: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
          }}
          style={{ height: 200 }}
        />
      </Card>
    </SafeAreaView>
    )
}
export default Demo
```
### 可点击选中带操作卡片
```jsx mdx:preview
import React, { useState } from 'react';
import { SafeAreaView, View, Image  } from 'react-native';
import Card from '@uiw/react-native/lib/Card';
import Icon from '@uiw/react-native/lib/Icon';

const Demo = () => {
  const [selected, setSelected] = useState(false)
    return (
    <SafeAreaView style={{ flex: 1 }}>
       <Card
        selected={selected}
        borderRadius={12}
        onPress={() => { setSelected(!selected) }}
      >
        <Card.Actions
          actions={[
            {
              text: '点赞',
              icon: <Icon name="like-o" size={16} color="#5847FF" />,
              onPress: () => {}
            },
            {
              text: '分享',
              icon: <Icon name="share" size={16} color="#5847FF" />,
              onPress: () => {}
            },
          ]}
        />
        <Image
          source={{
            uri: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg'
          }}
          style={{ height: 200 }}
        />
      </Card>
    </SafeAreaView>
    )
}
export default Demo
```
#### 属性
## CardProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| containerStyle | 外容器样式（可选） | `StyleProp<ViewStyle>` | - |
| wrapperStyle | 内容器样式（可选） | `StyleProp<ViewStyle>` | - |
| borderRadius | 设置卡片圆角度数（可选） | `number` | - |
| selected | 是否选中（可选） | `boolean` | - |
| children | 渲染内容 | `React.ReactNode` | - |
| onPress | 按下卡片时的动作（可选） | `TouchableOpacityProps['onPress']` | - |
| onLongPress | 长按下卡片时的动作（可选） | `TouchableOpacityProps['onLongPress']`  | - |
| selectedStyle | 自定义选中样式 | `{ icon?: React.ReactNode;style?: ViewStyle}` | - |

## CardTitleProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| titleStyle | 标题样式 | `StyleProp<TextStyle>` | - |
| children | 自定义标题 | `React.ReactNode` | - |

## CardActionsProps
| 属性 | 说明 | 类型 |  默认值  |
| --- | --- | --- | --- |
| actions | 操作 | `Array<{ text?: string; icon?: JSX.Element; onPress?: (e: GestureResponderEvent, index: number) => void; actionsTextStyle?: StyleProp<TextStyle>}>` | - |
| actionsContainerStyle | 操作容器样式 | `StyleProp<ViewStyle>` | - |
| children | 自定义操作 | `React.ReactNode` | - |


