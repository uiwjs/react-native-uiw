(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4098],{59940:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(1413),o=r(45987),a=r(30168),i=r(70377),u=r(53929),l=r(78069),c=r(17285),d=r(61366),f=r(93539),s=r(71027);function p(e){var t=e.path,r=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,s.jsxs)("div",{style:{paddingBlock:20},children:[t&&r&&(0,s.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,s.jsx)(l.iz,{type:"vertical"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var x,F,v=["path"],m=["inline","node"],y=["data-meta"],g=u.ZP.div(x||(x=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),E=(0,u.ZP)(i.Z)(F||(F=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(e,t,r){return Reflect.has(e,t)?"true"===Reflect.get(e,t):r},_=function(e){var t=e.path,r=(0,o.Z)(e,v),a=(0,f.useRef)(null);return(0,s.jsxs)(g,{ref:a,children:[(0,s.jsx)(E,(0,n.Z)((0,n.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,t,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var t,a=e.inline,i=e.node,u=(0,o.Z)(e,m),l=u["data-meta"],f=(0,o.Z)(u,y);if(a||!(0,c.pN)(l))return(0,s.jsx)("code",(0,n.Z)({},u));var p=null===(t=i.position)||void 0===t?void 0:t.start.line,x=(0,c.Mx)(l)||String(p),F=r.components["".concat(x)];if(x&&"function"===typeof F){var v=r.data[x].value||"",g=(0,c.aE)(l);return(0,s.jsx)(d.Z,{disableCheckered:b(g,"disableCheckered",!0),disableToolbar:b(g,"disableToolbar",!1),disableCode:b(g,"disableCode",!1),disablePreview:b(g,"disablePreview",!1),bordered:b(g,"bordered",!0),copied:b(g,"copied",!0),background:g.background,toolbar:g.title||"\u793a\u4f8b",code:(0,s.jsx)("code",(0,n.Z)({},f)),text:v,children:(0,s.jsx)(F,{})})}return(0,s.jsx)("code",(0,n.Z)({},f))}}})),(0,s.jsx)(p,{path:t}),(0,s.jsx)(l.kF,{speed:500,children:function(e){var t=e.percent,r=e.scrollToTop;return(0,s.jsx)(l.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,s.jsx)(l.JO,{type:"arrow-up"})},percent:t})}})]})}},34244:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(1413),o=r(59940),a={components:{8:function(){var e=o(r(93539)),t=r(95164),n=o(r(1192));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.View,{style:{flexDirection:"row"}},e.default.createElement(t.Text,null,"\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173"),e.default.createElement(n.default,{text:"\u6807\u8bb0",color:"red"}))}}(),28:function(){var e=o(r(93539)),t=r(95164),n=o(r(1192));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.View,{style:{flexDirection:"row"}},e.default.createElement(t.Text,null,"\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173"),e.default.createElement(n.default,{text:"\u6807\u8bb0",type:"dot",color:"skyblue"}))}}()},data:{8:{name:8,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Badge = _interopRequireDefault(require("@uiw/react-native/lib/Badge"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u4E00\\u6587\\u5E26\\u4F60\\u641E\\u61C2 API \\u7F51\\u5173"), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {\n    text: "\\u6807\\u8BB0",\n    color: "red"\n  }));\n}\nreturn Demo;',language:"jsx",value:"import React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" color=\"red\" />\n    </View>\n  );\n}\n\nexport default Demo;\n"},28:{name:28,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Badge = _interopRequireDefault(require("@uiw/react-native/lib/Badge"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u4E00\\u6587\\u5E26\\u4F60\\u641E\\u61C2 API \\u7F51\\u5173"), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {\n    text: "\\u6807\\u8BB0",\n    type: "dot",\n    color: "skyblue"\n  }));\n}\nreturn Demo;',language:"jsx",value:'import React from "react"\nimport { View, Text } from \'react-native\';\nimport { Badge } from \'@uiw/react-native\';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: \'row\' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text="\u6807\u8bb0" type="dot" color="skyblue" />\n    </View>\n  );\n}\n\nexport default Demo;\n'}},source:"Badge \u6807\u8bb0\n---\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" color=\"red\" />\n    </View>\n  );\n}\n\nexport default Demo;\n\n```\n### \u8bbe\u7f6e\u7c7b\u578b\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { View, Text } from 'react-native';\nimport { Badge } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Text>\u4e00\u6587\u5e26\u4f60\u641e\u61c2 API \u7f51\u5173</Text>\n      <Badge text=\"\u6807\u8bb0\" type=\"dot\" color=\"skyblue\" />\n    </View>\n  );\n}\n\nexport default Demo;\n\n```\n\n### Props\n\n\u7ee7\u627f [View](https://facebook.github.io/react-native/docs/view#props) \u7ec4\u4ef6\u3002\n\n| \u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| --- | --- | --- | --- |\n| color | \u6807\u8bb0\u989c\u8272 | `colors.Colors \\| string` | - |\n| text | \u6587\u672c\u5185\u5bb9 | `string \\| Element` | - |\n| rounded | \u8bbe\u7f6e\u5706\u89d2 | `boolean \\| number` | `12` |\n| textStyles | \u6587\u672c\u6837\u5f0f | `StyleProp<TextStyle>` | - |\n| type | \u8bbe\u7f6e\u7c7b\u578b | `'dot' \\| 'text'` | - |\n| children | \u66f4\u591a\u5185\u5bb9 | `React.ReactNode` | - |\n"},i=r(71027),u=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/Badge/README.md"}))}},1192:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(1413),o=r(45987),a=(r(93539),r(37068)),i=r(12720),u=r(62453),l=r(3143),c=r(71027),d=["children","rounded","color","style","type","textStyles"],f=a.Z.create({base:{paddingHorizontal:4,paddingVertical:2,borderRadius:12},text:{backgroundColor:"transparent",textAlign:"center",fontWeight:"600",fontSize:10},dot:{height:6,width:6,marginHorizontal:4,marginVertical:6,borderRadius:3}});function s(e){var t=e.children,r=e.rounded,a=e.color,s=e.style,p=e.type,x=e.textStyles,F=(0,o.Z)(e,d),v=(0,l.$_)(l.O9[a]||a),m=v.luminosity()<.5?"#fff":"#000";if("dot"===p)return(0,c.jsx)(i.Z,{style:[f.dot,{backgroundColor:a},s]});var y=t||(0,c.jsx)(u.Z,{style:[f.text,{color:m},x],children:e.text}),g={borderRadius:r||12};return a&&(g.backgroundColor=v.rgb().string()),(0,c.jsx)(i.Z,(0,n.Z)((0,n.Z)({style:[f.base,g,s]},F),{},{children:y}))}s.defaultProps={color:"primary",type:"text"}},85153:function(e,t,r){"use strict";r.r(t),r.d(t,{black:function(){return d},blue:function(){return o},colorsPalette:function(){return s},cyan:function(){return a},green:function(){return n},navy:function(){return i},orange:function(){return l},red:function(){return c},white:function(){return f},yellow:function(){return u}});var n="#28a745",o="#008EF0",a="#1EABCD",i="#393E48",u="#ffc107",l="#F95C2B",c="#dc3545",d="#000000",f="#ffffff",s={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,r){"use strict";r.d(t,{B:function(){return u},D:function(){return i}});var n=r(93539),o=r(66897),a=r(80121);function i(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e})),t.current}function u(e){var t=e.value,r=e.defaultValue,i=e.onChange,u=(0,o.Z)(),l=(0,n.useRef)(void 0!==t?t:r);void 0!==t&&(l.current=t);var c=(0,a.Z)((function(e){void 0===t&&(l.current=e,u()),null===i||void 0===i||i(e)}));return[l.current,c]}},3143:function(e,t,r){"use strict";r.d(t,{$_:function(){return o.a},D9:function(){return i.D},O9:function(){return a}});var n=r(65965),o=r.n(n),a=r(85153),i=r(63941)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t},63405:function(e,t,r){var n=r(73897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(63405),o=r(79498),a=r(86116),i=r(42281);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=4098.301b52a4.chunk.js.map