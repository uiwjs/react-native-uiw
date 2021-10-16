
Flex Flex布局
---

Flex 是 React Native CSS flex 布局的一个封装。

### 基础示例

```jsx
import { Fragment } from 'react';
import { Flex, Button } from '@uiw/react-native';

function Demo() {
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
```

### 对齐方式

```jsx
import { Fragment } from 'react';
import { Flex, Button } from '@uiw/react-native';

const Circle = (props: any) => {
  const size = props.size || 20;
  const style = {
    borderRadius: size / 2,
    backgroundColor: 'red',
    width: size,
    height: size,
    margin: 1,
  };
  return <View style={style} />;
};

function Demo() {
  return (
    <Fragment>
      <Flex justify="start">
        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
      </Flex>
      <Flex justify="center">
        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
      </Flex>
      <Flex justify="end">
        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />
      </Flex>
    </Fragment>
  );
}
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