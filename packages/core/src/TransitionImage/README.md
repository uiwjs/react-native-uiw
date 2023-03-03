TransitionImage 图片
---

直接替换标准 React Native Image 组件，该组件显示带有占位符和平滑图像加载转换的图像

<!-- ![](https://user-images.githubusercontent.com/57083007/146734209-c9e25051-3473-401e-ba3f-688f843da7df.gif) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { Fragment } from 'react';
import { TransitionImage } from '@uiw/react-native';
import { ActivityIndicator } from 'react-native';

function Demo() {
  return (
    <Fragment>
       <TransitionImage
        source={{  uri: 'https://avatars.githubusercontent.com/u/24369183?v=4' }}
        style={{ width: 200, height: 200, }}
        onPress={()=> console.log('点击图片回调事件')}
        onLongPress={()=> console.log('长按组件回调事件')}
      />
    </Fragment>
  );
}
export default Demo
```

### 过度动画效果

```jsx mdx:preview&background=#bebebe29
import React, { useState } from 'react';
import { Fragment } from 'react';
import { TransitionImage } from '@uiw/react-native';
import { ActivityIndicator } from 'react-native';

function Demo() {
  return (
    <Fragment>
       <TransitionImage
        source={{  uri: 'https://avatars.githubusercontent.com/u/24369183?v=4' }}
        style={{ width: 200, height: 200, }}
        PlaceholderContent={<ActivityIndicator />}
        placeholderStyle={{backgroundColor: '#000a'}}
        containerStyle={{backgroundColor:'#eee',}}
        transition={true}
        transitionDuration={1000}
        onPress={()=> console.log('点击图片回调事件')}
        onLongPress={()=> console.log('长按组件回调事件')}
      />
    </Fragment>
  );
}
export default Demo
```

### Props

```js
import { ImageProps } from 'react-native';
```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| onPress | 按下组件时的回调函数 | void | - |
| onLongPress | 长按组件时的回调函数 | void | - |
| PlaceholderContent | 加载图像时要呈现的内容 | React.ReactElement<any> | - |
| containerStyle | 容器的附加样式（可选） | StyleProp<ViewStyle> | - |
| childrenContainerStyle | 子容器的附加样式（可选） | StyleProp<ViewStyle> | - |
| placeholderStyle | 占位符容器的附加样式（可选） | StyleProp<ViewStyle> | - |
| transition | 在图像加载时执行淡入淡出过渡 | boolean | - |
| transitionDuration | 图像加载时执行淡入淡出过渡时间 | boolean | - |

