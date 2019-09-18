Typography 排版
---

包含 H1~H6,`<U>`, `<S>`, `<P>` 等，类似于 HTML 中的标签。

[`H1~H6`](#标题) | [`<Del>`](#加删除线) | [`<S>`](#加删除线)


## 标题

```jsx
import { H1, H2, H3, H4, H5, H6 } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <H1>这是标题一</H1>
      <H2>这是标题二</H2>
      <H3>这是标题二</H3>
      <H4>这是标题二</H4>
      <H5>这是标题二</H5>
      <H6>这是标题二</H6>
    </>
  );
}
```

## 加删除线


```jsx
import { Del, S } from '@uiw/react-native';

function Demo() {
  return (
    <>
      <S>这段字符串中间有条删除线</S>
      <Del>这段字符串中间有条删除线</Del>
    </>
  );
}
```