const blogAdminModel = require("../models/blogsAdminModel")
const bcrypt = require('bcrypt');

async function createBlogAdmin(req,res){
    const {name, password} = req.body
   
    if(!name){
        return res.status(409).json({message:"name can not be empty"})
    }
    if(!password){
        return res.status(409).json({message:"password can not be empty"})
    }
    let admins = await blogAdminModel.find({'name':{$eq:name}})
    
    if(admins[0]){
    return res.status(409).json({message:"username is already taken"})
     }
  

    const salt = await bcrypt.genSalt(10);
    let blogadmin = new blogAdminModel({name})
   
    blogadmin.password = await bcrypt.hash(password, salt);
    console.log(blogadmin.password)
    try{
      let result = await blogadmin.save()
       return res.send(result)
    }
    catch(exp){
        if(exp.code == '11000'){
           return res.status(409).json({"message":"username is already prasent"})
            }
           
        return res.status(409).json({message:"error"})
    }
}


module.exports = createBlogAdmin