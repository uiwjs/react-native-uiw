
Rating 评分
---

在你想用任意需要评分的的地方使用。

## 基础示例

```jsx
import { Fragment } from 'react';
import { Rating } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <Rating />
    </Fragment>
  );
}
```

## 指定 Icon

```jsx
import { Fragment } from 'react';
import { Rating, Icon } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
     <Rating 
        icon={[<Icon name="star-off"  />,<Icon name="star-on" />]}
      />
    </Fragment>
  );
}

function Demo() {
  return (
    <Fragment>
     <Rating 
        icon={["star-off", "star-on"]}
      />
    </Fragment>
  );
}

```

## Props

### Rating

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `defaultRating` | 默认几个 | number | 5 |
| `count` | 总分 | number |5|
| `defaultCount` | 默认分数 | number| 1 count/defaultRating |
| `size` | icon 大小 | number | 24|
| `color` | icon 颜色 | string | `#ebc445`|
| `color` | icon 颜色 | string | `#ebc445`|
| `icon` | 指定显示的图标 | Array<IconsName \| React.ReactElement \| React.ReactNode>: [未选中, 已选中]| [`star-off`,`star-on`]|
| `onPress` | 点击图标的回调 | (score: number) => void type:@param score type: number 得到几分 | |


