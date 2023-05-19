import User from '../../models/users.js';

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *   summary: Delete a user
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
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: User Not Found
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */
const eliminarUser = (req, res) => {
  const { id } = req.params;
  User
    .remove({ _id: id })
    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        console.log('Usuarios eliminados:', result);
        res.json({ message: "User deleted successfully" });
      }
    })
    .catch((error) => {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ error });
    });
};

export { eliminarUser };