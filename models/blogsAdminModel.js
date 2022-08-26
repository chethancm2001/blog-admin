const mongoose = require('mongoose')
let blogsAdminSchema = mongoose.Schema({
    name:{
        type:String,
        unique:[true,"username is already taken"],
        required:[true, "user most have a name"],
       
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        minlength:[6,'password atleast contain 6 charecter']
    },
    isblogadmin:{
        type:Boolean,
        default:true
    },
    url:{
        type:String,
        
    },
    iscreatedat:{
        type:Date,
        default:Date.now,
        required:true
    }

})

let blogAdminModel = mongoose.model("BlogAdmin",blogsAdminSchema)
module.exports = blogAdminModel



