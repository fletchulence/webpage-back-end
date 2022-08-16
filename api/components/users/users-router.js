const router = require('express').Router()
const User = require('./users-model')

// MIDDLEWARE
// const {
//    checkUnusedUsername,
//    hashPass
// } = require('./../../auth/auth-middleware')

// const { verifyPayload } = require('./')

router.get('/', async (req, res) => {
   res.json(await User.getAllUsers())
})

router.get('/:user_id', async (req, res, next) => {
   const userAtId = await User.getById(req.params.user_id)
   try {
      res.json(userAtId)
   } catch (err) {
      next(err)
   }
})



module.exports = router