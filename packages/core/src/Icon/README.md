Icon 图标
---

图标组件通过 [`react-native-svg`](https://github.com/react-native-community/react-native-svg) 支持 svg 图标，基于这一特性封装图标组件库，它不是基于字体文件封装的组件，相比字体图标组件易于扩展体积较小。预览[所有的图标](https://uiwjs.github.io/icons)。

### 基础示例

```js
import { Icon } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <View>
        <Icon name='apple' size={46} color='#50CB42' />
        <Icon name='apple' size={46} fill='red' />
      </View>
    )
  }
}
```

### 自定义按钮

```js
import { Icon } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <Icon
        fill="red"
        paths={[
          'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z'
        ]}
        size={18}
        style={styles.icon}
      />
    )
  }
}
```

### SVG 图标支持

```js
import { Icon } from '@uiw/react-native';

const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path
      fill-rule="evenodd"
      d="M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z"
    />
  </svg>
`;

class Demo extends Component {
  render() {
    return <Icon xml={xml} />;
  }
}
```

### 包中集成的所有图标

⚠️ 此示例，只是在文档中预览 Icon 图标，并展示图标名称，也可以通过图标 web 官网，网站预览[所有的图标](https://uiwjs.github.io/icons)。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noCode=true-->
```jsx
import ReactDOM from 'react-dom';
import svgPaths from '@uiw/icons/fonts/w-icon.json';

function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.keys(svgPaths).map((keyname, idx) => {
        return (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: 180, paddingBottom: 14 }}>
            <svg viewBox="0 0 24 24" width="21">
              {svgPaths[keyname].map((path, pathIdx) => (
                <path d={path} key={pathIdx} fillRule="evenodd"/>
              ))}
            </svg>
            <span style={{ color: '#757575' }}>{keyname}</span>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.render(<Demo />, _mount_);
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
