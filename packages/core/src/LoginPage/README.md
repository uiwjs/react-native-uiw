LoginPage 登录页
---

用于项目的登录页面
### 基础示例

<!--DemoStart-->
```jsx 
import React,{Fragment} from 'react';
import { View} from 'react-native';
import { LoginPage } from '@uiw/react-native';

const Demo = () => {
  return (
    <Fragment>
        <View>
         <LoginPage />
        </View>
    </Fragment>
  );
}
export default Demo
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `usernamePlaceholder` | 自定义账号输入框为空时显示的文字 | `string` | - |
| `inputContainerStyle` | 自定义账号，密码，验证码输入框样式 |`Boolean` | - |
| `buttonStyle` | 登录按钮自定义样式 | `Object` | - |
| `containerStyle` | 登录页自定义最外层样式 | `object` | - |
| `buttonText` | 登录按钮自定义文字 | `string` | - |
| `customContent` | 自定义忘记密码，切换登录方式 | `React.ReactNode` | - |
| `onLogin` | 登录按钮事件 | `(username: string, password: string) => void` | - |
| `onForgetPassword` | 忘记密码按钮事件 | `() => void` | - |


