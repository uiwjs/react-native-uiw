NoticeBar 通告栏
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 基础示例

```jsx mdx:preview
import React from 'react';
import { Image,View,Text } from 'react-native'
import NoticeBar from '@uiw/react-native/lib/NoticeBar';
import Spacing from '@uiw/react-native/lib/Spacing';

const NoticeBarExample = () => {
  const customIcon = (
    <Image
      source={{
        uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
      }}
      style={{ width: 12, height: 12 }}
    />
  )
  return (
      <View style={{ marginTop: 10 }}>
        <NoticeBar
          onPress={() => console.log('click')}
          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}>
            Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
            delayed during National Day.
        </NoticeBar>
         <Spacing />
        <NoticeBar mode="closable" onPress={() => console.log('will close')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
         <Spacing />
        <NoticeBar mode="closable" icon={customIcon}>
          Customized icon.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="link" onPress={() => console.log('link')}>
          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
          delayed during National Day.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="closable" icon={undefined}>
          Remove the default icon.
        </NoticeBar>
        <Spacing />
        <NoticeBar
          mode="closable"
          action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}>
          Closable demo for `actionText`.
        </NoticeBar>
        <Spacing />
        <NoticeBar mode="link" action={<Text>去看看</Text>}>
          Link demo for `actionText`.
        </NoticeBar>
        <Spacing />
        <NoticeBar
          textStyle={{color: 'blue', fontSize: 20}}
          style={{backgroundColor: 'lightblue', height: 50}}>
          Change demo for `action`.
        </NoticeBar>
      </View>
    )
}
export default NoticeBarExample;
```

### Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode    | 提示类型，可选 `closable`,`link`   | String |  ''  |
| icon    | 在开始位置设置图标  |  ReactNode | `<Icon type={require('./trips.svg')} size="xxs" />`|
| onPress | 点击关闭或者操作区域的回调函数        | () => void |   |
| marqueeProps | marquee 参数 | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| action | 用于替换操作 icon 的文案 | ReactElement | |
| style    | 用于设置通告栏样式  | ViewStyle |  |
| textStyle    | 用于设置通告栏文字样式  | TextStyle |  |
