const config = {};

/**
 * Prod settings for application
 */
if (process.env.ENV == 'prod') {
    config.mongo = {
        url: 'https://fit360.documents.azure.com:443/'
    };
    config.webservice = {
        port: '80'
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