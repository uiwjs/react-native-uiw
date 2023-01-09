Swiper 轮播图
---

最基础的轮播图，可承载图片。

> 🚧 注意：测试版本谨慎使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

![](https://user-images.githubusercontent.com/57083007/146733725-30e20a33-796a-49ec-9a95-4448a629c7b7.gif)

### 基础示例

<!--DemoStart-->
```jsx  mdx:preview
import React from 'react';
import { Swiper } from '@uiw/react-native';

const SwiperDemo = () => {
    const data = [
        { url: "https://avatars.githubusercontent.com/u/33082374?s=200&v=4", onClick: () => { console.log("你好！uiw/react-native") } },
        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },
        // { url: require('@expo/snack-static/react-native-logo.png') }
    ]
    return (
        <Swiper width={200} dataSource={data} height={150} borderRadius={24} />
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
| loading      | 加载状态  | Boolean   | false |
