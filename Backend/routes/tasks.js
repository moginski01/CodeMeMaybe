const express = require('express')
const {
    getTasks,
    addTask
} = require('../controllers/tasksController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all workouets
router.get('/tasks', getTasks)

router.post('/tasks/new_task', addTask)


module.exports = router