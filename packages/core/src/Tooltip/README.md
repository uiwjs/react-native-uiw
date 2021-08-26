Tooltip 工具提示
---

当用户点击元素时，工具提示将显示信息。

## 基础示例

```jsx
import { Fragment } from 'react';
import { Tooltip } from '@uiw/react-native';


function Demo() {
  return (
    <Fragment>
      <Tooltip title='我是一个文本'>
        <Text style={styles.textStyle}>我是一个文本</Text>
      </Tooltip>
    </Fragment>
  );
}
```

## 使用 自定义提示内容

```jsx
import { Fragment } from 'react';
import { Tooltip, Icon } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <Tooltip
        backgroundColor="pink"
        width={30}
        height={30}
        title={(<View>
          <Text>我是一个苹果</Text>
          <Icon name='apple' color="#fff" />
      </View>)}
      >
        <Icon name='apple' color="red" />
      </Tooltip>
    </Fragment>
  );
}
```

## Tooltip Props

```ts
import { ModalProps } from 'react-native';

export interface TooltipProps extends ModalProps {
  /** cloud 元素 */
  title: React.ReactNode,
  /** 子元素 */
  children: JSX.Element,
  /** 点击类型 */
  toggleAction?: 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut',
  /** 高度 */
  height?: number | 'auto',
  /** 宽度 */
  width?: number | 'auto',
  /** 背景色 */
  backgroundColor?: string,
  /** 圆角大小 */
  borderRadius?: number,
  /** 
  * 打开时触发
  */
  onOpen?: Function,
  /** 
  * 关闭时触发
  */
  onClose?: Function,
}
```
