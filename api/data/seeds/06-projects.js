/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Human Rights First', project_likes: 10 },
        { project_name: 'Potluck Planner', project_likes: 50 },
        { project_name: 'African Marketplace', project_likes: 20 },
        { project_name: 'Nasa Photo of the Day', project_likes: 6 },
        { project_name: 'Anywhere Fitness', project_likes: 100 },
      ]);
    });
};
