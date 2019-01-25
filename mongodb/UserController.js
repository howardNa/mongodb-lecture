/**
 * Need the following methods
 * 1. getUser
 * 2. setUser
 * 3. updateUser
 * 4. deleteUser
 */
const User = require('./UserModel');

const userController = {};

userController.getUser = (req, res) => {
  User.find({ username: req.params.name }).then(result => {
    res.send(result);
  });
};

userController.setUser = (req, res) => {
  User.create(req.body).then(result => {
    res.send(result);
  });
};

userController.updateUser = (req, res) => {
  User.findOneAndUpdate({ username: req.params.name }, { $set: req.body }, { new: true }).then(
    result => {
      res.send(result);
    }
  );
};

userController.deleteUser = (req, res) => {
  User.findOneAndDelete({ username: req.params.name }).then(result => {
    res.send(result);
  });
};

module.exports = userController;
