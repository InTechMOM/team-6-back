import User from '../../models/users.js';

/**
 * @openapi
 * /api/users:
 *  post:
 *    description: Creation API for users
 *    tags: [User]
 *    parameters:
 *      - name: name
 *        in: formData
 *        type: string
 *      - name: email
 *        in: formData
 *        type: string
 *      - name: rol
 *        in: formData
 *        type: string
 *    responses:
 *      200:
 *        description: User created
 *      400:
 *        description: Bad Request
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