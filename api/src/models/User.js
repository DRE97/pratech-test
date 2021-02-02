import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    birth: String,
    gender: String,
    city: String,
    checked: String,
}, {
    timestamps: true
})


userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model('user', userSchema);