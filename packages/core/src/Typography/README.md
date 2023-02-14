Typography 排版
---

包含 H1~H6,`<U>`, `<S>`, `<P>` 等，类似于 HTML 中的标签。

### 基础示例

### 标题

```jsx  mdx:preview
import React from "react"
import { View } from 'react-native';
import H1 from '@uiw/react-native/lib/Typography/H1';
import H2 from '@uiw/react-native/lib/Typography/H2';
import H3 from '@uiw/react-native/lib/Typography/H3';
import H4 from '@uiw/react-native/lib/Typography/H4';
import H5 from '@uiw/react-native/lib/Typography/H5';
import H6 from '@uiw/react-native/lib/Typography/H6';

export default function Demo() {
  return (
    <>
      <View><H1>这是标题一</H1></View>
      <View><H2>这是标题二</H2></View>
      <View><H3>这是标题三</H3></View>
      <View><H4>这是标题四</H4></View>
      <View><H5>这是标题五</H5></View>
      <View><H6>这是标题六</H6></View>
    </>
  )
}
```

### 删除线

`<s>` 标签是 `<strike>` 标签的缩写版本

```jsx  mdx:preview
import React from "react"
import { View } from 'react-native';
import Del from '@uiw/react-native/lib/Typography/S';
import S from '@uiw/react-native/lib/Typography/S';

export default function Demo() {
  return (
    <>
      <View><S>这段字符串中间有条删除线</S></View>
      <View><Del>删除线的两种写法😂</Del></View>
    </>
  );
}
```

### 下划线

```jsx  mdx:preview
import React from "react"
import { View } from 'react-native';
import U from '@uiw/react-native/lib/Typography/U';

export default function Demo() {
  return (
    <U>这段文字有下划线</U>
  );
}
```

### 加粗

```jsx  mdx:preview
import React from "react"
import { View } from 'react-native';
import Strong from '@uiw/react-native/lib/Typography/Strong';

export default function Demo() {
  return (
    <Strong>这段文字加粗</Strong>
  );
}
```

### 换行

```jsx  mdx:preview
import React from "react"
import { Text } from 'react-native';
import Br from '@uiw/react-native/lib/Typography/Br';

export default function Demo() {
  return (
    <Text>文本开始<Br />换行结束</Text>
  );
}
```

### 段落

```jsx  mdx:preview
import React from "react"
import P from '@uiw/react-native/lib/Typography/P';

export default function Demo() {
  return (
    <>
    <P>这是一个段落{`<P>`}</P>
    <P>这是第二个段落{`<P>`}</P>
    </>
  );
}
```

### Div

```jsx  mdx:preview
import React from "react"
import { View, Text } from 'react-native';
import Div from '@uiw/react-native/lib/Typography/Div';

export default function Demo() {
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

```jsx  mdx:preview
import React from "react"
import { View, Text } from 'react-native';
import Hr from '@uiw/react-native/lib/Typography/Hr';

export default function Demo() {
  return (
    <View>
      <Text>一段文本</Text>
      <Hr />
      <Text>一段文本</Text>
    </View>
  );
}
```

### 可高亮文本 RnText

```jsx  mdx:preview
import React from "react"
import { View } from 'react-native';
import RnText from '@uiw/react-native/lib/Typography/RnText';

export default function Demo() {
  return (
    <View>
      <RnText type="header" label="react-native-uiw" />
      <RnText type="title" label="react-native-uiw" />
      <RnText type="label" label="react-native-uiw" />
      <RnText type="subLabel" label="react-native-uiw" />
      <RnText type="header" label="react-native-uiw" highlightText="native" highlightTextStyle={{ fontSize: 24, color: "red" }} />
    </View>
  );
}
```