TextArea 多行输入框
---

<!-- ![](https://user-images.githubusercontent.com/66067296/147332763-7126a61c-0476-497e-8e52-5c2805ae346e.png) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  return (
    <TextArea
      value={"Hello TextArea \nplease input word"}
      placeholder='请输入'
    />
  )
}
export default Demo
```

### 监听输入内容
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('修改我')

  return (
    <TextArea
      onChange={(value) => {
        console.log('输入内容: ', value);
        setValue(value);
      }}
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### 只读状态

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('不可修改')

  return (
    <TextArea
      editable={false}
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### 显示输入文字数量
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('此处省略..字')

  return (
    <TextArea
      onChange={(value) => {
        setValue(value);
      }}
      maxLength={100}
      showWords={true}
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### 限制输入行数
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('第1行\n第2行\n第3行')

  return (
    <TextArea
      onChange={(value) => {
        setValue(value);
      }}
      numberOfLines={3}
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### 根据内容自动调整高度

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('')

  return (
    <TextArea
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
      placeholder='请输入'
      autoSize
    />
  )
}
export default Demo
```

### 自定义输入框样式
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('')

  return (
    <TextArea
      onChange={(value) => {
        setValue(value);
      }}
      style={{
        height: 150,
        borderColor: 'green',
        borderWidth: 2,
      }}
      fontStyle={{ fontSize: 25 }}
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### 文字定位
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import TextArea from '@uiw/react-native/lib/TextArea';

function Demo() {
  const [value, setValue] = useState('我在这呢')

  return (
    <TextArea
      onChange={(value) => {
        setValue(value);
      }}
      textAlignVertical="center"
      value={value}
      placeholder='请输入'
    />
  )
}

export default Demo
```

### props

组件继承 [`TextInput`](https://www.react-native.cn/docs/textinput)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `textAlignVertical` | 文本位置 | "top" \| "center" \| "auto" \| "bottom" | `top` |
| `placeholder` | 默认提示语 | String | |
| `placeholderTextColor` | 提示语颜色 | `string` | `#989FB2` |
| `maxLength` | 最大字符数 | `number` | `100` |
| `numberOfLines` | 输入框的行数(Android) | `number` | `30` |
| `editable` | 是否禁用 | `boolean` | `true` |
| `onChange` | 文本域内容变化时触发 | `(val: string) => void` |  |
| `value` | 文本框中的文字内容 | `string` |  |
| `showWords` | 是否展示字数 | `boolean` | `false` |
| `fontStyle` | 输入框文字样式 | ` StyleProp<TextStyle>` |  |
