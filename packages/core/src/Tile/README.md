Tile 工具提示
---

像卡片这样的磁贴是显示关于单个主题的相关内容的便捷方式

<!-- ![](https://user-images.githubusercontent.com/57083007/146733959-2fc5e22b-b4a8-4c82-96c7-88e8e4a43f4d.png) -->
<!--rehype:style=zoom: 33%;float: right; margin-left: 15px;-->

### 基础示例

```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Tile } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
       <Tile
          imageSrc={"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"}
          width={200}
          height={200}
          icon={{name: 'uiw',color:'#333333', size: 38}}
          onPress={()=> console.log('点击事件')}
        />
    </Fragment>
  );
}

export default Demo
```

### 自定义标题

```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Tile } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
       <Tile
          width={200}
          height={200}
          imageSrc={"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"}
          icon={{ name: 'uiw',color:'#333333', size: 38 }}
          title="native Tile"
          titleStyle={{color: '#000', fontSize: 25, textAlign:'center', paddingTop: 150}}
        />
    </Fragment>
  );
}

export default Demo
```

### 纯文字
```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Tile } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
       <Tile
          width={200}
          height={200}
          containerStyle={{ marginTop: 10 }}
          imageContainerStyle={{ backgroundColor:'red' }}
          captionStyle={{color: '#666', fontSize: 16, textAlign:'center',paddingHorizontal: 20}}
          caption="像卡片这样的磁贴是显示关于单个主题的相关内容的便捷方式"
        />
    </Fragment>
  );
}

export default Demo
```

### 图片文字内容
```jsx  mdx:preview
import React, { Fragment, useState } from 'react';
import { Tile } from '@uiw/react-native';

function Demo() {
  return (
    <Fragment>
       <Tile
          width={200}
          height={200}
<<<<<<< HEAD
          imageSrc={"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"}
          icon={{ name: 'uiw native tile',color:'#333333', size: 38 }}
          captionStyle={{color: '#aaa', fontSize: 18, textAlign:'center' }}
          caption="The uiw react native Tile component"
=======
          imageSrc={require("https://avatars.githubusercontent.com/u/33082374?s=200&v=4")}
          icon={{ name: 'uiw',color:'#333333', size: 38 }}
          captionStyle={{color: '#666', fontSize: 16, textAlign:'center',paddingHorizontal: 20}}
          caption="uiw react native Tile component"
>>>>>>> 8db27a31 (doc(Tile):  重构工具提示文档)
        />
    </Fragment>
  );
}

export default Demo
```

### TileProps

```ts
import { TileProps } from 'react-native';

export interface TileProps extends TouchableOpacityProps{
    /** 标题内容（可选）*/
    title?: string;
    /** 标题样式 */
    titleStyle?: StyleProp<TextStyle>;
    /** 图标（可选）*/
    icon?:  IconsProps;
    /** 图标样式（可选） */
    iconContainerStyle?: StyleProp<ViewStyle>;
    /** 文本内容（可选） */
    caption?: React.ReactNode;
    /** 文本内容样式（可选） */
    captionStyle?: StyleProp<TextStyle>;
    /** 底部容器样式（可选） */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /** 图片链接（可选） */
    imageSrc?: ImageSourcePropType | string | number;
    /** 图片容器样式（可选） */
    imageContainerStyle?: StyleProp<ViewStyle>;
    /** 文字行数（可选） */
    titleNumberOfLines?: number;
    /** 图片内容样式（可选） */
    containerStyle?: StyleProp<ViewStyle>;
    /** Tile宽度（可选） */
    width?: number;
    /** Tile高度（可选）*/
    height?: number;
    /** Tile透明度（可选）*/
    activeOpacity?: number;
    /** 继承image的api */
    imageProps?: Partial<ImageProps>;
}
```
