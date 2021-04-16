// build your `Resource` model here

const db = require('../../data/dbConfig.js')


// fetches all data found in resources table
function getResources() {
    return db('resources')
}
// adds passed in data to resources table and returns that row by querying for the newly generated resource_id
async function createResource(resource) {
    const [resource_id] = await db('resource').insert(resource)
    return getResources().where({resource_id}).first()
}


//exports helper functions
module.exports = {
    getResources,
    createResource
}

// [POST] /api/resources
// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

//  [GET] /api/resources
// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]