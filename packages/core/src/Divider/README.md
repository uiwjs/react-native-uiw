Divider 分割线
---

<img src='https://user-images.githubusercontent.com/66067296/140264880-2e3ad121-d86f-4625-8149-7bf452b348db.png' alt='Divider' style='zoom:33%;' />

区隔内容的分割线。

### 基础示例

```jsx
import { Fragment } from 'react';
import { View, Text } from 'react-native';
import { Divider } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <Text>分割线</Text>
      <Divider label="OR" />
      <Text>横向分割线</Text>
      <Divider />
      <Text>分割线</Text>
    </Fragment>
  );
}
```

### 分割线标题位置

```jsx
import { Fragment } from 'react';
import { View, Text } from 'react-native';
import { Divider } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <Text>分割线</Text>
      <Divider label="left" orientation="left" labelStyle={{ fontWeight: 'bold' }} />
      <Text>分割线</Text>
      <Divider label="center" labelStyle={{ fontWeight: 'bold' }} />
      <Text>分割线</Text>
      <Divider label="right" orientation="right" labelStyle={{ fontWeight: 'bold' }} />
    </Fragment>
  );
}
```

### 纵向分割线

```jsx
import { View, Text } from 'react-native';
import { Divider } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ height: 200 }}>
      <Divider type="vertical" label="OR" />
    </View>
  );
}
```

### props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `label` | 分割线标题，文本内容 | String | - |
| `type` | 水平还是垂直类型 | `horizontal`, `vertical` | `horizontal` |
| `gutter` | 间距，更具 `type` 来设置上下或者左右间距 | Number | `8` |
| `orientation` | 分割线标题的位置 |  `left`, `right`,`center`| `center` |