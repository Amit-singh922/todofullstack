/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
    return knex.schema.createTable('videos', (table) => {
      table.increments()
      table.string('name')
      table.string('url')
      table.boolean('watched')
      });
  };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('videos')
  
};
