const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', userController.home)
router.get('/registration', userController.registration)
router.post('/registration', userController.createDoc)
router.get('/login', userController.login)
router.post('/login', userController.validateLogin)

module.exports = router
