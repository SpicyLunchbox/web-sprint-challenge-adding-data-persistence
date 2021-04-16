// build your `/api/projects` router here

const express = require('express'); //imports express
const Projects = require('./model.js'); //imports helper functions

const router = express.Router(); //creates router using express

//queries for all rows in projects table, and sends that data to the client via json
router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})


//creates new project using helper function and sends that newly created project to client as an object
router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})


// .catch in all prior router functions will trigger this function
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router


// [POST] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

//  [GET] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]