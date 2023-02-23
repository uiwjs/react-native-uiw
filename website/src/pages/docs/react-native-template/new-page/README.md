# 新增页面

这里的『页面』指配置了路由，能够通过链接直接访问的模块。

## 手动创建

在 src / pages 下创建新的 js 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件
```bash
src
  models
  pages
+   NewPage
+     index.js
  ...
...
package.json
```

为了更好的演示，我们初始化NewPage/index.js的内容如下：
```jsx
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class MyNewPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>我的</Text>
        </View>
      </SafeAreaView>
    );
  }
}
```
将文件加入菜单和路由

在 src / routes 下homeTab.js中使用 component 配置我们页面到路由中
```jsx
import MyNewPage from '../pages/NewPage';

export const stackPageData = [
  {
    name: 'MyNewPage',
    component: MyNewPage,
    options: {
      title: '我的',
    },
  },
];
```
路由配置完成后，访问页面即可看到效果，如需要配置 `title`，`tabBarIcon`，`header`等更多设置可以在这里找到[React Navigation](https://reactnavigation.org/docs/stack-navigator/)

## 新增 api

在 src / services 文件夹下创建本模块对应的 api 服务

## 新增组件

个人写项目的习惯，在全局的 @/components 只会写一些全局的组件，如各种搜索组件，封装的日期组件等等能被公用的组件。每个页面或者模块特定的业务组件则会写在当前 pages 下面。

## 新增样式

页面的样式和组件是一个道理，全局的 @/styles 放置一下全局公用的样式，每一个页面的样式就写在当前 pages 下面
```jsx
const styles = StyleSheet.create({
  content: {
    marginTop: 50,
  },
  btnStyle: {
    borderRadius: 4,
    margin: 16,
  },
})
```
具体请参照官方文档[样式](https://reactnative.cn/docs/style)
