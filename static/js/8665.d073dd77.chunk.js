(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8665],{59940:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(18489),i=n(83738),o=n(17186),a=n(93133),l=n(53929),c=n(98012),s=n(17285),u=n(84488),d=n(93539),f=n(71027);function p(e){var t=e.path,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[t&&n&&(0,f.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(c.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var m,x,h=n(74513),g=["path"],v=["inline","node"],_=["data-meta"],j=l.ZP.div(m||(m=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,l.ZP)(a.Z)(x||(x=(0,o.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n},y=function(e){var t=e.path,n=(0,i.Z)(e,g),o=u.ZP.Preview,a=u.ZP.Code,l=u.ZP.Toolbar,m=(0,d.useRef)(null);return(0,f.jsxs)(j,{ref:m,children:[(0,f.jsx)(Z,(0,r.Z)((0,r.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,c=e.inline,d=e.node,p=(0,i.Z)(e,v),m=p["data-meta"],x=(0,i.Z)(p,_);if(c||!(0,s.pN)(m))return(0,f.jsx)("code",(0,r.Z)({},p));var h=null===(t=d.position)||void 0===t?void 0:t.start.line,g=(0,s.Mx)(m)||String(h),j=n.components["".concat(g)];if(g&&"function"===typeof j){var Z=n.data[g].value||"",y=(0,s.aE)(m);return(0,f.jsxs)(u.ZP,{disableCheckered:b(y,"disableCheckered",!0),bordered:b(y,"bordered",!0),children:[(0,f.jsx)(o,{children:(0,f.jsx)(j,{})}),(0,f.jsx)(l,{text:Z,copied:b(y,"copied",!0),children:y.title||"\u793a\u4f8b"}),(0,f.jsx)(a,{children:(0,f.jsx)("code",(0,r.Z)({},x))})]})}return(0,f.jsx)("code",(0,r.Z)({},x))}}})),(0,f.jsx)(h.Z,{}),(0,f.jsx)(p,{path:t}),(0,f.jsx)(c.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,f.jsx)(c.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,f.jsx)(c.JO,{type:"arrow-up"})},percent:t})}})]})}},61670:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(18489),i=n(59940),o={components:{11:function(){var e=o(n(93539)),t=n(7804),r=o(n(31877)),i=o(n(37322));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{img:e.default.createElement(i.default,{name:"pay-circle-o",size:60,fill:"#008EF0"}),title:"\u652f\u4ed8\u6210\u529f",message:e.default.createElement(t.Text,null,"998.00\u5143 ")})}}()},data:{11:{name:11,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Result = _interopRequireDefault(require("@uiw/react-native/lib/Result"));\nvar _Icon = _interopRequireDefault(require("@uiw/react-native/lib/Icon"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Result["default"], {\n    img: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n      name: "pay-circle-o",\n      size: 60,\n      fill: "#008EF0"\n    }),\n    title: "\\u652F\\u4ED8\\u6210\\u529F",\n    message: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "998.00\\u5143 ")\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Text } from 'react-native';\nimport { Result, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Result\n      img={\n        <Icon name=\"pay-circle-o\" size={60} fill='#008EF0'/>\n      }\n      title=\"\u652f\u4ed8\u6210\u529f\"\n      message={<Text>998.00\u5143 </Text>}\n    />\n  );\n}\nexport default Demo"}},source:"Result \u7ed3\u679c\u9875\n---\n\n\u5728\u6574\u5f20\u9875\u9762\u4e2d\u7ec4\u7ec7\u63d2\u753b\u3001\u56fe\u6807\u3001\u6587\u5b57\u7b49\u5185\u5bb9\uff0c\u5411\u7528\u6237\u53cd\u9988\u64cd\u4f5c\u7ed3\u679c\u3002\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/140004296-414edcc2-c809-4fcf-a147-5088757ea7b1.png) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Text } from 'react-native';\nimport { Result, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Result\n      img={\n        <Icon name=\"pay-circle-o\" size={60} fill='#008EF0'/>\n      }\n      title=\"\u652f\u4ed8\u6210\u529f\"\n      message={<Text>998.00\u5143 </Text>}\n    />\n  );\n}\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `img` | \u63d2\u56fe\u5143\u7d20 (\u53ef\u4ee5\u4e3a`<img src=\"\" />`/`<Icon type=\"\" />`\u7b49) | ReactNode | - |\n| `title` | title \u6587\u6848 | ReactNode | - |\n| `message` | message \u6587\u6848| ReactNode | - |\n"},a=n(71027),l=function(){return(0,a.jsx)(i.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"/packages/core/src/Result/README.md"}))}},37322:function(e,t,n){"use strict";n.r(t);var r=n(18489),i=n(83738),o=(n(93539),n(36893)),a=n.n(o),l=n(80464),c=n(71027),s=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,n=void 0===t?26:t,u=e.name,d=e.fill,f=void 0===d?"#000000":d,p=e.stroke,m=e.xml,x=e.paths,h=e.color,g=(0,i.Z)(e,s);if(m)return(0,c.jsx)(o.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:m,height:n,width:n},g));var v=x;if(!v){if(!u||!l[u])return null;v=l[u]}return(0,c.jsx)(a(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:h||f,stroke:p,height:n,width:n,viewBox:"0 0 20 20"},g),{},{children:v.map((function(e,t){return(0,c.jsx)(o.Path,{d:e,fillRule:"evenodd"},t)}))}))}},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(18489),i=n(83738),o=(n(93539),n(62453)),a=n(12720),l=n(37068),c=n(64739),s=n(71027),u=["children"],d=["style","title","message","img"];function f(e){var t=e.children,n=(0,i.Z)(e,u);return"string"===typeof t||t&&"Text"===t.type.displayName?(0,s.jsx)(o.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t})):(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t}))}function p(e){var t=e.style,n=e.title,o=e.message,u=e.img,p=(0,i.Z)(e,d),m=(0,c.useTheme)(),x=function(e){var t=e.bgColor,n=e.textColor,r=e.messageColor;return l.Z.create({defalut:{justifyContent:"center",alignItems:"center",backgroundColor:t,paddingTop:30,paddingBottom:21},title:{fontSize:21,marginTop:15,paddingHorizontal:15,color:n},message:{fontSize:16,marginTop:9,paddingHorizontal:15,lineHeight:18,color:r}})}({bgColor:m.colors.mask,textColor:m.colors.primary_text,messageColor:m.colors.text});return(0,s.jsxs)(a.Z,(0,r.Z)((0,r.Z)({style:[x.defalut,t]},p),{},{children:[u,n&&(0,s.jsx)(f,{style:x.title,children:n}),o&&(0,s.jsx)(f,{style:x.message,children:o})]}))}p.defaultProps={}},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=8665.d073dd77.chunk.js.map