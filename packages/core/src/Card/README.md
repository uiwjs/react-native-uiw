Card 卡片
---

最基础的卡片容器，可承载文字、列表、图片、段落。

<image src='https://user-images.githubusercontent.com/57083007/137632175-fc80bff2-7224-4843-97ec-9f8d9cbc6746.png' alt='Card' style='zoom:33%;' />

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
}
```
<!--End-->

### 可点击选中带操作卡片

<!--DemoStart--> 
```jsx
import React, { useState } from 'react';
import {  SafeAreaView, View, Image  } from 'react-native';
import { Card ,Icon } from '@uiw/react-native';

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
              onPress: (e: any, index: number) => { }
            },
            {
              text: '分享',
              icon: <Icon name="share" size={16} color="#5847FF" />,
              onPress: (e: any, index: number) => { }
            },
          ]}
        />
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

### CardProps
```ts
export interface CardProps {
  /** 外容器样式（可选） */
  containerStyle?: StyleProp<ViewStyle>;
  /** 内容器样式（可选） */
  wrapperStyle?: StyleProp<ViewStyle>;
  /** 设置卡片圆角度数（可选） */
  borderRadius?: number;
  /** 是否选中（可选） */
  selected?: boolean;
  /** 渲染内容 */
  children?: React.ReactNode;
  /** 按下卡片时的动作（可选） */
  onPress?: TouchableOpacityProps['onPress'];
  /** 长按下卡片时的动作（可选） */
  onLongPress?: TouchableOpacityProps['onLongPress'];
}
```

### CardTitleProps
```ts
type CardTitleProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>
  children?: React.ReactNode;
};
```

### CardActionsProps
```ts
 type CardActionsProps = {
  actions?: Array<{
    text?: string;
    icon?: JSX.Element;
    onPress?: (e: GestureResponderEvent, index: number) => void;
    actionsTextStyle?: StyleProp<TextStyle>
  }>;
  actionsContainerStyle?: StyleProp<ViewStyle>
  children?: React.ReactNode;
};
```

