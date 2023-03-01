Rating 评分
---

在你想用任意需要评分的的地方使用。


### 基础示例

```jsx mdx:preview&background=#bebebe29
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

```jsx mdx:preview&background=#bebebe29
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
    <Rating tooltips={desc}  tooltipsStyle={{ fontSize: 20, color: '#e6c45d' }} />
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


| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `defaultRating` | 默认选中几个 | number | - |
| `resultRating` | 总数 | number | - |
| `size` | icon 大小 | number | - |
| `color` | icon 颜色 | string | - |
| `icon` | `actived` 激活 `unactived` 未激活 | obj | - |
| `onPress` | 选中事件 | fn | - |
| `tooltips` | 自定义每项的提示信息 | arr | - |
| `resultRating` | 只读模式 | boolean | - |

 arr | - |
| `resultRating` | 只读模式 | boolean | - |

