(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[76],{1050:function(n,t,o){"use strict";o.r(t),t.default='ButtonGroup \u6309\u94ae\u7ec4\n---\n\n\u7528\u4e8e\u4e00\u7ec4\u6309\u94ae\u7684\u6392\u7248\u5c55\u793a\u3002\n\n<img src=\'https://user-images.githubusercontent.com/57083007/137632086-8441bd1b-e8f9-4c15-828d-ad86310fdb72.png\' alt=\'ButtonGroup\' style=\'zoom:33%;\' />\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport { Button, ButtonGroup } from \'@uiw/react-native\';\n\nclass Demo extends Component {\n  render() {\n    return (\n      <ButtonGroup>\n        <Button type="warning">\u8b66\u544a</Button>\n        <Button type="warning">\u8b66\u544a</Button>\n        <Button type="warning">\u4e3b\u8981</Button>\n        <Button type="warning">\u8b66\u544a</Button>\n      </ButtonGroup>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u8fb9\u6846\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport { View } from \'react-native\';\nimport { Button, ButtonGroup } from \'@uiw/react-native\';\n\nclass Demo extends Component {\n  render() {\n    return (\n      <View>\n        <ButtonGroup bordered={false}>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup bordered={false} color="#ffc107">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n      </View>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u6309\u94ae\u7ec4\u5c3a\u5bf8\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport { View } from \'react-native\';\nimport { Button, ButtonGroup } from \'@uiw/react-native\';\n\nclass Demo extends Component {\n  render() {\n    return (\n      <View>\n        <ButtonGroup size="small">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup color="#ffc107" size="default">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup type="warning" size="large">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup color="#008EF0" size="small">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup color="#28a745" size="small">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n        <Spacing />\n        <ButtonGroup color="#F95C2B" size="small">\n          <Button>\u8b66\u544a</Button>\n          <Button>\u8b66\u544a</Button>\n          <Button>\u4e3b\u8981</Button>\n          <Button>\u8b66\u544a</Button>\n        </ButtonGroup>\n      </View>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n\u96c6\u6210\u7ee7\u627f `Button` \u7ec4\u4ef6\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u5916\u5c42\u5305\u88f9\u7ee7\u627f [`Flex`] \u7ec4\u4ef6\u3002\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `gutter` | \u6309\u94ae\u95f4\u9694\u95f4\u8ddd | Number | - |\n| `inline` | \u8bbe\u7f6e `inline={true}`\uff0c\u5b50\u8282\u70b9 `Button` \u5c5e\u6027\u5c06\u88ab\u8bbe\u7f6e\u4e3a `direction = \'row\';` `wrap = \'wrap\';` | Boolean | `false` |\n'}}]);
//# sourceMappingURL=76.d7a75676.chunk.js.map