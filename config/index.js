const config = {};

/**
 * Prod settings for application
 */
if (process.env.ENV == 'prod') {
    config.mongo = {
        url: 'mongodb://prod/fit360'
    };
    config.webservice = {
        port: '8080'
    };
} else {
    config.mongo = {
        url: 'mongodb://localhost/fit360'
    };
    config.webservice = {
        port: ( process.env.PORT || '3000' )
    };
}

module.exports = config;