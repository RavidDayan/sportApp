import mongoose from "mongoose";

export const exerciseSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    description: { type: String, required: true },
});
const Exercise = mongoose.model('Excercise', exerciseSchema);
export default Exercise;

