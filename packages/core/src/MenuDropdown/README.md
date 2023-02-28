MenuDropdown 下拉菜单
---

展开式菜单


### 基础示例


```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单">
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```

### 加载状态


```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单" loading>
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```

### 禁用状态

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单" disabled>
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```
### 按钮圆角

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单" rounded='20'>
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```

### 按钮无边框

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单" bordered={false}>
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```

### 按钮尺寸

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <>
      <MenuDropdown title="small" size="small">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="default">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="large" size="large">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
    </>
    );
}

export default Demo;
```

### 按钮类型

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <>
      <MenuDropdown title="small" type="primary">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="default" type="success">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="large" type="warning">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
        <MenuDropdown title="large" type="danger">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="large" type="light">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
      <MenuDropdown title="large" type="dark">
        <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
        <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
      </MenuDropdown>
    </>
    );
}

export default Demo;
```

### 按钮颜色

```jsx mdx:preview
import React, { Component } from 'react';
import { Text  } from 'react-native';
import { MenuDropdown} from '@uiw/react-native';

const Demo = () => {
  return (
    <MenuDropdown title="菜单" color="skyblue">
      <MenuDropdown.Item><Text>首页</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>个人中心</Text></MenuDropdown.Item>
      <MenuDropdown.Item><Text>列表</Text></MenuDropdown.Item>
    </MenuDropdown>
    );
}

export default Demo;
```

### props

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `color` | 设置按钮颜色 | String | - |
| `title` | 按钮标题 | String | - |
| `textStyle` | 如果按钮内是文本，此样式可以设置文本样式 | `TextProps.Style` | - |
| `disabled` | 设置禁用 | Boolean | - |
| `loading` | 加载状态 | Boolean | - |
| `rounded` | 设置圆角 | Boolean/Number | `5` |
| `bordered` | 是否有边框 | Boolean | `true` |
| `size` | 按钮尺寸 | `small`, `default`, `large` | - |
| `type` | 按钮类型，可选值为 | `primary`, `success`, `warning`, `danger`, `light`, `dark` | - |
