Table 表格
---
一个非常好用的Table表格 😄
### 基础示例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import  {Table, Button } from '@uiw/react-native';
import {View} from 'react-native';

const Demo = () => {
  return (
     <Table
        columns={[
          {
            title: '配件名称',
            dataIndex: 'partName',
            style: { width: 100 },
          },
          {
            title: '配件品牌',
            dataIndex: 'partBrand',
            style: { width: 100 },
          },
          {
            title: '配件型号',
            dataIndex: 'partModel',
            style: { width: 100 },
          },
          {
            title: '备注',
            dataIndex: 'remark',
            ellipsis: true,
            style: { width: 200 },
          },
          {
            title: '操作',
            dataIndex: 'id',
            style: { width: 100 },
            render: () => {
              return (
                <>
                    <Button size="small" bordered={false} textStyle={{color:'#3b8ee9'}}>编辑</Button>
                    <Button size="small" bordered={false} textStyle={{color:'#3b8ee9'}}>详情</Button>
                </>
              );
            },
          },
        ]}
        data={[
          { id: '1',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '2',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '3',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '4',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
        ]}
        rowKey="id"
      />
  );
}
export default Demo

```

`horizontal` 水平排成一行

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import  {Table, Button } from '@uiw/react-native';
import {View} from 'react-native';

const Demo = () => {
  return (
     <Table
        columns={[
          {
            title: '配件名称',
            dataIndex: 'partName',
            style: { width: 100 },
          },
          {
            title: '配件品牌',
            dataIndex: 'partBrand',
            style: { width: 100 },
          },
          {
            title: '配件型号',
            dataIndex: 'partModel',
            style: { width: 100 },
          },
          {
            title: '备注',
            dataIndex: 'remark',
            ellipsis: true,
            style: { width: 300 },
          },
          {
            title: '操作',
            dataIndex: 'id',
            style: { width: 110 },
            render: () => {
              return (
                <>
                    <Button size="small" bordered={false} textStyle={{color:'#3b8ee9'}}>编辑</Button>
                    <Button size="small" bordered={false} textStyle={{color:'#3b8ee9'}}>详情</Button>
                </>
                );
            },
          },
        ]}
        data={[
          { id: '1',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '2',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '3',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
          { id: '4',  partName: 'Chanel', partBrand: '香奈儿', partModel: 'xl', remark: 'ff爱zz,三生三世用相随' },
        ]}
        rowKey="id"
        horizontal={false}
      />
  );
}
export default Demo

```

### 超出自动省略

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import  {Table, Button } from '@uiw/react-native';
import {View} from 'react-native';

const Demo = () => {
  return (
     <Table
        columns={[
          {
            title: '名称',
            dataIndex: 'partName',
            ellipsis: true,
            style: { width: 100 },
          },
          {
            title: '品牌',
            dataIndex: 'partBrand',
            ellipsis: true,
            style: { width: 100 },
          },
          {
            title: '型号',
            dataIndex: 'partModel',
            ellipsis: true,
            style: { width: 100 },
          },
          {
            title: '备注',
            dataIndex: 'remark',
            ellipsis: true,
            style: { width: 100 },
          },
          {
            title: '操作',
            dataIndex: 'id',
            style: { width: 100 },
            render: () => {
              return (
                <>
                    <Button size="small" bordered={false} textStyle={{color:'#3b8ee9'}}>编辑</Button>
                    <Button size="small" bordered={false} textStyle={{color:'red'}}>详情</Button>
                </>
               );
            },
          },
        ]}
        data={[
          { id: '1',  partName: 'React Native UIW 组件库', partBrand: '一个基于 React Native 的 UI 组件库', partModel: 'React Native UI 组件库 - UIW', remark: 'UIW，ff爱zz,三生三世用相随' },
          { id: '2',  partName: 'React Native UIW 组件库', partBrand: '一个基于 React Native 的 UI 组件库', partModel: 'React Native UI 组件库- UIW', remark: 'UIW，ff爱zz,三生三世用相随' },
          { id: '3',  partName: 'React Native UIW 组件库', partBrand: '一个基于 React Native 的 UI 组件库', partModel: 'React Native UI 组件库- UIW', remark: 'UIW, ff爱zz,三生三世用相随' },
          { id: '4',  partName: 'React Native UIW 组件库', partBrand: '一个基于 React Native 的 UI 组件库', partModel: 'React Native UI 组件库- UIW', remark: 'UIW, ff爱zz,三生三世用相随' },
        ]}
        rowKey="id"
      />
  );
}
export default Demo

```

### props

| 参数                 | 说明         | 类型    | 默认值  |
| -------------------- | ------------ | ------- | ------- |
| `columns`           |	表格列的配置描述，具体项见下表       | ColumnsType[] | - |
| `data`            | 数据数组  | object[] | - |
| `rowKey`           | 表格行 key 的取值，可以是字符串或一个函数     | string | function(record): string    | key       |
| `horizontal`       | 是否水平排成一行  | bool | true |
| `style`       | Table样式 | object | - |

### Column

| 参数                 | 说明         | 类型    | 默认值  |
| -------------------- | ------------ | ------- | ------- |
| `dataIndex`           |	列数据在数据项中对应的路径，支持通过数组查询嵌套路径      | string | string[] | - |
| `ellipsis`            | 超过宽度将自动省略 | - | - |
| `title`           | 列头显示文字    | string | -   |
| `render`           | 生成复杂数据的渲染函数,参数为当前行数据    | function(record) {} | -   |
| `style`           | Table行内样式    | object | -   |
