(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[100],{731:function(n,e,t){"use strict";t.r(e),e.default='Switch \u5f00\u5173\n---\n\n\u8868\u793a\u4e24\u79cd\u76f8\u4e92\u5bf9\u7acb\u7684\u72b6\u6001\u95f4\u7684\u5207\u6362\uff0c\u591a\u7528\u4e8e\u89e6\u53d1\u300c\u5f00/\u5173\u300d\uff0c\u8fd9\u662f `React Naitve` \u81ea\u5e26\u7684\u7ec4\u4ef6\u91cd\u65b0\u5c01\u88c5\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u4fdd\u6301 iOS/Android \u4e00\u81f4\u7684\u6548\u679c\u3002\n\n> \u81ea\u5e26\u7ec4\u4ef6 Switch \u5df2\u8fc7\u65f6\uff0c\u5c06\u5f88\u5feb\u5220\u9664\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Spacing,Flex, Switch } from \'@uiw/react-native\';\n\nfunction Demo() {\n  return (\n    <Switch />\n  );\n}\n```\n\n## \u5c3a\u5bf8\u5927\u5c0f\n\n\u8fd9\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6\uff0c\u9700\u8981\u4e00\u4e2a `onValueChange` \u56de\u8c03\u6765\u66f4\u65b0\u503c\u5c5e\u6027\uff0c\u4ee5\u4f7f\u8be5\u7ec4\u4ef6\u53cd\u6620\u7528\u6237\u64cd\u4f5c\u3002\n\n```jsx\nimport { Spacing, Flex, Switch } from \'@uiw/react-native\';\n\nfunction Demo() {\n  return (\n    <Flex direction="row">\n      <Switch size="small" />\n      <Spacing type="horizontal" />\n      <Switch />\n      <Spacing type="horizontal" />\n      <Switch size="large" />\n    </Flex>\n  );\n}\n```\n\n## \u53d7\u63a7\u7ec4\u4ef6\n\n\u8fd9\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6\uff0c\u9700\u8981\u4e00\u4e2a `onValueChange` \u56de\u8c03\u6765\u66f4\u65b0\u503c\u5c5e\u6027\uff0c\u4ee5\u4f7f\u8be5\u7ec4\u4ef6\u53cd\u6620\u7528\u6237\u64cd\u4f5c\u3002\n\n```jsx\nimport { useState } from \'react\';\nimport { Spacing,Flex, Switch } from \'@uiw/react-native\';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Switch  checked={checked} onValueChange={() => setChecked(!checked)} />\n  );\n}\n```\n\n## props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c|\n|------|------|-----|------|\n| `checked` | \u662f\u5426\u88ab\u9009\u4e2d | Boolean | `false` |\n| `color` | \u8bbe\u7f6e | Boolean | `false` |\n| `size` | \u5c3a\u5bf8\u5927\u5c0f | `small`, `default`, `large` | `default` |\n| `disabled` | \u5982\u679c\u4e3a`true`\uff0c\u5219\u7528\u6237\u5c06\u65e0\u6cd5\u5207\u6362\u5f00\u5173\u3002 | Boolean | `false` |\n| `trackStyle` | \u8bbe\u7f6e\u80cc\u666f\u6837\u5f0f\u3002 | ViewStyle | - |\n| `thumbStyle` | \u524d\u666f\u5f00\u5173\u624b\u67c4\u7684\u989c\u8272\u3002 | ViewStyle | - |\n| `onValueChange` | \u5f53\u7528\u6237\u5c1d\u8bd5\u66f4\u6539\u5f00\u5173\u7684\u503c\u65f6\u8c03\u7528\u3002 \u63a5\u6536\u65b0\u503c\u4f5c\u4e3a\u53c2\u6570\u3002 | (value: Boolean) => void | `false` |'}}]);
//# sourceMappingURL=100.97b6c4d9.chunk.js.map