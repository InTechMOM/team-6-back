import User from '../../models/users.js';

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      role:
 *        type: string
 *     required:
 *      - name
 *      - email
 *      - role
 *     example:
 *      name: Nombre 
 *      lastname: A
 *      email: nombrea@example.com
 *      role: student
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Return all users
 *     tags: [User]
 *     description: Retrieve a list of all users based on optional search criteria.
 *     parameters:
 *       - in: query
 *         name: Name
 *         schema:
 *           type: string
 *         description: Filter users by name.
 *       - in: query
 *         name: Email
 *         schema:
 *           type: string
 *         description: Filter users by email.
 *       - in: query
 *         name: Role
 *         schema:
 *           type: string
 *         description: Filter users by role.
 *     responses:
 *       200:
 *         description: Successful operation. Returns an array of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       400:
 *         description: Bad request. Something went wrong with the request.
 *       500:
 *         description: Internal server error. An unknown error occurred.
 */

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: Return a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: User not found. The specified ID does not exist.
 *       400:
 *         description: Bad request. Something went wrong with the request.
 *       422:
 *         description: Unprocessable entity. The provided ID is not valid.
 *       500:
 *         description: Internal server error. An unknown error occurred.
 */
const listOfUsers = (req, res) => {
  const { name, email, role } = req.query;
  const filters = {
    ...name && { name },
    ...email && { email },
    ...role && { role },
  };
  User
    .find(filters)
    .then((users) => {
      console.log('Usuarios encontrados:', users);
      res.json(users);
    })
    .catch((error) => {
      console.error('Error while getting users:', error);
      res.status(500).json({ error });
    });
};

const oneUser = (req, res) => {
  const { id } = req.params;
  User
    .findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        console.log('Usuario encontrado:', user);
        res.json(user);
      }
    })
    .catch((error) => {
      console.error('Error al buscar el usuario:', error);
      res.status(500).json({ message: "Internal server error" });
    });
};

export { listOfUsers, oneUser };