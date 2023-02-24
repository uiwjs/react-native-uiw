Calendar 日历 
---

展示日历

### 基础示例

```jsx  mdx:preview
import React,{Component} from 'react';
import { View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

 function CalendarView() {
    const title = 'Calendar';
    return (
        <Container>
          <Layout>
            <Body>
              <Calendar />
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView
```

### 自定义日历颜色、农历及假日展示

```jsx  mdx:preview
import React,{Component} from 'react';
import { View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

function CalendarView() {
    return (
        <Container>
          <Layout>
            <Body>
           <Calendar color="red" lunarHoliday={true}/>
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView

```

### 自定义日历头部及农历详情展示

```jsx  mdx:preview
import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

function CalendarView() {
     const barProps = {
      barRightText: "返回",
      title : "日历",
      onPressBarLeft: () => navigation.goBack(), 
      barLeftText: "今天" 
    }
    return (
        <Container>
          <Layout>
            <Body>
              <Calendar color="red" bar={barProps} lunarHoliday={true} showLunar={true}/>
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView
```

### 隐藏头部

```jsx  mdx:preview
import React,{Component} from 'react';
import { View } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

 function CalendarView() {
    const title = 'Calendar';
    return (
        <Container>
          <Layout>
            <Body>
              <Calendar showBar={false} />
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView
```

### 自定义日期额外内容

```jsx  mdx:preview
import React,{Component} from 'react';
import { View,Text } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

 function CalendarView() {
    const title = 'Calendar';
    return (
        <Container>
          <Layout>
            <Body>
              <Calendar renderDay={()=><View><Text>1</Text></View>} />
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView
```

### value值

```jsx  mdx:preview
import React,{Component} from 'react';
import { View,Text } from 'react-native';
import { Calendar } from '@uiw/react-native';
import Layout, { Container }  from '../Layout';
const { Header, Body,  Footer } = Layout;

 function CalendarView() {
    const title = 'Calendar';
    return (
        <Container>
          <Layout>
            <Body>
              <Calendar value={new Date('2023-1-1')} />
            </Body>
            <Footer />
          </Layout>
        </Container>
    );
}
export default CalendarView
```

### Props

集成继承 `Button` 组件自定义属性，外层包裹继承 [`Flex`] 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 日历颜色 | string | - |
| `lunarHoliday` | 是否显示农历及假日 | Boolean | `false` |
| `showLunar` | 是否显示农历详情 | Boolean | `false` |
| `showBar` | 是否显示导航栏 | Boolean | `true` |
| `bar` | 导航栏 | React.ReactNode | - |
| `onChange` | 选择时间事件 |  (value: string) => void | - |
| `renderDay` | 自定义渲染日期额外内容 | (date:any) => React.ReactNode | JSX.Element | - |
| `value` | 值 |  Date | - |


### bar 参数
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `title` | 导航栏标题 | string | - |
| `lunarHoliday` | 是否显示农历及假日 | Boolean | `false` |
| `barLeftText` | 导航左侧文本 | string | - |
| `barRightText` | 导航右侧文本 | string | - |
| `onPressBarLeft` | 是否显示农历及假日 | `() => void` | - |
| `render` | 自定义导航栏 | React.ReactNode | - |