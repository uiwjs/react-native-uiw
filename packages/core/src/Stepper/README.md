Stepper 步进器
---
用作增加或者减少当前数值。

### 基础示例

```jsx
import {List, Stepper} from '@uiw/react-native';

function Demo() {
  return (
    <List  flat={false} extra="test">
      <List.Item
        extra={
          <Stepper
            value={this.state.value}
            onChange={(value)=>{
              this.setState({value})
            }}
        />}
      >
        基本使用：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            size='small'
            value={this.state.value}
            onChange={(value)=>{
              this.setState({value})
            }}
          />
        }
      >
        尺寸控制(size: small | default | large)：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            disabledLongPress={true}
            value={this.state.value2}
            onChange={(value2)=>{
              this.setState({value2})
            }}
          />
        }>
        按钮开启长按(disabledLongPress: boolean)：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            width={120}
            value={this.state.value2}
            onChange={(value2)=>{
              this.setState({value2})
            }}
          />
        }>
        自定义宽度(width: number)：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            value={this.state.value}
            color={{color: '#ccc',borderColor: '#999',controlColor: 'red',valueColor: '#000'}}
            onChange={(value)=>{
              this.setState({value})
            }}
          />
        }>
        自定义颜色(color: Color)：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            disabledInput={false}
            value={this.state.value1}
            onChange={(value1)=>{
              this.setState({value1})
            }}
          />
        }>
        不禁止输入(disabledInput: boolean)：
      </List.Item>
      <List.Item
        extra={
          <Stepper
            disabled={true}
            disabledInput={false}
            value={this.state.value1}
            onChange={(value1)=>{
              this.setState({value1})
            }}
          />
        }>
        禁止点击(disabled: boolean)：
      </List.Item>
    </List>
  );
}
```

### Stepper Props

```ts
export interface Color {
  /** 组件主色调 #108ee9 */
  color?: string,
  /** 组件边框颜色 #108ee9 */
  borderColor?: string,
  /** 组件按钮 + - 颜色 #108ee9 */
  controlColor?: string,
  /** 组件 value 值颜色 #108ee9 */
  valueColor?: string
}

export  type Size =  'small' | 'default' | 'large';

export interface StepProps {
  /** 尺寸 */
  size?:Size,
  /** 颜色 */
  color?: Color,
  /** input 宽度,不包括两侧按钮 */
  width?: number,
  /** 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 */
  value: number,
  /** 每次点击改变的间隔大小 */
  step?: number,
  /** 最小值 */
  min?: number,
  /** 最大值 */
  max?: number,
  /** 按钮是否禁止点击 */
  disabled?: boolean,
  /** 输入框是否禁止输入 */
  disabledInput?: boolean,
  /** 按钮是否支持长按 */
  disabledLongPress?: boolean,
  /** 长按间隔 单位(ms) */
  delayLong?: number,
  /** 输入框值改变时触发的事件, 必填 */
  onChange: (value: number)=>void,
  /** 输入框尝试输入错误数据触发的事件	 */
  onErrorInput?: (type: 'OVER' | 'LOW', errorValue: number) => void
};
``` 
