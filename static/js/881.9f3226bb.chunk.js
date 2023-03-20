(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[881],{85480:function(e,n,t){"use strict";var r,i,o=t(18489),a=t(83738),c=t(17186),s=t(93908),u=t(53929),d=t(51928),p=t(17285),f=t(84488),m=t(93539),l=t(74513),h=t(71027),x=["path"],w=["inline","node"],v=["data-meta"],g=u.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,u.ZP)(s.Z)(i||(i=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t};n.Z=function(e){var n=e.path,t=(0,a.Z)(e,x),r=f.ZP.Preview,i=f.ZP.Code,c=f.ZP.Toolbar,s=(0,m.useRef)(null);return(0,h.jsxs)(g,{ref:s,children:[(0,h.jsx)(Z,(0,o.Z)((0,o.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var n,s=e.inline,u=e.node,d=(0,a.Z)(e,w),m=d["data-meta"],l=(0,a.Z)(d,v);if(s||!(0,p.pN)(m))return(0,h.jsx)("code",(0,o.Z)({},d));var x=null===(n=u.position)||void 0===n?void 0:n.start.line,g=(0,p.Mx)(m)||String(x),Z=t.components["".concat(g)];if(g&&"function"===typeof Z){var j=t.data[g].value||"",y=(0,p.aE)(m);return(0,h.jsxs)(f.ZP,{disableCheckered:b(y,"disableCheckered",!0),bordered:b(y,"bordered",!0),children:[(0,h.jsx)(r,{children:(0,h.jsx)(Z,{})}),(0,h.jsx)(c,{text:j,copied:b(y,"copied",!0),children:y.title||"\u793a\u4f8b"}),(0,h.jsx)(i,{children:(0,h.jsx)("code",(0,o.Z)({},l))})]})}return(0,h.jsx)("code",(0,o.Z)({},l))}}})),(0,h.jsx)(l.Z,{path:n}),(0,h.jsx)(d.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,h.jsx)(d.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,h.jsx)(d.JO,{type:"arrow-up"})},percent:n})}})]})}},48367:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(18489),i=t(85480),o={components:{},data:{},source:"ImageViewer \u56fe\u7247\u67e5\u770b\n---\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/148637929-a8ef7878-c7b6-4af6-af9e-f610cf96ab45.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n\u53ef\u81ea\u5b9a\u4e49\u62d6\u66f3\u62bd\u5c49\u9ad8\u5ea6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport React, { Component } from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo () {\n  return (\n      <ImageViewer />\n    );\n}\nexport default Demo\n```\n\n### \u6307\u5b9a\u56fe\u7247\u5730\u5740\n\n```jsx\nimport React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      src={'https://avatars.githubusercontent.com/u/33082374?s=200&v=4'}\n    />\n  );\n}\nexport default Demo\n```\n\n### \u5c55\u793a\u591a\u5f20\u56fe\u7247\n\n```jsx\nimport React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      defaultIndex={1}\n      src={[\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' },\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' }\n      ]}\n    />\n  );\n}\nexport default Demo\n```\n\n### props\n\n\u7ec4\u4ef6\u7ee7\u627f [`ViewProps`](https://reactnative.dev/docs/view)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `width` | \u56fe\u7247\u5bbd\u5ea6 | `number` | - |\n| `height` | \u56fe\u7247\u9ad8\u5ea6 | `number` | - |\n| `src` | \u56fe\u50cf\u6e90\uff08\u8fdc\u7a0bURL\u6216\u672c\u5730\u6587\u4ef6\u8d44\u6e90) | `'string' \\| 'number'` | - |\n| `defaultIndex` | \u9ed8\u8ba4\u5c55\u793a\u7b2c\u51e0\u5f20\u56fe\u7247 | `number` | - |\n"},a=t(71027),c=function(){return(0,a.jsx)(i.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"/packages/core/src/ImageViewer/README.md"}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=881.9f3226bb.chunk.js.map