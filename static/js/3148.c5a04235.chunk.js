(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3148],{59940:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(18489),o=n(83738),i=n(17186),a=n(93908),l=n(53929),c=n(98012),u=n(17285),s=n(84488),d=n(93539),f=n(71027);function b(e){var t=e.path,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[t&&n&&(0,f.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(c.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var p,y,h=n(74513),m=["path"],v=["inline","node"],g=["data-meta"],_=l.ZP.div(p||(p=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),S=(0,l.ZP)(a.Z)(y||(y=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n},A=function(e){var t=e.path,n=(0,o.Z)(e,m),i=s.ZP.Preview,a=s.ZP.Code,l=s.ZP.Toolbar,p=(0,d.useRef)(null);return(0,f.jsxs)(_,{ref:p,children:[(0,f.jsx)(S,(0,r.Z)((0,r.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,c=e.inline,d=e.node,b=(0,o.Z)(e,v),p=b["data-meta"],y=(0,o.Z)(b,g);if(c||!(0,u.pN)(p))return(0,f.jsx)("code",(0,r.Z)({},b));var h=null===(t=d.position)||void 0===t?void 0:t.start.line,m=(0,u.Mx)(p)||String(h),_=n.components["".concat(m)];if(m&&"function"===typeof _){var S=n.data[m].value||"",A=(0,u.aE)(p);return(0,f.jsxs)(s.ZP,{disableCheckered:j(A,"disableCheckered",!0),bordered:j(A,"bordered",!0),children:[(0,f.jsx)(i,{children:(0,f.jsx)(_,{})}),(0,f.jsx)(l,{text:S,copied:j(A,"copied",!0),children:A.title||"\u793a\u4f8b"}),(0,f.jsx)(a,{children:(0,f.jsx)("code",(0,r.Z)({},y))})]})}return(0,f.jsx)("code",(0,r.Z)({},y))}}})),(0,f.jsx)(h.Z,{}),(0,f.jsx)(b,{path:t}),(0,f.jsx)(c.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,f.jsx)(c.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,f.jsx)(c.JO,{type:"arrow-up"})},percent:t})}})]})}},175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(18489),o=n(59940),i={components:{10:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=l(n(93539)),o=(t=n(44235))&&t.__esModule?t:{default:t},i=l(n(20645));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function l(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=i?Object.getOwnPropertyDescriptor(t,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}return function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.Fragment,null,r.default.createElement(o.default,{onPress:function(){return n(!0)}},"\u6253\u5f00 ActionSheet"),r.default.createElement(i.default,{visible:t,onCancel:function(){return n(!1)}},r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e00")}},"\u6309\u94ae\u4e00"),r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e8c")}},"\u6309\u94ae\u4e8c")))}}(),31:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=l(n(93539)),o=(t=n(44235))&&t.__esModule?t:{default:t},i=l(n(20645));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function l(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=i?Object.getOwnPropertyDescriptor(t,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}return function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.Fragment,null,r.default.createElement(o.default,{onPress:function(){return n(!0)}},"\u6253\u5f00 ActionSheet"),r.default.createElement(i.default,{visible:t,onCancel:function(){return n(!1)},cancelText:"\u5173\u95ed\u5f39\u5c42"},r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e00")}},"\u6309\u94ae\u4e00"),r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e8c")}},"\u6309\u94ae\u4e8c")))}}()},data:{10:{name:10,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ActionSheet = _interopRequireWildcard(require("@uiw/react-native/lib/ActionSheet"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    visible = _useState2[0],\n    setVisible = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    onPress: function onPress() {\n      return setVisible(true);\n    }\n  }, "\\u6253\\u5F00 ActionSheet"), /*#__PURE__*/_react["default"].createElement(_ActionSheet["default"], {\n    visible: visible,\n    onCancel: function onCancel() {\n      return setVisible(false);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e00\');\n    }\n  }, "\\u6309\\u94AE\\u4E00"), /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e8c\');\n    }\n  }, "\\u6309\\u94AE\\u4E8C")));\n}\nreturn Demo;',language:"jsx",value:"import React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible} onCancel={()=>setVisible(false)}>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo"},31:{name:31,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ActionSheet = _interopRequireWildcard(require("@uiw/react-native/lib/ActionSheet"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    visible = _useState2[0],\n    setVisible = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    onPress: function onPress() {\n      return setVisible(true);\n    }\n  }, "\\u6253\\u5F00 ActionSheet"), /*#__PURE__*/_react["default"].createElement(_ActionSheet["default"], {\n    visible: visible,\n    onCancel: function onCancel() {\n      return setVisible(false);\n    },\n    cancelText: "\\u5173\\u95ED\\u5F39\\u5C42"\n  }, /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e00\');\n    }\n  }, "\\u6309\\u94AE\\u4E00"), /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e8c\');\n    }\n  }, "\\u6309\\u94AE\\u4E8C")));\n}\nreturn Demo;',language:"jsx",value:"import React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible} onCancel={()=>setVisible(false)} cancelText=\"\u5173\u95ed\u5f39\u5c42\">\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo"}},source:"ActionSheet \u52a8\u4f5c\u9762\u677f\n---\n\n\u8be5\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u79cd\u52a8\u4f5c\u9762\u677f, \u5e95\u90e8\u7f13\u7f13\u51fa\u73b0\n\n\x3c!-- ![](https://user-images.githubusercontent.com/57083007/137631382-70df5dd3-0200-4ddb-bd11-3578ee99d032.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n```jsx mdx:preview&background=#bebebe29\nimport React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible} onCancel={()=>setVisible(false)}>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo\n```\n\n### \u81ea\u5b9a\u4e49\u6309\u94ae\u6587\u5b57\n```jsx mdx:preview&background=#bebebe29\nimport React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible} onCancel={()=>setVisible(false)} cancelText=\"\u5173\u95ed\u5f39\u5c42\">\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| isCancel | \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5173\u95ed | Boolean | `true` |\n| dividerStyle | \u5206\u5272\u7ebf\u6837\u5f0f | DividerStyleProps | - |\n| containerStyle | \u53d6\u6d88\u7684\u5bb9\u5668\u6837\u5f0f | StyleProp<`ViewStyle`> | - |\n| activeOpacity | \u52a8\u4f5c\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a | number | `#f1f1f1` |\n| underlayColor | \u52a8\u4f5c\u6709\u89e6\u6478\u64cd\u4f5c\u65f6\u663e\u793a\u51fa\u6765\u7684\u5e95\u5c42\u7684\u989c\u8272 | string | `#f1f1f1` |\n| cancelText | \u53d6\u6d88\u7684\u6587\u672c | `React.ReactNode` | - |\n| textStyle | \u53d6\u6d88\u7684\u6587\u672c\u6837\u5f0f | `StyleProp<TextStyle>` | - |\n| onCancel | \u8499\u5c42\u5173\u95ed\u56de\u8c03 | `() => void` | - |\n\n### DividerStyleProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| itemDivider | - | StyleProp<`ViewStyle`> | `false` |\n| actionDivider | - | StyleProp<`ViewStyle`> | - |\n\n### ActionSheetItemProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| containerStyle | \u5bb9\u5668\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| textStyle | \u6587\u672c\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| onPress | \u70b9\u51fb ActionSheetItem \u89e6\u53d1\u7684\u4e8b\u4ef6 | `(event: GestureResponderEvent) => void` | - |\n| disabled | \u7981\u6b62\u70b9\u51fb | `boolean` | `false` |\n\n"},a=n(71027),l=function(){return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/ActionSheet/README.md"}))}},20645:function(e,t,n){"use strict";n.r(t),n.d(t,{ActionSheetItem:function(){return m},default:function(){return S}});var r=n(18489),o=n(50678),i=n(83738),a=n(93539),l=n(68950),c=n(74834),u=n(12720),s=n(37068),d=n(73650),f=n(67510),b=n(64739),p=n(32167),y=n(71027),h=l.Z.get("window").width;function m(e){var t=(0,b.useTheme)(),n=(0,c.Z)(),r=e.onPress,o=void 0===r?function(){}:r,i=e.activeOpacity,a=void 0===i?1:i,l=e.underlayColor,d=void 0===l?"light"===n?t.colors.background:"#1A1A22":l,h=e.containerStyle,m=e.textStyle,g=e.disabled,_=void 0!==g&&g,S=e.children;return(0,y.jsx)(f.Z,{style:v.touchableHighlightItem,activeOpacity:a,underlayColor:d,onPress:o,disabled:_,children:(0,y.jsx)(u.Z,{style:s.Z.flatten([v.actionSheetItem,h]),children:(0,y.jsx)(p.Z,{style:s.Z.flatten([v.actionSheetItemText,m]),children:S})})})}var v=s.Z.create({actionSheetItem:{width:h,height:60,justifyContent:"center",alignItems:"center"},actionSheetItemText:{fontSize:20,fontWeight:"400"},touchableHighlightItem:{borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12}}),g=["children","visible","activeOpacity","underlayColor","cancelText","dividerStyle","isCancel","containerStyle","textStyle","onCancel"],_=l.Z.get("window").width;function S(e){var t=(0,b.useTheme)(),n=(0,c.Z)(),l=function(e){var t=e.backgroundColor,n=e.primaryBackground,r=e.mask;return s.Z.create({actionDivider:{backgroundColor:t,width:_,height:10},itemDivider:{backgroundColor:t,height:1,width:_,marginRight:15},actionSheetModalView:{flex:1,backgroundColor:n},actionSheetModalViewClose:{backgroundColor:r,marginTop:8,marginLeft:8,marginRight:8,marginBottom:16,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomRightRadius:12,borderBottomLeftRadius:12,outline:"none",boxShadow:"none"},actionSheetModalViewContent:{marginLeft:8,marginRight:8,backgroundColor:r,borderTopRightRadius:12,borderTopLeftRadius:12,borderBottomRightRadius:12,borderBottomLeftRadius:12,outline:"none",boxShadow:"none"}})}({backgroundColor:"dark"===n?"rgba(00,00,00,.3)":"rgba(95,95,95,.3)",primaryBackground:"dark"===n?t.colors.black:"rgba(00,00,00,.6)",mask:t.colors.mask}),f=e.children,p=e.visible,h=e.activeOpacity,v=e.underlayColor,S=e.cancelText,j=void 0===S?"\u53d6\u6d88":S,A=e.dividerStyle,w=e.isCancel,C=void 0===w||w,F=e.containerStyle,x=void 0===F?{}:F,E=e.textStyle,Z=e.onCancel,k=(0,i.Z)(e,g),D=!!p,P=(0,a.useState)({stateVisible:!!D,control:"props"}),I=(0,o.Z)(P,2),B=I[0],O=I[1];(0,a.useEffect)((function(){e.visible===B.stateVisible&&"state"===B.control&&O({control:"props",stateVisible:e.visible}),e.visible!==B.stateVisible&&("state"===B.control&&O((0,r.Z)((0,r.Z)({},B),{},{control:"props"})),O({control:"props",stateVisible:!!e.visible}))}),[B.stateVisible,e.visible]);return(0,y.jsx)(d.default,(0,r.Z)((0,r.Z)({placement:"bottom",animationType:"slide",transparent:!0},k),{},{visible:B.stateVisible,onClosed:function(){C&&(O({stateVisible:!1,control:"state"}),null===Z||void 0===Z||Z())},children:(0,y.jsxs)(u.Z,{style:l.actionSheetModalView,children:[(0,y.jsx)(u.Z,{style:l.actionSheetModalViewContent,children:a.Children.toArray(f).map((function(e,t){return(0,y.jsxs)(u.Z,{children:[0!==t&&(0,y.jsx)(u.Z,{style:s.Z.flatten([l.itemDivider,null===A||void 0===A?void 0:A.itemDivider])}),a.cloneElement(e,{activeOpacity:h,underlayColor:v})]},t)}))}),(0,y.jsx)(u.Z,{style:l.actionSheetModalViewClose,children:(0,y.jsx)(m,{activeOpacity:h,underlayColor:v,onPress:function(){return null===Z||void 0===Z?void 0:Z()},children:j,containerStyle:x,textStyle:E})})]})}))}},44235:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(18489),o=n(83738),i=n(93539),a=n(2894),l=n(88514),c=n(37068),u=n(3143),s=n(28351),d=n(64739),f=n(71027),b=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function p(e){var t,n,c,p,h,m=e.children,v=e.style,g=e.textStyle,_=e.rounded,S=e.bordered,j=e.color,A=e.type,w=e.size,C=e.disabled,F=e.loading,x=(0,o.Z)(e,b),E=(0,d.useTheme)();switch(A){case"warning":t=E.colors.func200||"#FFD21D";break;case"primary":t=E.colors.func400||"#1890FF";break;case"success":t=E.colors.func300||"#52C41A";break;case"danger":t=E.colors.func600||"#F4333C";break;case"light":t=E.colors.white||"#FFFFFF";break;case"dark":t=E.colors.black||"#000000"}t&&(t=(0,u.$_)(t).rgb().string()),C&&(n=(0,u.$_)(E.colors.disabled||"#CCCCCC").alpha(.1).rgb().string(),t=(0,u.$_)(E.colors.disabled||"#CCCCCC").rgb().string()),j&&(t=(0,u.$_)(j).rgb().string()),!_||"number"!==typeof _&&"boolean"!==typeof _||(h=_),S&&(c=(0,u.$_)(E.colors.gray200||t).alpha(1).rgb().string(),p=1);var Z={backgroundColor:t||"#3578e5",borderColor:c,borderWidth:p,borderRadius:h},k={color:n=(A||t||j||Z.backgroundColor)&&"light"!==A?(0,u.$_)(E.colors.white||"#FFFFFF").rgb().string():(0,u.$_)(E.colors.black||"#000000").rgb().string()},D={};w&&y[w]&&(D=y[w]);var P={},I="".concat(w,"Box");return w&&y[I]&&(P=y[I]),m?(0,f.jsxs)(a.Z,(0,r.Z)((0,r.Z)({testID:"RNE__Button__wrap",style:[y.button,y.content,Z,P,v],disabled:C},x),{},{children:[F&&(0,f.jsx)(l.Z,{size:16,color:n,style:y.icon}),i.Children.toArray(m).map((function(e,t){return(0,f.jsx)(s.default,{testID:"RNE__Button__div",style:[D,y.label,k,g],children:e},t)}))]})):null}p.defaultProps={activeOpacity:.5,rounded:5,bordered:!1,size:"default"};var y=c.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},87297:function(e,t,n){"use strict";n.r(t);var r=n(18489),o=n(31303),i=n(50678),a=n(83738),l=n(93539),c=n(37068),u=n(702),s=n(2894),d=n(16033),f=n(3143),b=n(64739),p=n(71027),y=["maskClosable","children","visible","opacity","onDismiss","animatedParallelShow","animatedParallelHide"];t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,b.useTheme)(),n=function(e){var t=e.whiteColor,n=e.blackBackground;return c.Z.create({position:{position:"absolute",backgroundColor:"transparent",top:0,bottom:0,left:0,right:0,zIndex:9998},backdrop:{backgroundColor:n},content:{backgroundColor:t,position:"absolute"}})}({whiteColor:t.colors.white||"#fff",blackBackground:t.colors.black||"#000"}),h=e.maskClosable,m=void 0===h||h,v=e.children,g=(e.visible,e.opacity),_=void 0===g?.6:g,S=e.onDismiss,j=e.animatedParallelShow,A=void 0===j?[]:j,w=e.animatedParallelHide,C=void 0===w?[]:w,F=(0,a.Z)(e,y),x=(0,l.useState)(!!e.visible),E=(0,i.Z)(x,2),Z=E[0],k=E[1],D=(0,f.D9)(e.visible),P=(0,l.useState)(!1),I=(0,i.Z)(P,2),B=I[0],O=I[1],R=(0,l.useState)(new u.Z.Value(0)),V=(0,i.Z)(R,1)[0];(0,l.useMemo)((function(){D!==e.visible&&e.visible?(k(!!e.visible),O(!1),u.Z.parallel([u.Z.spring(V,{toValue:_,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(A))).start()):D===e.visible||e.visible||u.Z.parallel([u.Z.spring(V,{toValue:0,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(C))).start((function(){k(!!e.visible),O(!0)}))}),[e.visible]);var T=(0,p.jsx)(u.Z.View,{style:[n.position,n.backdrop,{opacity:V}]}),M=(0,p.jsx)(s.Z,{activeOpacity:1,style:[n.position],onPress:function(){return S&&S()},children:T}),W=Z||!1;return!Z&&B&&(W=!1),(0,p.jsxs)(d.Z,(0,r.Z)((0,r.Z)({transparent:!0,animationType:"none"},F),{},{visible:W,children:[m?M:T,v&&l.Children.toArray(v).map((function(e){if(l.isValidElement(e))return l.cloneElement(e,(0,r.Z)((0,r.Z)({},e.props),{style:[{zIndex:9999},e.props.style]}))}))]}))}},73650:function(e,t,n){"use strict";n.r(t);var r=n(18489),o=n(50678),i=n(83738),a=n(93539),l=n(68950),c=n(702),u=n(37068),s=n(87297),d=n(64739),f=n(71027),b=["onClosed","visible","children","placement","containerStyle"],p=l.Z.get("window").width,y=l.Z.get("window").height;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClosed,n=e.visible,l=e.children,u=e.placement,p=void 0===u?"bottom":u,y=e.containerStyle,m=(0,i.Z)(e,b),v=(0,d.useTheme)(),g=(0,a.useRef)(new c.Z.Value(0)).current,_=(0,a.useState)(0),S=(0,o.Z)(_,2),j=S[0],A=S[1],w=(0,a.useState)(0),C=(0,o.Z)(w,2),F=C[0],x=C[1],E=(0,a.useState)(new c.Z.Value(0)),Z=(0,o.Z)(E,1)[0],k=/^(top|bottom)$/.test(p),D=/^(left|right)$/.test(p);(0,a.useEffect)((function(){var e="top"===p?-j:"bottom"===p?j:"left"===p?-F:"right"===p?F:0;e&&(n&&(Z.setValue(e),c.Z.parallel([c.Z.timing(g,{toValue:1,duration:0,useNativeDriver:!1}),c.Z.spring(Z,{toValue:0,overshootClamping:!0,useNativeDriver:!0})]).start()),n||c.Z.parallel([c.Z.spring(Z,{toValue:e,overshootClamping:!0,useNativeDriver:!0}),c.Z.timing(g,{toValue:0,duration:0,useNativeDriver:!1})]).start())}),[n,j,F,p,Z,g]);var P={};k&&(P.translateY=Z),D&&(P.translateX=Z);var I=(0,a.useMemo)((function(){return(0,f.jsx)(c.Z.View,{style:[h.content,p&&h[p],{opacity:g},y],children:(0,f.jsx)(c.Z.View,{onLayout:function(e){var t=e.nativeEvent.layout,n=t.height,r=t.width;!j&&k&&A(n),!F&&D&&x(r)},style:[h.content,p&&h[p],{transform:[P],backgroundColor:v.colors.mask||"#fff",position:"relative",zIndex:1e4}],children:l})})}),[l,g,y,D,k,j,F,p,v.colors.mask,P]);return(0,f.jsx)(s.default,(0,r.Z)((0,r.Z)({},m),{},{visible:n,onDismiss:t,children:I}))};var h=u.Z.create({content:{position:"absolute",zIndex:9999},top:{top:0,width:p,left:0,right:0},bottom:{bottom:0,left:0,width:p,right:0},left:{bottom:0,top:0,height:y,left:0},right:{bottom:0,top:0,height:y,right:0}})},28351:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(18489),o=n(83738),i=n(93539),a=n(32167),l=n(71027),c=["children"];function u(e){var t=e.children,n=(0,o.Z)(e,c);return t?i.Children.toArray(t).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,l.jsx)(a.Z,(0,r.Z)((0,r.Z)({color:"text"},n),{},{children:t})):(0,l.jsx)(i.Fragment,{children:i.Children.toArray(t).map((function(e,t){return"string"===typeof e?(0,i.createElement)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{children:e,key:t})):i.isValidElement(e)?i.cloneElement(e,(0,r.Z)({key:t},n)):void 0})).filter(Boolean)}):null}},32167:function(e,t,n){"use strict";var r=n(18489),o=n(36222),i=n(83738),a=(n(93539),n(62453)),l=n(64739),c=n(33709),u=n(71027),s=["color","children","style"],d=function(e){var t=e.color,n=void 0===t?"text":t,d=e.children,f=e.style,b=(0,i.Z)(e,s),p=(0,l.useTheme)();return(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({style:[{color:((0,c.isEmpty)(p.colors)?(0,o.Z)({},n,"#ccc"):p.colors)[n]},f]},b),{},{children:d}))};d.displayName="Text",t.Z=d},85153:function(e,t,n){"use strict";n.r(t),n.d(t,{black:function(){return s},blue:function(){return o},colorsPalette:function(){return f},cyan:function(){return i},green:function(){return r},navy:function(){return a},orange:function(){return c},red:function(){return u},white:function(){return d},yellow:function(){return l}});var r="#28a745",o="#008EF0",i="#1EABCD",a="#393E48",l="#ffc107",c="#F95C2B",u="#dc3545",s="#000000",d="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,n){"use strict";n.d(t,{BL:function(){return l},D9:function(){return a},dU:function(){return c}});var r=n(93539),o=n(66897),i=n(19233);function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function l(e){var t=e.value,n=e.defaultValue,a=e.onChange,l=(0,o.Z)(),c=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(c.current=t);var u=(0,i.Z)((function(e){void 0===t&&(c.current=e,l()),null===a||void 0===a||a(e)}));return[c.current,u]}function c(e){var t=(0,r.useRef)(e);return t.current=e,t}},3143:function(e,t,n){"use strict";n.d(t,{$_:function(){return o.a},D9:function(){return a.D9},O9:function(){return i}});var r=n(65965),o=n.n(r),i=n(85153),a=n(63941)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=3148.c5a04235.chunk.js.map