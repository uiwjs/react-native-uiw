TransitionImage 图像
---

直接替换标准 React Native Image 组件，该组件显示带有占位符和平滑图像加载转换的图像

### 基础示例

```jsx
import { Fragment } from 'react';
import { TransitionImage } from '@uiw/react-native';
import {ActivityIndicator} from 'react-native';


function Demo() {
  return (
    <Fragment>
       <TransitionImage
        source={{  uri: 'https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg' }}
        style={{ width: 200, height: 200, }}
        PlaceholderContent={<ActivityIndicator />}
        placeholderStyle={{backgroundColor: 'red'}}
        containerStyle={{backgroundColor:'#eee',}}
        transition={true}
        transitionDuration={1000}
        onPress={()=> console.log('点击图片回调事件')}
        onLongPress={()=> console.log('长按组件回调事件')}
      />
    </Fragment>
  );
}
```


### TransitionImage Props

```ts
import { ImageProps } from 'react-native';

export interface TransitionImage extends ImageProps{
  /* 按下组件时的回调函数 */
  onPress?(): void;
  /* 长按组件时的回调函数 */
  onLongPress?(): void;
  /* 加载图像时要呈现的内容 */
  PlaceholderContent?: React.ReactElement<any>;
  /* 容器的附加样式（可选） */
  containerStyle?: StyleProp<ViewStyle>;
  /* 子容器的附加样式（可选） */
  childrenContainerStyle?: StyleProp<ViewStyle>;
  /* 占位符容器的附加样式（可选） */
  placeholderStyle?: StyleProp<ViewStyle>;
  /* 在图像加载时执行淡入淡出过渡 */
  transition?: boolean;
  /* 在图像加载时执行淡入淡出过渡 */
  transitionDuration?: number;
}
```
