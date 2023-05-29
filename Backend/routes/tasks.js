const express = require('express')
const {
    getTasks,
    getMyTasks,
    asignTask,
    addTask
} = require('../controllers/tasksController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all workouets
// router.get('/', getTasks)
router.post('/', getTasks)
router.patch('/', asignTask)

router.post('/new_task', addTask)
router.post('/my_tasks', getMyTasks)


module.exports = router
