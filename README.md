#### 手动定制vue-cli

#### 安装插件
> npm install chalk ora commander inquirer --save
chalk: log不同颜色字体
ora: 显示控制条
inquirer: 交互提问
commander: 自定义命令相关

#### 构建 cli
- 下载项目初始化模版
    1. 输入初始化命令
    自定义命令 mycli
    mycli 在package.json中配置，  
    头部加上 #!/usr/bin/env node
    > npm link
    2. 执行交互
    3. 下载模版
    4. 完整的工程化

- 定义项目规则
- 定义项目操作命名

### 工程化
1. 命令行工具 cli
2. 规范（ 代码规范）typescript
3. 测试 
4. 构建打包webpack
5. 集成与部署(junks)
6. 代码管理（gitlab）


### 脚手架的三类包
- 全局命令包， 安装在全局， 本例 为 mycli
    提供安装命令， install, init, build, dev
    安装在本地的 .my-cli 文件夹
    #### 命令
    install	帮用户安装/升级一个「模板插件包」
    init	帮用户初始化一个工程，并拷贝模板
    build	调用工程中的「构建插件包」，帮用户webpack构建
    dev	帮用户启动 devServer 进行调试
    
- 模版插件包
    提供init初始化的项目模版
    使用version版本管理
    支持模版的扩展
    安装在本地 的 .my-cli 文件夹的node-modules 中
- 构建插件包
    提供构建的能力
    去npm 仓库安装到 新建的项目中
    npm i build-tpl@latest -S --registry=https://registry.npm.taobao.org

#### ps
for 和 forEach
for 循环 处理异步 会有经典的闭包问题
forEach 则不会
var arr = [1,2,3]
for(var i =0;i< arr.length; i++) {
    setTimeout(function(){
        console.log(i)
    }, 1000)
}
// 3 3 3

arr.forEach(function(item, index){
    setTimeout(function(){
        console.log(item)
    }, 1000)
})
//1 2 3
