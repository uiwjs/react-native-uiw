Typography 排版
---

包含 H1~H6,`<U>`, `<S>`, `<P>` 等，类似于 HTML 中的标签。

[`H1~H6`](#标题) | [`<Del>`](#删除线) | [`<S>`](#删除线) | [`<U>`](#下划线) | [`<Strong>`](#加粗)


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

## 删除线

`<s>` 标签是 `<strike>` 标签的缩写版本

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

## 下划线

```jsx
import { U } from '@uiw/react-native';

function Demo() {
  return (
    <U>这段文字有下划线</U>
  );
}
```

## 加粗

```jsx
import { Strong } from '@uiw/react-native';

function Demo() {
  return (
    <Strong>这段文字加粗</Strong>
  );
}
```

## 段落

```jsx
import { P } from '@uiw/react-native';

function Demo() {
  return (
    <P>这段文字加粗</P>
  );
}
```