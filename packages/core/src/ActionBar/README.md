ActionBar 底部操作栏
---

底部操作栏(可滚动)



### 基础示例

```jsx
import React from 'react';
import { ActionBar } from '@uiw/react-native';
import { View, Alert } from 'react-native'

export interface ActionBarProps extends ComProps { }

export default class Demo extends React.Component<ActionBarProps> {
  render() {
    return (
    <View style={{ flex: 1 }}>
        <ActionBar
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

### 可航向滚动示例

```jsx
import React from 'react';
import { ActionBar } from '@uiw/react-native';
import { View } from 'react-native'

export interface ActionBarProps extends ComProps { }

export default class Demo extends React.Component<ActionBarProps> {
  state = {
    selectedIndex: 0
  }
  focus = (index: number) => this.setState({ selectedIndex: index });
  render() {
    return (
    <View style={{ flex: 1 }}>
        <ActionBar
          scroll={true}
          focusIndex={this.state.selectedIndex}
          actions={[
              {
                label: 'Delete',
                onPress: () => this.focus(0),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'Replace',
                onPress: () => this.focus(1),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'Edit',
                onPress: () => this.focus(2),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'Delete',
                onPress: () => this.focus(3),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'Replace',
                onPress: () => this.focus(4),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'ADD',
                onPress: () => this.focus(5),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'CSS',
                onPress: () => this.focus(6),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'React',
                onPress: () => this.focus(7),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'Vue',
                onPress: () => this.focus(8),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
              {
                label: 'PHP',
                onPress: () => this.focus(9),
                fontStyle: { fontWeight: 'bold', color: '#fff' },
              },
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
  actions?: Array<{
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
  // scroll横行滚动时,item跳转下标
  focusIndex?: number
};
```