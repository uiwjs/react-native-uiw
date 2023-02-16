(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[987],{59940:function(n,e,t){"use strict";t.d(e,{Z:function(){return Z}});var r=t(1413),o=t(45987),i=t(30168),c=t(70377),a=t(53929),s=t(78069),u=t(17285),d=t(61366),l=t(93539),p=t(71027);function f(n){var e=n.path,t=/^http/.test(e||"")?e:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===e||void 0===e?void 0:e.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[e&&t&&(0,p.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(s.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var x,m,h=["path"],w=["inline","node"],b=["data-meta"],g=a.ZP.div(x||(x=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),v=(0,a.ZP)(c.Z)(m||(m=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t},Z=function(n){var e=n.path,t=(0,o.Z)(n,h),i=(0,l.useRef)(null);return(0,p.jsxs)(g,{ref:i,children:[(0,p.jsx)(v,(0,r.Z)((0,r.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,i=n.inline,c=n.node,a=(0,o.Z)(n,w),s=a["data-meta"],l=(0,o.Z)(a,b);if(i||!(0,u.pN)(s))return(0,p.jsx)("code",(0,r.Z)({},a));var f=null===(e=c.position)||void 0===e?void 0:e.start.line,x=(0,u.Mx)(s)||String(f),m=t.components["".concat(x)];if(x&&"function"===typeof m){var h=t.data[x].value||"",g=(0,u.aE)(s);return(0,p.jsx)(d.Z,{disableCheckered:j(g,"disableCheckered",!0),disableToolbar:j(g,"disableToolbar",!1),disableCode:j(g,"disableCode",!1),disablePreview:j(g,"disablePreview",!1),bordered:j(g,"bordered",!0),copied:j(g,"copied",!0),background:g.background,toolbar:g.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,r.Z)({},l)),text:h,children:(0,p.jsx)(m,{})})}return(0,p.jsx)("code",(0,r.Z)({},l))}}})),(0,p.jsx)(f,{path:e}),(0,p.jsx)(s.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,p.jsx)(s.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,p.jsx)(s.JO,{type:"arrow-up"})},percent:e})}})]})}},59516:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(1413),o=t(59940),i={components:{},data:{},source:"SwipeAction \u6ed1\u52a8\u64cd\u4f5c\u7ec4\u4ef6\u3002\n---\n\u7ed3\u5408\u624b\u52bf\u64cd\u4f5c\uff0c\u4ece\u5c4f\u5e55\u4e00\u4fa7\u5524\u51fa\u64cd\u4f5c\u3002\n\n![](https://user-images.githubusercontent.com/57083007/146733663-6c83fca4-72df-424d-8364-47533f57ece6.gif)\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport React from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u4ece\u5de6\u4fa7\u6ed1\u51fa\n\n```jsx\nimport React from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const left = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} left={left}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u7981\u7528\n\n```jsx\nimport React,{ useRef } from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const ref = useRef()\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n      disabled:true\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u4e3b\u52a8\u5173\u95ed\n\n```jsx\nimport React,{ useRef } from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const ref = useRef()\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 400,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n\u7ec4\u4ef6\u7ee7\u627freact-native-gesture-handler[`Swipeable`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)\n### Props\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `right` | \u53f3\u8fb9\u6ed1\u52a8\u51fa\u6765\u7684\u5143\u7d20 | Array<`ColumnProps`> | - |\n| `left` | \u5de6\u8fb9\u6ed1\u52a8\u51fa\u6765\u7684\u5143\u7d20 | Array<`ColumnProps`> | - |\n| `buttonWidth` | \u6309\u94ae\u5bbd\u5ea6 |  number | 60 |\n\n### ColumnProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `text` | \u663e\u793a\u6587\u5b57 | string | - |\n| `color` | \u80cc\u666f\u8272 | string | - |\n| `onPress` | \u70b9\u51fb\u5143\u7d20\u89e6\u53d1 |  () => void | - |\n| `disabled` | \u662f\u5426\u7981\u7528 | Boolean | - |\n| `render` | \u81ea\u5b9a\u4e49\u5143\u7d20 | (text: string, record: Column, index: number) => React.ReactNode | - |\n"},c=t(71027),a=function(){return(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/SwipeAction/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=987.bfbc5fd0.chunk.js.map