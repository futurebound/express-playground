const { Router } = require('express')
const usersController = require('../controllers/usersController')
const usersRouter = Router()

usersRouter.get('/', usersController.usersListGet)

// Create Users routes
usersRouter.get('/create', usersController.usersCreateGet)
usersRouter.post('/create', usersController.usersCreatePost)

// Update Users routes
usersRouter.get('/:id/update', usersController.usersUpdateGet)
usersRouter.post('/:id/update', usersController.usersUpdatePost)

// Delete Users
usersRouter.post('/:id/delete', usersController.usersDeletePost)

// Search for users by email
usersRouter.get('/search', usersController.usersSearch)

module.exports = usersRouter
