ExpandableSection 展开缩放
---

ExpandableSection 组件以在 sectionHeader标题 下方或上方呈现展开的内容部分

### 基础示例

```jsx mdx:preview
import React, {useState} from 'react';
import { ExpandableSection } from '@uiw/react-native';
import { View, Text } from 'react-native'

const Demo = () => {
  const [state, setState] = useState({
    expanded: false,
    top: false
  })

  return (
    <View style={{height: 100}}>
      <ExpandableSection
        expanded={state.expanded}
        onPress={() => setState({...state, expanded: !state.expanded })}
        sectionHeader={<Text >点击我</Text>}
        top={state.top}
      >
        <Text style={{ color: 'red' }}>
          有一天路标迁了希望你能从容、有一天桥墩断了希望你能渡越、有一天栋梁倒了希望你能坚强、有一天期待蔫了希望你能理解
        </Text>
      </ExpandableSection>
    </View>
  )
}

export default Demo
```

### 显示位置

```jsx mdx:preview
import React, {useState} from 'react';
import { ExpandableSection } from '@uiw/react-native';
import { View, Text } from 'react-native'

const Demo = () => {
  const [state, setState] = useState({
    expanded: false,
    top: true
  })

  return (
    <View style={{height: 100}}>
      <ExpandableSection
        expanded={state.expanded}
        onPress={() => setState({...state, expanded: !state.expanded })}
        sectionHeader={<Text >标题 : 点击我</Text>}
        top={state.top}
      >
        <Text style={{ color: 'red' }}>
          有一天路标迁了希望你能从容、有一天桥墩断了希望你能渡越、有一天栋梁倒了希望你能坚强、有一天期待蔫了希望你能理解
        </Text>
      </ExpandableSection>
    </View>
  )
}

export default Demo
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `sectionHeader` | 设置标题 | JSX.Element | - |
| `children` | 展开内容| ReactNode | - |
| `expanded` | 是否展开 | boolean | - |
| `top` | 展开后显示位置 标题上或标题下 | boolean | - |
| `onPress` | 点击事件 | void | - |
