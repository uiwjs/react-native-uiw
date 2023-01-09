TreeSelect 级联选择器
---

> 🚧 注意：测试版本谨慎使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!-- ![](https://user-images.githubusercontent.com/66067296/147335182-2abf199f-e206-4b4b-9edf-f1c29568d884.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React from 'react';
import { TreeSelect } from '@uiw/react-native';

function Demo() {
   const option = [
      {
        label: '北京',
        value: '01',
        children: [
          {
            label: '东城区',
            value: '01-1',
          },
          {
            label: '西城区',
            value: '01-2',
          },
          {
            label: '崇文区',
            value: '01-3',
          },
          {
            label: '宣武区',
            value: '01-4',
          },
        ],
      },
      {
        label: '浙江',
        value: '02',
        children: [
          {
            label: '杭州',
            value: '02-1',
            children: [
              {
                label: '西湖区',
                value: '02-1-1',
              },
              {
                label: '上城区',
                value: '02-1-2',
              },
              {
                label: '江干区',
                value: '02-1-3',
              },
              {
                label: '下城区',
                value: '02-1-4',
              },
            ],
          },
          {
            label: '宁波',
            value: '02-2',
            children: [
              {
                label: 'xx区',
                value: '02-2-1',
              },
              {
                label: 'yy区',
                value: '02-2-2',
              },
            ],
          },
          {
            label: '温州',
            value: '02-3',
          },
          {
            label: '嘉兴',
            value: '02-4',
          },
          {
            label: '湖州',
            value: '02-5',
          },
          {
            label: '绍兴',
            value: '02-6',
          },
        ],
      }
    ]
  return (
    <TreeSelect
       defaultValue={['01','01-1']}
       options={option}
       onChange={(value, nodes) => {
          console.log(value, nodes)
       }}
    />
  );
}
export default Demo
```


### 自定义字段名称

```jsx  mdx:preview
import React from 'react';
import { TreeSelect } from '@uiw/react-native';

function Demo() {
   const option = [
      {
        labels: '北京',
        values: '01',
        children: [
          {
            labels: '东城区',
            values: '01-1',
          },
          {
            labels: '西城区',
            values: '01-2',
          },
          {
            labels: '崇文区',
            values: '01-3',
          },
          {
            labels: '宣武区',
            values: '01-4',
          },
        ],
      },
      {
        labels: '浙江',
        values: '02',
        children: [
          {
            labels: '杭州',
            values: '02-1',
            children: [
              {
                labels: '西湖区',
                values: '02-1-1',
              },
              {
                labels: '上城区',
                values: '02-1-2',
              },
              {
                labels: '江干区',
                values: '02-1-3',
              },
              {
                labels: '下城区',
                values: '02-1-4',
              },
            ],
          },
          {
            labels: '宁波',
            values: '02-2',
            children: [
              {
                labels: 'xx区',
                values: '02-2-1',
              },
              {
                labels: 'yy区',
                values: '02-2-2',
              },
            ],
          },
          {
            labels: '温州',
            values: '02-3',
          },
          {
            labels: '嘉兴',
            values: '02-4',
          },
          {
            labels: '湖州',
            values: '02-5',
          },
          {
            labels: '绍兴',
            values: '02-6',
          },
        ],
      }
    ]
  return (
    <TreeSelect
       defaultValue={['01','01-1']}
       options={option}
       fieldNames={{ label: "labels", value: 'values', children: 'children'}}
       onChange={(value, nodes) => {
          console.log(value, nodes)
       }}
    />
  );
}
export default Demo
```


### TransitionImage Props

```ts
export interface TreeSelectOption {
  [key: string]: any
}

export type TreeSelectProps = {
  // 级联数据
  options: TreeSelectOption[]
  // 默认选中项
  defaultValue?: string[]
  // 选中项
  value?: string[]
  // value 变化时触发
  onChange?: (value: string[], extend: { options: TreeSelectOption[] }) => void
  // 自定义 options 中 label value children 的字段
  fieldNames?: {{ label: string, value: string, children: string } } | any
  // 选中文本颜色
  activeColor?:ColorValue
}
```
