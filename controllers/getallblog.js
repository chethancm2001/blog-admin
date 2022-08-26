const blogsModel = require('../models/blogsModel')
async function getallblog(req,res){
let result = await blogsModel.find({})
res.send(result)
}

module.exports = getallblog