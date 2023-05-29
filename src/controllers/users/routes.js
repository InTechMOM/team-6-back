import express from 'express';
import { validationUser } from '../validation/validationUser.js';
import { login } from './login.js';
import { createUser } from './post.js';
import { listOfUsers, oneUser } from './get.js';
import {  modificarUser } from './put.js';
import { eliminarUser } from './delete.js';

const usersRouter = express.Router();

usersRouter.post('/', login);
usersRouter.post('/', validationUser, createUser);
usersRouter.get('/', listOfUsers);
usersRouter.get('/:id', oneUser);
usersRouter.put('/:id', modificarUser);
usersRouter.delete('/:id', eliminarUser);
  
export default usersRouter;