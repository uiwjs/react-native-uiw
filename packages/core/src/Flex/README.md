
flex布局
---

Flex 是 React Native CSS flex 布局的一个封装。

### 基础示例

```jsx  mdx:preview
import React,{ Fragment } from 'react';
import { Flex, Button, WingBlank } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
      <Flex>
        <Flex.Item>
          <WingBlank>
            <Button>A</Button>
          </WingBlank>
        </Flex.Item>
        <Flex.Item>
          <WingBlank>
            <Button>B</Button>
          </WingBlank>
        </Flex.Item>
        <Flex.Item>
          <WingBlank>
            <Button>C</Button>
          </WingBlank>
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
import  {Flex, Button, Spacing, Icon, WingBlank } from '@uiw/react-native';
import {View, Text} from 'react-native';
const Demo = () => {
  return (
    <Fragment>
      <Text>默认左对齐</Text>
      <Flex justify="start">
        <WingBlank><Button>A</Button></WingBlank>
        <WingBlank><Button>B</Button></WingBlank>
        <WingBlank><Button>C</Button></WingBlank>
      </Flex>
      <Spacing />
      <Text>居中</Text>
      <Flex justify="center">
        <WingBlank><Button>D</Button></WingBlank>
        <WingBlank><Button>E</Button></WingBlank>
        <WingBlank><Button>F</Button></WingBlank>
      </Flex>
      <Spacing />
      <Text>右对齐</Text>
      <Flex justify="end">
        <WingBlank><Button>H</Button></WingBlank>
        <WingBlank><Button>I</Button></WingBlank>
        <WingBlank><Button>J</Button></WingBlank>
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