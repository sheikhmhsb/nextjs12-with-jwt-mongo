
import React from 'react';
import NavigationHeader from './header';

const Layout = ({ children }) => {
    return (
        <div>
            <NavigationHeader />
            <main>{children}</main>
        </div>
    );
};

export default Layout;