// pages/api/me.js
import connectDB from '../../utils/connectDB';
import authMiddleware from '../../middleware/authMiddleware';

connectDB();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const user = await authMiddleware(req, res);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Return the user data (you can customize the data you want to return)
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server Error' });
    }
}
