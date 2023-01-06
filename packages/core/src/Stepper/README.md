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

### 设置样式

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
      delayLong={500}
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

```ts
export interface Color {
  /** 组件主色调 #108ee9 */
  color?: string,
  /** 组件边框颜色 #108ee9 */
  borderColor?: string,
  /** 组件按钮 + - 颜色 #108ee9 */
  controlColor?: string,
  /** 组件 value 值颜色 #108ee9 */
  valueColor?: string
}

export  type Size =  'small' | 'default' | 'large';

export interface StepProps {
  /** 尺寸 */
  size?:Size,
  /** 颜色 */
  color?: Color,
  /** input 宽度,不包括两侧按钮 */
  width?: number,
  /** 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 */
  value: number,
  /** 每次点击改变的间隔大小 */
  step?: number,
  /** 最小值 */
  min?: number,
  /** 最大值 */
  max?: number,
  /** 按钮是否禁止点击 */
  disabled?: boolean,
  /** 输入框是否禁止输入 */
  disabledInput?: boolean,
  /** 按钮是否支持长按 */
  disabledLongPress?: boolean,
  /** 长按间隔 单位(ms) */
  delayLong?: number,
  /** 输入框值改变时触发的事件, 必填 */
  onChange: (value: number)=>void,
  /** 输入框尝试输入错误数据触发的事件	 */
  onErrorInput?: (type: 'OVER' | 'LOW', errorValue: number) => void
};
```
