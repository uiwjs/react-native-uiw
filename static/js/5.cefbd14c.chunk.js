(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[5],{1153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(0),o=a(5),i=a(24),r=a(417),c=a(418),s=a.n(c),p=a(4),m=a(46),d=(a(419),a(1));function l(){var e=localStorage.getItem("theme"),t=Object(n.useState)(!!e),a=Object(p.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){document.documentElement.dataset.theme=o?"dark":""}),[o]),Object(d.jsx)(m.b,{checked:o,"data-checked":"\ud83c\udf1e","data-unchecked":"\ud83c\udf1b",onChange:function(e){e.target.checked?localStorage.setItem("theme","1"):localStorage.removeItem("theme"),i(e.target.checked)},style:{display:"flex",alignItems:"center",marginLeft:10,marginRight:10}})}var h=a(44),u=a(45);function b(e){var t=e.showBorder,a=void 0===t||t,n=e.enableStyle,o=e.style,c=void 0===o?{}:o,p=r.version||"2.0.0";return(a||n)&&(c.border=0,c.boxShadow="initial"),n&&(c.background="#f7f7f7"),Object(d.jsx)("header",{className:s.a.warpper,style:c,children:Object(d.jsxs)("div",{className:s.a.inner,children:[Object(d.jsxs)(i.b,{to:"/",className:s.a.logo,children:[Object(d.jsx)(h.a,{height:"38",width:"38"}),Object(d.jsxs)("span",{className:s.a.title,style:{display:"flex"},children:[Object(d.jsx)("span",{children:"React Native UIW"}),Object(d.jsxs)("span",{children:["v",p]})]})]}),Object(d.jsxs)("div",{className:s.a.menus,children:[Object(d.jsx)(i.c,{to:"/home",children:"\u9996\u9875"}),Object(d.jsx)(i.c,{to:"/docs",children:"\u6587\u6863"}),Object(d.jsx)(i.c,{to:"/components",children:"RN\u7ec4\u4ef6"}),Object(d.jsx)("a",{target:"__blank",href:"https://github.com/uiwjs/react-native-uiw/issues",children:"\u95ee\u9898\u53cd\u9988"}),Object(d.jsx)("a",{target:"__blank",href:"https://uiwjs.github.io/#/components",children:"Web \u7ec4\u4ef6"}),Object(d.jsx)(i.c,{to:"/team",children:"\u56e2\u961f"}),Object(d.jsx)(l,{}),Object(d.jsx)("a",{target:"__blank",href:"https://github.com/uiwjs/react-native-uiw",children:Object(d.jsx)(u.a,{})})]})]})})}var v=a(18),j=a(420),g=a.n(j),w=a(190);function x(e){var t=e.data,a=void 0===t?[]:t;return Object(d.jsx)("div",{className:g.a.warpper,children:Object(d.jsx)("div",{className:g.a.inner,style:{},children:a.map((function(e,t){return e.divider?Object(d.jsx)("div",{className:g.a.divider,children:e.name},t):e.href?Object(d.jsxs)("a",Object(v.a)(Object(v.a)({href:e.href},e),{},{children:[e.name," ",Object(d.jsx)(w.a,{})]}),t):e.path?Object(d.jsx)(i.c,Object(v.a)(Object(v.a)({to:e.path},e),{},{children:e.name}),t):Object(d.jsx)("div",{children:"data"},t)}))})})}var f=a(421),O=a.n(f),y=[{path:"/components/about",name:"\u5173\u4e8e UIW"},{divider:!0,name:"\u901a\u7528"},{path:"/components/button",name:"Button \u6309\u94ae"},{path:"/components/icon",name:"Icon \u56fe\u6807"},{path:"/components/typography",name:"Typography \u6392\u7248"},{divider:!0,name:"Layout"},{path:"/components/divider",name:"Divider \u5206\u5272\u7ebf"},{path:"/components/flex",name:"Flex \u5e03\u5c40"},{path:"/components/table",name:"Table \u8868\u683c"},{path:"/components/spacing",name:"Spacing \u95f4\u8ddd"},{path:"/components/winblank",name:"WingBlank \u4e24\u7ffc\u7559\u767d"},{divider:!0,name:"Navigation"},{path:"/components/drawer",name:"Drawer \u62bd\u5c49"},{path:"/components/menudropdown",name:"MenuDropdown \u83dc\u5355\u4e0b\u62c9\u6309\u94ae"},{path:"/components/swipeaction",name:"SwipeAction \u6ed1\u52a8\u64cd\u4f5c\u7ec4\u4ef6"},{path:"/components/expandablesection",name:"ExpandableSection \u5c55\u5f00\u7f29\u653e\u7ec4\u4ef6"},{path:"/components/cardcollapse",name:"CardCollapse \u53ef\u6298\u53e0\u5361\u7247\u5217\u8868"},{divider:!0,name:"Data Entry"},{path:"/components/buttongroup",name:"ButtonGroup \u6309\u94ae\u7ec4"},{path:"/components/checkbox",name:"CheckBox \u590d\u9009\u6846"},{path:"/components/calendar",name:"Calendar \u65e5\u5386"},{path:"/components/input",name:"Input \u6587\u672c\u8f93\u5165"},{path:"/components/radio",name:"Radio \u5355\u9009\u6846"},{path:"/components/rating",name:"Rating \u8bc4\u5206"},{path:"/components/segmentedcontrol",name:"SegmentedControl \u5206\u6bb5\u5668"},{path:"/components/slider",name:"Slider \u6ed1\u5757\u8f93\u5165\u6761"},{path:"/components/switch",name:"Switch \u5f00\u5173"},{path:"/components/searchbar",name:"SearchBar \u6a21\u7cca\u641c\u7d20\u7ec4\u4ef6"},{path:"/components/picker",name:"Picker \u9009\u62e9\u5668"},{path:"/components/selectcascader",name:"SelectCascader \u7ea7\u8054\u9009\u62e9"},{divider:!0,name:"Data Display"},{path:"/components/avatar",name:"Avatar \u5934\u50cf"},{path:"/components/badge",name:"Badge \u6807\u8bb0"},{path:"/components/ellipsis",name:"Ellipsis \u8d85\u51fa\u7701\u7565"},{path:"/components/empty",name:"Empty \u7a7a\u72b6\u6001"},{path:"/components/grid",name:"Grid \u5bab\u683c"},{path:"/components/list",name:"List \u5217\u8868"},{path:"/components/steps",name:"Steps \u6b65\u9aa4\u6761"},{path:"/components/timeLine",name:"Timeline \u65f6\u95f4\u8f74"},{path:"/components/quicklist",name:"QuicList \u5feb\u901f\u5217\u8868"},{path:"/components/card",name:"Card \u5361\u7247"},{path:"/components/noticebar",name:"NoticeBar \u901a\u544a\u680f"},{path:"/components/swiper",name:"Swiper \u8f6e\u64ad\u56fe"},{divider:!0,name:"Feedback"},{path:"/components/loader",name:"Loader \u52a0\u8f7d"},{path:"/components/modal",name:"Modal \u6a21\u6001\u6846"},{path:"/components/masklayer",name:"MaskLayer \u906e\u7f69\u5c42"},{path:"/components/result",name:"Result \u7ed3\u679c\u9875"},{path:"/components/toast",name:"Toast \u8f7b\u63d0\u793a"},{path:"/components/tabs",name:"Tabs \u9009\u9879\u5361"},{path:"/components/speeddial",name:"SpeedDial \u60ac\u6d6e\u6807\u8bb0"},{path:"/components/stepper",name:"Stepper \u6b65\u8fdb\u5668"},{path:"/components/tile",name:"Tile \u5361\u7247"},{path:"/components/transitionImage",name:"TransitionImage \u56fe\u7247\u8fc7\u6e21"},{path:"/components/progress",name:"Progress \u8fdb\u5ea6\u6761"},{path:"/components/tooltip",name:"Tooltip \u5de5\u5177\u63d0\u793a"},{path:"/components/actionSheet",name:"ActionSheet \u52a8\u4f5c\u9762\u677f"},{path:"/components/search-input-bar",name:"SearchInputBar \u641c\u7d22\u680f"},{path:"/components/pagination",name:"Pagination \u5206\u9875\u5668"},{divider:!0,name:"\u5176\u5b83"},{href:"https://github.com/uiwjs/react-native-alipay",name:"Alipay \u652f\u4ed8\u5b9d",target:"__blank"},{href:"https://github.com/uiwjs/react-native-amap-geolocation",name:"AMapGeolocation \u9ad8\u5fb7\u5730\u56fe\u5b9a\u4f4d",target:"__blank"}],_=[{path:"/docs/getting-started",name:"\u5feb\u901f\u4e0a\u624b"},{path:"/docs/development/components",name:"\u53c2\u4e0e\u7ec4\u4ef6\u5f00\u53d1"},{path:"/docs/development/document",name:"\u53c2\u4e0e\u6587\u6863\u7f51\u7ad9\u7f16\u8f91\u5f00\u53d1"},{divider:!0,name:"\u73af\u5883\u5b89\u88c5"},{path:"/docs/environment-setup/ios",name:"iOS \u73af\u5883\u5b89\u88c5"},{path:"/docs/environment-setup/android",name:"Android(Mac) \u73af\u5883\u5b89\u88c5"},{path:"/docs/environment-setup/android-windows",name:"Android(Windows) \u73af\u5883\u5b89\u88c5"},{divider:!0,name:"\u53d1\u5e03\u5e94\u7528\u5546\u5e97"},{path:"/docs/app-store/ios",name:"\u53d1\u5e03 iOS \u5e94\u7528\u5546\u5e97"},{path:"/docs/app-store/android",name:"\u53d1\u5e03 Android \u5e94\u7528\u5546\u5e97"},{divider:!0,name:"\u5176\u5b83"},{path:"/docs/react-native-template",name:"React Native Template"},{path:"/docs/awesome-react-native",name:"Awesome React Native"},{href:"https://github.com/facebook/react",target:"_blank",name:"React \u5b98\u65b9\u6587\u6863"},{href:"https://github.com/facebook/react-native",target:"_blank",name:"React Native \u5b98\u65b9\u6587\u6863"},{href:"https://github.com/uiwjs/react-native-uiw/releases",target:"_blank",name:"\u66f4\u65b0\u65e5\u5fd7"}];function k(e){var t=e.path,a=void 0===t?"":t,i=Object(o.g)().pathname,r=[];return/^\/components/.test(i)&&(r=y),/^\/docs/.test(i)&&(r=_),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(b,{enableStyle:/\/(team)/.test(a),showBorder:/\/(home)/.test(a),path:a}),Object(d.jsxs)("div",{className:O.a.warpper,children:[r&&r.length>0&&Object(d.jsx)(x,{data:r}),Object(d.jsx)("div",{className:O.a.content,style:{flex:1,overflow:"hidden"},children:Object(d.jsx)(o.b,{})})]})]})}},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n,o,i=a(0),r=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function p(e,t){var a=e.title,p=e.titleId,m=s(e,r);return i.createElement("svg",c({viewBox:"0 0 1024 1024",width:14,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":p},m),a?i.createElement("title",{id:p},a):null,n||(n=i.createElement("path",{d:"M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z"})),o||(o=i.createElement("path",{d:"M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z"})))}var m=i.forwardRef(p);a.p},417:function(e){e.exports=JSON.parse('{"name":"@uiw/react-native","version":"3.0.1","description":"UIW for React Native","homepage":"https://uiwjs.github.io/react-native-uiw/","main":"lib/index.js","scripts":{},"keywords":["uiw","react-native","Avatar","Badge","Button","ButtonGroup","CheckBox","Divider","Drawer","Ellipsis","Empty","Flex","Grid","Icon","Input","List","Loader","MaskLayer","MenuDropdown","Modal","Radio","Result","SegmentedControl","SelectCascader","SearchBar","Slider","Spacing","SwipeAction","Switch","Toast","Typography","WingBlank"],"license":"MIT","repository":{"type":"git","url":"https://github.com/uiwjs/react-native-uiw"},"files":["lib","src","README.md"],"dependencies":{"@babel/runtime":"7.16.0","@react-native-picker/picker":"2.2.0","@types/color":"3.0.2","@types/lodash":"4.14.172","@types/react-native":"0.65.5","@uiw/icons":"2.5.3","color":"4.0.1","lodash":"4.17.21","prop-types":"15.7.2","react-native-gesture-handler":"1.10.3","react-native-root-siblings":"4.1.1","react-native-svg":"12.1.1"},"peerDependencies":{"react":">=16.9.0","react-native":">=0.60.0","react-native-svg":">=9.9.3"},"devDependencies":{"@babel/core":"7.16.0","@babel/preset-typescript":"7.15.0"},"engines":{"node":"^12.20.0 || ^14.13.1 || >=16.0.0"}}')},418:function(e,t,a){e.exports={warpper:"index_warpper__2TK4-",inner:"index_inner__29ZIU",menus:"index_menus__2Ed2S",logo:"index_logo__2xmv7",title:"index_title__24_rR"}},419:function(e,t,a){},420:function(e,t,a){e.exports={warpper:"index_warpper__2XaDC",divider:"index_divider__1crWV",inner:"index_inner__1Cw4r"}},421:function(e,t,a){e.exports={warpper:"index_warpper__1CN8i"}}}]);
//# sourceMappingURL=5.cefbd14c.chunk.js.map