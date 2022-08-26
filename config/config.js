const mongoose = require('mongoose')
require('dotenv').config()
function conntectdb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log('connected to db')})
    .catch((err)=>{console.log(err)})
}

module.exports = conntectdb