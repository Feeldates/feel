import React from 'react';
import ProtectedRoute from "@/app/ProtectedRoute";

const CartLayout = ({children}) => {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    );
};

export default CartLayout;