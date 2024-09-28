const mongoose=require('mongoose');
const router = require('./routes/student');
const Student = require('./models/Student');

async function connection(){
    try{
        await mongoose.connect('mongodb://localhost:27017/batch-3-view');
        console.log("db is connected.......")
    }catch(err){
        console.log("error is found")
    }
}
module.exports=connection;