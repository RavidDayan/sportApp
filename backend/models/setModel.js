import mongoose from "mongoose";
import Exercise from "./exerciseModel"


const SetSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    exercise: { type: Exercise, required: true },
    sets:{ type: Number, required: true },
    reps: { type: Number, required: true },
    timer: { type: Number },
    result: { type: [Number], default: [0, 0, 0] },
});
const Set = mongoose.model('Set', SetSchema);
export default Set;
