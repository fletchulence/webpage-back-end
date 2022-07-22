const Project = require('./projects-model')

function checkBody (req, res, next) {
   const { project_likes, project_id } = req.body
   // console.log(req.bo÷dy)
   const id = req.params.project_id
   // let updates = { id: req.body.project_id , likes: req.project_likes }
   try {
      Project.getById(req.params.project_id) 
      
      if (!project_likes){
         next({ message: 'where are your likes'})
      } else if (!project_id){
         next({ message: 'where are your project_id'})
      } 
      // else {
      //    next()
      // }
      
      // should check separately
      if ( id != req.body.project_id ){
         console.log('you are adding to the wrong id', '||   id=', id, '||   project_id=', project_id )
      } else {
         req.likes = project_likes
         next()
      }

      // if ( project_id != updates.id ) {
      //    console.log('the heck you tryna do', db_info, updates)
      // } else {
      //    let diff = db_info.project_likes - updates.likes  
      //       res.json({ diff: diff, message: 'you added to likes?' })
      // }
   } catch(err) {
         console.error(err.message)
   }
      // console.log()
   // }
   // if ( current.likes != updates.likes ){
   //    next({ totalLikes: current.likes + 1 })
   // }
}

async function checkLikesChanged(req, res, next){
   // const { likes } = req.body
   // let newLike = false
   const dbLikes = await Project.getById(req.params.project_id)
   if ( req.likes > dbLikes.project_likes){
      req.newLike = true
      // req.newLikeNumber = dbLikes.project_likes + 1 
      next({ message: `you've added a like!`})
   } else (
      next({ message: 'likes are the same'})
   )

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