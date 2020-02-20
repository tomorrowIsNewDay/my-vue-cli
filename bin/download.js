const fs = require('fs')
const chalk = require('chalk')
const ora = require('ora')

module.exports = function(answer) {
 // fs.readFile / fs.readdir
 // 第一种思路：递归读写，如果是文件夹，则递归读取，直到文件为止
 // 第二种思路： 数据来驱动, 用递归实现路径记录
    // 抽象出一层来描述，类似vnode, 主要思路大开
    //  [{type: 'flie', path: './server.js'}, {type: 'dir',path: "./src"}, {type: 'file', path: './src/index.html',...}]
    const demopath = './project'
    const targetpath = './' + answer
    const ob = []
    function downdemo() {
        fs.mkdir(targetpath, function() {
            pushArr(demopath)

            ob.forEach(item => {
                if(item[0] == 'file') {
                    fs.readFile(item[1], function(err, data) {
                        fs.writeFile(targetpath+'/'+item[1].replace('./project', '.'), data, function(){})
                    })
                }else{
                    fs.mkdir(targetpath+'/'+item[1].replace('./project','.'), function(){})
                }
            })

        })
    }

    function pushArr(path) {
        var files = fs.readdirSync(path)
        files.forEach(function(item, index){
            var nowpath = path+'/'+item
            var stat = fs.statSync(nowpath)
            if(stat.isDirectory()){
                ob.push(['dir', nowpath])
                pushArr(nowpath)
            }else{
                ob.push(['file', nowpath])
            }
        })

        // fs.readdir(path, function(files){
        //     // files: [src, server.js]
        //     files.forEach((item, index) => {
        //         fs.stat(path+'/'+item, (err, stat) => {
        //             if(stat.isDirectory()) {
        //                 ob.push(['dir', path])
        //                 // 递归
        //                 pushArr(path+'/'+item)
        //             }else {
        //                 ob.push(['file', path])
        //             }
        //         })
        //     })
        // })
    }
    downdemo()
}