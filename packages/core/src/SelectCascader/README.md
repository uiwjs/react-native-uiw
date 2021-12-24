SelectCascader 级联选择
---

可用于类似于省市区选择

> 🚧 注意：下一版本即将删除！
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

![](https://user-images.githubusercontent.com/57083007/146733028-5669f3a2-f8fe-4690-88e2-c80745bc10ff.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx
import { Component } from 'react';
import { SelectCascader } from '@uiw/react-native';


export default class SelectCascaderDemo extends Component {
  constructor(props: SelectCascaderProps) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onChange(val: any, label: string) {
    console.log("val-------->", val);
    console.log("label-------->", label);
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
      <React.Fragment>
         <Button
          onPress={() => {
            this.setState({visible: true});
          }}>
          显示选择器
        </Button>
        <SelectCascader
          data={data}
          onChange={this.onChange}
          visible={this.state.visible}
          onDismiss={() => {
            this.setState({visible: false});
          }}
        />
      <React.Fragment>
    );
  }
}
```

### Props

```ts
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type SelectCascaderOneValue = string | number | undefined;
export type SelectCascaderValue = SelectCascaderOneValue[];

export interface SelectCascaderProps {
  /** 隐藏 */
  onDismiss?: () => void;
  /** 弹框标题 */
  title?: string;
  /** 取消button文字 */
  dismissText?: string;
  /** 确定button文字 */
  okText?: string;
  /** 自定义取消元素 */
  renderDismissNode: React.ReactNode;
  /** 自定义标题元素 */
  renderTitleNode: React.ReactNode;
  /** 自定义确定元素 */
  renderOkNode: React.ReactNode;
  /** 选中的值 */
  value?: SelectCascaderValue;
  /** 选中时执行此回调 */
  onChange?: (value: SelectCascaderValue, label: string) => void;
  /** 显示隐藏控制值 */
  visible: boolean;
  /** 列表数据 */
  data: ICascaderDataItem[];
  /** 默认选择的值 */
  defaultValue?: SelectCascaderValue | undefined;
  /** 确定选中的值 */
  onOk?: (value: SelectCascaderValue, label: string) => void;
  /** 列数 默认 3 */
  cols?: number;
  /** 选择器样式 */
  pickerItemStyle?: StyleProp<TextStyle>;
  /** 选择器头部样式 */
  headerStyle?: StyleProp<ViewStyle>;
  /** 点击蒙层是否关闭 */
  maskClosable?: boolean;
  /** 动作在被触摸操作激活时以多少不透明度显示 默认 1 */
  activeOpacity?: number;
  /** 动作有触摸操作时显示出来的底层的颜色 默认 #f1f1f1 */
  underlayColor?: string;
}
```   
