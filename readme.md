# 简介
oh my blog是一个基于leancloud的serverless开源博客框架。
现已提供一下功能，更多功能开发中，即将上线～
* 用户注册/登录系统
* 文章管理
* 资源管理
* 评论系统
* 发布动态
* 支持主题自定义

[官网地址：https://omb.todokit.xyz](https://omb.todokit.xyz)

[Github地址：https://github.com/joe-lz/oh-my-blog](https://github.com/joe-lz/oh-my-blog)


# 快速开始

## 准备服务器

### 注册leancloud
注册leancloud[国内版](https://leancloud.cn/)或[国际版](https://leancloud.app/)
区别：国内版访问速度快，域名要备案

### 准备域名
* 方案一：注册域名
* 方案二：[申请jser.blog免费子域名](https://github.com/joe-lz/jser.blog)（该域名未备案，因此仅支持国际版）

### 创建leancloud项目
创建开发版即可，有免费赠送使用量

### 绑定域名
[leancloud=>项目=>设置=>域名绑定]
注意⚠️：
* 国内版本需要绑定3个域名，国际版本2个域名
* 云引擎域名就是你的网站域名

![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/e068be10714fab982f0d.jpg)

### 创建 Class
[leancloud=>项目=>存储=>创建class]
* CMS_Articles
* CMS_Collects
* CMS_Comments
* CMS_Likes
* CMS_Menus
* CMS_Posts
* CMS_Profile
* CMS_Topics
* CMS_UserInfo

![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/318490347dfd79c5152d.jpg)

### 设置Web安全域名
![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/c634de76d0b727ecd2ce.jpg)

### 自动部署设置
  ![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/6f85dc4b10b717555992.jpg)
### 设置leancloud环境变量
YOUR_LEANCLOUD_SERVER_URL：你的api绑定域名
![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/23e61a36c0b91a038024.jpg)

## 准备代码
### fork仓库
https://github.com/joe-lz/oh-my-blog

### 修改代码部分配置参数
* 替换.leancloud/current_app_id 为自己项目id
    [leancloud=>项目=>设置=>应用keys]
* 如果你使用国内版leancloud，请替换.github/workflows/deploy.yml中的触发自动部署的地址
  ![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/1e60e5ad279b2b10e1d0.jpg)

### 创建Github Secrets
* 创建LEANCLOUD_DEPLOY_TOKEN

  1、取自：[leancloud=>项目=>云引擎=>部署=>自动部署=>deploy token]
  ![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/6f85dc4b10b717555992.jpg)
  
  2、创建：[github=>项目=>Settings=>Secrets]
  ![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/ee84de296b12437ea2b5.jpg)
* 创建PERSONAL_ACCESS_TOKEN：a Github [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

### 提交变动代码至master，自动出发部署

# 主题
## 如何更换主题？
修改omb.config.js文件，将对应的前后台替换为相应主题的github名称即可
![](https://lc-gluttony.s3.amazonaws.com/xac008ks23rB/927ca0532775f60c93eb.jpg)

## 如何开发主题？
请参考：
* 前台页面默认主题[joe-lz/ombTheme-simple-www](https://github.com/joe-lz/ombTheme-simple-www)
* 后台页面默认主题[joe-lz/ombTheme-white-admin](https://github.com/joe-lz/ombTheme-white-admin)

# 常用地址
* 前台地址：https://your-domain 或 https://your-domain/www/home
* 后台地址：https://your-domain/admin/home

⭐️ 觉得不错留个Start呗～⭐️ [Github地址](https://github.com/joe-lz/oh-my-blog)