/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fishtanks').del()
    .then(function () {
      // Inserts seed entries
      return knex('fishtanks').insert([
        { fishtanks_name: 'Pond'},
        { fishtanks_name: 'Not Pond'},
      ]);
    });
};
