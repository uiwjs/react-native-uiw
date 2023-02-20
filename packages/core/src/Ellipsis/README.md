Ellipsis 超出省略
---

用于文本过长，超出长度显示 `...`。


### 基础示例


```jsx  mdx:preview
import React from "react"
import { Ellipsis } from '@uiw/react-native';

function Demo() {

  return (
    <Ellipsis maxLen={5}>用于文本过长，超出长度显示</Ellipsis>
  );
}

export default Demo;
```

### 自定义占位符


```jsx  mdx:preview
import React from "react"
import { Ellipsis } from '@uiw/react-native';

function Demo() {

  return (
    <Ellipsis maxLen={5} placeholder='😂😂😂😂'>用于文本过长，超出长度显示</Ellipsis>
  );
}

export default Demo;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `children` | 内容为纯文本起作用 | ReactNode | - |
| `maxLen` | 文本长度 | Number | - |
| `placeholder` | 自定义占位符 | String | `...` |