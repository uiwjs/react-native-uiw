"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8624],{58624:function(e,n,o){o.r(n),n.default="Android \u73af\u5883\u5b89\u88c5(for Mac)\n===\n\n\u8fd9\u91cc\u4ecb\u7ecd\uff0c\u4f7f\u7528 React Native CLI \u8fd0\u884c\u4e00\u4e2a Android \u73af\u5883\u4e0b\u7684 app\u3002\u60a8\u5c06\u9700\u8981 Node\u3001Watchman\u3001React Native \u547d\u4ee4\u884c\u754c\u9762\u3001JDK \u548c Android Studio\u3002\n\n\u867d\u7136\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u7f16\u8f91\u5668\u6765\u5f00\u53d1\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u60a8\u9700\u8981\u5b89\u88c5 Android Studio \u4ee5\u8bbe\u7f6e\u5fc5\u8981\u7684\u5de5\u5177\u6765\u6784\u5efa\u60a8\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\u3002\n\n## \u5b89\u88c5\u4f9d\u8d56\n\n\u60a8\u5c06\u9700\u8981 [Node](https://nodejs.org)\u3001[Watchman](https://facebook.github.io/watchman)\u3001[React Native](https://github.com/react-native-community/cli) \u547d\u4ee4\u884c\u754c\u9762\u3001JDK \u548c Android Studio\u3002\n\n\u867d\u7136\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u7f16\u8f91\u5668\u6765\u5f00\u53d1\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u60a8\u9700\u8981\u5b89\u88c5 Android Studio \u4ee5\u8bbe\u7f6e\u5fc5\u8981\u7684\u5de5\u5177\u6765\u6784\u5efa\u60a8\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\u3002\n\n### `Node & Watchman`\n\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 [Homebrew](http://brew.sh/) \u5b89\u88c5 [Node](https://nodejs.org) \u548c [Watchman](https://facebook.github.io/watchman)\u3002 \u5b89\u88c5 [Homebrew](http://brew.sh/) \u540e\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n\n```shell\nbrew install node\nbrew install watchman\n```\n\n\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86 Node\uff0c\u8bf7\u786e\u4fdd\u5b83\u662f Node 12 \u6216\u66f4\u65b0\u7248\u672c\u3002\n\n[Watchman](https://facebook.github.io/watchman/) \u662f Facebook \u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u7528\u4e8e\u89c2\u5bdf\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u53d8\u5316\u3002\u5f3a\u70c8\u5efa\u8bae\u60a8\u5b89\u88c5\u5b83\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002\n\n### `Java \u5f00\u53d1\u5de5\u5177\u5305`\n\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 [Homebrew](http://brew.sh/) \u5b89\u88c5 JDK\u3002 \u5b89\u88c5 Homebrew \u540e\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n\n```shell\nbrew tap homebrew/cask-versions\nbrew install --cask zulu11\n```\nReact Native \u9700\u8981 Java Development Kit [JDK] 11\u3002\u4f60\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 javac -version\uff08\u8bf7\u6ce8\u610f\u662f javac\uff0c\u4e0d\u662f java\uff09\u6765\u67e5\u770b\u4f60\u5f53\u524d\u5b89\u88c5\u7684 JDK \u7248\u672c\u3002\n\n> \ud83d\udea7 \u4f4e\u4e8e 0.67 \u7248\u672c\u7684 React Native \u9700\u8981 JDK 1.8 \u7248\u672c\uff08\u5b98\u65b9\u4e5f\u79f0 8 \u7248\u672c\uff09\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px; display: inline-block;--\x3e\n\n### `\u5b89\u5353\u5f00\u53d1\u73af\u5883`\n\n\u5982\u679c\u60a8\u4e0d\u719f\u6089 Android \u5f00\u53d1\uff0c\u90a3\u4e48\u8bbe\u7f6e\u60a8\u7684\u5f00\u53d1\u73af\u5883\u53ef\u80fd\u4f1a\u6709\u4e9b\u4e4f\u5473\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u719f\u6089 Android \u5f00\u53d1\uff0c\u5219\u53ef\u80fd\u9700\u8981\u914d\u7f6e\u4e00\u4e9b\u5185\u5bb9\u3002 \u5728\u4efb\u4f55\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u786e\u4fdd\u4ed4\u7ec6\u9075\u5faa\u63a5\u4e0b\u6765\u7684\u51e0\u4e2a\u6b65\u9aa4\u3002\n\n#### `\u7b2c 1 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u5b89\u88c5 Android Studio\n\n\u4e0b\u8f7d\u5e76\u5b89\u88c5 [Android Studio](https://developer.android.google.cn/studio)\u3002 \u5728 Android Studio \u5b89\u88c5\u5411\u5bfc\u4e2d\uff0c\u786e\u4fdd\u9009\u4e2d\u4ee5\u4e0b\u6240\u6709\u9879\u76ee\u65c1\u8fb9\u7684\u6846\uff1a\n\n> \ud83d\udea7 \u5982\u679c\u6253\u4e0d\u5f00\uff0c\u6216\u8005\u65e0\u6cd5\u4e0b\u8f7d [Android Studio](https://developer.android.google.cn/studio) \u8bf7\u786e\u8ba4\u4e0b\u8f7d\u5730\u5740 ~~`developer.android.com`~~ -> `developer.android.google.cn`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px; display: inline-block;--\x3e\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u5982\u679c\u60a8\u662f `MacBook M1`\x3c!--rehype:style=color: #e00000;--\x3e\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d\u6700\u65b0\u7248 [`Android Studio Arctic Fox (2020.3.1) Canary 15, Mac (ARM)`](https://developer.android.google.cn/studio/archive) \u9884\u89c8\u7248\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u5728 Android Studio \u5b89\u88c5\u5411\u5bfc\u4e2d\uff0c\u786e\u4fdd\u9009\u4e2d\u4ee5\u4e0b\u6240\u6709\u9879\u76ee\u65c1\u8fb9\u7684\u6846\uff1a\n\n- `Android SDK`\n- `Android SDK Platform`\n- `Android Virtual Device`\n- \u5982\u679c\u60a8\u5c1a\u672a\u4f7f\u7528 Hyper-V\uff1a`Performance (Intel \xae HAXM)`\uff08[\u8bf7\u53c2\u9605\u6b64\u5904](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)\u4e86\u89e3 AMD \u6216 Hyper-V\uff09\n\n> \ud83d\udea7 \u5982\u679c\u590d\u9009\u6846\u53d8\u7070\uff0c\u60a8\u7a0d\u540e\u5c06\u6709\u673a\u4f1a\u5b89\u88c5\u8fd9\u4e9b\u7ec4\u4ef6\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u8bbe\u7f6e\u5b8c\u6210\u5e76\u663e\u793a\u6b22\u8fce\u5c4f\u5e55\u540e\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u3002\n\n#### `\u7b2c 2 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u5b89\u88c5 Android SDK\n\nAndroid Studio \u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7684 Android SDK\u3002 \u4f46\u662f\uff0c\u4f7f\u7528\u672c\u673a\u4ee3\u7801\u6784\u5efa React Native \u5e94\u7528\u7a0b\u5e8f\u7279\u522b\u9700\u8981 `Android 10 (Q)` SDK\u3002 \u53ef\u4ee5\u901a\u8fc7 Android Studio \u4e2d\u7684 SDK Manager \u5b89\u88c5\u5176\u4ed6 Android SDK\u3002\n\n\u4e3a\u6b64\uff0c\u8bf7\u6253\u5f00 Android Studio\uff0c\u5355\u51fb `Configure` \u6309\u94ae\u5e76\u9009\u62e9 `SDK Manager`\u3002\n\n![](./1.png)\n\n> \ud83d\udea7 `SDK Manager` \u4e5f\u53ef\u4ee5\u5728 Android Studio \u7684 `Preferences` \u5bf9\u8bdd\u6846\u4e2d\u627e\u5230\uff0c\u5728 `Appearance & Behavior` \u2192 `System Settings` \u2192 `Android SDK` \u4e0b\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u4ece `SDK Manager` \u4e2d\u9009\u62e9 `SDK Platforms` \u9009\u9879\u5361\uff0c\u7136\u540e\u9009\u4e2d\u53f3\u4e0b\u89d2 `Show Package Details` \u65c1\u8fb9\u7684\u6846\u3002 \u67e5\u627e\u5e76\u5c55\u5f00 `Android 10 (Q)` \u6761\u76ee\uff0c\u7136\u540e\u786e\u4fdd\u9009\u4e2d\u4ee5\u4e0b\u9879\u76ee\uff1a\n\n- `Android SDK Platform 29`\n- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`\n\n![](./2.png)\n\n\u63a5\u4e0b\u6765\uff0c\u9009\u62e9 `SDK Tools` \u9009\u9879\u5361\u5e76\u5728\u6b64\u5904\u9009\u4e2d `Show Package Details` \u65c1\u8fb9\u7684\u6846\u3002 \u67e5\u627e\u5e76\u5c55\u5f00 `Android SDK Build-Tools` \u6761\u76ee\uff0c\u7136\u540e\u786e\u4fdd\u9009\u62e9\u4e86 `29.0.2`\u3002\n\n![](./3.png)\n\n\u6700\u540e\uff0c\u70b9\u51fb `Apply` \u4e0b\u8f7d\u5e76\u5b89\u88c5 Android SDK \u548c\u76f8\u5173\u7684\u6784\u5efa\u5de5\u5177\u3002\n\n![](./4.png)\n\n#### `\u7b2c 3 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u914d\u7f6e ANDROID_HOME \u73af\u5883\u53d8\u91cf\n\nReact Native \u5de5\u5177\u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u624d\u80fd\u4f7f\u7528\u672c\u673a\u4ee3\u7801\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u5c06\u4ee5\u4e0b\u884c\u6dfb\u52a0\u5230\u60a8\u7684 `$HOME/.bash_profile` \u6216 `$HOME/.bashrc`\uff08\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f `zsh`\uff0c\u5219\u4f7f\u7528 `~/.zprofile` \u6216 `~/.zshrc`\uff09\u914d\u7f6e\u6587\u4ef6\uff1a\n\n```shell\nexport ANDROID_HOME=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/emulator\nexport PATH=$PATH:$ANDROID_HOME/tools\nexport PATH=$PATH:$ANDROID_HOME/tools/bin\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\n```\n\n> \ud83d\udea7 `.bash_profile` \u7279\u5b9a\u4e8e `bash`\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u53e6\u4e00\u4e2a `shell`\uff0c\u5219\u9700\u8981\u7f16\u8f91\u76f8\u5e94\u7684\u7279\u5b9a\u4e8e `shell` \u7684\u914d\u7f6e\u6587\u4ef6\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u8f93\u5165 `source $HOME/.bash_profile` for bash \u6216 `source $HOME/.zprofile` \u5c06\u914d\u7f6e\u52a0\u8f7d\u5230\u5f53\u524d `shell` \u4e2d\u3002 \u901a\u8fc7\u8fd0\u884c `echo $ANDROID_HOME` \u9a8c\u8bc1 `ANDROID_HOME` \u662f\u5426\u5df2\u8bbe\u7f6e\uff0c\u5e76\u901a\u8fc7\u8fd0\u884c `echo $PATH` \u5c06\u9002\u5f53\u7684\u76ee\u5f55\u6dfb\u52a0\u5230\u60a8\u7684\u8def\u5f84\u4e2d\u3002\n\n> \u8bf7\u786e\u4fdd\u60a8\u4f7f\u7528\u6b63\u786e\u7684 `Android SDK` \u8def\u5f84\u3002 \u60a8\u53ef\u4ee5\u5728 `Android Studio` \u7684 `Preferences` \u5bf9\u8bdd\u6846\u7684 `Appearance & Behavior` \u2192 `System Settings` \u2192 `Android SDK` \u4e0b\u627e\u5230 SDK \u7684\u5b9e\u9645\u4f4d\u7f6e\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `React Native \u547d\u4ee4\u884c\u754c\u9762`\n\nReact Native \u6709\u4e00\u4e2a\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u754c\u9762\u3002 \u6211\u4eec\u5efa\u8bae\u60a8\u5728\u8fd0\u884c\u65f6\u4f7f\u7528 Node.js \u9644\u5e26\u7684 `npx` \u8bbf\u95ee\u5f53\u524d\u7248\u672c\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u5b89\u88c5\u548c\u7ba1\u7406\u7279\u5b9a\u7248\u672c\u7684 CLI\u3002 \u4f7f\u7528 `npx react-native <command>`\uff0c\u5f53\u524d\u7a33\u5b9a\u7248\u672c\u7684 CLI \u5c06\u5728\u547d\u4ee4\u8fd0\u884c\u65f6\u4e0b\u8f7d\u5e76\u6267\u884c\u3002\n\n> \u4f7f\u7528 npx\uff08\u63a8\u8350\uff09\uff0c\u81ea react-native@0.60 \u8d77\u53ef\u7528\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\n\n> \ud83d\udea7 \u5982\u679c\u60a8\u4e4b\u524d\u5b89\u88c5\u4e86\u5168\u5c40 `react-native-cli` \u5305\uff0c\u8bf7\u5c06\u5176\u5220\u9664\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u95ee\u9898\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u60a8\u53ef\u4ee5\u4f7f\u7528 React Native \u7684\u5185\u7f6e\u547d\u4ee4\u884c\u754c\u9762\u6765\u751f\u6210\u4e00\u4e2a\u65b0\u9879\u76ee\u3002 \u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a `AwesomeProject` \u7684\u65b0 React Native \u9879\u76ee\uff1a\n\n```shell\nnpx react-native init AwesomeProject\n```\n\n\u5982\u679c\u60a8\u5c06 React Native \u96c6\u6210\u5230\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5982\u679c\u60a8\u4ece Expo \u4e2d `ejected`\uff0c\u6216\u8005\u60a8\u6b63\u5728\u5411\u73b0\u6709 React Native \u9879\u76ee\u6dfb\u52a0 iOS \u652f\u6301\uff08\u8bf7\u53c2\u9605[\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210](https://reactnative.dev/docs/integration-with-existing-apps)\uff09\uff0c\u5219\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9 CLI \u6765\u521d\u59cb\u5316\u60a8\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982 [Ignite CLI](https://github.com/infinitered/ignite)\u3002\n\n### `\u4f7f\u7528\u7279\u5b9a\u7248\u672c\u6216\u6a21\u677f`\n\n\u5982\u679c\u4f60\u60f3\u7528\u7279\u5b9a\u7684 React Native \u7248\u672c\u5f00\u59cb\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `--version` \u53c2\u6570\uff1a\n\n```bash\nnpx react-native init AwesomeProject --version X.XX.X\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49 React Native \u6a21\u677f\uff08\u5982 TypeScript\uff09\u4f7f\u7528 `--template` \u53c2\u6570\u542f\u52a8\u9879\u76ee\uff1a\n\n```bash\nnpx react-native init AwesomeTSProject --template react-native-template-typescript\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u5236\u5b9a\u7684\u6a21\u7248([`@uiw/react-native-template`](https://github.com/uiwjs/react-native-template))\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff1a\n\n\x3c!--rehype:style=background-color: rgb(118 247 149);--\x3e\n```shell\n# \u6b64\u6a21\u677f\u9ed8\u8ba4\u96c6\u6210\u4e86\u4e00\u4e9b\u5fc5\u7528\u7684\u4f9d\u8d56\uff0c\u5982\u8def\u7531\uff0c\u7ec4\u4ef6\u5e93\u7b49\nnpx react-native init AwesomeProject --template @uiw/react-native-template\n```\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u5982\u679c\u4e0a\u8ff0\u547d\u4ee4\u5931\u8d25\uff0c\u60a8\u53ef\u80fd\u5728\u60a8\u7684 PC \u4e0a\u5168\u5c40\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684 react-native \u6216 react-native-cli\u3002 \u5c1d\u8bd5\u5378\u8f7d `cli` \u5e76\u4f7f\u7528 `npx` \u8fd0\u884c cli\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u51c6\u5907 Android \u8bbe\u5907\n\n\u4f60\u9700\u8981\u4e00\u4e2a Android \u8bbe\u5907\u6765\u8fd0\u884c\u4f60\u7684 React Native Android \u5e94\u7528\u7a0b\u5e8f\u3002 \u8fd9\u53ef\u4ee5\u662f\u7269\u7406 Android \u8bbe\u5907\uff0c\u6216\u8005\u66f4\u5e38\u89c1\u7684\u662f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Android \u865a\u62df\u8bbe\u5907\uff0c\u5b83\u5141\u8bb8\u60a8\u5728\u8ba1\u7b97\u673a\u4e0a\u6a21\u62df Android \u8bbe\u5907\u3002\n\n\u65e0\u8bba\u54ea\u79cd\u65b9\u5f0f\uff0c\u60a8\u90fd\u9700\u8981\u51c6\u5907\u8bbe\u5907\u4ee5\u8fd0\u884c Android \u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u5f00\u53d1\u3002\n\n### `\u4f7f\u7528\u7269\u7406\u8bbe\u5907`\n\n\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u7269\u7406 `Android` \u8bbe\u5907\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u4ee3\u66ff `AVD` \u8fdb\u884c\u5f00\u53d1\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528 USB \u7535\u7f06\u5c06\u5176\u63d2\u5165\u60a8\u7684\u8ba1\u7b97\u673a\u5e76\u6309\u7167 [`\u6b64\u5904`](https://reactnative.dev/docs/0.62/running-on-device) \u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002\n\n### `\u4f7f\u7528\u865a\u62df\u8bbe\u5907`\n\n\u5982\u679c\u60a8\u4f7f\u7528 Android Studio \u6253\u5f00 `./AwesomeProject/android`\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ece Android Studio \u4e2d\u6253\u5f00 `AVD Manager` \u6765\u67e5\u770b\u53ef\u7528\u7684 Android \u865a\u62df\u8bbe\u5907 (AVD) \u5217\u8868\u3002 \u5bfb\u627e\u5982\u4e0b\u6240\u793a\u7684\u56fe\u6807\uff1a\n\n![](./5.png)\n\n\u5982\u679c\u60a8\u6700\u8fd1\u5b89\u88c5\u4e86 Android Studio\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 AVD\u3002 \u9009\u62e9 `Create Virtual Device...`\uff0c\u7136\u540e\u4ece\u5217\u8868\u4e2d\u9009\u62e9\u4efb\u4f55\u7535\u8bdd\u5e76\u5355\u51fb `Next`\uff0c\u7136\u540e\u9009\u62e9 Q API \u7ea7\u522b 29 \u955c\u50cf\u3002\n\n![](./6.png)\n\n![](./7.png)\n\n![](./9.png)\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u5982\u679c\u60a8\u662f `MacBook M1`\x3c!--rehype:style=color: #e00000;--\x3e\uff0c\u4f60\u9700\u8981\u4e0b\u8f7d `arm64` \u955c\u50cf\uff0c\u4ee5\u4e0b\u662f\u6700\u65b0\u7248\u672c\u7684\u914d\u7f6e\u65b9\u6cd5\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n![](./11.png)\n\n\u5355\u51fb `Next`\uff0c\u7136\u540e\u5355\u51fb `Finish` \u4ee5\u521b\u5efa\u60a8\u7684 AVD\u3002 \u6b64\u65f6\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u5355\u51fb AVD \u65c1\u8fb9\u7684\u7eff\u8272\u4e09\u89d2\u5f62\u6309\u94ae\u6765\u542f\u52a8\u5b83\uff0c\u7136\u540e\u7ee7\u7eed\u4e0b\u4e00\u6b65\u3002\n\n## \u8fd0\u884c\u4f60\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\n\n#### `\u7b2c 1 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8 Metro\n\n\u9996\u5148\uff0c\u60a8\u9700\u8981\u542f\u52a8 [Metro](https://facebook.github.io/metro/docs/concepts)\uff0c\u8fd9\u662f React Native \u9644\u5e26\u7684 JavaScript \u6253\u5305\u5668\u3002 Metro\u201c\u63a5\u6536\u4e00\u4e2a\u5165\u53e3\u6587\u4ef6\u548c\u5404\u79cd\u9009\u9879\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u4ee3\u7801\u53ca\u5176\u4f9d\u8d56\u9879\u7684\u5355\u4e2a JavaScript \u6587\u4ef6\u3002\u201d\u2014\u2014 [Metro Docs](https://facebook.github.io/metro/docs/concepts)\n\n\u8981\u542f\u52a8 Metro\uff0c\u8bf7\u5728 React Native \u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u8fd0\u884c `npx react-native start` \uff1a\n\n```shell\nnpx react-native start\n# or \u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\nyarn start\n```\n\n> \u5982\u679c\u60a8\u4f7f\u7528 Yarn \u5305\u7ba1\u7406\u5668\uff0c\u5219\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u8fd0\u884c React Native \u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 yarn \u800c\u4e0d\u662f npx\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n> \u5982\u679c\u4f60\u719f\u6089 Web \u5f00\u53d1\uff0cMetro \u5f88\u50cf webpack \u2014\u2014 \u7528\u4e8e React Native \u5e94\u7528\u7a0b\u5e8f\u3002 \u4e0e Kotlin \u6216 Java \u4e0d\u540c\uff0cJavaScript \u4e0d\u4f1a\u88ab\u7f16\u8bd1\uff0cReact Native \u4e5f\u4e0d\u4f1a\u3002 \u6346\u7ed1\u4e0e\u7f16\u8bd1\u4e0d\u540c\uff0c\u4f46\u5b83\u53ef\u4ee5\u5e2e\u52a9\u63d0\u9ad8\u542f\u52a8\u6027\u80fd\u5e76\u5c06\u4e00\u4e9b\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684 JavaScript \u8f6c\u6362\u4e3a\u66f4\u591a\u7684 JavaScript\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n#### `\u7b2c 2 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\n\n\u8ba9 Metro Bundler \u5728\u81ea\u5df1\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c\u3002 \u5728 React Native \u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u6253\u5f00\u4e00\u4e2a\u65b0\u7ec8\u7aef\u3002 \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n\n```shell\nnpx react-native run-android\n# or \u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\nyarn run android\n```\n\n\u5982\u679c\u4e00\u5207\u8bbe\u7f6e\u6b63\u786e\uff0c\u60a8\u5e94\u8be5\u5f88\u5feb\u5c31\u4f1a\u770b\u5230\u60a8\u7684\u65b0\u5e94\u7528\u7a0b\u5e8f\u5728\u60a8\u7684 Android \u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u3002\n\n![Android Studio](./10.png)\n\n`npx react-native run-android` \u662f\u8fd0\u884c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u79cd\u65b9\u5f0f - \u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece Android Studio \u4e2d\u8fd0\u884c\u5b83\u3002\n\n\u5982\u679c\u60a8\u65e0\u6cd5\u4f7f\u5176\u6b63\u5e38\u5de5\u4f5c\uff0c\u8bf7\u53c2\u9605[\u6545\u969c\u6392\u9664\u9875\u9762](https://reactnative.dev/docs/troubleshooting#content)\u3002\n\n## \u4fee\u6539\u4f60\u7684\u5e94\u7528\n\n\u73b0\u5728\u60a8\u5df2\u6210\u529f\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8ba9\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002\n\n- \u5728\u60a8\u9009\u62e9\u7684\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 `App.js` \u5e76\u7f16\u8f91\u4e00\u4e9b\u884c\u3002\n- \u6309\u4e24\u6b21 `R`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u952e\u6216\u4ece\u5f00\u53d1\u4eba\u5458\u83dc\u5355 (`\u2318M`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e) \u4e2d\u9009\u62e9\u91cd\u65b0 `Reload` \u4ee5\u67e5\u770b\u60a8\u7684\u66f4\u6539\uff01\n- \u60a8\u8fd8\u53ef\u4ee5\u5728\u6a21\u62df\u5668\u4e2d\u4f7f\u7528 `\u2318D`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u6216\u8005 `DD`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u8c03\u51fa `Debug` \u83dc\u5355\u3002\u5982\u679c\u5728\u771f\u673a\u8c03\u8bd5\u8bf7 `\u6447\u4e00\u6447`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u624b\u673a\u8c03\u51fa\u83dc\u5355\u3002\n\n\n## \u606d\u559c\uff01\n\n\u606d\u559c\uff01 \u60a8\u5df2\u7ecf\u6210\u529f\u8fd0\u884c\u5e76\u4fee\u6539\u4e86\u60a8\u7684\u7b2c\u4e00\u4e2a React Native \u5e94\u7528\u7a0b\u5e8f\u3002\n"}}]);
//# sourceMappingURL=8624.a67b7281.chunk.js.map