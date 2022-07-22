const db = require('./../../data/db-config')

async function getAllCompanies() { 
   const rows = await db('companies as c')
      .join('users as u', 'c.company_id', 'u.user_id')
      .select(
         'c.company_name',
         'u.username'   
      )
      .where('u.role_id', 3); 
   return rows
}

async function getAllUsersAtCompany(company) { 
   const rows = await db('companies_users as cu')
      .join('users as u', 'u.user_id', 'cu.user_id')
      .join('companies as c', 'c.company_id', 'cu.company_id')
      .select(
         'u.username',
         'c.company_name' 
      )
      .where('cu.company_id', company); 
   return rows
}

async function insertUser(company) {
   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
   const [newCompanyObject] = await db('companies').insert(company, ['company_id', 'company_name', 'company_password'])
   return newCompanyObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}


function getById(company_id) {
   return db('companies')
      .where({ company_id })
      .first();
}

// honestly i think a filter would be useful so lets build it
function findBy(filter) {
   return db('companies')
      .select('company_id', 'company_name')
      .where(filter);
}

async function add(element) {
   const [ newUserObj ] = await db("companies").insert(
      {
         company_name: element.company_name,
         company_password: element.password,
         role_id: element.role_id ? element.role_id : 3 , 
      }, [
        'company_name', 
        'company_password', 
        'role_id' 
       ]
    ).orderBy("companies.company_name")
   return newUserObj
}

module.exports = {
   getAllCompanies,
   getAllUsersAtCompany,
   getById,
   add,
   findBy,
   insertUser
}
