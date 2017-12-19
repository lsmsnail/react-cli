const path = require('path'),
    express = require('express'),
    app = express(),
    config = require('../config'),
    port = config.port || 3333;

console.log('NODE_ENV', process.env.NODE_ENV);
// app.set('views', path.join(__dirname , '../dist'))
// app.set("view cache",true);
// app.engine('.html', require('ejs').__express)
// app.set('view engine', 'html')

// handle fallback for HTML5 history API
app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static('dist'));

app.listen(port, (err)=>{
    if (err) {
        console.error(err);
    } else {
        console.log('Open up http://localhost:%s/ in your browser.', port);
    }
});
