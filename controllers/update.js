let blogAdminModel = require('../models/blogsAdminModel')
let blogsModel = require('../models/blogsModel')

async function update(req,res){
let admin = blogAdminModel.findById(req.id)
let blog = blogsModel.findById(req.params.id)
console.log(req.body.body)
if(admin._id == blog.author){
    let result = await blogsModel.findByIdAndUpdate(req.params.id,{body:req.body.body})
    return res.send(result)
}
return res.send("not same")
}
module.exports =  update