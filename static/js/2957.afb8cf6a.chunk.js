(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2957],{59940:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(18489),o=t(83738),a=t(17186),i=t(93133),u=t(53929),c=t(98012),l=t(17285),d=t(84488),f=t(93539),s=t(71027);function b(e){var r=e.path,t=/^http/.test(r||"")?r:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===r||void 0===r?void 0:r.replace(/^\//,""));return(0,s.jsxs)("div",{style:{paddingBlock:20},children:[r&&t&&(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,s.jsx)(c.iz,{type:"vertical"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var p,y,_=t(74513),m=["path"],h=["inline","node"],j=["data-meta"],v=u.ZP.div(p||(p=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),R=(0,u.ZP)(i.Z)(y||(y=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),k=function(e,r,t){return Reflect.has(e,r)?"true"===Reflect.get(e,r):t},w=function(e){var r=e.path,t=(0,o.Z)(e,m),a=d.ZP.Preview,i=d.ZP.Code,u=d.ZP.Toolbar,p=(0,f.useRef)(null);return(0,s.jsxs)(v,{ref:p,children:[(0,s.jsx)(R,(0,n.Z)((0,n.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,r,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var r,c=e.inline,f=e.node,b=(0,o.Z)(e,h),p=b["data-meta"],y=(0,o.Z)(b,j);if(c||!(0,l.pN)(p))return(0,s.jsx)("code",(0,n.Z)({},b));var _=null===(r=f.position)||void 0===r?void 0:r.start.line,m=(0,l.Mx)(p)||String(_),v=t.components["".concat(m)];if(m&&"function"===typeof v){var R=t.data[m].value||"",w=(0,l.aE)(p);return(0,s.jsxs)(d.ZP,{disableCheckered:k(w,"disableCheckered",!0),bordered:k(w,"bordered",!0),children:[(0,s.jsx)(a,{children:(0,s.jsx)(v,{})}),(0,s.jsx)(u,{text:R,copied:k(w,"copied",!0),children:w.title||"\u793a\u4f8b"}),(0,s.jsx)(i,{children:(0,s.jsx)("code",(0,n.Z)({},y))})]})}return(0,s.jsx)("code",(0,n.Z)({},y))}}})),(0,s.jsx)(_.Z,{}),(0,s.jsx)(b,{path:r}),(0,s.jsx)(c.kF,{speed:500,children:function(e){var r=e.percent,t=e.scrollToTop;return(0,s.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,s.jsx)(c.JO,{type:"arrow-up"})},percent:r})}})]})}},12903:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(18489),o=t(59940),a={components:{9:function(){var e=n(t(12251)),r=n(t(93539));function n(e){return e&&e.__esModule?e:{default:e}}return function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(e.default,null,"Radio"),r.default.createElement(e.default,{checked:!0},"Radio checked"))}}(),28:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=a(t);if(n&&n.has(r))return n.get(r);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in r)if("default"!==u&&Object.prototype.hasOwnProperty.call(r,u)){var c=i?Object.getOwnPropertyDescriptor(r,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=r[u]}o.default=r,n&&n.set(r,o);return o}(t(93539)),o=(r=t(12251))&&r.__esModule?r:{default:r};function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}return function(){var e=i((0,n.useState)(!1),2),r=e[0],t=e[1];return n.default.createElement(o.default,{checked:r,onPress:function(){t(!r)}},"Radio")}}(),51:function(){var e=n(t(93539)),r=n(t(12251));function n(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{disabled:!0,color:"red"},"Radio")}}(),68:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=i(t);if(n&&n.has(r))return n.get(r);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in r)if("default"!==u&&Object.prototype.hasOwnProperty.call(r,u)){var c=a?Object.getOwnPropertyDescriptor(r,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=r[u]}o.default=r,n&&n.set(r,o);return o}(t(93539)),o=t(7804),a=(r=t(12251))&&r.__esModule?r:{default:r};function i(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:r})(e)}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=[{label:"\u56db\u5ddd\u83dc",value:1},{label:"\u6e56\u5317\u83dc",value:2},{label:"\u897f\u5317\u83dc",value:3},{label:"\u65b0\u7586\u83dc",value:4},{label:"\u4e1c\u5317\u83dc",value:5}];return function(){var e=u((0,n.useState)(0),2),r=e[0],t=e[1];return n.default.createElement(o.View,null,l.map((function(e,o){return n.default.createElement(a.default,{key:o,checked:r===e.value,onPress:function(){t(e.value)}},e.label)})))}}(),109:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=a(t);if(n&&n.has(r))return n.get(r);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in r)if("default"!==u&&Object.prototype.hasOwnProperty.call(r,u)){var c=i?Object.getOwnPropertyDescriptor(r,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=r[u]}o.default=r,n&&n.set(r,o);return o}(t(93539)),o=(r=t(12251))&&r.__esModule?r:{default:r};function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}return function(){var e=i((0,n.useState)(!1),2);return e[0],e[1],n.default.createElement(o.default,{checkedColor:"red",borderColor:"#008EF0"},"Radio")}}()},data:{9:{name:9,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nvar _react = _interopRequireDefault(require("react"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Radio["default"], null, "Radio"), /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    checked: true\n  }, "Radio checked"));\n}\nreturn Demo;',language:"jsx",value:"import { Radio } from '@uiw/react-native';\nimport React from \"react\"\n\nfunction Demo() {\n  return (\n    <>\n      <Radio>Radio</Radio>\n      <Radio checked>Radio checked</Radio>\n    </>\n  );\n}\n\nexport default Demo\n"},28:{name:28,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    checked = _useState2[0],\n    setChecked = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    checked: checked,\n    onPress: function onPress() {\n      setChecked(!checked);\n    }\n  }, "Radio");\n}\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onPress={() => {\n        setChecked(!checked);\n      }}\n    >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo"},51:{name:51,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    disabled: true,\n    color: "red"\n  }, "Radio");\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Radio  disabled color='red'  >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo"},68:{name:68,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar radioData = [{\n  label: \'\u56db\u5ddd\u83dc\',\n  value: 1\n}, {\n  label: \'\u6e56\u5317\u83dc\',\n  value: 2\n}, {\n  label: \'\u897f\u5317\u83dc\',\n  value: 3\n}, {\n  label: \'\u65b0\u7586\u83dc\',\n  value: 4\n}, {\n  label: \'\u4e1c\u5317\u83dc\',\n  value: 5\n}];\nfunction Demo() {\n  var _useState = (0, _react.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    value = _useState2[0],\n    setValue = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, radioData.map(function (item, idx) {\n    return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n      key: idx,\n      checked: value === item.value,\n      onPress: function onPress() {\n        setValue(item.value);\n      }\n    }, item.label);\n  }));\n}\nreturn Demo;',language:"jsx",value:"import React,  { useState } from 'react';\nimport { View } from 'react-native';\nimport { Radio } from '@uiw/react-native';\n\nconst radioData = [\n  { label: '\u56db\u5ddd\u83dc', value: 1 },\n  { label: '\u6e56\u5317\u83dc', value: 2 },\n  { label: '\u897f\u5317\u83dc', value: 3 },\n  { label: '\u65b0\u7586\u83dc', value: 4 },\n  { label: '\u4e1c\u5317\u83dc', value: 5 },\n];\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return (\n    <View>\n      {radioData.map((item, idx) => {\n        return (\n          <Radio\n            key={idx}\n            checked={value === item.value}\n            onPress={() => {\n              setValue(item.value);\n            }}\n          >\n            {item.label}\n          </Radio>\n        );\n      })}\n    </View>\n  );\n}\n\nexport default Demo\n\n"},109:{name:109,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _Radio = _interopRequireDefault(require("@uiw/react-native/lib/Radio"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    checked = _useState2[0],\n    setChecked = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_Radio["default"], {\n    checkedColor: "red",\n    borderColor: "#008EF0"\n  }, "Radio");\n}\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio  checkedColor='red' borderColor='#008EF0' >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo"}},source:"Radio \u5355\u9009\u6846\n---\n\n\u5355\u9009\u6846\uff0c\u5728\u4e00\u7ec4\u5907\u9009\u9879\u4e2d\u8fdb\u884c\u5355\u9009\u3002\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview&background=#bebebe29\nimport { Radio } from '@uiw/react-native';\nimport React from \"react\"\n\nfunction Demo() {\n  return (\n    <>\n      <Radio>Radio</Radio>\n      <Radio checked>Radio checked</Radio>\n    </>\n  );\n}\n\nexport default Demo\n\n```\n\n### \u53d7\u63a7\u7ec4\u4ef6\n\n```jsx mdx:preview&background=#bebebe29\nimport React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onPress={() => {\n        setChecked(!checked);\n      }}\n    >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo\n```\n\n### \u7981\u7528\u72b6\u6001\n\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Radio  disabled color='red'  >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo\n```\n\n### \u5355\u9009\n\n```jsx mdx:preview&background=#bebebe29\nimport React,  { useState } from 'react';\nimport { View } from 'react-native';\nimport { Radio } from '@uiw/react-native';\n\nconst radioData = [\n  { label: '\u56db\u5ddd\u83dc', value: 1 },\n  { label: '\u6e56\u5317\u83dc', value: 2 },\n  { label: '\u897f\u5317\u83dc', value: 3 },\n  { label: '\u65b0\u7586\u83dc', value: 4 },\n  { label: '\u4e1c\u5317\u83dc', value: 5 },\n];\n\nfunction Demo() {\n  const [value, setValue] = useState(0);\n  return (\n    <View>\n      {radioData.map((item, idx) => {\n        return (\n          <Radio\n            key={idx}\n            checked={value === item.value}\n            onPress={() => {\n              setValue(item.value);\n            }}\n          >\n            {item.label}\n          </Radio>\n        );\n      })}\n    </View>\n  );\n}\n\nexport default Demo\n\n\n```\n\n### \u81ea\u5b9a\u4e49\u989c\u8272\n\n```jsx mdx:preview&background=#bebebe29\nimport React, { useState } from 'react';\nimport { Radio } from '@uiw/react-native';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio  checkedColor='red' borderColor='#008EF0' >\n      Radio\n    </Radio>\n  );\n}\n\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `checked` | Radio \u662f\u5426\u88ab\u9009\u4e2d | Boolean | `false` |\n| `disabled` | \u7981\u7528 | Boolean | `false` |\n| `circleSize` | Radio \u5927\u5c0f | Number | `20` |\n| `thumbSize` | Radio \u9009\u4e2d\u90e8\u5206\u5927\u5c0f | Number | `12` |\n| `onPress` | \u70b9\u51fb Radio \u7684\u70b9\u51fb\u56de\u8c03\u51fd\u6570 | (event) => void | - |\n| `color`   | Radio \u7981\u7528\u540e\u989c\u8272 | string | `#c3c5c7` |\n| `checkedColor`   | Radio \u989c\u8272 | string | `#008EF0` |\n| `borderColor`   | Radio \u8fb9\u6846\u989c\u8272 | string | `#bdc1cc` |\n"},i=t(71027),u=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/Radio/README.md"}))}},12251:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(50678),o=t(18489),a=t(83738),i=t(93539),u=t(62453),c=t(12720),l=t(37068),d=t(702),f=t(2894),s=t(64739),b=t(71027),p=["children"],y=["style","color","circleSize","thumbSize","disabled","checkedColor","borderColor"];function _(e){var r=e.children,t=(0,a.Z)(e,p);return"string"===typeof r||r&&"Text"===r.type.displayName?(0,b.jsx)(u.Z,(0,o.Z)((0,o.Z)({},t),{},{children:r})):(0,b.jsx)(c.Z,(0,o.Z)((0,o.Z)({},t),{},{children:r}))}function m(e){var r=(0,s.useTheme)(),t=function(e){var r=e.textColor;return l.Z.create({defalut:{},checkBg:{borderRadius:999,borderColor:"rgb(189, 193, 204)",borderWidth:1,justifyContent:"center",alignItems:"center"},check:{borderRadius:999,backgroundColor:"#4DD964"},touch:{flexDirection:"row",alignItems:"center"},label:{marginLeft:6,color:r}})}({textColor:r.colors.primary_text||"#ccc"}),u=(0,i.useState)({checked:e.checked,sizeValue:new d.Z.Value(0),control:"state"}),p=(0,n.Z)(u,2),m=p[0],h=p[1];function j(r){d.Z.spring(m.sizeValue,{toValue:r?e.thumbSize:0,overshootClamping:!0,useNativeDriver:!1}).start()}(0,i.useEffect)((function(){j(e.checked)}),[]),(0,i.useEffect)((function(){return"state"===m.control&&e.checked===m.checked?h((0,o.Z)((0,o.Z)({},m),{},{control:"props"})):e.checked!==m.checked?(d.Z.spring(m.sizeValue,{toValue:e.checked?e.thumbSize:0,overshootClamping:!0,useNativeDriver:!1}).start(),h((0,o.Z)((0,o.Z)({},m),{},{checked:e.checked,control:"props"}))):void 0}),[e.checked]);var v=e.style,R=e.color,k=e.circleSize,w=e.thumbSize,g=e.disabled,S=e.checkedColor,O=void 0===S?r.colors.primary_background||"#3578e5":S,x=e.borderColor,D=(0,a.Z)(e,y),I=m.sizeValue.interpolate({inputRange:[0,w],outputRange:[0,w]}),P=g?R:O,A=g?R:x;return(0,b.jsx)(c.Z,(0,o.Z)((0,o.Z)({testID:"RNE__Radio__wrap",style:[t.defalut,v]},D),{},{children:(0,b.jsxs)(f.Z,{disabled:g,style:[t.touch],onPress:function(r){var t=e.onPress;h((0,o.Z)((0,o.Z)({},m),{},{checked:!0,control:"state"})),j(!0),t&&t(r)},testID:"RNE__Radio__view",children:[(0,b.jsx)(d.Z.View,{style:[t.checkBg,{width:k,height:k,borderColor:A}],testID:"RNE__Radio__border",children:(0,b.jsx)(d.Z.View,{style:[t.check,{width:I,height:I,backgroundColor:P}],testID:"RNE__Radio__box"})}),e.children&&(0,b.jsx)(_,{style:[t.label,{opacity:g?.3:1}],children:e.children})]})}))}m.defaultProps={checked:!1,circleSize:20,borderColor:"#bdc1cc",color:"#c3c5c7",thumbSize:12}},50882:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=50882,e.exports=r}}]);
//# sourceMappingURL=2957.afb8cf6a.chunk.js.map