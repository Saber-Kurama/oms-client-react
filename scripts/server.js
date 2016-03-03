require('babel-register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const MemoryFileSystem = require("memory-fs");
const config = require('../webpack/development/client');
const app = express();
const compiler = webpack(config);
const router = express.Router();
const fs = new MemoryFileSystem();
console.log(config.module.loaders);
app.use(express.static(path.join(__dirname ,'../dist/public')));
app.use(router.get('*',function(req, res, next){
  // console.log(req);

  if(req.url.indexOf('/about') >= 0){
    console.log(req.url);
    req.url = '/';
  }


 next();
}))
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));
// app.use('api', require('../src/mock'));


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
