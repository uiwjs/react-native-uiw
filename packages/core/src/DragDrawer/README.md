DragDrawer 拖曳抽屉
---

![](https://user-images.githubusercontent.com/66067296/143007086-5594c9ee-95cc-4802-9434-cc4041a8dae7.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可自定义拖曳抽屉高度。

### 基础示例

```jsx
import React, { useState, Fragment } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DragDrawer, Card, Button } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';
const { Header, Body, Footer } = Layout;

export interface DragDrawerViewProps extends ComProps { }
export default function DragDrawerView({ route }: DragDrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;
  return (
    <Fragment>
      <DragDrawer>
        <View>
          <Text>按住图标可上下拖曳抽屉</Text>
        </View>
      </DragDrawer>
      <Container >
        <Layout>
          <Header title={title} description={description} />
          <Body >
          </Body>
          <Footer />
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