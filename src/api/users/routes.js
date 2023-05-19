import express from 'express';
import validation from './validation.js';
import { createUser } from './post.js';
import { listOfUsers, oneUser } from './get.js';
import {  modificarUser } from './put.js';
import { eliminarUser } from './delete.js';

const usersRouter = express.Router();

usersRouter.post('/', validation, createUser);
usersRouter.get('/', listOfUsers);
usersRouter.get('/:id', oneUser);
usersRouter.put('/:id', modificarUser);
usersRouter.delete('/:id', eliminarUser);
  
export default usersRouter;