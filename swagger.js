const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contact API',
    description: 'This Api is for managing contact'
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);

