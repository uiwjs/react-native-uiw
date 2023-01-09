ImageViewer 图片查看
---

<!-- ![](https://user-images.githubusercontent.com/66067296/148637929-a8ef7878-c7b6-4af6-af9e-f610cf96ab45.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

可自定义拖曳抽屉高度。

### 基础示例

```jsx  mdx:preview
import React, { Component } from 'react';
import { ImageViewer } from '@uiw/react-native';

function Demo () {
  return (
      <ImageViewer />
    );
}
export default Demo
```

### 指定图片地址

```jsx  mdx:preview
import React from 'react';
import { ImageViewer } from '@uiw/react-native';

function Demo() {
  return (
    <ImageViewer
      height={100}
      width={100}
      src={'https://avatars.githubusercontent.com/u/33082374?s=200&v=4'}
    />
  );
}
export default Demo
```

### 展示多张图片

```jsx  mdx:preview
import React from 'react';
import { ImageViewer } from '@uiw/react-native';

function Demo() {
  return (
    <ImageViewer
      height={100}
      width={100}
      defaultIndex={1}
      src={[
        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' },
        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' }
      ]}
    />
  );
}
export default Demo
```

### props

```ts
export interface ImageViewerProps extends ViewProps {
  /** 图片宽度 */
  width?: number,
  /** 图片高度 */
  height?: number,
  /** 图像源（远程URL或本地文件资源 */
  src?: string | number;
  /** 默认展示第几张图片 */
  defaultIndex: number
}
```
