(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9397],{85480:function(e,t,n){"use strict";var r,i,o=n(18489),l=n(83738),c=n(17186),s=n(93908),a=n(53929),d=n(98012),u=n(17285),f=n(84488),h=n(93539),p=n(74513),x=n(71027),v=["path"],Z=["inline","node"],y=["data-meta"],m=a.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),g=(0,a.ZP)(s.Z)(i||(i=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n};t.Z=function(e){var t=e.path,n=(0,l.Z)(e,v),r=f.ZP.Preview,i=f.ZP.Code,c=f.ZP.Toolbar,s=(0,h.useRef)(null);return(0,x.jsxs)(m,{ref:s,children:[(0,x.jsx)(g,(0,o.Z)((0,o.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,s=e.inline,a=e.node,d=(0,l.Z)(e,Z),h=d["data-meta"],p=(0,l.Z)(d,y);if(s||!(0,u.pN)(h))return(0,x.jsx)("code",(0,o.Z)({},d));var v=null===(t=a.position)||void 0===t?void 0:t.start.line,m=(0,u.Mx)(h)||String(v),g=n.components["".concat(m)];if(m&&"function"===typeof g){var b=n.data[m].value||"",j=(0,u.aE)(h);return(0,x.jsxs)(f.ZP,{disableCheckered:w(j,"disableCheckered",!0),bordered:w(j,"bordered",!0),children:[(0,x.jsx)(r,{children:(0,x.jsx)(g,{})}),(0,x.jsx)(c,{text:b,copied:w(j,"copied",!0),children:j.title||"\u793a\u4f8b"}),(0,x.jsx)(i,{children:(0,x.jsx)("code",(0,o.Z)({},p))})]})}return(0,x.jsx)("code",(0,o.Z)({},p))}}})),(0,x.jsx)(p.Z,{path:t}),(0,x.jsx)(d.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,x.jsx)(d.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,x.jsx)(d.JO,{type:"arrow-up"})},percent:t})}})]})}},45565:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(18489),i=n(83738),o=n(93539),l=n(2894),c=n(12720),s=n(702),a=n(37068),d=n(44660),u=n(37322),f=n(15256),h=n(32167),p=n(71027),x=a.Z.create({title:(0,r.Z)((0,r.Z)({fontSize:14},d.Z.select({android:{fontFamily:"sans-serif",fontWeight:"bold"},default:{fontWeight:"bold"}})),{},{textAlign:"center",marginBottom:15}),divider:{marginBottom:15}}),v=function(e){var t=e.title,n=e.titleStyle,r=e.children;return(0,p.jsxs)(c.Z,{children:[t&&(0,p.jsx)(h.Z,{color:"primary_text",testID:"cardTitle",style:a.Z.flatten([x.title,n]),children:t}),o.isValidElement(r)?o.cloneElement(r):null,(0,p.jsx)(f.default,{style:a.Z.flatten([x.divider]),lineStyle:{backgroundColor:"#e6e6e6"}})]})},Z=n(69809),y=n.n(Z),m=a.Z.create({actionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingTop:15},actionsTitleContainer:{display:"flex",flexDirection:"row",fontSize:16},actionsTitle:(0,r.Z)((0,r.Z)({},d.Z.select({android:{fontFamily:"sans-serif",fontWeight:"bold"},default:{fontWeight:"bold"}})),{},{textAlign:"center"})}),g=function(e){var t=e.actions,n=void 0===t?[]:t,r=e.actionsContainerStyle,i=e.children,s=e.driver,d=void 0===s||s;return(0,p.jsxs)(o.Fragment,{children:[d&&(0,p.jsx)(f.default,{style:a.Z.flatten({marginTop:15}),lineStyle:{backgroundColor:"#e6e6e6"}}),o.isValidElement(i)?o.cloneElement(i):null,(0,p.jsx)(c.Z,{style:[m.actionsContainer,r],children:y()(n,(function(e,t){return(0,p.jsxs)(l.Z,{style:[m.actionsTitleContainer,{marginLeft:0===t?0:10}],onPress:function(n){return e.onPress&&e.onPress(n,t)},children:[e.icon&&e.icon,e.text&&(0,p.jsx)(h.Z,{color:"primary_background",style:[m.actionsTitle,e.actionsTextStyle],children:e.text})]},t)}))})]})},w=n(64739),b=["children","containerStyle","wrapperStyle","borderRadius","selected","onPress","onLongPress","selectedStyle"],j=function(e){var t=e.children,n=e.containerStyle,o=e.wrapperStyle,f=e.borderRadius,h=e.selected,x=e.onPress,v=e.onLongPress,Z=e.selectedStyle,y=void 0===Z?{icon:(0,p.jsx)(u.default,{xml:'\n<svg t="1628911378978" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13528" width="200" height="200"><path d="M846.336 0H1.536l1024.512 1024V179.2c-0.512-98.816-80.896-179.2-179.712-179.2zM916.48 137.216c0.512 2.048 1.536 4.096 0 4.608-2.048 0-3.584 0-5.12 0.512 2.048-1.536 3.584-3.072 5.12-5.12z m-11.776 15.872c0.512-1.024 1.024-2.56 1.536-3.584v-1.536l1.024-1.024c-0.512 0.512-0.512 1.536-1.024 2.048 0 1.536 1.536 2.56 3.072 2.56s2.56 0 4.096 0.512c-1.024 0-2.56 0-4.096-0.512-2.048 0.512-3.584 1.024-4.608 1.536-1.024 2.048-2.048 3.584-3.584 5.12 0.512-2.56 1.536-4.096 3.584-5.12z m1.536 34.816c-2.048-1.536-4.608-3.072-6.656-2.56v5.12c-8.704 0-10.24 6.144-12.288 12.288 1.536 0.512 3.584 0.512 5.12 1.024 1.536-3.072 0-5.12-3.584-4.096 5.632-1.024 9.728-3.072 12.8-6.144 1.536 1.024 1.024 1.024 2.56 1.536-3.072 8.704-6.144 18.432-7.68 27.648 0 0.512-1.024 1.024-1.536 1.024 0.512 0 0.512 0.512 1.024 0.512-0.512 1.536-0.512 3.072-1.024 4.608v0.512c-1.024 2.048-2.56 3.072-4.608 4.608-3.072 1.536-6.656 3.584-10.24 5.12-5.12 2.048 0 14.848-3.584 22.016 0 1.536-7.168-4.608-7.168-1.536-1.536 6.144-1.536 12.8-5.12 16.896 0 3.072-10.752-0.512-10.752 2.56-1.536 6.144-1.536 25.6 3.584 18.432 7.168-10.752 10.752-18.944 17.408-29.184-3.584 10.752-8.192 21.504-16.384 31.232-5.12 6.144-15.36 11.264-20.992 19.968v0.512c-5.12 13.312-7.68 30.208-17.92 42.496-20.992 22.528-37.376 46.592-54.272 69.632-8.704 11.264-16.896 22.528-26.624 33.28l-7.68 8.704c-4.608 5.12-9.728 10.24-14.336 15.36-9.728 10.24-15.872 20.48-25.088 29.184l-5.632 6.144c-11.776 13.312-17.92 24.064-30.208 31.232-1.536 1.024-5.12-3.072-6.656-5.12-13.824-14.848-27.136-26.112-41.472-36.864-7.168-5.632-14.336-10.752-22.016-16.384-7.168-5.12-13.824-10.24-20.992-15.36-15.872-11.264-28.672-24.576-28.672-48.128-1.024-31.744-37.376-48.64-27.648-25.6-11.776-36.864-33.792-30.208-24.064-67.072 0.512-2.56 16.384-41.984 46.08-37.376h0.512c15.872 11.776 47.104 32.768 57.344 52.224 10.24 21.504 24.064 37.888 38.912 52.736l1.536 1.536 0.512 0.512 1.024 1.024 2.048 2.048 4.096 4.096c2.56 2.56 5.12 5.12 8.192 8.704 0.512 0.512 1.024 0.512 1.536 0.512 2.048-1.024 4.608-2.048 7.168-3.072 2.56-0.512 5.12-2.048 8.192-3.584 3.072-2.048 5.12-2.56 11.264-8.192 10.24-8.704 20.48-18.432 30.208-28.16 36.352-36.352 65.024-72.192 101.888-105.984 5.632-5.12 11.264-10.752 16.384-15.872v0.512c0-0.512 0-0.512 0.512-0.512 2.56-2.56 5.12-5.12 8.192-7.68h1.536-1.024c0.512-0.512 1.536-1.024 2.048-2.048 5.12 1.024 6.144-2.56 7.68-6.144l1.536-3.072 1.536-1.536h-2.56c3.072-3.072 6.144-6.144 9.216-8.704l-1.536 3.072c0 0.512-0.512 1.024-0.512 1.536l4.608-4.608v1.536c0-0.512 0.512-0.512 0.512-1.024 3.584-2.048 6.656-4.608 9.728-6.656 1.536-0.512 1.024-2.048 0.512-4.096v-1.024c10.24-10.752 20.48-22.016 30.72-34.816l0.512-0.512c1.536-0.512 10.24-2.56 15.36-1.536-1.536 0-2.56 1.536-3.072 2.56z m33.792-33.792c-3.584 9.728-6.144 19.456-9.728 29.696-6.144 10.24-9.728 18.432-17.408 29.184-5.12 7.168-5.12-12.288-3.584-18.432 0-3.072 10.752 0.512 10.24-2.56 3.584-4.096 3.584-10.752 5.12-16.896 0-3.072 7.168 3.072 7.168 1.536 3.584-7.168-2.048-19.968 3.584-22.016 3.584-2.048 6.656-3.584 10.24-5.12-2.048 1.024-4.096 2.048-5.632 4.608z m22.016-49.664l-0.512-0.512c-3.584 5.632-8.192 9.728-16.896 11.264 3.584-1.024 5.12 1.024 3.584 4.096-1.536-0.512-3.584-0.512-5.12-1.024 1.536-6.144 3.584-12.288 12.288-12.288v-5.12c2.048-0.512 4.608 1.536 6.656 2.56 0.512-1.024 1.536-2.048 2.048-3.584h0.512c-1.536 2.048-2.048 3.072-2.56 4.608z" fill="#3578e5" p-id="13529"></path><path d="M845.824 242.176c2.048-1.536 3.072-3.072 3.584-5.12-1.536 1.024-3.072 2.56-3.584 5.12zM854.016 236.032c-1.536-0.512-3.072-1.024-3.072-2.56-0.512 1.024-1.024 2.56-1.536 3.584 1.536-0.512 3.072-1.024 4.608-1.024zM854.016 236.032c1.536 0.512 3.072 0 4.096 0.512-1.536-0.512-3.072-0.512-4.096-0.512zM803.84 282.624c5.632 0 9.728-2.048 11.264-5.632 0-0.512 0.512-0.512 1.024-0.512h-1.024c-5.632-0.512-11.264 0-11.264 6.144z" fill="#5847FF" p-id="13530"></path></svg>\n',size:30}),style:{},iconStyle:{}}:Z,m=(0,i.Z)(e,b),g=(0,w.useTheme)(),j=function(e){var t=e.backgroundColor,n=void 0===t?"#fff":t,i=e.shadowColor,o=void 0===i?"#999":i,l=e.selectBorderColor,c=void 0===l?"#3578e5":l;return a.Z.create({container:(0,r.Z)({backgroundColor:n,padding:15,margin:15,marginBottom:0},d.Z.select({android:{elevation:1},default:{shadowColor:o,shadowOffset:{height:5,width:0},shadowOpacity:.25,shadowRadius:12}})),selectedBorder:(0,r.Z)((0,r.Z)({},a.Z.absoluteFillObject),{},{borderRadius:12,borderWidth:2,borderColor:c}),selectedIndicator:{position:"absolute",top:0,right:0,width:20,height:20,alignItems:"center",justifyContent:"center"},wrapper:{backgroundColor:"transparent"}})}({backgroundColor:g.colors.mask,shadowColor:g.colors.gray300,selectBorderColor:g.colors.primary_background}),C=x||v?l.Z:c.Z,_=function(){return f||0};return(0,p.jsxs)(C,(0,r.Z)((0,r.Z)({},m),{},{onPress:x,onLongPress:v,delayPressIn:10,activeOpacity:.6,style:a.Z.flatten([j.container,n&&n,{borderRadius:_(),elevation:2}]),children:[(0,p.jsx)(c.Z,{style:a.Z.flatten([j.wrapper,o&&o]),children:t}),h?(0,p.jsx)(s.Z.View,{style:[j.selectedBorder,(0,r.Z)({opacity:1,borderRadius:_()},null===y||void 0===y?void 0:y.style)],pointerEvents:"none",children:(0,p.jsx)(c.Z,{style:[j.selectedIndicator,null===y||void 0===y?void 0:y.iconStyle],children:null===y||void 0===y?void 0:y.icon})}):null]}))};j.Title=v,j.Actions=g;var C=j},15256:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(18489),i=n(83738),o=(n(93539),n(37068)),l=n(62453),c=n(12720),s=n(64739),a=n(71027),d=["children","style","gutter","label","lineStyle","labelStyle","type","orientation"];function u(e){var t=e.children,n=e.style,u=e.gutter,f=void 0===u?8:u,h=e.label,p=e.lineStyle,x=e.labelStyle,v=e.type,Z=void 0===v?"horizontal":v,y=e.orientation,m=void 0===y?"center":y,g=(0,i.Z)(e,d),w=function(e){var t=e.textColor;return o.Z.create({warpper:{alignItems:"center"},horizontal:{justifyContent:"center",flexDirection:"row",flexGrow:1,flexShrink:1},vertical:{justifyContent:"center",flexDirection:"column",flexGrow:1,flexShrink:1},lineStart:{backgroundColor:"rgb(229, 229, 229)",flexDirection:"column",flexShrink:100,flexGrow:1},lineEnd:{backgroundColor:"rgb(229, 229, 229)",flexDirection:"column",flexShrink:100,flexGrow:1},lineHorizontal:{height:1,minHeight:1,minWidth:16},lineVertical:{width:1,minHeight:16,minWidth:1},label:{color:t,fontSize:14}})}({textColor:(0,s.useTheme)().colors.primary_text||"rgba(0, 0, 0, 0.54)"});"string"===typeof t&&(h=t,t=null);var b=[],j=[],C=[],_=[];"horizontal"===Z&&(j.unshift(w.horizontal),b.unshift(w.lineHorizontal),b.unshift({marginHorizontal:f})),"vertical"===Z&&(j.unshift(w.vertical),b.unshift(w.lineVertical),b.unshift({marginVertical:f})),!t&&h&&(x&&"number"===typeof x&&(x=o.Z.flatten(x)),t=(0,a.jsxs)(l.Z,{testID:"RNE__Divider__label",style:[w.label,x,{}],children:[" ",h," "]})),p&&"number"===typeof p&&(p=o.Z.flatten(p)),"left"===m&&_.unshift({flexGrow:100}),"right"===m&&C.unshift({flexGrow:100});var S=(0,a.jsx)(c.Z,{testID:"RNE__Divider__start",style:[w.lineStart].concat(b,C,[p])}),k=(0,a.jsx)(c.Z,{testID:"RNE__Divider__end",style:[w.lineEnd].concat(b,_,[p])});return(0,a.jsxs)(c.Z,(0,r.Z)((0,r.Z)({testID:"RNE__Divider__wrap",style:[w.warpper].concat(j,[n])},g),{},{children:[S,t,t&&k]}))}},37322:function(e,t,n){"use strict";n.r(t);var r=n(18489),i=n(83738),o=(n(93539),n(36893)),l=n.n(o),c=n(80464),s=n(71027),a=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,n=void 0===t?26:t,d=e.name,u=e.fill,f=void 0===u?"#000000":u,h=e.stroke,p=e.xml,x=e.paths,v=e.color,Z=(0,i.Z)(e,a);if(p)return(0,s.jsx)(o.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:p,height:n,width:n},Z));var y=x;if(!y){if(!d||!c[d])return null;y=c[d]}return(0,s.jsx)(l(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:v||f,stroke:h,height:n,width:n,viewBox:"0 0 20 20"},Z),{},{children:y.map((function(e,t){return(0,s.jsx)(o.Path,{d:e,fillRule:"evenodd"},t)}))}))}},32167:function(e,t,n){"use strict";var r=n(18489),i=n(36222),o=n(83738),l=n(62453),c=n(64739),s=n(33709),a=n(71027),d=["color","children","style"],u=function(e){var t=e.color,n=void 0===t?"text":t,u=e.children,f=e.style,h=(0,o.Z)(e,d),p=(0,c.useTheme)();return(0,a.jsx)(l.Z,(0,r.Z)((0,r.Z)({style:[{color:((0,s.isEmpty)(p.colors)?(0,i.Z)({},n,"#ccc"):p.colors)[n]},f]},h),{},{children:u}))};u.displayName="Text",t.Z=u},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=9397.bd44d151.chunk.js.map