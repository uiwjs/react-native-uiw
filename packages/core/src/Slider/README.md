Slider 滑块输入条
---

允许用户在一个区间中选择特定值。

> 自带 Slider 已经过时，交于社区维护 [`react-native-slider`](https://github.com/react-native-community/react-native-slider)，当前组件是重新封装保持 iOS/android 效果一致。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

```jsx
import { Fragment, useState } from 'react';
import { Text } from 'react-native';
import { Slider } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(0.3);
  return (
    <Fragment>
      <Slider
        value={value}
        onChange={(cValue) => setValue(cValue)}
      />
      <Text>值：{value.toFixed(1)}</Text>
    </Fragment>
  );
}
```

### 不显示滑块

```jsx
import { Fragment,useState } from 'react';
import { Slider } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(0.3);
  return (
    <Fragment>
      <Slider
        shownThumb={false}
        value={value}
        onChange={(cValue) => setValue(cValue)}
      />
    </Fragment>
  );
}
```

### 设置步长

```jsx
import { Fragment, useState } from 'react';
import { Slider } from '@uiw/react-native';

function Demo() {
  const [value, setValue] = useState(0.3);
  return (
    <Fragment>
      <Slider
        step={0.2}
        shownThumb={false}
        value={value}
        onChange={(cValue) => setValue(cValue)}
      />
    </Fragment>
  );
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `value` | 初始值 | Number | - |
| `step` | 滑块的步长值。该值应介于`0`到 `maxValue`~ `minValue`之间） | Number | - |
| `disabled` | 初始值 | Number | - |
| `maxValue` | 最大值 | Number | `1` |
| `minValue` | 最小值 | Number | `0` |
| `disabled` | 值为 `true` 时，滑块为禁用状态 | Boolean | - |
| `vertical` | 值为 `true` 时，Slider 为垂直方向 | Boolean | - |
| `trackStyle` | 设置轨道样式 | ViewStyle | - |
| `thumbStyle` | 设置拖拽按钮样式 | ViewStyle | - |
| `thumbTintColor` | 设置拖拽按钮背景颜色 | String | - |
| `maximumTrackTintColor` | 轨道背景颜色 | String | - |
| `minimumTrackTintColor` | 左侧或者上部分轨道颜色 | String | - |
| `animationConfig` | 设置动画参数 | Animated.SpringAnimationConfig | - |
| `animateTransitions` | 设置为 `true` 可使用默认的 `timing` 动画类型为值设置动画 | Boolean | - |
| `shownThumb` | 设置轨道上访拖拽滑块是否显示| Boolean | - |
| `thumbSize` | 滑块尺寸 | `{ width: number; height: number; }` | `{ width: 20, height: 20 }` |
| `onChange` | 当 `Slider` 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入 | (value: number) => void | - |
| `onSlidingComplete` | 当滑块停止滑动时触发事件 | (value: number) => void | - |
| `onSlidingStart` | 当滑块开始滑动时触发事件 | (value: number) => void | - |
