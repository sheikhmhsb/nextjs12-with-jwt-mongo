// utils/withAuth.js
import { useEffect } from 'react';
import Router from 'next/router';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                Router.push('/login');
            }
        }, []);

        return <Component {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;
