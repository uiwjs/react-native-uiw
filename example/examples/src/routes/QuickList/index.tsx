import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {QuickList, List} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';
const {Header} = Layout;

export interface ListViewProps extends ComProps {}

interface fethProp {
  page: number;
  pageSize: number;
}

const defaultData: Array<{name: string; id: number}> = [
  {name: '最好用的快速List列表', id: 1},
  {name: '最好用的快速List列表', id: 2},
  {name: '最好用的快速List列表', id: 3},
  {name: '最好用的快速List列表', id: 4},
  {name: '最好用的快速List列表', id: 5},
  {name: '最好用的快速List列表', id: 6},
  {name: '最好用的快速List列表', id: 7},
  {name: '最好用的快速List列表', id: 8},
  {name: '最好用的快速List列表', id: 9},
  {name: '最好用的快速List列表', id: 10},
];

const QuickListView = (props: ListViewProps) => {
  const baseRef = useRef();
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<Array<{name: string; id: number}>>([]);

  const sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(''), time));
  // 模拟请求
  const fethList = async (params: fethProp) => {
    const {page, pageSize} = params;
    if (page === 1) {
      await sleep(500);
      setData(defaultData);
    } else {
      let fetchData = [];
      for (let i = 0; i < pageSize; i++) {
        const id = data.length + (1 / 10) * pageSize + i;
        const name = '最好用的快速List列表';
        let obj = {name, id};
        fetchData.push(obj);
      }
      let newData = [...data, ...fetchData];
      await sleep(500);
      setData(newData);
    }
    setTotal(40);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <QuickList
        ref={baseRef}
        onFetch={fethList}
        data={data}
        total={total}
        renderItem={({item}) => (
          <List flat={false}>
            <List.Item
              style={{height: 70}}>{`${item.id}-${item.name}`}</List.Item>
          </List>
        )}
        keyId="id"
      />
    </SafeAreaView>
  );
};

export default QuickListView;
