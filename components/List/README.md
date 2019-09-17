List 列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

### 基础示例

<!--DemoStart--> 
```jsx
import { View, Text } from 'react-native';
import { List } from '@uiw/react-native';

export default function Demo() {
  return (
    <List>
      <List.Item style={{ height: 50 }}>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
      <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
      <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
      <List.Item>
        <View>
          <Text>因为爱过，所以慈悲；因为懂得，所以宽容。</Text>
        </View>
      </List.Item>
    </List>
  );
}
```
<!--End-->

### 简单

<!--DemoStart--> 
```jsx
import { View, Text } from 'react-native';
import { List } from '@uiw/react-native';

export default function Demo() {
  return (
    <List
      data={[
        { date: '8月12日', time: '18:25', orderCode: 'SO18081200005', transCode: '123456', weight: '69.5Kg', money: '+241.00元', type: '收入' },
        { date: '8月10日', time: '12:01', orderCode: 'SO18081000004', transCode: '123789', weight: '968.6Kg', money: '+8834.00元', type: '收入' },
        { date: '8月2日', time: '10:08', orderCode: 'SO18080200003', transCode: '309876', weight: '465.6Kg', money: '-2520.00元', type: '支出' },
        { date: '8月1日', time: '09:30', orderCode: 'SO18080100002', transCode: '783456', weight: '169.3Kg', money: '+1526.00元', type: '收入' },
        { date: '8月1日', time: '06:47', orderCode: 'SO18080100001', transCode: '456234', weight: '395.6Kg', money: '+3234.00元', type: '收入' }
      ]}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
          </View>
        );
      }}
    />
  )
}
```
<!--End-->


## Props

### List

继承 [`FlatList`](https://facebook.github.io/react-native/docs/flatlist#props) 组件。如果使用 `data` 和 `renderItem` 则 `<List.Item />` 将不起作用

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| data | 渲染头部 | () => { } | - |
| renderItem | 当使用 `data` 时，可以用 `renderItem` 自定义渲染列表项 | ({item}) => { } | - |

### List.Item

继承 [`ViewProps`](http://localhost:1987/react-native/docs/view#props) 。