// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User';

const authMiddleware = async (req, res) => {
    // const token = req.cookies.token;


    const token = (req.headers.authorization.split(' ')[1]).toString()

    console.log("hello", token, req.headers.authorization.split(' '));

    if (!token) {
        return null;
    }

    try {
        const decodedToken = jwt.verify(`${token}`, process.env.SECRET_KEY);

        const user = await User.findById(decodedToken.userId).select('-password');
        return user;
    } catch (error) {
        console.log(error)
        return null;
    }
};

export default authMiddleware;
