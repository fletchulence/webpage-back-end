/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fed_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('fed_history').insert([
        {
          // fishtank_day_fed: 10,
          fishtanks_fed: true, 
          user_id: 1,
          fishtanks_id: 1
        },
        {
          // fishtanks_day_fed: 10,
          fishtanks_fed: true, 
          user_id: 2,
          fishtanks_id: 2
        },
        {
          // fishtanks_day_fed: 10,
          user_id: 1,
          fishtanks_id: 2
        },
        {
          // fishtanks_day_fed: 10,
          // fishtanks_fed: false, 
          user_id: 1,
          fishtanks_id: 1
        },
        {
          // fishtanks_day_fed: 10,
          fishtanks_fed: true, 
          user_id: 1,
          fishtanks_id: 1
        },
        // {
        //   cal_day_date: 11,
        //   cal_day_of_week: 'Monday', 
        //   all_fish_fed: true
        // },
        // {
        //   cal_day_date: 12,
        //   cal_day_of_week: 'Tuesday', 
        //   all_fish_fed: false
        // },
        // {
        //   cal_day_date: 13,
        //   cal_day_of_week: 'Wednesday', 
        //   all_fish_fed: true
        // },
        // {
        //   cal_day_date: 14,
        //   cal_day_of_week: 'Thursday', 
        //   all_fish_fed: true
        // },
        // {
        //   cal_day_date: 15,
        //   cal_day_of_week: 'Friday', 
        //   all_fish_fed: true
        // },
        // {
        //   cal_day_date: 16,
        //   cal_day_of_week: 'Saturday', 
        //   all_fish_fed: true
        // }

      ]);
    });
};

