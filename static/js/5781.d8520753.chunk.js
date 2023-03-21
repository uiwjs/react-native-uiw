(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5781],{85480:function(n,e,t){"use strict";var r,o,i=t(18489),a=t(83738),c=t(17186),s=t(93908),d=t(53929),p=t(98012),u=t(17285),l=t(84488),m=t(93539),f=t(74513),h=t(71027),x=["path"],v=["inline","node"],w=["data-meta"],Z=d.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),g=(0,d.ZP)(s.Z)(o||(o=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t};e.Z=function(n){var e=n.path,t=(0,a.Z)(n,x),r=l.ZP.Preview,o=l.ZP.Code,c=l.ZP.Toolbar,s=(0,m.useRef)(null);return(0,h.jsxs)(Z,{ref:s,children:[(0,h.jsx)(g,(0,i.Z)((0,i.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,s=n.inline,d=n.node,p=(0,a.Z)(n,v),m=p["data-meta"],f=(0,a.Z)(p,w);if(s||!(0,u.pN)(m))return(0,h.jsx)("code",(0,i.Z)({},p));var x=null===(e=d.position)||void 0===e?void 0:e.start.line,Z=(0,u.Mx)(m)||String(x),g=t.components["".concat(Z)];if(Z&&"function"===typeof g){var b=t.data[Z].value||"",y=(0,u.aE)(m);return(0,h.jsxs)(l.ZP,{disableCheckered:j(y,"disableCheckered",!0),bordered:j(y,"bordered",!0),children:[(0,h.jsx)(r,{children:(0,h.jsx)(g,{})}),(0,h.jsx)(c,{text:b,copied:j(y,"copied",!0),children:y.title||"\u793a\u4f8b"}),(0,h.jsx)(o,{children:(0,h.jsx)("code",(0,i.Z)({},f))})]})}return(0,h.jsx)("code",(0,i.Z)({},f))}}})),(0,h.jsx)(f.Z,{path:e}),(0,h.jsx)(p.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,h.jsx)(p.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,h.jsx)(p.JO,{type:"arrow-up"})},percent:e})}})]})}},24554:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(18489),o=t(85480),i={components:{},data:{},source:"# \u83dc\u5355\u8def\u7531\u7ba1\u7406\n\n\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684`src / routes`\u914d\u7f6e\u83dc\u5355\u8def\u7531\n## \u914d\u7f6e\u8def\u7531\n\n```js\nimport React from 'react';\nimport {Icon} from '@uiw/react-native';\nimport MyHome from '../pages/MyHome';\nimport OrderHome from '../pages/OrderHome';\nimport TransportHome from '../pages/TransportHome';\n\nexport default [\n  {\n    name: 'TransportHome',\n    component: TransportHome,\n    options: {\n      title: '\u53d1\u8d27',\n      tabBarIcon: () => {\n        return <Icon name=\"inbox\" size={22} />;\n      },\n    },\n  },\n  {\n    name: 'OrderHome',\n    component: OrderHome,\n    options: {\n      title: '\u8ba2\u5355',\n      tabBarIcon: () => {\n        return <Icon name=\"file-text\" size={22} />;\n      },\n    },\n  },\n  {\n    name: 'MyHome',\n    component: MyHome,\n    options: {\n      title: '\u6211\u7684',\n      tabBarIcon: () => {\n        return <Icon name=\"user\" size={22} />;\n      },\n    },\n  },\n];\n\n```\n\n\n## Options\n\n### title\n\n\u53ef\u4ee5\u7528\u4f5cheaderTitle\u7684\u56de\u9000\u7684\u5b57\u7b26\u4e32\n\n### headerShown\n\n \u662f\u5426\u663e\u793a\u6216\u9690\u85cf\u5c4f\u5e55\u7684\u6807\u5934\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u663e\u793a\u5934\u90e8\u3002\u5c06\u6b64\u8bbe\u7f6e\u4e3afalse\u4f1a\u9690\u85cf\u6807\u5934\u3002\n\n### headerTintColor\n\n\u4e3a\u6807\u9898\u7740\u8272\u3002\u66f4\u6539\u540e\u9000\u6309\u94ae\u548c\u6807\u9898\u7684\u989c\u8272\u3002\n\n### cardStyle\n\n\u5806\u6808\u4e2d\u5361\u7247\u7684\u6837\u5f0f\u5bf9\u8c61\u3002\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u63d0\u4f9b\u81ea\u5b9a\u4e49\u80cc\u666f\u8272\u6765\u4ee3\u66ff\u9ed8\u8ba4\u80cc\u666f\u8272\n\n### headerBackTitle\n\niOS\u4e0a\u540e\u9000\u6309\u94ae\u4f7f\u7528\u7684\u6807\u9898\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u4e3a\u524d\u4e00\u4e2a\u573a\u666f\u7684headerTitle\n\n\u8def\u7531\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee\u9875\u9762\u5373\u53ef\u770b\u5230\u6548\u679c\uff0c\u5982\u9700\u8981\u914d\u7f6e `title`\uff0c`tabBarIcon`\uff0c`header`\u7b49\u66f4\u591a\u8bbe\u7f6e\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230[React Navigation](https://reactnavigation.org/docs/stack-navigator/)\n\n## \u8def\u7531\u8df3\u8f6c\n\n```js\nimport React from 'react';\nimport { Button } from '@uiw/react-native';\n\nconst Demo = ({ navigation }) => {\n\n  return (\n     <Button\n       textStyle={{ fontSize: 16, fontWeight: '200' }}\n       bordered={false}\n       color=\"#BFBFBF\"\n       onPress={() => navigation.replace('SignIn')}>\n        \u8df3\u8f6c\n     </Button>\n  );\n}\n\n```\n\n\n"},a=t(71027),c=function(n){return t(69223)(n)},s=function(){return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{transformImageUri:c,path:"website/src/pages/docs/react-native-template/menu-route/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e},69223:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=69223,n.exports=e}}]);
//# sourceMappingURL=5781.d8520753.chunk.js.map