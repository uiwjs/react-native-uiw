ActionBar 底部操作栏
---

底部操作栏



### 基础示例

```jsx
import React from 'react';
import { ActionBar } from '@uiw/react-native';
import { View, Alert } from 'react-native'

export interface ScreenRootProps extends ComProps { }

export default class Demo extends React.Component<ScreenRootProps> {
  render() {
    return (
    <View style={{ flex: 1 }}>
        <ActionBar
          scroll={false}
          actions={[
            { label: 'Delete', onPress: () => Alert.alert('delete'), fontStyle: { fontWeight: 'bold', color: "#5847FF" } },
            { label: 'Replace', onPress: () => Alert.alert('replace photo'), fontStyle: { fontWeight: 'bold', color: "#5847FF" }  },
            { label: 'Edit', onPress: () => Alert.alert('edit'), fontStyle: { fontWeight: 'bold', color: "#5847FF" }  }
          ]}
        />
    </View>
    );
  }
}
```

### Props
```tsx
export type ActionBarProps = {
  // 高度
  height?: number;
  // 背景色
  backgroundColor?: string;
  // 按钮
  actions: Array<{
    label?: string;
    onPress?: () => void;
    fontStyle?: TextStyle;
    render?: ReactNode
  }>;
  // 是否在底部
  keepAbsoulte?: boolean;
  // 在 iOS 中，使用安全区域，以防组件附加到底部
  useSafeArea?: boolean;
  style?: ViewStyle;
  // 是否横向滚动
  scroll?: boolean
};
```