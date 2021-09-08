SearchInputBar 动作面板
---

可用于用户输入搜索信息

## 基础示例

```jsx
import { Fragment, useState } from 'react';
import { SearchInputBar } from '@uiw/react-native';
function Demo() {
  const [value, setValue] = useState('')
  return (
    <Fragment>
      <SearchInputBar
        onChangeText={setValue}
        onClear={()=>setValue('')}
        value={value}
        button={{
          onPress() {
            // 点击搜索按钮触法
          }
        }}
      />
    </Fragment>
  );
}
```

## 一直显示右侧按钮 && 自定义placeholder

```jsx
import { Fragment, useState } from 'react';
import { SearchInputBar } from '@uiw/react-native';
function Demo() {
  const [value, setValue] = useState('')
  return (
    <Fragment>
      <SearchInputBar
        onChangeText={setValue}
        onClear={()=>setValue('')}
        value={value}
        placeholder="请输入搜索关键字"
        actionName="搜一下"
        showActionButton
        button={{
          onPress() {
            // 点击搜索按钮触法
          }
        }}
      />
    </Fragment>
  );
}
```


## Props

```ts
import { TextInputProps } from 'react-native';
import { ButtonProps } from '@uiw/react-native'

export interface SearchInputBarProps extends TextInputProps {
  /** 点击清除按钮时触发事件 */
  onClear?: Function,
  /** 右侧按钮 */
  button?: ButtonProps
  /** 右侧按钮文案 */
  actionName?: string,
  /** 右侧按钮宽度默认70 */
  buttonWidth?: number,
  /** 是否一直显示右侧按钮 */
  showActionButton?: boolean
}
```