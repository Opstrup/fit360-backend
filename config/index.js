const config = {};

/**
 * Prod settings for application
 */
if (process.env.ENV == 'prod') {
    config.mongo = {
        url: 'mongodb://fit360:tyTvzpBaESNRwi2UYUQQmihScxxOqNg9xrghxWX1gS1c218zWnyrtxxHxeUw819FxjSwXxF87sgp7HBBhRfPug==@fit360.documents.azure.com:10250/?ssl=true'
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