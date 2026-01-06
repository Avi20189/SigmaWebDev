import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    isDone: Boolean
});

const ToDo = mongoose.model('ToDo', TodoSchema);


export default ToDo;