// utils/auth.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Secret key to sign the JWT token. Keep it safe.
const secret = 'your-secret-key';

// Generate a JWT token for the user
export const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, secret, {
        expiresIn: '1h', // Token expiration time (1 hour in this example)
    });
};

// Verify the JWT token and return the user object if it's valid
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return null;
    }
};

// Hash the user password before saving to the database
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Compare the provided password with the hashed password in the database
export const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
