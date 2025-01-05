// controllers/usersController.js
const { body, validationResult } = require('express-validator')
const usersStorage = require('../data/usersStorage')

const alphaErr = 'must only contain letters.'
const lengthErr = 'must be between 1 and 10 characters.'

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
]

// We can pass an entire array of middleware validations to our controller.
exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).render('createUser', {
        title: 'Create user',
        errors: errors.array(),
      })
    }
    const { firstName, lastName } = req.body
    usersStorage.addUser({ firstName, lastName })
    res.redirect('/')
  },
]

exports.usersListGet = (req, res) => {
  res.render('index', {
    title: 'User list',
    users: usersStorage.getUsers(),
  })
}

exports.usersCreateGet = (req, res) => {
  res.render('createUser', {
    title: 'Create user',
  })
}

exports.usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body
  usersStorage.addUser({ firstName, lastName })
  res.redirect('/')
}