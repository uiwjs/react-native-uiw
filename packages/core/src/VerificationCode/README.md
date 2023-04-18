VerificationCode 验证码倒计时组件
---

### 基础示例

```jsx mdx:preview&background=#bebebe29
import React,{useState,Component} from 'react';
import { View } from 'react-native';
import { VerificationCode } from '@uiw/react-native';

function Demo() {
    const [value, setValue] = useState('');
    const onChange = (val) => {
    setValue(val)
  };
  return (
    <View>
        <VerificationCode
              value={value}
              count={60}
              onChange={(text) => onChange(text)}
              outerStyle={{ backgroundColor: '#FFF', borderWidth: 1, borderColor: "#ccc" }}
            />
    </View>
  );
}
export default Demo
```

### VerificationCode

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `bordered` | 是否展示按钮边框 | boolean | true |
| `label` | 倒计时文字| string | `获取验证码` |
| `resendLabel` | 重新发送文字	 | string | `重新发送` |
| `count` | 倒计时时长	 | number | 60 |
| `value` | 验证码值 | string | true |
| `onChange` | 输入改变事件 | `(value: string) => void` | - |
| `onBefore` | 发验证码之前的回调 | `() => Promise<boolean>` | - |
| `onSend` | 发送验证码 | `() => void` | - |
| `onEnd` | 倒计时结束后的回调 | `() => void` | - |
| `outerStyle` | 输入框外层自定义样式 | `StyleProp<ViewStyle>` | - |
| `buttonStyle` | 按钮自定义样式 | `StyleProp<ViewStyle>` | - |
| `placeholder` | 输入框空白时自定义展示 | string | `请输入验证码` |
