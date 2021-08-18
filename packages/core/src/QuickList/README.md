QuickList 快速请求列表
---

快速完成上拉下拉请求列表。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef, useState } from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import { QuickList, List } from '@uiw/react-native';

const imageUrl = 'https://c-ssl.duitang.com/uploads/item/202004/13/20200413013923_25wds.jpeg'

const defaultData = [
  { name: '@uiw/react-native QuickList', id: 1, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 2, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 3, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 4, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 5, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 6, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 7, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 8, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 9, img: imageUrl },
  { name: '@uiw/react-native QuickList', id: 10, img: imageUrl },
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
        const img = imageUrl
        let obj = { name, id,img }
        fetchData.push(obj)
      }
      let newData = [...data, ...fetchData]
      await sleep(500)
      setData(newData)
    }
    setTotal(40)
  }
  // 列表渲染
  const ListItem = (item:any) => {
    return (
      <List flat={false}>
        <View
          style={{ padding: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Image
            source={{
              uri: item.img,
            }}
            style={{ height: 70, width: 70, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 5, fontSize: 18 }}>react-native</Text>
            <Text style={{ color:"#808080"}}>{item.name}</Text>
          </View>
        </View>
      </List>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
<!--End-->

### Props

```ts
interface QuickListProps<ItemT> extends FlatListProps<ItemT> {
  onFetch: (params: any) => void // 请求的接口函数
  data: Array<any>, // 数据源
  renderItem: ListRenderItem<any>, // 从data列表中获取一个项目并将其渲染到列表中
  keyId: string | number,// 唯一健
  emptyView?: void | any,// 当列表为空时呈现
  pageSize?: number, // 每次加载数据条数
  total: number, // 总条数
  style?: Object,// 样式
}

export type QuickListComponent<ItemT = any> = (
  props: QuickListProps<ItemT>,
  ref?:  Ref<FlatList<ItemT>> | any
) => React.ReactElement
```
