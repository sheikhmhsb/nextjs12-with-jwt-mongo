// pages/api/logout.js
export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Clear the token (remove it from local storage or use a secure cookie)
    localStorage.removeItem('token');
    return res.status(200).json({ message: 'Logout successful' });
}
