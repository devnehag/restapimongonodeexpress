const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const url = 'mongodb://127.0.0.1:27017/employee'
mongoose.connect(url,{
       useNewUrlParser:true,
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No Connection");
})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})