SearchInputBar 动作面板
---

可用于用户输入搜索信息

### 基础示例

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

### 一直显示右侧按钮 && 自定义placeholder && 自定右侧搜索内容

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
        searchRender={<View style={styles.search}><Text>搜索</Text></View>}
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

### 键盘不收起来

**注意: 每层```ScrollView```都要写```keyboardShouldPersistTaps="always"```**

```jsx
import { Fragment, useState } from 'react';
import { SearchInputBar } from '@uiw/react-native';
function Demo() {
  const [value, setValue] = useState('')
  return (
    <ScrollView keyboardShouldPersistTaps="always" >
      <SearchInputBar
        onChangeText={setValue}
        onClear={()=>setValue('')}
        value={value}
        showActionButton
        button={{
          onPress() {
            // 点击搜索按钮触法
          }
        }}
      />
    </ScrollView>
  );
}
```

### 获取输入框 Ref

```jsx
import { Fragment, useRef } from 'react';
import { SearchInputBar } from '@uiw/react-native';
function Demo() {
  const inputRef = useRef()
  return (
    <Fragment>
      <SearchInputBar
        ref={inputRef}
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
      <Button
        onPress={()=>{
          console.log(inputRef.current.inputRef)
        }}
      >获取 输入框 Ref</Button>
    </Fragment>
  );
}
```

### Props
**注意: 组件继承了```TextInput```属性**
```ts
import { TextInputProps,StyleProp,ViewStyle } from 'react-native';
import { ButtonProps,IconsProps } from '@uiw/react-native'

export interface SearchInputBarProps extends TextInputProps {
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 右侧按钮 */
  button?: ButtonProps;
  /** 右侧按钮文案 */
  actionName?: string;
  /** 是否一直显示右侧按钮 null = 永不显示 */
  showActionButton?: boolean | null;
  /** 搜索图标Icon参数 参考Icon组件 */
  searchIcon?: IconsProps;
  /** 点击搜索图标时触发事件 */
  onSearch?: Function;
  /** 清除图标Icon参数 参考Icon组件 */
  closeIcon?: IconsProps;
  /** 点击清除图标时触发事件 */
  onClear?: Function;
  /** 自定义搜索 */
  searchRender?: JSX.Element;
  /** 输入框TextInput样式 */ 
  inputStyle?: TextStyle
  /** loading加载 */
  loading?: any
}
```