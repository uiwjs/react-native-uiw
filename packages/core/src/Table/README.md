Table 表格
---

### 基础示例

```jsx
import { Table } from '@uiw/react-native';

function Demo() {
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
            style: { width: 100 },
          },
          {
            title: '操作',
            dataIndex: 'id',
            style: { width: 90 },
            render: () => {
              return (
                <TouchableHighlight  onPress={() => { }}>
                  <Text style={{ color: '#888' }}>查看</Text>
                </TouchableHighlight>
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
| `ellipsis`            | 超过宽度将自动省略 | - |
| `title`           | 列头显示文字    | string | -   | 
| `render`           | 生成复杂数据的渲染函数,参数为当前行数据    | function(record) {} | -   | 
| `style`           | Table行内样式    | object | -   | 
