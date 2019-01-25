const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./mongodb/UserController');

const app = express();
const DB_URL = 'mongodb://codesmith:ilovetesting1@ds040167.mlab.com:40167/cs26_demo';

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true },
  err => {
    if (err) throw new Error(err);
  }
);
mongoose.connection.once('open', () => {
  console.log('DB Connection Established');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = express.Router();

userRouter.get('/:name', userController.getUser);

userRouter.post('/', userController.setUser);

userRouter.patch('/:name', userController.updateUser);

userRouter.delete('/:name', userController.deleteUser);

app.use('/auth', userRouter);

app.listen(3000, () => 'Listening on 3000');
