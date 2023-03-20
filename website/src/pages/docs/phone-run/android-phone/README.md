Android 真机运行
===

本文档将指导你通过必须的步骤在设备上运行 React Native app，为生产做准备 。

## 在 Android 设备上运行应用

> 🚧 下文所指的设备包括 Android 手机和模拟器。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `1. 开启 USB 调试`

在默认情况下 Android 设备只能从应用市场来安装应用。你需要开启 USB 调试才能自由安装开发版本的 APP。

首先，确定你已经打开设备的 USB 调试开关。

### `2. 通过 USB 数据线连接设备`

现在我们设置一个 Android 设备来运行我们的 React Native 项目，通过 USB 将你的设备插入开发机器以继续。

下面检查你的设备是否能正确连接到 ADB（Android Debug Bridge），使用`adb devices`命令:

```
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
```

在右边那列看到`device`说明你的设备已经被正确连接了。注意，你每次只应当`连接一个设备`<!--rehype:style=color: red;background: #ffd2d2;-->。

> 🚧 译注：如果你连接了多个设备（包含模拟器在内），后续的一些操作可能会失败。拔掉不需要的设备，或者关掉模拟器，确保 adb devices 的输出只有一个是连接状态。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `3. 运行应用`

现在你可以运行下面的命令来在设备上安装并启动应用了。

```
$ npx react-native run-android
```

> 🚧 如果你收到"`bridge configuration isn't available`"错误，请参阅使用adb reverse。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

> 🚧 提示：你还可以运行`npx react-native run-android --variant=release`来安装 release 版的应用。当然你需要[先配置好签名](https://reactnative.cn/docs/signed-apk-android)，且此时无法再开启开发者菜单。注意在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 从设备上访问开发服务器

在启用开发服务器（官方名称 metro，但我们更常称之为 Packager）的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果。按照下面描述的任意一种方法来使你的设备可以访问到运行在电脑上的开发服务器。

> 🚧 译注：默认情况下模拟器可以自动探测宿主机 ip 并连接，只有 Android 5.0 以下版本的手机需要按下文说明来手动操作。但某些情形下可能也无法正常连接，请注意去[讨论区](https://github.com/reactnativecn/react-native-website/issues)查看是否有人遭遇同类型的问题（不同时期不同版本可能是不同的问题）。有些文章会提到`react-native bundle`命令，这个命令会把 js 文件打包内置到应用中，从而不需要连接 metro，但这并`没有解决问题`。我们在开发中必须使用到 metro，否则无法刷新代码。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `(Android 5.0 及以上)使用 adb reverse 命令`

> 🚧 注意，这个选项只能在 5.0 以上版本(API 21+)的安卓设备上使用。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

首先把你的设备通过 USB 数据线连接到电脑上，并开启 USB 调试（关于如何开启 USB 调试，参见上面的章节）。

1. 运行`adb reverse tcp:8081 tcp:8081`
2. 不需要更多配置，你就可以使用`Reload JS`和其它的开发选项了

### `(Android 5.0 以下)通过 Wi-Fi 连接你的本地开发服务器`

你还可以通过 Wi-Fi 连接到开发服务器。你首先需要使用 USB 在你的设备上安装该应用程序，完成之后便可以按照这些说明进行无线调试。在继续之前，你需要知道开发机器的当前 IP 地址。

你可以在`System Preferences` → `Network`中找到 IP 地址。

1. 首先确保你的电脑和手机设备在`同一个 Wi-Fi 环境`<!--rehype:style=color: red;background: #ffd2d2;-->下。
2. 在设备上运行你的 React Native 应用。和打开其它 App 一样操作。
3. 你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。
4. 摇晃设备，或者运行`adb shell input keyevent 82`，可以打开`开发者菜单`<!--rehype:style=color: red;background: #ffd2d2;-->。
5. 点击`Dev Settings` -> `Debug server host for device`。
6. 输入你电脑的 `IP 地址和端口号`（譬如 10.0.1.1:8081）。`在 Mac 上`<!--rehype:style=color: red;background: #ffd2d2;-->，你可以在系统设置/网络里找查询你的 IP 地址。`在 Windows 上`<!--rehype:style=color: red;background: #ffd2d2;-->，打开命令提示符并输入`ipconfig`来查询你的 IP 地址。`在 Linux 上`<!--rehype:style=color: red;background: #ffd2d2;-->你可以在终端中输入`ifconfig`来查询你的 IP 地址。
7. 回到`开发者菜单`<!--rehype:style=color: red;background: #ffd2d2;-->然后选择`Reload JS`。

你现在可以从开发者菜单启用实时重新加载。只要你的 JavaScript 代码发生更改，应用就会重新加载。
## 开发模式弹出开发者菜单刷新应用

命令行支持*打开开发者菜单*，和其它的一些操作

- r - 重新加载应用
- d - 打开开发者菜单
- i - 在 iOS 上运行
- a - 在 Android 上运行


#### Android

按两次 <kbd>R</kbd> 键或从开发者菜单(<kbd>⌘</kbd><kbd>M</kbd>)中选择重新加载(Reload)以预览您的更改。

> 如果没有起作用可以在命令行使用 `adb shell input keyevent 82` 命令唤起**开发者菜单**

## 恭喜
恭喜！ 你已经使用 React Native 构建了一个很棒的应用程序。