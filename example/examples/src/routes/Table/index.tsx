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
            title: '类型',
            dataIndex: 'reportType',
            ellipsis: true,
          },
          {
            title: '备注',
            dataIndex: 'remark',
            ellipsis: true,
          },
          {
            title: '操作',
            dataIndex: 'id',
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
          {id: '1', reportType: '❤️爱永恒', remark: 'ff爱zz,三生三世用相随'},
          {id: '2', reportType: '❤️爱永恒', remark: 'ff爱zz,三生三世用相随'},
          {id: '3', reportType: '❤️爱永恒', remark: 'ff爱zz,三生三世用相随'},
          {id: '4', reportType: '❤️爱永恒', remark: 'ff爱zz,三生三世用相随'},
        ]}
        rowKey="id"
      />
    </SafeAreaView>
  );
};
export default SearchBarDemo;
