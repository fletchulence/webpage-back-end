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
        { company_name: 'Chewy', company_password: '123abc' },
        { company_name: 'Morgan Stanley', company_password: '123abc' },
        { company_name: 'Tesla', company_password: '123abc' },
        { company_name: 'Apple', company_password: '123abc' },
        { company_name: 'Facebook', company_password: '123abc' },
        { company_name: 'JPMC', company_password: '123abc' },
        { company_name: 'Blue Origin', company_password: '123abc' },
        { company_name: 'Home Depot', company_password: '123abc' },
        { company_name: 'Motorola', company_password: '123abc' },
      ]);
    });
};
