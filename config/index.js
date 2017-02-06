const config = {};

/**
 * Prod settings for application
 */
if (process.env.ENV == 'prod') {
    config.mongo = {
        url: 'mongodb://api-fit360-mongodb:PE1cB425j8decmXTAF4XuQDFrf2J1bcry93qJamsm7kwYvr08T44JOm1vR3ReMqeI2Fb8gIwJh7zXRe5JvcaIg==@api-fit360-mongodb.documents.azure.com:10250/?ssl=true'
    };
    config.webservice = {
        port: process.env.PORT
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