(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[576],{59940:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(18489),i=r(83738),o=r(17186),a=r(93908),l=r(53929),s=r(51928),u=r(17285),c=r(61366),d=r(93539),p=r(71027);function f(e){var t=e.path,r=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[t&&r&&(0,p.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(s.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var g,v,b=["path"],h=["inline","node"],F=["data-meta"],y=l.ZP.div(g||(g=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,l.ZP)(a.Z)(v||(v=(0,o.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),C=function(e,t,r){return Reflect.has(e,t)?"true"===Reflect.get(e,t):r},m=function(e){var t=e.path,r=(0,i.Z)(e,b),o=(0,d.useRef)(null);return(0,p.jsxs)(y,{ref:o,children:[(0,p.jsx)(Z,(0,n.Z)((0,n.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,t,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var t,o=e.inline,a=e.node,l=(0,i.Z)(e,h),s=l["data-meta"],d=(0,i.Z)(l,F);if(o||!(0,u.pN)(s))return(0,p.jsx)("code",(0,n.Z)({},l));var f=null===(t=a.position)||void 0===t?void 0:t.start.line,g=(0,u.Mx)(s)||String(f),v=r.components["".concat(g)];if(g&&"function"===typeof v){var b=r.data[g].value||"",y=(0,u.aE)(s);return(0,p.jsx)(c.Z,{disableCheckered:C(y,"disableCheckered",!0),disableToolbar:C(y,"disableToolbar",!1),disableCode:C(y,"disableCode",!1),disablePreview:C(y,"disablePreview",!1),bordered:C(y,"bordered",!0),copied:C(y,"copied",!0),background:y.background,toolbar:y.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,n.Z)({},d)),text:b,children:(0,p.jsx)(v,{})})}return(0,p.jsx)("code",(0,n.Z)({},d))}}})),(0,p.jsx)(f,{path:t}),(0,p.jsx)(s.kF,{speed:500,children:function(e){var t=e.percent,r=e.scrollToTop;return(0,p.jsx)(s.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,p.jsx)(s.JO,{type:"arrow-up"})},percent:t})}})]})}},44235:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(18489),i=r(83738),o=r(93539),a=r(2894),l=r(88514),s=r(37068),u=r(3143),c=r(28351),d=r(71027),p=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function f(e){var t,r,s,f,v,b=e.children,h=e.style,F=e.textStyle,y=e.rounded,Z=e.bordered,C=e.color,m=e.type,w=e.size,E=e.disabled,D=e.loading,x=(0,i.Z)(e,p);switch(m){case"warning":t=u.O9.yellow;break;case"primary":t=u.O9.blue;break;case"success":t=u.O9.green;break;case"danger":t=u.O9.red;break;case"light":t=u.O9.white;break;case"dark":t=u.O9.black}t&&(t=(0,u.$_)(t).rgb().string()),m&&(r=(0,u.$_)(t).isLight()?(0,u.$_)(u.O9.black).rgb().string():(0,u.$_)(u.O9.white).rgb().string()),m||(s=(0,u.$_)(u.O9.black).alpha(.32).rgb().string(),f=1),E&&(r=(0,u.$_)(r).alpha(.3).rgb().string()),C&&(t=(0,u.$_)(C).rgb().string(),r=(0,u.$_)(C).isLight()?(0,u.$_)(C).darken(.9).string():(0,u.$_)(C).lighten(.9).string()),!y||"number"!==typeof y&&"boolean"!==typeof y||(v=y),t&&(s=(0,u.$_)(t).darken(.2).string(),f=1),Z||(f=0);var k={backgroundColor:t,borderColor:s,borderWidth:f,borderRadius:v},B={color:r},A={};w&&g[w]&&(A=g[w]);var j={},_="".concat(w,"Box");return w&&g[_]&&(j=g[_]),b?(0,d.jsxs)(a.Z,(0,n.Z)((0,n.Z)({testID:"RNE__Button__wrap",style:[g.button,g.content,k,j,h],disabled:E},x),{},{children:[D&&(0,d.jsx)(l.Z,{size:16,color:r,style:g.icon}),o.Children.toArray(b).map((function(e,t){return(0,d.jsx)(c.default,{testID:"RNE__Button__div",style:[A,g.label,B,F],children:e},t)}))]})):null}f.defaultProps={activeOpacity:.5,rounded:5,bordered:!0,size:"default"};var g=s.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},87297:function(e,t,r){"use strict";r.r(t);var n=r(18489),i=r(31303),o=r(50678),a=r(83738),l=r(93539),s=r(37068),u=r(702),c=r(2894),d=r(16033),p=r(3143),f=r(71027),g=["maskClosable","children","visible","opacity","onDismiss","animatedParallelShow","animatedParallelHide"],v=s.Z.create({position:{position:"absolute",backgroundColor:"transparent",top:0,bottom:0,left:0,right:0,zIndex:9998},backdrop:{backgroundColor:"#000"},content:{backgroundColor:"#fff",position:"absolute"}});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.maskClosable,r=void 0===t||t,s=e.children,b=(e.visible,e.opacity),h=void 0===b?.6:b,F=e.onDismiss,y=e.animatedParallelShow,Z=void 0===y?[]:y,C=e.animatedParallelHide,m=void 0===C?[]:C,w=(0,a.Z)(e,g),E=(0,l.useState)(!!e.visible),D=(0,o.Z)(E,2),x=D[0],k=D[1],B=(0,p.D9)(e.visible),A=(0,l.useState)(!1),j=(0,o.Z)(A,2),_=j[0],V=j[1],O=(0,l.useState)(new u.Z.Value(0)),z=(0,o.Z)(O,1)[0];(0,l.useMemo)((function(){B!==e.visible&&e.visible?(k(!!e.visible),V(!1),u.Z.parallel([u.Z.spring(z,{toValue:h,overshootClamping:!0,useNativeDriver:!0})].concat((0,i.Z)(Z))).start()):B===e.visible||e.visible||u.Z.parallel([u.Z.spring(z,{toValue:0,overshootClamping:!0,useNativeDriver:!0})].concat((0,i.Z)(m))).start((function(){k(!!e.visible),V(!0)}))}),[e.visible]);var S=(0,f.jsx)(u.Z.View,{style:[v.position,v.backdrop,{opacity:z}]}),$=(0,f.jsx)(c.Z,{activeOpacity:1,style:[v.position],onPress:function(){return F&&F()},children:S}),N=x||!1;return!x&&_&&(N=!1),(0,f.jsxs)(d.Z,(0,n.Z)((0,n.Z)({transparent:!0,animationType:"none"},w),{},{visible:N,children:[r?$:S,s&&l.Children.toArray(s).map((function(e){if(l.isValidElement(e))return l.cloneElement(e,(0,n.Z)((0,n.Z)({},e.props),{style:[{zIndex:9999},e.props.style]}))}))]}))}},73650:function(e,t,r){"use strict";r.r(t);var n=r(18489),i=r(50678),o=r(83738),a=r(93539),l=r(68950),s=r(702),u=r(37068),c=r(87297),d=r(71027),p=["onClosed","visible","children","placement"],f=l.Z.get("window").width,g=l.Z.get("window").height;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClosed,r=e.visible,l=e.children,u=e.placement,f=void 0===u?"bottom":u,g=(0,o.Z)(e,p),b=(0,a.useRef)(new s.Z.Value(0)).current,h=(0,a.useState)(0),F=(0,i.Z)(h,2),y=F[0],Z=F[1],C=(0,a.useState)(0),m=(0,i.Z)(C,2),w=m[0],E=m[1],D=(0,a.useState)(new s.Z.Value(0)),x=(0,i.Z)(D,1)[0],k=/^(top|bottom)$/.test(f),B=/^(left|right)$/.test(f);(0,a.useMemo)((function(){var e="top"===f?-y:"bottom"===f?y:"left"===f?-w:"right"===f?w:0;e&&(r&&(x.setValue(e),s.Z.timing(b,{toValue:1,duration:0,useNativeDriver:!1}).start((function(e){e.finished;s.Z.parallel([s.Z.spring(x,{toValue:0,overshootClamping:!0,useNativeDriver:!0})]).start()}))),r||s.Z.parallel([s.Z.spring(x,{toValue:e,overshootClamping:!0,useNativeDriver:!0})]).start())}),[r,y,w]);var A={};k&&(A.translateY=x),B&&(A.translateX=x);var j=(0,d.jsx)(s.Z.View,{style:[v.content,f&&v[f],{opacity:b}],children:(0,d.jsx)(s.Z.View,{onLayout:function(e){var t=e.nativeEvent.layout,r=t.height,n=t.width;!y&&k&&Z(r),!w&&B&&E(n)},style:[v.content,f&&v[f],{transform:[A],backgroundColor:"#fff",position:"relative",zIndex:1e4}],children:l})});return(0,d.jsx)(c.default,(0,n.Z)((0,n.Z)({},g),{},{visible:r,onDismiss:function(){t&&t()},children:j}))};var v=u.Z.create({content:{position:"absolute",zIndex:9999},top:{top:0,width:f,left:0,right:0},bottom:{bottom:0,left:0,width:f,right:0},left:{bottom:0,top:0,height:g,left:0},right:{bottom:0,top:0,height:g,right:0}})},28351:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(18489),i=r(83738),o=r(93539),a=r(62453),l=r(71027),s=["children"];function u(e){var t=e.children,r=(0,i.Z)(e,s);return t?o.Children.toArray(t).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,l.jsx)(a.Z,(0,n.Z)((0,n.Z)({},r),{},{children:t})):(0,l.jsx)(o.Fragment,{children:o.Children.toArray(t).map((function(e,t){return"string"===typeof e?(0,o.createElement)(a.Z,(0,n.Z)((0,n.Z)({},r),{},{children:e,key:t})):o.isValidElement(e)?o.cloneElement(e,(0,n.Z)({key:t},r)):void 0})).filter(Boolean)}):null}},85153:function(e,t,r){"use strict";r.r(t),r.d(t,{black:function(){return c},blue:function(){return i},colorsPalette:function(){return p},cyan:function(){return o},green:function(){return n},navy:function(){return a},orange:function(){return s},red:function(){return u},white:function(){return d},yellow:function(){return l}});var n="#28a745",i="#008EF0",o="#1EABCD",a="#393E48",l="#ffc107",s="#F95C2B",u="#dc3545",c="#000000",d="#ffffff",p={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,r){"use strict";r.d(t,{B:function(){return l},D:function(){return a}});var n=r(93539),i=r(66897),o=r(80121);function a(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e})),t.current}function l(e){var t=e.value,r=e.defaultValue,a=e.onChange,l=(0,i.Z)(),s=(0,n.useRef)(void 0!==t?t:r);void 0!==t&&(s.current=t);var u=(0,o.Z)((function(e){void 0===t&&(s.current=e,l()),null===a||void 0===a||a(e)}));return[s.current,u]}},3143:function(e,t,r){"use strict";r.d(t,{$_:function(){return i.a},D9:function(){return a.D},O9:function(){return o}});var n=r(65965),i=r.n(n),o=r(85153),a=r(63941)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=576.ce6fa550.chunk.js.map