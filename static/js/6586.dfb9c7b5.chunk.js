(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6586],{85480:function(e,t,n){"use strict";var r,o,i=n(1413),a=n(45987),u=n(30168),c=n(31121),l=n(53929),s=n(78069),d=n(17285),f=n(61366),p=n(93539),m=n(71027),h=["inline","node"],v=["data-meta"],g=l.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),y=(0,l.ZP)(c.Z)(o||(o=(0,u.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),b=function(e,t,n){if(Reflect.has(e,t)){var r=Reflect.get(e,t);if("true"===r)return!0;if("false"===r)return!1}return n};t.Z=function(e){var t=(0,p.useRef)(null);return(0,m.jsxs)(g,{ref:t,children:[(0,m.jsx)(y,(0,i.Z)((0,i.Z)({},e),{},{disableCopy:!0,source:e.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(t){var n,r=t.inline,o=t.node,u=(0,a.Z)(t,h),c=u["data-meta"],l=(0,a.Z)(u,v);if(r||!(0,d.pN)(c))return(0,m.jsx)("code",(0,i.Z)({},u));var s=null===(n=o.position)||void 0===n?void 0:n.start.line,p=(0,d.Mx)(c)||String(s),g=e.components["".concat(p)];if(p&&"function"===typeof g){var y=e.data[p].value||"",w=(0,d.aE)(c);return(0,m.jsx)(f.Z,{disableCheckered:b(w,"disableCheckered",!0),disableToolbar:b(w,"disableToolbar",!1),disableCode:b(w,"disableCode",!1),disablePreview:b(w,"disablePreview",!1),bordered:b(w,"bordered",!0),copied:b(w,"copied",!0),background:w.background,toolbar:w.title||"\u793a\u4f8b",code:(0,m.jsx)("code",(0,i.Z)({},l)),text:y,children:(0,m.jsx)(g,{})})}return(0,m.jsx)("code",(0,i.Z)({},l))}}})),(0,m.jsx)(s.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,m.jsx)(s.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,m.jsx)(s.JO,{type:"arrow-up"})},percent:t})}})]})}},48367:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1413),o=n(85480),i={components:{11:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=i(n);if(r&&r.has(t))return r.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var c=a?Object.getOwnPropertyDescriptor(t,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=t[u]}o.default=t,r&&r.set(t,o);return o}(n(93539)),o=(t=n(34143))&&t.__esModule?t:{default:t};function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}return function(){return r.default.createElement(o.default,null)}}(),25:function(){var e=r(n(93539)),t=r(n(34143));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.default,{height:100,width:100,src:"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"})}}(),43:function(){var e=r(n(93539)),t=r(n(34143));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(t.default,{height:100,width:100,defaultIndex:1,src:[{url:"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"},{url:"https://avatars.githubusercontent.com/u/33082374?s=200&v=4"}]})}}()},data:{11:{name:11,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _ImageViewer = _interopRequireDefault(require("@uiw/react-native/lib/ImageViewer"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_ImageViewer["default"], null);\n}\nreturn Demo;',language:"jsx",value:"import React, { Component } from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo () {\n  return (\n      <ImageViewer />\n    );\n}\nexport default Demo"},25:{name:25,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _ImageViewer = _interopRequireDefault(require("@uiw/react-native/lib/ImageViewer"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_ImageViewer["default"], {\n    height: 100,\n    width: 100,\n    src: \'https://avatars.githubusercontent.com/u/33082374?s=200&v=4\'\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      src={'https://avatars.githubusercontent.com/u/33082374?s=200&v=4'}\n    />\n  );\n}\nexport default Demo"},43:{name:43,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _ImageViewer = _interopRequireDefault(require("@uiw/react-native/lib/ImageViewer"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_ImageViewer["default"], {\n    height: 100,\n    width: 100,\n    defaultIndex: 1,\n    src: [{\n      url: \'https://avatars.githubusercontent.com/u/33082374?s=200&v=4\'\n    }, {\n      url: \'https://avatars.githubusercontent.com/u/33082374?s=200&v=4\'\n    }]\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      defaultIndex={1}\n      src={[\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' },\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' }\n      ]}\n    />\n  );\n}\nexport default Demo"}},source:"ImageViewer \u56fe\u7247\u67e5\u770b\n---\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/148637929-a8ef7878-c7b6-4af6-af9e-f610cf96ab45.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n\u53ef\u81ea\u5b9a\u4e49\u62d6\u66f3\u62bd\u5c49\u9ad8\u5ea6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx  mdx:preview\nimport React, { Component } from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo () {\n  return (\n      <ImageViewer />\n    );\n}\nexport default Demo\n```\n\n### \u6307\u5b9a\u56fe\u7247\u5730\u5740\n\n```jsx  mdx:preview\nimport React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      src={'https://avatars.githubusercontent.com/u/33082374?s=200&v=4'}\n    />\n  );\n}\nexport default Demo\n```\n\n### \u5c55\u793a\u591a\u5f20\u56fe\u7247\n\n```jsx  mdx:preview\nimport React from 'react';\nimport { ImageViewer } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <ImageViewer\n      height={100}\n      width={100}\n      defaultIndex={1}\n      src={[\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' },\n        { url: 'https://avatars.githubusercontent.com/u/33082374?s=200&v=4' }\n      ]}\n    />\n  );\n}\nexport default Demo\n```\n\n### props\n\n```ts\nexport interface ImageViewerProps extends ViewProps {\n  /** \u56fe\u7247\u5bbd\u5ea6 */\n  width?: number,\n  /** \u56fe\u7247\u9ad8\u5ea6 */\n  height?: number,\n  /** \u56fe\u50cf\u6e90\uff08\u8fdc\u7a0bURL\u6216\u672c\u5730\u6587\u4ef6\u8d44\u6e90 */\n  src?: string | number;\n  /** \u9ed8\u8ba4\u5c55\u793a\u7b2c\u51e0\u5f20\u56fe\u7247 */\n  defaultIndex: number\n}\n```\n"},a=n(71027),u=function(){return(0,a.jsx)(o.Z,(0,r.Z)({},i))}},34143:function(e,t,n){"use strict";n.r(t),n.d(t,{ImageMainHeight:function(){return y},ImageMainWidth:function(){return g}});var r=n(29439),o=n(45987),i=n(93539),a=n(68950),u=n(702),c=n(12720),l=n(31018),s=n(37068),d=n(5483),f=n(87297),p=n(75959),m=n(88514),h=n(71027),v=["width","height","src","defaultIndex"],g=a.Z.get("window").width,y=a.Z.get("window").height;var b=s.Z.create({content:{marginTop:y/3-20,height:y/3-20}});t.default=function(e){var t=e.width,n=void 0===t?150:t,a=e.height,s=void 0===a?150:a,g=e.src,y=void 0===g?"https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg":g,w=e.defaultIndex,Z=void 0===w?0:w,j=((0,o.Z)(e,v),(0,i.useState)(!1)),C=(0,r.Z)(j,2),E=C[0],x=C[1],D=(0,i.useRef)(new u.Z.Value(0)).current;(0,i.useMemo)((function(){E?u.Z.timing(D,{toValue:1,duration:600,useNativeDriver:!0}).start():D.setValue(0)}),[E]);var F=(0,i.useMemo)((function(){return Array.isArray(y)?y[Z].url:y}),[y]);return(0,h.jsxs)(c.Z,{style:{},children:[(0,h.jsx)(c.Z,{style:{flexDirection:"row",justifyContent:"space-between"},children:Array.isArray(y)?y.map((function(e,t){return(0,h.jsx)(d.default,{style:{width:n,height:s,flex:1},onPress:function(){return x(!0)},source:{uri:e.url},PlaceholderContent:(0,h.jsx)(m.Z,{}),transition:!0,transitionDuration:500},t)})):(0,h.jsx)(d.default,{style:{width:n,height:s},onPress:function(){return x(!0)},source:{uri:F},PlaceholderContent:(0,h.jsx)(m.Z,{}),transition:!0,transitionDuration:500})}),(0,h.jsx)(f.default,{visible:E,onDismiss:function(){return x(!1)},opacity:.9,children:(0,h.jsx)(u.Z.View,{style:[b.content,{opacity:D}],children:Array.isArray(y)?(0,h.jsx)(p.default,{dataSource:y,height:200,autoplay:!1}):(0,h.jsx)(l.Z,{style:{width:"100%",height:"100%",resizeMode:"contain"},source:{uri:y}})})})]})}},27789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(1413),o=n(45987),i=n(15671),a=n(43144),u=n(60136),c=n(27277),l=n(93539),s=n(37068),d=n(88514),f=n(12720),p=n(62453),m=n(71027),h=["children","color","maskColor","rounded","loading","tip","size","vertical"],v=s.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}}),g=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.color,i=e.maskColor,a=e.rounded,u=e.loading,c=e.tip,l=e.size,s=e.vertical,g=(0,o.Z)(e,h),y={};if(i&&(y.backgroundColor=i),a&&(y.borderRadius=a),s&&(y.flexDirection="column"),!t&&!c)return(0,m.jsx)(d.Z,{animating:u,size:l,color:n});var b=c||u?(0,m.jsxs)(f.Z,{style:[v[u?"defalut":"stopActivity"],y],children:[(0,m.jsx)(d.Z,{animating:u,size:l,color:n}),c&&("string"===typeof c?(0,m.jsx)(p.Z,{style:{color:n},children:c}):(0,m.jsx)(f.Z,{children:c}))]}):null;return!t&&c?b:(0,m.jsxs)(f.Z,(0,r.Z)((0,r.Z)({},g),{},{children:[b,t]}))}}]),n}(l.Component);g.defaultProps={maskColor:"rgba(255, 255, 255, 0.85)",loading:!0,color:"gray",size:"small"}},87297:function(e,t,n){"use strict";n.r(t);var r=n(1413),o=n(93433),i=n(29439),a=n(45987),u=n(93539),c=n(37068),l=n(702),s=n(2894),d=n(16033),f=n(50346),p=n(71027),m=["maskClosable","children","visible","opacity","onDismiss","animatedParallelShow","animatedParallelHide"],h=c.Z.create({position:{position:"absolute",backgroundColor:"transparent",top:0,bottom:0,left:0,right:0,zIndex:9998},backdrop:{backgroundColor:"#000"},content:{backgroundColor:"#fff",position:"absolute"}});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.maskClosable,n=void 0===t||t,c=e.children,v=(e.visible,e.opacity),g=void 0===v?.6:v,y=e.onDismiss,b=e.animatedParallelShow,w=void 0===b?[]:b,Z=e.animatedParallelHide,j=void 0===Z?[]:Z,C=(0,a.Z)(e,m),E=(0,u.useState)(!!e.visible),x=(0,i.Z)(E,2),D=x[0],F=x[1],I=(0,f.D9)(e.visible),k=(0,u.useState)(!1),_=(0,i.Z)(k,2),R=_[0],P=_[1],S=(0,u.useState)(new l.Z.Value(0)),O=(0,i.Z)(S,1),A=O[0];(0,u.useMemo)((function(){I!==e.visible&&e.visible?(F(!!e.visible),P(!1),l.Z.parallel([l.Z.spring(A,{toValue:g,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(w))).start()):I===e.visible||e.visible||l.Z.parallel([l.Z.spring(A,{toValue:0,overshootClamping:!0,useNativeDriver:!0})].concat((0,o.Z)(j))).start((function(){F(!!e.visible),P(!0)}))}),[e.visible]);var B=(0,p.jsx)(l.Z.View,{style:[h.position,h.backdrop,{opacity:A}]}),V=(0,p.jsx)(s.Z,{activeOpacity:1,style:[h.position],onPress:function(){return y&&y()},children:B}),M=D||!1;return!D&&R&&(M=!1),(0,p.jsxs)(d.Z,(0,r.Z)((0,r.Z)({transparent:!0,animationType:"none"},C),{},{visible:M,children:[n?V:B,c&&u.Children.toArray(c).map((function(e){if(u.isValidElement(e))return u.cloneElement(e,(0,r.Z)((0,r.Z)({},e.props),{style:[{zIndex:9999},e.props.style]}))}))]}))}},75959:function(e,t,n){"use strict";n.r(t);var r=n(29439),o=n(93539),i=n(68950),a=n(12720),u=n(37068),c=n(49568),l=n(2894),s=n(31018),d=n(27789),f=n(50346),p=n(71027),m=u.Z.create({banner:{width:"100%",position:"relative",overflow:"hidden"},dotBox:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",bottom:22},dot:{width:8,height:8,borderRadius:4,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},block:{width:16,height:3,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},dotColor:{backgroundColor:f.O9.white},dotSetColor:{backgroundColor:f.O9.colorsPalette.grey50}});t.default=function(e){var t=i.Z.get("window").width,n=e.dataSource,f=void 0===n?[]:n,h=e.width,v=void 0===h?t:h,g=e.height,y=void 0===g?130:g,b=e.time,w=void 0===b?6e3:b,Z=e.autoplay,j=void 0===Z||Z,C=e.borderRadius,E=void 0===C?0:C,x=e.dotStyle,D=void 0===x?"dot":x,F=e.loading,I=void 0!==F&&F,k=(0,o.useState)(0),_=(0,r.Z)(k,2),R=_[0],P=_[1],S=(0,o.useRef)(),O=(0,o.useRef)(),A=(0,o.useCallback)((function(){clearInterval(S.current),S.current=setInterval((function(){var e=R+1;R===f.length-1?(e=0,P(0)):P(R+1),O.current.scrollTo({x:v*e,y:0,animated:!0})}),w)}),[R]);(0,o.useEffect)((function(){j&&!I&&A()}),[A]),(0,o.useEffect)((function(){return function(){clearInterval(S.current)}}),[]);var B=function(e){P(e),O.current.scrollTo({x:v*e,y:0,animated:!0})};return(0,p.jsx)(d.default,{loading:I,rounded:5,maskColor:"transparent",children:(0,p.jsxs)(a.Z,{style:u.Z.flatten([m.banner,{width:v,height:y}]),children:[(0,p.jsx)(c.Z,{ref:O,horizontal:!0,showsHorizontalScrollIndicator:!1,pagingEnabled:!0,onScrollBeginDrag:function(){j&&clearInterval(S.current)},onScrollEndDrag:function(){j&&A()},onMomentumScrollEnd:function(e){e.persist();var t=e.nativeEvent.contentOffset.x,n=e.nativeEvent.layoutMeasurement.width;P(t/n)},children:f.map((function(e,t){return(0,p.jsx)(a.Z,{style:{width:v,height:y},children:(0,p.jsx)(a.Z,{style:{padding:12},children:(0,p.jsx)(l.Z,{activeOpacity:1,onPress:function(){e.onClick&&e.onClick()},children:(0,p.jsx)(s.Z,{style:u.Z.flatten([{borderRadius:E,width:"100%",height:"100%"}]),resizeMode:"cover",source:"number"===typeof e.url?e.url:{uri:e.url}},t)})})},t)}))}),(0,p.jsx)(a.Z,{style:m.dotBox,children:f.map((function(e,t){return(0,p.jsx)(l.Z,{onPress:B.bind(undefined,t),style:u.Z.flatten(["block"===D?m.block:m.dot,t===R?m.dotSetColor:m.dotColor])},t)}))})]})})}},5483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(1413),o=n(45987),i=n(15671),a=n(43144),u=n(60136),c=n(27277),l=n(93539),s=n(702),d=n(2894),f=n(12720),p=n(31018),m=n(37068),h=n(71027),v=["onPress","onLongPress","Component","placeholderStyle","PlaceholderContent","containerStyle","childrenContainerStyle","style","ImageComponent","children"],g=["width","height"],y=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={placeholderOpacity:new s.Z.Value(1)},e.onLoad=function(t){var n=e.props,r=n.transition,o=n.onLoad,i=n.transitionDuration;r?(s.Z.timing(e.state.placeholderOpacity,{toValue:0,duration:i,useNativeDriver:!0}).start(),o&&o(t)):e.state.placeholderOpacity.setValue(0)},e}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.onPress,n=e.onLongPress,i=e.Component,a=void 0===i?t||n?d.Z:f.Z:i,u=e.placeholderStyle,c=e.PlaceholderContent,l=e.containerStyle,y=e.childrenContainerStyle,w=void 0===y?null:y,Z=e.style,j=void 0===Z?{}:Z,C=e.ImageComponent,E=void 0===C?p.Z:C,x=e.children,D=(0,o.Z)(e,v),F=Boolean(D.source),I=m.Z.flatten(j),k=I.width,_=I.height,R=(0,o.Z)(I,g);return(0,h.jsxs)(a,{onPress:t,onLongPress:n,accessibilityIgnoresInvertColors:!0,style:m.Z.flatten([b.container,l]),children:[(0,h.jsx)(E,(0,r.Z)((0,r.Z)({testID:"RNE__Image",transition:!0,transitionDuration:360},D),{},{onLoad:this.onLoad,style:m.Z.flatten([m.Z.absoluteFill,{width:k,height:_},R])})),(0,h.jsx)(s.Z.View,{pointerEvents:F?"none":"auto",accessibilityElementsHidden:F,importantForAccessibility:F?"no-hide-descendants":"yes",style:[b.placeholderContainer,{opacity:F?this.state.placeholderOpacity:1}],children:(0,h.jsx)(f.Z,{testID:"RNE__Image__placeholder",style:m.Z.flatten([j,b.placeholder,u]),children:c})}),(0,h.jsx)(f.Z,{testID:"RNE__Image__children__container",style:null!==w&&void 0!==w?w:j,children:x})]})}}]),n}(l.Component);y.displayName="Image",y.getSize=p.Z.getSize,y.getSizeWithHeaders=p.Z.getSizeWithHeaders,y.prefetch=p.Z.prefetch,y.abortPrefetch=p.Z.abortPrefetch,y.queryCache=p.Z.queryCache,y.resolveAssetSource=p.Z.resolveAssetSource;var b=m.Z.create({container:{backgroundColor:"transparent",position:"relative",overflow:"hidden"},placeholderContainer:(0,r.Z)({},m.Z.absoluteFillObject),placeholder:{backgroundColor:"#bdbdbd",alignItems:"center",justifyContent:"center"}})},63941:function(e,t,n){"use strict";n.d(t,{B:function(){return u},D:function(){return a}});var r=n(93539),o=n(66897),i=n(80121);function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function u(e){var t=e.value,n=e.defaultValue,a=e.onChange,u=(0,o.Z)(),c=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(c.current=t);var l=(0,i.Z)((function(e){void 0===t&&(c.current=e,u()),null===a||void 0===a||a(e)}));return[c.current,l]}},50346:function(e,t,n){"use strict";n.d(t,{$_:function(){return i()},O9:function(){return r},D9:function(){return v.D}});var r={};n.r(r),n.d(r,{black:function(){return p},blue:function(){return u},colorsPalette:function(){return h},cyan:function(){return c},green:function(){return a},navy:function(){return l},orange:function(){return d},red:function(){return f},white:function(){return m},yellow:function(){return s}});var o=n(65965),i=n.n(o),a="#28a745",u="#008EF0",c="#1EABCD",l="#393E48",s="#ffc107",d="#F95C2B",f="#dc3545",p="#000000",m="#ffffff",h={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"},v=n(63941)},88514:function(e,t,n){"use strict";var r=n(87462),o=n(63366),i=n(93539),a=n(37068),u=n(12720),c=["animating","color","hidesWhenStopped","size","style"],l=function(e){return i.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},s=i.forwardRef((function(e,t){var n=e.animating,a=void 0===n||n,s=e.color,p=void 0===s?"#1976D2":s,m=e.hidesWhenStopped,h=void 0===m||m,v=e.size,g=void 0===v?"small":v,y=e.style,b=(0,o.Z)(e,c),w=i.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},l({stroke:p,opacity:.2}),l({stroke:p,strokeDasharray:80,strokeDashoffset:60}));return i.createElement(u.Z,(0,r.Z)({},b,{accessibilityRole:"progressbar",accessibilityValueMax:1,accessibilityValueMin:0,ref:t,style:[d.container,y]}),i.createElement(u.Z,{children:w,style:["number"===typeof g?{height:g,width:g}:f[g],d.animation,!a&&d.animationPause,!a&&h&&d.hidesWhenStopped]}))}));s.displayName="ActivityIndicator";var d=a.Z.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),f=a.Z.create({small:{width:20,height:20},large:{width:36,height:36}});t.Z=s},16033:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(87462),o=n(63366),i=n(93539),a=n(20285),u=n(54621);var c=function(e){var t=e.children,n=i.useRef(null);if(u.Z&&!n.current){var r=document.createElement("div");r&&document.body&&(document.body.appendChild(r),n.current=r)}return i.useEffect((function(){if(u.Z)return function(){document.body&&n.current&&(document.body.removeChild(n.current),n.current=null)}}),[]),n.current&&u.Z?a.createPortal(t,n.current):null},l=n(37068),s=n(3671);function d(e,t){return"slide"===e?t?p:m:"fade"===e?t?h:v:t?f.container:f.hidden}var f=l.Z.create({container:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999},animatedIn:{animationDuration:"300ms",animationTimingFunction:"ease-in"},animatedOut:{pointerEvents:"none",animationDuration:"300ms",animationTimingFunction:"ease-out"},fadeIn:{opacity:1,animationKeyframes:{"0%":{opacity:0},"100%":{opacity:1}}},fadeOut:{opacity:0,animationKeyframes:{"0%":{opacity:1},"100%":{opacity:0}}},slideIn:{transform:[{translateY:"0%"}],animationKeyframes:{"0%":{transform:[{translateY:"100%"}]},"100%":{transform:[{translateY:"0%"}]}}},slideOut:{transform:[{translateY:"100%"}],animationKeyframes:{"0%":{transform:[{translateY:"0%"}]},"100%":{transform:[{translateY:"100%"}]}}},hidden:{opacity:0}}),p=[f.container,f.animatedIn,f.slideIn],m=[f.container,f.animatedOut,f.slideOut],h=[f.container,f.animatedIn,f.fadeIn],v=[f.container,f.animatedOut,f.fadeOut],g=function(e){var t=e.animationType,n=e.children,r=e.onDismiss,o=e.onShow,a=e.visible,u=i.useState(!1),c=u[0],l=u[1],p=i.useRef(!1),m=t&&"none"!==t,h=i.useCallback((function(e){e&&e.currentTarget!==e.target||(a?o&&o():(l(!1),r&&r()))}),[r,o,a]);return i.useEffect((function(){a&&l(!0),a===p.current||m||h(),p.current=a}),[m,a,h]),c||a?(0,s.Z)("div",{style:c?d(t,a):f.hidden,onAnimationEnd:h,children:n}):null},y=n(12720),b=["active","children","onRequestClose","transparent"],w=i.forwardRef((function(e,t){var n=e.active,a=e.children,c=e.onRequestClose,l=e.transparent,s=(0,o.Z)(e,b);i.useEffect((function(){if(u.Z){var e=function(e){n&&"Escape"===e.key&&(e.stopPropagation(),c&&c())};return document.addEventListener("keyup",e,!1),function(){return document.removeEventListener("keyup",e,!1)}}}),[n,c]);var d=i.useMemo((function(){return[Z.modal,l?Z.modalTransparent:Z.modalOpaque]}),[l]);return i.createElement(y.Z,(0,r.Z)({},s,{accessibilityModal:!0,accessibilityRole:n?"dialog":null,ref:t,style:d}),i.createElement(y.Z,{style:Z.container},a))})),Z=l.Z.create({modal:{position:"fixed",top:0,right:0,bottom:0,left:0},modalTransparent:{backgroundColor:"transparent"},modalOpaque:{backgroundColor:"white"},container:{top:0,flex:1}}),j=w,C=n(5825),E=function(){return(0,s.Z)("div",{accessibilityRole:"none",tabIndex:0,style:k.focusBracket})};function x(e){if(!u.Z)return!1;try{e.focus()}catch(t){}return document.activeElement===e}function D(e){for(var t=0;t<e.childNodes.length;t++){var n=e.childNodes[t];if(x(n)||D(n))return!0}return!1}function F(e){for(var t=e.childNodes.length-1;t>=0;t--){var n=e.childNodes[t];if(x(n)||F(n))return!0}return!1}var I=function(e){var t=e.active,n=e.children,r=i.useRef(),o=i.useRef({trapFocusInProgress:!1,lastFocusedElement:null});return i.useEffect((function(){if(u.Z){var e=function(){if(null!=r.current&&!o.current.trapFocusInProgress&&t){try{if(o.current.trapFocusInProgress=!0,document.activeElement instanceof Node&&!r.current.contains(document.activeElement)){var e=D(r.current);o.current.lastFocusedElement===document.activeElement&&(e=F(r.current)),!e&&null!=r.current&&document.activeElement&&C.Z.focus(r.current)}}finally{o.current.trapFocusInProgress=!1}o.current.lastFocusedElement=document.activeElement}};return e(),document.addEventListener("focus",e,!0),function(){return document.removeEventListener("focus",e,!0)}}}),[t]),i.useEffect((function(){if(u.Z){var e=document.activeElement;return function(){e&&document.contains(e)&&C.Z.focus(e)}}}),[]),i.createElement(i.Fragment,null,i.createElement(E,null),i.createElement(y.Z,{ref:r},n),i.createElement(E,null))},k=l.Z.create({focusBracket:{outlineStyle:"none"}}),_=["animationType","children","onDismiss","onRequestClose","onShow","transparent","visible"],R=0,P=[],S={};function O(){if(0!==P.length){var e=P[P.length-1];P.forEach((function(t){t in S&&S[t](t===e)}))}}function A(e){e in S&&(S[e](!1),delete S[e]);var t=P.indexOf(e);-1!==t&&(P.splice(t,1),O())}var B=i.forwardRef((function(e,t){var n=e.animationType,a=e.children,u=e.onDismiss,l=e.onRequestClose,s=e.onShow,d=e.transparent,f=e.visible,p=void 0===f||f,m=(0,o.Z)(e,_),h=i.useMemo((function(){return R++}),[]),v=i.useState(!1),y=v[0],b=v[1],w=i.useCallback((function(){A(h),u&&u()}),[h,u]),Z=i.useCallback((function(){!function(e,t){A(e),P.push(e),S[e]=t,O()}(h,b),s&&s()}),[h,s]);return i.useEffect((function(){return function(){return A(h)}}),[h]),i.createElement(c,null,i.createElement(g,{animationType:n,onDismiss:w,onShow:Z,visible:p},i.createElement(I,{active:y},i.createElement(j,(0,r.Z)({},m,{active:y,onRequestClose:l,ref:t,transparent:d}),a))))}))},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=6586.dfb9c7b5.chunk.js.map