let mongoose = require("mongoose")
let superAdminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
      type:Boolean,
      default:true
    }
})

let AdminModel = mongoose.model('Admin',superAdminSchema)
module.exports = AdminModel