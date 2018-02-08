/**
 * Created by lisanmei on 2017/11/7.
 */
const path = require('path');
const development = {
    // port: '3333',
    publicPath: '/',
    env: '"development"'
}

const test = {
    port: '3330',
    publicPath: '/',
    env: '"test"'
}

const uat = {
    port: '3000',
    publicPath: '/',
    env: '"uat"'
}

const production = {
    publicPath: '/',
    env: '"production"'
}

module.exports = {development ,test, uat, production}[process.env.NODE_ENV || 'development'];
