(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7344],{59940:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(18489),a=t(83738),l=t(17186),o=t(93133),i=t(53929),c=t(98012),u=t(17285),d=t(84488),s=t(93539),f=t(71027);function v(e){var n=e.path,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===n||void 0===n?void 0:n.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[n&&t&&(0,f.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(c.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var p,h,b=t(74513),y=["path"],m=["inline","node"],x=["data-meta"],j=i.ZP.div(p||(p=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),k=(0,i.ZP)(o.Z)(h||(h=(0,l.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),g=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t},w=function(e){var n=e.path,t=(0,a.Z)(e,y),l=d.ZP.Preview,o=d.ZP.Code,i=d.ZP.Toolbar,p=(0,s.useRef)(null);return(0,f.jsxs)(j,{ref:p,children:[(0,f.jsx)(k,(0,r.Z)((0,r.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var n,c=e.inline,s=e.node,v=(0,a.Z)(e,m),p=v["data-meta"],h=(0,a.Z)(v,x);if(c||!(0,u.pN)(p))return(0,f.jsx)("code",(0,r.Z)({},v));var b=null===(n=s.position)||void 0===n?void 0:n.start.line,y=(0,u.Mx)(p)||String(b),j=t.components["".concat(y)];if(y&&"function"===typeof j){var k=t.data[y].value||"",w=(0,u.aE)(p);return(0,f.jsxs)(d.ZP,{disableCheckered:g(w,"disableCheckered",!0),bordered:g(w,"bordered",!0),children:[(0,f.jsx)(l,{children:(0,f.jsx)(j,{})}),(0,f.jsx)(i,{text:k,copied:g(w,"copied",!0),children:w.title||"\u793a\u4f8b"}),(0,f.jsx)(o,{children:(0,f.jsx)("code",(0,r.Z)({},h))})]})}return(0,f.jsx)("code",(0,r.Z)({},h))}}})),(0,f.jsx)(b.Z,{}),(0,f.jsx)(v,{path:n}),(0,f.jsx)(c.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,f.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,f.jsx)(c.JO,{type:"arrow-up"})},percent:n})}})]})}},40286:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(18489),a=t(59940),l={components:{5:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n,r=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var r=o(t);if(r&&r.has(n))return r.get(n);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&Object.prototype.hasOwnProperty.call(n,i)){var c=l?Object.getOwnPropertyDescriptor(n,i):null;c&&(c.get||c.set)?Object.defineProperty(a,i,c):a[i]=n[i]}a.default=n,r&&r.set(n,a);return a}(t(93539)),a=t(7804),l=(n=t(85272))&&n.__esModule?n:{default:n};function o(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:n})(e)}return function(){return r.default.createElement(a.View,{style:{marginTop:50}},r.default.createElement(l.default,{treeData:[{label:"\u4e00\u680b",value:"01",children:[{label:"\u4e00\u5355\u5143",value:"01-1",children:[{label:"\u4e00\u5c42",value:"01-1-1",children:[{label:"101",value:"01-1-1-1"}]}]},{label:"\u4e00\u5355\u51431",value:"01-2"},{label:"\u4e00\u5355\u51432",value:"01-3"}]},{label:"\u4e8c\u680b",value:"02",children:[{label:"\u4e8c\u5355\u5143",value:"02-1"},{label:"\u4e8c\u5355\u51431",value:"02-2"},{label:"\u4e8c\u5355\u51432",value:"02-3"}]}]}))}}()},data:{5:{name:5,meta:{background:"#bebebe29"},code:"\"use strict\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require(\"react\"));\nvar _reactNative = require(\"react-native\");\nvar _Tree = _interopRequireDefault(require(\"@uiw/react-native/lib/Tree\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction Demo() {\n  var option = [{\n    label: '\u4e00\u680b',\n    value: '01',\n    children: [{\n      label: '\u4e00\u5355\u5143',\n      value: '01-1',\n      children: [{\n        label: '\u4e00\u5c42',\n        value: '01-1-1',\n        children: [{\n          label: '101',\n          value: '01-1-1-1'\n        }]\n      }]\n    }, {\n      label: '\u4e00\u5355\u51431',\n      value: '01-2'\n    }, {\n      label: '\u4e00\u5355\u51432',\n      value: '01-3'\n    }]\n  }, {\n    label: '\u4e8c\u680b',\n    value: '02',\n    children: [{\n      label: '\u4e8c\u5355\u5143',\n      value: '02-1'\n    }, {\n      label: '\u4e8c\u5355\u51431',\n      value: '02-2'\n    }, {\n      label: '\u4e8c\u5355\u51432',\n      value: '02-3'\n    }]\n  }];\n  return /*#__PURE__*/_react[\"default\"].createElement(_reactNative.View, {\n    style: {\n      marginTop: 50\n    }\n  }, /*#__PURE__*/_react[\"default\"].createElement(_Tree[\"default\"], {\n    treeData: option\n  }));\n}\nreturn Demo;",language:"jsx",value:"import React,{ Component } from \"react\"\nimport { View } from 'react-native';\nimport { Tree } from '@uiw/react-native';\n\nfunction Demo() {\n\n  const option = [\n      {\n        label: '\u4e00\u680b',\n        value: '01',\n        children: [\n          {\n            label: '\u4e00\u5355\u5143',\n            value: '01-1',\n            children: [{label: '\u4e00\u5c42', value: '01-1-1', children: [{label: '101', value: '01-1-1-1'}]}],\n          },\n          {\n            label: '\u4e00\u5355\u51431',\n            value: '01-2',\n          },\n          {\n            label: '\u4e00\u5355\u51432',\n            value: '01-3',\n          },\n        ],\n      },\n      {\n        label: '\u4e8c\u680b',\n        value: '02',\n        children: [\n          {\n            label: '\u4e8c\u5355\u5143',\n            value: '02-1',\n          },\n          {\n            label: '\u4e8c\u5355\u51431',\n            value: '02-2',\n          },\n          {\n            label: '\u4e8c\u5355\u51432',\n            value: '02-3',\n          },\n        ],\n      },\n    ];\n\n\n  return (\n    <View style={{ marginTop: 50 }}>\n        <Tree treeData={option}/>\n    </View>\n  );\n}\n\nexport default Demo;"}},source:"# Tree \u6811\u5f62\u63a7\u4ef6\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview&background=#bebebe29\nimport React,{ Component } from \"react\"\nimport { View } from 'react-native';\nimport { Tree } from '@uiw/react-native';\n\nfunction Demo() {\n\n  const option = [\n      {\n        label: '\u4e00\u680b',\n        value: '01',\n        children: [\n          {\n            label: '\u4e00\u5355\u5143',\n            value: '01-1',\n            children: [{label: '\u4e00\u5c42', value: '01-1-1', children: [{label: '101', value: '01-1-1-1'}]}],\n          },\n          {\n            label: '\u4e00\u5355\u51431',\n            value: '01-2',\n          },\n          {\n            label: '\u4e00\u5355\u51432',\n            value: '01-3',\n          },\n        ],\n      },\n      {\n        label: '\u4e8c\u680b',\n        value: '02',\n        children: [\n          {\n            label: '\u4e8c\u5355\u5143',\n            value: '02-1',\n          },\n          {\n            label: '\u4e8c\u5355\u51431',\n            value: '02-2',\n          },\n          {\n            label: '\u4e8c\u5355\u51432',\n            value: '02-3',\n          },\n        ],\n      },\n    ];\n\n\n  return (\n    <View style={{ marginTop: 50 }}>\n        <Tree treeData={option}/>\n    </View>\n  );\n}\n\nexport default Demo;\n```\n\n\n## Props\n\n| \u5c5e\u6027                | \u5fc5\u586b    | \u8bf4\u660e                          | \u7c7b\u578b                                | \u9ed8\u8ba4\u503c  |\n| ------------------- | ------- | ----------------------------- | ----------------------------------- | ------- |\n| height              | `false` | \u7ec4\u4ef6\u7684\u9ad8\u5ea6                    | `number`                            |         |\n| treeData            | `false` | \u6811\u7684\u8282\u70b9\u6570\u636e                  | `TreeItemProps[]`                   |         |\n| disabled            | `false` | \u7981\u7528                          | `boolean`                           | `false` |\n| checkable           | `false` | \u662f\u5426\u53ef\u4ee5\u9009\u62e9\u7684                | `boolean`                           | `true`  |\n| checkStrictly       | `false` | \u662f\u5426\u4e25\u683c\u9009\u4e2d                  | `boolean`                           | `false` |\n| checkedKeys         | `false` | \u9009\u4e2d\u7684\u8282\u70b9(\u53d7\u63a7\u7684)            | `string[]`                          |         |\n| defaultCheckedKeys  | `false` | \u9ed8\u8ba4\u9009\u4e2d\u7684 key \u7b2c\u4e00\u6b21\u52a0\u8f7d\u6709\u6548 | `string[]`                          |         |\n| defaultExpandAll    | `false` | \u9ed8\u8ba4\u5168\u90e8\u5c55\u5f00                  | `boolean`                           | `false` |\n| defaultExpandedKeys | `false` | \u9ed8\u8ba4\u5c55\u5f00\u7684\u8282\u70b9                | `string[]`                          |         |\n| expandedKeys        | `false` | \u5c55\u5f00\u7684\u8282\u70b9                    | `string[]`                          |         |\n| showIcon            | `false` | \u662f\u5426\u663e\u793a\u5c3e\u90e8\u7684\u56fe\u6807            | `boolean`                           | `true`  |\n| onCheck             | `false` | \u9009\u4e2d\u4e8b\u4ef6\u56de\u8c03                  | `(keys: string[]) => void`          |         |\n| onExpand            | `false` | \u5c55\u5f00\u4e8b\u4ef6\u56de\u8c03                  | `(treeNode: EventDataNode) => void` |         |\n| icon                | `false` | \u81ea\u5b9a\u4e49 icon                   | `(checked: boolean) => ReactNode`   |         |\n\n\n```ts\ninterface TreeItemProps {\n  value: string;\n  label: string;\n  children?: Array<TreeItemProps | ReactNode>;\n  disabled?: boolean;\n  icon?: (checked: boolean) => ReactNode;\n}\n```"},o=t(71027),i=function(){return(0,o.jsx)(a.Z,(0,r.Z)((0,r.Z)({},l),{},{path:"/packages/core/src/Tree/README.md"}))}},18401:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(18489),a=t(93539),l=t(12720),o=t(71027);function i(e){return(0,o.jsx)(l.Z,(0,r.Z)({},e))}function c(e){var n=e.direction,t=e.justify,c=e.align,u=e.wrap,d=e.children,s=e.style,f={};return n&&(f.flexDirection=n),u&&(f.flexWrap=u),t&&(f.justifyContent=t.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end").replace(/^between$/g,"space-between").replace(/^around$/g,"space-around").replace(/^evenly$/g,"space-evenly")),c&&(f.alignItems=c.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end")),(0,o.jsx)(l.Z,{testID:"RNE__Flex__wrap",style:[f,s],children:d&&a.Children.map(d,(function(e){return a.isValidElement(e)?e.type&&"FlexItem"===e.type.displayName?a.cloneElement((0,o.jsx)(i,{}),(0,r.Z)((0,r.Z)({},e.props),{},{style:[{flex:1},e.props.style]})):e:null}))})}c.defaultProps={direction:"row",justify:"start",wrap:"nowrap",align:"start"},c.Item=i;var u=c},37322:function(e,n,t){"use strict";t.r(n);var r=t(18489),a=t(83738),l=(t(93539),t(36893)),o=t.n(l),i=t(80464),c=t(71027),u=["size","name","fill","stroke","xml","paths","color"];n.default=function(e){var n=e.size,t=void 0===n?26:n,d=e.name,s=e.fill,f=void 0===s?"#000000":s,v=e.stroke,p=e.xml,h=e.paths,b=e.color,y=(0,a.Z)(e,u);if(p)return(0,c.jsx)(l.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:p,height:t,width:t},y));var m=h;if(!m){if(!d||!i[d])return null;m=i[d]}return(0,c.jsx)(o(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:b||f,stroke:v,height:t,width:t,viewBox:"0 0 20 20"},y),{},{children:m.map((function(e,n){return(0,c.jsx)(l.Path,{d:e,fillRule:"evenodd"},n)}))}))}},85272:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(18489),a=t(93539),l=t(49568);function o(e,n){var t=e.slice(),r=t.indexOf(n);return r>=0&&t.splice(r,1),t}function i(e,n){var t=e.slice();return-1===t.indexOf(n)&&t.push(n),t}function c(e,n,t){if(!e)return[];var r,a=e.filter((function(e){return!!n[e]})),l=new Map,o=0;return Object.keys(n).forEach((function(e){var t=n[e],r=t.level,a=l.get(r);a||(a=new Set,l.set(r,a)),a.add(t),o=Math.max(o,r)})),t?(r=!0===t?function(e,n,t){for(var r=new Set(e),a=0;a<=t;a+=1)(n.get(a)||new Set).forEach((function(e){var n=e.key,t=e.children,a=void 0===t?[]:t;r.has(n)&&(null===a||void 0===a||a.forEach((function(e){r.add(e.value)})))}));for(var l=new Set,o=t;o>0;o-=1)(n.get(o)||new Set).forEach((function(e){var n=e.parent,t=!0;((null===n||void 0===n?void 0:n.children)||[]).forEach((function(e){var n=e.value,a=r.has(n);t&&!a&&(t=!1)})),t&&r.add(n.value),l.add(n.value)}));return Array.from(r)}(new Set(a),l,o):function(e,n,t){for(var r=new Set(e),a=0;a<=t;a+=1)(n.get(a)||new Set).forEach((function(e){var n=e.key,t=e.children,a=void 0===t?[]:t;r.has(n)||null===a||void 0===a||a.forEach((function(e){r.delete(e.value)}))}));for(var l=new Set,o=t;o>0;o-=1)(n.get(o)||new Set).forEach((function(e){var n=e.parent,t=!0;(n.children||[]).forEach((function(e){var n=e.value,a=r.has(n);t&&!a&&(t=!1)})),t||r.delete(n.value),l.add(n.value)}));return Array.from(r)}(new Set(a),l,o),r):[]}var u=t(702),d=t(2894),s=t(12720),f=t(37068),v=t(64739),p=t(18401),h=t(37322),b=t(32167),y=t(63941);var m=t(71027),x=function(e){var n=(0,v.useTheme)(),t=e.icon,r=e.level,a=e.disabled,l=e.checkable,o=e.expanded,i=void 0!==o&&o,c=e.label,x=e.checked,j=void 0!==x&&x,k=e.data,g=e.showIcon,w=function(e){var n=e.expanded,t=void 0!==n&&n,r=e.eventKey,a=e.label,l=e.checked,o=void 0!==l&&l,i=e.disabled,c=e.onCheck,u=e.data,d=e.onClick,s=e.show,f=(0,y.dU)(c),v=(0,y.dU)(d),p=s?1:0;return{progress:t?1:0,heightProgress:p,style:function(){return{height:55*(0*(1-p)+1*p)}},handlerCheck:function(){var e;null===(e=f.current)||void 0===e||e.call(f,{expanded:t,key:null===u||void 0===u?void 0:u.value,value:u.value,eventKey:r,label:a,checked:o,disabled:i})},onClick:v.current}}(e),Z=w.style,_=w.handlerCheck,C=w.onClick;return(0,m.jsx)(u.Z.View,{style:[{overflow:"hidden"},Z()],children:(0,m.jsx)(d.Z,{disabled:a,onPress:function(){null===C||void 0===C||C({expanded:i,key:null===k||void 0===k?void 0:k.value,value:k.value,label:c,checked:j,disabled:a})},children:(0,m.jsx)(s.Z,{style:{height:55,backgroundColor:n.colors.mask,borderBottomWidth:f.Z.hairlineWidth,borderBottomColor:"#CCCCCC",paddingHorizontal:12},children:(0,m.jsxs)(p.default,{style:{marginLeft:16*r,alignItems:"center",flex:1},children:[(0,m.jsx)(d.Z,{disabled:a,onPress:_,children:l&&function(e){return t?t(e):(0,m.jsx)(h.default,{size:16,name:e?"circle-check":"circle-o",color:e?n.colors.primary200:n.colors.gray300})}(j)}),(0,m.jsx)(s.Z,{style:{flex:1,marginLeft:4},children:(0,m.jsx)(b.Z,{style:{fontSize:14,lineHeight:19},color:a?"rgba(255, 255, 255, 0.25)":"text",children:c})}),!!k.children&&!!g&&(0,m.jsx)(h.default,{name:i?"up":"down",color:"#999999",size:18})]})})})})};x.displayName="TreeNode";var j=x,k=t(31303),g=t(50678);function w(e){var n=e.height,t=e.treeData,l=void 0===t?[]:t,u=e.disabled,d=void 0!==u&&u,s=e.onExpand,f=e.onCheck,v=e.checkable,p=void 0===v||v,h=e.checkStrictly,b=void 0!==h&&h,m=e.defaultCheckedKeys,x=void 0===m?[]:m,j=e.defaultExpandAll,w=void 0!==j&&j,Z=e.defaultExpandedKeys,_=void 0===Z?[]:Z,C=e.showIcon,E=void 0===C||C,S=e.icon,O=(0,a.useRef)(),R=(0,y.dU)(s),P=(0,y.dU)(f),D=(0,a.useState)([]),I=(0,g.Z)(D,2),K=I[0],N=I[1],T=(0,a.useState)(_),M=(0,g.Z)(T,2),W=M[0],q=M[1],V=(0,a.useState)(x),U=(0,g.Z)(V,2),z=U[0],A=U[1],B=(0,a.useState)(),$=(0,g.Z)(B,2),F=$[0],L=$[1],H=function(n,t,r){e[n]||r(t)};(0,a.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=new Set(!0===n?[]:n),a=[];return function e(l){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0;return l.map((function(l){var c=l.value,u=(0,r.Z)((0,r.Z)({},l),{},{show:i,parent:o,children:null,data:l,key:c});return a.push(u),!0!==n&&!t.has(c.toString())||!0!==i?u.children=e(l.children||[],u,!1):u.children=e(l.children||[],u,!0),u}))}(e,null,!0),a}(l,W);N(e)}),[l,W,N]),(0,a.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={};return function t(r,a){var l=r?r.children:e;r&&(n[r.value]={level:a?a.level+1:0,parent:a,children:l,data:r,value:r.value}),l&&l.forEach((function(e){t(e,r?n[null===r||void 0===r?void 0:r.value]:null)}))}(null,null),n}(l);if(void 0===(null===O||void 0===O?void 0:O.current)&&w){var n=Object.keys(e);q(n)}O.current=w,L(e)}),[w,q,L,l]),(0,a.useEffect)((function(){e.expandedKeys&&q(e.expandedKeys)}),[e.expandedKeys,q]),(0,a.useEffect)((function(){e.checkedKeys&&A(e.checkedKeys)}),[e.checkedKeys,A]);return{flattenNodes:K,handleNodeExpand:function(e){var n,t=e.value,r=[];r=!e.expanded?i(W,t):o(W,t),H("expandedKeys",r,q),null===(n=R.current)||void 0===n||n.call(R,e)},handlerCheck:function(e){var n,t=e.value,r=e.checked,a=[];if(b)a=!r?i(z,t):o(z,t);else if(a=c([].concat((0,k.Z)(z),[t]),F||{},!0),r){var l=new Set(z);l.delete(t),a=c(Array.from(l),F||{},{checked:!1})}null===(n=P.current)||void 0===n||n.call(P,a),H("checkedKeys",a,A)},containerStyle:n?{height:n}:{flex:1},expandedKeys:W,checkedKeys:z,keyEntities:F,icon:S,checkable:p,disabled:d,showIcon:E}}var Z=function(e){var n=w(e),t=n.flattenNodes,a=n.handleNodeExpand,o=n.handlerCheck,i=n.containerStyle,c=n.expandedKeys,u=n.checkedKeys,d=n.keyEntities,s=n.icon,f=n.checkable,v=n.disabled,p=n.showIcon;return(0,m.jsx)(l.Z,{style:i,children:t.map((function(e){return function(e){var n=function(e,n){var t=n.expandedKeys,r=n.checkedKeys;return{eventKey:e,expanded:-1!==t.indexOf(e),checked:-1!==r.indexOf(e)}}(e.value,{expandedKeys:c,checkedKeys:u}),t=null===d||void 0===d?void 0:d[e.value].level,l=(null===d||void 0===d?void 0:d[e.value].data.icon)||s;return(0,m.jsx)(j,(0,r.Z)((0,r.Z)((0,r.Z)({icon:l,checkable:f,disabled:v},n),e),{},{showIcon:p,onClick:a,onCheck:o,level:t||0==t?t:1}))}(e)}))})};Z.displayName="Tree";var _=a.memo(Z),C=Object.assign(_)},32167:function(e,n,t){"use strict";var r=t(18489),a=t(36222),l=t(83738),o=(t(93539),t(62453)),i=t(64739),c=t(33709),u=t(71027),d=["color","children","style"],s=function(e){var n=e.color,t=void 0===n?"text":n,s=e.children,f=e.style,v=(0,l.Z)(e,d),p=(0,i.useTheme)();return(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({style:[{color:((0,c.isEmpty)(p.colors)?(0,a.Z)({},t,"#ccc"):p.colors)[t]},f]},v),{},{children:s}))};s.displayName="Text",n.Z=s},63941:function(e,n,t){"use strict";t.d(n,{BL:function(){return i},D9:function(){return o},dU:function(){return c}});var r=t(93539),a=t(66897),l=t(19233);function o(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}function i(e){var n=e.value,t=e.defaultValue,o=e.onChange,i=(0,a.Z)(),c=(0,r.useRef)(void 0!==n?n:t);void 0!==n&&(c.current=n);var u=(0,l.Z)((function(e){void 0===n&&(c.current=e,i()),null===o||void 0===o||o(e)}));return[c.current,u]}function c(e){var n=(0,r.useRef)(e);return n.current=e,n}},19233:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(93539);var a=function(e){var n=(0,r.useRef)(e);n.current=(0,r.useMemo)((function(){return e}),[e]);var t=(0,r.useRef)();return t.current||(t.current=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.current.apply(this,e)}),t.current}},66897:function(e,n,t){"use strict";var r=t(48026),a=t(93539);n.Z=function(){var e=(0,r.CR)((0,a.useState)({}),2)[1];return(0,a.useCallback)((function(){return e({})}),[])}},48026:function(e,n,t){"use strict";t.d(n,{CR:function(){return r}});Object.create;function r(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,l=t.call(e),o=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(a)throw a.error}}return o}Object.create},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=7344.38947c6c.chunk.js.map