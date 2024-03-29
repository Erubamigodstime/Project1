const routes = require ('express').Router();
const myController = require('../controllers/controller1');
// const { getData } = require('../controller1.js');



routes.get('/', myController.homePage);
routes.get('/user', myController.getAll);
routes.get('/:id', myController.getOne);



module.exports = routes