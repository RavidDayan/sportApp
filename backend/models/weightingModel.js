import mongoose from "mongoose";

const weightingSchema = new mongoose.Schema({
    weight: { type: String, unique: true },
    date: { type: Date, default:Date.now },
});
const Weighting = mongoose.model('Weighting', weightingSchema);
export default Weighting;
