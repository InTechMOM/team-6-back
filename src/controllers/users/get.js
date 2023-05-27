import User from '../../models/users.js';

/**
 * @openapi
 * /api/users:
 *  get:
 *   summary: Return all users
 *   tags: [User]
 *   parameters:
 *    - in: query
 *      name: name
 *      schema:
 *        type: string
 *    - in: query
 *      name: email
 *      schema:
 *        type: string
 *    - in: query
 *      name: rol
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All users
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/User'
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: Unknown Error
 */

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *   summary: Return a user
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: User
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/User'
 *    404:
 *     description: User Not Found
 *    400:
 *     description: Something went wrong
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */
const listOfUsers = (req, res) => {
  const list = User
    .find()
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