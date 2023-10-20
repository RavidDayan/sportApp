import mongoose from "mongoose";
import Set from "./setModel";

const ProgramSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    routine: { type: [Set], required: true },
    record: { type: [Set], default: [] },
    startDate: { type: Date, default: new Date() },
    endDate: { type: Date },
});
const Program = mongoose.model('Program', ProgramSchema);
export default Program;
