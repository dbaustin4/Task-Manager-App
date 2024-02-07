import {ITask} from '../src/types/tasks';
import {model, Schema} from 'mongoose';

const taskSchema = new Schema ({
name:{
type: String,
required: true
},
description: {
type: String,
required: true
},
status: {
type: String,
required: true
}
},
{timestamps: true}
)
export default model('Task', taskSchema);