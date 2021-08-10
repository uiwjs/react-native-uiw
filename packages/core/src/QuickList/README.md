QuickList 快速请求列表
---

快速完成上拉下拉请求列表。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { QuickList, List } from '@uiw/react-native';

const defaultData =[
  { name: '最好用的快速List列表', id: 2 },
  { name: '最好用的快速List列表', id: 3 },
  { name: '最好用的快速List列表', id: 4 },
  { name: '最好用的快速List列表', id: 5 },
  { name: '最好用的快速List列表', id: 6 },
  { name: '最好用的快速List列表', id: 7 },
  { name: '最好用的快速List列表', id: 8 },
  { name: '最好用的快速List列表', id: 9 },
  { name: '最好用的快速List列表', id: 10 },
]

const QuickListDemo = (props) => {
  const baseRef = useRef();
  const { route } = props;
  const description = route.params.description;
  const title = route.params.title;
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
        const name = `最好用的快速List列表`;
        let obj = { name, id }
        fetchData.push(obj)
      }
      let newData = [...data, ...fetchData]
      await sleep(500)
      setData(newData)
    }
    setTotal(40)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuickList
        ref={baseRef}
        onFetch={fethList}
        data={data}
        total={total}
        renderItem={({ item }) =>
          <List flat={false}>
            <List.Item style={{ height: 70 }}>{`${item.id}-${item.name}`}</List.Item>
          </List>
        }
        keyId="id"
      />
    </SafeAreaView>
  );
}
export default QuickListDemo
```
<!--End-->

## Props

继承原生 FastList 属性 [`FastListProps`](https://reactnative.dev/docs/flatlist)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `onFetch` | 请求的接口 | Promise | - |
| `data` | 数据源 | Array | - |
| `pageSize` | 每次加载数据条数 | number | 10 |
| `total` | 总条数 | number | - |
| `renderItem` | 从data列表中获取一个项目并将其渲染到列表中 | ({item})=>void | - |
| `emptyView` | 当列表为空时呈现 | Boolean | ()=>void |
| `keyId` | 取唯一键 | string | - |
