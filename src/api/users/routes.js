import express from 'express';
import validation from './validation.js';
import { createUser, listOfUsers, oneUser, modificarUser, eliminarUser } from './controllers.js';

const usersRouter = express.Router();

usersRouter.post('/users', validation, createUser);
usersRouter.get('/users', listOfUsers);
usersRouter.get('/users/:id', oneUser);
usersRouter.put('/users/:id', modificarUser);
usersRouter.delete('/users/:id', eliminarUser);
  
export default usersRouter;
