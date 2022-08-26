const blogAdminModel = require('../models/blogsAdminModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
async function blogsAdminLogin(req,res){
    const {name,password} = req.body
    try{
       let result = await blogAdminModel.findOne({name})
       if(result != null){
     bcrypt.compare(password,result.password,(err,resu)=>{
     
     if(resu){
        let token = jwt.sign({id:result._id},process.env.SECRET_KEY)
        res.json({token})
     }
     else{
        res.status(401).json({"error":"invalid password"})
     }
     })
       
       } 
       else{
        res.status(401).json({"error":"invalid name"})
       }
    }
    catch(err){
        res.send(err)
    }
}
module.exports = blogsAdminLogin