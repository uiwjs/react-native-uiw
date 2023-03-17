<!--idoc:ignore:start-->
React Native
===
<!--idoc:ignore:end-->

一些 React Native 开发上遇到的问题简单记录。

<!--idoc:ignore:start-->

## 目录

- [修改 App 在手机上展示的名称](https://github.com/jaywcjlove/react-native#%E4%BF%AE%E6%94%B9-app-%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%B1%95%E7%A4%BA%E7%9A%84%E5%90%8D%E7%A7%B0)
- [修改 App 在手机上展示的图标](https://github.com/jaywcjlove/react-native#%E4%BF%AE%E6%94%B9-app-%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%B1%95%E7%A4%BA%E7%9A%84%E5%9B%BE%E6%A0%87)
- [判断 Release/Debug 用于调试](https://github.com/jaywcjlove/react-native#%E5%88%A4%E6%96%AD-releasedebug-%E7%94%A8%E4%BA%8E%E8%B0%83%E8%AF%95)
- [开发模式弹出开发者菜单刷新应用](https://github.com/jaywcjlove/react-native#%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F%E5%BC%B9%E5%87%BA%E5%BC%80%E5%8F%91%E8%80%85%E8%8F%9C%E5%8D%95%E5%88%B7%E6%96%B0%E5%BA%94%E7%94%A8)
- [设置允许 HTTP 请求访问](https://github.com/jaywcjlove/react-native#%E8%AE%BE%E7%BD%AE%E5%85%81%E8%AE%B8-http-%E8%AF%B7%E6%B1%82%E8%AE%BF%E9%97%AE)
- [真机配置 IP 调试](https://github.com/jaywcjlove/react-native#%E7%9C%9F%E6%9C%BA%E9%85%8D%E7%BD%AE-ip-%E8%B0%83%E8%AF%95)
- [Xcode 不用数据线真机调试](https://github.com/jaywcjlove/react-native#xcode-%E4%B8%8D%E7%94%A8%E6%95%B0%E6%8D%AE%E7%BA%BF%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95)
- [打包修改 APP 版本号](https://github.com/jaywcjlove/react-native#%E6%89%93%E5%8C%85%E4%BF%AE%E6%94%B9-app-%E7%89%88%E6%9C%AC%E5%8F%B7)
- [常见错误](https://github.com/jaywcjlove/react-native#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF)
  - [应用反应缓慢出现卡顿问题](https://github.com/jaywcjlove/react-native#%E5%BA%94%E7%94%A8%E5%8F%8D%E5%BA%94%E7%BC%93%E6%85%A2%E5%87%BA%E7%8E%B0%E5%8D%A1%E9%A1%BF%E9%97%AE%E9%A2%98)
  - [Android: Gradle project sync failed](https://github.com/jaywcjlove/react-native#android-gradle-project-sync-failed)
  - [Android: The device needs more free storage to install the application](https://github.com/jaywcjlove/react-native#android-the-device-needs-more-free-storage-to-install-the-application)
  - [Android: Cannot convert string value 'UNIFIED_TEST_PLATFORM'](https://github.com/jaywcjlove/react-native#android-cannot-convert-string-value-unified_test_platform)
  - [iOS: library not found for -lDoubleConversion](https://github.com/jaywcjlove/react-native#ios-library-not-found-for--ldoubleconversion)
  - [iOS: symbol(s) not found for architecture i386](https://github.com/jaywcjlove/react-native#ios-symbols-not-found-for-architecture-i386)
  - [iOS: Command PhaseScriptExecution failed with a nonzero exit code](https://github.com/jaywcjlove/react-native#ios-command-phasescriptexecution-failed-with-a-nonzero-exit-code)

<!--idoc:ignore:end-->

## 修改 App 在手机上展示的名称

#### Android

修改 `android/app/src/main/res/values/strings.xml` 配置

```xml
<resources>
  <string name="app_name">这里填写名称</string>
</resources>
```

#### iOS

修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>CFBundleDisplayName</key>
<string>这里填写名称</string>
```

## 修改 App 在手机上展示的图标

#### Android

修改替换 `android/app/src/main/res/mipmap-(*)` 下面的图标

图标分为 方形图标(`ic_launcher.png`) 和 圆形图标(`ic_launcher_round.png`)

#### iOS

修改 `ios/<应用名称>/Images.xcassets/AppIcon.appiconset/Contents.json` 配置，及修改配置目录 `ios/<应用名称>/Images.xcassets/AppIcon.appiconset` 下的图标文件。

通过 xcode 下图拖拽更换图标更方便。

![](./img/img01.png)<!--rehype:style=max-width: 650px;width: 100%;-->

## 判断 Release/Debug 用于调试

#### Android

修改 `android/app/src/main/res/values/strings.xml` 配置

```java
// 在Android Studio项目中
if(BuildConfig.DEBUG){
  // debug模式
}else{
  // release模式
}
```

#### iOS

```objective-c
#ifdef DEBUG
   // debug模式
#else
    //release 模式
#endif
```

#### React Native

```js
if (__DEV__) {
  // debug 模式
} else {
  // release 模式
}
```

## 开发模式弹出开发者菜单刷新应用

命令行支持*打开开发者菜单*，和其它的一些操作

- r - 重新加载应用
- d - 打开开发者菜单
- i - 在 iOS 上运行
- a - 在 Android 上运行


#### Android

按两次 <kbd>R</kbd> 键或从开发者菜单(<kbd>⌘</kbd><kbd>M</kbd>)中选择重新加载(Reload)以预览您的更改。

> 如果没有起作用可以在命令行使用 `adb shell input keyevent 82` 命令唤起**开发者菜单**

#### iOS

使用 <kbd>⌘</kbd><kbd>R</kbd> 让您的 IOS 模拟器重新加载本地项目，使用 <kbd>⌘</kbd><kbd>T</kbd> 弹出开发者菜单。

## 设置允许 HTTP 请求访问

#### Android

创建配置文件 `android/app/src/main/res/xml/network_security_config.xml` 内容如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```

修改配置 `android/app/src/main/AndroidManifest.xml`

```diff
<application
  android:name=".MainApplication"
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
  android:allowBackup="false"
+  android:networkSecurityConfig="@xml/network_security_config"
  android:theme="@style/AppTheme">
</application>
```

#### iOS

修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

## 真机配置 IP 调试

#### 配置说明

1. ⚠️ 首先保证真机和 pc 在同一个局域网络下。
2. 摇晃你的实体真机，调出配置弹窗。
3. 团队开发可以不安装开发环境。

**`摇晃手机`** => `Configure Bundler` => 设置 `ip:端口`

默认端口：`8081` 可以通过参数更改默认端口 `react-native start --port 9999`

#### Android 设置


#### iOS 设置

设置 `Build Configuration` 为 `Debug` 模式连接真机打包 APP。  

> `Xcode` => `Product` => `Scheme` => `Edit Scheme...` => `Run` => `Info` => `Build Configuration` => `Debug`

## Xcode 不用数据线真机调试

通过菜单 `Xcode` => `Product` => `Destination` => `Add Additional Simulators...` 打开设置界面，勾选 `Connect via network`。

![](./img/devices.png)<!--rehype:style=max-width: 650px;width: 100%;-->

如果是第一次操作， 可能会需要先进行配对操作；

1. 可在以上面弹出的界面中，点击左侧的设备，然后右健选`unpair device`。
2. 然后再去勾选 `connect via network`；
3. 这时手机上会提示信任界面，点击确认即可。

## 打包修改 APP 版本号

#### Android

修改 `android/app/build.gradle` 配置

```java
android {
  .....
  defaultConfig {
    ....
    versionName "2.1.1"
  }
}
```

#### iOS

修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>CFBundleShortVersionString</key>
<string>1.2.0</string>
```

## 常见错误

### 应用反应缓慢，出现卡顿问题

#### 可能存在的问题

- 查看是否 console 日志打印过度造成。
- React Native Debugger 页面放到最前面，浏览器窗口不要放到选项卡里面。

### Android: Gradle project sync failed.

#### 问题解决方法

在 Android Gradle 同步失败，导致项目无法启动，只需重新同步 Gradle 即可(可能需要翻墙)，方法如下图。

![](./img/img02.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### Android: The device needs more free storage to install the application

#### 问题解决方法

![](./img/img04.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### Android: Cannot convert string value 'UNIFIED_TEST_PLATFORM'

```bash
convert string value 'UNIFIED_TEST_PLATFORM' to an enum value of type 'com.android.builder.model.AndroidGradlePluginProjectFlags$BooleanFlag' (valid case insensitive values: APPLICATION_R_CLASS_CONSTANT_IDS, TEST_R_CLASS_CONSTANT_IDS, TRANSITIVE_R_CLASS, JETPACK_COMPOSE, ML_MODEL_BINDING)
```

#### 问题解决方法

你需要下载最新版 [`android-studio-2021.2.1.16-mac_arm.dmg`](https://developer.android.google.cn/studio/archive) 。

### iOS: library not found for -lDoubleConversion.

#### 问题解决方法

Xcode 打开工程文件错误，使用 `*.xcodeproj` 打开工程会报这个错误。

> 请打开 `*.xcworkspace` 的工程文件，错误将得到解决。

### iOS: symbol(s) not found for architecture i386.

#### 问题解决方法

可能使用的某个包，不支持 i386 模拟器，使用 x86 模拟器或真机。

> 设置 `Build Configuration` 为 `Debug` 模式下可能会解决问题。  
> `Xcode` => `Product` => `Scheme` => `Edit Scheme...` => `Run` => `Info` => `Build Configuration`  

![](./img/img03.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### iOS: Command PhaseScriptExecution failed with a nonzero exit code

> React-Core-AccessibilityResources Command CodeSign failed with a nonzero exit code

#### 问题解决方法

打开 `Kaychain Access(钥匙串访问)` 应用删除 `Apple Worldwide Developer Relations Certification Authority` 证书

![](./img/img05.png)<!--rehype:style=max-width: 650px;width: 100%;-->

## React Native 0.70 版本，在iOS模拟器中Open Debugger无法启动

#### `版本:`

```
"react": "18.1.0",
"react-native": "0.70.1",
```

#### `问题`

`Cmd+D > Open Debugger > console logs`:

```
info Opening flipper://null/Hermesdebuggerrn?device=React%20Native...
error Browser exited with error:, Error: invalid url, missing http/https protocol
```
![](./img/img06.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `解决方案一`

1. 搜索关键字:`hermes_enabled`，`true改为false` `:hermes_enabled => false`<!--rehype:style=color: red;background: #ffd2d2;-->
2. 移除Hermes引擎 `cd ios && pod install && cd ..`
3. 重启项目 `yarn run ios`

### `解决方案二`

RN版本使用0.69.0


