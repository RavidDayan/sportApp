import mongoose from "mongoose";
import {SetSchema} from "./setModel.js";

export const ProgramSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    routine: [{ type: SetSchema,default:{}}],  // Using references to "Set" model
    record: [{ type: [SetSchema],default:[]}], // Reference to "Set" model
    startDate: { type: Date, default: new Date() },
    endDate: { type: Date },
});
const ProgramModel = mongoose.model('Program', ProgramSchema);
export default ProgramModel;
