const blogsModel = require('../models/blogsModel')
async function getadminblog(req,res){
    id = req.id;
    let result = await blogsModel.find({author:id})
    console.log(result)
    return res.send(result)
}
module.exports = getadminblog