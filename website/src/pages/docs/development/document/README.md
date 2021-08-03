参与文档/网站编辑开发
---

这里介绍，当前组件库开发和文档编写，方便您快速介入到文档/网站编辑开发中。

> ⚠️ 注意：文档网站发布是监听 master 分支的更新`自动`发布到 [`gh-pages`](https://github.com/uiwjs/react-native-uiw/tree/gh-pages) 分支。  
> 在 package.json 中的版本号请不要随意更改，组件发布是监听 [`package.json 中的版本号`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/.github/workflows/ci.yml#L64-L66)变更`自动`发布到 npm 上。  
> 这些自动化得益于 [Github Actions](https://github.com/actions) 的强力驱动。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 目录结构

```bash
├── README.md -> packages/core/README.md
├── ....
├── example   # ----> 示例
│   └── base  # 基础示例
├── packages  # ----> 包
│   ├── core  # @uiw/react-native 基础组件
│   │   ├── package.json
│   │   └── src
│   │       ├── Avatar # 组件源码以及组件文档
│   │       └── ....
│   └── docs  # @uiw/react-native-doc 可忽略，编译后的组件文档静态文件提交到 npm 提供文档版本预览
└── website   # ----> 文档网站源码
    ├── ....
    └── src
        ├── pages # 文档示例编写在这里
        │   ├── components
        │   └── ....
        └── routes
            ├── Controller.tsx
            ├── history.ts
            ├── menus.ts   # 配置菜单
            └── router.tsx # 配置菜单对应的页面
```

## 文档编辑预览

我们通过 [npm](https://www.npmjs.com/@uiw/react-native-doc) 来管理 UIW React Native 组件文档站点的版本，使用 [unpkg.com](https://unpkg.com/) 提供的静态资源预览和同步 npm 包的特点，，来实现[查看历史版本](https://unpkg.com/browse/@uiw/react-native-doc/)组件文档的一功能。的文档。所以我们在发布 [`@uiw/react-native`](https://www.npmjs.com/package/@uiw/react-native) 包的同时会发布 [`@uiw/react-native-doc`](https://www.npmjs.com/package/@uiw/react-native-doc) 包。

通过 unpkg 预览文档网站：https://unpkg.com/@uiw/react-native-doc/doc/index.html

这是 v2.0.0+ 版本预览方法

```shell
https://unpkg.com/@uiw/react-native-doc@<包版本>/web/index.html
```

> ⚠️ 注意：为了保持包版本同步，我们通过 [`lerna`](http://npmjs.com/lerna) 工具同时更改所有包的版本，确保组件包和文档包的版本是一致的。  
> 在项目根目录运行 `npm run version` 命令，即可更改所有包的版本。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `文档网站开发`

组件文档存放在组件 `packages/core`<!--rehype:style=color: #039423; background: #b7fdce;--> 包目录中，其它文档放在文档源码目录 `website/src/pages`<!--rehype:style=color: #039423; background: #b7fdce;--> 中，根据路由地址建立。

> 如果需要将文档网站运行起来，需要先安装依赖和编译包。使用 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces)，组件文档是从 `node_modules` 中加载，需要编译(或监听)输出到 `node_modules` 中。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

<!--rehype:-->
```bash
yarn install     # 安装当前依赖，和子包中的依赖
yarn run build   # 编译包
```

实时监听包和文档网站本地预览

```bash
# Step 1
yarn run lib:watch      # 编译输出 JS 文件
# Step 2
yarn run lib:watch:type # 输出类型文件 d.ts
# Step 3
yarn run start          # 本地运行预览文档网站
```

### `添加一个文档页面`

添加一个新的文档，需要新增路由、菜单、添加 `README.md` 文件。

```bash
website
 ├── src
 │   ├── pages # 文档示例编写在这里
 │   │   ├── components
 │   │   ├── getting-started
 │   │   │   ├── README.md   # 添加 README.md 文档
 │   │   │   └── index.tsx   # 添加加载 README.md JS 文件
 │   └── routes
 │       ├── menus.ts   # 配置菜单
 │       └── router.tsx # 配置菜单对应的页面
```

#### `第 1 步：菜单配置`

在 [`website/src/routes/menus.ts`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/website/src/routes/menus.ts#L44) 中配置菜单

```ts
export interface MenuData extends React.RefAttributes<HTMLAnchorElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  path?: string;
  divider?: boolean;
}
export const docsMenus: MenuData[] = [
  { path: '/docs/getting-started', name: '快速上手' },
  { divider: true, name: "环境安装" },
  { path: '/docs/environment-setup/ios', name: 'iOS 环境安装' },
  ...
  { divider: true, name: "其它" },
  { path: '/docs/development', name: '参与组件/文档开发' },
  { href: 'https://github.com/uiwjs/react-native-uiw/releases', target: '_blank', name: '更新日志' },
]
export const componentMenus: MenuData[] = [ .... ]
```

#### `第 2 步：新增路由`

在 [`website/src/routes/router.tsx`](https://github.com/uiwjs/react-native-uiw/blob/4e4f55681a71b4813a5f5fe26f4b1a859bc85a7f/website/src/routes/router.tsx#L39-L41) 中加载 Markdown 以及相关文件

```ts
export const getRouterData = {
  '/': {
    component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
  },
  '/docs/getting-started': {
    component: dynamicWrapper([], () => import('../pages/docs/getting-started')),
  },
  ....
}
```

#### `第 3 步：新增 Markdown 文件`

添加 `website/src/pages/docs/getting-started/README.md` 和 `website/src/pages/docs/getting-started/index.tsx`

```tsx
import Markdown, { importAll } from '../../../component/Markdown';

export default class Page extends Markdown {
  // 配置 markdown 在 GitHub 中的目录位置，用于定位编辑 Markdown
  path = "/website/src/pages/docs/getting-started/README.md";
  getMarkdown = async () => {
    // 这里加载指定的 Markdown 文件
    const md = await import('./README.md');
    // 也可加载组件包中的文档
    const mdCom = await import('@uiw/react-native/lib/Badge/README.md');
    // 支持 markdown 中，相对于当前 index.tsx 相对路径引入图片资源
    importAll((require as any).context('./', true, /\.(png|gif|jpg)$/), this.imageFiles);
    return md.default || md;
  }
}
```

### `修改一个 Markdown 文件内容`

可直接点击文档网站底部的 `在 GitHub 上编辑此页` 按钮。

⇣⇣⇣⇣⇣⇣看见没有，点击下面按钮⇣⇣⇣⇣⇣⇣
<!--rehype:style=background-color: #a0ffb3; padding: 12px 16px; display: inline-block;-->