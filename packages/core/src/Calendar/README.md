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

### Props

集成继承 `Button` 组件自定义属性，外层包裹继承 [`Flex`] 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 日历颜色 | string | - |
| `lunarHoliday` | 是否显示农历及假日 | Boolean | `false` |
| `showLunar` | 农历详情 | Boolean | `false` |
| `bar` | 导航栏 | React.ReactNode | - |

### bar 参数
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `title` | 导航栏标题 | string | - |
| `lunarHoliday` | 是否显示农历及假日 | Boolean | `false` |
| `barLeftText` | 导航左侧文本 | string | - |
| `barRightText` | 导航右侧文本 | string | - |
| `onPressBarLeft` | 是否显示农历及假日 | `() => void` | - |
| `render` | 自定义导航栏 | React.ReactNode | - |