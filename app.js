const express = require('express');
const app = express();

// use a middleware that comes packaged with express for statically serving files]
let staticMiddleware = express.static('public');

app.use(staticMiddleware);

app.get('/', (req, res) => {
    //res.send("hello express!");
    res.redirect(301, '/index.html');
});

app.set('port', process.env.PORT || 5000);

let server = app.listen(app.settings.port, ()=>{
    console.log("server is ready on", app.settings.port);
});
