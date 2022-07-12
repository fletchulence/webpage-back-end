const db = require('./../../data/db-config')

function getAllUsers() { return db('users') }

async function insertUser(user) {
   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

//todo /////// aslfjhasjkdfh kajs ======a s///////

// this will get the user for appropriate login ?
function getById(user_id) {
   return db('users')
      .where({ user_id })
      .first();
}
// honestly i think a filter would be more useful so lets build it
function findBy(filter) {
   return db('users')
      .select('user_id', 'username')
      .where(filter);
}

async function insert(user) {
   const [ newUserObj ] = await db("users").insert(
      {
         username: user.username,
         password: user.password,
         role_id: user.role_id ? user.role_id : 1 , //! trying to fix errs
      }, [
        'username', 
        'password', 
        'role_id' //! trying to fix errors
       ]
    ).orderBy("users.role_id")
   return newUserObj
}

module.exports = {
   getAllUsers,
   getById,
   insert,
   findBy,
   insertUser
}