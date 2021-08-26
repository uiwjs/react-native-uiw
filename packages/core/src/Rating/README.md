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

```ts
import { TabsItemIconTypes } from '@uiw/react-native'

export type icoType = [TabsItemIconTypes, TabsItemIconTypes]
export interface RatingProps {
  /**  默认几个 */
  defaultRating?: number,
  /** 总分 */
  count?: number,
  /** 默认分数 */
  defaultCount?: number,
  /** icon 大小 */
  size?: number,
  /** icon 颜色 */
  color?: string,
  /** [未选中, 已选中] */
  icon?: icoType,
  /**
   * void
   * @param score type: number 得到几分
   */
  onPress?: (score: number) => void
}
```
