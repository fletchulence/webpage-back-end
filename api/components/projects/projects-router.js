const router = require('express').Router();
const Project = require('./projects-model')

const {
   checkBody,
   checkLikesChanged
} = require('./projects-middleware')

router.get('/', async (req, res) => {
   res.json(await Project.getAllProjects())
})

router.get('/:project_id', async (req, res, next) => {
   const userAtId = await Project.getById(req.params.project_id)
   try {
      res.json(userAtId)
   } catch (err) {
      next(err)
   }
})

router.get('/:project_id/likes', async (req, res, next) => {
   let { project_id } = req.params
   // let { project_likes } = req
   const projectLikes = await Project.getLikesById(project_id)
   try {
      res.json(projectLikes)
   } catch (err) {
      next(err)
   }
})

// updateLikes
router.put('/:project_id/likes', 
   checkBody, 
   checkLikesChanged,
   async (req, res, next) =>{
   // const { project_likes } = req.body
   const { project_id } = req.params
   // let newNumber = req.newLikeNumber
   try{
      // console.log(newNumber)
      const updatedProject = await Project.updateProject(project_id, req.body)
      res.json(updatedProject)
   } catch (err){
      next(err)
   }
})

// router.put('/:id', validateUserId, validateUser, (req, res, next) => {
//    // RETURN THE FRESHLY UPDATED USER OBJECT
//    // this needs a middleware to verify user id
//    // and another middleware to check that the request body is valid
//    Users.update(req.params.id, req.body)
//      .then(user =>{
//        res.status(200).json(user)
//      })
//      .catch(err =>{
//        next(err)
//      })
//  });



module.exports = router;