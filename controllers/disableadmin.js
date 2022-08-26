let blogsAdminModel = require('../models/blogsAdminModel')

async function disableadmin(req,res){
let id = req.params.id
console.log(id)
try{
 let result = await blogsAdminModel.findByIdAndUpdate(id,{isblogadmin:false})
 console.log(result)
res.send(result)
res.send(id)
}
catch(exp){
    res.status(400).json({"message":"error"})
}

}

module.exports = disableadmin