import express from 'express';
import usersRouter from './api/users/routes.js'

const router = express.Router();
router.use('/api/users', usersRouter)
router.use((req, res) => {
  res.status(404).send('Error 404: Page not found');
});

export default router;