Tooltip 工具提示
---

当用户点击元素时，工具提示将显示信息。

<!-- ![](https://user-images.githubusercontent.com/57083007/146734166-271ec118-69b6-437a-885e-803e435cc05b.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { Tooltip } from '@uiw/react-native';

function Demo() {
  return (
    <Tooltip title={<label style={{ wordBreak: "keep-all" }}>我是一个文本</label>}>
        我是一个文本1
    </Tooltip>
  );
}
export default Demo
```

### 自定义提示内容

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { Tooltip, Icon } from '@uiw/react-native';

function Demo() {
  return (
    <Tooltip
      backgroundColor="pink"
      width={30}
      height={30}
      title={(
        <div>
          <label style={{ wordBreak: "keep-all" }}>我是一个苹果</label>
          <Icon name='apple' color="#fff" />
        </div>
     )}
    >
      <Icon name='apple' color="red" />
    </Tooltip>
  );
}
export default Demo
```

### Props

```js
import { ModalProps } from 'react-native';
```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| title | cloud 元素 | React.ReactNode | - |
| children | 子元素 | JSX.Element | - |
| toggleAction | 点击类型 | `onPress` \| `onLongPress` \| `onPressIn` \| `onPressOut` | - |
| height | 高度 | number \| `auto` | - |
| width | 宽度 | number \| `auto` | - |
| backgroundColor | 背景色 | string | - |
| borderRadius | 圆角大小 | number | - |
| onOpen | 打开时触发 | Function | - |
| onClose | 关闭时触发 | Function | - |

