DragDrawer 拖曳抽屉
---

![](https://user-images.githubusercontent.com/66067296/143187302-bee614b4-7799-49d1-9cab-470ad8228372.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可自定义拖曳抽屉高度。

### 基础示例

```jsx
import React, { useState, Fragment } from 'react';
import { View, Text } from 'react-native';
import { DragDrawer, Card, Icon } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';
const { Header, Body, Footer } = Layout;

export interface DragDrawerViewProps extends ComProps { }
export default function DragDrawerView({ route }: DragDrawerViewProps) {
  const description = route.params.description;
  const title = route.params.title;
  return (
    <Fragment>
      <DragDrawer
        drawerHeight={350}
      // drawerBackgroundColor='lightblue' //抽屉背景
      // icon={<Icon name="smile" fill="red" size={30} />} //自定义拖曳图标
      >
        <View>
          <Text>按住图标可上下拖曳抽屉</Text>
        </View>
      </DragDrawer>
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="下边抽屉可上下拖曳">
              <Text>下边抽屉可上下拖曳</Text>
            </Card>
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
| `icon` | 自定义图标 | `IconsName | React.ReactElement | React.ReactNode` |  |
| `style` | 自定义抽屉样式 | `StyleProp<ViewStyle>` |  |
