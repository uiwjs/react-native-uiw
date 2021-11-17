Calendar 日历 
---

展示日历

![](https://user-images.githubusercontent.com/66067296/141939109-5fbd8b77-82fa-4eb4-bd6d-6670fd577878.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

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
            <Calendar onPress={() => navigation.goBack()}/>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### 自定义日历颜色、农历及假日展示

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
             <Calendar color="red" lunarHoliday={true} />
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
| `color` | 设置日历颜色 | String | `#329BCB` |
| `lunarHoliday` | 是否显示农历及假日 | Boolean | `false` |
| `onPress` | 左上角按钮自定义跳转 | void | - |