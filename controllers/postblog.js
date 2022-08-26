const blogsModel = require('../models/blogsModel')
const blogAdminModel = require('../models/blogsAdminModel')
async function postblog(req,res){
const {title,body} = req.body

let slug = title.replace(/ /g,'-')
const id = req.id

let result = await blogAdminModel.findOne({_id:id})
if(result != null){
    
    if(result.isblogadmin== false){
       return res.status(401).json({'error':'unautharided'})
    }
}
try{
  
    let blog = new blogsModel({title,slug,body,author:req.id})
    let result = await blog.save()
   return res.send(result)
}
catch(exp){
   if(exp.code == '11000'){
      return res.status(409).json({"message":"title  is already taken"})
   }
   else{
   return res.json({'message':"blog can't be saved retry"})
   }
}
}
module.exports = postblog