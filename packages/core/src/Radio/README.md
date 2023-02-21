Radio 单选框
---

单选框，在一组备选项中进行单选。


### 基础示例

```jsx  mdx:preview
import { Radio } from '@uiw/react-native';
import React from "react"

function Demo() {
  return (
    <>
      <Radio>Radio</Radio>
      <Radio checked>Radio checked</Radio>
    </>
    
  );
}

export default Demo

```

### 受控组件

```jsx  mdx:preview
import React, { useState } from 'react';
import { Radio } from '@uiw/react-native';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onPress={() => {
        setChecked(!checked);
      }}
    >
      Radio
    </Radio>
  );
}

export default Demo
```

### 禁用状态

```jsx  mdx:preview
import React from 'react';
import { Radio } from '@uiw/react-native';

function Demo() {
  return (
    <Radio  disabled color='red'  >
      Radio
    </Radio>
  );
}

export default Demo
```

### 单选

```jsx   mdx:preview
import React,  { useState } from 'react';
import { View } from 'react-native';
import { Radio } from '@uiw/react-native';

const radioData = [
  { label: '四川菜', value: 1 },
  { label: '湖北菜', value: 2 },
  { label: '西北菜', value: 3 },
  { label: '新疆菜', value: 4 },
  { label: '东北菜', value: 5 },
];

function Demo() {
  const [value, setValue] = useState(0);
  return (
    <View>
      {radioData.map((item, idx) => {
        return (
          <Radio
            key={idx}
            checked={value === item.value}
            onPress={() => {
              setValue(item.value);
            }}
          >
            {item.label}
          </Radio>
        );
      })}
    </View>
  );
}

export default Demo


```

### 自定义颜色

```jsx  mdx:preview
import React, { useState } from 'react';
import { Radio } from '@uiw/react-native';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio  checkedColor='red' borderColor='#008EF0' >
      Radio
    </Radio>
  );
}

export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `checked` | Radio 是否被选中 | Boolean | `false` |
| `disabled` | 禁用 | Boolean | `false` |
| `circleSize` | Radio 大小 | Number | `20` |
| `thumbSize` | Radio 选中部分大小 | Number | `12` |
| `onPress` | 点击 Radio 的点击回调函数 | (event) => void | - |
| `color`   | Radio 禁用后颜色 | string | `#c3c5c7` |
| `checkedColor`   | Radio 颜色 | string | `#008EF0` |
| `borderColor`   | Radio 边框颜色 | string | `#bdc1cc` |
