const blogsAdminModel = require('../models/blogsAdminModel')

async function blogadminlist(req,res){
let listofadmins = await blogsAdminModel.find({}).select('name')
res.send(listofadmins)
}
module.exports = blogadminlist