// const Company = require()

const verifyPayload = (req, res, next) => {
   const { username, password, role_id } = req.body
   if( !username || !password ){
      return next({ message: 'You forgot to include necessary information -- either email, password, or username' })
   } else if ( !role_id ){
      return next({ message: 'Please reach out to me to set permissions for your journey.' })
   } else next()
}

module.exports = {
   verifyPayload,
}