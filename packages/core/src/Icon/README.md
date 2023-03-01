Icon 图标
---

图标组件通过 [`react-native-svg`](https://github.com/react-native-community/react-native-svg) 支持 svg 图标，基于这一特性封装图标组件库，它不是基于字体文件封装的组件，相比字体图标组件易于扩展体积较小。预览[所有的图标](https://uiwjs.github.io/icons)。


### 基础实例

```jsx mdx:preview&background=#bebebe29
import React from "react"
import  { Icon } from '@uiw/react-native';

export default function Demo() {
  return (
    <>
      <Icon name='apple' size={46} color='#50CB42' />
      <Icon name='apple' size={46} fill='red' />
    </>
  )
}
```

### 自定义图标轮廓颜色

```jsx mdx:preview&background=#bebebe29
import React from "react"
import  { Icon } from '@uiw/react-native';

export default function Demo() {
  return (
    <>
      <Icon name='apple' height={42} width={40} fill='#E3BD8D' stroke='#4d4030' />
      <Icon name='apple' height={42} width={40} fill='#E2D849' stroke='#FF9900' />
    </>
  )
}
```

### 自定义图标

```jsx mdx:preview&background=#bebebe29
import React from "react"
import  { Icon } from '@uiw/react-native';
import { View } from 'react-native';

export default function Demo() {
  return (
    <>
      <Icon
        size={30}
        paths={[
          "M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
        ]}
      />
      <View style={{ width:5 , display:"inline-block"}}></View>
      <Icon
        size={30}
        paths={[
          'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z'
        ]}
      />
      <View style={{ width:5 , display:"inline-block"}}></View>
      <Icon
        size={30}
        paths={[
          "M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
        ]}
      />
    </>
  )
}
```

### SVG 图标支持

```jsx
import React from "react";
import  { Icon } from '@uiw/react-native';

const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill-rule="evenodd"
      fill="#000"
      d="M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z"
    />
  </svg>
`;

export default function Demo() {
  return <Icon name='apple' size={46} fill='red' />
}
```

### 包中集成的所有图标

⚠️ 此示例，只是在文档中预览 Icon 图标，并展示图标名称，也可以通过图标 web 官网，网站预览[所有的图标](https://uiwjs.github.io/icons)。

```jsx mdx:preview&background=#bebebe29&noCode=true
import React from "react"
import  { Icon } from '@uiw/react-native';
import { View , StyleSheet} from 'react-native';
import svgPaths from '@uiw/icons/fonts/w-icon.json';

const styles = StyleSheet.create({
  itemStyle : {
    fontSize: 14,
    width: 130,
    backgroundColor: '#eaeaea',
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal:0,
    paddingVertical:20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fill: '#525252',
  }
})

export default function Demo() {
  return (
    <View  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {Object.keys(svgPaths).map((keyname, idx) => {
        return (
          <View
            key={idx}
            style={styles.itemStyle}
          >
            <svg viewBox="0 0 24 24" width="23">
              {svgPaths[keyname].map((path, pathIdx) => (
                <path d={path} key={pathIdx} fillRule="evenodd"/>
              ))}
            </svg>
            <span style={{ fontSize: 12,color: '#757575' }}>{keyname}</span>
          </View>
        );
    })}
    </View>
  )
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `name` | 图标名称 | String | - |
| `fill` | 填充颜色 | String | `#000000` |
| `stroke` | 轮廓颜色 | String | - |
| `xml` | 传递 SVG xml 字符串，自定义图标 | String | - |
| `size` | 大小 | Number | 26 |
| `width` | 宽度(默认为`size`的值) | Number | 26 |
| `height` | 高度(默认为`size`的值) | Number | 26 |
