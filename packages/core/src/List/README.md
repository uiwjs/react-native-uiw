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


### 基础示例

<!--DemoStart--> 
```jsx
import { View, Text } from 'react-native';
import { List, Icon } from '@uiw/react-native';

export default function Demo() {
  return (
    <List
      flat={true}
      data={[
        { date: '8月12日', title: '这里是标题', des: '这里是详情内容' },
        { date: '8月10日', title: 'SO18081000004', des: '这里是详情内容' },
        { date: '8月2日', title: 'SO18080200003', des: '这里是详情内容' },
        { date: '8月1日', title: 'SO18080100002', des: '这里是详情内容' },
        { date: '8月1日', title: 'SO18080100001', des: '这里是详情内容' }
      ]}
      renderItem={({ item, index }) => {
        return (
          <List.Item
            key={index}
            extra={<Icon name="right" fill="#abb0b5" size={14} />}
            size="large"
            paddingLeft={15}
            style={{ borderBottomWidth: 0, }}
            onPress={() => { }}
          >
            <View>
              <Text>{item.title}</Text>
              <View>
                <Text>{item.des}</Text>
              </View>
            </View>
          </List.Item>
        )
      }}
    />
  );
}
```
<!--End-->

### Props

### List

`flat={true}` 继承 [`FlatList`](https://facebook.github.io/react-native/docs/flatlist#props) 组件。如果使用 `data` 和 `renderItem` 则 `<List.Item />` 将不起作用，`flat={false}` 时继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `data` | 渲染头部 | [] | - |
| `flat` | 当值为 `true` 使用 `FlatList` 组件渲染列表，当值为 `false` 时，使用 `View` 渲染界面 | Boolean | `true` |
| `renderItem` | 当使用 `data` 时，可以用 `renderItem` 自定义渲染列表项 | ({item}) => { } | - |
| `title` | 设置所有 `Item` 左边补白 | Number | `16` |
| `titleStyle` | 当设置 `title` 参数之后可以设置其标题容器样式。| ViewStyle | - |
| `horizontal` | 设置为 `true` 则变为水平布局模式。(`flat=true` 支持) | Boolean | `false` |
| `numColumns` | 多列布局只能在非水平模式下使用，即必须是 `horizontal={false}`。此时组件内元素会从左到右从上到下按 `Z` 字形排列，类似启用了 `flexWrap` 的布局。组件内元素必须是等高的——暂时还无法支持瀑布流布局。(`flat=true` 支持) | Number | - |
| `ListHeaderComponent` | 呈现在列表的顶部。如果设置了 `title` 标题，这个参数将失效  | ReactNode | - |
| `ListEmptyComponent` | 当列表数据为空的时候显示，条件是`renderItem` 存在 `data` 为 `0` 或者 `空`，或者是 `renderItem` 不存在 `children` 数量为 `0` | ReactNode | - |
| `refreshing` | 等待刷新之前的新数据时，将其设置为 `true`。 (`flat=true` 支持)| Boolean | - |
| `onRefresh` | 下拉刷新，配合 `refreshing` 使用。 (`flat=true` 支持)| () => void | - |
| `onEndReached` | 滚动位置位于渲染内容的 `onEndReachedThreshold` 范围内时调用一次。 (`flat=true` 支持)| (info: {distanceFromEnd: number}) => void | - |
| `onEndReachedThreshold` | 要触发 `onEndReached` 回调，列表的底边必须与内容的末尾相距多远（以列表的可见长度为单位）。 因此，当内容的结尾在列表的可见长度的一半以内时，值为 `0.5` 将触发 `onEndReached`。 (`flat=true` 支持) | Number | - |

### List.Item

继承 [`ViewProps`](https://facebook.github.io/react-native/docs/view#props) 当 `onPress` 存在则继承 [`TouchableHighlight`](https://facebook.github.io/react-native/docs/touchablehighlight#props)。


| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `onPress` | 释放触摸时调用，但如果取消则不调用（例如通过窃取响应者锁定的滚动）。 | (event: GestureResponderEvent) => void | - |
| `touchableStyle` | 设置 `onPress` 可以设置样式。 | ViewStyle | - |
| `underlayColor` | 当 `onPress` 存在设置 `underlayColor` 点击后的激活颜色 | String | `#DADADA` |

### 共同属性

| 参数 | 说明 | 类型 | 默认值|
|------|------|-----|------|
| `size` | 单元格大小 | `small`, `default`, `large` | List`default`, List.Item '-' |
| `extra` | 额外内容，展示右侧内容 | ReactNode | - |
| `extraStyle` | 设置 `extra` 包裹样式 | ViewProps['style'] | TextProps['style'] | - |
| `paddingLeft` | 左边补白 | Number | `16` |