module.exports = {
  showUserForm: function (req, res) {
    return res.view('pages/crudUserForm');
  },

  create: async function (req, res) {
    try {
      const newUser = await Usuario.create(req.body).fetch();
      res.status(201).json(newUser);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
    try {
      // Formata os dados
      let formattedUserData = {
        name: req.body.name,
        email: await sails.helpers.formatEmail(req.body.email),
        password: req.body.password
      };
      const newUser = await Usuario.create(formattedUserData).fetch();
      res.status(201).json(newUser);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },
  read: async function (req, res) {
    try {
      const user = await Usuario.findOne({ id: req.params.id });
      if (!user) {throw new Error('Usuário não encontrado');}
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  update: async function (req, res) {
    try {
      const updatedUser = await Usuario.updateOne({ id: req.params.id }).set(req.body);
      if (!updatedUser) {throw new Error('Usuário não encontrado');}
      res.json(updatedUser);

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
