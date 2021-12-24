TextArea 多行输入框
---

![](https://user-images.githubusercontent.com/66067296/147332763-7126a61c-0476-497e-8e52-5c2805ae346e.png)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可输入多行。

### 基础示例

```jsx
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextArea } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;
export interface TextAreaProps extends ComProps { }
export default class TextAreaView extends Component<TextAreaProps> {
  state = {
    value: '',
  };
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="基础实例" style={styles.card}>
              <TextArea
                onChange={(value: string) => {
                  this.setState({ value });
                }}
                value={this.state.value}
                placeholder='默认提示语'
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});
```

### 只读状态

```jsx
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextArea } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;
export interface TextAreaProps extends ComProps { }
export default class TextAreaView extends Component<TextAreaProps> {
  state = {
    value1: '只读状态不可输入',
  };
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
             <Card title="只读状态" style={styles.card}>
              <TextArea
                editable={false}
                onChange={(value1: string) => {
                  this.setState({ value1 });
                }}
                value={this.state.value1}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});
```

### 自定义输入框样式

```jsx
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextArea } from '@uiw/react-native';
import Layout, { Container } from '../../Layout';
import { ComProps } from '../../routes';

const { Header, Body, Card, Footer } = Layout;
export interface TextAreaProps extends ComProps { }
export default class TextAreaView extends Component<TextAreaProps> {
  state = {
    value3: '自定义输入框样式',
  };
  render() {
    const { route } = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
           <Card title="自定义输入框样式" style={styles.card}>
              <TextArea
                style={{
                  fontSize: 20,
                  color: 'blue',
                  height: 200,
                  borderColor: 'red',
                  borderWidth: 1,
                }}
                onChange={(value3: string) => {
                  this.setState({ value3 });
                }}
                value={this.state.value3}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});
```

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `textAlignVertical` | 文本位置 | `"top" | "center" | "auto" | "bottom"` | `top` |
| `placeholder` | 默认提示语 | String | |
| `placeholderTextColor` | 提示语颜色 | `string` | `#989FB2` |
| `maxLength` | 最大字符数 | `number` | `100` |
| `numberOfLines` | 输入框的行数(Android) | `number` | `30` |
| `editable` | 是否禁用 | `boolean` | `true` |
| `onChange` | 文本域内容变化时触发 | `(val: string) => void` |  |
| `value` | 文本框中的文字内容 | `string` |  |
