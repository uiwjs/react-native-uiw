文档编辑预览
---

我们使用 npm 来管理 uiw 文档站点的版本，使用 unpkg.com 预览。文档版本管理，是根据 unpkg 工具支持静态服务和同步 npm 包的特点，来实现这一功能的。所以我们在发布 uiw 包的同时会发布 @uiw/doc 包，版本是同步的。

- 通过 unpkg 预览文档网站：https://unpkg.com/@uiw/react-native-doc/doc/index.html

这是 v2.0.0+ 版本预览方法

```shell
https://unpkg.com/@uiw/react-native-doc@<包版本>/web/index.html
```