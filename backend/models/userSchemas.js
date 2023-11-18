import mongoose from "mongoose";
import {ProgramSchema} from "./programModel.js";
import {weightingSchema} from "./weightingModel.js";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: [weightingSchema] },
    programs: { type: [ProgramSchema] },
    currentProgram: { type: ProgramSchema },
});
const User = mongoose.model('User', UserSchema);
export default User;
