(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21],{59940:function(n,e,t){"use strict";t.d(e,{Z:function(){return Z}});var r=t(1413),o=t(45987),i=t(30168),s=t(70377),a=t(53929),c=t(78069),u=t(17285),d=t(61366),l=t(93539),p=t(71027);function f(n){var e=n.path,t=/^http/.test(e||"")?e:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===e||void 0===e?void 0:e.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[e&&t&&(0,p.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(c.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var h,b,x=["path"],v=["inline","node"],m=["data-meta"],g=a.ZP.div(h||(h=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),w=(0,a.ZP)(s.Z)(b||(b=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t},Z=function(n){var e=n.path,t=(0,o.Z)(n,x),i=(0,l.useRef)(null);return(0,p.jsxs)(g,{ref:i,children:[(0,p.jsx)(w,(0,r.Z)((0,r.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,i=n.inline,s=n.node,a=(0,o.Z)(n,v),c=a["data-meta"],l=(0,o.Z)(a,m);if(i||!(0,u.pN)(c))return(0,p.jsx)("code",(0,r.Z)({},a));var f=null===(e=s.position)||void 0===e?void 0:e.start.line,h=(0,u.Mx)(c)||String(f),b=t.components["".concat(h)];if(h&&"function"===typeof b){var x=t.data[h].value||"",g=(0,u.aE)(c);return(0,p.jsx)(d.Z,{disableCheckered:j(g,"disableCheckered",!0),disableToolbar:j(g,"disableToolbar",!1),disableCode:j(g,"disableCode",!1),disablePreview:j(g,"disablePreview",!1),bordered:j(g,"bordered",!0),copied:j(g,"copied",!0),background:g.background,toolbar:g.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,r.Z)({},l)),text:x,children:(0,p.jsx)(b,{})})}return(0,p.jsx)("code",(0,r.Z)({},l))}}})),(0,p.jsx)(f,{path:e}),(0,p.jsx)(c.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,p.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,p.jsx)(c.JO,{type:"arrow-up"})},percent:e})}})]})}},40940:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(1413),o=t(59940),i={components:{},data:{},source:"Toast \u8f7b\u63d0\u793a\n---\n![](https://user-images.githubusercontent.com/57083007/146734105-6e3c70bf-0d11-45d5-8bd4-c1e31738a4de.gif)\x3c!--rehype:style=zoom: 33%;--\x3e\n\n\n\u4e00\u79cd\u8f7b\u91cf\u7ea7\u53cd\u9988/\u63d0\u793a\uff0c\u53ef\u4ee5\u7528\u6765\u663e\u793a\u4e0d\u4f1a\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u5185\u5bb9\uff0c\u9002\u5408\u7528\u4e8e\u9875\u9762\u8f6c\u573a\u3001\u6570\u636e\u4ea4\u4e92\u7684\u7b49\u573a\u666f\u4e2d\u3002\n\n\u7ec4\u4ef6\u57fa\u4e8e[`react-native-root-siblings`](https://github.com/magicismight/react-native-root-siblings) \u63d2\u4ef6\u5f00\u53d1\uff0c \u5f53 `react native >= 0.62` \u65f6\uff0c\u9700\u8981\u5728\u7a0b\u5e8f\u4e2d\u63d2\u5165\u4e00\u4e2a\u88c5\u5165\u5bb9\u5668\n\n```jsx\nimport { RootSiblingParent } from 'react-native-root-siblings';\n\nexport default () => {\n  return (\n    <RootSiblingParent>\n      <App />\n    </RootSiblingParent>\n  )\n}\n```\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { View } from 'react-native';\nimport { Toast, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n   <View>\n     <Button onPress={() => { Toast.info('\u8bf4\u660e\u63d0\u793a', 2, 'info') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.warning('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.error('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.success('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n   </View>\n\n  );\n}\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `content` | \u63d0\u793a\u5185\u5bb9 | string | - |\n| `duration` | \u63d0\u793a\u6301\u7eed\u65f6\u95f4 | number | 2s |\n| `icon` | \u81ea\u5b9a\u4e49\u63d0\u793a`icon` | string | `info` |"},s=t(71027),a=function(){return(0,s.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/Toast/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=21.d86c9274.chunk.js.map