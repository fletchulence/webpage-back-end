/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { role_id: 1, username: 'david', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 2, username: 'sara', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 2, username: 'debra', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 2, username: 'fletcher', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        /* 5 */{ role_id: 3, username: 'Chewy-Amanda', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        /* 6 */{ role_id: 3, username: 'Chewy-Alan', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        /* 7 */{ role_id: 3, username: 'Chewy-Audrey', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 3, username: 'Tesla-Jimmy', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 3, username: 'Tesla-Bob', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 3, username: 'MS-Bob', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 3, username: 'MS-Robert', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
        { role_id: 3, username: 'JPMC-Angie', password: '$2a$08$dyA1S.XdgJYbzu8XxIHVdORRN5jbcPc1hgKRlZsta2Hr93lh34TKy' },
      ]);
    });
};
