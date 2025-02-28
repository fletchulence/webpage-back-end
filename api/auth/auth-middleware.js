const User = require('../components/users/users-model');
const bcrypt = require('bcryptjs');
const { BCRYPT_ROUNDS } = require('./../secrets');
const tokenBuilder = require('./helpers');

const { restricted } = require('../secrets/decode')


//REGISTER
const checkUnusedUsername = async (req, res, next) => {
   let { username, password } = req.body;
   if (!username || !password) {
      return next({ status: 400, message: 'username and password required' });
   }
   const [dbUser] = await User.findBy({ username });
   try {
      if (dbUser) {
         return next({ status: 401, message: 'username taken' });
      }
      req.user = req.body;
      next();
   } catch (err) {
      next(err);
   }
};

// to hash the password
const hashPass = async (req, res, next) => {
   let { password } = req.user;
   const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);

   try {
      req.user.password = hash;
      next();
   } catch (err) {
      next(err);
   }
};



//LOGIN
const checkUsernameExists = async (req, res, next) => {
   /*
     If the username in req.body does NOT exist in the database
     status 401
     {
       "message": "Invalid credentials"
     }
   */
   const { username, password } = req.body;
   try {
      if (!username || !password) {
         return next({ status: 400, message: 'Please enter a username and password' });
      }
      const [dbUsername] = await User.findBy({ username });
      if (!dbUsername) {
         next({ status: 401, message: 'Invalid credentials' });
      } else {
         req.user = dbUsername;
         next();
      }
   } catch (err) {
      next(err);
   }
};

const checkPassword = async (req, res, next) => {
   const { password } = req.body;
   const userPass = await User.getById(req.user.user_id);
   try {
      if (userPass && bcrypt.compareSync(password, userPass.password)) {
         req.user.token = tokenBuilder(userPass);
         // req.user = userPass;
         next();
      } else {
         next({ status: 412, message: 'invalid credentials' });
      }
   } catch (err) {
      next(err);
   }
};

const checkToken = async (req, res, next) => {
   // console.log(req)
   // const currentToken = req.headers.authorization
   const { password } = req.body;
   const userPass = await User.getById(req.params.user_id);
   try {
      // if (!currentToken){
         next({ message: 'you dont seem to be logged-in'})
      // } else if (!currentToken.)
      // console.log(req.body)
      // console.log(res)
      req.user = req.body
      if (userPass && bcrypt.compareSync(password, userPass.password)) {
         req.user.token = tokenBuilder(userPass);
         req.user = userPass;
         next();
      } else {
         next({ status: 412, message: 'invalid credentials' });
      }
   } catch (err) {
      next(err);
   }
};




module.exports = {
   checkUsernameExists,
   checkUnusedUsername,
   checkPassword,
   checkToken,
   hashPass
};