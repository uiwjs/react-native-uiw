CardCollapse 可折叠卡片列表
---

可折叠卡片列表

### 基础示例

<!--DemoStart--> 
```jsx mdx:preview
import React,{ Component } from 'react';
import { ScrollView, View,Image } from 'react-native';
import { CardCollapse } from '@uiw/react-native';
import Layout from '../Layout';
import map from 'lodash/map'

const { Header} = Layout;
const contents = [
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
];

function Demo() {
  const renderItem = (_, index) => {
    return (
      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>
          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> 
      </View>
    );
  }
    return (
    <ScrollView style={{ flex: 1 }}>
      <Header description={'基本使用'} />
      <CardCollapse
       isCollapsed={true}//是否折叠
        disablePresses={true}//卡片是否可以点击
        onCollapseWillChange={()=>{}}
        onCollapseChanged={()=>{}}
      >
        {map(contents, (item, index) => {
          return renderItem(item, index);
        })}
      </CardCollapse>
    </ScrollView>
    )
}

export default Demo

```

### 默认不折叠

<!--DemoStart--> 
```jsx mdx:preview
import React,{ Component } from 'react';
import { ScrollView, View,Image } from 'react-native';
import { CardCollapse } from '@uiw/react-native';
import Layout from '../Layout';
import map from 'lodash/map'

const { Header} = Layout;
const contents = [
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
];

function Demo() {
  const renderItem = (_, index) => {
    return (
      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>
          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> 
      </View>
    );
  }
    return (
    <ScrollView style={{ flex: 1 }}>
      <Header description={'基本使用'} />
      <CardCollapse
       isCollapsed={false}//是否折叠
        disablePresses={true}//卡片是否可以点击
        onCollapseWillChange={()=>{}}
        onCollapseChanged={()=>{}}
      >
        {map(contents, (item, index) => {
          return renderItem(item, index);
        })}
      </CardCollapse>
    </ScrollView>
    )
}

export default Demo

```
### 卡片圆角

<!--DemoStart--> 
```jsx mdx:preview
import React,{ Component } from 'react';
import { ScrollView, View,Image } from 'react-native';
import { CardCollapse } from '@uiw/react-native';
import Layout from '../Layout';
import map from 'lodash/map'

const { Header} = Layout;
const contents = [
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',
  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',
];

function Demo() {
  const renderItem = (_, index) => {
    return (
      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>
          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> 
      </View>
    );
  }
    return (
    <ScrollView style={{ flex: 1 }}>
      <Header description={'基本使用'} />
      <CardCollapse
        isCollapsed={true}//是否折叠
        disablePresses={true}//卡片是否可以点击
        onCollapseWillChange={()=>{}}
        onCollapseChanged={()=>{}}
        itemBorderRadius='20'
      >
        {map(contents, (item, index) => {
          return renderItem(item, index);
        })}
      </CardCollapse>
    </ScrollView>
    )
}

export default Demo
```

#### 属性

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `isCollapsed` | 是否折叠 | `boolean` | - |
| `children` | 渲染的内容 | `JSX.Element, JSX.Element[]` | - |
| `containerStyle` | 外层样式 | `StyleProp<ViewStyle>` | - |
| `contentContainerStyle` | 内容样式 | `StyleProp<ViewStyle>` | - |
| `itemBorderRadius` | 卡片圆角 | `number` | - |
| `onItemPress` | 点击卡片回调 | (`index: number) => void` | - |
| `onCollapseWillChange` | 卡片折叠回调（值是未来折叠状态） | `(changed: boolean) => void` | - |
| `onCollapseChanged` | 卡片折叠回调（值是目前状态） | `(changed: boolean) => void` | - |
| `disablePresses` | 卡片是否可以点击 | `boolean` | - |
