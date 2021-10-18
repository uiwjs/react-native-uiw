Typography 排版
---

包含 H1~H6,`<U>`, `<S>`, `<P>` 等，类似于 HTML 中的标签。

[`H1~H6`](#标题) · [`<Del>`](#删除线) · [`<S>`](#删除线) · [`<U>`](#下划线) · [`<Strong>`](#加粗) · [`<P />`](#段落) · [`<Br />`](#换行) · [`<Hr />`](#水平线) · [`<Div />`](#div)

### 基础示例

### 标题

```jsx
import { Fragment } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <H1>这是标题一</H1>
      <H2>这是标题二</H2>
      <H3>这是标题二</H3>
      <H4>这是标题二</H4>
      <H5>这是标题二</H5>
      <H6>这是标题二</H6>
    </Fragment>
  );
}
```

### 删除线

`<s>` 标签是 `<strike>` 标签的缩写版本

```jsx
import { Fragment } from 'react';
import { Del, S } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <S>这段字符串中间有条删除线</S>
      <Del>这段字符串中间有条删除线</Del>
    </Fragment>
  );
}
```

### 下划线

```jsx
import { U } from '@uiw/react-native';

function Demo() {
  return (
    <U>这段文字有下划线</U>
  );
}
```

### 加粗

```jsx
import { Strong } from '@uiw/react-native';

function Demo() {
  return (
    <Strong>这段文字加粗</Strong>
  );
}
```

### 换行

```jsx
import { Text } from 'react-native';
import { Br } from '@uiw/react-native';

function Demo() {
  return (
    <Text>文本开始<Br />换行结束</Text>
  );
}
```

### 段落

```jsx
import { Br } from '@uiw/react-native';

function Demo() {
  return (
    <P>这是一个段落{`<P>`}</P>
  );
}
```

### Div

```jsx
import { View, Text } from 'react-native';
import { Div } from '@uiw/react-native';

function Demo() {
  return (
    <View>
      <Div>这是一段文本{`<Div>`}</Div>
      <Div>
        <View>
          <Text>既可以是 View/Text 组件 也可以是纯字符串 </Text>
        </View>
      </Div>
    </View>
  );
}
```

### 水平线

```jsx
import { View, Text } from 'react-native';
import { Hr } from '@uiw/react-native';

function Demo() {
  return (
    <View>
      <Text>一段文本</Text>
      <Hr />
      <Text>一段文本</Text>
    </View>
  );
}
```
