(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1557],{85480:function(e,n,t){"use strict";var r,o,a=t(1413),i=t(45987),u=t(30168),l=t(31121),c=t(53929),d=t(78069),f=t(17285),s=t(61366),p=t(93539),F=t(71027),x=["inline","node"],v=["data-meta"],m=c.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),E=(0,c.ZP)(l.Z)(o||(o=(0,u.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),g=function(e,n,t){if(Reflect.has(e,n)){var r=Reflect.get(e,n);if("true"===r)return!0;if("false"===r)return!1}return t};n.Z=function(e){var n=(0,p.useRef)(null);return(0,F.jsxs)(m,{ref:n,children:[(0,F.jsx)(E,(0,a.Z)((0,a.Z)({},e),{},{disableCopy:!0,source:e.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var t,r=n.inline,o=n.node,u=(0,i.Z)(n,x),l=u["data-meta"],c=(0,i.Z)(u,v);if(r||!(0,f.pN)(l))return(0,F.jsx)("code",(0,a.Z)({},u));var d=null===(t=o.position)||void 0===t?void 0:t.start.line,p=(0,f.Mx)(l)||String(d),m=e.components["".concat(p)];if(p&&"function"===typeof m){var E=e.data[p].value||"",y=(0,f.aE)(l);return(0,F.jsx)(s.Z,{disableCheckered:g(y,"disableCheckered",!0),disableToolbar:g(y,"disableToolbar",!1),disableCode:g(y,"disableCode",!1),disablePreview:g(y,"disablePreview",!1),bordered:g(y,"bordered",!0),copied:g(y,"copied",!0),background:y.background,toolbar:y.title||"\u793a\u4f8b",code:(0,F.jsx)("code",(0,a.Z)({},c)),text:E,children:(0,F.jsx)(m,{})})}return(0,F.jsx)("code",(0,a.Z)({},c))}}})),(0,F.jsx)(d.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,F.jsx)(d.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,F.jsx)(d.JO,{type:"arrow-up"})},percent:n})}})]})}},34244:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(1413),o=t(85480),a={components:{8:function(){var e=o(t(93539)),n=t(95164),r=o(t(1192));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.View,{style:{flexDirection:"row"}},e.default.createElement(n.Text,null,"\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173"),e.default.createElement(r.default,{text:"\u6807\u8bb0",color:"red"}))}}(),28:function(){var e=o(t(93539)),n=t(95164),r=o(t(1192));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.View,{style:{flexDirection:"row"}},e.default.createElement(n.Text,null,"\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173"),e.default.createElement(r.default,{text:"\u6807\u8bb0",type:"dot",color:"skyblue"}))}}()},data:{8:{name:8,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Badge = _interopRequireDefault(require("@uiw/react-native/lib/Badge"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u4E00\\u6587\\u5E26\\u4F60\\u641E\\u61C2 API \\u7F51\\u5173"), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {\n    text: "\\u6807\\u8BB0",\n    color: "red"\n  }));\n}\nreturn Demo;',language:"jsx",value:"import React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" color=\"red\" />\n    </View>\n  );\n}\n\nexport default Demo;\n"},28:{name:28,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Badge = _interopRequireDefault(require("@uiw/react-native/lib/Badge"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u4E00\\u6587\\u5E26\\u4F60\\u641E\\u61C2 API \\u7F51\\u5173"), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {\n    text: "\\u6807\\u8BB0",\n    type: "dot",\n    color: "skyblue"\n  }));\n}\nreturn Demo;',language:"jsx",value:'import React from "react"\nimport { View, Text } from \'react-native\';\nimport { Badge } from \'@uiw/react-native\';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: \'row\' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text="\u6807\u8bb0" type="dot" color="skyblue" />\n    </View>\n  );\n}\n\nexport default Demo;\n'}},source:"Badge \u6807\u8bb0\n---\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" color=\"red\" />\n    </View>\n  );\n}\n\nexport default Demo;\n\n```\n### \u8bbe\u7f6e\u7c7b\u578b\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" type=\"dot\" color=\"skyblue\" />\n    </View>\n  );\n}\n\nexport default Demo;\n\n```\n\n### Props\n\n\u7ee7\u627f [View](https://facebook.github.io/react-native/docs/view#props) \u7ec4\u4ef6\u3002\n\n```ts\nimport { ViewProps } from 'react-native';\n\nexport interface BadgeProps extends ViewProps {\n  children?: React.ReactNode;\n  /** \u6807\u8bb0\u989c\u8272 */\n  color?: colors.Colors | string;\n  /** \u6587\u672c\u5185\u5bb9 */\n  text?: string | Element;\n  /**\n   * \u8bbe\u7f6e\u5706\u89d2\uff0c\u9ed8\u8ba4 `12`\n   */\n  rounded?: number;\n  /** \u8bbe\u7f6e\u7c7b\u578b */\n  type?: 'dot' | 'text';\n  /** \u6587\u672c\u6837\u5f0f */\n  textStyles?: StyleProp<TextStyle>;\n}\n```"},i=t(71027),u=function(){return(0,i.jsx)(o.Z,(0,r.Z)({},a))}},1192:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(1413),o=t(45987),a=(t(93539),t(37068)),i=t(12720),u=t(62453),l=t(50346),c=t(71027),d=["children","rounded","color","style","type","textStyles"],f=a.Z.create({base:{paddingHorizontal:4,paddingVertical:2,borderRadius:12},text:{backgroundColor:"transparent",textAlign:"center",fontWeight:"600",fontSize:10},dot:{height:6,width:6,marginHorizontal:4,marginVertical:6,borderRadius:3}});function s(e){var n=e.children,t=e.rounded,a=e.color,s=e.style,p=e.type,F=e.textStyles,x=(0,o.Z)(e,d),v=(0,l.$_)(l.O9[a]||a),m=v.luminosity()<.5?"#fff":"#000";if("dot"===p)return(0,c.jsx)(i.Z,{style:[f.dot,{backgroundColor:a},s]});var E=n||(0,c.jsx)(u.Z,{style:[f.text,{color:m},F],children:e.text}),g={borderRadius:t||12};return a&&(g.backgroundColor=v.rgb().string()),(0,c.jsx)(i.Z,(0,r.Z)((0,r.Z)({style:[f.base,g,s]},x),{},{children:E}))}s.defaultProps={color:"primary",type:"text"}},63941:function(e,n,t){"use strict";t.d(n,{B:function(){return u},D:function(){return i}});var r=t(93539),o=t(66897),a=t(80121);function i(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}function u(e){var n=e.value,t=e.defaultValue,i=e.onChange,u=(0,o.Z)(),l=(0,r.useRef)(void 0!==n?n:t);void 0!==n&&(l.current=n);var c=(0,a.Z)((function(e){void 0===n&&(l.current=e,u()),null===i||void 0===i||i(e)}));return[l.current,c]}},50346:function(e,n,t){"use strict";t.d(n,{$_:function(){return a()},O9:function(){return r},D9:function(){return v.D}});var r={};t.r(r),t.d(r,{black:function(){return p},blue:function(){return u},colorsPalette:function(){return x},cyan:function(){return l},green:function(){return i},navy:function(){return c},orange:function(){return f},red:function(){return s},white:function(){return F},yellow:function(){return d}});var o=t(65965),a=t.n(o),i="#28a745",u="#008EF0",l="#1EABCD",c="#393E48",d="#ffc107",f="#F95C2B",s="#dc3545",p="#000000",F="#ffffff",x={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"},v=t(63941)},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=1557.0b0e6fd2.chunk.js.map