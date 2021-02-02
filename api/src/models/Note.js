import {Schema, model} from 'mongoose';

const NoteSchema = new Schema({
    title: String,
    description: String
}, {
    timestamps: true
})


export default model('note', NoteSchema);
