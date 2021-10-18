Radio 单选框
---

单选框，在一组备选项中进行单选。

### 基础示例

```jsx
import { Radio } from '@uiw/react-native';

function Demo() {
  return (
    <Radio>所有人可见</Radio>
  );
}
```

### 受控组件

```jsx
import { useState } from 'react';
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
      所有人可见
    </Radio>
  );
}
```

### 单选

```jsx
import { useState } from 'react';
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
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `checked` | Radio 是否被选中 | Boolean | `false` |
| `disabled` | 禁用 | Boolean | `false` |
| `circleSize` | Radio 大小 | Number | `20` |
| `thumbSize` | Radio 选中部分大小 | Number | `12` |
| `onPress` | 点击 Radio 的点击回调函数 | (event) => void | - |
