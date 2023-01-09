Rating 评分
---

在你想用任意需要评分的的地方使用。


### 基础示例

```jsx  mdx:preview
import React from 'react';
import { Rating } from '@uiw/react-native';
function Demo() {
  return (
   <Rating />
  );
}

export default Demo

```

### 指定 Icon

```jsx mdx:preview
import React from 'react';
import { Rating, Icon } from '@uiw/react-native';
import {Text} from 'react-native'
function Demo() {
  return (
    <>
      <Text>1. 直接传uiw icon name</Text>
      <Rating icon={{actived: 'smile', unactived: 'smile-o' }} />
      <Text>2. Icon组件</Text>
       <Rating
        icon={{
          unactived: <Icon name="star-off" fill="skyblue" />,
          actived: <Icon name="star-on" fill="skyblue" />,
        }}
      />
    </>
  );
}

export default Demo
```

### 默认选中及总数

```jsx mdx:preview
import React from 'react';
import { Rating, Icon } from '@uiw/react-native';
function Demo() {
  return (
    <Rating
      defaultRating={3}
      resultRating={10}
      icon={{
        unactived: <Icon name="smile-o" fill="skyblue" />,
        actived: <Icon name="smile" fill="skyblue" />,
      }}
      onPress={console.log}
      />
  );
}

export default Demo
```

### 评分组件加上文案展示及样式修改

```jsx mdx:preview
import React from 'react';
import { Rating, Icon } from '@uiw/react-native';

function Demo() {
  const desc = ['0星', '1星', '2星', '3星', '4星', '5星'];
  return (
    <Rating tooltips={desc}  tooltipsStyle={{ fontSize: 25, color: 'blue' }} />
  );
}
export default Demo
```

### 只读

```jsx mdx:preview
import React from 'react';
import { Rating, Icon } from '@uiw/react-native';
function Demo() {
  const desc = ['0星', '1星', '2星', '3星', '4星', '5星'];
  return (
    <Rating defaultRating={3} color="green" disabled />
  );
}
export default Demo
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
    /** 自定义每项的提示信息 */
  tooltips?: string[];
  /** 自定义提示信息样式 */
  tooltipsStyle?: StyleProp<TextStyle>;
    /** 只读模式 */
  disabled: boolean
}
```
