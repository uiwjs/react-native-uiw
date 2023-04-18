# Tree 树形控件

### 基础示例

```jsx mdx:preview&background=#bebebe29
import React,{ Component } from "react"
import { View } from 'react-native';
import { Tree } from '@uiw/react-native';

function Demo() {

  const option = [
      {
        label: '一栋',
        value: '01',
        children: [
          {
            label: '一单元',
            value: '01-1',
            children: [{label: '一层', value: '01-1-1', children: [{label: '101', value: '01-1-1-1'}]}],
          },
          {
            label: '一单元1',
            value: '01-2',
          },
          {
            label: '一单元2',
            value: '01-3',
          },
        ],
      },
      {
        label: '二栋',
        value: '02',
        children: [
          {
            label: '二单元',
            value: '02-1',
          },
          {
            label: '二单元1',
            value: '02-2',
          },
          {
            label: '二单元2',
            value: '02-3',
          },
        ],
      },
    ];


  return (
    <View style={{ marginTop: 50 }}>
        <Tree treeData={option}/>
    </View>
  );
}

export default Demo;
```


## Props

| 属性                | 必填    | 说明                          | 类型                                | 默认值  |
| ------------------- | ------- | ----------------------------- | ----------------------------------- | ------- |
| height              | `false` | 组件的高度                    | `number`                            |         |
| treeData            | `false` | 树的节点数据                  | `TreeItemProps[]`                   |         |
| disabled            | `false` | 禁用                          | `boolean`                           | `false` |
| checkable           | `false` | 是否可以选择的                | `boolean`                           | `true`  |
| checkStrictly       | `false` | 是否严格选中                  | `boolean`                           | `false` |
| checkedKeys         | `false` | 选中的节点(受控的)            | `string[]`                          |         |
| defaultCheckedKeys  | `false` | 默认选中的 key 第一次加载有效 | `string[]`                          |         |
| defaultExpandAll    | `false` | 默认全部展开                  | `boolean`                           | `false` |
| defaultExpandedKeys | `false` | 默认展开的节点                | `string[]`                          |         |
| expandedKeys        | `false` | 展开的节点                    | `string[]`                          |         |
| showIcon            | `false` | 是否显示尾部的图标            | `boolean`                           | `true`  |
| onCheck             | `false` | 选中事件回调                  | `(keys: string[]) => void`          |         |
| onExpand            | `false` | 展开事件回调                  | `(treeNode: EventDataNode) => void` |         |
| icon                | `false` | 自定义 icon                   | `(checked: boolean) => ReactNode`   |         |


```ts
interface TreeItemProps {
  value: string;
  label: string;
  children?: Array<TreeItemProps | ReactNode>;
  disabled?: boolean;
  icon?: (checked: boolean) => ReactNode;
}
```