SearchBar 模糊搜索组件
---

### 基础示例

```jsx mdx:preview&background=#bebebe29
import { SearchBar } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <SearchBar
      labelInValue
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]}
      onFocus={()=>{}}
      onChange={val=>console.log('val',val)}
      placeholder="请输入搜索"
    />
  );
}

export default Demo

```

### 禁用状态

```jsx mdx:preview&background=#bebebe29
import { SearchBar } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <SearchBar
      disabled
      labelInValue
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]}
      onFocus={()=>{}}
      onChange={val=>console.log('val',val)}
      placeholder="请输入搜索"
    />
  );
}

export default Demo

```

### 加载中的状态

```jsx mdx:preview&background=#bebebe29
import { SearchBar } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <SearchBar
      loading
      labelInValue
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]}
      onFocus={()=>{}}
      onChange={val=>console.log('val',val)}
      placeholder="请输入搜索"
    />
  );
}

export default Demo

```

### 搜索框自定义文本

```jsx mdx:preview&background=#bebebe29
import { SearchBar } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <SearchBar
      labelInValue
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]}
      onFocus={()=>{}}
      onChange={val=>console.log('val',val)}
      placeholder="点击这里输入查询吧！！！"
    />
  );
}

export default Demo

```
### 展示清除按钮

```jsx mdx:preview&background=#bebebe29
import { SearchBar } from '@uiw/react-native';
import React from 'react';

function Demo() {
  return (
    <SearchBar
      showClear
      labelInValue
      options={[
        {label:'上海',value:1},
        {label:'南京',value:2}
      ]}
      onFocus={()=>{}}
      onChange={val=>console.log('val',val)}
      placeholder="请输入搜索"
    />
  );
}

export default Demo

```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| onChangeText | 搜索框文字变化 | (value: string) => void | - |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | Array<`OptionsStateProps`> | - |
| onChange | 事件变化回调 | string | (value: string) => void |
| onFocus | 获得焦点时回调 null = 永不显示 | (e: any) => void | - |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { key: string, label: ReactNode } 的格式 | Boolean | - |
| disabled | 是否禁用 | Boolean | - |
| value | 值 | String | - |
| loading | 加载中状态 | Boolean | - |
| placeholder | 搜索框默认文本 | String | - |
| extra | 图标 | JSX.Element | - |
| showClear | 是否展示清除图标 | boolean | - |

### OptionsStateProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| label | 名 | string | - |
| value | 值 | `string` \| `number` | - |
