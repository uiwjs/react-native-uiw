(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[753],{59940:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var o=t(18489),r=t(83738),a=t(17186),i=t(93908),s=t(53929),c=t(98012),u=t(17285),p=t(84488),d=t(93539),l=t(71027);function m(n){var e=n.path,t=/^http/.test(e||"")?e:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===e||void 0===e?void 0:e.replace(/^\//,""));return(0,l.jsxs)("div",{style:{paddingBlock:20},children:[e&&t&&(0,l.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,l.jsx)(c.iz,{type:"vertical"}),(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var h,f,g=t(74513),x=["path"],w=["inline","node"],j=["data-meta"],v=s.ZP.div(h||(h=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),y=(0,s.ZP)(i.Z)(f||(f=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t},k=function(n){var e=n.path,t=(0,r.Z)(n,x),a=p.ZP.Preview,i=p.ZP.Code,s=p.ZP.Toolbar,h=(0,d.useRef)(null);return(0,l.jsxs)(v,{ref:h,children:[(0,l.jsx)(y,(0,o.Z)((0,o.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var o=n.children&&n.children[0];o&&o.properties&&"true"===o.properties.ariaHidden&&(o.children=[])}},components:{code:function(n){var e,c=n.inline,d=n.node,m=(0,r.Z)(n,w),h=m["data-meta"],f=(0,r.Z)(m,j);if(c||!(0,u.pN)(h))return(0,l.jsx)("code",(0,o.Z)({},m));var g=null===(e=d.position)||void 0===e?void 0:e.start.line,x=(0,u.Mx)(h)||String(g),v=t.components["".concat(x)];if(x&&"function"===typeof v){var y=t.data[x].value||"",k=(0,u.aE)(h);return(0,l.jsxs)(p.ZP,{disableCheckered:b(k,"disableCheckered",!0),bordered:b(k,"bordered",!0),children:[(0,l.jsx)(a,{children:(0,l.jsx)(v,{})}),(0,l.jsx)(s,{text:y,copied:b(k,"copied",!0),children:k.title||"\u793a\u4f8b"}),(0,l.jsx)(i,{children:(0,l.jsx)("code",(0,o.Z)({},f))})]})}return(0,l.jsx)("code",(0,o.Z)({},f))}}})),(0,l.jsx)(g.Z,{}),(0,l.jsx)(m,{path:e}),(0,l.jsx)(c.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,l.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,l.jsx)(c.JO,{type:"arrow-up"})},percent:e})}})]})}},96508:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var o=t(18489),r=t(59940),a={components:{},data:{},source:"# \u65b0\u589e\u9875\u9762\n\n\u8fd9\u91cc\u7684\u300e\u9875\u9762\u300f\u6307\u914d\u7f6e\u4e86\u8def\u7531\uff0c\u80fd\u591f\u901a\u8fc7\u94fe\u63a5\u76f4\u63a5\u8bbf\u95ee\u7684\u6a21\u5757\u3002\n\n## \u76ee\u5f55\u7ed3\u6784\n\n```\n\n\u251c\u2500\u2500 mocker                            # mocker data\n\u251c\u2500\u2500 android                           # native android code\n\u251c\u2500\u2500 ios                               # native ios code\n\u251c\u2500\u2500 src                               # code directory\n\u2502   \u251c\u2500\u2500 components                    # react components\n\u2502   \u251c\u2500\u2500 models                        # The models brings together state, reducers, async actions & action creators in one place\n\u2502   \u251c\u2500\u2500 pages                         # route pages\n\u2502   \u251c\u2500\u2500 routes                        # route configuration\n\u2502   \u251c\u2500\u2500 services                      # api request\n\u2502   \u251c\u2500\u2500 utils                         # public method\n\u2502   \u251c\u2500\u2500 App.js                        # route entery page\n\u2502   \u251c\u2500\u2500 config.js                     # app configuration\n\u2502   \u2514\u2500\u2500 global.js                     # Store some global objects for easy calling\n\u251c\u2500\u2500 .eslintrc                         # eslint configuration\n\u251c\u2500\u2500 index.js                          # app entry file\n\u2514\u2500\u2500 package.json                      # This document is all you need to know about what\u2019s required in your package.json file.\n```\n\n## \u624b\u52a8\u521b\u5efa\n\n\u5728 src / pages \u4e0b\u521b\u5efa\u65b0\u7684 js \u6587\u4ef6\u3002 \u5982\u679c\u6709\u591a\u4e2a\u76f8\u5173\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u5939\u6765\u653e\u7f6e\u76f8\u5173\u6587\u4ef6\n\n```\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u2514\u2500\u2500 NewPage # \ud83d\udcd1 \u6dfb\u52a0 \u65b0\u9875\u9762\u76ee\u5f55\n\u2502   \u2502       \u2514\u2500\u2500 index.js # \ud83d\udcd1 \u6dfb\u52a0 \u65b0\u9875\u9762\n```\n\n\u4e3a\u4e86\u66f4\u597d\u7684\u6f14\u793a\uff0c\u6211\u4eec\u521d\u59cb\u5316NewPage/index.js\u7684\u5185\u5bb9\u5982\u4e0b\uff1a\n```js\nimport React, {Component} from 'react';\nimport {View, Text, SafeAreaView} from 'react-native';\n\nexport default class MyNewPage extends Component {\n  render() {\n    return (\n      <SafeAreaView>\n        <View>\n          <Text>\u6211\u7684</Text>\n        </View>\n      </SafeAreaView>\n    );\n  }\n}\n```\n\u5c06\u6587\u4ef6\u52a0\u5165\u83dc\u5355\u548c\u8def\u7531\n\n\u5728 src / routes \u4e0bhomeTab.js\u4e2d\u4f7f\u7528 component \u914d\u7f6e\u6211\u4eec\u9875\u9762\u5230\u8def\u7531\u4e2d\n```js\nimport MyNewPage from '../pages/NewPage';\n\nexport const stackPageData = [\n  {\n    name: 'MyNewPage',\n    component: MyNewPage,\n    options: {\n      title: '\u6211\u7684',\n    },\n  },\n];\n```\n\u8def\u7531\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee\u9875\u9762\u5373\u53ef\u770b\u5230\u6548\u679c\uff0c\u5982\u9700\u8981\u914d\u7f6e `title`\uff0c`tabBarIcon`\uff0c`header`\u7b49\u66f4\u591a\u8bbe\u7f6e\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230[React Navigation](https://reactnavigation.org/docs/stack-navigator/)\n\n## \u65b0\u589e api\n\n\u5728 src / services \u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u672c\u6a21\u5757\u5bf9\u5e94\u7684 api \u670d\u52a1\n\n## \u65b0\u589e\u7ec4\u4ef6\n\n\u4e2a\u4eba\u5199\u9879\u76ee\u7684\u4e60\u60ef\uff0c\u5728\u5168\u5c40\u7684 @/components \u53ea\u4f1a\u5199\u4e00\u4e9b\u5168\u5c40\u7684\u7ec4\u4ef6\uff0c\u5982\u5404\u79cd\u641c\u7d22\u7ec4\u4ef6\uff0c\u5c01\u88c5\u7684\u65e5\u671f\u7ec4\u4ef6\u7b49\u7b49\u80fd\u88ab\u516c\u7528\u7684\u7ec4\u4ef6\u3002\u6bcf\u4e2a\u9875\u9762\u6216\u8005\u6a21\u5757\u7279\u5b9a\u7684\u4e1a\u52a1\u7ec4\u4ef6\u5219\u4f1a\u5199\u5728\u5f53\u524d pages \u4e0b\u9762\u3002\n\n## \u65b0\u589e\u6837\u5f0f\n\n\u9875\u9762\u7684\u6837\u5f0f\u548c\u7ec4\u4ef6\u662f\u4e00\u4e2a\u9053\u7406\uff0c\u5168\u5c40\u7684 @/styles \u653e\u7f6e\u4e00\u4e0b\u5168\u5c40\u516c\u7528\u7684\u6837\u5f0f\uff0c\u6bcf\u4e00\u4e2a\u9875\u9762\u7684\u6837\u5f0f\u5c31\u5199\u5728\u5f53\u524d pages \u4e0b\u9762\n```jsx\nconst styles = StyleSheet.create({\n  content: {\n    marginTop: 50,\n  },\n  btnStyle: {\n    borderRadius: 4,\n    margin: 16,\n  },\n})\n```\n\u5177\u4f53\u8bf7\u53c2\u7167\u5b98\u65b9\u6587\u6863[\u6837\u5f0f](https://reactnative.cn/docs/style)\n\n## Rematch\n\n### \u7b2c\u4e00\u6b65:\u5efa\u7acbmodels\n\n```bash\n  mocker\n  ...\nsrc\n  models\n  +     home.js\n  pages\n...\npackage.json\n```\n\n```js\nexport default {\n  name: 'home',\n  // initial state\n  state: {\n    num:0\n  }, \n  reducers: {\n   update: (state, payload) => ({ ...state, ...payload }),\n  },\n  effects: (dispatch) => ({\n    // \u53ef\u4ee5\u8fdb\u884c\u5f02\u6b65\u8bf7\u6c42\n  }),\n};\n```\n\n### \u7b2c\u4e8c\u6b65:\u521d\u59cb\u5316store\n\n```js\nimport { init } from '@rematch/core';\nimport createLoadingPlugin from '@rematch/loading';\nimport * as home from './home';\n\n\nconst loadingPlugin = createLoadingPlugin({});\n\nexport const store = init({\n  models: {\n    home: home.default,\n  },\n  plugins: [loadingPlugin],\n});\n\n```\n\n### \u7b2c\u4e09\u6b65:\u9875\u9762\u4e2d\u4f7f\u7528\n```js\nimport React, { useState } from 'react';\nimport { View,Text } from 'react-native'\nimport { Button } from '@uiw/react-native';\nimport { connect } from 'react-redux';\n\nconst Demo = ({ num,update }) => {\n  const click = ()=>{\n    update({\n      num:10\n    })\n  }\n  return (\n     <View>\n      <Text>{num}</Text>\n      <Button onPress={click}>\u70b9\u51fb</Button>\n    </View>\n  );\n}\n\nexport default connect(\n  ({ home }) => ({\n    num:home.num\n  }),\n  ({ home }) => ({\n    update: home.update\n  }),\n)(Demo);\n\n```\n\n\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528hooks\u8c03\u7528\n```js\nimport React, { useState } from 'react';\nimport { View,Text } from 'react-native'\nimport { Button } from '@uiw/react-native';\nimport { useSelector,useDispatch } from 'react-redux';\n\nconst Demo = () => {\n  const dispatch = useDispatch();\n  const { num } =useSelector(state=>state.home)\n  const click = ()=>{\n    dispatch({\n      type:'home/update',\n      payload:{\n        num:10\n      }\n    })\n  }\n  return (\n    <View>\n      <Text>{num}</Text>\n      <Button onPress={click}>\u70b9\u51fb</Button>\n    </View>\n  );\n}\n\nexport default Demo\n\n```\n\u5177\u4f53\u8bf7\u53c2\u7167\u5b98\u65b9\u6587\u6863[Rematch](https://rematchjs.org/docs/)"},i=t(71027),s=function(n){return t(18345)(n)},c=function(){return(0,i.jsx)(r.Z,(0,o.Z)((0,o.Z)({},a),{},{transformImageUri:s,path:"website/src/pages/docs/react-native-template/new-page/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e},18345:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=18345,n.exports=e}}]);
//# sourceMappingURL=753.212e2665.chunk.js.map