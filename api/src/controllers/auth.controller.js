import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signup = async (req, res) => {
    //console.log(req.body);
    const {
        username,
        email,
        password,
        birth,
        gender,
        city,
        checked
    } = req.body;
    
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
        birth,
        gender,
        city,
        checked
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {expiresIn: 7200});

    res.status(200).json({token: token, savedUser});

}

export const signin = async (req, res) => {
    const {email, password} = req.body;

    const userFound = await User.findOne({email: email});

    if(!userFound) {
        return res.json({message: 'User not found'})
    }

    const verifyPassword = await User.comparePassword(password, userFound.password);

    if(!verifyPassword) {
        return res.json({message: 'Invalid password'})
    }

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 7200
    });
    console.log(req.body);
    res.status(200).json({token: token, username: userFound.username, userId: userFound._id});
}

export const getUserData = async (req, res) => {
    console.log(req.params.id);
    
    const userId = req.params.id;

    const user = await User.findById(userId);

    res.send(user);

}