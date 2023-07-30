// pages/protected.js
import { useEffect, useState } from 'react';
import withAuth from '../utils/withAuth';

const ProtectedPage = () => {
    const [user, setUser] = useState(null);



    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('/api/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return <div>Not Logged In </div>;
    }


    // Implement Logout

    const handleLogout = async () => {
        const response = await fetch('/api/logout', {
            method: 'POST',
        });

        if (response.ok) {
            // Redirect to the login page after logout
            window.location.replace('/login');
        }
    };

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};



export default withAuth(ProtectedPage);
