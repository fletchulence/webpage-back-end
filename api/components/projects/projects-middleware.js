const Project = require('./projects-model')

async function checkBody (config, req, res, next) {
   // const { project_likes, project_id } = req.body
   const {project_likes, project_id} = req.params
   const proj = await Project.getById(project_id) 
   try {
      // if (proj.project_id !== project_id){
      //    next({ status: 404, message: `projId's are not equal -> ${proj.project_id} != ${project_id}`})
      // } else if (!proj.project_likes)
      if (!project_id || !proj){
         next({ status: 404, message: `Cant update. This is not a project_id ${project_id}`})
      } else {
         res.json(proj)
         req.projectBody = proj
         next()
      }
   } catch(err) {
      console.error(err.message)
   }
}

async function checkLikesChanged(req, res, next){
   let object = req.projectBody
   

   const { likes } = req.body
   console.log(likes)
   // let newLike = false
   let dbLikes = Project.getById(req.params.project_id)
   console.log(dbLikes)
   if ( req.likes > dbLikes.project_likes){
      req.newLike = true 
      // req.newLikeNumber = dbLikes.project_likes + 1 
      next({ status: 400, message: `you've added a like!`})
   } else (
      next({ status: 404, message: 'likes are the same'})
   )
   next()

   // if ( id != req.body.project_id ){
   //    console.log('you are adding to the wrong id', '||   id=', id, '||   project_id=', project_id )
   // } else {
   //    req.likes = likes
   //    next()
   // }
}


module.exports = {
   checkBody,
   checkLikesChanged
}