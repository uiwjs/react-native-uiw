(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2271],{85480:function(e,t,n){"use strict";var r,o,i=n(18489),a=n(83738),l=n(17186),c=n(93908),u=n(53929),s=n(51928),f=n(17285),d=n(61366),p=n(93539),b=n(74513),y=n(71027),h=["path"],m=["inline","node"],v=["data-meta"],_=u.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),g=(0,u.ZP)(c.Z)(o||(o=(0,l.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),S=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n};t.Z=function(e){var t=e.path,n=(0,a.Z)(e,h),r=(0,p.useRef)(null);return(0,y.jsxs)(_,{ref:r,children:[(0,y.jsx)(g,(0,i.Z)((0,i.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,r=e.inline,o=e.node,l=(0,a.Z)(e,m),c=l["data-meta"],u=(0,a.Z)(l,v);if(r||!(0,f.pN)(c))return(0,y.jsx)("code",(0,i.Z)({},l));var s=null===(t=o.position)||void 0===t?void 0:t.start.line,p=(0,f.Mx)(c)||String(s),b=n.components["".concat(p)];if(p&&"function"===typeof b){var h=n.data[p].value||"",_=(0,f.aE)(c);return(0,y.jsx)(d.Z,{disableCheckered:S(_,"disableCheckered",!0),disableToolbar:S(_,"disableToolbar",!1),disableCode:S(_,"disableCode",!1),disablePreview:S(_,"disablePreview",!1),bordered:S(_,"bordered",!0),copied:S(_,"copied",!0),background:_.background,toolbar:_.title||"\u793a\u4f8b",code:(0,y.jsx)("code",(0,i.Z)({},u)),text:h,children:(0,y.jsx)(b,{})})}return(0,y.jsx)("code",(0,i.Z)({},u))}}})),(0,y.jsx)(b.Z,{path:t}),(0,y.jsx)(s.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,y.jsx)(s.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,y.jsx)(s.JO,{type:"arrow-up"})},percent:t})}})]})}},175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(18489),o=n(85480),i={components:{10:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=l(n(93539)),o=(t=n(44235))&&t.__esModule?t:{default:t},i=l(n(20645));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function l(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=i?Object.getOwnPropertyDescriptor(t,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}return function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.Fragment,null,r.default.createElement(o.default,{onPress:function(){return n(!0)}},"\u6253\u5f00 ActionSheet"),r.default.createElement(i.default,{visible:t},r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e00")}},"\u6309\u94ae\u4e00"),r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e8c")}},"\u6309\u94ae\u4e8c")))}}(),31:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=l(n(93539)),o=(t=n(44235))&&t.__esModule?t:{default:t},i=l(n(20645));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function l(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=i?Object.getOwnPropertyDescriptor(t,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=t[l]}return o.default=t,r&&r.set(t,o),o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}return function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.Fragment,null,r.default.createElement(o.default,{onPress:function(){return n(!0)}},"\u6253\u5f00 ActionSheet"),r.default.createElement(i.default,{visible:t,onCancel:!0,cancelText:"\u5173\u95ed\u5f39\u5c42"},r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e00")}},"\u6309\u94ae\u4e00"),r.default.createElement(i.ActionSheetItem,{onPress:function(){return console.log("\u6309\u94ae\u4e8c")}},"\u6309\u94ae\u4e8c")))}}()},data:{10:{name:10,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ActionSheet = _interopRequireWildcard(require("@uiw/react-native/lib/ActionSheet"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    visible = _useState2[0],\n    setVisible = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    onPress: function onPress() {\n      return setVisible(true);\n    }\n  }, "\\u6253\\u5F00 ActionSheet"), /*#__PURE__*/_react["default"].createElement(_ActionSheet["default"], {\n    visible: visible\n  }, /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e00\');\n    }\n  }, "\\u6309\\u94AE\\u4E00"), /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e8c\');\n    }\n  }, "\\u6309\\u94AE\\u4E8C")));\n}\nreturn Demo;',language:"jsx",value:"import React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible}>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo"},31:{name:31,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ActionSheet = _interopRequireWildcard(require("@uiw/react-native/lib/ActionSheet"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    visible = _useState2[0],\n    setVisible = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    onPress: function onPress() {\n      return setVisible(true);\n    }\n  }, "\\u6253\\u5F00 ActionSheet"), /*#__PURE__*/_react["default"].createElement(_ActionSheet["default"], {\n    visible: visible,\n    onCancel: true,\n    cancelText: "\\u5173\\u95ED\\u5F39\\u5C42"\n  }, /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e00\');\n    }\n  }, "\\u6309\\u94AE\\u4E00"), /*#__PURE__*/_react["default"].createElement(_ActionSheet.ActionSheetItem, {\n    onPress: function onPress() {\n      return console.log(\'\u6309\u94ae\u4e8c\');\n    }\n  }, "\\u6309\\u94AE\\u4E8C")));\n}\nreturn Demo;',language:"jsx",value:"import React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet\n        visible={visible}\n        onCancel={true}\n        cancelText='\u5173\u95ed\u5f39\u5c42'\n      >\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo"}},source:"ActionSheet \u52a8\u4f5c\u9762\u677f\n---\n\n\u8be5\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u79cd\u52a8\u4f5c\u9762\u677f, \u5e95\u90e8\u7f13\u7f13\u51fa\u73b0\n\n\x3c!-- ![](https://user-images.githubusercontent.com/57083007/137631382-70df5dd3-0200-4ddb-bd11-3578ee99d032.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n```jsx  mdx:preview\nimport React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet visible={visible}>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo\n```\n\n### \u81ea\u5b9a\u4e49\u6309\u94ae\u6587\u5b57\n```jsx  mdx:preview\nimport React, { Fragment, useState } from 'react';\nimport { Button, ActionSheet }  from '@uiw/react-native';\nimport { ActionSheetItem } from '@uiw/react-native/lib/ActionSheet'\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false)\n  return (\n    <Fragment>\n     <Button onPress={()=>setVisible(true)}>\u6253\u5f00 ActionSheet</Button>\n      <ActionSheet\n        visible={visible}\n        onCancel={true}\n        cancelText='\u5173\u95ed\u5f39\u5c42'\n      >\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e00')}>\u6309\u94ae\u4e00</ActionSheetItem>\n        <ActionSheetItem onPress={()=>console.log('\u6309\u94ae\u4e8c')}>\u6309\u94ae\u4e8c</ActionSheetItem>\n      </ActionSheet>\n    </Fragment>\n  );\n}\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| isCancel | \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5173\u95ed | Boolean | `true` |\n| dividerStyle | \u5206\u5272\u7ebf\u6837\u5f0f | DividerStyleProps | - |\n| containerStyle | \u53d6\u6d88\u7684\u5bb9\u5668\u6837\u5f0f | StyleProp<`ViewStyle`> | - |\n| activeOpacity | \u52a8\u4f5c\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a | number | `#f1f1f1` |\n| underlayColor | \u52a8\u4f5c\u6709\u89e6\u6478\u64cd\u4f5c\u65f6\u663e\u793a\u51fa\u6765\u7684\u5e95\u5c42\u7684\u989c\u8272 | string | `#f1f1f1` |\n| cancelText | \u53d6\u6d88\u7684\u6587\u672c | `React.ReactNode` | - |\n| textStyle | \u53d6\u6d88\u7684\u6587\u672c\u6837\u5f0f | `StyleProp<TextStyle>` | - |\n| onCancel | \u8499\u5c42\u5173\u95ed\u56de\u8c03 | `() => void` | - |\n\n### DividerStyleProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| itemDivider | - | StyleProp<`ViewStyle`> | `false` |\n| actionDivider | - | StyleProp<`ViewStyle`> | - |\n\n### ActionSheetItemProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| containerStyle | \u5bb9\u5668\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| textStyle | \u6587\u672c\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| onPress | \u70b9\u51fb ActionSheetItem \u89e6\u53d1\u7684\u4e8b\u4ef6 | `(event: GestureResponderEvent) => void` | - |\n\n"},a=n(71027),l=function(){return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/ActionSheet/README.md"}))}},20645:function(e,t,n){"use strict";n.r(t),n.d(t,{ActionSheetItem:function(){return y},default:function(){return _}});var r=n(18489),o=n(50678),i=n(83738),a=n(93539),l=n(68950),c=n(12720),u=n(37068),s=n(73650),f=n(67510),d=n(62453),p=n(71027),b=l.Z.get("window").width;function y(e){var t=e.onPress,n=void 0===t?function(){}:t,r=e.activeOpacity,o=void 0===r?1:r,i=e.underlayColor,a=void 0===i?"#f1f1f1":i,l=e.containerStyle,s=e.textStyle,b=e.children;return(0,p.jsx)(f.Z,{activeOpacity:o,underlayColor:a,onPress:n,children:(0,p.jsx)(c.Z,{style:u.Z.flatten([h.actionSheetItem,l]),children:(0,p.jsx)(d.Z,{style:u.Z.flatten([h.actionSheetItemText,s]),children:b})})})}var h=u.Z.create({actionSheetItem:{width:b,height:50,justifyContent:"center",alignItems:"center"},actionSheetItemText:{fontSize:20,fontWeight:"400"}}),m=["children","visible","activeOpacity","underlayColor","cancelText","dividerStyle","isCancel","containerStyle","textStyle","onCancel"],v=l.Z.get("window").width;function _(e){var t=e.children,n=e.visible,l=e.activeOpacity,f=e.underlayColor,d=e.cancelText,b=void 0===d?"\u53d6\u6d88":d,h=e.dividerStyle,v=e.isCancel,_=void 0===v||v,S=e.containerStyle,j=e.textStyle,A=e.onCancel,w=(0,i.Z)(e,m),F=!!n,E=(0,a.useState)({stateVisible:!!F,control:"props"}),C=(0,o.Z)(E,2),x=C[0],D=C[1];(0,a.useEffect)((function(){e.visible===x.stateVisible&&"state"===x.control&&D({control:"props",stateVisible:e.visible}),e.visible!==x.stateVisible&&("state"===x.control&&D((0,r.Z)((0,r.Z)({},x),{},{control:"props"})),D({control:"props",stateVisible:!!e.visible}))}),[x.stateVisible,e.visible]);return(0,p.jsx)(s.default,(0,r.Z)((0,r.Z)({placement:"bottom",animationType:"fade",transparent:!0},w),{},{visible:x.stateVisible,onClosed:function(){_&&(D({stateVisible:!1,control:"state"}),null===A||void 0===A||A())},children:(0,p.jsxs)(p.Fragment,{children:[a.Children.toArray(t).map((function(e,t){return(0,p.jsxs)(c.Z,{children:[0!==t&&(0,p.jsx)(c.Z,{style:u.Z.flatten([g.itemDivider,null===h||void 0===h?void 0:h.itemDivider])}),a.cloneElement(e,{activeOpacity:l,underlayColor:f})]},t)})),(0,p.jsx)(c.Z,{style:u.Z.flatten([g.actionDivider,null===h||void 0===h?void 0:h.actionDivider])}),(0,p.jsx)(y,{activeOpacity:l,underlayColor:f,onPress:function(){D({stateVisible:!1,control:"state"})},children:b,containerStyle:S,textStyle:j})]})}))}var g=u.Z.create({actionDivider:{backgroundColor:"rgba(197,217,232,.3)",width:v,height:6},itemDivider:{backgroundColor:"rgba(197,217,232,.3)",height:2,width:v}})},44235:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(18489),o=n(83738),i=n(93539),a=n(2894),l=n(88514),c=n(37068),u=n(3143),s=n(28351),f=n(71027),d=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function p(e){var t,n,c,p,y,h=e.children,m=e.style,v=e.textStyle,_=e.rounded,g=e.bordered,S=e.color,j=e.type,A=e.size,w=e.disabled,F=e.loading,E=(0,o.Z)(e,d);switch(j){case"warning":t=u.O9.yellow;break;case"primary":t=u.O9.blue;break;case"success":t=u.O9.green;break;case"danger":t=u.O9.red;break;case"light":t=u.O9.white;break;case"dark":t=u.O9.black}t&&(t=(0,u.$_)(t).rgb().string()),j&&(n=(0,u.$_)(t).isLight()?(0,u.$_)(u.O9.black).rgb().string():(0,u.$_)(u.O9.white).rgb().string()),j||(c=(0,u.$_)(u.O9.black).alpha(.32).rgb().string(),p=1),w&&(n=(0,u.$_)(n).alpha(.3).rgb().string()),S&&(t=(0,u.$_)(S).rgb().string(),n=(0,u.$_)(S).isLight()?(0,u.$_)(S).darken(.9).string():(0,u.$_)(S).lighten(.9).string()),!_||"number"!==typeof _&&"boolean"!==typeof _||(y=_),t&&(c=(0,u.$_)(t).darken(.2).string(),p=1),g||(p=0);var C={backgroundColor:t,borderColor:c,borderWidth:p,borderRadius:y},x={color:n},D={};A&&b[A]&&(D=b[A]);var Z={},P="".concat(A,"Box");return A&&b[P]&&(Z=b[P]),h?(0,f.jsxs)(a.Z,(0,r.Z)((0,r.Z)({testID:"RNE__Button__wrap",style:[b.button,b.content,C,Z,m],disabled:w},E),{},{children:[F&&(0,f.jsx)(l.Z,{size:16,color:n,style:b.icon}),i.Children.toArray(h).map((function(e,t){return(0,f.jsx)(s.default,{testID:"RNE__Button__div",style:[D,b.label,x,v],children:e},t)}))]})):null}p.defaultProps={activeOpacity:.5,rounded:5,bordered:!0,size:"default"};var b=c.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},87297:function(e,t,n){"use strict";n.r(t);var r=n(18489),o=n(31303),i=n(50678),a=n(83738),l=n(93539),c=n(37068),u=n(702),s=n(2894),f=n(16033),d=n(3143),p=n(71027),b=["maskClosable","children","visible","opacity","onDismiss","animatedParallelShow","animatedParallelHide"],y=c.Z.create({position:{position:"absolute",backgroundColor:"transparent",top:0,bottom:0,left:0,right:0,zIndex:9998},backdrop:{backgroundColor:"#000"},content:{backgroundColor:"#fff",position:"absolute"}});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.maskClosable,n=void 0===t||t,c=e.children,h=(e.visible,e.opacity),m=void 0===h?.6:h,v=e.onDismiss,_=e.animatedParallelShow,g=void 0===_?[]:_,S=e.animatedParallelHide,j=void 0===S?[]:S,A=(0,a.Z)(e,b),w=(0,l.useState)(!!e.visible),F=(0,i.Z)(w,2),E=F[0],C=F[1],x=(0,d.D9)(e.visible),D=(0,l.useState)(!1),Z=(0,i.Z)(D,2),P=Z[0],I=Z[1],O=(0,l.useState)(new u.Z.Value(0)),k=(0,i.Z)(O,1)[0];(0,l.useMemo)((function(){x!==e.visible&&e.visible?(C(!!e.visible),I(!1),u.Z.parallel([u.Z.spring(k,{toValue:m,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(g))).start()):x===e.visible||e.visible||u.Z.parallel([u.Z.spring(k,{toValue:0,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(j))).start((function(){C(!!e.visible),I(!0)}))}),[e.visible]);var B=(0,p.jsx)(u.Z.View,{style:[y.position,y.backdrop,{opacity:k}]}),R=(0,p.jsx)(s.Z,{activeOpacity:1,style:[y.position],onPress:function(){return v&&v()},children:B}),V=E||!1;return!E&&P&&(V=!1),(0,p.jsxs)(f.Z,(0,r.Z)((0,r.Z)({transparent:!0,animationType:"none"},A),{},{visible:V,children:[n?R:B,c&&l.Children.toArray(c).map((function(e){if(l.isValidElement(e))return l.cloneElement(e,(0,r.Z)((0,r.Z)({},e.props),{style:[{zIndex:9999},e.props.style]}))}))]}))}},73650:function(e,t,n){"use strict";n.r(t);var r=n(18489),o=n(50678),i=n(83738),a=n(93539),l=n(68950),c=n(702),u=n(37068),s=n(87297),f=n(71027),d=["onClosed","visible","children","placement"],p=l.Z.get("window").width,b=l.Z.get("window").height;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClosed,n=e.visible,l=e.children,u=e.placement,p=void 0===u?"bottom":u,b=(0,i.Z)(e,d),h=(0,a.useRef)(new c.Z.Value(0)).current,m=(0,a.useState)(0),v=(0,o.Z)(m,2),_=v[0],g=v[1],S=(0,a.useState)(0),j=(0,o.Z)(S,2),A=j[0],w=j[1],F=(0,a.useState)(new c.Z.Value(0)),E=(0,o.Z)(F,1)[0],C=/^(top|bottom)$/.test(p),x=/^(left|right)$/.test(p);(0,a.useMemo)((function(){var e="top"===p?-_:"bottom"===p?_:"left"===p?-A:"right"===p?A:0;e&&(n&&(E.setValue(e),c.Z.timing(h,{toValue:1,duration:0,useNativeDriver:!1}).start((function(e){e.finished;c.Z.parallel([c.Z.spring(E,{toValue:0,overshootClamping:!0,useNativeDriver:!0})]).start()}))),n||c.Z.parallel([c.Z.spring(E,{toValue:e,overshootClamping:!0,useNativeDriver:!0})]).start())}),[n,_,A]);var D={};C&&(D.translateY=E),x&&(D.translateX=E);var Z=(0,f.jsx)(c.Z.View,{style:[y.content,p&&y[p],{opacity:h}],children:(0,f.jsx)(c.Z.View,{onLayout:function(e){var t=e.nativeEvent.layout,n=t.height,r=t.width;!_&&C&&g(n),!A&&x&&w(r)},style:[y.content,p&&y[p],{transform:[D],backgroundColor:"#fff",position:"relative",zIndex:1e4}],children:l})});return(0,f.jsx)(s.default,(0,r.Z)((0,r.Z)({},b),{},{visible:n,onDismiss:function(){t&&t()},children:Z}))};var y=u.Z.create({content:{position:"absolute",zIndex:9999},top:{top:0,width:p,left:0,right:0},bottom:{bottom:0,left:0,width:p,right:0},left:{bottom:0,top:0,height:b,left:0},right:{bottom:0,top:0,height:b,right:0}})},28351:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(18489),o=n(83738),i=n(93539),a=n(62453),l=n(71027),c=["children"];function u(e){var t=e.children,n=(0,o.Z)(e,c);return t?i.Children.toArray(t).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,l.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t})):(0,l.jsx)(i.Fragment,{children:i.Children.toArray(t).map((function(e,t){return"string"===typeof e?(0,i.createElement)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{children:e,key:t})):i.isValidElement(e)?i.cloneElement(e,(0,r.Z)({key:t},n)):void 0})).filter(Boolean)}):null}},85153:function(e,t,n){"use strict";n.r(t),n.d(t,{black:function(){return s},blue:function(){return o},colorsPalette:function(){return d},cyan:function(){return i},green:function(){return r},navy:function(){return a},orange:function(){return c},red:function(){return u},white:function(){return f},yellow:function(){return l}});var r="#28a745",o="#008EF0",i="#1EABCD",a="#393E48",l="#ffc107",c="#F95C2B",u="#dc3545",s="#000000",f="#ffffff",d={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,n){"use strict";n.d(t,{B:function(){return l},D:function(){return a}});var r=n(93539),o=n(66897),i=n(80121);function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function l(e){var t=e.value,n=e.defaultValue,a=e.onChange,l=(0,o.Z)(),c=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(c.current=t);var u=(0,i.Z)((function(e){void 0===t&&(c.current=e,l()),null===a||void 0===a||a(e)}));return[c.current,u]}},3143:function(e,t,n){"use strict";n.d(t,{$_:function(){return o.a},D9:function(){return a.D},O9:function(){return i}});var r=n(65965),o=n.n(r),i=n(85153),a=n(63941)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=2271.23217e6d.chunk.js.map