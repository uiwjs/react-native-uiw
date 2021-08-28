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
      <Card>
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

### 带标题圆角卡片

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
        borderRadius={12}
      >
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
}
```
<!--End-->

### 可点击选中卡片

<!--DemoStart--> 
```jsx
import React, { useState } from 'react';
import {  SafeAreaView, View, Image  } from 'react-native';
import { Card } from '@uiw/react-native';

const Demo = () => {
  const [selected, setSelected] = useState(false)
    return (
    <SafeAreaView style={{ flex: 1 }}>
       <Card
        selected={selected}
        title="我是标题"
        showDriver={true}
        borderRadius={12}
        onPress={() => { setSelected(!selected) }}
      >
        <Image
          source={{
            uri: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
          }}
          style={{ height: 200 }}
        />
      </Card>
    </SafeAreaView>
    )
}
```
<!--End-->

### Props

```ts
export interface CardProps {
  /** 外容器样式（可选） */
  containerStyle?: StyleProp<ViewStyle>;
  /** 内容器样式（可选） */
  wrapperStyle?: StyleProp<ViewStyle>;
  /** 标题（可选） */
  title?: string
  /** 标题样式（可选） */
  titleStyle?: StyleProp<TextStyle>;
  /** 设置卡片圆角度数（可选） */
  borderRadius?: number;
  /** 是否选中（可选） */
  selected?: boolean;
  /** 渲染内容 */
  children?: React.ReactNode;
  /** 操作 */
  actions?: Array<{
    text?: string;
    icon?: JSX.Element;
    onPress?: (e: GestureResponderEvent, index: number) => void;
  }>;
  /** 操作容器样式（可选） */
  actionsContainerStyle?: StyleProp<ViewStyle>;
  /** 操作文字样式（可选） */
  actionsTextStyle?: StyleProp<ViewStyle>;
  /** 按下卡片时的动作（可选） */
  onPress?: TouchableOpacityProps['onPress'];
  /** 长按下卡片时的动作（可选） */
  onLongPress?: TouchableOpacityProps['onLongPress'];
}
```

