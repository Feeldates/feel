import React from 'react';
import NavBarProfile from "@/app/components/profile/NavBarProfile";
import ProtectedRoute from "@/app/ProtectedRoute";

const Layout = ({children}) => {
    return (
        <ProtectedRoute>
            <div className={"overflow-hidden relative flex"}>
                <NavBarProfile></NavBarProfile>
                {children}
            </div>
        </ProtectedRoute>
    );
};

export default Layout;