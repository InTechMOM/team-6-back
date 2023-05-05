import express from 'express';
import validation from './validator.js';
import { createUser, listOfUsers, oneUser, modificarUser, eliminarUser } from './controller.js';

const usersRouter = express.Router();

async function initRouter() {
  await import('../../router.js');

  router.post('/users', validation, createUser);
  router.get('/users', listOfUsers);
  router.get('/users/:id', oneUser);
  router.put('/users/:id', modificarUser);
  router.delete('/users/:id', eliminarUser);
}

initRouter();

export default usersRouter;
