(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9397],{85480:function(e,t,n){"use strict";var r,i,l=n(18489),o=n(83738),c=n(17186),a=n(93908),s=n(53929),d=n(51928),u=n(17285),f=n(84488),h=n(93539),p=n(74513),v=n(71027),F=["path"],y=["inline","node"],g=["data-meta"],x=s.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,s.ZP)(a.Z)(i||(i=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n};t.Z=function(e){var t=e.path,n=(0,o.Z)(e,F),r=f.ZP.Preview,i=f.ZP.Code,c=f.ZP.Toolbar,a=(0,h.useRef)(null);return(0,v.jsxs)(x,{ref:a,children:[(0,v.jsx)(Z,(0,l.Z)((0,l.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,a=e.inline,s=e.node,d=(0,o.Z)(e,y),h=d["data-meta"],p=(0,o.Z)(d,g);if(a||!(0,u.pN)(h))return(0,v.jsx)("code",(0,l.Z)({},d));var F=null===(t=s.position)||void 0===t?void 0:t.start.line,x=(0,u.Mx)(h)||String(F),Z=n.components["".concat(x)];if(x&&"function"===typeof Z){var C=n.data[x].value||"",E=(0,u.aE)(h);return(0,v.jsxs)(f.ZP,{disableCheckered:w(E,"disableCheckered",!0),bordered:w(E,"bordered",!0),children:[(0,v.jsx)(r,{children:(0,v.jsx)(Z,{})}),(0,v.jsx)(c,{text:C,copied:w(E,"copied",!0),children:E.title||"\u793a\u4f8b"}),(0,v.jsx)(i,{children:(0,v.jsx)("code",(0,l.Z)({},p))})]})}return(0,v.jsx)("code",(0,l.Z)({},p))}}})),(0,v.jsx)(p.Z,{path:t}),(0,v.jsx)(d.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,v.jsx)(d.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,v.jsx)(d.JO,{type:"arrow-up"})},percent:t})}})]})}},45565:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(18489),i=n(83738),l=n(93539),o=n(2894),c=n(12720),a=n(702),s=n(37068),d=n(44660),u=n(37322),f=n(3143),h=n(62453),p=n(15256),v=n(71027),F=s.Z.create({title:(0,r.Z)((0,r.Z)({fontSize:14,color:f.O9.colorsPalette.grey10},d.Z.select({android:{fontFamily:"sans-serif",fontWeight:"bold"},default:{fontWeight:"bold"}})),{},{textAlign:"center",marginBottom:15}),divider:{marginBottom:15}}),y=function(e){var t=e.title,n=e.titleStyle,r=e.children;return(0,v.jsxs)(c.Z,{children:[t&&(0,v.jsx)(h.Z,{testID:"cardTitle",style:s.Z.flatten([F.title,n]),children:t}),l.isValidElement(r)?l.cloneElement(r):null,(0,v.jsx)(p.default,{style:s.Z.flatten([F.divider]),lineStyle:{backgroundColor:"#e6e6e6"}})]})},g=n(69809),x=n.n(g),Z=s.Z.create({actionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingTop:15},actionsTitleContainer:{display:"flex",flexDirection:"row",fontSize:16},actionsTitle:(0,r.Z)((0,r.Z)({color:f.O9.colorsPalette.violet30},d.Z.select({android:{fontFamily:"sans-serif",fontWeight:"bold"},default:{fontWeight:"bold"}})),{},{textAlign:"center"})}),w=function(e){var t=e.actions,n=void 0===t?[]:t,r=e.actionsContainerStyle,i=e.children,a=e.driver,d=void 0===a||a;return(0,v.jsxs)(l.Fragment,{children:[d&&(0,v.jsx)(p.default,{style:s.Z.flatten({marginTop:15}),lineStyle:{backgroundColor:"#e6e6e6"}}),l.isValidElement(i)?l.cloneElement(i):null,(0,v.jsx)(c.Z,{style:[Z.actionsContainer,r],children:x()(n,(function(e,t){return(0,v.jsxs)(o.Z,{style:[Z.actionsTitleContainer,{marginLeft:0===t?0:10}],onPress:function(n){return e.onPress&&e.onPress(n,t)},children:[e.icon&&e.icon,e.text&&(0,v.jsx)(h.Z,{style:[Z.actionsTitle,e.actionsTextStyle],children:e.text})]},t)}))})]})},C=["children","containerStyle","wrapperStyle","borderRadius","selected","onPress","onLongPress","selectedStyle"],E=function(e){var t=e.children,n=e.containerStyle,l=e.wrapperStyle,d=e.borderRadius,f=e.selected,h=e.onPress,p=e.onLongPress,F=e.selectedStyle,y=void 0===F?{icon:(0,v.jsx)(u.default,{xml:'\n<svg t="1628911378978" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13528" width="200" height="200"><path d="M846.336 0H1.536l1024.512 1024V179.2c-0.512-98.816-80.896-179.2-179.712-179.2zM916.48 137.216c0.512 2.048 1.536 4.096 0 4.608-2.048 0-3.584 0-5.12 0.512 2.048-1.536 3.584-3.072 5.12-5.12z m-11.776 15.872c0.512-1.024 1.024-2.56 1.536-3.584v-1.536l1.024-1.024c-0.512 0.512-0.512 1.536-1.024 2.048 0 1.536 1.536 2.56 3.072 2.56s2.56 0 4.096 0.512c-1.024 0-2.56 0-4.096-0.512-2.048 0.512-3.584 1.024-4.608 1.536-1.024 2.048-2.048 3.584-3.584 5.12 0.512-2.56 1.536-4.096 3.584-5.12z m1.536 34.816c-2.048-1.536-4.608-3.072-6.656-2.56v5.12c-8.704 0-10.24 6.144-12.288 12.288 1.536 0.512 3.584 0.512 5.12 1.024 1.536-3.072 0-5.12-3.584-4.096 5.632-1.024 9.728-3.072 12.8-6.144 1.536 1.024 1.024 1.024 2.56 1.536-3.072 8.704-6.144 18.432-7.68 27.648 0 0.512-1.024 1.024-1.536 1.024 0.512 0 0.512 0.512 1.024 0.512-0.512 1.536-0.512 3.072-1.024 4.608v0.512c-1.024 2.048-2.56 3.072-4.608 4.608-3.072 1.536-6.656 3.584-10.24 5.12-5.12 2.048 0 14.848-3.584 22.016 0 1.536-7.168-4.608-7.168-1.536-1.536 6.144-1.536 12.8-5.12 16.896 0 3.072-10.752-0.512-10.752 2.56-1.536 6.144-1.536 25.6 3.584 18.432 7.168-10.752 10.752-18.944 17.408-29.184-3.584 10.752-8.192 21.504-16.384 31.232-5.12 6.144-15.36 11.264-20.992 19.968v0.512c-5.12 13.312-7.68 30.208-17.92 42.496-20.992 22.528-37.376 46.592-54.272 69.632-8.704 11.264-16.896 22.528-26.624 33.28l-7.68 8.704c-4.608 5.12-9.728 10.24-14.336 15.36-9.728 10.24-15.872 20.48-25.088 29.184l-5.632 6.144c-11.776 13.312-17.92 24.064-30.208 31.232-1.536 1.024-5.12-3.072-6.656-5.12-13.824-14.848-27.136-26.112-41.472-36.864-7.168-5.632-14.336-10.752-22.016-16.384-7.168-5.12-13.824-10.24-20.992-15.36-15.872-11.264-28.672-24.576-28.672-48.128-1.024-31.744-37.376-48.64-27.648-25.6-11.776-36.864-33.792-30.208-24.064-67.072 0.512-2.56 16.384-41.984 46.08-37.376h0.512c15.872 11.776 47.104 32.768 57.344 52.224 10.24 21.504 24.064 37.888 38.912 52.736l1.536 1.536 0.512 0.512 1.024 1.024 2.048 2.048 4.096 4.096c2.56 2.56 5.12 5.12 8.192 8.704 0.512 0.512 1.024 0.512 1.536 0.512 2.048-1.024 4.608-2.048 7.168-3.072 2.56-0.512 5.12-2.048 8.192-3.584 3.072-2.048 5.12-2.56 11.264-8.192 10.24-8.704 20.48-18.432 30.208-28.16 36.352-36.352 65.024-72.192 101.888-105.984 5.632-5.12 11.264-10.752 16.384-15.872v0.512c0-0.512 0-0.512 0.512-0.512 2.56-2.56 5.12-5.12 8.192-7.68h1.536-1.024c0.512-0.512 1.536-1.024 2.048-2.048 5.12 1.024 6.144-2.56 7.68-6.144l1.536-3.072 1.536-1.536h-2.56c3.072-3.072 6.144-6.144 9.216-8.704l-1.536 3.072c0 0.512-0.512 1.024-0.512 1.536l4.608-4.608v1.536c0-0.512 0.512-0.512 0.512-1.024 3.584-2.048 6.656-4.608 9.728-6.656 1.536-0.512 1.024-2.048 0.512-4.096v-1.024c10.24-10.752 20.48-22.016 30.72-34.816l0.512-0.512c1.536-0.512 10.24-2.56 15.36-1.536-1.536 0-2.56 1.536-3.072 2.56z m33.792-33.792c-3.584 9.728-6.144 19.456-9.728 29.696-6.144 10.24-9.728 18.432-17.408 29.184-5.12 7.168-5.12-12.288-3.584-18.432 0-3.072 10.752 0.512 10.24-2.56 3.584-4.096 3.584-10.752 5.12-16.896 0-3.072 7.168 3.072 7.168 1.536 3.584-7.168-2.048-19.968 3.584-22.016 3.584-2.048 6.656-3.584 10.24-5.12-2.048 1.024-4.096 2.048-5.632 4.608z m22.016-49.664l-0.512-0.512c-3.584 5.632-8.192 9.728-16.896 11.264 3.584-1.024 5.12 1.024 3.584 4.096-1.536-0.512-3.584-0.512-5.12-1.024 1.536-6.144 3.584-12.288 12.288-12.288v-5.12c2.048-0.512 4.608 1.536 6.656 2.56 0.512-1.024 1.536-2.048 2.048-3.584h0.512c-1.536 2.048-2.048 3.072-2.56 4.608z" fill="#5847FF" p-id="13529"></path><path d="M845.824 242.176c2.048-1.536 3.072-3.072 3.584-5.12-1.536 1.024-3.072 2.56-3.584 5.12zM854.016 236.032c-1.536-0.512-3.072-1.024-3.072-2.56-0.512 1.024-1.024 2.56-1.536 3.584 1.536-0.512 3.072-1.024 4.608-1.024zM854.016 236.032c1.536 0.512 3.072 0 4.096 0.512-1.536-0.512-3.072-0.512-4.096-0.512zM803.84 282.624c5.632 0 9.728-2.048 11.264-5.632 0-0.512 0.512-0.512 1.024-0.512h-1.024c-5.632-0.512-11.264 0-11.264 6.144z" fill="#5847FF" p-id="13530"></path></svg>\n',size:30}),style:{},iconStyle:{}}:F,g=(0,i.Z)(e,C),x=h||p?o.Z:c.Z,Z=function(){return d||0};return(0,v.jsxs)(x,(0,r.Z)((0,r.Z)({},g),{},{onPress:h,onLongPress:p,delayPressIn:10,activeOpacity:.6,style:s.Z.flatten([D.container,n&&n,{borderRadius:Z(),elevation:2}]),children:[(0,v.jsx)(c.Z,{style:s.Z.flatten([D.wrapper,l&&l]),children:t}),f?(0,v.jsx)(a.Z.View,{style:[D.selectedBorder,(0,r.Z)({opacity:1,borderRadius:Z()},null===y||void 0===y?void 0:y.style)],pointerEvents:"none",children:(0,v.jsx)(c.Z,{style:[D.selectedIndicator,null===y||void 0===y?void 0:y.iconStyle],children:null===y||void 0===y?void 0:y.icon})}):null]}))},D=s.Z.create({container:(0,r.Z)({backgroundColor:f.O9.white,padding:15,margin:15,marginBottom:0,borderColor:f.O9.colorsPalette.grey80},d.Z.select({android:{elevation:1},default:{shadowColor:f.O9.colorsPalette.grey40,shadowOffset:{height:5,width:0},shadowOpacity:.25,shadowRadius:12}})),selectedBorder:(0,r.Z)((0,r.Z)({},s.Z.absoluteFillObject),{},{borderRadius:12,borderWidth:2,borderColor:f.O9.colorsPalette.violet30}),selectedIndicator:{position:"absolute",top:0,right:0,width:20,height:20,alignItems:"center",justifyContent:"center"},wrapper:{backgroundColor:"transparent"}});E.Title=y,E.Actions=w;var m=E},15256:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(18489),i=n(83738),l=(n(93539),n(37068)),o=n(62453),c=n(12720),a=n(71027),s=["children","style","gutter","label","lineStyle","labelStyle","type","orientation"];function d(e){var t=e.children,n=e.style,d=e.gutter,f=void 0===d?8:d,h=e.label,p=e.lineStyle,v=e.labelStyle,F=e.type,y=void 0===F?"horizontal":F,g=e.orientation,x=void 0===g?"center":g,Z=(0,i.Z)(e,s);"string"===typeof t&&(h=t,t=null);var w=[],C=[],E=[],D=[];"horizontal"===y&&(C.unshift(u.horizontal),w.unshift(u.lineHorizontal),w.unshift({marginHorizontal:f})),"vertical"===y&&(C.unshift(u.vertical),w.unshift(u.lineVertical),w.unshift({marginVertical:f})),!t&&h&&(v&&"number"===typeof v&&(v=l.Z.flatten(v)),t=(0,a.jsxs)(o.Z,{testID:"RNE__Divider__label",style:[u.label,v],children:[" ",h," "]})),p&&"number"===typeof p&&(p=l.Z.flatten(p)),"left"===x&&D.unshift({flexGrow:100}),"right"===x&&E.unshift({flexGrow:100});var m=(0,a.jsx)(c.Z,{testID:"RNE__Divider__start",style:[u.lineStart].concat(w,E,[p])}),b=(0,a.jsx)(c.Z,{testID:"RNE__Divider__end",style:[u.lineEnd].concat(w,D,[p])});return(0,a.jsxs)(c.Z,(0,r.Z)((0,r.Z)({testID:"RNE__Divider__wrap",style:[u.warpper].concat(C,[n])},Z),{},{children:[m,t,t&&b]}))}var u=l.Z.create({warpper:{alignItems:"center"},horizontal:{justifyContent:"center",flexDirection:"row",flexGrow:1,flexShrink:1},vertical:{justifyContent:"center",flexDirection:"column",flexGrow:1,flexShrink:1},lineStart:{backgroundColor:"rgb(229, 229, 229)",flexDirection:"column",flexShrink:100,flexGrow:1},lineEnd:{backgroundColor:"rgb(229, 229, 229)",flexDirection:"column",flexShrink:100,flexGrow:1},lineHorizontal:{height:1,minHeight:1,minWidth:16},lineVertical:{width:1,minHeight:16,minWidth:1},label:{color:"rgba(0, 0, 0, 0.54)",fontSize:14}})},37322:function(e,t,n){"use strict";n.r(t);var r=n(18489),i=n(83738),l=(n(93539),n(36893)),o=n.n(l),c=n(80464),a=n(71027),s=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,n=void 0===t?26:t,d=e.name,u=e.fill,f=void 0===u?"#000000":u,h=e.stroke,p=e.xml,v=e.paths,F=e.color,y=(0,i.Z)(e,s);if(p)return(0,a.jsx)(l.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:p,height:n,width:n},y));var g=v;if(!g){if(!d||!c[d])return null;g=c[d]}return(0,a.jsx)(o(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:F||f,stroke:h,height:n,width:n,viewBox:"0 0 20 20"},y),{},{children:g.map((function(e,t){return(0,a.jsx)(l.Path,{d:e,fillRule:"evenodd"},t)}))}))}},85153:function(e,t,n){"use strict";n.r(t),n.d(t,{black:function(){return d},blue:function(){return i},colorsPalette:function(){return f},cyan:function(){return l},green:function(){return r},navy:function(){return o},orange:function(){return a},red:function(){return s},white:function(){return u},yellow:function(){return c}});var r="#28a745",i="#008EF0",l="#1EABCD",o="#393E48",c="#ffc107",a="#F95C2B",s="#dc3545",d="#000000",u="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,t,n){"use strict";n.d(t,{B:function(){return c},D:function(){return o}});var r=n(93539),i=n(66897),l=n(80121);function o(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e})),t.current}function c(e){var t=e.value,n=e.defaultValue,o=e.onChange,c=(0,i.Z)(),a=(0,r.useRef)(void 0!==t?t:n);void 0!==t&&(a.current=t);var s=(0,l.Z)((function(e){void 0===t&&(a.current=e,c()),null===o||void 0===o||o(e)}));return[a.current,s]}},3143:function(e,t,n){"use strict";n.d(t,{$_:function(){return i.a},D9:function(){return o.D},O9:function(){return l}});var r=n(65965),i=n.n(r),l=n(85153),o=n(63941)},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=9397.5864d3f1.chunk.js.map