(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5138],{59940:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(18489),o=n(83738),i=n(17186),a=n(93908),u=n(53929),l=n(51928),c=n(17285),d=n(61366),s=n(93539),f=n(71027);function g(e){var t=e.path,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[t&&n&&(0,f.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(l.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var h,p,v=["path"],m=["inline","node"],A=["data-meta"],b=u.ZP.div(h||(h=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),y=(0,u.ZP)(a.Z)(p||(p=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n},B=function(e){var t=e.path,n=(0,o.Z)(e,v),i=(0,s.useRef)(null);return(0,f.jsxs)(b,{ref:i,children:[(0,f.jsx)(y,(0,r.Z)((0,r.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,i=e.inline,a=e.node,u=(0,o.Z)(e,m),l=u["data-meta"],s=(0,o.Z)(u,A);if(i||!(0,c.pN)(l))return(0,f.jsx)("code",(0,r.Z)({},u));var g=null===(t=a.position)||void 0===t?void 0:t.start.line,h=(0,c.Mx)(l)||String(g),p=n.components["".concat(h)];if(h&&"function"===typeof p){var v=n.data[h].value||"",b=(0,c.aE)(l);return(0,f.jsx)(d.Z,{disableCheckered:w(b,"disableCheckered",!0),disableToolbar:w(b,"disableToolbar",!1),disableCode:w(b,"disableCode",!1),disablePreview:w(b,"disablePreview",!1),bordered:w(b,"bordered",!0),copied:w(b,"copied",!0),background:b.background,toolbar:b.title||"\u793a\u4f8b",code:(0,f.jsx)("code",(0,r.Z)({},s)),text:v,children:(0,f.jsx)(p,{})})}return(0,f.jsx)("code",(0,r.Z)({},s))}}})),(0,f.jsx)(g,{path:t}),(0,f.jsx)(l.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,f.jsx)(l.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,f.jsx)(l.JO,{type:"arrow-up"})},percent:t})}})]})}},18797:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(18489),o=n(59940),i={components:{12:function(){var e=r(n(93539)),t=r(n(75959));function r(e){return e&&e.__esModule?e:{default:e}}return function(){var n=[{url:"https://avatars.githubusercontent.com/u/33082374?s=200&v=4",onClick:function(){console.log("\u4f60\u597d\uff01uiw/react-native")}},{url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="}];return e.default.createElement(t.default,{width:200,dataSource:n,height:150,borderRadius:24})}}()},data:{12:{name:12,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Swiper = _interopRequireDefault(require("@uiw/react-native/lib/Swiper"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar SwiperDemo = function SwiperDemo() {\n  var data = [{\n    url: "https://avatars.githubusercontent.com/u/33082374?s=200&v=4",\n    onClick: function onClick() {\n      console.log("\u4f60\u597d\uff01uiw/react-native");\n    }\n  }, {\n    url: \'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==\'\n  }\n  // { url: require(\'@expo/snack-static/react-native-logo.png\') }\n  ];\n\n  return /*#__PURE__*/_react["default"].createElement(_Swiper["default"], {\n    width: 200,\n    dataSource: data,\n    height: 150,\n    borderRadius: 24\n  });\n};\nreturn SwiperDemo;',language:"jsx",value:"import React from 'react';\nimport { Swiper } from '@uiw/react-native';\n\nconst SwiperDemo = () => {\n    const data = [\n        { url: \"https://avatars.githubusercontent.com/u/33082374?s=200&v=4\", onClick: () => { console.log(\"\u4f60\u597d\uff01uiw/react-native\") } },\n        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },\n        // { url: require('@expo/snack-static/react-native-logo.png') }\n    ]\n    return (\n  <Swiper width={200} dataSource={data} height={150} borderRadius={24} />\n    )\n}\nexport default SwiperDemo"}},source:"Swiper \u8f6e\u64ad\u56fe\n---\n\n\u6700\u57fa\u7840\u7684\u8f6e\u64ad\u56fe\uff0c\u53ef\u627f\u8f7d\u56fe\u7247\u3002\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u6d4b\u8bd5\u7248\u672c\u8c28\u614e\u4f7f\u7528\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e\n```jsx  mdx:preview\nimport React from 'react';\nimport { Swiper } from '@uiw/react-native';\n\nconst SwiperDemo = () => {\n    const data = [\n        { url: \"https://avatars.githubusercontent.com/u/33082374?s=200&v=4\", onClick: () => { console.log(\"\u4f60\u597d\uff01uiw/react-native\") } },\n        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },\n        // { url: require('@expo/snack-static/react-native-logo.png') }\n    ]\n    return (\n  <Swiper width={200} dataSource={data} height={150} borderRadius={24} />\n    )\n}\nexport default SwiperDemo\n```\n\x3c!--End--\x3e\n\n### Props\n\n\u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c\n----|-----|------|------\n| dataSource   | \u6570\u636e\u6e90         | Array     | [ ] |\n| width        | \u5bbd\u5ea6           |  Number   |\u5c4f\u5e55\u5bbd\u5ea6|\n| height       | \u9ad8\u5ea6           | Number    |  130 |\n| time         | \u6267\u884c\u65f6\u95f4       | Number    | 3000\uff083s\uff09 |\n| borderRadius | \u5706\u89d2\u8fb9\u6846       | Number    |  0 |\n| autoplay     | \u662f\u5426\u5f00\u542f\u5b9a\u65f6\u5668  | Boolean   | true|\n| dotStyle     | \u5706\u70b9\u7c7b\u578b ( dot : \u5706\u70b9\uff0c block : \u65b9\u5757 )       | String    | dot |\n| loading      | \u52a0\u8f7d\u72b6\u6001  | Boolean   | false |\n"},a=n(71027),u=function(){return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/Swiper/README.md"}))}},27789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(18489),o=n(83738),i=(n(93539),n(37068)),a=n(88514),u=n(12720),l=n(62453),c=n(71027),d=["children","color","maskColor","rounded","loading","tip","size","vertical"],s=i.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}});function f(e){var t=e.children,n=e.color,i=void 0===n?"gray":n,f=e.maskColor,g=void 0===f?"rgba(255, 255, 255, 0.85)":f,h=e.rounded,p=e.loading,v=void 0===p||p,m=e.tip,A=e.size,b=void 0===A?"small":A,y=e.vertical,w=(0,o.Z)(e,d),B={};if(g&&(B.backgroundColor=g),h&&(B.borderRadius=h),y&&(B.flexDirection="column"),!t&&!m)return(0,c.jsx)(a.Z,{animating:v,size:b,color:i});var E=m||v?(0,c.jsxs)(u.Z,{style:[s[v?"defalut":"stopActivity"],B],children:[(0,c.jsx)(a.Z,{animating:v,size:b,color:i}),m&&("string"===typeof m?(0,c.jsx)(l.Z,{style:{color:i},children:m}):(0,c.jsx)(u.Z,{children:m}))]}):null;return!t&&m?E:(0,c.jsxs)(u.Z,(0,r.Z)((0,r.Z)({},w),{},{children:[E,t]}))}},75959:function(e,t,n){"use strict";n.r(t);var r=n(50678),o=n(93539),i=n(68950),a=n(12720),u=n(37068),l=n(49568),c=n(2894),d=n(31018),s=n(27789),f=n(3143),g=n(71027),h=u.Z.create({banner:{width:"100%",position:"relative",overflow:"hidden"},dotBox:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",bottom:22},dot:{width:8,height:8,borderRadius:4,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},block:{width:16,height:3,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},dotColor:{backgroundColor:f.O9.white},dotSetColor:{backgroundColor:f.O9.colorsPalette.grey50}});t.default=function(e){var t=i.Z.get("window").width,n=e.dataSource,f=void 0===n?[]:n,p=e.width,v=void 0===p?t:p,m=e.height,A=void 0===m?130:m,b=e.time,y=void 0===b?6e3:b,w=e.autoplay,B=void 0===w||w,E=e.borderRadius,F=void 0===E?0:E,C=e.dotStyle,x=void 0===C?"dot":C,Z=e.loading,k=void 0!==Z&&Z,S=e.index,D=void 0===S?0:S,R=(0,o.useState)(D),Y=(0,r.Z)(R,2),G=Y[0],j=Y[1],z=(0,o.useRef)(),M=(0,o.useRef)(),U=(0,o.useCallback)((function(){clearInterval(z.current),z.current=setInterval((function(){var e=G+1;G===f.length-1?(e=0,j(0)):j(G+1),M.current.scrollTo({x:v*e,y:0,animated:!0})}),y)}),[G]);(0,o.useEffect)((function(){B&&!k&&U()}),[U]),(0,o.useEffect)((function(){return function(){clearInterval(z.current)}}),[]);var I=function(e){j(e),M.current.scrollTo({x:v*e,y:0,animated:!0})};return(0,g.jsx)(s.default,{loading:k,rounded:5,maskColor:"transparent",children:(0,g.jsxs)(a.Z,{style:u.Z.flatten([h.banner,{width:v,height:A}]),children:[(0,g.jsx)(l.Z,{ref:M,horizontal:!0,showsHorizontalScrollIndicator:!1,pagingEnabled:!0,onScrollBeginDrag:function(){B&&clearInterval(z.current)},onScrollEndDrag:function(){B&&U()},onMomentumScrollEnd:function(e){e.persist();var t=e.nativeEvent.contentOffset.x,n=e.nativeEvent.layoutMeasurement.width;j(t/n)},onContentSizeChange:function(){M&&M.current&&0!==D&&(j(D),M.current.scrollTo({x:v*D,y:0,animated:!1}))},children:f.map((function(e,t){return(0,g.jsx)(a.Z,{style:{width:v,height:A},children:(0,g.jsx)(a.Z,{style:{padding:12},children:(0,g.jsx)(c.Z,{activeOpacity:1,onPress:function(){e.onClick&&e.onClick()},children:(0,g.jsx)(d.Z,{style:u.Z.flatten([{borderRadius:F,width:"100%",height:"100%"}]),resizeMode:"cover",source:"number"===typeof e.url?e.url:{uri:e.url}},t)})})},t)}))}),(0,g.jsx)(a.Z,{style:h.dotBox,children:f.map((function(e,t){return(0,g.jsx)(c.Z,{onPress:I.bind(undefined,t),style:u.Z.flatten(["block"===x?h.block:h.dot,t===G?h.dotSetColor:h.dotColor])},t)}))})]})})}},85153:function(e,t,n){"use strict";n.r(t),n.d(t,{black:function(){return d},blue:function(){return o},colorsPalette:function(){return f},cyan:function(){return i},green:function(){return r},navy:function(){return a},orange:function(){return l},red:function(){return c},white:function(){return s},yellow:function(){return u}});var r="#28a745",o="#008EF0",i="#1EABCD",a="#393E48",u="#ffc107",l="#F95C2B",c="#dc3545",d="#000000",s="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,n){"use strict";n.d(t,{B:function(){return u},D:function(){return a}});var r=n(93539),o=n(66897),i=n(80121);function a(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function u(e){var t=e.value,n=e.defaultValue,a=e.onChange,u=(0,o.Z)(),l=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(l.current=t);var c=(0,i.Z)((function(e){void 0===t&&(l.current=e,u()),null===a||void 0===a||a(e)}));return[l.current,c]}},3143:function(e,t,n){"use strict";n.d(t,{$_:function(){return o.a},D9:function(){return a.D},O9:function(){return i}});var r=n(65965),o=n.n(r),i=n(85153),a=n(63941)},88514:function(e,t,n){"use strict";var r=n(57078),o=n(89172),i=n(93539),a=n(37068),u=n(12720),l=["animating","color","hidesWhenStopped","size","style"],c=function(e){return i.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},d=i.forwardRef((function(e,t){var n=e.animating,a=void 0===n||n,d=e.color,g=void 0===d?"#1976D2":d,h=e.hidesWhenStopped,p=void 0===h||h,v=e.size,m=void 0===v?"small":v,A=e.style,b=(0,o.Z)(e,l),y=i.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},c({stroke:g,opacity:.2}),c({stroke:g,strokeDasharray:80,strokeDashoffset:60}));return i.createElement(u.Z,(0,r.Z)({},b,{accessibilityRole:"progressbar",accessibilityValueMax:1,accessibilityValueMin:0,ref:t,style:[s.container,A]}),i.createElement(u.Z,{children:y,style:["number"===typeof m?{height:m,width:m}:f[m],s.animation,!a&&s.animationPause,!a&&p&&s.hidesWhenStopped]}))}));d.displayName="ActivityIndicator";var s=a.Z.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),f=a.Z.create({small:{width:20,height:20},large:{width:36,height:36}});t.Z=d},31018:function(e,t,n){"use strict";n.d(t,{Z:function(){return G}});var r=n(80283),o=n(57078),i=n(89172),a=n(93539),u=n(3671),l=[];function c(e){return l[e-1]}var d=n(57395),s=n(27853),f=n(84531),g=/^data:/,h=function(){function e(){(0,s.Z)(this,e)}return(0,f.Z)(e,null,[{key:"has",value:function(t){var n=e._entries;return g.test(t)||Boolean(n[t])}},{key:"add",value:function(t){var n=e._entries,r=Date.now();n[t]?(n[t].lastUsedTimestamp=r,n[t].refCount+=1):n[t]={lastUsedTimestamp:r,refCount:1}}},{key:"remove",value:function(t){var n=e._entries;n[t]&&(n[t].refCount-=1),e._cleanUpIfNeeded()}},{key:"_cleanUpIfNeeded",value:function(){var t,n,r=e._entries,o=Object.keys(r);o.length+1>e._maximumEntries&&(o.forEach((function(e){var o=r[e];(!n||o.lastUsedTimestamp<n.lastUsedTimestamp)&&0===o.refCount&&(t=e,n=o)})),t&&delete r[t])}}]),e}();h._maximumEntries=256,h._entries={};var p=0,v={},m={abort:function(e){var t=v[""+e];t&&(t.onerror=null,t.onload=null,t=null,delete v[""+e])},getSize:function(e,t,n){var r=!1,o=setInterval(a,16),i=m.load(e,a,(function(){"function"===typeof n&&n();m.abort(i),clearInterval(o)}));function a(){var e=v[""+i];if(e){var n=e.naturalHeight,a=e.naturalWidth;n&&a&&(t(a,n),r=!0)}r&&(m.abort(i),clearInterval(o))}},has:function(e){return h.has(e)},load:function(e,t,n){p+=1;var r=new window.Image;return r.onerror=n,r.onload=function(e){var n=function(){return t({nativeEvent:e})};"function"===typeof r.decode?r.decode().then(n,n):setTimeout(n,0)},r.src=e,v[""+p]=r,p},prefetch:function(e){return new Promise((function(t,n){m.load(e,(function(){h.add(e),h.remove(e),t()}),n)}))},queryCache:function(e){var t={};return e.forEach((function(e){h.has(e)&&(t[e]="disk/memory")})),Promise.resolve(t)}},A=m,b=n(92938),y=n(37068),w=n(30829),B=n(12720),E=["accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],F="LOADED",C="LOADING",x=0,Z=/^(data:image\/svg\+xml;utf8,)(.*)/;function k(e){var t=null;if("number"===typeof e){var n=c(e);if(null==n)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var r=n.scales[0];if(n.scales.length>1){var o=b.Z.get();r=n.scales.reduce((function(e,t){return Math.abs(t-o)<Math.abs(e-o)?t:e}))}var i=1!==r?"@"+r+"x":"";t=n?n.httpServerLocation+"/"+n.name+i+"."+n.type:""}else"string"===typeof e?t=e:e&&"string"===typeof e.uri&&(t=e.uri);if(t){var a=t.match(Z);if(a){var u=a[1],l=a[2];return""+u+encodeURIComponent(l)}}return t}var S=a.forwardRef((function(e,t){var n=e.accessibilityLabel,r=e.blurRadius,l=e.defaultSource,s=e.draggable,f=e.onError,g=e.onLayout,h=e.onLoad,p=e.onLoadEnd,v=e.onLoadStart,m=e.pointerEvents,b=e.source,Z=e.style,S=(0,i.Z)(e,E);var D=a.useState((function(){var e=k(b);if(null!=e&&A.has(e))return F;return"IDLE"})),G=D[0],j=D[1],z=a.useState({}),M=z[0],U=z[1],I=a.useContext(w.Z),T=a.useRef(null),_=a.useRef(x++),Q=a.useRef(null),L=G===F||G===C&&null==l,P=function(e,t,n){var r=y.Z.flatten(e),o=r.filter,i=r.resizeMode,a=r.shadowOffset,u=r.tintColor,l=[],c=null;if(o&&l.push(o),t&&l.push("blur("+t+"px)"),a){var s=(0,d.Lm)(r);s&&l.push("drop-shadow("+s+")")}return u&&null!=n&&l.push("url(#tint-"+n+")"),l.length>0&&(c=l.join(" ")),delete r.blurRadius,delete r.shadowColor,delete r.shadowOpacity,delete r.shadowOffset,delete r.shadowRadius,delete r.tintColor,delete r.overlayColor,delete r.resizeMode,[r,i,c,u]}(Z,r,_.current),N=P[0],O=P[1],q=P[2],V=P[3],W=e.resizeMode||O||"cover",H=L?b:l,J=k(H),K=function(e){if("number"===typeof e){var t=c(e);return{height:t.height,width:t.width}}if(null!=e&&!Array.isArray(e)&&"object"===typeof e)return{height:e.height,width:e.width}}(H),X=J?'url("'+J+'")':null,$=function(){if(null!=T.current&&("center"===W||"repeat"===W)){var e=T.current,t=e.naturalHeight,n=e.naturalWidth,r=M.height,o=M.width;if(t&&n&&r&&o){var i=Math.min(1,o/n,r/t);return Math.ceil(i*n)+"px "+Math.ceil(i*t)+"px"}}}(),ee=J?(0,u.Z)("img",{alt:n||"",style:R.accessibilityImage$raw,draggable:s||!1,ref:T,src:J}):null;var te=k(b);return a.useEffect((function(){function e(){null!=Q.current&&(A.abort(Q.current),Q.current=null)}return e(),null!=te&&(j(C),v&&v(),Q.current=A.load(te,(function(e){j(F),h&&h(e),p&&p()}),(function(){j("ERRORED"),f&&f({nativeEvent:{error:"Failed to load resource "+te+" (404)"}}),p&&p()}))),e}),[te,Q,j,f,h,p,v]),a.createElement(B.Z,(0,o.Z)({},S,{accessibilityLabel:n,onLayout:function(e){if("center"===W||"repeat"===W||g){var t=e.nativeEvent.layout;g&&g(e),U(t)}},pointerEvents:m,ref:t,style:[R.root,I&&R.inline,K,N]}),a.createElement(B.Z,{style:[R.image,Y[W],{backgroundImage:X,filter:q},null!=$&&{backgroundSize:$}],suppressHydrationWarning:!0}),ee,function(e,t){return e&&null!=t?a.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},a.createElement("defs",null,a.createElement("filter",{id:"tint-"+t,suppressHydrationWarning:!0},a.createElement("feFlood",{floodColor:""+e,key:e}),a.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}(V,_.current))}));S.displayName="Image";var D=S;D.getSize=function(e,t,n){A.getSize(e,t,n)},D.prefetch=function(e){return A.prefetch(e)},D.queryCache=function(e){return A.queryCache(e)};var R=y.Z.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},image:(0,r.Z)((0,r.Z)({},y.Z.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:(0,r.Z)((0,r.Z)({},y.Z.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),Y=y.Z.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),G=D},92938:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(27853),o=n(84531),i=n(68950),a=function(){function e(){(0,r.Z)(this,e)}return(0,o.Z)(e,null,[{key:"get",value:function(){return i.Z.get("window").scale}},{key:"getFontScale",value:function(){return i.Z.get("window").fontScale||e.get()}},{key:"getPixelSizeForLayoutSize",value:function(t){return Math.round(t*e.get())}},{key:"roundToNearestPixel",value:function(t){var n=e.get();return Math.round(t*n)/n}}]),e}()},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=5138.12e48786.chunk.js.map