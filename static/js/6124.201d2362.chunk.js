(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6124],{85480:function(e,t,n){"use strict";var r,o,a=n(18489),i=n(83738),u=n(17186),l=n(93908),c=n(53929),d=n(51928),s=n(17285),f=n(84488),p=n(93539),m=n(74513),g=n(71027),b=["path"],y=["inline","node"],_=["data-meta"],v=c.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),h=(0,c.ZP)(l.Z)(o||(o=(0,u.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),x=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n};t.Z=function(e){var t=e.path,n=(0,i.Z)(e,b),r=f.ZP.Preview,o=f.ZP.Code,u=f.ZP.Toolbar,l=(0,p.useRef)(null);return(0,g.jsxs)(v,{ref:l,children:[(0,g.jsx)(h,(0,a.Z)((0,a.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,l=e.inline,c=e.node,d=(0,i.Z)(e,y),p=d["data-meta"],m=(0,i.Z)(d,_);if(l||!(0,s.pN)(p))return(0,g.jsx)("code",(0,a.Z)({},d));var b=null===(t=c.position)||void 0===t?void 0:t.start.line,v=(0,s.Mx)(p)||String(b),h=n.components["".concat(v)];if(v&&"function"===typeof h){var D=n.data[v].value||"",E=(0,s.aE)(p);return(0,g.jsxs)(f.ZP,{disableCheckered:x(E,"disableCheckered",!0),bordered:x(E,"bordered",!0),children:[(0,g.jsx)(r,{children:(0,g.jsx)(h,{})}),(0,g.jsx)(u,{text:D,copied:x(E,"copied",!0),children:E.title||"\u793a\u4f8b"}),(0,g.jsx)(o,{children:(0,g.jsx)("code",(0,a.Z)({},m))})]})}return(0,g.jsx)("code",(0,a.Z)({},m))}}})),(0,g.jsx)(m.Z,{path:t}),(0,g.jsx)(d.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,g.jsx)(d.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,g.jsx)(d.JO,{type:"arrow-up"})},percent:t})}})]})}},11856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(18489),o=n(85480),a={components:{12:function(){var e=a(n(93539)),t=a(n(27789)),r=a(n(44235)),o=a(n(59430));function a(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.default,null,e.default.createElement(o.default,null,e.default.createElement(r.default,{type:"warning"},"\u8b66\u544a"),e.default.createElement(r.default,{type:"warning"},"\u8b66\u544a")))}}(),33:function(){var e=r(n(93539)),t=(r(n(44235)),r(n(27789)));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.default,{color:"red"})}}(),49:function(){var e=o(n(93539)),t=o(n(44235)),r=o(n(27789));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{color:"red"},e.default.createElement(t.default,null,"\u9ed8\u8ba4\u6309\u94ae"))}}(),67:function(){var e=o(n(93539)),t=o(n(44235)),r=o(n(27789));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{color:"red",tip:"\u52a0\u8f7d\u4e2d..."},e.default.createElement(t.default,null,"\u9ed8\u8ba4\u6309\u94ae"))}}()},data:{12:{name:12,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ButtonGroup = _interopRequireDefault(require("@uiw/react-native/lib/ButtonGroup"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], null, /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    type: "warning"\n  }, "\\u8B66\\u544A"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    type: "warning"\n  }, "\\u8B66\\u544A")));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Loader, Button, ButtonGroup } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader>\n      <ButtonGroup>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n      </ButtonGroup>\n    </Loader>\n  );\n}\nexport default Demo"},33:{name:33,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red"\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" />\n  );\n}\nexport default Demo"},49:{name:49,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red"\n  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "\\u9ED8\\u8BA4\\u6309\\u94AE"));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo"},67:{name:67,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red",\n    tip: "\\u52A0\\u8F7D\\u4E2D..."\n  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "\\u9ED8\\u8BA4\\u6309\\u94AE"));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button, Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" tip=\"\u52a0\u8f7d\u4e2d...\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo"}},source:"Loader \u52a0\u8f7d\n---\n\n\u8868\u660e\u67d0\u4e2a\u4efb\u52a1\u6b63\u5728\u8fdb\u884c\u4e2d\u3002\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/139398047-e59f2b9d-ced1-46d2-b45c-b9e35d04b825.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Loader, Button, ButtonGroup } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader>\n      <ButtonGroup>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n      </ButtonGroup>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u989c\u8272\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" />\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u906e\u7f69\u5c42\u989c\u8272\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u63d0\u793a\u6587\u672c\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button, Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" tip=\"\u52a0\u8f7d\u4e2d...\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n\u7ee7\u627f `ActivityIndicator` \u7ec4\u4ef6\u5c5e\u6027 [`ActivityIndicatorProps`](https://facebook.github.io/react-native/docs/activityindicator#props),\u6bd4\u539f\u751f\u7ec4\u4ef6 `ActivityIndicator` \u591a\u51fa\u66f4\u591a\u4e30\u5bcc\u529f\u80fd\u3002\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| color | \u5fae\u8c03\u5668\u7684\u524d\u666f\u8272 | `String` | `gray` |\n| maskColor | \u906e\u7f69\u5c42\u989c\u8272 | `String` | `rgba(255, 255, 255, 0.85)` |\n| size | Loader \u56fe\u6807\u7684\u5927\u5c0f\uff08\u9ed8\u8ba4\u4e3a `small`\uff09 | `large`, `small` | - |\n| loading | \u662f\u663e\u793a`Indicator`\uff08true\uff09\u8fd8\u662f\u9690\u85cf`Indicator`\uff08false\uff09 | `Boolean` | `true` |\n| vertical | \u52a8\u753b\u56fe\u6807\u4e0e\u6587\u5b57\u5782\u76f4\u663e\u793a | `Boolean` | - |\n| rounded | \u8bbe\u7f6e\u6309\u94ae\u5706\u89d2,\u7528\u4e8e\u52a0\u8f7d\u5185\u5bb9\u4e3a\u5706\u89d2\u7684\u60c5\u51b5\uff09 | `Number` | - |\n| tip | \u5f53\u4f5c\u4e3a\u5305\u88f9\u5143\u7d20\u65f6,\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848 | `String`, `ReactNode` | - |\n"},i=n(71027),u=function(){return(0,i.jsx)(o.Z,(0,r.Z)((0,r.Z)({},a),{},{path:"/packages/core/src/Loader/README.md"}))}},44235:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(18489),o=n(83738),a=n(93539),i=n(2894),u=n(88514),l=n(37068),c=n(3143),d=n(28351),s=n(71027),f=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function p(e){var t,n,l,p,g,b=e.children,y=e.style,_=e.textStyle,v=e.rounded,h=e.bordered,x=e.color,D=e.type,E=e.size,B=e.disabled,F=e.loading,w=(0,o.Z)(e,f);switch(D){case"warning":t=c.O9.yellow;break;case"primary":t=c.O9.blue;break;case"success":t=c.O9.green;break;case"danger":t=c.O9.red;break;case"light":t=c.O9.white;break;case"dark":t=c.O9.black}t&&(t=(0,c.$_)(t).rgb().string()),D&&(n=(0,c.$_)(t).isLight()?(0,c.$_)(c.O9.black).rgb().string():(0,c.$_)(c.O9.white).rgb().string()),D||(l=(0,c.$_)(c.O9.black).alpha(.32).rgb().string(),p=1),B&&(n=(0,c.$_)(n).alpha(.3).rgb().string()),x&&(t=(0,c.$_)(x).rgb().string(),n=(0,c.$_)(x).isLight()?(0,c.$_)(x).darken(.9).string():(0,c.$_)(x).lighten(.9).string()),!v||"number"!==typeof v&&"boolean"!==typeof v||(g=v),t&&(l=(0,c.$_)(t).darken(.2).string(),p=1),h||(p=0);var Z={backgroundColor:t||"#fff5",borderColor:l,borderWidth:p,borderRadius:g},j={color:n},C={};E&&m[E]&&(C=m[E]);var R={},k="".concat(E,"Box");return E&&m[k]&&(R=m[k]),b?(0,s.jsxs)(i.Z,(0,r.Z)((0,r.Z)({testID:"RNE__Button__wrap",style:[m.button,m.content,Z,R,y],disabled:B},w),{},{children:[F&&(0,s.jsx)(u.Z,{size:16,color:n,style:m.icon}),a.Children.toArray(b).map((function(e,t){return(0,s.jsx)(d.default,{testID:"RNE__Button__div",style:[C,m.label,j,_],children:e},t)}))]})):null}p.defaultProps={activeOpacity:.5,rounded:5,bordered:!0,size:"default"};var m=l.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},59430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(18489),o=n(83738),a=n(93539),i=n(37068),u=n(18401),l=n(71027),c=["children","gutter","inline","size","rounded","color","type","bordered","disabled","textStyle","direction","justify","align","wrap"],d=i.Z.create({default:{display:"flex",flexDirection:"row",flexWrap:"wrap"}});function s(e){var t=e.children,n=e.gutter,s=e.inline,f=void 0!==s&&s,p=e.size,m=e.rounded,g=e.color,b=e.type,y=e.bordered,_=void 0===y||y,v=e.disabled,h=e.textStyle,x=e.direction,D=e.justify,E=e.align,B=e.wrap,F=(0,o.Z)(e,c),w={color:g,type:b,bordered:_,disabled:v,textStyle:h},Z={direction:x,justify:D,align:E,wrap:B},j=a.Children.toArray(t);return f&&(Z.direction="row",Z.wrap="wrap"),(0,l.jsx)(u.default,(0,r.Z)((0,r.Z)((0,r.Z)({testID:"RNE__ButtonGroup__wrap",style:d.default},Z),F),{},{children:j.map((function(e,o){if(!a.isValidElement(e))return null;var u={flex:f?0:1};return f&&n&&(u.marginVertical=n/2),n||(1!==j.length&&(0===o||o<j.length-1)&&(u.borderTopRightRadius=0,u.borderBottomRightRadius=0),j.length>0&&0!==o&&(u.borderTopLeftRadius=0,u.borderBottomLeftRadius=0)),_||(u.borderWidth=0),_&&!n&&((o>0&&o<t.length-1||0===o)&&(u.borderRightWidth=i.Z.hairlineWidth),o>0&&o<t.length&&(u.borderLeftWidth=i.Z.hairlineWidth)),n&&f?u.marginHorizontal=n/2:n&&0!==o&&(u.marginLeft=n/2),a.cloneElement(e,(0,r.Z)((0,r.Z)((0,r.Z)({},w),e.props),{},{size:p,rounded:m,style:[u,e.props.style]}))}))}))}},18401:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(18489),o=n(93539),a=n(12720),i=n(71027);function u(e){return(0,i.jsx)(a.Z,(0,r.Z)({},e))}function l(e){var t=e.direction,n=e.justify,l=e.align,c=e.wrap,d=e.children,s=e.style,f={};return t&&(f.flexDirection=t),c&&(f.flexWrap=c),n&&(f.justifyContent=n.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end").replace(/^between$/g,"space-between").replace(/^around$/g,"space-around").replace(/^evenly$/g,"space-evenly")),l&&(f.alignItems=l.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end")),(0,i.jsx)(a.Z,{testID:"RNE__Flex__wrap",style:[f,s],children:d&&o.Children.map(d,(function(e){return o.isValidElement(e)?e.type&&"FlexItem"===e.type.displayName?o.cloneElement((0,i.jsx)(u,{}),(0,r.Z)((0,r.Z)({},e.props),{},{style:[{flex:1},e.props.style]})):e:null}))})}l.defaultProps={direction:"row",justify:"start",wrap:"nowrap",align:"start"},l.Item=u;var c=l},27789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(18489),o=n(83738),a=(n(93539),n(37068)),i=n(88514),u=n(12720),l=n(62453),c=n(71027),d=["children","color","maskColor","rounded","loading","tip","size","vertical"],s=a.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}});function f(e){var t=e.children,n=e.color,a=void 0===n?"gray":n,f=e.maskColor,p=void 0===f?"rgba(255, 255, 255, 0.85)":f,m=e.rounded,g=e.loading,b=void 0===g||g,y=e.tip,_=e.size,v=void 0===_?"small":_,h=e.vertical,x=(0,o.Z)(e,d),D={};if(p&&(D.backgroundColor=p),m&&(D.borderRadius=m),h&&(D.flexDirection="column"),!t&&!y)return(0,c.jsx)(i.Z,{animating:b,size:v,color:a});var E=y||b?(0,c.jsxs)(u.Z,{style:[s[b?"defalut":"stopActivity"],D],children:[(0,c.jsx)(i.Z,{animating:b,size:v,color:a}),y&&("string"===typeof y?(0,c.jsx)(l.Z,{style:{color:a},children:y}):(0,c.jsx)(u.Z,{children:y}))]}):null;return!t&&y?E:(0,c.jsxs)(u.Z,(0,r.Z)((0,r.Z)({},x),{},{children:[E,t]}))}},28351:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(18489),o=n(83738),a=n(93539),i=n(62453),u=n(71027),l=["children"];function c(e){var t=e.children,n=(0,o.Z)(e,l);return t?a.Children.toArray(t).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t})):(0,u.jsx)(a.Fragment,{children:a.Children.toArray(t).map((function(e,t){return"string"===typeof e?(0,a.createElement)(i.Z,(0,r.Z)((0,r.Z)({},n),{},{children:e,key:t})):a.isValidElement(e)?a.cloneElement(e,(0,r.Z)({key:t},n)):void 0})).filter(Boolean)}):null}},85153:function(e,t,n){"use strict";n.r(t),n.d(t,{black:function(){return d},blue:function(){return o},colorsPalette:function(){return f},cyan:function(){return a},green:function(){return r},navy:function(){return i},orange:function(){return l},red:function(){return c},white:function(){return s},yellow:function(){return u}});var r="#28a745",o="#008EF0",a="#1EABCD",i="#393E48",u="#ffc107",l="#F95C2B",c="#dc3545",d="#000000",s="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,n){"use strict";n.d(t,{B:function(){return u},D:function(){return i}});var r=n(93539),o=n(66897),a=n(80121);function i(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function u(e){var t=e.value,n=e.defaultValue,i=e.onChange,u=(0,o.Z)(),l=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(l.current=t);var c=(0,a.Z)((function(e){void 0===t&&(l.current=e,u()),null===i||void 0===i||i(e)}));return[l.current,c]}},3143:function(e,t,n){"use strict";n.d(t,{$_:function(){return o.a},D9:function(){return i.D},O9:function(){return a}});var r=n(65965),o=n.n(r),a=n(85153),i=n(63941)},88514:function(e,t,n){"use strict";var r=n(57078),o=n(89172),a=n(93539),i=n(37068),u=n(12720),l=["animating","color","hidesWhenStopped","size","style"],c=function(e){return a.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},d=a.forwardRef((function(e,t){var n=e.animating,i=void 0===n||n,d=e.color,p=void 0===d?"#1976D2":d,m=e.hidesWhenStopped,g=void 0===m||m,b=e.size,y=void 0===b?"small":b,_=e.style,v=(0,o.Z)(e,l),h=a.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},c({stroke:p,opacity:.2}),c({stroke:p,strokeDasharray:80,strokeDashoffset:60}));return a.createElement(u.Z,(0,r.Z)({},v,{accessibilityRole:"progressbar",accessibilityValueMax:1,accessibilityValueMin:0,ref:t,style:[s.container,_]}),a.createElement(u.Z,{children:h,style:["number"===typeof y?{height:y,width:y}:f[y],s.animation,!i&&s.animationPause,!i&&g&&s.hidesWhenStopped]}))}));d.displayName="ActivityIndicator";var s=i.Z.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),f=i.Z.create({small:{width:20,height:20},large:{width:36,height:36}});t.Z=d},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=6124.201d2362.chunk.js.map