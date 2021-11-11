ScreenRoot 应用状态栏
---

控制应用状态栏的组件

### 基础示例

```jsx
import React from 'react';
import { ScreenRoot } from '@uiw/react-native';
import { Text,TouchableOpacity } from 'react-native'
import { ComProps } from '../../routes';

export interface ScreenRootProps extends ComProps { }

export default class Demo extends React.Component<ScreenRootProps> {
  render() {
    const HeaderRight = () => (
      <TouchableOpacity onPress={()=>{}}>
        <Text style={{ color: '#333', fontWeight:"600",fontSize: 14, lineHeight: 44 }}>
          查看详情
        </Text>
      </TouchableOpacity>
    )
    return (
      <ScreenRoot
        title="ScreenRoot"
        headerRight={HeaderRight()}
        onBack={()=>this.props.navigation.goBack()}
      />
    );
  }
}
```

### Props
```tsx
export interface ScreenRootProps {
  /**
   * 无需头部导航栏
   */
  noHeader?: boolean
  /**
   * modal根结点样式，有时需要
   */
  rootStyle?: StyleProp<any>;
  /**
   * 导航栏中间标题，支持字符串和ReactNode
   */
  title?: string | React.ReactNode;
  // 导航栏左侧显示
  headerLeft?: React.ReactNode;
  // 导航栏右侧显示
  headerRight?: React.ReactNode;
  // 导航栏整体样式
  headerStyle?: StyleProp<any>;
  // 导航栏右侧显示样式
  headerRightStyle?: StyleProp<any>;
  // 页面内容样式
  containerStyle?: StyleProp<any>;
  loading?: boolean;
  // 默认左侧图标点击事件
  onBack?: () => void
  // 图标颜色
  iconColor?: string
  // screen背景色
  screenBackgroundColor?: string
  // modal背景色
  modalBackgroundColor?: string
  // 页面导航类型，screen  modal
  pageType?: 'screen' | 'modal',
  children?: React.ReactNode;
  barStyle?: "default" | "light-content" | "dark-content";
}
```