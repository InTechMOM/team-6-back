import User from '../../models/users.js';

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [User]
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to delete.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the deleted user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 987
 *               name: Nombre A
 *               email: nombrea@example.com
 *       400:
 *         description: Bad request. Something went wrong with the request.
 *       404:
 *         description: User not found. The specified ID does not exist.
 *       422:
 *         description: Unprocessable entity. The provided ID is not valid.
 *       500:
 *         description: Internal server error. An unknown error occurred.
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