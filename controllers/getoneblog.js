const blogsModel = require('../models/blogsModel')
async function getoneblog(req,res){
    let slug = req.params.slug
    console.log(slug)
    try{
       let result= await blogsModel.findOne({slug})
       if(result != null){
       res.send(result.body)
       }
      else{
        res.status(400).json({'message':"error no data"})
      }
    }catch(err){
        res.status(400).json({"message":"error"})
    }
}
module.exports = getoneblog