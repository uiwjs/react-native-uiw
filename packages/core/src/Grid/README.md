Grid 宫格
---

在水平和垂直方向，将布局切分成若干等大的区块，也可以使用 `List` 组件支持列显示的特性，展示宫格，同时支持下来刷新等特性。

### 基础示例

引入本地图标 `require('./1.png')`。

```jsx
import { Grid } from '@uiw/react-native';

const uri = 'https://xx.images.com/xxx/icon.png';
const data = Array.from(new Array(10)).map((_val, i) => {
  if(i === 0) {
    return { icon: require('./1.png'), text: `Name${i}` };
  }
  return { icon: uri, text: `Name${i}` }
});

function Demo() {
  return (
    <Grid data={data} />
  );
}
```

### 自定义单元格

引入本地图标 `require('./1.png')`

```jsx
import { Text, View } from 'react-native';
import { Grid } from '@uiw/react-native';

const uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC';

const data = Array.from(new Array(7)).map((_val, i) => ({
  icon: uri,
  text: `Name${i}`,
}));

function Demo() {
  return (
    <Grid
      data={data}
      renderItem={(data, index, rowNum) => {
        console.log('->', index, rowNum)
        return (
          <View>
            <Text>{data.item}</Text>
          </View>
        )
      }}
    />
  );
}
```

### Props

```ts
export interface GridProps extends ViewProps {
  /**
   * 传入的菜单数据，`icon` 可以是 `ReactNode` 或者 `uri`
   * @default []
   */
  data?: ItemData[];
  /**
   * 列数
   * @default 4
   */
  columns?: number;
  /**
   * 是否有间隔线
   * @default true
   */
  hasLine?: boolean;
  /** 单元格样式 */
  itemStyle?: StyleProp<ViewStyle>;
  /** 单元格文本样式 */
  textStyle?: StyleProp<TextStyle & ViewStyle>;
  /** 图片样式，可设置图片/图标尺寸 */
  iconStyle?: StyleProp<ImageStyle & TextStyle & ViewStyle>;
  /** 自定义单元格 */
  renderItem?: (data: ItemData, index: number, row: number) => React.ReactNode;
  /** 点击宫格回调函数 */
  onPress?: (data: ItemData, index: number, row: number, event: GestureResponderEvent) => void;
}
```
