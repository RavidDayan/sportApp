import express, { request, response } from "express";
import {PORT,mongoDB} from "./config.js"
import mongoose from "mongoose";

const app = express();

app.get('/',(req,res)=>{
    return res.status(234).send(`Welcome home`);
})

mongoose
    .connect(mongoDB)
    .then(()=>{
        console.log('server is connectted');
        app.listen(PORT,()=>{
            console.log(`backend server is listening on port : ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

