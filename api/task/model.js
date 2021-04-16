// build your `Task` model here

const db = require('../../data/dbConfig.js'); // imports database

// fetches all data found in tasks table and joins connect projects table data, returning selected columns from both tables
async function getTasks() {
    const data = await db('tasks')
            .join(
                'projects',
                'projects.project_id',
                'tasks.project_id'
                )
            .select(
                'tasks.task_id',
                'tasks.task_description',
                'tasks.task_notes',
                'tasks.task_completed',
                'projects.project_name',
                'projects.project_description'
                )


    return data // variable created to allow for object shape manipulation later if needed
}

// adds passed in data to tasks table and returns that row by querying for the newly generated task_id
async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    return getTasks().where({task_id}).first()
}


//exports helper functions
module.exports = {
    getTasks,
    createTask
}

// [POST] /api/tasks
// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

//  [GET] /api/tasks
// Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
// Each task must include project_name and project_description
// Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]