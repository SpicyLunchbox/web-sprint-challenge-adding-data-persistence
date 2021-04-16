// build your `Project` model here

const db = require('../../data/dbConfig.js'); // imports database


// fetches all data found in projects table
function getProjects() { 
    return db('projects')
}


// adds passed in data to projects table and returns that row by querying for the newly generated project_id
async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    return getProjects().where({project_id}).first();
}


//exports helper functions
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