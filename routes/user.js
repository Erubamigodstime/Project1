const routes = require ('express').Router();
const myController = require('../controllers/controller1');



routes.get('/homepage', myController.homePage);
routes.get('/getall', myController.getAll);
routes.get('/getone/:id', myController.getOne);
routes.post('/create', myController.createUser);
routes.put('/update/:id', myController.updateUser);
routes.delete('/delete/:id', myController.deleteUser);




module.exports = routes