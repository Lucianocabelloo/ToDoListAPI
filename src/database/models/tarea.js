import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    Task: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    }
})

const Task = mongoose.model("Task", tareaSchema);
export default Task;