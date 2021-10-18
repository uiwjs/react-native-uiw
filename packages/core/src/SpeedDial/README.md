SpeedDial 悬浮标记
---

SpeedDial 悬浮标记组件按下时，浮动动作按钮可以以快速显示标记的形式显示指定相关动作。

### 基础示例

```jsx
import { Fragment } from 'react';
import { SpeedDial, Icon } from '@uiw/react-native';
import { Text } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
      <SpeedDial
        children={[
          {
            icon: 'plus',
            title: <Text>'Add'</Text>,
            onPress:()=>console.log('Add')
          },
          {
            icon: <Icon name='star-on' color="#fff" size={18} />,
            title: 'Star'
          },
          {
            icon: <Icon name='mail' color="#fff" size={18} />,
            title: 'Mail'
          },
          {
            icon: <Icon name='share' color="#fff" size={18} />,
            title: 'Share'
          }
        ]}
      />
    </Fragment>
  );
}
```

### 使用 Icon

```jsx
import { Fragment } from 'react';
import { SpeedDial, Icon } from '@uiw/react-native';
function Demo() {
  return (
    <Fragment>
      <SpeedDial
        icon={['star-on','star-off']}
        children={[
          {
            icon: <Icon name='plus' color="#fff" size={18} />,
            title: <Text>'Add'</Text>,
            onPress:()=>console.log('Add')
          },
          {
            icon: <Icon name='star-on' color="#fff" size={18} />,
            title: 'Star'
          },
          {
            icon: <Icon name='mail' color="#fff" size={18} />,
            title: 'Mail'
          },
          {
            icon: <Icon name='share' color="#fff" size={18} />,
            title: 'Share'
          }
        ]}
      />
    </Fragment>
  );
}
```

### SpeedDial Props

```ts
import { ViewStyle,ViewProps } from 'react-native';
import { icoType,SpeedDialItemProps } from '@uiw/react-native';


export interface SpeedDialProps extends ViewProps {
  /** 显示的图标 [默认显示, 展开显示] */
  icon?: icoType,
  /** 盒子样式 */
  style?: ViewStyle,
  /** 初始距离下边位置 */
  bottom?: number,   // 
  /** 初始距离右边位置 */
  right?: number,   // 
  /** 展开显示的标记 */
  children?: Array<SpeedDialItemProps>,
  /** 是否支持拖拽 */
  isDrag?: boolean,
  /** 动画时间 */
  transitionDuration?: number,
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


### SpeedDialItem Props

```ts
import { TabsItemIconTypes,IconsName } from '@uiw/react-native';

export interface SpeedDialItemProps {
  /** 右边 显示的图标 */
  icon: TabsItemIconTypes,
  /** 左边文字 */
  title: JSX.Element | string | number,
  /** 左边文字盒子样式 */
  titleStyle?: ViewStyle,
  /** 右边图标盒子样式 */
  iconStyle?: ViewStyle,
  /** 
   * 点击右边时触发
   */
  onPress?: Function,
}
```