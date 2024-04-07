const routes = require('express').Router();
const user = require('./user');
const swaggerRoutes = require('./swagger')


routes.use('/', swaggerRoutes)
routes.use('/users', user);
// routes.use(
//   '/',
//   (docData = (req, res) => {
//     let docData = {
//       documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
//     };
//     res.send(docData);
//   })
// );

module.exports = routes;
