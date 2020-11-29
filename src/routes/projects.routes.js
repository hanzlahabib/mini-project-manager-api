const express = require('express')
const db = require('../models')
const router = express.Router()


router.post('/create', (req, res) => {
    const post = new db.projects({
        name: req.body.name,
        createdAt: req.body.createdAt || new Date(),
        userId : req.body.userId
    })
    
    post.save((err, post) => {
        if(err){
            res.statusCode(500).send({message: err})
        }
        res.send(post)
    })

})

router.put('/', (req, res) =>{
    const project = {
     name: req.body.name   
    }
    const id = req.body.id
    db.projects.findByIdAndUpdate(id, project, (err, updated) => {
        if(err) {
            res.statusCode(500).send({message: err})
        }
        res.send(updated)
    })
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    console.log(id)
    db.projects.findByIdAndDelete({_id: id}, (err, response) => {
        if(err){
            res.statusCode(500).send(err)
        }
        res.send(response)
    })
})

router.get('/', async (req, res) => {
    const allProjects = await db.projects.find()
    res.send(allProjects)
})

module.exports = router