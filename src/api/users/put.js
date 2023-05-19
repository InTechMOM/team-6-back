import User from '../../models/users.js';

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *    summary: Update a user
 *    tags: [User]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The user id
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/UserUpate'
 *    responses:
 *     201:
 *      description: User Update
 *     400:
 *      description: Something went wrong
 *     404:
 *      description: User Not Found
 *     422:
 *      description: Id Not Valid
 *     500:
 *      description: UnKwnown Error 
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