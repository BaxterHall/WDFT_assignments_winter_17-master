
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('cars',function(table){
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('make');
        table.string('model');
        table.integer('year');
        table.integer('dealership_id');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cars')
  
};
