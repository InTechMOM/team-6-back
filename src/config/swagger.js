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
    "./src/controllers/users/post.js",
    "./src/controllers/users/login.js",
    "./src/controllers/users/get.js",
    "./src/controllers/users/put.js",
    "./src/controllers/users/delete.js",
    "./src/controllers/videos/post.js",
    "./src/controllers/videos/get.js",
    "./src/controllers/videos/patch.js",
    "./src/controllers/videos/delete.js",
    "./src/controllers/videos/qualification/patch.js"
]};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);