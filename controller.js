import User from '../../models/users.js';

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
    .then((users) => {
      console.log('Usuarios encontrados:', users);
      res.json(users);
    })
    .catch((error) => {
      console.error('Error while getting users:', error);
      res.status(500).json({ error });
    });
};

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

const eliminarUser = (req, res) => {
  const { id } = req.params;
  User
    .remove({ _id: id })
    .then((users) => {
      console.log('Usuarios encontrados:', users);
      res.json(users);
    })
    .catch((error) => {
      console.error('Error while getting users:', error);
      res.status(500).json({ error });
    });
};

export { createUser, listOfUsers, oneUser, modificarUser, eliminarUser };