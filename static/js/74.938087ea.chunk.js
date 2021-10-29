(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[74],{1062:function(e,n,t){"use strict";t.r(n),n.default="Badge \u6807\u8bb0\n---\n\n<img src='https://user-images.githubusercontent.com/57083007/137631808-f3899eb4-69c1-4dd5-a686-0f8bb38fe4b6.png' alt='Badge' style='zoom:33%;' />\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" color=\"red\" />\n    </View>\n  );\n}\n```\n\n### Props\n\n\u7ee7\u627f [View](https://facebook.github.io/react-native/docs/view#props) \u7ec4\u4ef6\u3002\n\n```ts\nimport { ViewProps } from 'react-native';\n\nexport interface BadgeProps extends ViewProps {\n  children?: React.ReactNode;\n  /** \u6807\u8bb0\u989c\u8272 */\n  color?: colors.Colors | string;\n  /** \u6587\u672c\u5185\u5bb9 */\n  text?: string | Element;\n  /**\n   * \u8bbe\u7f6e\u5706\u89d2\uff0c\u9ed8\u8ba4 `12`\n   */\n  rounded?: number;\n  /** \u8bbe\u7f6e\u7c7b\u578b */\n  type?: 'dot' | 'text';\n  /** \u6587\u672c\u6837\u5f0f */\n  textStyles?: StyleProp<TextStyle>;\n}\n```"}}]);
//# sourceMappingURL=74.938087ea.chunk.js.map