const express = require('express')
const router = express.Router()

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    showId
} = require('../controllers/todoController');

const authentication = require('../middleware/authentication');
const { route } = require('./users');

router.get('',authentication,getTasks);
router.post('/create',authentication,createTask);
router.get('/:id/show',authentication,showId);
router.put('/:id/update',authentication,updateTask);
router.delete('/:id/delete',authentication,deleteTask);


module.exports = router;