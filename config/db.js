const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async ()=>{
try{
  await  mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    console.log("Mongo DB is connected...")
}catch(err){
    console.error(err.meassage);
    process.exit(1);
}
   
};

module.exports = connectDB;


