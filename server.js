// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();
var compression = require('compression');

const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./'));
// app.use('/manifest.json', express.static('manifest.json'));
// app.use('/offline_001.html', express.static('offline_001.html'));
// app.use('/dados.json', express.static('dados.json'));
// app.use('/service-worker.js', express.static('service-worker.js'));
// app.use('/app.js', express.static('app.js'));
// app.use('/favicon.ico', express.static('favicon.ico'));
// app.use('/images', express.static('images'));
// app.use('/node_modules', express.static('node_modules'));

routes(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});