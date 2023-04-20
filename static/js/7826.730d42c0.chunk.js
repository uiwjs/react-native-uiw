"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7826],{78558:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(18489),o=n(83738),l=n(27853),i=n(84531),a=n(81020),c=n(18334),s=n(93539),d=n(12720),u=n(67305),h=n(32167),f=n(2894),g=n(37068),p=n(71027),x=["children","style","onPress","paddingLeft","underlayColor","extra","extraStyle","touchableStyle","size"],y=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,l=e.onPress,i=e.paddingLeft,a=(e.underlayColor,e.extra),c=e.extraStyle,u=e.touchableStyle,g=e.size,y=(0,o.Z)(e,x),Z={};g&&m[g]&&(Z=m[g]);var v=(0,p.jsxs)(d.Z,(0,r.Z)((0,r.Z)({style:[m.border,Z,n]},y),{},{children:[(0,p.jsx)(d.Z,{style:{flex:1,flexDirection:"row"},children:s.Children.toArray(t).map((function(e,n){return"string"===typeof t?(0,p.jsx)(h.Z,{color:"text",children:t},n):s.isValidElement(e)?s.cloneElement(e,{key:n}):null}))}),a&&(0,p.jsx)(d.Z,{style:{paddingRight:10},children:"string"===typeof a?(0,p.jsx)(h.Z,{color:"primary_text",style:c,children:a}):(0,p.jsx)(d.Z,{style:[{flexDirection:"row",alignItems:"center"},c],children:a})})]}));return l?(0,p.jsx)(f.Z,(0,r.Z)((0,r.Z)({style:[m.warpper,{paddingLeft:i},u],onPress:l},y),{},{children:v})):(0,p.jsx)(d.Z,{style:[{paddingLeft:i},m.warpper],children:v})}}]),n}(s.PureComponent);y.defaultProps={underlayColor:"#DADADA"};var m=g.Z.create({warpper:{},border:{borderBottomWidth:g.Z.hairlineWidth,borderColor:"#CDCDCD",flexDirection:"row",alignItems:"center"},default:{paddingVertical:12},small:{paddingVertical:10},large:{paddingVertical:16}}),Z=["renderItem","data","children","titleStyle","titleLabelStyle","paddingLeft","flat","size","extra","title","ListHeaderComponent"],v=function(){return null},C=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e)).state={data:[]},r}return(0,i.Z)(n,[{key:"renderItemChild",value:function(e){return e.item}},{key:"render",value:function(){var e=this.props,t=e.renderItem,n=e.data,l=e.children,i=e.titleStyle,a=e.titleLabelStyle,c=e.paddingLeft,f=e.flat,g=(e.size,e.extra,e.title),x=e.ListHeaderComponent,y=(0,o.Z)(e,Z),m={};t?"function"===typeof t&&(m.data=n,m.renderItem=function(e){return t((0,r.Z)({},e))}):(m.data=this.state.data,m.renderItem=this.renderItemChild.bind(this));var C=x;return g&&(C=(0,p.jsx)(d.Z,{style:[{paddingLeft:c,paddingVertical:12},i],children:"string"===typeof g?(0,p.jsx)(h.Z,{color:"primary_text",style:[{fontWeight:"500"},a],children:g}):(0,p.jsx)(d.Z,{children:g})})),m.renderItem||(m.renderItem=v),f?(0,p.jsx)(u.Z,(0,r.Z)((0,r.Z)({ListHeaderComponent:C,keyExtractor:function(e,t){return t.toString()}},y),m)):(0,p.jsx)(d.Z,(0,r.Z)((0,r.Z)({},y),{},{children:(0,p.jsxs)(p.Fragment,{children:[C,(t&&(!n||0===n.length)||!t&&(!l||0===s.Children.toArray(l).length))&&y.ListEmptyComponent,(m.data||[]).map((function(e,t){return s.cloneElement(m.renderItem&&m.renderItem({item:e,index:t})||(0,p.jsx)(d.Z,{}),{key:t})}))]})}))}}],[{key:"getDerivedStateFromProps",value:function(e){if(!e.renderItem){var t=function(){var t=e.size,n=e.extra,o=e.paddingLeft,l=e.children,i=s.Children.toArray(l).map((function(e){if(!s.isValidElement(e))return null;var l=(0,r.Z)({size:t},e.props);return s.cloneElement((0,p.jsx)(y,(0,r.Z)({paddingLeft:o,extra:n},l)))})).filter(Boolean);return i}();return{data:t}}return null}}]),n}(s.PureComponent);C.Item=y,C.defaultProps={data:[],paddingLeft:16,flat:!0,size:"default"}},27789:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(18489),o=n(83738),l=(n(93539),n(37068)),i=n(88514),a=n(12720),c=n(62453),s=n(64739),d=n(71027),u=["children","color","maskColor","rounded","loading","tip","size","vertical"],h=l.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}});function f(e){var t=(0,s.useTheme)(),n=e.children,l=e.color,f=void 0===l?t.colors.primary_background||"#3578e5":l,g=e.maskColor,p=void 0===g?t.colors.white||"rgba(255, 255, 255, 0.85)":g,x=e.rounded,y=e.loading,m=void 0===y||y,Z=e.tip,v=e.size,C=void 0===v?"small":v,j=e.vertical,b=(0,o.Z)(e,u),I={};if(p&&(I.backgroundColor=p),x&&(I.borderRadius=x),j&&(I.flexDirection="column"),!n&&!Z)return(0,d.jsx)(i.Z,{animating:m,size:C,color:f});var k=Z||m?(0,d.jsxs)(a.Z,{style:[h[m?"defalut":"stopActivity"],I],children:[(0,d.jsx)(i.Z,{animating:m,size:C,color:f}),Z&&("string"===typeof Z?(0,d.jsx)(c.Z,{style:{color:f},children:Z}):(0,d.jsx)(a.Z,{children:Z}))]}):null;return!n&&Z?k:(0,d.jsxs)(a.Z,(0,r.Z)((0,r.Z)({},b),{},{children:[k,n]}))}},37826:function(e,t,n){n.r(t);var r=n(18489),o=n(50678),l=n(83738),i=n(93539),a=n(76309),c=n(12720),s=n(57109),d=n(91821),u=n(88514),h=n(37068),f=n(87297),g=n(68960),p=n(78558),x=n(37322),y=n(32167),m=n(64739),Z=n(71027),v=["onChangeText","options","onChange","labelInValue","disabled","value","onFocus","onBlur","loading","placeholder","extra","showClear","contentStyle","placeholderColor"];function C(e){var t,n=e.onChangeText,C=e.options,j=void 0===C?[]:C,b=e.onChange,I=e.labelInValue,k=e.disabled,w=e.value,z=e.onFocus,S=e.onBlur,F=e.loading,A=e.placeholder,L=e.extra,B=e.showClear,D=void 0===B||B,P=e.contentStyle,_=void 0===P?{}:P,R=e.placeholderColor,E=(0,l.Z)(e,v),T=(0,m.useTheme)(),V=function(e){var t=e.maskBgColor,n=e.bgColor,r=e.disabledColor,o=e.iconColor,l=e.cancelColor;return h.Z.create({container:{flex:1,backgroundColor:n},icon:{backgroundColor:o,paddingLeft:10,justifyContent:"center"},cancel:{color:l,paddingRight:10,justifyContent:"center"},list:{marginLeft:10,marginTop:10,marginRight:10},loading:{position:"absolute",top:"20%",left:"45%"},content:{flexDirection:"row",height:35,alignItems:"center",justifyContent:"space-between",paddingRight:5,backgroundColor:t,paddingHorizontal:16},disabled:{flexDirection:"row",height:35,alignItems:"center",justifyContent:"space-between",paddingRight:5,backgroundColor:r,paddingHorizontal:16}})}({maskBgColor:T.colors.mask||"#F5F5F5",bgColor:T.colors.background||"#F5F5F5",disabledColor:T.colors.disabled||"#F5F5F5",iconColor:T.colors.primary_text||"#fff",cancelColor:T.colors.primary_text||"#7C7D7E"}),H=(0,i.useState)(w),W=(0,o.Z)(H,2),N=W[0],q=W[1],G=(0,i.useState)(!1),J=(0,o.Z)(G,2),K=J[0],M=J[1];I?t=null===N||void 0===N?void 0:N.label:t=j.find((function(e){return e.value===N})).label;(0,i.useEffect)((function(){q(w)}),[w]);var O=R?{color:R}:{};return K?(0,Z.jsx)(f.default,{visible:K,children:(0,Z.jsxs)(s.Z,{style:V.container,children:[(0,Z.jsx)(g.default,(0,r.Z)({loading:F,containerStyle:{marginHorizontal:10},autoFocus:!0,showActionButton:!0,placeholder:"\u8f93\u5165\u641c\u7d22...",onChangeText:function(e){n&&n(e)},onFocus:z&&z,onBlur:S&&S,searchRender:(0,Z.jsx)(d.Z,{onPress:function(){M(!1)},children:(0,Z.jsx)(c.Z,{style:V.cancel,children:(0,Z.jsx)(y.Z,{color:"primary_background",children:"\u53d6\u6d88"})})})},E)),F?(0,Z.jsx)(u.Z,{color:T.colors.primary_background||"#0A0258",size:"large",style:V.loading}):(0,Z.jsx)(p.default,{style:V.list,children:j.map((function(e){return(0,Z.jsx)(p.default.Item,{onPress:function(){var t=I?{key:e.value,label:e.label}:e.value;b&&b(t),q(t),M(!1)},children:(0,Z.jsx)(y.Z,{color:"primary_text",style:{fontSize:16},children:e.label})},e.value)}))})]})}):(0,Z.jsx)(a.Z,{onPress:function(){k||M(!0)},children:(0,Z.jsxs)(c.Z,{style:[k?V.disabled:V.content,_],children:[(0,Z.jsx)(y.Z,{color:"text",style:(0,r.Z)({fontSize:16},O),children:t||A}),i.isValidElement(L)?L:N&&D?(0,Z.jsx)(a.Z,{onPress:function(){b&&b(null),q(null)},style:{paddingRight:3},children:(0,Z.jsx)(x.default,{name:"circle-close-o",size:18,color:T.colors.primary_text||"#ccc"})}):(0,Z.jsx)(x.default,{name:"right",size:18,color:T.colors.primary_text||"#A19EA0"})]})})}t.default=(0,i.memo)(C)},68960:function(e,t,n){n.r(t);var r=n(83738),o=n(18489),l=n(50678),i=n(93539),a=n(2894),c=n(12720),s=n(37068),d=n(28850),u=n(37322),h=n(27789),f=n(32167),g=n(64739),p=n(71027),x=["value","onChangeText","showActionButton","inputStyle","containerStyle","searchIcon","closeIcon","loading"];t.default=function(e){var t=i.createRef(),n=(0,g.useTheme)(),m=(0,i.useState)({showIcon:!1}),Z=(0,l.Z)(m,2),v=Z[0],C=Z[1],j=function(n){var r;if("close"===n)null===(r=e.onClear)||void 0===r||r.call(e);else if("search"===n){var o;return void(null===(o=e.onSearch)||void 0===o||o.call(e))}"actived"===n&&C({showIcon:!0}),t.current&&t.current.focus()},b=e.value,I=e.onChangeText,k=e.showActionButton,w=e.inputStyle,z=e.containerStyle,S=e.searchIcon,F=e.closeIcon,A=e.loading,L=void 0!==A&&A,B=(0,r.Z)(e,x);return(0,p.jsx)(h.default,{loading:L,rounded:5,maskColor:"transparent",children:(0,p.jsxs)(c.Z,{style:[y.centerFlex],children:[(0,p.jsxs)(c.Z,{style:s.Z.flatten([{backgroundColor:n.colors.mask||"#fff"},y.searchContainer,y.centerFlex,z]),children:[(0,p.jsx)(a.Z,{onPress:function(){return j("search")},children:(0,p.jsx)(u.default,(0,o.Z)({name:"search",size:14,color:n.colors.text,height:"100%"},S))}),(0,p.jsx)(d.Z,(0,o.Z)((0,o.Z)({},B),{},{value:b,onChangeText:I,ref:t,style:[{color:n.colors.primary_text||"#A6ACB1"},y.textInput,w],onFocus:function(e){var t;null!==k&&C({showIcon:!0}),null===B||void 0===B||null===(t=B.onFocus)||void 0===t||t.call(B,e)},onBlur:function(e){var t;null===k||b||L||C({showIcon:!1}),null===B||void 0===B||null===(t=B.onBlur)||void 0===t||t.call(B,e)}})),Boolean(b)&&(0,p.jsx)(a.Z,{style:{},onPress:function(){return j("close")},children:(0,p.jsx)(u.default,(0,o.Z)({name:"close",size:14,color:n.colors.primary_text||"#A6ACB1",height:"100%"},F))})]}),function(){var t=e.showActionButton,n=e.searchRender,r=e.touchProps,l=e.actionName,i=void 0===l?"\u641c\u7d22":l,c=v.showIcon;return t||c?n||(0,p.jsx)(a.Z,(0,o.Z)((0,o.Z)({},r),{},{style:[y.search,{paddingHorizontal:10}],children:(0,p.jsx)(f.Z,{color:"primary_background",children:i})})):null}()]})})};var y=s.Z.create({centerFlex:{flexDirection:"row",justifyContent:"center",alignContent:"center"},searchContainer:{height:40,borderRadius:5,flex:1,paddingHorizontal:15},textInput:{paddingVertical:0,height:"100%",flex:1,fontSize:14,fontWeight:"400",paddingLeft:10},search:{justifyContent:"center",borderWidth:0}})}}]);
//# sourceMappingURL=7826.730d42c0.chunk.js.map