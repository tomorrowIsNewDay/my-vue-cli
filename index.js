#!/usr/bin/env node
const cm = require('commander')
const iq = require('inquirer')
// 自定义指令
cm.version('1.0.0', '-v, --version')
cm.option('-a -atest', 'this is test')
// vue-cli init projectname
cm.command('init <name>').action((name) => {
    // console.log(name)
    iq.prompt([{
        type: 'input',
        name: 'author',
        message: '你叫什么名字？'
    }]).then(answers => {
        // console.log(answers)
        require('./bin/download.js')(answers.author)
    })
})
// 关键执行，在定义命令之后
cm.parse(process.argv)