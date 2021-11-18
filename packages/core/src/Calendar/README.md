Calendar 日历 
---

展示日历

![](https://user-images.githubusercontent.com/66067296/141421928-d46ffd84-2349-49ac-8b6f-4e8455a017eb.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import { ComProps } from '../../routes';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

export interface CalendarViewProps extends ComProps { }

export default class CalendarView extends React.Component<CalendarViewProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Calendar />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### 自定义日历颜色

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import { ComProps } from '../../routes';
import Layout, { Container } from '../../Layout';

const { Header, Body, Card, Footer } = Layout;

export interface CalendarViewProps extends ComProps { }

export default class CalendarView extends React.Component<CalendarViewProps> {
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
     const barProps = {
      barRightText: "返回啦",
      title : "日历啦",
      onPressBarLeft: () => { }, 
      barLeftText: "今天啦" 
    }
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
           <Calendar color="red" bar={barProps} />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### props

```ts

interface barState {
  // 导航栏标题
  title?: string
  // 导航左侧文本
  barRightText?: string;
  // 导航右侧文本
  barLeftText?: string;
  // 导航左侧点击事件
  onPressBarLeft?: () => void;
  // 自定义导航栏
  render?: React.ReactNode
}
export interface CalendarProps extends ViewProps {
  // 日历颜色
  color?: string;
  bar: barState ;
}
```