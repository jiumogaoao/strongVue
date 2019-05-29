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
  |-alias.js//路径缩写
  |-bundle.js//依赖生成规则
  |-config.js//全局常量配置
  |-external.js//外部文件声明
  |-loader.js//文件加工规则
  |-webpack.config.base.js//全局打包配置
  |-webpack.config.dev.js//dev打包配置
  |-webpack.config.dummy.js//dummy打包配置
  |-webpack.config.preprod.js//preprod打包配置
  |-webpack.config.prod.js//prod打包配置
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

#开发规范

```
##html
```
统一使用VUE,
引用统一使用双对路径（webpack会根据环境自动转换绝对路经）,
注释尽可能齐全（打生产包时会自动去掉）
可以通过eslint自动检查
```
##js
```
尽量使用ES6+，
control和component入口在vue文件内，
使用require或import引入依赖，
统一使用双对路径，
注意模块拆分封装，
注释尽可能齐全，
可以通过eslint自动检查,
```
##css
```
统一使用scss,
引用统一使用双对路径
control和component入口在vue文件内，
使用@import引入依赖，
一般无需处理兼容性（posscss会自动处理），
无需处理自适应（参考src/subProject/index/template自动处理自适应），
长度单位一般用px,
注意模块拆分封装，
注释尽可能齐全，
可以通过eslint自动检查,
```
##control
```
命名末尾统一‘_CT’，
按设计需求组织component，
按业务需求组织API及页面逻辑，
组织store缓存并分发，
注意拆分component，
```
##component
```
命名末尾统一‘_CP’，
按设计需求提取共性，
明确出入口数据需求，
内部自闭，
禁止使用vueX,
保持代码洁净，可重用可迁移
```
##store
```
命名末尾统一‘_ST’，
按业务需求组织前端数据模型,
注意模块拆分，
```
##util
```
命名末尾统一‘_UT’，
注意归纳逻辑共性，
纯函数，禁止操作UI,
可重用可迁移
```
##dummy
```
必须与后端API返回格式相符，
以API名命名
```
