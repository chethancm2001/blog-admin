const blogAdminModel = require('../models/blogsAdminModel')

async function checkforadmin(req,res,next){
    let id = req.id
    let result = await blogAdminModel.findById(id)
    
    if(result.isblogadmin){
        next()
    }
   else{
    res.status(404).json({'message':"no access"})
   }
}
module.exports = checkforadmin