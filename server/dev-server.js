const path = require('path'),
    express = require('express'),
    app = express(),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('../build/webpack.dev.config.js'),
    config = require('../config'),
    compiler = webpack(webpackConfig);
    port = config.port || 3333;

// app.set('views', path.join(__dirname , '../dist'))
// app.set("view cache",true);
// app.engine('.html', require('ejs').__express)
// app.set('view engine', 'html')

// handle fallback for HTML5 history API
app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static('dist'));
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
}));
app.use(webpackHotMiddleware(compiler));



app.listen(port, (err)=>{
    if (err) {
        console.error(err);
    } else {
        console.log('Open up http://localhost:%s/ in your browser.', port);
    }
});
