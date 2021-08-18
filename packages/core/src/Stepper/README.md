Stepper 步进器
---
用作增加或者减少当前数值。

## 基础示例

```jsx
import {List, Stepper} from '@uiw/react-native';

function Demo() {
  return (
        <List>
         <List.Item
            extra={
              <Stepper
                key="2"
                max={100}
                min={0}
                defaultValue={666}
                onChange={(value: any)=>{
                   console.log('value', value)
                }}
              />
            }>
            请输入数量：
          </List.Item>
          <List.Item
            extra={
              <Stepper
                key="2"
                disabled
                max={100}
                min={0}
                defaultValue={0}
                onChange={(value: any)=>{
                   console.log('value', value)
                }}
                />
            }>
            暂无库存：
          </List.Item>
        </List>
  );
}

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| min     | 最小值   | Number | -Infinity        |
| max     | 最大值       | Number      | Infinity           |
| value     | 当前值       | Number      |            |
| step     | 每次改变步数，可以为小数  | Number or String      |  1      |
| defaultValue     | 初始值       | Number      |            |
| onChange     | 变化时回调函数      | (): void      |            |
| disabled     | 禁用       | Boolean      |      false      |
| readOnly     | input 只读       | Boolean      |      false      |
| styles  | react native 组件样式  | ReactNative StyleSheet      |  -   |
| inputStyle  | react native 显示数字样式  | ReactNative StyleSheet      |  -   |
