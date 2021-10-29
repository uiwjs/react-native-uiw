Pagination 分页器
---

用于展示页码、请求数据等。

<img src='https://user-images.githubusercontent.com/66067296/139399708-239e65f9-565e-4be2-9497-c8e5b836cef6.png' alt='Pagination' style='zoom:33%;' />

### 基础示例

```jsx
import { Fragment, useState } from 'react';
import { Pagination } from '@uiw/react-native';
function Demo() {
  const [current, setCurrent] = useState(false)
  return (
    <Fragment>
      <Pagination
        current={current}
        total={60}
        pageSize={8}
        onPageChange={(type, current) => {
          setCurrent(current)
          console.log('type, current: ', type, current);
        }}
      />
    </Fragment>
  );
}
```

### 使用icon && 修改大小

```jsx
import { Fragment, useState } from 'react';
import { Pagination } from '@uiw/react-native';
function Demo() {
  const [current, setCurrent] = useState(false)
  return (
    <Fragment>
      <Pagination
        icon
        size='large'
        current={current}
        total={60}
        pageSize={8}
        onPageChange={(type, current) => {
          setCurrent(current)
          console.log('type, current: ', type, current);
        }}
      />
    </Fragment>
  );
}
```

### Props

```ts
export interface PaginationProps {
  /** 尺寸 */
  size?: size;
  /** 当前页	 */
  current?: number;
  /** 当前页的颜色 */
  currentColor?: string;
  /** 自定义当前页与总页数元素 */
  renderPages?: (current: number,totalPage: number)=>React.ReactNode;
  /** 点击当前页触发 */
  onCurrent?: (current: number,totalPage?: number)=>unknown;
  /** 数据总量 */
  total: number;
  /** 每页数据量	 */
  pageSize?: number;
  /** 是否以 icon 形式展示按钮 */
  icon?: boolean;
  /** 点击页码按钮时触发 */
  onPageChange?: (type: 'prev' | 'next', current: number) => void;
  /** 边框颜色 */
  borderColor?: string
  /** 按钮中的颜色 */
  color?: string
}
```
