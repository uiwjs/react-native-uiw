(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4704],{59940:function(e,r,t){"use strict";t.d(r,{Z:function(){return R}});var n=t(1413),o=t(45987),a=t(30168),i=t(70377),c=t(53929),l=t(78069),u=t(17285),d=t(61366),s=t(93539),f=t(71027);function p(e){var r=e.path,t=/^http/.test(r||"")?r:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===r||void 0===r?void 0:r.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[r&&t&&(0,f.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(l.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var b,y,_=["path"],h=["inline","node"],m=["data-meta"],v=c.ZP.div(b||(b=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),j=(0,c.ZP)(i.Z)(y||(y=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),k=function(e,r,t){return Reflect.has(e,r)?"true"===Reflect.get(e,r):t},R=function(e){var r=e.path,t=(0,o.Z)(e,_),a=(0,s.useRef)(null);return(0,f.jsxs)(v,{ref:a,children:[(0,f.jsx)(j,(0,n.Z)((0,n.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,r,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var r,a=e.inline,i=e.node,c=(0,o.Z)(e,h),l=c["data-meta"],s=(0,o.Z)(c,m);if(a||!(0,u.pN)(l))return(0,f.jsx)("code",(0,n.Z)({},c));var p=null===(r=i.position)||void 0===r?void 0:r.start.line,b=(0,u.Mx)(l)||String(p),y=t.components["".concat(b)];if(b&&"function"===typeof y){var _=t.data[b].value||"",v=(0,u.aE)(l);return(0,f.jsx)(d.Z,{disableCheckered:k(v,"disableCheckered",!0),disableToolbar:k(v,"disableToolbar",!1),disableCode:k(v,"disableCode",!1),disablePreview:k(v,"disablePreview",!1),bordered:k(v,"bordered",!0),copied:k(v,"copied",!0),background:v.background,toolbar:v.title||"\u793a\u4f8b",code:(0,f.jsx)("code",(0,n.Z)({},s)),text:_,children:(0,f.jsx)(y,{})})}return(0,f.jsx)("code",(0,n.Z)({},s))}}})),(0,f.jsx)(p,{path:r}),(0,f.jsx)(l.kF,{speed:500,children:function(e){var r=e.percent,t=e.scrollToTop;return(0,f.jsx)(l.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,f.jsx)(l.JO,{type:"arrow-up"})},percent:r})}})]})}},12903:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(1413),o=t(59940),a={components:{9:function(){var e=n(t(12251)),r=n(t(93539));function n(e){return e&&e.__esModule?e:{default:e}}return function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(e.default,null,"Radio"),r.default.createElement(e.default,{checked:!0},"Radio checked"))}}(),29:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=a(t);if(n&&n.has(r))return n.get(r);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if("default"!==c&&Object.prototype.hasOwnProperty.call(r,c)){var l=i?Object.getOwnPropertyDescriptor(r,c):null;l&&(l.get||l.set)?Object.defineProperty(o,c,l):o[c]=r[c]}o.default=r,n&&n.set(r,o);return o}(t(93539)),o=(r=t(12251))&&r.__esModule?r:{default:r};function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}return function(){var e=i((0,n.useState)(!1),2),r=e[0],t=e[1];return n.default.createElement(o.default,{checked:r,onPress:function(){t(!r)}},"Radio")}}(),52:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=i(t);if(n&&n.has(r))return n.get(r);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if("default"!==c&&Object.prototype.hasOwnProperty.call(r,c)){var l=a?Object.getOwnPropertyDescriptor(r,c):null;l&&(l.get||l.set)?Object.defineProperty(o,c,l):o[c]=r[c]}o.default=r,n&&n.set(r,o);return o}(t(93539)),o=t(95164),a=(r=t(12251))&&r.__esModule?r:{default:r};function i(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:r})(e)}function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u=[{label:"\u56db\u5ddd\u83dc",value:1},{label:"\u6e56\u5317\u83dc",value:2},{label:"\u897f\u5317\u83dc",value:3},{label:"\u65b0\u7586\u83dc",value:4},{label:"\u4e1c\u5317\u83dc",value:5}];return function(){var e=c((0,n.useState)(0),2),r=e[0],t=e[1];return n.default.createElement(o.View,null,u.map((function(e,o){return n.default.createElement(a.default,{key:o,checked:r===e.value,onPress:function(){t(e.value)}},e.label)})))}}()},data:{9:{name:9,meta:{},code:'"use strict";\n\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nvar _react = _interopRequireDefault(require("react"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Radio["default"], null, "Radio"), /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    checked: true\n  }, "Radio checked"));\n}\nreturn Demo;',language:"jsx",value:"import { Radio } from '@uiw/react-native';\nimport React from \"react\"\n\nfunction Demo() {\n  return (\n    <>\n      <Radio>Radio</Radio>\n      <Radio checked>Radio checked</Radio>\n    </>\n    \n  );\n}\n\nexport default Demo\n"},29:{name:29,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    checked = _useState2[0],\n    setChecked = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    checked: checked,\n    onPress: function onPress() {\n      setChecked(!checked);\n    }\n  }, "Radio");\n}\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onPress={() => {\n        setChecked(!checked);\n      }}\n    >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo"},52:{name:52,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar radioData = [{\n  label: \'\u56db\u5ddd\u83dc\',\n  value: 1\n}, {\n  label: \'\u6e56\u5317\u83dc\',\n  value: 2\n}, {\n  label: \'\u897f\u5317\u83dc\',\n  value: 3\n}, {\n  label: \'\u65b0\u7586\u83dc\',\n  value: 4\n}, {\n  label: \'\u4e1c\u5317\u83dc\',\n  value: 5\n}];\nfunction Demo() {\n  var _useState = (0, _react.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    value = _useState2[0],\n    setValue = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, radioData.map(function (item, idx) {\n    return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n      key: idx,\n      checked: value === item.value,\n      onPress: function onPress() {\n        setValue(item.value);\n      }\n    }, item.label);\n  }));\n}\nreturn Demo;',language:"jsx",value:"import React,  { useState } from 'react';\nimport { View } from 'react-native';\nimport { Radio } from '@uiw/react-native';\n\nconst radioData = [\n  { label: '\u56db\u5ddd\u83dc', value: 1 },\n  { label: '\u6e56\u5317\u83dc', value: 2 },\n  { label: '\u897f\u5317\u83dc', value: 3 },\n  { label: '\u65b0\u7586\u83dc', value: 4 },\n  { label: '\u4e1c\u5317\u83dc', value: 5 },\n];\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return (\n    <View>\n      {radioData.map((item, idx) => {\n        return (\n          <Radio\n            key={idx}\n            checked={value === item.value}\n            onPress={() => {\n              setValue(item.value);\n            }}\n          >\n            {item.label}\n          </Radio>\n        );\n      })}\n    </View>\n  );\n}\n\nexport default Demo\n\n"}},source:"Radio \u5355\u9009\u6846\n---\n\n\u5355\u9009\u6846\uff0c\u5728\u4e00\u7ec4\u5907\u9009\u9879\u4e2d\u8fdb\u884c\u5355\u9009\u3002\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx  mdx:preview\nimport { Radio } from '@uiw/react-native';\nimport React from \"react\"\n\nfunction Demo() {\n  return (\n    <>\n      <Radio>Radio</Radio>\n      <Radio checked>Radio checked</Radio>\n    </>\n    \n  );\n}\n\nexport default Demo\n\n```\n\n### \u53d7\u63a7\u7ec4\u4ef6\n\n```jsx  mdx:preview\nimport React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onPress={() => {\n        setChecked(!checked);\n      }}\n    >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo\n```\n\n### \u5355\u9009\n\n```jsx   mdx:preview\nimport React,  { useState } from 'react';\nimport { View } from 'react-native';\nimport { Radio } from '@uiw/react-native';\n\nconst radioData = [\n  { label: '\u56db\u5ddd\u83dc', value: 1 },\n  { label: '\u6e56\u5317\u83dc', value: 2 },\n  { label: '\u897f\u5317\u83dc', value: 3 },\n  { label: '\u65b0\u7586\u83dc', value: 4 },\n  { label: '\u4e1c\u5317\u83dc', value: 5 },\n];\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return (\n    <View>\n      {radioData.map((item, idx) => {\n        return (\n          <Radio\n            key={idx}\n            checked={value === item.value}\n            onPress={() => {\n              setValue(item.value);\n            }}\n          >\n            {item.label}\n          </Radio>\n        );\n      })}\n    </View>\n  );\n}\n\nexport default Demo\n\n\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `checked` | Radio \u662f\u5426\u88ab\u9009\u4e2d | Boolean | `false` |\n| `disabled` | \u7981\u7528 | Boolean | `false` |\n| `circleSize` | Radio \u5927\u5c0f | Number | `20` |\n| `thumbSize` | Radio \u9009\u4e2d\u90e8\u5206\u5927\u5c0f | Number | `12` |\n| `onPress` | \u70b9\u51fb Radio \u7684\u70b9\u51fb\u56de\u8c03\u51fd\u6570 | (event) => void | - |\n| `color`   | Radio \u7981\u7528\u540e\u989c\u8272 | string | `#c3c5c7` |\n| `checkedColor`   | Radio \u989c\u8272 | string | `#008EF0` |\n| `borderColor`   | Radio \u8fb9\u6846\u989c\u8272 | string | `#bdc1cc` |\n"},i=t(71027),c=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/Radio/README.md"}))}},12251:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(15671),o=t(43144),a=t(60136),i=t(27277),c=t(1413),l=t(45987),u=t(93539),d=t(62453),s=t(12720),f=t(37068),p=t(702),b=t(2894),y=t(71027),_=["children"],h=["style","color","circleSize","thumbSize","disabled","checkedColor","borderColor"];function m(e){var r=e.children,t=(0,l.Z)(e,_);return"string"===typeof r||r&&"Text"===r.type.displayName?(0,y.jsx)(d.Z,(0,c.Z)((0,c.Z)({},t),{},{children:r})):(0,y.jsx)(s.Z,(0,c.Z)((0,c.Z)({},t),{},{children:r}))}var v=f.Z.create({defalut:{},checkBg:{borderRadius:999,borderColor:"rgb(189, 193, 204)",borderWidth:1,justifyContent:"center",alignItems:"center"},check:{borderRadius:999,backgroundColor:"#4DD964"},touch:{flexDirection:"row",alignItems:"center"},label:{marginLeft:6}}),j=function(e){(0,a.Z)(t,e);var r=(0,i.Z)(t);function t(e){var o;return(0,n.Z)(this,t),(o=r.call(this,e)).handlePress=function(e){var r=o.props.onPress;o.setState({checked:!0,control:"state"},(function(){o.animatedStart(!0),r&&r(e)}))},o.state={checked:e.checked,sizeValue:new p.Z.Value(0),control:"state"},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.animatedStart(this.props.checked)}},{key:"animatedStart",value:function(e){p.Z.spring(this.state.sizeValue,{toValue:e?this.props.thumbSize:0,overshootClamping:!0,useNativeDriver:!1}).start()}},{key:"render",value:function(){var e=this.props,r=e.style,t=e.color,n=e.circleSize,o=e.thumbSize,a=e.disabled,i=e.checkedColor,u=e.borderColor,d=(0,l.Z)(e,h),f=this.state.sizeValue.interpolate({inputRange:[0,o],outputRange:[0,o]}),_=a?t:i,j=a?t:u;return(0,y.jsx)(s.Z,(0,c.Z)((0,c.Z)({testID:"RNE__Radio__wrap",style:[v.defalut,r]},d),{},{children:(0,y.jsxs)(b.Z,{disabled:a,style:[v.touch],onPress:this.handlePress,testID:"RNE__Radio__view",children:[(0,y.jsx)(p.Z.View,{style:[v.checkBg,{width:n,height:n,borderColor:j}],testID:"RNE__Radio__border",children:(0,y.jsx)(p.Z.View,{style:[v.check,{width:f,height:f,backgroundColor:_}],testID:"RNE__Radio__box"})}),this.props.children&&(0,y.jsx)(m,{style:[v.label,{opacity:a?.3:1}],children:this.props.children})]})}))}}],[{key:"getDerivedStateFromProps",value:function(e,r){return"state"===r.control&&e.checked===r.checked?{control:"props"}:e.checked!==r.checked?(p.Z.spring(r.sizeValue,{toValue:e.checked?e.thumbSize:0,overshootClamping:!0,useNativeDriver:!1}).start(),{checked:e.checked,control:"props"}):null}}]),t}(u.Component);j.defaultProps={checked:!1,circleSize:20,checkedColor:"#008EF0",borderColor:"#bdc1cc",color:"#c3c5c7",thumbSize:12}},50882:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=50882,e.exports=r}}]);
//# sourceMappingURL=4704.8f327674.chunk.js.map