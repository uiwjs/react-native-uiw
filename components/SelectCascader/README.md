SelectCascader 级联选择
---

可用于类似于省市区选择

## 基础示例

```jsx
import { Text } from 'react-native';
import { Result, Icon } from '@uiw/react-native';

function Demo() {
  return (
    <Result
      img={
        <Icon name="pay-circle-o" size={60} fill='#008EF0'/>
      }
      title="支付成功"
      message={<Text>998.00元 <Del>1098元</Del></Text>}
    />
  );
}
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `img` | 插图元素 (可以为`<img src="" />`/`<Icon type="" />`等) | ReactNode | - |
| `title` | title 文案 | ReactNode | - |
| `message` | message 文案| ReactNode | - |
