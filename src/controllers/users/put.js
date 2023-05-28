import User from '../../models/users.js';

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User updated successfully
 *       400:
 *         description: Bad request. Something went wrong
 *       404:
 *         description: User not found
 *       422:
 *         description: Invalid ID
 *       500:
 *         description: Unknown error
 */

const modificarUser = (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, rol } = req.body;
  User
    .updateOne({ _id: id }, { $set: { name, lastname, email, rol } })
    .then((users) => {
      console.log('Usuarios encontrados:', users);
      res.json(users);
    })
    .catch((error) => {
      console.error('Error while getting users:', error);
      res.status(500).json({ error });
    });
};

export { modificarUser };