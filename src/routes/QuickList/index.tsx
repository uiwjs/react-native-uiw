import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { QuickList, List } from '../../../components';
import { ComProps } from '../../typings';
import Layout from '../../Layout';
const { Header } = Layout;

export interface ListViewProps extends ComProps { }

interface fethProp {
  page: number,
  pageSize: number
}

const defaultData = [
  { name: '77 设计最好用的快速List组件', id: 1 },
]

const QuickListView = (props: ListViewProps) => {
  const baseRef = useRef();
  const { route } = props;
  const description = route.params.description;
  const title = route.params.title;
  const [total, setTotal] = useState(14)
  const [pageSize] = useState(20)
  const [data, setData] = useState<Array<{ name: string, id: number }>>(defaultData)


  const fethList = (params: fethProp) => {
    const { page } = params
    if (page === 1) {
      setData(defaultData)
      setTotal(14)
    }
  }
  console.log('baseRef', baseRef&&baseRef.current)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={title} description={description} />
      <QuickList
        ref={baseRef}
        onFetch={fethList}
        data={data}
        total={total}
        pageSize={pageSize}
        renderItem={({ item }) => <List flat={false} extra="test"><List.Item extra="说明">{item.name}</List.Item></List>}
        keyId="id"
      />
    </SafeAreaView>
  );
}

export default QuickListView