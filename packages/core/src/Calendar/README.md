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
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
           <Calendar color="red" />
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 设置日历颜色 | String | "#329BCB" |