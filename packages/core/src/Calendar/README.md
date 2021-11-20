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
            <Calendar />
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
           <Calendar color="red" lunarHoliday={true}/>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
```

### 自定义日历头部及农历详情展示

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
      barRightText: "返回",
      title : "日历",
      onPressBarLeft: () => navigation.goBack(), 
      barLeftText: "今天" 
    }
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
           <Calendar color="red" bar={barProps} lunarHoliday={true} showLunar={true}/>
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
  //是否显示农历及假日
  lunarHoliday:Boolean
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
   //是否显示农历及假日
  lunarHoliday: boolean;
  bar: barState ;
    //农历详情
  showLunar: boolean;
}
```
