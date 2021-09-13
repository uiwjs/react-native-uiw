CardCollapse 可折叠卡片列表
---

可折叠卡片列表

### 基础示例

<!--DemoStart--> 
```jsx
import React from 'react';
import { ScrollView, View,Image } from 'react-native';
import { CardCollapse } from '@uiw/react-native';
import Layout from '../../Layout';
import map from 'lodash/map'

const contents = [
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg',
  'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F04%2F22%2Fca22d8623fe7454ea9cdb33f3137d14e.jpeg&thumbnail=650x2147483647&quality=80&type=jpg'
];

const CardCollapseDemo = (props: any) => {
  const { Header } = Layout;
  const { route } = props;
  const description = route.params.description;
  const title = route.params.title;

  const renderItem = (_: string, index: number) => {
    return (
      <View key={index} style={{ padding: 18 }}>
        <Image source={{uri: contents[index]}} style={{ height: 150 }} />
      </View>
    );
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title={title} description={description} />
      <Header description={'基本使用'} />
      <CardCollapse
       isCollapsed
       disablePresses={true}
      >
        {map(contents, (item, index) => {
          return renderItem(item, index);
        })}
      </CardCollapse>
    </ScrollView>
  );
};
export default CardCollapseDemo;

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

