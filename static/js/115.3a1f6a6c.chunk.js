(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[115],{85480:function(e,n,t){"use strict";var i,p,c=t(1413),r=t(45987),o=t(30168),d=t(31121),s=t(53929),x=t(78069),a=t(17285),g=t(61366),h=t(93539),u=t(71027),l=["inline","node"],f=["data-meta"],m=s.ZP.div(i||(i=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),y=(0,s.ZP)(d.Z)(p||(p=(0,o.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),b=function(e,n,t){if(Reflect.has(e,n)){var i=Reflect.get(e,n);if("true"===i)return!0;if("false"===i)return!1}return t};n.Z=function(e){var n=(0,h.useRef)(null);return(0,u.jsxs)(m,{ref:n,children:[(0,u.jsx)(y,(0,c.Z)((0,c.Z)({},e),{},{disableCopy:!0,source:e.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var i=e.children&&e.children[0];i&&i.properties&&"true"===i.properties.ariaHidden&&(i.children=[])}},components:{code:function(n){var t,i=n.inline,p=n.node,o=(0,r.Z)(n,l),d=o["data-meta"],s=(0,r.Z)(o,f);if(i||!(0,a.pN)(d))return(0,u.jsx)("code",(0,c.Z)({},o));var x=null===(t=p.position)||void 0===t?void 0:t.start.line,h=(0,a.Mx)(d)||String(x),m=e.components["".concat(h)];if(h&&"function"===typeof m){var y=e.data[h].value||"",w=(0,a.aE)(d);return(0,u.jsx)(g.Z,{disableCheckered:b(w,"disableCheckered",!0),disableToolbar:b(w,"disableToolbar",!1),disableCode:b(w,"disableCode",!1),disablePreview:b(w,"disablePreview",!1),bordered:b(w,"bordered",!0),copied:b(w,"copied",!0),background:w.background,toolbar:w.title||"\u793a\u4f8b",code:(0,u.jsx)("code",(0,c.Z)({},s)),text:y,children:(0,u.jsx)(m,{})})}return(0,u.jsx)("code",(0,c.Z)({},s))}}})),(0,u.jsx)(x.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,u.jsx)(x.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,u.jsx)(x.JO,{type:"arrow-up"})},percent:n})}})]})}},26154:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t(1413),p=t(85480),c={components:{},data:{},source:"\u53d1\u5e03 iOS \u5e94\u7528\u5546\u5e97\n===\n\nAPP\u4e0a\u67b6\u524d\u9700\u6ce8\u518c\u5f00\u53d1\u8005\u8d26\u53f7\uff0c\u521b\u5efa `\u8bc1\u4e66\u8bf7\u6c42\u6587\u4ef6\uff08CSR\u6587\u4ef6\uff09` \u3001 `\u53d1\u5e03\u8bc1\u4e66 \uff08CER\uff09`\u53ca `Provisioning Profiles\u914d\u7f6e\u6587\u4ef6 \uff08PP\u6587\u4ef6\uff09` ,\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u51c6\u5907\u5c06\u5df2\u5b8c\u6210\u7684\u9879\u76ee\u8fdb\u884c\u63d0\u4ea4\u4e0a\u67b6\u3002\n\n## \u4e00. \u521b\u5efaAppID\n\n### `\u6ce8\u518c\u5f00\u53d1\u8005\u8d26\u53f7`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u8fdb\u5165[Developer\u82f9\u679c\u5f00\u53d1\u8005\u5b98\u7f51](https://developer.apple.com),\u70b9\u51fb\u201cAccount\u201d\u767b\u5f55/\u6ce8\u518c\u4f1a\u5458\u3002\n\n![](./img/01.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/02.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u521b\u5efa AppID`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u767b\u9646\u6210\u529f\u540e\uff0c\u9009\u62e9 `Certificates, Identifiers & Profiles`\u8fdb\u5165\u9875\u9762\u70b9\u51fb  `Identifiers`\uff0c\u586b\u5199\u4fe1\u606f\u521b\u5efaAppID\u3002\n\n![](./img/03.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e  \n\n![](./img/04.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `App IDs`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u9009\u62e9App IDs\u70b9\u51fbContinue\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9APP\u7ee7\u7eed\u586b\u5199\u4fe1\u606f\u3002\n\n![](./img/05.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e  \n\n![](./img/06.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u586b\u5199 Description \u53ca Bundle ID`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n![](./img/07.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n---\n\n## \u4e8c. \u521b\u5efaProvisioningProfiles\u6587\u4ef6\n\n### `App IDs`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u8fdb\u5165Certificates, Identifiers & Profiles\u9875\u9762\uff0c\u627e\u5230 `Profiles`\uff0c\u70b9\u51fb + \u53f7\uff0c\u9009\u62e9App Store\uff0c\u70b9\u51fbContinue\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002\n\n![](./img/08.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/09.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `App IDs\uff08Bundle ID\uff09`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u5728\u9009\u9879\u680f\u4e2d\u627e\u5230\u521a\u521a\u521b\u5efa\u7684App IDs\uff08Bundle ID\uff09\u7c7b\u578b\u5957\u88c5\uff0c\u9009\u62e9\u53d1\u5e03\u8bc1\u4e66\uff0c\u70b9\u51fbContinue\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002\n\n![](./img/10.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/11.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u751f\u6210\u5e76\u4e0b\u8f7dPP\u6587\u4ef6`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u5728 `Provisioning Profile Name` \u680f\u4e2d\u586b\u5165\u6587\u4ef6\u540d,\u70b9\u51fbGenerate\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u518d\u70b9\u51fbDownload\u4e0b\u8f7d\u751f\u6210\u7684\u6587\u4ef6\u3002\n\n![](./img/12.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/13.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n---\n\n## \u4e09. \u521b\u5efa\u65b0\u5e94\u7528\n\n\u8fd4\u56deAccount\uff0c\u627e\u5230 `App Store Connect` \uff0c\u70b9\u51fb `Go to App Store Connect` \u3002\n\n![](./img/14.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `MyApp`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u70b9\u51fb `\u6211\u7684 App` \u8fdb\u5165\u9875\u9762\uff0c\u627e\u5230 `APP` \uff0c\u70b9\u51fb + \u53f7\uff0c\u9009\u62e9 `\u65b0\u5efaAPP` \u5f00\u59cb\u521b\u5efa\u3002\n\n![](./img/15.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/16.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u65b0\u5efaApp`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n- \u9009\u62e9\u53d1\u5e03\u5e73\u53f0\n- \u586b\u5199 `App\u540d\u79f0(\u53ef\u4ee5\u4e3a\u4e2d\u6587)` \n- \u9009\u62e9\u8bed\u8a00\n- \u9009\u53d6 `\u5df2\u521b\u5efa\u7684APP IDs-BunDle ID \u5957\u88c5`\n- \u586b\u5199 `\u9879\u76ee\u62a5\u540d`\n- \u9009\u62e9\u7528\u6237\u8bbf\u95ee\u6743\u9650\n\n\u586b\u5199\u5b8c\u6210\u540e\u70b9\u51fb `\u521b\u5efa` \uff0c\u521b\u5efa\u6210\u529f\u540e\u70b9\u51fb\u5df2\u521b\u5efa\u7684\u9879\u76ee\u5373\u53ef\u8fdb\u5165\u9879\u76ee\u7ba1\u7406\u9875\u9762\u3002\n\n![](./img/17.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u4e0a\u4f20App\u9884\u89c8\u56fe`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u70b9\u51fb\u65b0\u5efa\u7684\u5e94\u7528\u8fdb\u5165\u63d0\u4ea4\u9875\u9762\uff0c\u4f9d\u6b21\u63d0\u4ea4\u4e0d\u540c\u5c3a\u5bf8\u7684\u56fe\u7247()\u3002\n\n![](./img/18.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n![](./img/19.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u4e3a\u66f4\u5feb\u901a\u8fc7\u5ba1\u6838\u56fe\u7247\u5185\u5bb9\u9700\u4e0eAPP\u5b9e\u9645\u5185\u5bb9\u76f8\u7b26\uff0c\u4e14\u56fe\u7247\u540c\u65f6\u4e8e `APP Store\u5e94\u7528\u56fe\u7247\u9884\u89c8` \u4f7f\u7528\uff0c\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `\u586b\u5199\u7248\u672c\u4fe1\u606f`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n![](./img/20.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> `\u5ba3\u4f20\u6587\u672c` \u53ca `\u63cf\u8ff0`\u4e14\u540c\u65f6\u4e8e `APP Store\u5e94\u7528\u8be6\u60c5\u7b80\u4ecb\u9884\u89c8` \u4f7f\u7528\uff0c\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `\u6784\u5efa\u7248\u672c`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n- \u901a\u8fc7Xcode\u5c06\u9879\u76ee\u6253\u5305\u4e0a\u4f20\u81f3APP Store\u540e\u53ef\u9009\u62e9\u6240\u9700\u6784\u5efa\u7248\u672c\u3002\n- \u6839\u636e\u63d0\u793a\u586b\u5199\u7248\u6743\u3002\n\n![](./img/21.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `App \u5ba1\u6838\u767b\u5f55\u4fe1\u606f`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n![](./img/22.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u5982APP\u9700\u8981\u767b\u5f55\uff0c\u5fc5\u987b\u586b\u5199\u6d4b\u8bd5\u8d26\u53f7\uff0c\u5426\u5219\u5ba1\u6838\u65e0\u6cd5\u901a\u8fc7\uff0c\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `App \u53ef\u672c\u5730\u5316\u7684\u4fe1\u606f`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u627e\u5230 `App\u4fe1\u606f` \u6839\u636e\u63d0\u793a\u586b\u5199APP\u540d\u79f0\u53ca\u8bbe\u7f6e\u5e74\u9f84\u5206\u7ea7\u7b49\u3002 \n\n![](./img/23.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u4ef7\u683c\u4e0e\u9500\u552e\u8303\u56f4`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u627e\u5230 `\u4ef7\u683c\u4e0e\u9500\u552e\u8303\u56f4` \u6839\u636e\u63d0\u793a\u586b\u5199 `\u4ef7\u683c` \u3001 `\u9500\u552e\u8303\u56f4`\u7b49\u4fe1\u606f\u3002 \n\n![](./img/24.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u9690\u79c1\u653f\u7b56`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u627e\u5230 `App \u9690\u79c1` \u586b\u5199 `\u9690\u79c1\u653f\u7b56\u7f51\u5740 (URL)`\u3002 \n\n![](./img/25.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u7248\u672c\u53d1\u5e03 `\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u9009\u62e9 `\u81ea\u52a8\u53d1\u5e03` \u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u6b64\u7248\u672c\u5c06\u7acb\u5373\u81ea\u52a8\u53d1\u5e03\uff0c\u4e5f\u53ef\u9009\u62e9 `\u624b\u52a8\u53d1\u5e03`\u3002 \n\n![](./img/26.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u63d0\u4ea4\u5ba1\u6838`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u76f8\u5173\u4fe1\u606f\u586b\u5199\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u63d0\u4ea4\u4ee5\u4f9b\u5ba1\u6838\u3002 \n\n![](./img/27.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> \ud83d\udea7  \u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u82e5\u7248\u672c\u53d1\u5e03\u4e3a\u81ea\u52a8\u53d1\u5e03\uff0cAPP\u5c06\u81ea\u52a8\u53d1\u5e03\u6210\u529f\uff0c\u82e5\u5ba1\u6838\u4e0d\u901a\u8fc7\uff0c\u53ef\u70b9\u51fb\u5ba1\u6279\u4e0d\u901a\u8fc7\u539f\u56e0\uff0c\u6839\u636e\u5ba1\u6279\u8981\u6c42\u8fdb\u884c\u76f8\u5173\u6574\u6539\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e"},r=t(71027),o=function(e){return t(73871)(e)},d=function(){return(0,r.jsx)(p.Z,(0,i.Z)((0,i.Z)({},c),{},{transformImageUri:o}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n},73871:function(e,n,t){var i={"./img/01.png":31099,"./img/02.png":15303,"./img/03.png":35857,"./img/04.png":61019,"./img/05.png":87137,"./img/06.png":20604,"./img/07.png":53193,"./img/08.png":65432,"./img/09.png":95346,"./img/10.png":28635,"./img/11.png":20322,"./img/12.png":13368,"./img/13.png":56085,"./img/14.png":3504,"./img/15.png":31225,"./img/16.png":44465,"./img/17.png":53071,"./img/18.png":17647,"./img/19.png":83269,"./img/20.png":28213,"./img/21.png":69958,"./img/22.png":19174,"./img/23.png":92649,"./img/24.png":8355,"./img/25.png":37121,"./img/26.png":44212,"./img/27.png":41959};function p(e){var n=c(e);return t(n)}function c(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}p.keys=function(){return Object.keys(i)},p.resolve=c,e.exports=p,p.id=73871},31099:function(e,n,t){"use strict";e.exports=t.p+"static/media/01.755c8f5edaefae672e54.png"},15303:function(e,n,t){"use strict";e.exports=t.p+"static/media/02.f26d3da5460690da5098.png"},35857:function(e,n,t){"use strict";e.exports=t.p+"static/media/03.a477dbc7a395818d9d93.png"},61019:function(e,n,t){"use strict";e.exports=t.p+"static/media/04.f909051cb45f16aba6c1.png"},87137:function(e,n,t){"use strict";e.exports=t.p+"static/media/05.d55e3e37aa27b9703260.png"},20604:function(e,n,t){"use strict";e.exports=t.p+"static/media/06.53dcbe53eb2b3b11633f.png"},53193:function(e,n,t){"use strict";e.exports=t.p+"static/media/07.ba79450a9e6bd0ecd3a9.png"},65432:function(e,n,t){"use strict";e.exports=t.p+"static/media/08.d9dee4213b401ba2ee81.png"},95346:function(e,n,t){"use strict";e.exports=t.p+"static/media/09.859eb9cf19c98e83cc33.png"},28635:function(e,n,t){"use strict";e.exports=t.p+"static/media/10.5d19432c992396e1880b.png"},20322:function(e,n,t){"use strict";e.exports=t.p+"static/media/11.633aa8a70f6e10a36b45.png"},13368:function(e,n,t){"use strict";e.exports=t.p+"static/media/12.41ea94b10bf49cd831f9.png"},56085:function(e,n,t){"use strict";e.exports=t.p+"static/media/13.29ed80d486e9ca7b6009.png"},3504:function(e,n,t){"use strict";e.exports=t.p+"static/media/14.b00979be1388c46f22d6.png"},31225:function(e,n,t){"use strict";e.exports=t.p+"static/media/15.b3f0f3a1cbb0873f4f60.png"},44465:function(e,n,t){"use strict";e.exports=t.p+"static/media/16.6513c67bb3a5ee85de78.png"},53071:function(e,n,t){"use strict";e.exports=t.p+"static/media/17.d3af3ae5b8c0e764ae2a.png"},17647:function(e,n,t){"use strict";e.exports=t.p+"static/media/18.88846177c496a6726bbe.png"},83269:function(e,n,t){"use strict";e.exports=t.p+"static/media/19.867b1172604f318842f4.png"},28213:function(e,n,t){"use strict";e.exports=t.p+"static/media/20.161000266289a17d7e3f.png"},69958:function(e,n,t){"use strict";e.exports=t.p+"static/media/21.d53fc1ead9353438f2fe.png"},19174:function(e,n,t){"use strict";e.exports=t.p+"static/media/22.8acab4602004323e23cb.png"},92649:function(e,n,t){"use strict";e.exports=t.p+"static/media/23.9fd5fccdd42dbe4556cc.png"},8355:function(e,n,t){"use strict";e.exports=t.p+"static/media/24.1d4382e19cf7fedd8dfc.png"},37121:function(e,n,t){"use strict";e.exports=t.p+"static/media/25.551be2d74a9cf5dc952a.png"},44212:function(e,n,t){"use strict";e.exports=t.p+"static/media/26.48ffdc21c1e7caf2b4f3.png"},41959:function(e,n,t){"use strict";e.exports=t.p+"static/media/27.8c357dd930fcaab442ef.png"}}]);
//# sourceMappingURL=115.3a1f6a6c.chunk.js.map