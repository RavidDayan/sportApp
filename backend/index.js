import express, { request, response } from "express";
import { PORT, mongoDB } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { programData } from "../Test/pogramData.js";
import ProgramModel from "./models/programModel.js";
import Exercise from "./models/exerciseModel.js";

const app = express();
app.use(cors());
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("server is connectted");
    app.listen(PORT, () => {
      console.log(`backend server is listening on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.get("/currentProgram", (req, res) => {
  try {
    const program = ProgramModel.find().then((result) => {
      res.send(result);
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
});
