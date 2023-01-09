(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6586],{85480:function(e,n,t){"use strict";var r,o,i=t(1413),a=t(45987),s=t(30168),d=t(63032),c=t(53929),p=t(78069),u=t(17285),l=t(61366),f=t(93539),m=t(71027),x=["inline","node"],h=["data-meta"],w=c.ZP.div(r||(r=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),g=(0,c.ZP)(d.Z)(o||(o=(0,s.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),C=function(e,n,t){if(Reflect.has(e,n)){var r=Reflect.get(e,n);if("true"===r)return!0;if("false"===r)return!1}return t};n.Z=function(e){var n=(0,f.useRef)(null);return(0,m.jsxs)(w,{ref:n,children:[(0,m.jsx)(g,{disableCopy:!0,source:e.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var t,r=n.inline,o=n.node,s=(0,a.Z)(n,x),d=s["data-meta"],c=(0,a.Z)(s,h);if(r||!(0,u.pN)(d))return(0,m.jsx)("code",(0,i.Z)({},s));var p=null===(t=o.position)||void 0===t?void 0:t.start.line,f=(0,u.Mx)(d)||String(p),w=e.components["".concat(f)];if(f&&"function"===typeof w){var g=e.data[f].value||"",b=(0,u.aE)(d);return(0,m.jsx)(l.Z,{disableCheckered:C(b,"disableCheckered",!0),disableToolbar:C(b,"disableToolbar",!1),disableCode:C(b,"disableCode",!1),disablePreview:C(b,"disablePreview",!1),bordered:C(b,"bordered",!0),copied:C(b,"copied",!0),background:b.background,toolbar:b.title||"\u793a\u4f8b",code:(0,m.jsx)("code",(0,i.Z)({},c)),text:g,children:(0,m.jsx)(w,{})})}return(0,m.jsx)("code",(0,i.Z)({},c))}}}),(0,m.jsx)(p.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,m.jsx)(p.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,m.jsx)(p.JO,{type:"arrow-up"})},percent:n})}})]})}},48367:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(1413),o=t(85480),i={components:{},data:{},source:"ImageViewer \u56fe\u7247\u67e5\u770b\n---\n\n![](https://user-images.githubusercontent.com/66067296/148637929-a8ef7878-c7b6-4af6-af9e-f610cf96ab45.gif)\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n\u53ef\u81ea\u5b9a\u4e49\u62d6\u66f3\u62bd\u5c49\u9ad8\u5ea6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport React, { Component } from 'react';\nimport { View, Text } from 'react-native';\nimport Layout, { Container } from '../../Layout';\nimport { ImageViewer } from '@uiw/react-native';\nimport { ComProps } from '../../routes';\n\nconst { Header, Body, Card, Footer } = Layout;\n\nexport interface IndexProps extends ComProps { }\n\nexport default class Index extends Component<IndexProps> {\n  render() {\n    const { route } = this.props;\n    const description = route.params.description;\n    const title = route.params.title;\n    return (\n      <Container>\n        <Layout>\n          <Header title={title} description={description} />\n          <Body style={{ backgroundColor: '#fff' }}>\n            <Card title=\"\u57fa\u7840\u4f7f\u7528\">\n              <ImageViewer />\n            </Card>\n          </Body>\n          <Footer />\n        </Layout>\n      </Container>\n    );\n  }\n}\n```\n\n### \u81ea\u5b9a\u4e49\u56fe\u7247\n\n```jsx\nimport React, { Component } from 'react';\nimport { View, Text } from 'react-native';\nimport Layout, { Container } from '../../Layout';\nimport { ImageViewer } from '@uiw/react-native';\nimport { ComProps } from '../../routes';\n\nconst { Header, Body, Card, Footer } = Layout;\n\nexport interface IndexProps extends ComProps { }\n\nexport default class Index extends Component<IndexProps> {\n  render() {\n    const { route } = this.props;\n    const description = route.params.description;\n    const title = route.params.title;\n    return (\n      <Container>\n        <Layout>\n          <Header title={title} description={description} />\n          <Body style={{ backgroundColor: '#fff' }}>\n            <Card title=\"\u81ea\u5b9a\u4e49\u5355\u5f20\u56fe\u7247\">\n              <ImageViewer\n                height={100}\n                width={100}\n                src=\"https://img11.51tietu.net/pic/2016-071418/20160714181543xyu10ukncwf221991.jpg\"\n              />\n            </Card>\n            <Card title=\"\u81ea\u5b9a\u4e49\u591a\u5f20\u56fe\u7247\">\n              <ImageViewer\n                height={100}\n                width={100}\n                defaultIndex={2}\n                src={[\n                  { url: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg' },\n                  { url: 'https://iknow-pic.cdn.bcebos.com/810a19d8bc3eb135828572d2ab1ea8d3fd1f441d' },\n                  { url: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg' }\n                ]}\n              />\n            </Card>\n          </Body>\n          <Footer />\n        </Layout>\n      </Container>\n    );\n  }\n}\n```\n\n### props\n\n```ts\nexport interface ImageViewerProps extends ViewProps {\n  /** \u56fe\u7247\u5bbd\u5ea6 */\n  width?: number,\n  /** \u56fe\u7247\u9ad8\u5ea6 */\n  height?: number,\n  /** \u56fe\u50cf\u6e90\uff08\u8fdc\u7a0bURL\u6216\u672c\u5730\u6587\u4ef6\u8d44\u6e90 */\n  src?: string | number;\n}\n```"},a=t(71027),s=function(){return(0,a.jsx)(o.Z,(0,r.Z)({},i))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=6586.5d0900cc.chunk.js.map