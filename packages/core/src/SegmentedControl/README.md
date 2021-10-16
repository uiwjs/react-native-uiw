SegmentedControl 分段器
---

由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。

> 即将启用，交于社区维护 [@react-native-community/react-native-segmented-control](https://github.com/react-native-segmented-control/segmented-control)。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

```jsx
import { Text } from 'react-native';
import { SegmentedControl } from '@uiw/react-native';

function Demo() {
  return (
    <SegmentedControl value={['申请', '审批', '提交']} />
  );
}
```

### 设置颜色

```jsx
import { SegmentedControl } from '@uiw/react-native';

function Demo() {
  return (
    <SegmentedControl color="#dc3545" value={['申请', '审批', '提交']} />
  );
}
```

### 设置间距

```jsx
import { SegmentedControl } from '@uiw/react-native';

function Demo() {
  return (
    <SegmentedControl gutter={10} selectedIndex={2} value={['申请', '审批', '提交']} />
  );
}
```

### 设置尺寸

```jsx
import { Fragment } from 'react';
import { SegmentedControl, Spacing } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <SegmentedControl size="large" gutter={10} selectedIndex={1} value={['申请', '审批', '提交']} />
      <Spacing />
      <SegmentedControl size="default" selectedIndex={2} value={['申请', '审批', '提交']} />
      <Spacing />
      <SegmentedControl size="small" gutter={10} selectedIndex={2} value={['申请', '审批', '提交']} />
    </Fragment>
  );
}
```

### Props

组件继承 `ButtonGroup` 组件。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `style` | 自定义样式 | Object | {} |
| `value` | 初始值 | String[] | [] |
| `color` | 组件主色调 | String | `#108ee9` |
| `textColor` | 文本颜色 | Object: TextColorType | - |
| `size` | 按钮尺寸 | `small`, `default`, `large` | `default` |
| `disabled` | 是否启用 | Boolean | `false` |
| `selectedIndex` | 选中项在数组中的索引 | Number | 0 |
| `renderItem` | 自定义单元格 | (data, index, rowNum): void | - |
| `onValueChange` | 回调函数 | (label, selectedIndex): void | - |


### TextColorType

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `actived` | 激活 | String | `#fff` |
| `unactived` | 未激活 | String | `color` |
