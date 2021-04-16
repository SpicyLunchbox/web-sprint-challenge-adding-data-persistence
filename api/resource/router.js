// build your `/api/resources` router here

const express = require('express');
const Resources = require('./model.js')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

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