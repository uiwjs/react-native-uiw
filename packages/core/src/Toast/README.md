Toast 轻提示
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

组件基于[`react-native-root-siblings`](https://github.com/magicismight/react-native-root-siblings) 插件开发， 当 `react native >= 0.62` 时，需要在程序中插入一个装入容器


```jsx
import { RootSiblingParent } from 'react-native-root-siblings';

export default () => {
  return (
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  )
}
```

### 基础示例

```jsx
import { View } from 'react-native';
import { Toast, Button } from '@uiw/react-native';

function Demo() {
  return (
   <View>
     <Button onPress={() => { Toast.info('说明提示', 2, 'info') }}>点击显示</Button>
     <Button onPress={() => { Toast.warning('说明提示') }}>点击显示</Button>
     <Button onPress={() => { Toast.error('说明提示') }}>点击显示</Button>
     <Button onPress={() => { Toast.success('说明提示') }}>点击显示</Button>
   </View>

  );
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `content` | 提示内容 | string | - |
| `duration` | 提示持续时间 | number | 2s |
| `icon` | 自定义提示`icon` | string | `info` |