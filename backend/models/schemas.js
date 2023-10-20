import mongoose from "mongoose";
import Program from "./programModel";
import Weighting from "./weightingModel";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: [Weighting] },
    programs: { type: [Program] },
    currentProgram: { type: Program },
});
const User = mongoose.model('User', UserSchema);
export default User;
