const blogAdminModel = require('../models/blogsAdminModel')
const jwt = require("jsonwebtoken")
async function getblogadmin(req,res){
    let token = req.headers.authorization
    console.log(token)
    if(token == null){
        return res.status(400).json({error:"please login in again"})
     }
     else{
         jwt.verify(token,process.env.SECRET_KEY,async (err,userid)=>{
             if(err == null){
               id = userid.id
             let result = await blogAdminModel.findById(id)
             let name = result.name
             res.json({name})
             }
             else{
             return res.status(400).json({message:"please login in"})
             }
         })
     }

}
module.exports = getblogadmin