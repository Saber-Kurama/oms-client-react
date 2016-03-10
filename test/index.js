require('babel-polyfill');

// 加载所有源码。除了 clinet/*.js和server/*.js
const src = require.context('../src/scripts', true, /^((?!(client|server)).)*\.jsx?/);
src.keys().forEach(src);

// 测试框架
const frameworkTests = require.context('./framework', true, /.+\.test\.jsx?$/);
frameworkTests.keys().forEach(frameworkTests);


// 加载所用测试文件
const appTests = require.context('./app', true, /.+\.test\.jsx?$/);
appTests.keys().forEach(appTests);
