/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies_users').insert([
        { company_id: 3, user_id: 9 },
        { company_id: 3, user_id: 8 },
        { company_id: 1, user_id: 5 },
        { company_id: 1, user_id: 6 },
        { company_id: 1, user_id: 7 },
        { company_id: 2, user_id: 10},
        { company_id: 2, user_id: 11 },
        { company_id: 6, user_id: 12 },
      ]);
    });
};
