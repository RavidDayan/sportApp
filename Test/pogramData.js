import setData from "./setData.js";
import { v4 as uuidv4 } from 'uuid';
import ProgramModel from "../backend/models/programModel.js";

export const programData = new ProgramModel({
    id: uuidv4(),
    name:"starting Strength",
    routine: setData
});