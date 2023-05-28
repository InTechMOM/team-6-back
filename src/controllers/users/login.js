import User from '../../models/users.js';
import User from "../../../models/user.js";
import { schemaLogin } from "./validation.js";

/**
 * @openapi 
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email.
 *         role:
 *           type: string
 *           description: The user's role.
 *       required:
 *         - email
 *         - role
 *       example:
 *         email: docente@example.com
 *         role: Teacher
 */

/**
 * @openapi
 * /api/login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - email
 *               - role
 *             example:
 *               email: docente@example.com
 *               role: Teacher
 *     responses:
 *       201:
 *         description: User login successful
 *       400:
 *         description: Unauthorized access
 *       500:
 *         description: Unknown error
 */

const login = async (request, response, next) => {
try {
  const {error} = schemaLogin.validate(request.body);
  if (error) { 
  return response.status(400).json({error: "Bad Request"}) 
  };
  const userValidation = await User.findOne({ email:request.body.email , rol:request.body.rol }) 
  if (!userValidation)
  return response.status(400).json({error: "Unauthorized Access"});
   response.status(200).json("Welcome " + userValidation.name)
  } catch (error) { 
    next (error);
  };
}

export default login ;