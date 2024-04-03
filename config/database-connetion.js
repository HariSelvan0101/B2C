const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect("mongodb+srv://hariselvan545:hariselvan545@cluster0.logfsdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('data base connected')
})
.catch((err)=>{
    
    console.log(err)
})
