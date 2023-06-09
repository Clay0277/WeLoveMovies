exports.up = function (knex) {
  return knex.schema.createTable("reviews", function (table) {
    table.increments("review_id").primary();
    table.text("content").notNullable();
    table.integer("score").unsigned().notNullable();
    table.string("organization_name");
    table.integer("critic_id").unsigned().notNullable();
    table
      .foreign("critic_id")
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE");
    table.integer("movie_id").unsigned().notNullable();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
