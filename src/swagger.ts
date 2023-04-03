import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { Application } from 'express-serve-static-core';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Music',
      version: '1.0.0',
      description: 'API to manage music',
      contact: {
        name: 'My name',
        email: 'my-email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsDoc(options);

export default (app:Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};