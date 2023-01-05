QuickList 快速请求列表
---

快速完成上拉下拉请求列表。

### 基础示例

```jsx mdx:preview
import React, { useRef, useState } from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import QuickList from '@uiw/react-native/lib/QuickList';
import List from '@uiw/react-native/lib/List';


const defaultData = [
  { name: '@uiw/react-native QuickList', id: 1 },
  { name: '@uiw/react-native QuickList', id: 2 },
  { name: '@uiw/react-native QuickList', id: 3 },
  { name: '@uiw/react-native QuickList', id: 4 },
  { name: '@uiw/react-native QuickList', id: 5 },
  { name: '@uiw/react-native QuickList', id: 6 },
  { name: '@uiw/react-native QuickList', id: 7 },
  { name: '@uiw/react-native QuickList', id: 8 },
  { name: '@uiw/react-native QuickList', id: 9 },
  { name: '@uiw/react-native QuickList', id: 10 },
];

const QuickListDemo = (props) => {
  const baseRef = useRef();
  const [total, setTotal] = useState(0)
  const [data, setData] = useState([])
  const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(''), time))
  // 模拟请求
  const fethList = async (params) => {
    const { page, pageSize } = params
    if (page === 1) {
      await sleep(500)
      setData(defaultData)
    } else {
      let fetchData = []
      for (let i = 0; i < pageSize; i++) {
        const id = (data.length + 1 / 10 * pageSize) + i
        const name = `@uiw/react-native QuickList`;
        let obj = { name, id }
        fetchData.push(obj)
      }
      let newData = [...data, ...fetchData]
      await sleep(500)
      setData(newData)
    }
    setTotal(40)
  }
  // 列表渲染
  const ListItem = (item) => {
    return (
      <List flat={false}>
        <View
          style={{ padding: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 5, fontSize: 18 }}>react-native</Text>
            <Text style={{ color:"#808080"}}>{item.name}</Text>
          </View>
        </View>
      </List>
    )
  }

  return (
    <SafeAreaView style={{ height:300 }}>
      <QuickList
        ref={baseRef}
        onFetch={fethList}
        data={data}
        total={total}
        renderItem={({ item }) => ListItem(item)}
        keyId="id"
      />
    </SafeAreaView>
  );
}
export default QuickListDemo
```

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFetch | 请求的接口函数） | `(params: any) => void` | - |
| data | 数据 | `Array<any>` | [] |
| renderItem | 从data列表中获取一个项目并将其渲染到列表中 | `ListRenderItem<any>` | - |
| keyId | 唯一健 | `string | number` | - |
| emptyView | 当列表为空时呈现 | `() => React.ReactNode` | - |
| pageSize | 每次加载数据条数 | `number` | - |
| total | 总条数 | `number`  | - |
| style | 样式 | `Object` | - |
