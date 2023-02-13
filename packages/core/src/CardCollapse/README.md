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

class Demo extends Component {
  render() {
      const renderItem = (_, index) => {
    return (
      <View key={index} style={{ padding: 18 }}>
        <Image source={{uri: contents[index]}} style={{ height: 150 }} />
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
}

export default Demo

```

<!--End-->

### Props

```ts
type CardCollapseProps = ViewProps & {
  /**
    * 是否折叠
    */
  isCollapsed: boolean;
  /**
   * 渲染的内容
   */
  children: JSX.Element | JSX.Element[]
  /**
   * 外层样式
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * 内容样式
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * 卡片圆角
   */
  itemBorderRadius?: number;
  /**
   * 点击卡片回调
   */
  onItemPress?: (index: number) => void;
  /**
   * 卡片折叠回调（值是未来折叠状态）
   */
  onCollapseWillChange?: (changed: boolean) => void;
  /**
   * 卡片折叠回调（值是目前状态）
   */
  onCollapseChanged?: (changed: boolean) => void;
  /**
   * 卡片是否可以点击
   */
  disablePresses?: boolean;
};
```

