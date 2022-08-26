const mongoose = require('mongoose')

let blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'title can not be empty'],
        unique:[true,"title already taken"]
    },
    slug:{
     type:String,
     required:true,
     unique:true
    },
    body:{
     type:String,
     required:true
    },
    createdat:{
       type:Date,
       default:Date.now,
       required:true
    },
    ispublished:{
        type:Boolean,
        default:true,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'BlogAdmin',
        required:true,
    }
})

let blogsModel = mongoose.model('Blogs',blogSchema)

module.exports = blogsModel