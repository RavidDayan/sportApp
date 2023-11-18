import express, { request, response } from "express";
import session from "express-session";
import { PORT, mongoDB, sessionSecretKey } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import ProgramModel from "./models/programModel.js";
import User from "./models/userSchemas.js";
import Exercise from "./models/exerciseModel.js";

const app = express();
app.use(cors());
app.use(
  session({
    secret: sessionSecretKey,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
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
app.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (email === "hello@gmail.com" && password === "walla") {
      req.session.user ={email};
      res.send("successfulLogin");
    } else {
      res.send("unsuccessfulLogin");
    }
  } catch (error) {
    console.log(error);
  }
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
