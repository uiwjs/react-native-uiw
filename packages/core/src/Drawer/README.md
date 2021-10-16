Drawer 抽屉
---

用于在屏幕边缘显示应用导航等内容的面板。

### 基础示例

```jsx
import { Fragment, useState } from 'react';
import { View, Text } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Drawer
        isOpen={visible}
        onChange={(isOpen) => setVisible(isOpen)}
      >
        <View>
          <Text>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
    </Fragment>
  );
}
```

### 右边展示

```jsx
import { Fragment, useState } from 'react';
import { View, Text } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
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
    </Fragment>
  );
}
```

### 注意事项 - 抽屉高度是页面有效高度

```jsx
import { Fragment, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer
        isOpen={visible}
        onChange={(isOpen) => setVisible(isOpen)}
      >
        <View>
          <Text>左边打开抽屉内容</Text>
        </View>
      </Drawer>
      <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
    </SafeAreaView>
  );
}
```   

### 抽屉覆盖全屏

- 可查看 [react-native-root-siblings](https://www.npmjs.com/package/react-native-root-siblings) 文档
```jsx
// 在 App.js 文件中 
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './models';
import {RootSiblingParent} from 'react-native-root-siblings';

export default () => {
  return (
    <Provider store={store}>
      <RootSiblingParent> 
       {/* ...你的导航之类的组件 */}
      </RootSiblingParent>
    </Provider>
  );
};


// 在使用组件页面
import { Fragment, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Drawer, Button } from '@uiw/react-native';
import {RootSiblingPortal} from 'react-native-root-siblings';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <RootSiblingPortal>
        <Drawer
          isOpen={visible}
          onChange={(isOpen) => setVisible(isOpen)}
        >
          {/* SafeAreaView 这样做是有必要的，因为手机时间是需要与内容分开的，除非你并不需要 */}
          <SafeAreaView> 
            <Text>左边打开抽屉内容</Text>
          </SafeAreaView>
        </Drawer>
      </RootSiblingPortal>
      <Button onPress={() => setVisible(!visible)}>左边打开抽屉</Button>
    </SafeAreaView>
  );
}
``` 

### props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `isOpen` | 是否可见 | Boollean | `false` |
| `placement` | 抽屉的方向 | `right`, `left` , `top` `bottom`| `left` |
| `drawerWidth` | 抽屉宽度(`placement`为`right`或`left`生效)  | Number | `300` |
| `drawerHeight` | 抽屉高度(`placement`为`top`或`bottom`生效) | Number | `500` |
| `style` | 设置 `Drawer` 样式 | ViewStyle | - |
| `maskProps` | 遮罩层样式 | ViewStyle | - |
| `maskClosable` | 点击遮罩层是否允许关闭 | Boollean | `true` |
| `drawerBackgroundColor` | 指定抽屉背景色 | String | `#fff` |
| `onChange` | open 状态切换时调用 | (isOpen: boolean): void | - |
| `openDrawer` | 打开函数 | (isOpen: boolean): void | - |
| `closeDrawer` | 关闭函数 | (isOpen: boolean): void | - |