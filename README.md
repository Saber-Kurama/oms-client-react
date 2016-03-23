# oms-client-react

该项目是打算采用react以及antd来做(重构)一个项目,目的是更深入了解react项目的架构和蚂蚁金福antd的UI

# 框架说明

这个项目的架构主要是在 `PartyRooms / Web` 的基础上,并借鉴了`react-redux-starter-kit`和`Sweeto App`

- [PartyRooms / Web](https://github.com/partyrooms/web)
- [react-redux-starter-kit]()
- [Sweeto App]()

# 目录结构

```
.
├── /bin/                                  # 可执行文件
├── /config/                               # 配置文件
├── /coverage/                             # 代码覆盖率测试报告
├── /dist/                                 # 编译输出目录
├── /flow/                                 # flow检查配置
├── /docs/                                 # 文档
├── /gulpfile.js/                          # Gulp 任务目录
├── /node_modules/                         # 3rd-party libraries and utilities
├── /src/                                  # 项目源码
│   ├── /assets/                           # Static files which are copied to ./dist/public on compile
│   │   ├── /images
│   │   ├── /icons/                        # Icons
│   │   ├── /fonts/                        # Additional fonts that used in project
│   ├── /scripts/                          # 项目的scripts代码
│   │   ├── /api/                          # REST API / Relay endpoints
│   │   ├── /client/                       # 客户端渲染的入口
│   │   ├── /components/                   # React 组件
│   │   ├── /decorators/                   # 装饰器目录
│   │   ├── /forms/                        # react 表单组件
│   │   ├── /layouts/                      # 项目的布局
│   │   ├── /lib/                          # 程序的特定代码,实用工具类和函数
│   │   ├── /modules/                      # 项目的数据和逻辑
│   │   ├── /pages/                        # 页面组件
│   │   ├── /routes/                       # 路由配置文件
│   │   ├── /services/                     # 项目所需要的服务接口
│   │   ├── /store/                        # Store 生成函数
│   │   ├── /widets/                       # widget 组件
│   │   └── /index.html                    # 项目主页
│   ├── /styles/                           # 项目样式
│   └── /templates/                        #
├── /webpack/                              # webpack 的配置文件
│   ├── /common                            # 通用配置
│   ├── /development                       # 开发环境的配置
│   └── /production                        # 生产环境的配置
│── browserlist                            #
│── config.js                              # The main configuration file
└── package.json                           # The list of 3rd party libraries and utilities

```


# 开发

  一些方便开发需要安装的工具 (非必须的)

  * [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
  * [http-server](https://www.npmjs.com/package/http-server)

  一些必须安装的

  * [node-mon]()

# 安装

 ```
  npm install

 ```

# 用法

## npm run dev

 ```
  npm run dev # 执行开发环境

 ```

 目前采用的是 nodemon 启用 server.js 的方式