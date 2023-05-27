import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MVP - InTechMom',
      version: '1.0.0',
    },
  },
  apis: [
    'app.js',
    "./src/api/users/post.js",
    "./src/api/users/login.js",
    "./src/api/users/get.js",
    "./src/api/users/put.js",
    "./src/api/users/delete.js",
    "./src/api/videos/post.js",
    "./src/api/videos/controllers/get.js",
    "./src/api/videos/controllers/patch.js",
    "./src/api/videos/controllers/delete.js",
    "./src/api/videos/controllers/qualification/patch.js"
]};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);