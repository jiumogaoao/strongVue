#安装

下载安装nodejs 10
```
pull git
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```
#运行

假数据环境（热更新 不生成文件）
```
npm run dummy
```
开发环境(热更新 不生成文件)
```
npm run dev
```
打包前检查（生成文件，不转换路径）
```
npm run preprod
```
打包（生成文件，转换路径）
```
npm run prod
```
#文件结构
```
|-strongVue //项目文件夹
 |-.git //git配置
 |-build //打包配置（必须）
 |-dist //打包生成文件
 |-node_modules //nodejs库
 |-src //开发源文件（必须）
  |-assets //共用静态文件（必须）
  |-component //控件（必须）
  |-dummy //假数据（必须）
  |-subProject //页面（每个项目开一个文件夹）（必须）
   |-[projectName] //子项目（必须）
    |-control //control文件夹
     |-[controlName].vue //control文件
    |-store //store文件夹
     |-store.js //store入口
     |-[storeName].js //store文件
    |-index.js //子项目入口（必须）
    |-router.js //子项目路由
    |-style.scss //子项目全局scss
    |-template.vue //子项目外框
  |-util //工具库
 |-template //主模板，图标（必须）
 |-.babelrc //babel配置（必须）
 |-.editorconfig //编辑器配置，可以忽略
 |-.eslintrc //格式检查配置（必须）
 |-.gitattributes //git属性文件，可以忽略
 |-.gitignore //上传忽略文件
 |-dummyList.js //自动获取dummy路径，生成dummyList.json（必须）
 |-filelist.js //自动获取文件路径（必须）
 |-package-lock.json //nodejs库下载路径，可以忽略
 |-package.json //nodejs配置（必须）
 |-postcss.config.js //postcss配置（必须）
 |-README.md //说明文档
 |-webpack.config.js //webpack入口（必须）
```

#开发流程

```
##创建子项目
```
src/subProject/目录下创建子项目文件夹，
可从index文件夹复制或自行配置，
```
##创建命令
```
package.json 中添加script,
可参考devP1/dummyP1/preprodP1/buildP1，
分别添加对应打包命令，
将--project值改成对应子项目名，
```
##创建假数据
```
获取后台API返回格式，
src/dummy/中添加mock data,
每api一个，
可参考homepage@getAllCitys.js
```
##创建数据模型
```
按需求模块才分，
src/subProject/[projectName]/store/中各模块添加一个js，
并合并至src/subProject/[projectName]/store/store.js，
可参考src/subProject/index/store/store.js和src/page/index/store/user_ST.js，
```
##创建UI模块
```
按设计需求，
抽取重用率高的视觉交互元素，
src/component/中每模块创建一个文件夹，
vue及scss参考src/component/vuextest_CP/\*.\*
```
##创建工具库
```
从开发中抽取高频操作或高复杂度操作，
在src/util/中，
按功能组织成库，
可参考src/util/request_UT.js
```
##创建router及control（仅单页面，多页面应用每页为一个子项目）
```
src/subProject/[projectName]/control/中，
每一页添加一个control,
可参考src/subProject/index/control/home_CT.vue，
按需求在src/subProject/[projectName]/route.js中设置路由，
可参考src/subProject/index/route.js
```
##页面组织
```
按设计需求使用component组织页面，
按业务需求调用API,
并将数据存放于Store,
从Store将数据分发至各component
```
