# 更新日志

<b><font face="微软雅黑" size=3 color=#3578e5 >V4.0.0</font></b>

`2023-04-14`

**Bug Fixes**

- Switch: 修复switch初始值(默认值)不能正确显示状态 [#583](https://github.com/uiwjs/react-native-uiw/pull/583)
- ActionSheet: 优化弹窗按钮的点击区域 [#562](https://github.com/uiwjs/react-native-uiw/pull/562)
- Input: 优化文本输入框组件文档 [#541](https://github.com/uiwjs/react-native-uiw/pull/541)
- SpeedDial: 修复文档遮挡，无法点击问题 [#545](https://github.com/uiwjs/react-native-uiw/pull/545)
- Tabs: 修复选项卡组件报错和展示溢出问题 [#550](https://github.com/uiwjs/react-native-uiw/pull/550)
- SpeedDial: 修复层级较低组件无法选中问题 [#553](https://github.com/uiwjs/react-native-uiw/pull/553)
- Form: 优化Form示例展示 [#2641](https://github.com/uiwjs/react-native-uiw/actions/runs/4644484377)
- ImagePicker: 修复android保存图片报错 [#2696](https://github.com/uiwjs/react-native-uiw/actions/runs/4695870443)
- Progress: 重构组件 变更参数 

**Feature**

- Theme: 新增主题色 和  theme文档使用说明，支持明暗主题适配 ([#586](https://github.com/uiwjs/react-native-uiw/pull/586))
- VerificationCode: 新增 VerificationCode 验证码倒计时组件 和 文档示例 [#589](https://github.com/uiwjs/react-native-uiw/pull/589)
- Tree: 新增 Tree 树形控件 和 文档示例 [#590](https://github.com/uiwjs/react-native-uiw/pull/590)
- Accordion: 新增 Accordion 手风琴组件  [#588](https://github.com/uiwjs/react-native-uiw/pull/588)
- Accordion: 新增 isMultiple、accordionStyle、iconShow、contentStyle、iconSize 文档示例 [#588](https://github.com/uiwjs/react-native-uiw/pull/588)
- ImagePicker: 新增 ImagePicker 图片上传组件 [#2674](https://github.com/uiwjs/react-native-uiw/actions/runs/4664460047)
- List: 新增 titleLabelStyle 属性支持 [#548](https://github.com/uiwjs/react-native-uiw/pull/548)
- ImagePicker: 新增 ImagePicker 图片保存功能 [#2691](https://github.com/uiwjs/react-native-uiw/actions/runs/4687708113)
- DatePeriodInput: 新增 DatePeriodInput 日期区间选择器 [#553](https://github.com/uiwjs/react-native-uiw/pull/553)

### 1.在app.tsx入口文件添加如下

```diff
import { ThemeProvider,theme } from '@uiw/react-native';

+ <ThemeProvider theme={theme.lightTheme}>
  {/** 其他Provider */}
+ </ThemeProvider>;
```

### 2.VerificationCode 基本用法

```diff
import React from 'react';
import { View } from 'react-native';
import { VerificationCode } from '@uiw/react-native'

const Demo = () => {
+    const [value, setValue] = useState('');
    return (
      <View>
+        <VerificationCode
+              value={value}
+              count={3}
+              onChange={(val) => console.log(val)}
+              outerStyle={{ borderWidth: 1, borderColor: "#ccc" }}
+            />
      </View>
    )
  }
}
```

### 3.Tree 基本用法

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

### 4.Accordion 基本用法 及 新增属性

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

### 5.ImagePicker 基本用法

```diff
import React from 'react';
import { ImagePicker } from '@uiw/react-native'
import { View } from 'react-native';

const Demo = () => {
   return (
      <View>
+         <ImagePicker
+              upload={(file: File[]) => {
+                let imageList: string[] = [];
+                file.forEach(file => imageList.push(file.uri));
+                return imageList;
+              }}
+              selectionLimit={2}
+            />
      </View>
    )
  }
}
```

### 6.DatePeriodInput 基本用法

```diff
import React,{useState} from 'react';
import { DatePeriodInput } from '@uiw/react-native'
import { View } from 'react-native';


const Demo = () => {
  const [value, setValue] = useState('');
   return (
      <View>
+          <DatePeriodInput
+                value={value}
+                onChange={date => {
+                 setState(date);
+                }}
+              />
      </View>
    )
  }
}
```