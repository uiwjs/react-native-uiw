发布 iOS 应用商店
===

APP上架前需注册开发者账号，创建 `证书请求文件（CSR文件）` 、 `发布证书 （CER）`及 `Provisioning Profiles配置文件 （PP文件）` ,创建完成后，即可准备将已完成的项目进行提交上架。

## 一. 创建AppID

### `注册开发者账号`<!--rehype:style=color: white; background: #1c7bd0;-->

进入[Developer苹果开发者官网](https://developer.apple.com),点击“Account”登录/注册会员。

![](./img/01.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/02.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `创建 AppID`<!--rehype:style=color: white; background: #1c7bd0;-->

登陆成功后，选择 `Certificates, Identifiers & Profiles`进入页面点击  `Identifiers`，填写信息创建AppID。

![](./img/03.png)<!--rehype:style=max-width: 650px;width: 100%;-->  

![](./img/04.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `App IDs`<!--rehype:style=color: white; background: #1c7bd0;-->

选择App IDs点击Continue进入下一步，选择APP继续填写信息。

![](./img/05.png)<!--rehype:style=max-width: 650px;width: 100%;-->  

![](./img/06.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `填写 Description 及 Bundle ID`<!--rehype:style=color: white; background: #1c7bd0;-->

![](./img/07.png)<!--rehype:style=max-width: 650px;width: 100%;-->

---

## 二. 创建ProvisioningProfiles文件

### `App IDs`<!--rehype:style=color: white; background: #1c7bd0;-->

进入Certificates, Identifiers & Profiles页面，找到 `Profiles`，点击 + 号，选择App Store，点击Continue进入下一步。

![](./img/08.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/09.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `App IDs（Bundle ID）`<!--rehype:style=color: white; background: #1c7bd0;-->

在选项栏中找到刚刚创建的App IDs（Bundle ID）类型套装，选择发布证书，点击Continue进入下一步。

![](./img/10.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/11.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `生成并下载PP文件`<!--rehype:style=color: white; background: #1c7bd0;-->

在 `Provisioning Profile Name` 栏中填入文件名,点击Generate进入下一步，再点击Download下载生成的文件。

![](./img/12.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/13.png)<!--rehype:style=max-width: 650px;width: 100%;-->

---

## 三. 创建新应用

返回Account，找到 `App Store Connect` ，点击 `Go to App Store Connect` 。

![](./img/14.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `MyApp`<!--rehype:style=color: white; background: #1c7bd0;-->

点击 `我的 App` 进入页面，找到 `APP` ，点击 + 号，选择 `新建APP` 开始创建。

![](./img/15.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/16.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `新建App`<!--rehype:style=color: white; background: #1c7bd0;-->

- 选择发布平台
- 填写 `App名称(可以为中文)` 
- 选择语言
- 选取 `已创建的APP IDs-BunDle ID 套装`
- 填写 `项目报名`
- 选择用户访问权限

填写完成后点击 `创建` ，创建成功后点击已创建的项目即可进入项目管理页面。

![](./img/17.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `上传App预览图`<!--rehype:style=color: white; background: #1c7bd0;-->

点击新建的应用进入提交页面，依次提交不同尺寸的图片()。

![](./img/18.png)<!--rehype:style=max-width: 650px;width: 100%;-->

![](./img/19.png)<!--rehype:style=max-width: 650px;width: 100%;-->

> ⚠️ 注意：为更快通过审核图片内容需与APP实际内容相符，且图片同时于 `APP Store应用图片预览` 使用，
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `填写版本信息`<!--rehype:style=color: white; background: #1c7bd0;-->

![](./img/20.png)<!--rehype:style=max-width: 650px;width: 100%;-->

> `宣传文本` 及 `描述`且同时于 `APP Store应用详情简介预览` 使用，
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `构建版本`<!--rehype:style=color: white; background: #1c7bd0;-->

- 通过Xcode将项目打包上传至APP Store后可选择所需构建版本。
- 根据提示填写版权。

![](./img/21.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `App 审核登录信息`<!--rehype:style=color: white; background: #1c7bd0;-->

![](./img/22.png)<!--rehype:style=max-width: 650px;width: 100%;-->

> ⚠️ 注意：如APP需要登录，必须填写测试账号，否则审核无法通过，
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### `App 可本地化的信息`<!--rehype:style=color: white; background: #1c7bd0;-->

找到 `App信息` 根据提示填写APP名称及设置年龄分级等。 

![](./img/23.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `价格与销售范围`<!--rehype:style=color: white; background: #1c7bd0;-->

找到 `价格与销售范围` 根据提示填写 `价格` 、 `销售范围`等信息。 

![](./img/24.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `隐私政策`<!--rehype:style=color: white; background: #1c7bd0;-->

找到 `App 隐私` 填写 `隐私政策网址 (URL)`。 

![](./img/25.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `版本发布 `<!--rehype:style=color: white; background: #1c7bd0;-->

选择 `自动发布` 审核通过后，此版本将立即自动发布，也可选择 `手动发布`。 

![](./img/26.png)<!--rehype:style=max-width: 650px;width: 100%;-->

### `提交审核`<!--rehype:style=color: white; background: #1c7bd0;-->

相关信息填写完成后，即可提交以供审核。 

![](./img/27.png)<!--rehype:style=max-width: 650px;width: 100%;-->

> 🚧  审核通过后，若版本发布为自动发布，APP将自动发布成功，若审核不通过，可点击审批不通过原因，根据审批要求进行相关整改。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->