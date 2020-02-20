const chalk = require('chalk')
const ora = require('ora')

console.log(chalk.rgb(212,23,33).bgRgb(22,33,44)('hello'))

const spinner = ora(chalk.rgb(212,23,33)('this is a loading')).start()
spinner.color = 'yellow'
setTimeout(function(){
    spinner.stop()
}, 2000)