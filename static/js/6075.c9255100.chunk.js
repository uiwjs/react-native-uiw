(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6075],{59940:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(18489),o=t(83738),a=t(17186),i=t(93908),l=t(53929),c=t(51928),u=t(17285),s=t(61366),d=t(93539),p=t(71027);function f(e){var n=e.path,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===n||void 0===n?void 0:n.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[n&&t&&(0,p.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(c.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var y,g,m=["path"],h=["inline","node"],w=["data-meta"],b=l.ZP.div(y||(y=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),j=(0,l.ZP)(i.Z)(g||(g=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),x=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t},C=function(e){var n=e.path,t=(0,o.Z)(e,m),a=(0,d.useRef)(null);return(0,p.jsxs)(b,{ref:a,children:[(0,p.jsx)(j,(0,r.Z)((0,r.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var n,a=e.inline,i=e.node,l=(0,o.Z)(e,h),c=l["data-meta"],d=(0,o.Z)(l,w);if(a||!(0,u.pN)(c))return(0,p.jsx)("code",(0,r.Z)({},l));var f=null===(n=i.position)||void 0===n?void 0:n.start.line,y=(0,u.Mx)(c)||String(f),g=t.components["".concat(y)];if(y&&"function"===typeof g){var m=t.data[y].value||"",b=(0,u.aE)(c);return(0,p.jsx)(s.Z,{disableCheckered:x(b,"disableCheckered",!0),disableToolbar:x(b,"disableToolbar",!1),disableCode:x(b,"disableCode",!1),disablePreview:x(b,"disablePreview",!1),bordered:x(b,"bordered",!0),copied:x(b,"copied",!0),background:b.background,toolbar:b.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,r.Z)({},d)),text:m,children:(0,p.jsx)(g,{})})}return(0,p.jsx)("code",(0,r.Z)({},d))}}})),(0,p.jsx)(f,{path:n}),(0,p.jsx)(c.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,p.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,p.jsx)(c.JO,{type:"arrow-up"})},percent:n})}})]})}},65027:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(18489),o=t(59940),a={components:{9:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var r=c(t);if(r&&r.has(n))return r.get(n);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&Object.prototype.hasOwnProperty.call(n,i)){var l=a?Object.getOwnPropertyDescriptor(n,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=n[i]}o.default=n,r&&r.set(n,o);return o}(t(93539)),r=t(95164),o=l(t(71282)),a=l(t(80788)),i=l(t(69809));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}var u=a.default.Header,s=["https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg"];return function(){return n.default.createElement(r.ScrollView,{style:{flex:1}},n.default.createElement(u,{description:"\u57fa\u672c\u4f7f\u7528"}),n.default.createElement(o.default,{isCollapsed:!0,disablePresses:!0,onCollapseWillChange:function(){},onCollapseChanged:function(){}},(0,i.default)(s,(function(e,t){return function(e,t){return n.default.createElement(r.View,{key:t,style:{padding:20,backgroundColor:"#fff"}},n.default.createElement(r.Image,{source:{uri:s[t]},style:{height:120}}))}(0,t)}))))}}(),56:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var r=c(t);if(r&&r.has(n))return r.get(n);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&Object.prototype.hasOwnProperty.call(n,i)){var l=a?Object.getOwnPropertyDescriptor(n,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=n[i]}o.default=n,r&&r.set(n,o);return o}(t(93539)),r=t(95164),o=l(t(71282)),a=l(t(80788)),i=l(t(69809));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}var u=a.default.Header,s=["https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg"];return function(){return n.default.createElement(r.ScrollView,{style:{flex:1}},n.default.createElement(u,{description:"\u57fa\u672c\u4f7f\u7528"}),n.default.createElement(o.default,{isCollapsed:!1,disablePresses:!0,onCollapseWillChange:function(){},onCollapseChanged:function(){}},(0,i.default)(s,(function(e,t){return function(e,t){return n.default.createElement(r.View,{key:t,style:{padding:20,backgroundColor:"#fff"}},n.default.createElement(r.Image,{source:{uri:s[t]},style:{height:120}}))}(0,t)}))))}}(),102:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var r=c(t);if(r&&r.has(n))return r.get(n);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&Object.prototype.hasOwnProperty.call(n,i)){var l=a?Object.getOwnPropertyDescriptor(n,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=n[i]}o.default=n,r&&r.set(n,o);return o}(t(93539)),r=t(95164),o=l(t(71282)),a=l(t(80788)),i=l(t(69809));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}var u=a.default.Header,s=["https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg","https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg"];return function(){return n.default.createElement(r.ScrollView,{style:{flex:1}},n.default.createElement(u,{description:"\u57fa\u672c\u4f7f\u7528"}),n.default.createElement(o.default,{isCollapsed:!0,disablePresses:!0,onCollapseWillChange:function(){},onCollapseChanged:function(){},itemBorderRadius:"20"},(0,i.default)(s,(function(e,t){return function(e,t){return n.default.createElement(r.View,{key:t,style:{padding:20,backgroundColor:"#fff"}},n.default.createElement(r.Image,{source:{uri:s[t]},style:{height:120}}))}(0,t)}))))}}()},data:{9:{name:9,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _CardCollapse = _interopRequireDefault(require("@uiw/react-native/lib/CardCollapse"));\nvar _Layout = _interopRequireDefault(require("../Layout"));\nvar _map = _interopRequireDefault(require("lodash/map"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar Header = _Layout["default"].Header;\nvar contents = [\'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\'];\nfunction Demo() {\n  var renderItem = function renderItem(_, index) {\n    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n      key: index,\n      style: {\n        padding: 20,\n        backgroundColor: \'#fff\'\n      }\n    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {\n      source: {\n        uri: contents[index]\n      },\n      style: {\n        height: 120\n      }\n    }));\n  };\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {\n    style: {\n      flex: 1\n    }\n  }, /*#__PURE__*/_react["default"].createElement(Header, {\n    description: \'\u57fa\u672c\u4f7f\u7528\'\n  }), /*#__PURE__*/_react["default"].createElement(_CardCollapse["default"], {\n    isCollapsed: true //\u662f\u5426\u6298\u53e0\n    ,\n    disablePresses: true //\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n    ,\n    onCollapseWillChange: function onCollapseWillChange() {},\n    onCollapseChanged: function onCollapseChanged() {}\n  }, (0, _map["default"])(contents, function (item, index) {\n    return renderItem(item, index);\n  })));\n}\nreturn Demo;',language:"jsx",value:"import React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n       isCollapsed={true}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo\n"},56:{name:56,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _CardCollapse = _interopRequireDefault(require("@uiw/react-native/lib/CardCollapse"));\nvar _Layout = _interopRequireDefault(require("../Layout"));\nvar _map = _interopRequireDefault(require("lodash/map"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar Header = _Layout["default"].Header;\nvar contents = [\'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\'];\nfunction Demo() {\n  var renderItem = function renderItem(_, index) {\n    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n      key: index,\n      style: {\n        padding: 20,\n        backgroundColor: \'#fff\'\n      }\n    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {\n      source: {\n        uri: contents[index]\n      },\n      style: {\n        height: 120\n      }\n    }));\n  };\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {\n    style: {\n      flex: 1\n    }\n  }, /*#__PURE__*/_react["default"].createElement(Header, {\n    description: \'\u57fa\u672c\u4f7f\u7528\'\n  }), /*#__PURE__*/_react["default"].createElement(_CardCollapse["default"], {\n    isCollapsed: false //\u662f\u5426\u6298\u53e0\n    ,\n    disablePresses: true //\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n    ,\n    onCollapseWillChange: function onCollapseWillChange() {},\n    onCollapseChanged: function onCollapseChanged() {}\n  }, (0, _map["default"])(contents, function (item, index) {\n    return renderItem(item, index);\n  })));\n}\nreturn Demo;',language:"jsx",value:"import React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n       isCollapsed={false}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo\n"},102:{name:102,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _CardCollapse = _interopRequireDefault(require("@uiw/react-native/lib/CardCollapse"));\nvar _Layout = _interopRequireDefault(require("../Layout"));\nvar _map = _interopRequireDefault(require("lodash/map"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar Header = _Layout["default"].Header;\nvar contents = [\'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg\', \'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg\'];\nfunction Demo() {\n  var renderItem = function renderItem(_, index) {\n    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n      key: index,\n      style: {\n        padding: 20,\n        backgroundColor: \'#fff\'\n      }\n    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {\n      source: {\n        uri: contents[index]\n      },\n      style: {\n        height: 120\n      }\n    }));\n  };\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {\n    style: {\n      flex: 1\n    }\n  }, /*#__PURE__*/_react["default"].createElement(Header, {\n    description: \'\u57fa\u672c\u4f7f\u7528\'\n  }), /*#__PURE__*/_react["default"].createElement(_CardCollapse["default"], {\n    isCollapsed: true //\u662f\u5426\u6298\u53e0\n    ,\n    disablePresses: true //\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n    ,\n    onCollapseWillChange: function onCollapseWillChange() {},\n    onCollapseChanged: function onCollapseChanged() {},\n    itemBorderRadius: "20"\n  }, (0, _map["default"])(contents, function (item, index) {\n    return renderItem(item, index);\n  })));\n}\nreturn Demo;',language:"jsx",value:"import React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n        isCollapsed={true}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n        itemBorderRadius='20'\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo"}},source:"CardCollapse \u53ef\u6298\u53e0\u5361\u7247\u5217\u8868\n---\n\n\u53ef\u6298\u53e0\u5361\u7247\u5217\u8868\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```jsx mdx:preview\nimport React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n       isCollapsed={true}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo\n\n```\n\n### \u9ed8\u8ba4\u4e0d\u6298\u53e0\n\n\x3c!--DemoStart--\x3e \n```jsx mdx:preview\nimport React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n       isCollapsed={false}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo\n\n```\n### \u5361\u7247\u5706\u89d2\n\n\x3c!--DemoStart--\x3e \n```jsx mdx:preview\nimport React,{ Component } from 'react';\nimport { ScrollView, View,Image } from 'react-native';\nimport { CardCollapse } from '@uiw/react-native';\nimport Layout from '../Layout';\nimport map from 'lodash/map'\n\nconst { Header} = Layout;\nconst contents = [\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg',\n  'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg',\n];\n\nfunction Demo() {\n  const renderItem = (_, index) => {\n    return (\n      <View key={index} style={{ padding: 20,backgroundColor: '#fff'}}>\n          <Image source={{uri: contents[index]}} style={{ height: 120 }} /> \n      </View>\n    );\n  }\n    return (\n    <ScrollView style={{ flex: 1 }}>\n      <Header description={'\u57fa\u672c\u4f7f\u7528'} />\n      <CardCollapse\n        isCollapsed={true}//\u662f\u5426\u6298\u53e0\n        disablePresses={true}//\u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb\n        onCollapseWillChange={()=>{}}\n        onCollapseChanged={()=>{}}\n        itemBorderRadius='20'\n      >\n        {map(contents, (item, index) => {\n          return renderItem(item, index);\n        })}\n      </CardCollapse>\n    </ScrollView>\n    )\n}\n\nexport default Demo\n```\n\n#### \u5c5e\u6027\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `isCollapsed` | \u662f\u5426\u6298\u53e0 | `boolean` | - |\n| `children` | \u6e32\u67d3\u7684\u5185\u5bb9 | `JSX.Element, JSX.Element[]` | - |\n| `containerStyle` | \u5916\u5c42\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| `contentContainerStyle` | \u5185\u5bb9\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n| `itemBorderRadius` | \u5361\u7247\u5706\u89d2 | `number` | - |\n| `onItemPress` | \u70b9\u51fb\u5361\u7247\u56de\u8c03 | (`index: number) => void` | - |\n| `onCollapseWillChange` | \u5361\u7247\u6298\u53e0\u56de\u8c03\uff08\u503c\u662f\u672a\u6765\u6298\u53e0\u72b6\u6001\uff09 | `(changed: boolean) => void` | - |\n| `onCollapseChanged` | \u5361\u7247\u6298\u53e0\u56de\u8c03\uff08\u503c\u662f\u76ee\u524d\u72b6\u6001\uff09 | `(changed: boolean) => void` | - |\n| `disablePresses` | \u5361\u7247\u662f\u5426\u53ef\u4ee5\u70b9\u51fb | `boolean` | - |\n"},i=t(71027),l=function(){return(0,i.jsx)(o.Z,(0,r.Z)((0,r.Z)({},a),{},{path:"/packages/core/src/CardCollapse/README.md"}))}},71282:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(27166),o=t(33032),a=t(50678),i=t(93539),l=t(88398),c=t.n(l),u=t(702),s=t(57876),d=t(2894),p=t(12720),f=t(86404),y=t(44660),g=t(68950),m=t(37068),h=t(3143),w=t(71027),b=8,j=300,x=24,C=.8;function v(e){var n=e.isCollapsed,t=e.children,l=e.contentContainerStyle,m=e.itemBorderRadius,h=e.disablePresses,v=e.containerStyle,k=e.onCollapseChanged,E=(0,i.useState)(n),D=(0,a.Z)(E,2),F=D[0],S=D[1],Z=(0,i.useState)(void 0),P=(0,a.Z)(Z,2),I=P[0],O=P[1],R=new u.Z.Value(F?C:1),V=new u.Z.Value(F?C:1),B=new u.Z.Value(F?0:1),W=i.Children.map(t,(function(e,n){return new u.Z.Value(L(n))})),q=i.Children.count(t),A=s.Z.bezier(0,0,.58,1),z=h?p.Z:d.Z;(0,i.useEffect)((function(){f.Z.configureNext(f.Z.Presets.easeInEaseOut)}),[F]);var M=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([N(),H()]));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=F?C:1;return new Promise((function(n){u.Z.parallel([u.Z.timing(V,{duration:j,toValue:Number(e),useNativeDriver:!0}),u.Z.timing(R,{toValue:Number(e),easing:A,duration:j,useNativeDriver:!0}),u.Z.timing(B,{toValue:Number(F?0:1),easing:A,duration:j,useNativeDriver:!0})]).start(n)}))};function L(e){return F?.9:1}var H=function(){for(var e=[],n=function(n){var t=L();e.push(new Promise((function(e){u.Z.timing(W[n],{toValue:Number(t),easing:A,duration:j,useNativeDriver:!0}).start(e)})))},t=0;t<q;t++)n(t);return Promise.all(e)},U=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(S(!0),c()(e,"onCollapseWillChange",!0),!k){n.next=8;break}return n.next=5,M();case 5:k(!0),n.next=9;break;case 8:M();case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(S(!1),c()(e,"onCollapseWillChange",!1),!k){n.next=8;break}return n.next=5,M();case 5:k(!1),n.next=9;break;case 8:M();case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(e){var n=function(e){var n=0;return e===q-2&&(n+=b),e===q-1&&(n+=2*b),n}(e);return F?{position:0!==e?"absolute":void 0,top:n}:{marginBottom:x,marginTop:0===e?40:void 0}},X=function(e){var n=e.nativeEvent.layout.height;n&&O(n)},G=function(n,t){return(0,w.jsx)(u.Z.View,{onLayout:0===t?X:void 0,style:["ios"===y.Z.OS&&_.containerShadow,J(t),{borderRadius:"ios"===y.Z.OS?m:void 0,alignSelf:"center",zIndex:q-t,transform:[{scaleX:W[t]}],width:g.Z.get("screen").width-40,height:F?I:void 0}],collapsable:!1,children:(0,w.jsx)(z,{style:[l,_.card,{borderRadius:m}],onPress:function(){return h&&function(n){c()(e,"onItemPress",n)}(t)},children:(0,w.jsx)(d.Z,{onPress:U,children:(0,w.jsx)(u.Z.View,{style:0!==t?{opacity:B}:void 0,collapsable:!1,children:n})})})},t)};return(0,w.jsx)(p.Z,{style:v,children:(0,w.jsxs)(p.Z,{style:{marginBottom:3*b},children:[i.Children.map(t,(function(e,n){return G(e,n)})),F&&(0,w.jsx)(d.Z,{onPress:T,activeOpacity:1,style:[_.touchable,{height:I?I+2*b:void 0,zIndex:q}]})]})})}var _=m.Z.create({touchable:{position:"absolute",width:"100%"},containerShadow:{backgroundColor:h.O9.white,shadowColor:h.O9.colorsPalette.dark40,shadowOpacity:.25,shadowRadius:12,shadowOffset:{height:5,width:0}},card:{overflow:"hidden",flexShrink:1}})},80788:function(e,n,t){"use strict";t.r(n),t.d(n,{Container:function(){return _},default:function(){return k}});var r=t(27853),o=t(84531),a=t(81020),i=t(18334),l=t(18489),c=t(83738),u=t(93539),s=t(12720),d=t(62453),p=t(49568),f=t(57109),y=t(37068),g=t(71027),m=["children","style","isScroll"],h=["children","copyright","style","isShowCopyRight"],w=["title","titleStyle","bodyStyle","children","style","showTitle","extra"],b=["children"],j=function(e){var n=e.children,t=e.title,r=e.description,o=e.style,a=e.titleStyle,i=e.descriptionStyle;return(0,g.jsxs)(s.Z,{style:[E.header,o],children:[t&&(0,g.jsx)(d.Z,{style:[E.title,a],children:t}),r&&(0,g.jsx)(d.Z,{style:[E.description,i],children:r}),n]})},x=function(e){var n=e.children,t=e.style,r=(e.isScroll,(0,c.Z)(e,m));return(0,g.jsx)(p.Z,(0,l.Z)((0,l.Z)({style:[E.body,t],automaticallyAdjustContentInsets:!1},r),{},{children:n}))},C=function(e){var n=e.children,t=e.copyright,r=e.style,o=e.isShowCopyRight,a=(0,c.Z)(e,h);return(0,g.jsxs)(s.Z,(0,l.Z)((0,l.Z)({style:[E.footer,r]},a),{},{children:[o&&(0,g.jsx)(d.Z,{style:E.copyright,children:t}),n]}))},v=function(e){var n=e.title,t=e.titleStyle,r=e.bodyStyle,o=e.children,a=e.style,i=e.showTitle,u=e.extra,p=(0,c.Z)(e,w);return(0,g.jsxs)(s.Z,(0,l.Z)((0,l.Z)({style:a},p),{},{children:[u?(0,g.jsxs)(s.Z,{style:[E.extra,E.cardTitle],children:[i&&(0,g.jsx)(s.Z,{style:{flex:2},children:(0,g.jsx)(d.Z,{style:[t],children:n})}),(0,g.jsx)(s.Z,{children:u})]}):i&&(0,g.jsx)(d.Z,{style:t?[E.cardTitle,t]:[E.cardTitle],children:n}),o&&(0,g.jsx)(s.Z,{style:r?[E.cardBody,r]:[E.cardBody],children:o})]}))},_=function(e){var n=e.children,t=(0,c.Z)(e,b);return(0,g.jsx)(f.Z,(0,l.Z)((0,l.Z)({style:{backgroundColor:"#ededed"}},t),{},{children:(0,g.jsx)(p.Z,(0,l.Z)((0,l.Z)({style:{height:"100%"}},t),{},{children:n}))}))},k=function(e){(0,a.Z)(t,e);var n=(0,i.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,o.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.style;return(0,g.jsx)(s.Z,{style:[E.container,t],children:n})}}]),t}(u.PureComponent);k.Header=j,k.Body=x,k.Footer=C,k.Card=v;var E=y.Z.create({container:{backgroundColor:"#ededed",minHeight:"100%",flexDirection:"column"},header:{paddingTop:25,paddingBottom:8,paddingLeft:16,paddingRight:16,shadowColor:"#E6E6E6",backgroundColor:"transparent",shadowOffset:{width:0,height:3},shadowRadius:3,shadowOpacity:0,zIndex:999},footer:{height:60,justifyContent:"center",alignItems:"center",shadowColor:"#E6E6E6",zIndex:999},body:{backgroundColor:"#ededed"},logo:{flex:1,flexDirection:"row",justifyContent:"center",marginBottom:20},title:{fontSize:20,color:"#414141"},description:{fontSize:14,marginTop:20,color:"#9A9A9A"},copyright:{fontSize:14,color:"#686868"},cardTitle:{fontSize:14,backgroundColor:"#F7F7F7",paddingLeft:16,marginTop:16,paddingRight:16,paddingTop:12,paddingBottom:12,marginBottom:16,color:"#9A9A9A"},cardBody:{},extra:{backgroundColor:"#F7F7F7",display:"flex",flexDirection:"row",flexWrap:"wrap"}});k.Header=j,k.Body=x,k.Footer=C,k.Card=v,C.defaultProps={copyright:"uiw \xa9 2023 React Native UIW",isShowCopyRight:!0},v.defaultProps={showTitle:!0},_.defaultProps={children:null}},85153:function(e,n,t){"use strict";t.r(n),t.d(n,{black:function(){return s},blue:function(){return o},colorsPalette:function(){return p},cyan:function(){return a},green:function(){return r},navy:function(){return i},orange:function(){return c},red:function(){return u},white:function(){return d},yellow:function(){return l}});var r="#28a745",o="#008EF0",a="#1EABCD",i="#393E48",l="#ffc107",c="#F95C2B",u="#dc3545",s="#000000",d="#ffffff",p={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,n,t){"use strict";t.d(n,{B:function(){return l},D:function(){return i}});var r=t(93539),o=t(66897),a=t(80121);function i(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}function l(e){var n=e.value,t=e.defaultValue,i=e.onChange,l=(0,o.Z)(),c=(0,r.useRef)(void 0!==n?n:t);void 0!==n&&(c.current=n);var u=(0,a.Z)((function(e){void 0===n&&(c.current=e,l()),null===i||void 0===i||i(e)}));return[c.current,u]}},3143:function(e,n,t){"use strict";t.d(n,{$_:function(){return o.a},D9:function(){return i.D},O9:function(){return a}});var r=t(65965),o=t.n(r),a=t(85153),i=t(63941)},11938:function(e){e.exports=function(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}},17026:function(e,n,t){var r=t(11938),o=t(63231),a=t(26572),i=t(43091),l=t(38163);e.exports=function(e,n,t){n=o(n,e);var c=null==(e=i(e,n))?e:e[l(a(n))];return null==c?void 0:r(c,e,t)}},55657:function(e,n,t){var r=t(918),o=t(93087),a=t(21873);e.exports=function(e,n){return a(o(e,n,r),e+"")}},85943:function(e,n,t){var r=t(26807),o=t(78424),a=t(918),i=o?function(e,n){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:a;e.exports=i},53558:function(e){e.exports=function(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+n];return a}},78424:function(e,n,t){var r=t(14949),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(n){}}();e.exports=o},93087:function(e,n,t){var r=t(11938),o=Math.max;e.exports=function(e,n,t){return n=o(void 0===n?e.length-1:n,0),function(){for(var a=arguments,i=-1,l=o(a.length-n,0),c=Array(l);++i<l;)c[i]=a[n+i];i=-1;for(var u=Array(n+1);++i<n;)u[i]=a[i];return u[n]=t(c),r(e,this,u)}}},43091:function(e,n,t){var r=t(53201),o=t(53558);e.exports=function(e,n){return n.length<2?e:r(e,o(n,0,-1))}},21873:function(e,n,t){var r=t(85943),o=t(93688)(r);e.exports=o},93688:function(e){var n=800,t=16,r=Date.now;e.exports=function(e){var o=0,a=0;return function(){var i=r(),l=t-(i-a);if(a=i,l>0){if(++o>=n)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}},26807:function(e){e.exports=function(e){return function(){return e}}},88398:function(e,n,t){var r=t(17026),o=t(55657)(r);e.exports=o},26572:function(e){e.exports=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n},33032:function(e,n,t){"use strict";function r(e,n,t,r,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void t(u)}l.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var i=e.apply(n,t);function l(e){r(i,o,a,l,c,"next",e)}function c(e){r(i,o,a,l,c,"throw",e)}l(void 0)}))}}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=6075.c9255100.chunk.js.map