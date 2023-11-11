import { v4 as uuidv4 } from 'uuid';
import { squat, deadlift, press, benchPress, pullUp } from "./exerciseData.js";
import SetModel from "../backend/models/setModel.js"

const setData = [];
const data1 = new SetModel({
    id: uuidv4(),
    exercise: squat,
    sets: 3,
    reps: 5,
    timer: 60,
    result: [0, 0, 0]

});

const data2 = new SetModel({
    id: uuidv4(),
    exercise: deadlift,
    sets: 1,
    reps: 5,
    timer: 60
});

const data3 = new SetModel({
    id: uuidv4(),
    exercise: press,
    sets: 3,
    reps: 5,
    timer: 60,
});

const data4 = new SetModel({
    id: uuidv4(),
    exercise: benchPress,
    sets: 3,
    reps: 5,
    timer: 60,
});

const data5 = new SetModel({
    id: uuidv4(),
    exercise: pullUp,
    sets: 3,
    reps: 8,
    timer: 60,
});
setData.push(data1);
setData.push(data2);
setData.push(data3);
setData.push(data4);
setData.push(data5);

export default setData;