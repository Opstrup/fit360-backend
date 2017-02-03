var app = require('./app');
var config = require('./config');

const port = config.webservice.port;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
