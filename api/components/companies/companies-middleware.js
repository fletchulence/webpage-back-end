// const Company = require()

const verifyCompany = (req, res, next) => {
   const { role_id, companies_name, companies_person_name } = req.body
   if ( role_id === 3 ){
      if ( !companies_name ){
         return next({ message: 'I need the company name so that i may show you the correct info' })
      } else if ( companies_name && !companies_person_name ){
         return next({ message: `Hey friend, I see you're from ${companies_name}, but what is your first name?` })

      } else next()
   } else next()
}



module.exports = {
   verifyCompany
}