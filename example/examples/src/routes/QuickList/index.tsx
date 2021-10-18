import React, {useRef, useState} from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import {QuickList, List, SwipeAction} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';
const {Header} = Layout;

export interface ListViewProps extends ComProps {}

interface fethProp {
  page: number;
  pageSize: number;
}
const imageUrl =
  'https://c-ssl.duitang.com/uploads/item/202004/13/20200413013923_25wds.jpeg';
const defaultData: Array<{name: string; id: number; img: string}> = [
  {name: '@uiw/react-native QuickList', id: 1, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 2, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 3, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 4, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 5, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 6, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 7, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 8, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 9, img: imageUrl},
  {name: '@uiw/react-native QuickList', id: 10, img: imageUrl},
];

const QuickListView = (props: ListViewProps) => {
  const baseRef = useRef();
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<
    Array<{name: string; id: number; img: string}>
  >([]);

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
        const name = '@uiw/react-native QuickList';
        const img = imageUrl;
        let obj = {name, id, img};
        fetchData.push(obj);
      }
      let newData = [...data, ...fetchData];
      await sleep(500);
      setData(newData);
    }
    setTotal(40);
  };

  const ListItem = (item: any) => {
    return (
      <SwipeAction
        right={[
          {
            text: '删除',
            color: 'red',
            x: 250,
            onPress: () => {},
          },
        ]}>
        <List flat={false}>
          <View
            style={{
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: item.img,
              }}
              style={{height: 70, width: 70, borderRadius: 50}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{marginBottom: 5, fontSize: 18}}>react-native</Text>
              <Text style={{color: '#808080'}}>{item.name}</Text>
            </View>
          </View>
        </List>
      </SwipeAction>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <QuickList
        ref={baseRef}
        onFetch={fethList}
        data={data}
        total={total}
        renderItem={({item}) => ListItem(item)}
        keyId="id"
      />
    </SafeAreaView>
  );
};

export default QuickListView;
