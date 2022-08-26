const AdminModel = require('../models/superAdminModel')
const jwt = require('jsonwebtoken')
async function superadminlogin(req,res){
    const {name,password} = req.body
    console.log({name,password})
    try{
       let result = await AdminModel.findOne({name,password})
       
       if(result != null){
        let token = jwt.sign({id:result._id},process.env.SECRET_KEY)
        res.json({token})
       } 
       else{
        res.status(401).json({"error":"invalid name/password"})
       }
    }
    catch(err){
        res.send(err)
    }
}
module.exports = superadminlogin