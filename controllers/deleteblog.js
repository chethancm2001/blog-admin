let blogAdminModel = require('../models/blogsAdminModel')
let blogsModel = require('../models/blogsModel')

async function deleteblog(req,res){
let admin = blogAdminModel.findById(req.id)
console.log(req.params.id)
let blog = blogsModel.findById(req.params.id)
if(admin._id == blog.author){
    let result = await blogsModel.findByIdAndDelete(req.params.id)
    return res.send(result)
}
return res.send("not same")
}
module.exports =  deleteblog