ExpandableSection 展开缩放
---

ExpandableSection 组件以在 sectionHeader标题 下方或上方呈现展开的内容部分

### 基础示例

<!--DemoStart--> 
```js
import React from 'react';
import { ExpandableSection,H5 } from '@uiw/react-native';

export default class ExpandableSectionDemo extends Component {
  state={
    expanded:false,
    top:false
  }
  render() {
    return (
       <ExpandableSection
          expanded={this.state.expanded}
          onPress={() => this.setState({ expanded: !this.state.expanded })}
          sectionHeader={<H5>我是标题</H5>}
          top={this.state.top}
        >
        <View>
          <Text style={{ color: 'red' }}>展开的内容</Text>
        </View>
      </ExpandableSection>
    )
  }
}
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `sectionHeader` | 设置标题 | JSX.Element | - |
| `children` | 展开内容| ReactNode | - |
| `expanded` | 是否展开 | boolean | - |
| `top` | 展开后显示位置 标题上或标题下 | boolean | - |
| `onPress` | 点击事件 | void | - |
