const jwt = require('jsonwebtoken')
const AdminModel = require('../models/superAdminModel')
function authsuperadmin(req,res,next){
    let token = req.headers.authorization
    console.log(token)
    if(token != null){
        jwt.verify(token,process.env.SECRET_KEY,async (err,user)=>{
        if(err){
            console.log(err)
        return res.status(401).json({"message":"unautharized"})
        }
        else{
            req.id = user.id
            console.log(user)
            let result = await AdminModel.findById(req.id)
            console.log(result)
            if(result){
               
              next()
            }
            else{
                res.status(400).json({"message":"unauthazied"})
            }
            
        }
       })
    }else{
        return  res.status(401).json({"message":"unautharized"})
    }

}
module.exports = authsuperadmin
