// build your `Resource` model here

const db = require('../../data/dbConfig.js')

function getResources() {
    return db('resources')
}

async function createResource(resource) {
    const [resource_id] = await db('resource').insert(resource)
    return getResources().where({resource_id}).first()
}

module.exports = {
    getResources,
    createResource
}

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

//  [GET] /api/resources
// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]