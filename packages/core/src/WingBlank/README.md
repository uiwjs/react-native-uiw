WingBlank 两翼留白
---

左右两边空出一点距离

### 基础示例


```jsx  mdx:preview
import React,{Component} from 'react';
import { Text } from 'react-native';
import { WingBlank } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
      <WingBlank>
        <Text>两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留白两翼留两翼留白两翼留白两翼留白两翼留白</Text>
      </WingBlank>
    );
   }
}
export default Demo
```

size两翼留白的间距,默认`default`

```jsx  mdx:preview
import React,{Component,Fragment} from 'react';
import { Text } from 'react-native';
import { WingBlank } from '@uiw/react-native';

class Demo extends Component {
  render() {
    return (
    <Fragment>
      <WingBlank size='small'>
        <Text>两翼留白两翼留白</Text>
      </WingBlank>
      <WingBlank size='default'>
        <Text>两翼留白两翼留白</Text>
      </WingBlank>
      <WingBlank size='large'>
        <Text>两翼留白两翼留白</Text>
      </WingBlank>
    </Fragment>
    );
   }
}
export default Demo
```

### WingBlank

| 参数 | 说明 | 类型 | 默认值|
| ---- | ---- | ---- | ---- |
| size | 两翼留白的间距 | `small`, `default`, `large` | `default` |