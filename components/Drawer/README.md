Drawer 抽屉
---

用于在屏幕边缘显示应用导航等内容的面板。

## 基础示例

```jsx
import { View, Text } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        isOpen={visible}
        onChange={(isOpen) => setVisible(isOpen)}
      >
        <View>
          <Text>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
    </>
  );
}
```

## 右边展示

```jsx
import { View, Text } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Drawer
        isOpen={visible}
        placement="right"
        onChange={(isOpen) => setVisible(isOpen)}
      >
        <View>
          <Text>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
    </>
  );
}
```

## props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `isOpen` | 是否可见 | Boollean | `false` |
| `placement` | 抽屉的方向 | `right`, `left` | `left` |
| `drawerWidth` | 抽屉宽度 | Number | `300` |
| `style` | 设置 `Drawer` 样式 | ViewStyle | - |
| `maskProps` | 遮罩层样式 | ViewStyle | - |
| `drawerBackgroundColor` | 指定抽屉背景色 | String | `#fff` |
| `onChange` | open 状态切换时调用 | (isOpen: boolean): void | - |
| `openDrawer` | 打开函数 | (isOpen: boolean): void | - |
| `closeDrawer` | 关闭函数 | (isOpen: boolean): void | - |