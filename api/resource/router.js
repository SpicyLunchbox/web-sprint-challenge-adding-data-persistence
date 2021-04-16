// build your `/api/resources` router here

const express = require('express'); //imports express
const Resources = require('./model.js') //imports helper functions

const router = express.Router(); //creates router using express


//queries for all rows in resources table, and sends that data to the client via json
router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})


//creates new resource using helper function and sends that newly created resource to client as an object
router.post('/', (req, res, next) => {
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
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

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

//  [GET] /api/resources
// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]