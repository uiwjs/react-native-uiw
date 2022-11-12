DragDrawer 拖曳抽屉
---

![](https://user-images.githubusercontent.com/66067296/143187302-bee614b4-7799-49d1-9cab-470ad8228372.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可自定义拖曳抽屉高度。

> 🚧 注意：测试版本谨慎使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

```jsx
import React, { useState, Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DragDrawer, Card, Icon, List } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';
const { Header, Body, Footer } = Layout;
const data = [];
for (let i = 1; i < 21; i++) {
  data.push(i);
}
export interface DragDrawerViewProps extends ComProps { }
export default function DragDrawerView({ route }: DragDrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;

  const renderItem = ({ item }) => (
    <View style={{ borderWidth: 0.5, padding: 10, borderColor: '#D9D9D9' }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>{item}</Text>
    </View>
  )
  return (
    <Fragment>
      <DragDrawer
        drawerHeight={350}
      // drawerBackgroundColor='lightblue' //抽屉背景
      // icon={<Icon name="smile" fill="red" size={30} />} //自定义拖曳图标
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </DragDrawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
        </Layout>
      </Container>
    </Fragment>
  );
}
```

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `drawerHeight` | 抽屉高度 | Number | `300` |
| `drawerBackgroundColor` | 指定抽屉背景色 | String | `#fff` |
| `icon` | 自定义图标 | `IconsName | React.ReactElement | React.ReactNode` |  |
| `style` | 自定义抽屉样式 | `StyleProp<ViewStyle>` |  |
