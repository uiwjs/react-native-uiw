Stepper 步进器
---
用作增加或者减少当前数值。

<!-- ![](https://user-images.githubusercontent.com/57083007/146733528-a57250dd-a53f-4819-bdff-732af7fa7279.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(1)

  return (
    <Stepper
      size='small'
      value={value}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```

### 尺寸
可选尺寸`small` `default` `large`：

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';
import { View } from 'react-native';

function Demo() {
  const [value, setValue] = useState(1)

  return (
    <View style={{ display:'flex', height: 150, justifyContent:'space-around' }}>
      <Stepper
        size='small'
        value={value}
        onChange={(value)=>{
          setValue(value)
        }}
      />
      <Stepper
        size='default'
        value={value}
        onChange={(value)=>{
          setValue(value)
        }}
      />
      <Stepper
        size='large'
        value={value}
        onChange={(value)=>{
          setValue(value)
        }}
      />
    </View>
  );
}

export default Demo
```

### 按钮禁止点击

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(10)

  return (
    <Stepper
      value={value}
      disabled={true}
      width={150}
      color={{color: '#ccc',borderColor: '#999',controlColor: 'red',valueColor: '#000'}}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```

### 长按增加
长按按钮自动增长数值

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(1)

  return (
    <Stepper
      disabledLongPress={true}
      delayLong={100}
      value={value}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```


### 限制取值范围
最大值`20`,最小值`10`

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(10)

  return (
    <Stepper
      value={value}
      min={10}
      max={20}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```

### 设置步进数
每次单击增长值 `5`

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(10)

  return (
    <Stepper
      value={value}
      step={5}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```


### 禁止手动输入

```jsx  mdx:preview
import React, { useState } from 'react';
import { Stepper } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(10)

  return (
    <Stepper
      value={value}
      disabledInput={true}
      onChange={(value)=>{
        setValue(value)
      }}
    />
  );
}

export default Demo
```

### Stepper Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `size` | 尺寸 | `'small' \| 'default' \| 'large'` | - |
| `color` | 颜色集合,具体项见下表 | Color | - |
| `width` | input 宽度,不包括两侧按钮 | number | - |
| `value` | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | number | - |
| `step` | 每次点击改变的间隔大小 | number | - |
| `min` | 最小值 | number | - |
| `max` | 最大值 | number | - |
| `disabled` | 按钮是否禁止点击 | boolean | - |
| `disabledInput` | 输入框是否禁止输入 | boolean | - |
| `disabledLongPress` | 按钮是否支持长按 | boolean | - |
| `delayLong` | 长按间隔 单位(ms) | number | - |
| `onChange` | 输入框值改变时触发的事件, 必填  | (value: number)=>void | - |
| `onErrorInput` | 输入框尝试输入错误数据触发的事件 | `(type: 'OVER' \| 'LOW', errorValue: number) => void` | - |

### Color
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 组件主色调 | string |  `#108ee9` |
| `borderColor` | 组件边框颜色 | string | `#108ee9` |
| `controlColor` | 组件按钮 + - 颜色 | string |  `#108ee9` |
| `valueColor` | 组件 value 值颜色 | string | `#108ee9` |

