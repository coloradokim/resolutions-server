import { lchmod } from "fs";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posting', table => {
    table.increments();
    table.text('title');
    table.integer('price');
    table.text('location');
    table.text('description');
    table.integer('size');
    table.
  });
};

exports.down = function(knex, Promise) {};
