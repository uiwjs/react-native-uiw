(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4845],{76427:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var n=r(18489),o=r(83738),i=r(17186),a=r(16545),l=r(4565),c=r(64504),u=r(47756),s=r(44185),d=r(94599),f=r(51962);function p(e){var t=e.path,r=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[t&&r&&(0,f.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(c.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var b,y,g=r(67903),h=["path"],v=["inline","node"],x=["data-meta"],m=l.ZP.div(b||(b=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),j=(0,l.ZP)(a.Z)(y||(y=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),F=function(e,t,r){return Reflect.has(e,t)?"true"===Reflect.get(e,t):r},C=function(e){var t=e.path,r=(0,o.Z)(e,h),i=s.ZP.Preview,a=s.ZP.Code,l=s.ZP.Toolbar,b=(0,d.useRef)(null);return(0,f.jsxs)(m,{ref:b,children:[(0,f.jsx)(j,(0,n.Z)((0,n.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,t,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var t,c=e.inline,d=e.node,p=(0,o.Z)(e,v),b=p["data-meta"],y=(0,o.Z)(p,x);if(c||!(0,u.pN)(b))return(0,f.jsx)("code",(0,n.Z)({},p));var g=null===(t=d.position)||void 0===t?void 0:t.start.line,h=(0,u.Mx)(b)||String(g),m=r.components["".concat(h)];if(h&&"function"===typeof m){var j=r.data[h].value||"",C=(0,u.aE)(b);return(0,f.jsxs)(s.ZP,{disableCheckered:F(C,"disableCheckered",!0),bordered:F(C,"bordered",!0),children:[(0,f.jsx)(i,{children:(0,f.jsx)(m,{})}),(0,f.jsx)(l,{text:j,copied:F(C,"copied",!0),children:C.title||"\u793a\u4f8b"}),(0,f.jsx)(a,{children:(0,f.jsx)("code",(0,n.Z)({},y))})]})}return(0,f.jsx)("code",(0,n.Z)({},y))}}})),(0,f.jsx)(g.Z,{}),(0,f.jsx)(p,{path:t}),(0,f.jsx)(c.kF,{speed:500,children:function(e){var t=e.percent,r=e.scrollToTop;return(0,f.jsx)(c.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,f.jsx)(c.JO,{type:"arrow-up"})},percent:t})}})]})}},45800:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(18489),o=r(76427),i={components:{9:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var c=a?Object.getOwnPropertyDescriptor(t,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=t[l]}o.default=t,n&&n.set(t,o);return o}(r(94599)),o=(r(56294),(t=r(47903))&&t.__esModule?t:{default:t});function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}return function(){return n.default.createElement(n.Fragment,null,n.default.createElement(o.default,null))}}()},data:{9:{name:9,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _LoginPage = _interopRequireDefault(require("@uiw/react-native/lib/LoginPage"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_LoginPage["default"], null));\n};\nreturn Demo;',language:"jsx",value:"import React,{Fragment} from 'react';\nimport { View} from 'react-native';\nimport { LoginPage } from '@uiw/react-native';\n\nconst Demo = () => {\n  return (\n    <Fragment>\n        <LoginPage />\n    </Fragment>\n  );\n}\nexport default Demo"}},source:"LoginPage \u767b\u5f55\u9875\n---\n\n\u7528\u4e8e\u9879\u76ee\u7684\u767b\u5f55\u9875\u9762\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e\n\n```jsx mdx:preview&background=#bebebe29\nimport React,{Fragment} from 'react';\nimport { View} from 'react-native';\nimport { LoginPage } from '@uiw/react-native';\n\nconst Demo = () => {\n  return (\n    <Fragment>\n        <LoginPage />\n    </Fragment>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `usernamePlaceholder` | \u81ea\u5b9a\u4e49\u8d26\u53f7\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u6587\u5b57 | `string` | - |\n| `inputContainerStyle` | \u81ea\u5b9a\u4e49\u8d26\u53f7\uff0c\u5bc6\u7801\uff0c\u9a8c\u8bc1\u7801\u8f93\u5165\u6846\u6837\u5f0f |`Boolean` | - |\n| `buttonStyle` | \u767b\u5f55\u6309\u94ae\u81ea\u5b9a\u4e49\u6837\u5f0f | `Object` | - |\n| `containerStyle` | \u767b\u5f55\u9875\u81ea\u5b9a\u4e49\u6700\u5916\u5c42\u6837\u5f0f | `object` | - |\n| `buttonText` | \u767b\u5f55\u6309\u94ae\u81ea\u5b9a\u4e49\u6587\u5b57 | `string` | - |\n| `customContent` | \u81ea\u5b9a\u4e49\u5fd8\u8bb0\u5bc6\u7801\uff0c\u5207\u6362\u767b\u5f55\u65b9\u5f0f | `React.ReactNode` | - |\n| `onLogin` | \u767b\u5f55\u6309\u94ae\u4e8b\u4ef6 | `(username: string, password: string) => void` | - |\n| `onForgetPassword` | \u5fd8\u8bb0\u5bc6\u7801\u6309\u94ae\u4e8b\u4ef6 | `() => void` | - |\n\n\n"},a=r(51962),l=function(){return(0,a.jsx)(o.Z,(0,n.Z)((0,n.Z)({},i),{},{path:"/packages/core/src/LoginPage/README.md"}))}},11360:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(18489),o=r(83738),i=r(94599),a=r(21596),l=r(2172),c=r(41758),u=r(61059),s=r(5814),d=r(44242),f=r(51962),p=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function b(e){var t,r,c,b,g,h=e.children,v=e.style,x=e.textStyle,m=e.rounded,j=e.bordered,F=e.color,C=e.type,Z=e.size,w=e.disabled,_=e.loading,E=(0,o.Z)(e,p),D=(0,d.useTheme)();switch(C){case"warning":t=D.colors.func200||"#FFD21D";break;case"primary":t=D.colors.func400||"#1890FF";break;case"success":t=D.colors.func300||"#52C41A";break;case"danger":t=D.colors.func600||"#F4333C";break;case"light":t=D.colors.white||"#FFFFFF";break;case"dark":t=D.colors.black||"#000000"}t&&(t=(0,u.$_)(t).rgb().string()),w&&(r=(0,u.$_)(D.colors.disabled||"#CCCCCC").alpha(.1).rgb().string(),t=(0,u.$_)(D.colors.disabled||"#CCCCCC").rgb().string()),F&&(t=(0,u.$_)(F).rgb().string()),!m||"number"!==typeof m&&"boolean"!==typeof m||(g=m),j&&(c=(0,u.$_)(D.colors.gray200||t).alpha(1).rgb().string(),b=1);var k={backgroundColor:t||"#3578e5",borderColor:c,borderWidth:b,borderRadius:g},S={color:r=(C||t||F||k.backgroundColor)&&"light"!==C?(0,u.$_)(D.colors.white||"#FFFFFF").rgb().string():(0,u.$_)(D.colors.black||"#000000").rgb().string()},B={};Z&&y[Z]&&(B=y[Z]);var P={},R="".concat(Z,"Box");return Z&&y[R]&&(P=y[R]),h?(0,f.jsxs)(a.Z,(0,n.Z)((0,n.Z)({testID:"RNE__Button__wrap",style:[y.button,y.content,k,P,v],disabled:w},E),{},{children:[_&&(0,f.jsx)(l.Z,{size:16,color:r,style:y.icon}),i.Children.toArray(h).map((function(e,t){return(0,f.jsx)(s.default,{testID:"RNE__Button__div",style:[B,y.label,S,x],children:e},t)}))]})):null}b.defaultProps={activeOpacity:.5,rounded:5,bordered:!1,size:"default"};var y=c.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},78201:function(e,t,r){"use strict";r.r(t);var n=r(18489),o=r(83738),i=(r(94599),r(7976)),a=r.n(i),l=r(80464),c=r(51962),u=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,r=void 0===t?26:t,s=e.name,d=e.fill,f=void 0===d?"#000000":d,p=e.stroke,b=e.xml,y=e.paths,g=e.color,h=(0,o.Z)(e,u);if(b)return(0,c.jsx)(i.SvgXml,(0,n.Z)({testID:"RNE__Icon__svgXml",xml:b,height:r,width:r},h));var v=y;if(!v){if(!s||!l[s])return null;v=l[s]}return(0,c.jsx)(a(),(0,n.Z)((0,n.Z)({testID:"RNE__Icon__svg",fill:g||f,stroke:p,height:r,width:r,viewBox:"0 0 20 20"},h),{},{children:v.map((function(e,t){return(0,c.jsx)(i.Path,{d:e,fillRule:"evenodd"},t)}))}))}},93109:function(e,t,r){"use strict";r.r(t);var n=r(18489),o=r(50678),i=r(83738),a=r(94599),l=r(41758),c=r(86703),u=r(54096),s=r(21596),d=r(78201),f=r(88700),p=r(44242),b=r(51962),y=["wrongfulHandle","rule","value","onChangeText","onFocus","clearText","disabled","clear","clearStyle","renderClear","extraStart","extraEnd","style","containerStyle","border","borderColor","error","renderError","inputRef"],g=a.forwardRef((function(e,t){var r,g=e.wrongfulHandle,h=e.rule,v=e.value,x=e.onChangeText,m=e.onFocus,j=e.clearText,F=e.disabled,C=void 0!==F&&F,Z=e.clear,w=e.clearStyle,_=e.renderClear,E=e.extraStart,D=e.extraEnd,k=e.style,S=void 0===k?[]:k,B=e.containerStyle,P=e.border,R=void 0===P?"bottom":P,A=e.borderColor,T=void 0===A?"#ccc":A,I=e.error,O=void 0!==I&&I,z=e.renderError,W=e.inputRef,L=(0,i.Z)(e,y),N=(0,a.useState)(v),M=(0,o.Z)(N,2),q=M[0],V=M[1],H=(0,a.useState)("state"),$=(0,o.Z)(H,2),U=$[0],X=$[1],G=(0,p.useTheme)(),J=function(e){e.bgColor;return l.Z.create({container:{height:"100%",marginTop:0,marginBottom:0,flexDirection:"row",alignItems:"center",backgroundColor:"transparent",border:"1px solid",paddingHorizontal:5},input:{flex:1,backgroundColor:"transparent",paddingVertical:0,paddingTop:0},always:{borderWidth:1},bottom:{borderBottomWidth:1},top:{borderTopWidth:1},left:{borderLeftWidth:1},right:{borderRightWidth:1},inputErrorColor:{color:"#f50"}})}({bgColor:G.colors.mask});(0,a.useEffect)((function(){"state"===U&&v===q&&X("props"),v!==q&&("state"===U||V(v),X("props"))}),[v,U]);var K=l.Z.flatten(S).fontSize||14,Q=(null===(r=l.Z.flatten(B))||void 0===r?void 0:r.height)||30,Y=function(e){var t=!0;if(h instanceof RegExp&&(t=h.test(e)),"function"===typeof h&&(t=h(e)),t)return V(e),X("state"),null===x||void 0===x||x(e),!1;V(q||""),X("state"),null===x||void 0===x||x(q||""),null===g||void 0===g||g()};return(0,b.jsxs)(c.Z,{style:[{flexDirection:"row",alignItems:"center",paddingVertical:0,height:Q},B],testID:"RNE__Input__wrap",children:[(0,b.jsxs)(c.Z,{style:[J.container,{flex:1,borderColor:T},R?J[R]:{}],testID:"RNE__Input__view",children:["string"===typeof E?(0,b.jsx)(f.Z,{color:"primary_text",style:{fontSize:K},children:E}):E,(0,b.jsx)(u.Z,(0,n.Z)((0,n.Z)({testID:"RNE__Input__input"},L),{},{ref:t||W,editable:!C,value:q,onChangeText:Y,onFocus:function(e){j&&(V(""),X("state"),null===x||void 0===x||x("")),m&&m(e)},style:[{fontSize:K,color:G.colors.text||"#000"},J.input,S]})),"string"===typeof D?(0,b.jsx)(f.Z,{color:"primary_text",style:{fontSize:K},children:D}):D,O&&(z||(0,b.jsx)(d.default,{name:"circle-close",color:"#dc3545"}))]}),Z&&(0,b.jsx)(s.Z,{onPress:function(){V(""),X("state"),null===Y||void 0===Y||Y("")},children:_||(0,b.jsx)(f.Z,{color:"primary_text",style:[{fontSize:K},w],children:"\u6e05\u9664"})})]})}));t.default=g},47903:function(e,t,r){"use strict";r.r(t);var n=r(50678),o=r(94599),i=r(86703),a=r(24404),l=r(54096),c=r(21596),u=r(41758),s=r(78201),d=r(36202),f=r(44242),p=r(51962);t.default=function(e){var t=e.usernamePlaceholder,r=e.inputContainerStyle,b=void 0===r?{}:r,y=e.containerStyle,g=void 0===y?{}:y,h=e.buttonStyle,v=void 0===h?{}:h,x=e.buttonText,m=void 0===x?"Login":x,j=e.customContent,F=e.titleContent,C=e.onLogin,Z=e.onForgetPassword,w=(0,o.useState)(!1),_=(0,n.Z)(w,2),E=_[0],D=_[1],k=(0,o.useState)(!1),S=(0,n.Z)(k,2),B=S[0],P=S[1],R=(0,f.useTheme)(),A=function(e){var t=e.border,r=e.putCol;return u.Z.create({container:{flex:1,justifyContent:"center",alignItems:"center"},content:{width:"80%"},center:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:20},title:{fontSize:24,fontWeight:"bold",marginLeft:15,color:r},inputContainer:{height:40,borderColor:t,borderWidth:1,borderRadius:5,justifyContent:"center",flexDirection:"row",alignItems:"center"},inputC:{paddingLeft:10,marginTop:20,marginBottom:5},input:{flex:1,color:r},button:{backgroundColor:"#1890ff",height:40,marginTop:5,borderRadius:5,justifyContent:"center",alignItems:"center"},buttonText:{color:"#fff"},buttonTextStyle:{color:"#fff"},textSty:{color:"#3578e5",fontWeight:"bold"},textSty1:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}})}({border:R.colors.border||"#CCC",putCol:R.colors.primary_text||"#CCC"}),T=(0,o.useState)(""),I=(0,n.Z)(T,2),O=I[0],z=I[1],W=(0,o.useState)(""),L=(0,n.Z)(W,2),N=L[0],M=L[1],q=function(e){M(e)};return(0,p.jsx)(i.Z,{style:[A.container,{backgroundColor:R.colors.background},g],children:(0,p.jsxs)(i.Z,{style:A.content,children:[F||(0,p.jsxs)(i.Z,{style:A.center,children:[(0,p.jsx)(s.default,{name:"uiw",size:35}),(0,p.jsx)(a.Z,{style:A.title,children:"Login"})]}),(0,p.jsx)(i.Z,{style:[A.inputContainer,{paddingHorizontal:15},b],children:(0,p.jsx)(l.Z,{placeholder:t||"\u8bf7\u8f93\u5165".concat(B?"\u624b\u673a\u53f7\u7801":"\u7528\u6237\u540d"),placeholderTextColor:R.colors.border,style:A.input,keyboardType:B?"numeric":"default",onChangeText:function(e){z(e)}})}),B?(0,p.jsx)(d.default,{value:N,count:60,onChange:q,inputBorder:!1,outerStyle:[A.inputContainer,A.inputC,b]}):(0,p.jsxs)(i.Z,{style:[A.inputContainer,A.inputC,{paddingLeft:15,paddingRight:15},b],children:[(0,p.jsx)(l.Z,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",placeholderTextColor:R.colors.border,secureTextEntry:!E,style:[A.input,{width:"92%"}],onChangeText:q}),(0,p.jsx)(c.Z,{onPress:function(){return D(!E)},children:(0,p.jsx)(s.default,{name:E?"eye":"eye-o",size:20,color:"#8a8a8a"})})]}),(0,p.jsx)(i.Z,{children:j||(0,p.jsxs)(i.Z,{style:A.textSty1,children:[(0,p.jsx)(c.Z,{onPress:Z,children:(0,p.jsx)(a.Z,{style:A.textSty,children:"\u5fd8\u8bb0\u5bc6\u7801"})}),(0,p.jsx)(c.Z,{onPress:function(){return P(!B)},children:(0,p.jsx)(a.Z,{style:A.textSty,children:"".concat(B?"\u7528\u6237\u540d":"\u9a8c\u8bc1\u7801","\u767b\u5f55")})})]})}),(0,p.jsx)(c.Z,{style:[A.button,v],onPress:function(){C&&C(O,N)},children:(0,p.jsx)(a.Z,{style:[A.buttonText,A.buttonTextStyle],children:m})})]})})}},5814:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(18489),o=r(83738),i=r(94599),a=r(88700),l=r(51962),c=["children"];function u(e){var t=e.children,r=(0,o.Z)(e,c);return t?i.Children.toArray(t).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,l.jsx)(a.Z,(0,n.Z)((0,n.Z)({color:"text"},r),{},{children:t})):(0,l.jsx)(i.Fragment,{children:i.Children.toArray(t).map((function(e,t){return"string"===typeof e?(0,i.createElement)(a.Z,(0,n.Z)((0,n.Z)({},r),{},{children:e,key:t})):i.isValidElement(e)?i.cloneElement(e,(0,n.Z)({key:t},r)):void 0})).filter(Boolean)}):null}},88700:function(e,t,r){"use strict";var n=r(18489),o=r(36222),i=r(83738),a=(r(94599),r(24404)),l=r(44242),c=r(41726),u=r(51962),s=["color","children","style"],d=function(e){var t=e.color,r=void 0===t?"text":t,d=e.children,f=e.style,p=(0,i.Z)(e,s),b=(0,l.useTheme)();return(0,u.jsx)(a.Z,(0,n.Z)((0,n.Z)({style:[{color:((0,c.isEmpty)(b.colors)?(0,o.Z)({},r,"#ccc"):b.colors)[r]},f]},p),{},{children:d}))};d.displayName="Text",t.Z=d},36202:function(e,t,r){"use strict";r.r(t);var n=r(50678),o=r(27166),i=r(33032),a=r(94599),l=r(93109),c=r(11360),u=r(88700),s=r(44242),d=r(51962);t.default=function(e){var t=e.bordered,r=void 0!==t&&t,f=e.label,p=void 0===f?"\u83b7\u53d6\u9a8c\u8bc1\u7801":f,b=e.resendLabel,y=void 0===b?"\u91cd\u65b0\u53d1\u9001":b,g=e.count,h=void 0===g?60:g,v=e.value,x=void 0===v?"":v,m=e.onChange,j=void 0===m?function(){}:m,F=e.onBefore,C=void 0===F?(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)}))):F,Z=e.onSend,w=void 0===Z?(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)}))):Z,_=e.onEnd,E=void 0===_?function(){}:_,D=e.outerStyle,k=void 0===D?{}:D,S=e.buttonStyle,B=void 0===S?{}:S,P=e.placeholder,R=void 0===P?"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801":P,A=e.inputBorder,T=void 0===A||A,I=(0,a.useState)(h),O=(0,n.Z)(I,2),z=O[0],W=O[1],L=(0,a.useState)(!1),N=(0,n.Z)(L,2),M=N[0],q=N[1],V=(0,s.useTheme)();(0,a.useEffect)((function(){var e;return z>0&&M?e=setInterval((function(){W((function(e){return e-1}))}),1e3):0===z&&M&&(q(!1),E()),function(){return clearInterval(e)}}),[z,M,E]);var H=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:if(!e.sent){e.next=8;break}return W(h),q(!0),e.next=8,w();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(l.default,{border:T?"always":null,containerStyle:[{height:40},k],placeholder:R,placeholderTextColor:V.colors.border,value:x,onChangeText:function(e){return j(e)},extraEnd:(0,d.jsx)(c.default,{bordered:r,disabled:M,onPress:H,color:V.colors.background||"transparent",style:[B],size:"small",children:(0,d.jsx)(u.Z,{color:M?"disabled":"text",children:M?"".concat(y,"(").concat(z,"s)"):p})})})}},2837:function(e,t,r){"use strict";r.r(t),r.d(t,{black:function(){return s},blue:function(){return o},colorsPalette:function(){return f},cyan:function(){return i},green:function(){return n},navy:function(){return a},orange:function(){return c},red:function(){return u},white:function(){return d},yellow:function(){return l}});var n="#28a745",o="#008EF0",i="#1EABCD",a="#393E48",l="#ffc107",c="#F95C2B",u="#dc3545",s="#000000",d="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},11236:function(e,t,r){"use strict";r.d(t,{BL:function(){return l},D9:function(){return a},dU:function(){return c}});var n=r(94599),o=r(22634),i=r(12365);function a(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e})),t.current}function l(e){var t=e.value,r=e.defaultValue,a=e.onChange,l=(0,o.Z)(),c=(0,n.useRef)(void 0!==t?t:r);void 0!==t&&(c.current=t);var u=(0,i.Z)((function(e){void 0===t&&(c.current=e,l()),null===a||void 0===a||a(e)}));return[c.current,u]}function c(e){var t=(0,n.useRef)(e);return t.current=e,t}},61059:function(e,t,r){"use strict";r.d(t,{$_:function(){return o.a},D9:function(){return a.D9},O9:function(){return i}});var n=r(85763),o=r.n(n),i=r(2837),a=r(11236)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t},33032:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function l(e){n(a,o,i,l,c,"next",e)}function c(e){n(a,o,i,l,c,"throw",e)}l(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=4845.194a1a1e.chunk.js.map