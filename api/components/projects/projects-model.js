const db = require('./../../data/db-config')

function getAllProjects() { return db('projects') }

// async function getLikesById(likes) { 
//    const rows = await db('companies_users as cu')
//       .join('users as u', 'u.user_id', 'cu.user_id')
//       .join('companies as c', 'c.company_id', 'cu.company_id')
//       .select(
//          'u.username',
//          'c.company_name' 
//       )
//       .where('cu.company_id', company); 
//    return rows
// }

// async function insertUser(company) {
//    // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//    // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//    const [newCompanyObject] = await db('companies').insert(company, ['company_id', 'company_name', 'company_password'])
//    return newCompanyObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

// async function find(something, nextThing) {
//    await db('projects')
//       .where({ something })
//       .select({ nextThing })
   
// }


function getById(project_id) {
   return db('projects')
      .where({ project_id })
      .first();
}

function getLikesById(project_id) {
   return db('projects')
      .where({ project_id })
      // .first()
      .select("projects.project_likes")

   // await find(project_id, 'project_likes')
   // // let likes = await find(project_id, 'project_likes') 
   // // let id = getById(project_id)
   // // let likes =  
   // // return likes
   // return db('projects')
   //    .where({ project_id })
   //    .select('projects.project_likes')
   //    .first();
}

// honestly i think a filter would be useful so lets build it
// function findBy(filter) {
//    return db('companies')
//       .select('company_id', 'company_name')
//       .where(filter);
// }

async function updateProject(project_id, changes){
   await db('projects')
      .update(changes)
      .where({ project_id })
     
   const updated = getById(project_id)
   return updated
}


// async function add(element) {
//    const [ newUserObj ] = await db("projects").insert(
//       {
//          company_name: element.company_name,
//          company_password: element.password,
//          role_id: element.role_id ? element.role_id : 3 , 
//       }, [
//         'company_name', 
//         'company_password', 
//         'role_id' 
//        ]
//     ).orderBy("companies.company_name")
//    return newUserObj
// }

module.exports = {
   getAllProjects,
   // getAllUsersAtCompany,
   getLikesById,
   getById,
   updateProject,
   // findBy,
   // insertUser
}
