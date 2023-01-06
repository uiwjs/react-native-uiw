
Flex Flex布局
---

Flex 是 React Native CSS flex 布局的一个封装。

### 基础示例

```jsx  mdx:preview
import React,{ Fragment } from 'react';
import { Flex, Button } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
      <Flex>
        <Flex.Item>
          <Button size="small">按钮1</Button>
        </Flex.Item>
        <Flex.Item>
          <Button size="small">按钮2</Button>
        </Flex.Item>
        <Flex.Item>
          <Button size="small">按钮3</Button>
        </Flex.Item>
      </Flex>
    </Fragment>
  );
}

export default Demo
```

### 对齐方式

```jsx  mdx:preview
import React,{ Fragment } from 'react';
import  {Flex, Button, Spacing, Icon } from '@uiw/react-native';
import {View, Text} from 'react-native';
const Demo = () => {
  return (
    <Fragment>
      <Flex justify="start">
          <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
      </Flex>
      <Spacing />
      <Flex justify="center">
      <Button  color="#fff">
        <Icon name="apple" size={17} />
        <Text> apple</Text>
      </Button>
      <Button  color="#fff">
        <Icon name="menu-fold" size={17} />
        <Text> menu-fold</Text>
      </Button>
      <Button  color="#ffc107">
        <Icon name="warning" size={17} />
        <Text> warning</Text>
      </Button>
      <Button  type="danger">
        <Icon name="warning" fill="#fff" size={17} />
        <Text> warning</Text>
      </Button>
      </Flex>
      <Spacing />
      <Flex justify="end">
           <Button>警告</Button>
          <Button>警告</Button>
          <Button>主要</Button>
          <Button>警告</Button>
      </Flex>
    </Fragment>
  );
}
export default Demo

```

### Props

### Flex

```ts
export interface FlexProps extends ViewProps {
  /**
   * 项目定位方向
   * `row`, `column`, `row-reverse`, `column-reverse`
   * @default row
   */
  direction?: FlexStyle['flexDirection'];
  /**
   * 子元素在主轴上的对齐方式
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  /**
   * 子元素在交叉轴上的对齐方式
   * @default start
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /**
   * 子元素的换行方式
   * @default nowrap
   */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}
```

### Flex.Item

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

```ts
export interface FlexItemProps extends ViewProps {}
```