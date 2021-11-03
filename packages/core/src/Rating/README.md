Rating 评分
---

在你想用任意需要评分的的地方使用。

<img src='https://user-images.githubusercontent.com/66067296/140004186-31b369e2-13f1-4dd2-aef5-331aa133b0fe.gif' alt='Rating' style='zoom:33%;' />

### 基础示例

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

### 指定 Icon

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

### Props

```ts
import { TabsItemIconTypes } from '@uiw/react-native'

export type icoType = [TabsItemIconTypes, TabsItemIconTypes]
export interface RatingProps {
  /**  默认选中几个 */
  defaultRating?: number;
  /** 总数*/
  resultRating?: number;
  /** icon 大小 */
  size?: number;
  /** icon 颜色 */
  color?: string;
  /** actived 激活 unactived 未激活 */
  icon?: {
    actived?: TabsItemIconTypes,
    unactived?: TabsItemIconTypes
  };
  /**
   * void
   * @param score type: number 选中几个
   */
  onPress?: (score: number) => void;
}
```
