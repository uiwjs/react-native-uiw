Ellipsis 超出省略
---

用于文本过长，超出长度显示 `...`。

<image src='https://user-images.githubusercontent.com/66067296/137707584-8883d475-52a7-4022-a6dd-ceb91be028e2.png' alt='Ellipsis' style='zoom:33%;' />

### 基础示例

```jsx
import { Fragment } from 'react';
import { Ellipsis } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Ellipsis maxLen={5}>用于文本过长，超出长度显示</Ellipsis>
    </Fragment>
  );
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `children` | 内容为纯文本起作用 | ReactNode | - |
| `maxLen` | 文本长度 | Number | - |
| `placeholder` | 超出占位符 | String | `...` |