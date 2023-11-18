import mongoose from "mongoose";
import {exerciseSchema} from "./exerciseModel.js"


export const SetSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    exercise: { type: exerciseSchema, required: true },
    sets:{ type: Number, required: true },
    reps: { type: Number, required: true },
    timer: { type: Number },
    result: { type: [Number], default: [0, 0, 0] },
});
const SetModel = mongoose.model('Set', SetSchema);
export default Set;
