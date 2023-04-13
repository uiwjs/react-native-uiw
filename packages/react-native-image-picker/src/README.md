ImagePicker 图片上传
---
上传图片/预览图片/保存图片

### 使用本组件需要单独安装
```bash
yarn add @uiw/react-native-image-picker react-native-image-picker @react-native-camera-roll/camera-roll react-native-image-viewing
```
该组件依赖
- `图片上传` [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker)
- `图片预览` [react-native-image-viewing](https://github.com/jobtoday/react-native-image-viewing)
- `图片保存` [@react-native-camera-roll/camera-roll](https://github.com/react-native-cameraroll/react-native-cameraroll)

### 权限

#### ios
请在`ios/<应用名称>/Info.plist`中添加以下代码
```xml
<key>NSCameraUsageDescription</key>
<string>This app requires access to the camera.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app requires access to the photo.</string>
```

#### android
请在`android/app/src/main/AndroidManifest.xml` `<manifest>` 标签下添加以下代码

##### Android 13以下
在 Android 13以下，记得将`android:requestLegacyExternalStorage="true"`属性添加到`<application>`中来支持 Android 10
```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

##### Android 13以上
在 Android 13以上，`READ_EXTERNAL_STORAGE已`已经被`READ_MEDIA_IMAGES` 和 `READ_MEDIA_VIDEO`取代
```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

