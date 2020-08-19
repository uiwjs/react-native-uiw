SelectCascader 级联选择
---

可用于类似于省市区选择

## 基础示例

```jsx
import { Text } from 'react-native';
import React, { Component } from 'react';
import { SelectCascader } from '@uiw/react-native';


export default class SelectCascaderDemo extends Component {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
    };
  }

  onChange(val: any, label: string) {
    console.log("val-------->", val);
    console.log("label-------->", label);
  }

  onDismiss(e: any) {

  }
  render() {
    const data = [
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
      },
    ]
    return (
      <SelectCascader
        data={data}
        onChange={this.onChange}
      />
    );
  }
}
```

## Props

| 参数      | 说明            | 类型      | 默认值 |
| --------- | --------------------- | --------- | ------ |
| `data`    | 列表数据 | array | -  |
| `value`   | 选中的值 | array | -  |
| `cols`   | 列数 | number | 3  |
| `defaultValue` | 默认选择的值 | array | -  |
| `onChange` | 选中时执行此回调 | Function(value, label) | -  |
| `onOk` | 确定选中的值 | Function(value, label) | -  |
| `onDismiss` | 隐藏 | Function() | -  |
| `okText` | 确定button文字 | string | 确定  |
| `dismissText` | 取消button文字 | string | 取消  |
| `title` | 弹框标题 | string | 请选择  |
| `pickerItemStyle` | 选择器样式 | object | -  |
| `headerStyle` | 选择器头部样式 | object | -  |
