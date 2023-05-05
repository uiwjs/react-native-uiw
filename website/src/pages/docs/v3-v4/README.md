从 V3 到 V4
===

### 升级准备
- 1.请先升级到 3.x 的最新版本。

### 技术调整
- 1.`react` 升级至 `18.0.0`
- 2.`react-native` 升级至 `0.69.1`
- 3.新增主题色和`theme`文档使用说明，支持明暗主题适配 ，主题色为 `#3578e5`
- 4.组件调整

### 组件调整

- 1.VerificationCode 验证码倒计时组件 [`589`](https://github.com/uiwjs/react-native-uiw/pull/589)
- 2.Accordion 手风琴组件 [`588`](https://github.com/uiwjs/react-native-uiw/pull/588)
- 3.List组件 titleLabelStyle 属性支持 [`548`](https://github.com/uiwjs/react-native-uiw/pull/548)
- 4.ImagePicker 图片上传组件 [`2674`](https://github.com/uiwjs/react-native-uiw/actions/runs/4664460047)
- 5.DatePeriodInput 日期区间选择器 [`553`](https://github.com/uiwjs/react-native-uiw/pull/553)
- 6.Tree 树形控件 [`590`](https://github.com/uiwjs/react-native-uiw/pull/590)
- 7.ImagePicker 图片保存功能 [`2691`](https://github.com/uiwjs/react-native-uiw/actions/runs/4687708113)
- 8.重构Progress组件 变更参数  [`595`](https://github.com/uiwjs/react-native-uiw/pull/595)
- 9.新增useImage hooks

### 修复功能

- 🐞 fix: 修复Switch初始值(默认值)不能正确显示状态 [`583`](https://github.com/uiwjs/react-native-uiw/pull/583)
- 🐞 fix: 修复SpeedDial文档遮挡，无法点击问题 [`545`](https://github.com/uiwjs/react-native-uiw/pull/545)
- 🐞 fix: 修复选项卡组件报错和展示溢出问题 [`550`](https://github.com/uiwjs/react-native-uiw/pull/550)
- 🐞 fix: 修复SpeedDial层级较低组件无法选中问题 [`553`](https://github.com/uiwjs/react-native-uiw/pull/553)
- 🐞 fix: 修复android保存图片报错 [`86ac78f`](https://github.com/uiwjs/react-native-uiw/actions/runs/4695870443)
- 🐞 fix: 修复ActionSheet弹窗按钮的点击区域 [`562`](https://github.com/uiwjs/react-native-uiw/pull/562)
- 🐞 fix: 修复文本输入框组件文档 [`541`](https://github.com/uiwjs/react-native-uiw/pull/541)

### 开始升级

#### @uiw/react-native依赖层升级
```diff
  "dependencies": {
     ...
     
-    "@uiw/react-native": "3.2.3",
-    "react-native-svg": "12.1.1",
-    "react-native-gesture-handler": "~2.5.0",
+    "@uiw/react-native": "4.0.6",
+    "react-native-svg": "13.9.0",
+    "react-native-gesture-handler": "2.8.0",
  ...
  }
```

#### 安装@uiw/react-native-image-picker
`如果你要使用ImagePicker组件,你需要安装以下依赖`
```diff
  "dependencies": {
     ...
+    "@uiw/react-native-image-picker": "4.0.6",
+    "react-native-image-picker":"^5.3.1",
+    "react-native-image-viewing":"~0.2.2",
+    "@react-native-camera-roll/camera-roll":"5.3.1" 
  ...
  }
```


#### 代码层修改

#### ThemeProvider 基本用法

使用 ThemeProvider 更好地支持动态主题。   

当然，也可以不使用 ThemeProvider，但是就没有更优美的动态主题呢。  

在app.tsx入口文件添加如下  

```diff
import { ThemeProvider,theme } from '@uiw/react-native';

+ <ThemeProvider theme={theme.lightTheme}>
  {/** 其他Provider */}
+ </ThemeProvider>;
```

#### VerificationCode 基本用法

```diff
import React from 'react';
import { View } from 'react-native';
import { VerificationCode } from '@uiw/react-native'

const Demo = () => {
+    const [value, setValue] = useState('');
    return (
      <View>
+        <VerificationCode
+           value={value}
+           count={3}
+           onChange={(val) => console.log(val)}
+           outerStyle={{ borderWidth: 1, borderColor: "#ccc" }}
+         />
      </View>
    )
  }
}
```

#### Tree 基本用法

```diff
import React from 'react';
import { View } from 'react-native';
import { Tree } from '@uiw/react-native'

const Demo = () => {
+   const option = [
+     {
+       label: '一栋',
+       value: '01',
+       children: [
+         {
+           label: '01-1',
+           value: '01-1',
+           children: [{label: 01-1-1', value: '01-1-1'}],
+         },
+       ],
+     },
+   ]
   return (
      <View>
+        <Tree treeData={option} defaultExpandAll />
      </View>
    )
  }
}
```

#### Accordion 基本用法 及 新增属性

```diff
import React from 'react';
import { View } from 'react-native';
import { Accordion } from '@uiw/react-native'

const Demo = () => {
+    const contents = [
+  {
+    title: <Text>Section 1</Text>,
+    content: (
+      <View>
+        <Text>Content of section 1</Text>
+        <Image source={{uri: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg'}} style={{height: 180}} />
+      </View>
+    ),
+  },
+  {
+    title: <Text>Section 2</Text>,
+    content: (
+      <View>
+        <Text>Content of section 2</Text>
+        <Image source={{uri: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg'}} style={{height: 180}} />
+      </View>
+    ),
+  },
    return (
      <View>
+         <Accordion sections={contents} />
          {/** isMultiple 是否可以展开多个.默认为是,当前为否 */}
+          <Accordion sections={contents} isMultiple={false} />
          {/** iconShow 是否展示右侧图标,默认为是,当前为否 */}
+          <Accordion sections={contents} iconShow={false} />
          {/** iconSize 设置右侧图标尺寸大小 */}
+          <Accordion sections={contents} iconSize={30} />
          {/** accordionStyle 每行列表手风琴样式*/}
+         <Accordion sections={contents} accordionStyle={{backgroundColor: '#3578e5'}} />
          {/** contentStyle 展开手风琴内容样式 */}
+         <Accordion sections={contents} contentStyle={{backgroundColor: '#FFD21D'}} />
      </View>
    )
  }
}
```
#### ImagePicker 和 useImage 基本用法

```diff
import React from 'react';
import ImagePicker, { File,useImage } from '@uiw/react-native-image-picker';
import { Pressable,View } from 'react-native';
const Demo = () => {
  const { launchLibrary, launchCamera } = useImage({
    onSuccess: (result) => {
      console.log('result', result);
    }
  })
   return (
      <View>
+       <ImagePicker
+          upload={async(file: File[]) => {
+            let imageList: string[] = [];
+            await file.forEach(file => imageList.push(file.uri));
+            return imageList;
+          }}
+          selectionLimit={2}
+       />
+        <Pressable onPress={launchLibrary}><Text color="primary_background">打开相册</Text></Pressable>
+        <Pressable onPress={launchCamera}><Text color="primary_background">打开摄像头</Text></Pressable>
      </View>
    )
  }
}
```

#### DatePeriodInput 基本用法

```diff
import React,{useState} from 'react';
import { DatePeriodInput } from '@uiw/react-native'
import { View } from 'react-native';


const Demo = () => {
  const [value, setValue] = useState('');
   return (
      <View>
+       <DatePeriodInput
+         value={value}
+         onChange={date =>setState(date)}
+       />
      </View>
    )
  }
}
```
