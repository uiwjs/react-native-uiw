(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5263],{85480:function(n,e,r){"use strict";var t,o,a=r(1413),i=r(45987),l=r(30168),s=r(63032),c=r(53929),u=r(78069),d=r(17285),p=r(61366),f=r(93539),b=r(71027),h=["inline","node"],v=["data-meta"],x=c.ZP.div(t||(t=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),g=(0,c.ZP)(s.Z)(o||(o=(0,l.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),m=function(n,e,r){if(Reflect.has(n,e)){var t=Reflect.get(n,e);if("true"===t)return!0;if("false"===t)return!1}return r};e.Z=function(n){var e=(0,f.useRef)(null);return(0,b.jsxs)(x,{ref:e,children:[(0,b.jsx)(g,{disableCopy:!0,source:n.source,rehypeRewrite:function(n,e,r){if("element"===n.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var t=n.children&&n.children[0];t&&t.properties&&"true"===t.properties.ariaHidden&&(t.children=[])}},components:{code:function(e){var r,t=e.inline,o=e.node,l=(0,i.Z)(e,h),s=l["data-meta"],c=(0,i.Z)(l,v);if(t||!(0,d.pN)(s))return(0,b.jsx)("code",(0,a.Z)({},l));var u=null===(r=o.position)||void 0===r?void 0:r.start.line,f=(0,d.Mx)(s)||String(u),x=n.components["".concat(f)];if(f&&"function"===typeof x){var g=n.data[f].value||"",w=(0,d.aE)(s);return(0,b.jsx)(p.Z,{disableCheckered:m(w,"disableCheckered",!0),disableToolbar:m(w,"disableToolbar",!1),disableCode:m(w,"disableCode",!1),disablePreview:m(w,"disablePreview",!1),bordered:m(w,"bordered",!0),copied:m(w,"copied",!0),background:w.background,toolbar:w.title||"\u793a\u4f8b",code:(0,b.jsx)("code",(0,a.Z)({},c)),text:g,children:(0,b.jsx)(x,{})})}return(0,b.jsx)("code",(0,a.Z)({},c))}}}),(0,b.jsx)(u.kF,{speed:500,children:function(n){var e=n.percent,r=n.scrollToTop;return(0,b.jsx)(u.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,b.jsx)(u.JO,{type:"arrow-up"})},percent:e})}})]})}},50226:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var t=r(1413),o=r(85480),a={components:{},data:{},source:"SearchBar \u6a21\u7cca\u641c\u7d20\u7ec4\u4ef6\n\n![](https://user-images.githubusercontent.com/66067296/140004480-cadbd892-afb3-483f-95a3-3bfe43a4bdfc.gif)\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n---\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { SearchBar } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <SearchBar \n      labelInValue \n      options={[\n        {label:'\u4e0a\u6d77',value:1},\n        {label:'\u5357\u4eac',value:2}\n      ]} \n      onFocus={()=>{}}  \n      onChange={val=>console.log('val',val)} \n    />\n  );\n}\n```\n\n### props\n\n```ts\ninterface OptionsState {\n  label: string;\n  value: string | number;\n}\n\ninterface SearchBarProps {\n  /** \u641c\u7d22\u6846\u6587\u5b57\u53d8\u5316 */\n  onChangeText?: (value: string) => void;\n  /** \u6570\u636e\u5316\u914d\u7f6e\u9009\u9879\u5185\u5bb9\uff0c\u76f8\u6bd4 jsx \u5b9a\u4e49\u4f1a\u83b7\u5f97\u66f4\u597d\u7684\u6e32\u67d3\u6027\u80fd */\n  options?: Array<OptionsState>;\n  /** \u4e8b\u4ef6\u53d8\u5316\u56de\u8c03 */\n  onChange?: (value: string | null) => void;\n  /** \u83b7\u5f97\u7126\u70b9\u65f6\u56de\u8c03 */\n  onFocus?: (e: any | string) => void;\n  /** \u662f\u5426\u628a\u6bcf\u4e2a\u9009\u9879\u7684 label \u5305\u88c5\u5230 value \u4e2d\uff0c\u4f1a\u628a Select \u7684 value \u7c7b\u578b\u4ece string \u53d8\u4e3a { key: string, label: ReactNode } \u7684\u683c\u5f0f   */\n  labelInValue?: Boolean;\n  /** \u662f\u5426\u7981\u7528 */\n  disabled?: Boolean;\n  /** \u503c */\n  value?: String;\n  /** \u52a0\u8f7d\u4e2d\u72b6\u6001 */\n  loading?: Boolean;\n  /** \u641c\u7d22\u6846\u9ed8\u8ba4\u6587\u672c */\n  placeholder?: String;\n  /** \u56fe\u6807 */\n  extra?: JSX.Element;\n  /** \u662f\u5426\u5c55\u793a\u6e05\u695a\u56fe\u6807 */\n  showClear?: boolean;\n}\n```"},i=r(71027),l=function(){return(0,i.jsx)(o.Z,(0,t.Z)({},a))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=5263.fa6381d5.chunk.js.map