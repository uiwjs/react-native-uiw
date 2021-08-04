import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBar } from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';

const SearchBarDemo = (props: ComProps) => {

  const { Header } = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  const [data, setData] = useState([
    { label: '上海', value: 1 },
    { label: '南京', value: 2 }
  ])
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <Header title={title} description={description} />
      <SearchBar
        labelInValue
        options={data}
        onChange={(val: string) => console.log('val', val)}
      />
    </SafeAreaView>
  );
};
export default SearchBarDemo;
