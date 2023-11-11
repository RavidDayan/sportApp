import mongoose from "mongoose";

const weightingSchema = new mongoose.Schema({
    weight: { type: String, unique: true },
    date: { type: Date, default: new Date() },
});
const Weighting = mongoose.model('Weighting', weightingSchema);
export default Weighting;
