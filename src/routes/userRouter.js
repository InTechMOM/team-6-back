import express from 'express';
import usersRouter from '../controllers/users/routes.js';

const router = express.Router();
router.use('/users', usersRouter)
router.use((req, res) => {
  res.status(404).send('Error 404: Página no encontrada');
});

export default router;