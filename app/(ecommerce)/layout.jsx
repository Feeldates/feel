import React from 'react';
import {Navbar} from "@/app/components/general/GeneralComponents";

const Layout = ({children}) => {
    return (
        <div className={"bg-grisclaro"}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Layout;