const express = require('express')
const routes = require('./routes/route')
const conntectdb = require('./config/config')
const cors = require('cors')
const app = express()

app.use(cors({origin:"*"}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',routes)

conntectdb()

const port = 4000;
app.listen(port,(err)=>{
    if(!err){
        console.log("server is runing")
    }
})