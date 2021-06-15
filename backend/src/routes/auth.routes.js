const { Router } = require('express');
const usersController = require('../controllers/usersController')();
const passport = require('passport');

function authRouter(){

    const authRoutes = Router();

    authRoutes.post('/signup', passport.authenticate('signup', { session: false }), 
    usersController.createOne);

    authRoutes.post('/login', usersController.login);

    authRoutes.post('/token', usersController.token);

    authRoutes.post('/logout', usersController.logout);

    authRoutes.get('/profile', usersController.profile);

    authRoutes
    .route('/user')
    .get(usersController.getAllUsers)

    authRoutes
    .route('/user/:userId')
    .get(usersController.getById)
    .put(usersController.updateById)
    .delete(usersController.deleteById);

    return authRoutes;
}

module.exports = authRouter();