import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {SearchBar} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';
interface Columns {
  label: string;
  value: number | string;
}

const datas = [
  {label: '上海', value: 1},
  {label: '南京', value: 2},
  {label: '天津', value: 3},
  {label: '杭州', value: 4},
  {label: '北京', value: 5},
];

const SearchBarDemo = (props: ComProps) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const [data, setData] = useState<Columns[]>([]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <SearchBar
        onFocus={() => setData(datas)}
        onChangeText={text => {
          let search;
          if (text) {
            search = data.filter(item => item.label === text);
          } else {
            search = datas;
          }
          setData(search);
        }}
        labelInValue
        options={data}
        onChange={val => console.log('val', val)}
      />
    </SafeAreaView>
  );
};
export default SearchBarDemo;
