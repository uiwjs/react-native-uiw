import React from 'react';
import {SafeAreaView, TouchableHighlight, Text} from 'react-native';
import {Table} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout from '../../Layout';
const SearchBarDemo = (props: ComProps) => {
  const {Header} = Layout;
  const {route} = props;
  const description = route.params.description;
  const title = route.params.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} description={description} />
      <Table
        columns={[
          {
            title: '配件名称',
            dataIndex: 'partName',
            style: {width: 100},
          },
          {
            title: '配件品牌',
            dataIndex: 'partBrand',
            style: {width: 100},
          },
          {
            title: '配件型号',
            dataIndex: 'partModel',
            style: {width: 100},
          },
          {
            title: '备注',
            dataIndex: 'remark',
            ellipsis: true,
            style: {width: 100},
          },
          {
            title: '操作',
            dataIndex: 'id',
            style: {width: 90},
            render: () => {
              return (
                <TouchableHighlight onPress={() => {}}>
                  <Text style={{color: '#888'}}>查看</Text>
                </TouchableHighlight>
              );
            },
          },
        ]}
        data={[
          {
            id: '1',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
          {
            id: '2',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
          {
            id: '3',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
          {
            id: '4',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
          {
            id: '5',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
          {
            id: '6',
            partName: 'Chanel',
            partBrand: '香奈儿',
            partModel: 'xl',
            remark: 'ff爱zz,三生三世用相随',
          },
        ]}
        rowKey="id"
      />
    </SafeAreaView>
  );
};
export default SearchBarDemo;
