import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('student', 'teacher').required(),
});

export const validationUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const loginSchema = Joi.object({
  email: Joi.string().required().min(5).max(40).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  role: Joi.string().required().valid('teacher', 'student') // Actualicé los valores aquí
});

export const validationLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};