import User from '../../models/users.js';

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: lupe
 *               email:
 *                 type: string
 *                 example: lupe@email.com
 *               role:
 *                 type: string
 *                 example: student
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Bad request. Invalid data provided.
 */
const createUser = (req, res) => {
  const user = new User({
    ...req.body,
    createdAt: new Date().toISOString()
  });
  user
    .save()
    .then((user) => {
      console.log('Usuario creado:', user);
      res.status(201).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};

export { createUser };