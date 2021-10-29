(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[91],{1071:function(n,e,t){"use strict";t.r(e),e.default="MaskLayer \u906e\u7f69\u5c42\n---\n\n\u7528\u4e8e\u6a21\u6001\u5bf9\u8bdd\u6846\uff0c\u4e2d\u7684\u906e\u7f69\u5c42\u3002\n\n<img src='https://user-images.githubusercontent.com/66067296/139398306-d038225d-0fee-4009-a4f7-a06c7beabf45.gif' alt='MaskLayer' style='zoom:33%;' />\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport { Fragment } from 'react';\nimport { Text,  SafeAreaView } from 'react-native';\nimport { Button, MaskLayer } from '@uiw/react-native';\n\nexport default () => {\n  const [visible, setVisible] = useState(true);\n  return (\n    <Fragment>\n      <MaskLayer\n        visible={visible}\n        onDismiss={() => {\n          setVisible(false);\n        }}>\n        <SafeAreaView>\n          <Text style={{color: '#fff'}}>\u5c55\u793a\u5185\u5bb9</Text>\n        </SafeAreaView>\n      </MaskLayer>\n      <Button\n        onPress={() => {\n          setVisible(true);\n        }}>\n        {visible ? '\u9690\u85cf\u6a21\u6001\u6846' : '\u663e\u793a\u6a21\u6001\u6846'}\n      </Button>\n    </Fragment>\n  );\n}\n```\n\x3c!--End--\x3e\n\n### Props\n\n\u7ee7\u627f\u539f\u751f Modal \u5c5e\u6027 [`ModalProps`](https://facebook.github.io/react-native/docs/modal.html#props)\n\n```typescript\ninterface MaskLayerProps extends RNModalProps {\n  /**\n   * \u906e\u7f69\u5c42\u662f\u5426\u7981\u6b62\u70b9\u51fb\n   * defult: `true`\n   */\n  maskClosable?: boolean;\n  /**\n   * \u662f\u5426\u9690\u85cf\n   */\n  visible?: boolean;\n  /**\n   * \u906e\u7f69\u5c42\u900f\u660e\u5ea6\n   * defult: `0.6`\n   */\n  opacity?: number;\n  /**\n   * \u9690\u85cf\u6d88\u9664\u56de\u8c03\u4e8b\u4ef6\n   */\n  onDismiss?: () => void;\n  children?: JSX.Element;\n}\n```\n"}}]);
//# sourceMappingURL=91.9f148544.chunk.js.map