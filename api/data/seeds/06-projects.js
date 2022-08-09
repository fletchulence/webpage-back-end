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
        {
          project_name: 'HumanRights First',
          project_role: 'Backend Developer',
          // project_image: underdog_thumb,
          project_linkFor: '',
          project_content: [
             `Collaborated with multiple teams on overall coding standards and testing suites within mentor-driven software development trade school for recently incarcerated individuals`,
             `Created standardized response codes from backend API endpoints to conform to REST best practices which will carry forward for future developer teams`,
             `Revised Jest testing suite to create cohesive test results that better align with response data from user inputs`,
          ],
          project_iconColor: `theme.palette.tertiary.text`,
          project_git_link: 'https://github.com/fletchulence/underdog-devs-be-a#endpoints',
          comments_section: '',
          project_likes: 20
       },
       {
          project_name: 'Potluck Planner',
          project_role: 'Project Manager',
          // project_image: potluck_thumb,
          project_linkFor: 'https://potluck1-front-end.vercel.app/',
          project_content: [
                `Facilitated test-driven development, collaboration between 5 developers, and coordinated project goals in development of React app to facilitate planning of potluck events.`,
                `Utilized GitHub to review component updates, pull-requests, and merge conflicts and deployed via Vercel`,
                `Implemented Axios protected routes and ensured persistence of State management within cloud-native application`,
                `Established styling for responsive hamburger menu using Material-UI and media queries`
          ],
          project_iconColor: '#ef5350',
          project_git_link: 'https://github.com/Potluck-Planner-A/front-end',
          comments_section: '',
          project_likes: 33
       },
       {
          project_id: 3,
          project_name: 'Nasa Photo of the Day',
          project_role: 'Creator',
          // project_image: nasa_thumb,
          project_linkFor: 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
          project_content:  [
                `Went above and beyond on this project -- doesnt look too complex, but this was the first time that i actually worked with pulling from an API. I am very happy with this produ`,
                `Learned to make a calendar output with a form. This was very advanced for the time i started doing it, but i started understanding more and more as time went `,
                `You will notice that nothing in this project is strictly written. All is populated. Fully modular.`
          ] ,
          project_iconColor: 'theme.palette.primary.borders',
          project_git_link: 'https://github.com/fletchulence/nasa-photo-of-the-day',
          comments_section: '',
          project_likes: 10
       },
       {
          project_id: 4,
          project_name: 'African Marketplace',
          project_role: 'Frontend Developer',
          // project_image: african_mp,
          project_linkFor: '',
          project_contentent: [
                ` This was my First experience working on a team and with github`,
                `Used mostly styled components and theme setting to make the frontend for the web page `,
                `The API isnt pulling correctly from the one that was set up, but this was something that happened beacuse we didnt have a proper devoted team member in the backend role. Eventually I want to go back to this and redevelop a backend for it. `
          ] ,
          // project_iconColor: theme.palette.tertiary.text,
          project_git_link: 'https://github.com/Build-Week-ft-african-marketplace-1/front-end/tree/main/african-marketplace',
          comments_section: '',
          project_likes: 4
       },
       {
          project_id: 5,
          project_name: 'Anywhere Fitness',
          project_role: 'Full Stack Developer',
          // project_image: anywhere_thumb,
          project_linkFor: 'https://front-end-chi-livid.vercel.app/',
          project_contentent: [
                `Single-handedly created responsive React platform and designed backend PostgreSQL database for app that enables fitness instructors and students to schedule classes`,
                `Developed Node.js backend of student attendance punch pass system to enable students to track class-specific progress using Knex to seed and populate tables and Express to generate endpoints for frontend hooks`,
                `Assisted Frontend with state and Axios calls to my Heroku database to ensure correct data pull-through `
          ] ,
          project_iconColor: '#ef5350',
          project_git_link: 'https://github.com/Build-Week-Anywhere-Fitness-6-2021',
          comments_section: '',
          project_likes: 25,
       },
      ]);
    });
};
