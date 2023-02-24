# 菜单路由管理

在项目根目录的`src / routes`配置菜单路由
## 配置路由

```js
import React from 'react';
import {Icon} from '@uiw/react-native';
import MyHome from '../pages/MyHome';
import OrderHome from '../pages/OrderHome';
import TransportHome from '../pages/TransportHome';

export default [
  {
    name: 'TransportHome',
    component: TransportHome,
    options: {
      title: '发货',
      tabBarIcon: () => {
        return <Icon name="inbox" size={22} />;
      },
    },
  },
  {
    name: 'OrderHome',
    component: OrderHome,
    options: {
      title: '订单',
      tabBarIcon: () => {
        return <Icon name="file-text" size={22} />;
      },
    },
  },
  {
    name: 'MyHome',
    component: MyHome,
    options: {
      title: '我的',
      tabBarIcon: () => {
        return <Icon name="user" size={22} />;
      },
    },
  },
];

```


## Options

### title

可以用作headerTitle的回退的字符串

### headerShown

 是否显示或隐藏屏幕的标头。默认情况下显示头部。将此设置为false会隐藏标头。

### headerTintColor

为标题着色。更改后退按钮和标题的颜色。

### cardStyle

堆栈中卡片的样式对象。您可以在此处提供自定义背景色来代替默认背景色

### headerBackTitle

iOS上后退按钮使用的标题字符串。默认为前一个场景的headerTitle

路由配置完成后，访问页面即可看到效果，如需要配置 `title`，`tabBarIcon`，`header`等更多设置可以在这里找到[React Navigation](https://reactnavigation.org/docs/stack-navigator/)

## 路由跳转

```js
import React from 'react';
import { Button } from '@uiw/react-native';

const Demo = ({ navigation }) => {

  return (
     <Button
       textStyle={{ fontSize: 16, fontWeight: '200' }}
       bordered={false}
       color="#BFBFBF"
       onPress={() => navigation.replace('SignIn')}>
        跳转
     </Button>
  );
}

```


