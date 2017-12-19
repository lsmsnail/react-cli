'use strict'
const ora = require('ora'),
    rm = require('rimraf'),
    path = require('path'),
    chalk = require('chalk'),
    config = require('../config'),
    webpack = require('webpack'),
    webpackConfig = require('../build/webpack.build.config');
console.log('NODE_ENV', process.env.NODE_ENV);
const spinner = ora('building for production...');
spinner.start();

rm(path.resolve(__dirname, '../dist'), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
