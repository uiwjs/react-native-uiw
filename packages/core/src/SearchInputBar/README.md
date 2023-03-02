SearchInputBar 搜索栏
---

可用于用户输入搜索信息

<!-- ![](https://user-images.githubusercontent.com/66067296/140004397-65ffc69e-a79f-425d-9d75-2928c125e5c8.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->


### 基础示例
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { SearchInputBar } from '@uiw/react-native';

function Demo() {
  console.log('1')
  const [value, setValue] = useState('')
  return (
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
  )
}
export default Demo
```

### 自定义搜索按钮
```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import SearchInputBar from '@uiw/react-native/lib/SearchInputBar';

function Demo() {
  const [value, setValue] = useState('')
  return (
      <SearchInputBar
        onChangeText={setValue}
        onClear={()=>setValue('')}
        value={value}
        placeholder="请输入搜索关键字"
        searchRender={
          <div
            style={{ display:'flex', alignItems:'center', padding: '0px 16px 0px 16px' }}
          >
            <label>搜索</label>
          </div>
        }
        // actionName="搜一下"
        showActionButton
      />
  )
}
export default Demo
```


### 获取输入框 Ref
```jsx mdx:preview&background=#bebebe29
import React, { useState, Fragment, useRef } from 'react';
import { View } from 'react-native';
import { SearchInputBar, Button } from '@uiw/react-native';

function Demo() {
  const inputRef = useRef()
  const [value, setValue] = useState('')
  return (
    <View>
      <SearchInputBar
        ref={inputRef}
        onChangeText={setValue}
        onClear={()=>setValue('')}
        value={value}
        placeholder="请输入搜索关键字"
        searchRender={
          <Button
            style={{  marginLeft: 20 }}
            type="light"
            onPress={()=>{
            console.log(inputRef.current.inputRef)
          }}
        >获取 输入框 Ref</Button>
      }
        actionName="搜一下"
        showActionButton
      />
   </View>
  )
}
export default Demo
```

### Props
**注意: 组件继承了```TextInput```属性**

```js
import { TextInputProps,StyleProp,ViewStyle } from 'react-native';
import { ButtonProps,IconsProps } from '@uiw/react-native'
```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| containerStyle | 容器样式 | StyleProp<ViewStyle> | - |
| button | 右侧按钮 | ButtonProps | - |
| actionName | 右侧按钮文案 | string | - |
| showActionButton | 是否一直显示右侧按钮 null = 永不显示 | `boolean` \| `null` | - |
| searchIcon | 搜索图标Icon参数 参考Icon组件 | IconsProps | - |
| onSearch | 点击搜索图标时触发事件 | Function | - |
| closeIcon | 清除图标Icon参数 参考Icon组件 | IconsProps | - |
| onClear | 点击清除图标时触发事件 | Function | - |
| searchRender | 自定义搜索 | React.ReactNode | - |
| inputStyle | 输入框TextInput样式 | TextStyle | - |
| loading | loading加载 | any | - |


