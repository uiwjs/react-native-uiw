ExpandableSection 展开缩放
---

展开缩放

### 基础示例

<!--DemoStart--> 
```js
import { ExpandableSection,H5 } from '@uiw/react-native';

class Demo extends Component {
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

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|-----|------|
| `sectionHeader` | 设置标题 | JSX.Element | - |
| `children` | 展开内容| ReactNode | - |
| `labelStyle` | 设置提示文本样式 | TextProps['style'] | - |
| `expanded` | 是否展开 | boolean | - |
| `top` | 展开后显示位置 标题上或标题下 | boolean | - |
| `top` | 点击事件 | void | - |
