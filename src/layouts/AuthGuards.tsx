import React from 'react'
import { useAuth } from '../components/auth/authContext';
import { Navigate } from 'react-router-dom';
import HeaderUnAuth from '../components/headers/HeaderUnAuth';

const AuthGuards = ({ children }: { children: React.ReactNode }) => {

    const { token } = useAuth();

    if (token) {
        return <Navigate to='/tasks' replace />;
    }

    return (
        <div>
            <HeaderUnAuth />
            {children}
        </div>
    )
}

export default AuthGuards
