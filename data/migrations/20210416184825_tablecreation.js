
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128)
            .unique()
            .notNullable()
        tbl.string('project_description')
        tbl.boolean('project_completed')
            .default(0)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name')
            .unique()
            .notNullable()
        tbl.string('resource_description')
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description')
            .notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed')
            .default(0)
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('project_resources', tbl => {
        tbl.increments('connection_id')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
