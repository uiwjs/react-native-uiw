Pagination 分页器
---

用于展示页码、请求数据等。

<!-- ![](https://user-images.githubusercontent.com/66067296/140044665-d27bccd1-24ba-4eaf-949b-89b6dc9f0dad.png) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(1)
  return (
      <Pagination
        current={current}
        total={60}
        pageSize={8}
        onPageChange={(type, current) => {
          setCurrent(current)
          console.log('type, current: ', type, current);
        }}
      />
  )
}
export default Demo
```


### 修改尺寸
```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(1)
  return (
      <Pagination
        size='large'
        current={current}
        total={60}
        pageSize={8}
      />
  )
}
export default Demo
```


### 页码跳转
```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(1)
  return (
      <Pagination
        current={current}
        total={60}
        pageSize={8}
        jumpBtn={true}
      />
  )
}
export default Demo
```

### 指定初始页码
```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(2)
  return (
     <Pagination
        current={current}
        total={60}
        pageSize={8}
      />
  )
}
export default Demo
```

### 翻页按钮图标展示
```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(2)
  return (
     <Pagination
        current={current}
        total={60}
        pageSize={8}
        icon={true}
      />
  )
}
export default Demo
```

### 自定义页码指示器
```jsx  mdx:preview
import React, { useState } from 'react';
import Pagination from '@uiw/react-native/lib/Pagination';

function Demo() {
  const [current, setCurrent] = useState(2)
  return (
     <Pagination
        current={current}
        total={60}
        pageSize={8}
        renderPages={(c,t)=><div>当前页：{c} 总页数{t}</div>}
      />
  )
}
export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| size | 尺寸| `small` \| `default` \| `large` | `small` |
| current | 当前页数 | number | - |
| currentColor | 当前页的颜色 | string | - |
| renderPages | 自定义当前页与总页数元素 | `(current: number,totalPage: number)=>React.ReactNode` | - |
| onCurrent | 点击当前页触发 | `(current: number,totalPage?: number)=> React.ReactNode` | - |
| total | 数据总量 | number | - |
| pageSize | 每页数据量 | number | - |
| icon| 是否以 icon 形式展示按钮 | boolean | - |
| onPageChange | 点击页码按钮时触发 | `(type: 'prev' \| 'next', current: number) => void` | - |
| borderColor | 边框颜色 | string | - |
| color | 按钮中的颜色 | string | - |
| jumpBtn | 页码跳转 | boolean | - |
| simple | 简洁版本 | boolean | - |
```
