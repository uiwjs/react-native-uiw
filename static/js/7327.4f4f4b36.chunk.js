(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7327],{59940:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var o=n(1413),a=n(45987),r=n(30168),i=n(70377),l=n(53929),c=n(78069),s=n(17285),u=n(61366),d=n(93539),f=n(71027);function m(e){var t=e.path,n=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[t&&n&&(0,f.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(c.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var p,h,_=["path"],g=["inline","node"],y=["data-meta"],v=l.ZP.div(p||(p=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),x=(0,l.ZP)(i.Z)(h||(h=(0,r.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n},N=function(e){var t=e.path,n=(0,a.Z)(e,_),r=(0,d.useRef)(null);return(0,f.jsxs)(v,{ref:r,children:[(0,f.jsx)(x,(0,o.Z)((0,o.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var o=e.children&&e.children[0];o&&o.properties&&"true"===o.properties.ariaHidden&&(o.children=[])}},components:{code:function(e){var t,r=e.inline,i=e.node,l=(0,a.Z)(e,g),c=l["data-meta"],d=(0,a.Z)(l,y);if(r||!(0,s.pN)(c))return(0,f.jsx)("code",(0,o.Z)({},l));var m=null===(t=i.position)||void 0===t?void 0:t.start.line,p=(0,s.Mx)(c)||String(m),h=n.components["".concat(p)];if(p&&"function"===typeof h){var _=n.data[p].value||"",v=(0,s.aE)(c);return(0,f.jsx)(u.Z,{disableCheckered:b(v,"disableCheckered",!0),disableToolbar:b(v,"disableToolbar",!1),disableCode:b(v,"disableCode",!1),disablePreview:b(v,"disablePreview",!1),bordered:b(v,"bordered",!0),copied:b(v,"copied",!0),background:v.background,toolbar:v.title||"\u793a\u4f8b",code:(0,f.jsx)("code",(0,o.Z)({},d)),text:_,children:(0,f.jsx)(h,{})})}return(0,f.jsx)("code",(0,o.Z)({},d))}}})),(0,f.jsx)(m,{path:t}),(0,f.jsx)(c.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,f.jsx)(c.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,f.jsx)(c.JO,{type:"arrow-up"})},percent:t})}})]})}},71885:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(1413),a=n(59940),r={components:{8:function(){var e=r(n(93539)),t=n(95164),o=r(n(24383)),a=r(n(22855));function r(e){return e&&e.__esModule?e:{default:e}}return function(){var n=e.default.createElement(t.Image,{source:{uri:"https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png"},style:{width:12,height:12}});return e.default.createElement(t.View,{style:{marginTop:10}},e.default.createElement(o.default,{onPress:function(){return console.log("click")},marqueeProps:{loop:!0,style:{fontSize:12,color:"red"}}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"closable",onPress:function(){return console.log("will close")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"closable",icon:n},"Customized icon."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"link",onPress:function(){return console.log("link")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"closable",icon:void 0},"Remove the default icon."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"closable",action:e.default.createElement(t.Text,{style:{color:"#a1a1a1"}},"\u4e0d\u518d\u63d0\u793a")},"Closable demo for `actionText`."),e.default.createElement(a.default,null),e.default.createElement(o.default,{mode:"link",action:e.default.createElement(t.Text,null,"\u53bb\u770b\u770b")},"Link demo for `actionText`."),e.default.createElement(a.default,null),e.default.createElement(o.default,{textStyle:{color:"blue",fontSize:20},style:{backgroundColor:"lightblue",height:50}},"Change demo for `action`."))}}()},data:{8:{name:8,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _NoticeBar = _interopRequireDefault(require("@uiw/react-native/lib/NoticeBar"));\nvar _Spacing = _interopRequireDefault(require("@uiw/react-native/lib/Spacing"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar NoticeBarExample = function NoticeBarExample() {\n  var customIcon = /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {\n    source: {\n      uri: \'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png\'\n    },\n    style: {\n      width: 12,\n      height: 12\n    }\n  });\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      marginTop: 10\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    onPress: function onPress() {\n      return console.log(\'click\');\n    },\n    marqueeProps: {\n      loop: true,\n      style: {\n        fontSize: 12,\n        color: \'red\'\n      }\n    }\n  }, "Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "closable",\n    onPress: function onPress() {\n      return console.log(\'will close\');\n    }\n  }, "Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "closable",\n    icon: customIcon\n  }, "Customized icon."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "link",\n    onPress: function onPress() {\n      return console.log(\'link\');\n    }\n  }, "Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "closable",\n    icon: undefined\n  }, "Remove the default icon."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "closable",\n    action: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {\n      style: {\n        color: \'#a1a1a1\'\n      }\n    }, "\\u4E0D\\u518D\\u63D0\\u793A")\n  }, "Closable demo for `actionText`."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    mode: "link",\n    action: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u53BB\\u770B\\u770B")\n  }, "Link demo for `actionText`."), /*#__PURE__*/_react["default"].createElement(_Spacing["default"], null), /*#__PURE__*/_react["default"].createElement(_NoticeBar["default"], {\n    textStyle: {\n      color: \'blue\',\n      fontSize: 20\n    },\n    style: {\n      backgroundColor: \'lightblue\',\n      height: 50\n    }\n  }, "Change demo for `action`."));\n};\nreturn NoticeBarExample;',language:"jsx",value:"import React from 'react';\nimport { Image,View,Text } from 'react-native'\nimport NoticeBar from '@uiw/react-native/lib/NoticeBar';\nimport Spacing from '@uiw/react-native/lib/Spacing';\n\nconst NoticeBarExample = () => {\n  const customIcon = (\n    <Image\n      source={{\n        uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',\n      }}\n      style={{ width: 12, height: 12 }}\n    />\n  )\n  return (\n      <View style={{ marginTop: 10 }}>\n        <NoticeBar\n          onPress={() => console.log('click')}\n          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}>\n            Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n            delayed during National Day.\n        </NoticeBar>\n         <Spacing />\n        <NoticeBar mode=\"closable\" onPress={() => console.log('will close')}>\n          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n          delayed during National Day.\n        </NoticeBar>\n         <Spacing />\n        <NoticeBar mode=\"closable\" icon={customIcon}>\n          Customized icon.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"link\" onPress={() => console.log('link')}>\n          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n          delayed during National Day.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"closable\" icon={undefined}>\n          Remove the default icon.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar\n          mode=\"closable\"\n          action={<Text style={{ color: '#a1a1a1' }}>\u4e0d\u518d\u63d0\u793a</Text>}>\n          Closable demo for `actionText`.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"link\" action={<Text>\u53bb\u770b\u770b</Text>}>\n          Link demo for `actionText`.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar\n          textStyle={{color: 'blue', fontSize: 20}}\n          style={{backgroundColor: 'lightblue', height: 50}}>\n          Change demo for `action`.\n        </NoticeBar>\n      </View>\n    )\n}\nexport default NoticeBarExample;"}},source:"NoticeBar \u901a\u544a\u680f\n---\n\n\u5728\u5bfc\u822a\u680f\u4e0b\u65b9\uff0c\u4e00\u822c\u7528\u4f5c\u7cfb\u7edf\u63d0\u9192\u3001\u6d3b\u52a8\u63d0\u9192\u7b49\u901a\u77e5\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Image,View,Text } from 'react-native'\nimport NoticeBar from '@uiw/react-native/lib/NoticeBar';\nimport Spacing from '@uiw/react-native/lib/Spacing';\n\nconst NoticeBarExample = () => {\n  const customIcon = (\n    <Image\n      source={{\n        uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',\n      }}\n      style={{ width: 12, height: 12 }}\n    />\n  )\n  return (\n      <View style={{ marginTop: 10 }}>\n        <NoticeBar\n          onPress={() => console.log('click')}\n          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}>\n            Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n            delayed during National Day.\n        </NoticeBar>\n         <Spacing />\n        <NoticeBar mode=\"closable\" onPress={() => console.log('will close')}>\n          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n          delayed during National Day.\n        </NoticeBar>\n         <Spacing />\n        <NoticeBar mode=\"closable\" icon={customIcon}>\n          Customized icon.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"link\" onPress={() => console.log('link')}>\n          Notice: The arrival time of incomes and transfers of Yu 'E Bao will be\n          delayed during National Day.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"closable\" icon={undefined}>\n          Remove the default icon.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar\n          mode=\"closable\"\n          action={<Text style={{ color: '#a1a1a1' }}>\u4e0d\u518d\u63d0\u793a</Text>}>\n          Closable demo for `actionText`.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar mode=\"link\" action={<Text>\u53bb\u770b\u770b</Text>}>\n          Link demo for `actionText`.\n        </NoticeBar>\n        <Spacing />\n        <NoticeBar\n          textStyle={{color: 'blue', fontSize: 20}}\n          style={{backgroundColor: 'lightblue', height: 50}}>\n          Change demo for `action`.\n        </NoticeBar>\n      </View>\n    )\n}\nexport default NoticeBarExample;\n```\n\n### Props\n\n\u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c\n----|-----|------|------\n| mode    | \u63d0\u793a\u7c7b\u578b\uff0c\u53ef\u9009 `closable`,`link`   | String |  -  |\n| icon    | \u5728\u5f00\u59cb\u4f4d\u7f6e\u8bbe\u7f6e\u56fe\u6807  |  ReactNode | `<Icon type={require('./trips.svg')} size=\"xxs\" />`|\n| onPress | \u70b9\u51fb\u5173\u95ed\u6216\u8005\u64cd\u4f5c\u533a\u57df\u7684\u56de\u8c03\u51fd\u6570        | () => void |   |\n| marqueeProps | marquee \u53c2\u6570 | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |\n| action | \u7528\u4e8e\u66ff\u6362\u64cd\u4f5c icon \u7684\u6587\u6848 | ReactElement | |\n| style    | \u7528\u4e8e\u8bbe\u7f6e\u901a\u544a\u680f\u6837\u5f0f  | ViewStyle |  |\n| textStyle    | \u7528\u4e8e\u8bbe\u7f6e\u901a\u544a\u680f\u6587\u5b57\u6837\u5f0f  | TextStyle |  |\n"},i=n(71027),l=function(){return(0,i.jsx)(a.Z,(0,o.Z)((0,o.Z)({},r),{},{path:"/packages/core/src/NoticeBar/README.md"}))}},37322:function(e,t,n){"use strict";n.r(t);var o=n(1413),a=n(45987),r=(n(93539),n(36893)),i=n.n(r),l=n(80464),c=n(71027),s=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,n=void 0===t?26:t,u=e.name,d=e.fill,f=void 0===d?"#000000":d,m=e.stroke,p=e.xml,h=e.paths,_=e.color,g=(0,a.Z)(e,s);if(p)return(0,c.jsx)(r.SvgXml,(0,o.Z)({testID:"RNE__Icon__svgXml",xml:p,height:n,width:n},g));var y=h;if(!y){if(!u||!l[u])return null;y=l[u]}return(0,c.jsx)(i(),(0,o.Z)((0,o.Z)({testID:"RNE__Icon__svg",fill:_||f,stroke:m,height:n,width:n,viewBox:"0 0 20 20"},g),{},{children:y.map((function(e,t){return(0,c.jsx)(r.Path,{d:e,fillRule:"evenodd"},t)}))}))}},24383:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(1413),a=n(29439),r=n(93539),i=n(91821),l=n(12720),c=n(62453),s=n(37068),u=n(37322),d=n(15671),f=n(43144),m=n(97326),p=n(60136),h=n(27277),_=n(702),g=n(57876),y=n(71027),v=function(e){(0,p.Z)(n,e);var t=(0,h.Z)(n);function n(e){var o;return(0,d.Z)(this,n),(o=t.call(this,e)).onLayout=function(e){o.state.twidth||o.setState({twidth:e.nativeEvent.layout.width},(function(){o.tryStart()}))},o.onLayoutContainer=function(e){o.state.width||o.setState({width:e.nativeEvent.layout.width},(function(){o.left.setValue(0),o.tryStart()}))},o.startMove=function(){var e=o.props,t=e.fps,n=void 0===t?40:t,a=e.loop,r=1/n*1e3,i=(0,m.Z)(o).props;_.Z.timing(o.left,{toValue:1,duration:o.state.twidth*r,easing:g.Z.linear,delay:i.leading,isInteraction:!1,useNativeDriver:!0}).start((function(){a&&o.moveToHeader()}))},o.moveToHeader=function(){_.Z.timing(o.left,{toValue:0,duration:0,delay:o.props.trailing,isInteraction:!1,useNativeDriver:!0}).start((function(){o.startMove()}))},o.texts={},o.left=new _.Z.Value(0),o.state={twidth:0,width:0},o}return(0,f.Z)(n,[{key:"tryStart",value:function(){this.state.twidth>this.state.width&&this.state.width&&this.startMove()}},{key:"render",value:function(){var e=this.state,t=e.width,n=e.twidth,o=this.props,a=o.style,r=o.text,i=o.maxWidth,s=(0,y.jsx)(c.Z,{onLayout:this.onLayout,numberOfLines:1,ellipsizeMode:"tail",style:a,children:r});return(0,y.jsx)(l.Z,{style:{flex:1,flexDirection:"row",alignItems:"center"},onLayout:this.onLayoutContainer,children:(0,y.jsx)(_.Z.View,{style:{flexDirection:"row",transform:[{translateX:this.left.interpolate({inputRange:[0,1],outputRange:[0,-n+t]})}],width:i},children:s})})}}]),n}(r.PureComponent);v.defaultProps={text:"",loop:!1,leading:500,trailing:800,fps:40,maxWidth:1e3};var x=v,b=s.Z.create({notice:{backgroundColor:"#fffada",height:36,overflow:"hidden",flexDirection:"row",alignItems:"center",color:"#f4333c"},container:{flex:1,marginRight:15,overflow:"hidden",width:0},content:{fontSize:15,color:"#f4333c"},left6:{marginLeft:5},left15:{marginLeft:15},actionWrap:{marginRight:15},close:{color:"#f4333c",fontSize:18,fontWeight:"200",textAlign:"left"},link:{transform:[{rotate:"225deg"}],color:"#f4333c",fontSize:10,fontWeight:"500",textAlign:"left"}}),N=function(e){var t=(0,r.useState)(!0),n=(0,a.Z)(t,2),s=n[0],d=n[1],f=function(){var t=e.mode,n=e.onPress;n&&n(),"closable"===t&&d(!1)},m=e.children,p=e.mode,h=e.icon,_=e.style,g=e.action,v=e.marqueeProps,N=e.textStyle,w=null;h="undefined"===typeof h?(0,y.jsx)(u.default,{name:"notification",color:"#f4333c",size:15}):h,"closable"===p?w=(0,y.jsx)(i.Z,{onPress:f,children:(0,y.jsx)(l.Z,{style:b.actionWrap,children:g||(0,y.jsx)(c.Z,{style:[b.close],children:"\xd7"})})}):"link"===p&&(w=(0,y.jsx)(l.Z,{style:b.actionWrap,children:g||(0,y.jsx)(c.Z,{style:[b.link],children:"\u221f"})}));var E=(0,y.jsxs)(l.Z,{style:[b.notice,_],testID:"RNE__NoticeBar__style",children:[h&&(0,y.jsx)(l.Z,{style:b.left15,children:h}),(0,y.jsx)(l.Z,{style:[b.container,h?b.left6:b.left15],children:(0,y.jsx)(x,(0,o.Z)({style:[b.content,N],text:m},v))}),w]});return(0,y.jsx)(l.Z,{children:s?"closable"===p?E:(0,y.jsx)(i.Z,{onPress:f,testID:"RNE__NoticeBar__link",children:E}):null})}},22855:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=n(1413),a=n(45987),r=n(15671),i=n(43144),l=n(60136),c=n(27277),s=n(93539),u=n(12720),d=n(71027),f=["size","style","type"],m=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.style,r=e.type,i=(0,a.Z)(e,f),l={},c="vertical"===r?"height":"width";return l[c]=10,"small"===t?l[c]=5:"large"===t?l[c]=15:"number"===typeof t&&(l[c]=t),(0,d.jsx)(u.Z,(0,o.Z)({style:[l,n]},i))}}]),n}(s.Component);m.defaultProps={size:"default",type:"vertical"}},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=7327.4f4f4b36.chunk.js.map