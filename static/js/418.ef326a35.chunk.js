(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[418],{85480:function(n,e,t){"use strict";var r,a,o=t(18489),s=t(83738),c=t(17186),i=t(93908),d=t(53929),p=t(98012),u=t(17285),l=t(84488),m=t(93539),h=t(74513),x=t(71027),f=["path"],g=["inline","node"],w=["data-meta"],b=d.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),v=(0,d.ZP)(i.Z)(a||(a=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),k=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t};e.Z=function(n){var e=n.path,t=(0,s.Z)(n,f),r=l.ZP.Preview,a=l.ZP.Code,c=l.ZP.Toolbar,i=(0,m.useRef)(null);return(0,x.jsxs)(b,{ref:i,children:[(0,x.jsx)(v,(0,o.Z)((0,o.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,i=n.inline,d=n.node,p=(0,s.Z)(n,g),m=p["data-meta"],h=(0,s.Z)(p,w);if(i||!(0,u.pN)(m))return(0,x.jsx)("code",(0,o.Z)({},p));var f=null===(e=d.position)||void 0===e?void 0:e.start.line,b=(0,u.Mx)(m)||String(f),v=t.components["".concat(b)];if(b&&"function"===typeof v){var y=t.data[b].value||"",j=(0,u.aE)(m);return(0,x.jsxs)(l.ZP,{disableCheckered:k(j,"disableCheckered",!0),bordered:k(j,"bordered",!0),children:[(0,x.jsx)(r,{children:(0,x.jsx)(v,{})}),(0,x.jsx)(c,{text:y,copied:k(j,"copied",!0),children:j.title||"\u793a\u4f8b"}),(0,x.jsx)(a,{children:(0,x.jsx)("code",(0,o.Z)({},h))})]})}return(0,x.jsx)("code",(0,o.Z)({},h))}}})),(0,x.jsx)(h.Z,{path:e}),(0,x.jsx)(p.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,x.jsx)(p.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,x.jsx)(p.JO,{type:"arrow-up"})},percent:e})}})]})}},33880:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r=t(18489),a=t(85480),o={components:{},data:{},source:"\u53c2\u4e0e\u6587\u6863/\u7f51\u7ad9\u7f16\u8f91\u5f00\u53d1\n===\n\n\u8fd9\u91cc\u4ecb\u7ecd\uff0c\u5f53\u524d\u7ec4\u4ef6\u5e93\u5f00\u53d1\u548c\u6587\u6863\u7f16\u5199\uff0c\u65b9\u4fbf\u60a8\u5feb\u901f\u4ecb\u5165\u5230\u6587\u6863/\u7f51\u7ad9\u7f16\u8f91\u5f00\u53d1\u4e2d\u3002\n\n> \ud83d\udea7  \u6ce8\u610f\uff1a\u6587\u6863\u7f51\u7ad9\u53d1\u5e03\u662f\u76d1\u542c master \u5206\u652f\u7684\u66f4\u65b0`\u81ea\u52a8`\u53d1\u5e03\u5230 [`gh-pages`](https://github.com/uiwjs/react-native-uiw/tree/gh-pages) \u5206\u652f\u3002  \n> \u5728 `package.json` \u4e2d\u7684\u7248\u672c\u53f7\u8bf7\u4e0d\u8981\u968f\u610f\u66f4\u6539\uff0c\u7ec4\u4ef6\u53d1\u5e03\u662f\u76d1\u542c [`package.json \u4e2d\u7684\u7248\u672c\u53f7`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/.github/workflows/ci.yml#L64-L66)\u53d8\u66f4`\u81ea\u52a8`\u53d1\u5e03\u5230 npm \u4e0a\u3002  \n> \u8fd9\u4e9b\u81ea\u52a8\u5316\u5f97\u76ca\u4e8e [Github Actions](https://github.com/actions) \u7684\u5f3a\u529b\u9a71\u52a8\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u76ee\u5f55\u7ed3\u6784\n\n```bash\n\u251c\u2500\u2500 README.md -> packages/core/README.md\n\u251c\u2500\u2500 ....\n\u251c\u2500\u2500 example   # ----\x3e \u793a\u4f8b\n\u2502\xa0\xa0 \u251c\u2500\u2500 base      # \u793a\u4f8b\uff0c\u7528\u4e8e\u5355\u72ec\u6d4b\u8bd5\u67d0\u4e2a\u7ec4\u4ef6\n\u2502\xa0\xa0 \u2514\u2500\u2500 examples  # \u6240\u6709\u7ec4\u4ef6\u7684\u793a\u4f8b\n\u251c\u2500\u2500 packages  # ----\x3e \u5305\n\u2502\xa0\xa0 \u251c\u2500\u2500 core  # \ud83d\udce6 @uiw/react-native \u57fa\u7840\u7ec4\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 Avatar # \u7ec4\u4ef6\u6e90\u7801\u4ee5\u53ca\u7ec4\u4ef6\u6587\u6863\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 ....\n\u2502\xa0\xa0 \u2514\u2500\u2500 docs  # \ud83d\udce6 @uiw/react-native-doc \u53ef\u5ffd\u7565\uff0c\u7f16\u8bd1\u540e\u7684\u7ec4\u4ef6\u6587\u6863\u9759\u6001\u6587\u4ef6\u63d0\u4ea4\u5230 npm \u63d0\u4f9b\u6587\u6863\u7248\u672c\u9884\u89c8\n\u2514\u2500\u2500 website   # ----\x3e \u6587\u6863\u7f51\u7ad9\u6e90\u7801\n \xa0\xa0 \u251c\u2500\u2500 ....\n \xa0\xa0 \u2514\u2500\u2500 src\n \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 pages # \ud83d\udcd1 \u6587\u6863\u793a\u4f8b\u7f16\u5199\u5728\u8fd9\u91cc\n \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 components\n \xa0\xa0  \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ....\n \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 routes\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 Controller.tsx\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 history.ts\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 menus.ts   # \u914d\u7f6e\u83dc\u5355\n \xa0\xa0  \xa0\xa0     \u2514\u2500\u2500 router.tsx # \u914d\u7f6e\u83dc\u5355\u5bf9\u5e94\u7684\u9875\u9762\n```\n\n## \u6587\u6863\u7f16\u8f91\u9884\u89c8\n\n\u6211\u4eec\u901a\u8fc7 [npm](https://www.npmjs.com/@uiw/react-native-doc) \u6765\u7ba1\u7406 UIW React Native \u7ec4\u4ef6\u6587\u6863\u7ad9\u70b9\u7684\u7248\u672c\uff0c\u4f7f\u7528 [unpkg.com](https://unpkg.com/) \u63d0\u4f9b\u7684\u9759\u6001\u8d44\u6e90\u9884\u89c8\u548c\u540c\u6b65 npm \u5305\u7684\u7279\u70b9\uff0c\u6765\u5b9e\u73b0[\u67e5\u770b\u5386\u53f2\u7248\u672c](https://unpkg.com/browse/@uiw/react-native-doc/)\u7ec4\u4ef6\u6587\u6863\u7684\u4e00\u529f\u80fd\u3002\u7684\u6587\u6863\u3002\u6240\u4ee5\u6211\u4eec\u5728\u53d1\u5e03 [`@uiw/react-native`](https://www.npmjs.com/package/@uiw/react-native) \u5305\u7684\u540c\u65f6\u4f1a\u53d1\u5e03 [`@uiw/react-native-doc`](https://www.npmjs.com/package/@uiw/react-native-doc) \u5305\u3002\n\n\u901a\u8fc7 unpkg \u9884\u89c8\u6587\u6863\u7f51\u7ad9\uff1ahttps://unpkg.com/@uiw/react-native-doc/doc/index.html\n\n\u8fd9\u662f v3.0.0+ \u7248\u672c\u9884\u89c8\u65b9\u6cd5\n\n```shell\nhttps://unpkg.com/@uiw/react-native-doc@<\u5305\u7248\u672c>/web/index.html\n```\n\n[`v2.0.0+ \u6587\u6863\u7f51\u7ad9`](https://unpkg.com/@uiw/react-native-doc@2.1.0/doc/build/index.html)\n\n> \ud83d\udea7  \u6ce8\u610f\uff1a\u4e3a\u4e86\u4fdd\u6301\u5305\u7248\u672c\u540c\u6b65\uff0c\u6211\u4eec\u901a\u8fc7 [`lerna`](http://npmjs.com/lerna)\x3c!--rehype:target=\"__blank\"--\x3e \u5de5\u5177\u540c\u65f6\u66f4\u6539\u6240\u6709\u5305\u7684\u7248\u672c\uff0c\u786e\u4fdd\u7ec4\u4ef6\u5305\u548c\u6587\u6863\u5305\u7684\u7248\u672c\u662f\u4e00\u81f4\u7684\u3002  \n> \u5728\u9879\u76ee\u6839\u76ee\u5f55\u8fd0\u884c `npm run version` \u547d\u4ee4\uff0c\u5373\u53ef\u66f4\u6539\u6240\u6709\u5305\u7684\u7248\u672c\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u6587\u6863\u8fd8\u53ef\u4ee5\u4f7f\u7528 [`Githack`](http://raw.githack.com) \u6765\u8bbf\u95ee\u5386\u53f2\u7684\u6587\u6863\u3002\n\n```bash\n# \u6700\u65b0\u6587\u6863\nhttps://raw.githack.com/uiwjs/react-native-uiw/gh-pages/index.html\n# v2.11.1 \u6587\u6863\nhttps://raw.githack.com/uiwjs/react-native-uiw/c08bdf4/index.html\n```\n\nGithack\uff1a[`v2.0.0+ \u6587\u6863\u7f51\u7ad9`](https://raw.githack.com/uiwjs/react-native-uiw/c08bdf4/index.html)\n\n### `\u542f\u52a8\u6587\u6863\u7f51\u7ad9 & \u9884\u89c8\u6587\u6863`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u7ec4\u4ef6\u6587\u6863\u5b58\u653e\u5728\u7ec4\u4ef6 `packages/core`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e \u5305\u76ee\u5f55\u4e2d\uff0c\u5176\u5b83\u6587\u6863\u653e\u5728\u6587\u6863\u6e90\u7801\u76ee\u5f55 `website/src/pages`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e \u4e2d\uff0c\u6839\u636e\u8def\u7531\u5730\u5740\u5efa\u7acb\u3002\n\n> \u5982\u679c\u9700\u8981\u5c06\u6587\u6863\u7f51\u7ad9\u8fd0\u884c\u8d77\u6765\uff0c\u9700\u8981\u5148\u5b89\u88c5\u4f9d\u8d56\u548c\u7f16\u8bd1\u5305\u3002\u4f7f\u7528 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces)\uff0c\u7ec4\u4ef6\u6587\u6863\u662f\u4ece `node_modules` \u4e2d\u52a0\u8f7d\uff0c\u9700\u8981\u7f16\u8bd1(\u6216\u76d1\u542c)\u8f93\u51fa\u5230 `node_modules` \u4e2d\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\x3c!--rehype:--\x3e\n```bash\nyarn install     # \u5b89\u88c5\u5f53\u524d\u4f9d\u8d56\uff0c\u548c\u5b50\u5305\u4e2d\u7684\u4f9d\u8d56\nyarn run build   # \u7f16\u8bd1\u5305\n```\n\n\u5b9e\u65f6\u76d1\u542c\u5305\u548c\u6587\u6863\u7f51\u7ad9\u672c\u5730\u9884\u89c8\n\n```bash\n# Step 1\ufe0f\u20e3  \u7f16\u8bd1\u8f93\u51fa JS/d.ts \u6587\u4ef6\nyarn run lib:watch\n# Step 2\ufe0f\u20e3  \u672c\u5730\u8fd0\u884c\u9884\u89c8\u6587\u6863\u7f51\u7ad9\nyarn run start\n```\n\n\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u6587\u6863\u7f51\u7ad9\uff1a `http://localhost:3000`\x3c!--rehype:style=color: #3d79a2; background: #e5ecf3;--\x3e\n\n### `\u6dfb\u52a0 & \u7f16\u8f91\u4e00\u4e2a\u6587\u6863\u9875\u9762`\x3c!--rehype:style=color: white; background: #4a4a4a;--\x3e\n\n\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u6587\u6863\uff0c\u9700\u8981\u65b0\u589e\u8def\u7531\u3001\u83dc\u5355\u3001\u6dfb\u52a0 `README.md` \u6587\u4ef6\u3002\n\n```bash\nwebsite\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages # \u6587\u6863\u793a\u4f8b\u7f16\u5199\u5728\u8fd9\u91cc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 getting-started\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 README.md # \ud83d\udcd1 \u6dfb\u52a0 README.md \u6587\u6863\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 index.tsx # \u2705 \u6dfb\u52a0\u52a0\u8f7d README.md JS \u6587\u4ef6\n\u2502\xa0\xa0 \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 menus.ts   # \u2705 \u914d\u7f6e\u83dc\u5355\n\u2502\xa0\xa0     \u2514\u2500\u2500 router.tsx # \u2705 \u914d\u7f6e\u83dc\u5355\u5bf9\u5e94\u7684\u9875\u9762\n```\n\n\u4fee\u6539\u7ec4\u4ef6\u6587\u6863\n\n```bash\npackages\n\u251c\u2500\u2500 core # \ud83d\udce6 @uiw/react-native\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 Avatar\n\u2502       \u2502\xa0\xa0 \u251c\u2500\u2500 README.md # \ud83d\udcd1 \u7ec4\u4ef6\u6587\u6863\n\u2502       \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx # \u2705 \u7ec4\u4ef6\u5165\u53e3\u6587\u4ef6\n\u2502       \u251c\u2500\u2500 ....\n\u2502       \u2514\u2500\u2500 Button\n```\n\n#### `\u7b2c 1 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e\uff1a\u83dc\u5355\u914d\u7f6e\n\n\u5728 [`website/src/routes/menus.ts`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/website/src/routes/menus.ts#L44) \u4e2d\u914d\u7f6e\u83dc\u5355\n\n```ts\nexport interface MenuData extends React.RefAttributes<HTMLAnchorElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {\n  name: string;\n  path?: string;\n  divider?: boolean;\n}\nexport const docsMenus: MenuData[] = [\n  { path: '/docs/getting-started', name: '\u5feb\u901f\u4e0a\u624b' },\n  { divider: true, name: \"\u73af\u5883\u5b89\u88c5\" },\n  { path: '/docs/environment-setup/ios', name: 'iOS \u73af\u5883\u5b89\u88c5' },\n  ...\n  { divider: true, name: \"\u5176\u5b83\" },\n  { path: '/docs/development', name: '\u53c2\u4e0e\u7ec4\u4ef6/\u6587\u6863\u5f00\u53d1' },\n  { href: 'https://github.com/uiwjs/react-native-uiw/releases', target: '_blank', name: '\u66f4\u65b0\u65e5\u5fd7' },\n]\nexport const componentMenus: MenuData[] = [ .... ]\n```\n\n#### `\u7b2c 2 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e\uff1a\u65b0\u589e\u8def\u7531\n\n\u5728 [`website/src/routes/router.tsx`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/website/src/routes/router.tsx#L39-L41) \u4e2d\u52a0\u8f7d Markdown \u4ee5\u53ca\u76f8\u5173\u6587\u4ef6\n\n```ts\nexport const getRouterData = {\n  '/': {\n    component: dynamicWrapper([], () => import('../layouts/BasicLayout')),\n  },\n  '/docs/getting-started': {\n    component: dynamicWrapper([], () => import('../pages/docs/getting-started')),\n  },\n  ....\n}\n```\n\n#### `\u7b2c 3 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e\uff1a\u65b0\u589e Markdown \u6587\u4ef6\n\n\u6dfb\u52a0 `website/src/pages/docs/getting-started/README.md` \u548c `website/src/pages/docs/getting-started/index.tsx`\n\n```tsx\nimport Preview from 'src/component/Preview';\nimport md from './README.md';\n\nconst DEMO = () => <Preview {...md} />;\nexport default DEMO;\n\n```\n> \u6ce8\u610f: \u5982\u679cmarkdown\u6709\u672c\u5730\u56fe\u7247\u9700\u8981\u589e\u52a0transformImageUri\u914d\u7f6e,\u5426\u5219\u4e0d\u73b0\u5b9e\u56fe\u7247\n```tsx\nimport Preview from 'src/component/Preview';\nimport md from './README.md';\n\nconst transformImageUri = (url: string) => {\n  const reqImage = (require as any).context('./', true, /\\.(png|gif|jpg|svg)$/)\n  const urlAddr = reqImage(url)\n  return urlAddr\n}\n\nconst DEMO = () => <Preview {...md} transformImageUri={transformImageUri} />;\nexport default DEMO;\n\n```\n\n### `\u4fee\u6539\u4e00\u4e2a Markdown \u6587\u4ef6\u5185\u5bb9`\n\n\u53ef\u76f4\u63a5\u70b9\u51fb\u6587\u6863\u7f51\u7ad9\u5e95\u90e8\u7684 `\u5728 GitHub \u4e0a\u7f16\u8f91\u6b64\u9875`\x3c!--rehype:style=color: #1e1cf0; background: #e3e3ff;--\x3e \u6309\u94ae\u3002\n\n\u21e3\u21e3\u21e3\u21e3\u21e3\u21e3\u770b\u89c1\u6ca1\u6709\uff0c\u70b9\u51fb\u4e0b\u9762\u6309\u94ae\u21e3\u21e3\u21e3\u21e3\u21e3\u21e3\n\x3c!--rehype:style=background-color: #a0ffb3; padding: 12px 16px; display: inline-block;--\x3e\n"},s=t(71027),c=function(){return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"website/src/pages/docs/development/document/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=418.ef326a35.chunk.js.map