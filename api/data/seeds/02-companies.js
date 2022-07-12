/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        { companies_name: 'Chewy'  },
        { companies_name: 'Morgan Stanley' },
        { companies_name: 'Tesla'},
        { companies_name: 'Apple' || "Apple Inc"},
        { companies_name: 'JP Morgan'},
        { companies_name: 'JPMC'},
        { companies_name: 'Blue Origin'},
      ]);
    });
};
