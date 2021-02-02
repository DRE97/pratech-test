import User from '../models/User';

export const checkDuplicatedUser = async (req, res, next) => {

    const {username, email} = req.body;

    const userFound = await User.findOne({username});

    if(userFound) {
        return res.status(200).json({
            message: 'User already exists'
        })
    }

    const emailFound = await User.findOne({email});

    if(emailFound) {
        return res.status(200).json({
            message: 'Email already exists'
        });
    }

    next();

}