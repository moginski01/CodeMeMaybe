const express = require('express')

// controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login',loginUser)

//login route
router.post('/signup', signupUser)

// signup
module.exports = router

