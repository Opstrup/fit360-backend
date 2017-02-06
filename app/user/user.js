const config = require('../../config');
const userModel = require('./user.model');

const initUser = (app) => {
    app.get('/', helloWorld);
    app.post('/user', createUser);
    app.get('/profile', getProfile);
}

const createUser = (request, response, next) => {
    let newUser = new userModel(request.body);
    newUser.save();
    response.send(newUser._id);
}

const helloWorld = (request, response, next) => {
    response.json({
        message : 'Hello World!',
        data : 'this could be data'
    })
}

const getProfile = (request, response, next) => {
    response.json({
        username : 'John Doe',
        password : '123456'
    })
}

module.exports = initUser;