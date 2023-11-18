import express, { request, response } from "express";
import { PORT, mongoDB } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import ProgramModel from "./models/programModel.js";
import User from "./models/userSchemas.js";
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

app.get("/currentProgram", async (req, res) => {
  try {
    const user = await User.findOne({ firstName: "ravid" });
    res.send(user.currentProgram);
  } catch (error) {
    console.log(error);
  }
});
app.get("/newProgram", async (req, res) => {
  try {
    const exerciseList = await Exercise.find();
    console.log(exerciseList);
    res.send(exerciseList);
  } catch (error) {
    console.log(error);
  }
});
app.get("/programHistory", async (req, res) => {
  try {
    const user = await User.findOne({ firstName: "ravid" });
    console.log(user.programs);
    res.send(user.programs);
  } catch (error) {
    console.log(error);
  }
});