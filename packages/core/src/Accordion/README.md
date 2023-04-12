Accordion 手风琴组件
---

可以折叠/展开的内容区域。
### 基础示例


```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import { View, Text,Image,Card } from 'react-native';
import { Accordion } from '@uiw/react-native';

function Demo() {

  const contents = [
  {
    title: <Text>Section 1</Text>,
    content: (
      <View>
        <Text>Content of section 1</Text>
        <Image source={{ uri: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg' }} style={{ height: 180 }} />
      </View>
    ),
  },
  {
    title: <Text>Section 2</Text>,
    content: (
      <View>
        <Text>Content of section 2</Text>
        <Image source={{ uri: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg' }} style={{ height: 180 }} />
      </View>
    ),
  },
  {
    title: <Text>Section 3</Text>,
    content: (
      <View>
        <Text>Content of section 3</Text>
        <Image source={{ uri: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d' }} style={{ height: 180 }} />
      </View>
    ),
  },
];

  return (
  <View style={{ marginTop: 50 }}>
        <Accordion sections={contents} />
    </View>
  );
}

export default Demo;

```
### Props 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `sections` | 自定义手风琴列表，通过`title`参数设置标题，通过`content`参数设置展示内容，通过`isOnPress`参数设置是否禁用 | JSX.Element | - |
| `isMultiple` | 是否同时展示多个内容| boolean | true |
| `accordionStyle` | 手风琴每行列表样式 | ViewStyle | - |
| `contentStyle` | 点击展开内容样式 | ViewStyle | - |
| `iconShow` | 是否展示图标 | boolean | true |
| `iconSize` | 设置图标尺寸 | number | - |
