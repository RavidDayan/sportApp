import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    description: { type: String, required: true },
});
const Exercise = mongoose.model('Excercise', exerciseSchema);

const SetSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    excercise: { type: Exercise, required: true },
    reps: { type: Number, required: true },
    timer: { type: Number },
    result: { type: [Number], default: [0, 0, 0] },
});
const Set = mongoose.model('Set', SetSchema);

const ProgramSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    routine: { type: [Set], required: true },
    record: { type: [Set], default: [] },
    startDate: { type: Date, default: new Date() },
    endDate: { type: Date },
});

const Program = mongoose.model('Program', ProgramSchema)

export const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: [weighting] },
    programs: { type: [Program] },
    currentProgram: { type: Program },
});
