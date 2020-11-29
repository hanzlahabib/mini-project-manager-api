const express = require('express')
const {tasks : Tasks} = require('../models')
const router = express.Router()


router.get('/', async (req, res) => {
    const projectId = req.body.projectId
    const userId = req.body.userId

    let tasks = await Tasks.find({userId, projectId})
    res.send(tasks)

})


module.exports = router