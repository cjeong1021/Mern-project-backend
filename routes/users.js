const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const userController = require('../controllers/users');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post(
  '/signup',
  [check('name', 'Name should be atleast 3 characters').isLength({ min: 3 })],
  [check('email', 'Email should be valid').isEmail()],
  [
    check('password', 'Password should be atleast 8 characters').isLength({
      min: 8,
    }),
  ],
  userController.signup
);
router.post('/signin', userController.signin);
router.put('/:id', userController.edit);
router.delete('/:id', userController.delete);
router.put('/:id', userController.follow);

module.exports = router;
