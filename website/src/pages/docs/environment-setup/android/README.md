Android 环境安装(for Mac)
---

这里介绍，使用 React Native CLI 运行一个 Android 环境下的 app。您将需要 Node、Watchman、React Native 命令行界面、JDK 和 Android Studio。

虽然您可以使用您选择的任何编辑器来开发您的应用程序，但您需要安装 Android Studio 以设置必要的工具来构建您的 React Native 应用程序。

## 安装依赖
我们建议使用 [Homebrew](http://brew.sh/) 安装 Node 和 Watchman 。安装 Homebrew 后，在终端中运行以下命令：

```shell
brew install node
brew install watchman
```

如果您的系统上已经安装了 Node，请确保它是 Node 12 或更新版本。

[Watchman](https://facebook.github.io/watchman/) 是 Facebook 的一个工具，用于观察文件系统中的变化。强烈建议您安装它以获得更好的性能。

## Java 开发工具包

我们建议使用 [Homebrew](http://brew.sh/) 安装 JDK 。安装 Homebrew 后，在终端中运行以下命令：

```shell
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

如果您的系统上已经安装了 JDK，请确保它是 JDK 8 或更高版本（建议JDK 8）。

## 安卓开发环境

如果您不熟悉 Android 开发，那么设置您的开发环境可能会有些乏味。如果您已经熟悉 Android 开发，则可能需要配置一些内容。在任何一种情况下，请确保仔细遵循接下来的几个步骤。

#### 1.安装Android Studio

[下载并安装 Android Studio](https://developer.android.com/studio/index.html)。如果打不开可以用 [百度网盘Android Studio](https://pan.baidu.com/s/1SDt4ttchd6wBPhPWe5zY9g) 提取码：d36k

在 Android Studio 安装向导中，确保选中以下所有项目旁边的框：

- ```Android SDK```
- ```Android SDK Platform```
- ```Android Virtual Device```

> 如果复选框变灰，您稍后将有机会安装这些组件。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

设置完成并显示欢迎屏幕后，继续下一步。

#### 2.安装Android SDK
Android Studio 默认安装最新的 Android SDK。但是，使用本机代码构建 React Native 应用程序Android 10 (Q)特别需要SDK。可以通过 Android Studio 中的 SDK Manager 安装其他 Android SDK。

为此，请打开 Android Studio，单击“Configure”按钮并选择“SDK Manager”。

> SDK 管理器也可以在 Android Studio 的“首选项”对话框中找到，在Appearance & Behavior → System Settings → Android SDK 下。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

#####从 SDK 管理器中选择“SDK 平台”选项卡，然后选中右下角“Show Package Details”旁边的框。查找并展开Android 10 (Q)条目，然后确保选中以下项目：

- Android SDK Platform 29
- Intel x86 Atom_64 System Image 要么 Google APIs Intel x86 Atom System Image

![Android Studio](./001.png)

##### 接下来，选择“SDK Tools”选项卡并在此处选中“Show Package Details”旁边的框。查找并展开“Android SDK Build-Tools”条目，然后确保29.0.2选中并选中“Android SDK Command-line Tools (latest)”。

![Android Studio](./002.png)
![Android Studio](./003.png)

最后，点击“Apply”下载并安装Android SDK和相关的构建工具。


#### 3.配置ANDROID_HOME环境变量

React Native 工具需要设置一些环境变量才能使用本机代码构建应用程序。

将以下行添加到您的```$HOME/.bash_profile```或```$HOME/.bashrc```（如果您使用```zsh```之后```~/.zprofile```或```~/.zshrc```）配置文件：

##### 我用的是zsh，一般是本地隐藏文件（请自行检查，系统默认应该是.bashrc）
![Android Studio](./007.png)

##### 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。
```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

> .bash_profile特定于bash. 如果您使用另一个 shell，则需要编辑相应的特定于 shell 的配置文件。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

键入```source $HOME/.bash_profileforbash```或```source $HOME/.zprofile```将配置加载到您当前的 shell 中。通过运行验证 ANDROID_HOME 是否已设置，```echo $ANDROID_HOME```并且已通过运行将适当的目录添加到您的路径中```echo $PATH```。


> 请确保您使用正确的 Android SDK 路径。您可以在 Android Studio“首选项”对话框的Appearance & Behavior → System Settings → Android SDK下找到 SDK 的实际位置。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

##### 这是你Android SDK安装的位置
![Android Studio](./004.png)

### React Native命令行界面
React Native 有一个内置的命令行界面。我们建议您在运行时使用```npx```Node.js 附带的访问当前版本，而不是全局安装和管理特定版本的 CLI 。使用```npx react-native <command>```，将在运行命令时下载并执行当前稳定版本的 CLI。

## 创建一个新的应用程序

> ⚠️ 如果您之前安装了全局 ```react-native-cli``` 包，请将其删除，因为它可能会导致意外问题。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

React Native 有一个内置的命令行界面，你可以用它来生成一个新项目。您无需使用npxNode.js 附带的全局安装任何东西即可访问它。让我们创建一个名为“AwesomeProject”的新 React Native 项目：

```shell
npx react-native init AwesomeProject
```

如果您将 React Native 集成到现有应用程序中，如果您从 Expo 中“退出”，或者您正在向现有 React Native 项目添加 Android 支持（请参阅[与现有应用程序集成），则不需要这样做](https://reactnative.dev/docs/integration-with-existing-apps)。您还可以使用第三方 CLI 来初始化您的 React Native 应用程序，例如[Ignite CLI](https://github.com/infinitered/ignite)。

## 使用特定版本或模板
如果你想用特定的 React Native 版本开始一个新项目，你可以使用 ```--version``` 参数：

```shell
npx react-native init AwesomeProject --version X.XX.X
```

您还可以使用自定义 React Native 模板（如 TypeScript）使用 ```--template``` 参数启动项目：

```shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

您还可以使用我们制定的模版([@uiw/react-native-template](https://github.com/uiwjs/react-native-template))创建一个新项目：

```shell
npx react-native init AwesomeProject --template @uiw/react-native-template
```

>⚠️ 注意：如果上述命令失败，您可能在您的 PC 上全局安装了旧版本的 react-native 或 react-native-cli。 尝试卸载 cli 并使用 npx 运行 cli。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 准备 Android 设备
你需要一个 Android 设备来运行你的 React Native Android 应用程序。这可以是物理 Android 设备，或者更常见的是，您可以使用 Android 虚拟设备，它允许您在计算机上模拟 Android 设备。

无论哪种方式，您都需要准备设备以运行 Android 应用程序进行开发。

### 使用物理设备
如果您有一个物理 Android 设备，您可以使用它来代替 AVD 进行开发，方法是使用 USB 电缆将其插入您的计算机并按照此处的说明进行操作。

### 使用虚拟设备
如果您使用 Android Studio 打开./AwesomeProject/android，则可以通过从 Android Studio 中打开“AVD 管理器”来查看可用的 Android 虚拟设备 (AVD) 列表。寻找如下所示的图标：


![Android Studio](./005.png)

如果您最近安装了 Android Studio，您可能需要[创建一个新的 AVD](https://developer.android.com/studio/run/managing-avds.html)。选择“创建虚拟设备...”，然后从列表中选择任何电话并单击“下一步”，然后选择Q API 级别 29 图像。

单击“下一步”，然后单击“完成”以创建您的 AVD。此时，您应该可以单击 AVD 旁边的绿色三角形按钮来启动它，然后继续下一步。

## 运行你的 React Native 应用程序
### 第 1 步：启动 Metro
首先，您需要启动 Metro，这是 React Native 附带的 JavaScript 打包器。Metro“接受一个入口文件和各种选项，并返回一个包含所有代码及其依赖项的单个 JavaScript 文件。”— [Metro Docs](https://facebook.github.io/metro/docs/concepts/)

要启动 Metro，请在 React Native 项目文件夹中运行 ```npx react-native start``` ：


```shell
npx react-native start
```


```react-native start``` 启动 Metro Bundler。

##### 如果使用 ``` @uiw/react-native-template ``` 模版
只需 ```yarn start``` 就可以启动

>如果您使用 Yarn 包管理器，则可以在现有项目中运行 React Native 命令时使用yarn代替npx。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

>如果你熟悉 Web 开发，Metro 很像 webpack——用于 React Native 应用程序。与 Kotlin 或 Java 不同，JavaScript 不会被编译，React Native 也不会。捆绑与编译不同，但它可以帮助提高启动性能并将一些特定于平台的 JavaScript 转换为更广泛支持的 JavaScript。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 第 2 步：启动您的应用程序

让 Metro Bundler 在自己的终端中运行。在 React Native 项目文件夹中打开一个新终端。运行以下命令：

``` npx react-native run-android```

##### 如果使用 ``` @uiw/react-native-template ``` 模版
只需 ```yarn run android``` 就可以启动

如果一切设置正确，您应该很快就会看到您的新应用程序在您的 Android 模拟器中运行。

[]![Android Studio](./006.png)

```npx react-native run-android ``` 是运行您的应用程序的一种方式 - 您也可以直接从 Android Studio 中运行它。



如果您无法使其正常工作，请参阅[故障排除页面](https://reactnative.dev/docs/troubleshooting#content)。

## 在设备上运行

默认情况下，上述命令将自动在 `iOS` 模拟器上运行您的应用程序。 如果您想在实际的物理 `iOS` 设备上运行该应用程序，请按照此处的说明进行操作。

## 修改你的应用

现在您已成功运行该应用程序，让我们对其进行修改。

- 在您选择的文本编辑器中打开 `App.js` 并编辑一些行。

- 在您的 `Android Studio` 模拟器或者其他安卓模拟器中按`R`键两次或`Reload`从开发人员菜单 `⌘M`<!--rehype:style=color: red;background: #ffd2d2;-->中选择以查看您的更改！

## 恭喜！

恭喜！ 您已经成功运行并修改了您的第一个 React Native 应用程序。