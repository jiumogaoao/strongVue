#安装
下载安装nodejs 10
pull git
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
#运行
假数据环境（热更新 不生成文件）
npm run dummy
开发环境(热更新 不生成文件)
npm run dev
打包前检查（生成文件，不转换路径）
npm run preprod
打包（生成文件，转换路径）
npm run prod
#文件结构
|-strongVue //项目文件夹
 |-.git //git配置
 |-build //打包配置
 |-dist //打包生成文件
 |-node_modules //nodejs库
 |-src //开发源文件
  |-assets //共用静态文件
  |-component //控件
  |-dummy //假数据
  |-page //页面（每个项目开一个文件夹）
  |-util //工具库
 |-template //主模板，图标
 |-.babelrc //babel配置
 |-.editorconfig //编辑器配置，可以忽略
 |-.eslintrc //格式检查配置
 |-.gitattributes //git属性文件，可以忽略
 |-.gitignore //上传忽略文件
 |-dummyList.js //自动获取dummy路径，生成dummyList.json
 |-filelist.js //自动获取文件路径
 |-package-lock.json //nodejs库下载路径，可以忽略
 |-package.json //nodejs配置
 |-postcss.config.js //postcss配置
 |-README.md //说明文档
 |-webpack.config.js //webpack入口
