import {PORT,mongoDB} from "../../backend/config.js";
import mongoose from "mongoose";

try{
    await mongoose.connect(mongoDB);
    console.log("db connected succesfully")
}
catch(error){
console.log(error);
}
