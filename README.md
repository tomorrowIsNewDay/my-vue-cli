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
