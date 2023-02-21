Grid 宫格
---

在水平和垂直方向，将布局切分成若干等大的区块，也可以使用 `List` 组件支持列显示的特性，展示宫格，同时支持下来刷新等特性。


### 基础示例

```jsx mdx:preview
import { Grid, Icon } from '@uiw/react-native';
import React from "react"


const data = Array.from(new Array(10)).map((_val, i) => {

  return { icon: <Icon name="heart-on" color="red" />, text: `${i}`}
});

function Demo() {
  return (
    <Grid data={data} />
  );
}

export default Demo

```

### 自定义列数

```jsx mdx:preview
import { Grid, Icon } from '@uiw/react-native';
import React from "react"


const data = Array.from(new Array(10)).map((_val, i) => {

  return { icon: <Icon name="heart-on" color="red" />, text: `${i}`}
});

function Demo() {
  return (
    <Grid data={data} columns='6'/>
  );
}

export default Demo

```

### 是否需要间隔线

```jsx mdx:preview
import { Grid, Icon } from '@uiw/react-native';
import React from "react"


const data = Array.from(new Array(24)).map((_val, i) => {

  return { icon: <Icon name="heart-on" color="red" />, text: `${i}`}
});

function Demo() {
  return (
    <Grid data={data} columns='6' hasLine={false}/>
  );
}

export default Demo

```

### 自定义icon


```jsx mdx:preview
import { Text, View } from 'react-native';
import { Grid } from '@uiw/react-native';
import React from "react"

const uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC';

const data = Array.from(new Array(7)).map((_val, i) => ({
  icon: uri,
  text: `Name${i}`,
}));

function Demo() {
  return (
    <Grid
      data={data}
    />
  );
}

export default Demo

```

### 自定义单元格


```jsx mdx:preview
import { Text, View } from 'react-native';
import { Grid, Icon } from '@uiw/react-native';
import React from "react"

const data = Array.from(new Array(7)).map((_val, i) => ({
  icon: <Icon name="apple" color="red" />,
  text: `Name${i}`,
}));

function Demo() {
  return (
    <Grid
      data={data}
      renderItem={(data, index, rowNum) => {
        console.log('->', data, index, rowNum)
        return (
          <View style={{width: 100}}>
            {data.icon}
            <Text>{data.text}</Text>
          </View>
        )
      }}
    />
  );
}

export default Demo

```
### Props
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| data | 菜单数据，`icon` 可以是 `ReactNode` 或者 `uri` | `ItemData[]` | - |
| columns | 列数 |  `number` | 4 |
| hasLine | 是否有间隔线 | `boolean` | true |
| itemStyle | 单元格样式 | `StyleProp<ViewStyle>` | - |
| textStyle | 单元格文本样式 | `StyleProp<TextStyle & ViewStyle>` | - |
| iconStyle | 图片样式，可设置图片/图标尺寸 | `StyleProp<ImageStyle & TextStyle & ViewStyle>` | - |
| renderItem | 自定义单元格 |  `(data: ItemData, index: number, row: number) => React.ReactNode` | - |
| onPress | 点击宫格回调函数 |  `(data: ItemData, index: number, row: number, event: GestureResponderEvent) => void` | - |


### ItemData
| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| text | 显示文字 | `React.ReactNode` | - |
| icon | 图标 | `React.ReactNode` | - |
