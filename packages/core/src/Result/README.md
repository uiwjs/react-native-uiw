Result 结果页
---

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

<!-- ![](https://user-images.githubusercontent.com/66067296/140004296-414edcc2-c809-4fcf-a147-5088757ea7b1.png) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React from 'react';
import { Text } from 'react-native';
import { Result, Icon } from '@uiw/react-native';

function Demo() {
  return (
    <Result
      img={
        <Icon name="pay-circle-o" size={60} fill='#008EF0'/>
      }
      title="支付成功"
      message={<Text>998.00元 </Text>}
    />
  );
}
export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `img` | 插图元素 (可以为`<img src="" />`/`<Icon type="" />`等) | ReactNode | - |
| `title` | title 文案 | ReactNode | - |
| `message` | message 文案| ReactNode | - |
