const router = require('express').Router()
const Company = require('./companies-model')
const bcrypt = require("bcryptjs")
const { BCRYPT_ROUNDS } = require("./../../secrets") // use this secret!

// MIDDLEWARE
// const {
//    checkUnusedUsername,
//    hashPass
// } = require('./../../auth/auth-middleware')

// const { verifyPayload } = require('./')

router.get('/', async (req, res) => {
   res.json(await Company.getAllCompanies())
})

router.get('/:company_id', async (req, res, next) => {
   const companyAtId = await Company.getById(req.params.company_id)
   try {
      res.json(companyAtId)
   } catch (err) {
      next(err)
   }
})

// gets users at company
router.get('/:company_id/users', async (req, res, next) => {
   const { company_id, username } = req.params
   const companyAtId = await Company.getAllUsersAtCompany(company_id)
   try {
      if ( !username ){
         next({ message: `You are my first user at your company! Can i have your name, please?`})
      } else res.json(companyAtId)
   } catch (err) {
      next(err)
   }
})

// router.put('/:companyname', async (req, res, next) =>{

// })

module.exports = router