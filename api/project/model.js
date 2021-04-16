// build your `Project` model here

const db = require('../../data/dbConfig.js');

function getProjects() {
    return db('projects')
}



async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    return getProjects().where({project_id}).first();
}

module.exports = {
    getProjects,
    createProject
};


// [POST] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

//  [GET] /api/projects
// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]