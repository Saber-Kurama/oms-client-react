require('babel-register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const MemoryFileSystem = require("memory-fs");
const config = require('../webpack/development/client');
const appconfig = require('../config');
const app = express();
const compiler = webpack(config);
const router = express.Router();
const fs = new MemoryFileSystem();
const routes = require('./routes/index');
console.log('??/');
console.log(appconfig);
app.use(express.static(path.join(__dirname ,'../dist/public')));
app.use('/api', routes);
app.use(router.get('*',function(req, res, next){

  //console.log(req);


  if(/\.js$/.test(req.url) || /\.css$/.test(req.url) ||
    /\.(jpe?g|png|gif)(\?.+)?$/i.test(req.url) ||
    /\.woff(\?.+)?$/.test(req.url) ||
    /\.woff2(\?.+)?$/.test(req.url) ||
    /\.ttf(\?.+)?$/.test(req.url) ||
    /\.eot(\?.+)?$/.test(req.url) ||
    /\.svg(\?.+)?$/.test(req.url) ||
    /\.json(\?.+)?$/.test(req.url) ||
    req.url === '/__webpack_hmr'
    //req.url === '/'
  ){
    console.log(req.url);

  }else {
    console.log('--------------' + req.url)
    req.url = '/';
  }

  // if(req.url.indexOf('/about') >= 0){
  //   req.url = '/';
  // }


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


app.listen(appconfig.server.port, appconfig.server.host, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${appconfig.server.url}`);
});
