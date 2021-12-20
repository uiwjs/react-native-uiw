Swiper 轮播图
---

最基础的轮播图，可承载图片。

![](https://user-images.githubusercontent.com/57083007/146733725-30e20a33-796a-49ec-9a95-4448a629c7b7.gif)<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

<!--DemoStart--> 
```jsx
import React from 'react';
import { Swiper } from '@uiw/react-native';
const SwiperDemo = () => {
    const data = [
        { url: "https://reactnative.dev/img/tiny_logo.png", onClick: () => { console.log("你好！uiw/react-native") } },
        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },
        { url: require('@expo/snack-static/react-native-logo.png') }
    ]
    return (
        <View>
            <Swiper width={200} dataSource={data} height={150} borderRadius={24} />
        </View>
    )
}
export default SwiperDemo
```
<!--End-->

### Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| dataSource   | 数据源         | Array     | [ ] |
| width        | 宽度           |  Number   |屏幕宽度|
| height       | 高度           | Number    |  130 |
| time         | 执行时间       | Number    | 3000（3s） |
| borderRadius | 圆角边框       | Number    |  0 |
| autoplay     | 是否开启定时器  | Boolean   | true|
| dotStyle     | 圆点类型 ( dot : 圆点， block : 方块 )       | String    | dot |