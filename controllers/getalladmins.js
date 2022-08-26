const blogsAdminModel = require('../models/blogsAdminModel')

async function getalladmins(req,res){
 const admins = await blogsAdminModel.find().select('name')
 console.log(admins)
 res.send(admins)

}
module.exports = getalladmins