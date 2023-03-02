Avatar 头像
---

用来代表用户或事物，支持图片展示，当前是基于 React Native 组件 Image 封装，你也可以使用更快的图片展示插件 [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)。


### 基础示例

```jsx mdx:preview&background=#bebebe29
import { View } from 'react-native';
import { Avatar } from '@uiw/react-native';
import React from 'react';

const uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC';

function Demo() {
  return (
    <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
      <Avatar src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar src={uri} />
    </View>
  );
}

export default Demo

```

### 头像尺寸

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
      <Avatar size={20} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar size={30} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar size={40} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar size={50} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
    </View>
  );
}

export default Demo

```

### 设置头像圆角

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
      <Avatar rounded={0} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar rounded={5} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar rounded={10} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar rounded={20} src="https://avatars.githubusercontent.com/u/24369183?v=4" />
    </View>
  );
}

export default Demo

```

### 指定头像的形状

circle  圆头像
square  正方形头像

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@uiw/react-native';

function Demo() {
  return (
    <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
      <Avatar shape='circle' src="https://avatars.githubusercontent.com/u/24369183?v=4" />
      <Avatar rounded='square' src="https://avatars.githubusercontent.com/u/24369183?v=4" />
    </View>
  );
}

export default Demo

```
### Props

继承 [View](https://facebook.github.io/react-native/docs/view#props) 组件。


| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `imageProps` | React Native `Image` 组件 Props | obj | - |
| `src` | 图像源（远程URL或本地文件资源） | `string|number` | - |
| `size` | 尺寸 | number | - |
| `rounded` | 设置圆角 | number | - |
| `shape` |指定头像的形状 | `circle｜square` | - |
