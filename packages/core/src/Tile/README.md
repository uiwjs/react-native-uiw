Tile 工具提示
---

像卡片这样的磁贴是显示关于单个主题的相关内容的便捷方式

### 基础示例

```jsx
import { Fragment } from 'react';
import { Tile } from '@uiw/react-native';


function Demo() {
  return (
    <Fragment>
       <Tile
          imageSrc={require('xxx.png')}
          imageProps={{resizeMode:'contain'}}
          containerStyle={{marginTop: 10}}
          imageContainerStyle={{backgroundColor:'#ccc'}}
          title="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
          titleStyle={{color: '#000', fontSize: 38, textAlign:'center',paddingTop: 190}}
          caption='mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
          captionStyle={{color: '#666', fontSize: 22, textAlign:'center',paddingHorizontal: 20}}
          iconContainerStyle={{marginTop: 0}}
          titleNumberOfLines={2}
          contentContainerStyle={{ height:320,}}
          icon={{name: 'uiw',color:'#333333', size: 38}}
          activeOpacity={0.9}
          onPress={()=> console.log('点击事件')}
        />
    </Fragment>
  );
}
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
    /** Tile样式（可选） */
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
