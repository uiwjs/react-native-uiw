TreeSelect 级联选择器
---

⚠️测试版本谨慎使用<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx
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
    <React.Fragment>
      <TreeSelect
         defaultValue={['01','01-1']}
         options={option}
         onChange={(value: any, nodes: any) => {
            console.log(value, nodes)
         }}
        />
    </React.Fragment>
  );
}
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
  fieldNames?: { label: string; value: string; children: string } | any
  // 选中文本颜色
  activeColor?:ColorValue
}
```
