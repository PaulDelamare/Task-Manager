import React from 'react'
import { useAuth } from '../components/auth/authContext';
import { Navigate } from 'react-router-dom';

const UnAuthGuards = ({ children }: { children: React.ReactNode }) => {

    const { token } = useAuth();

    if (token) {
        return <Navigate to='/tasks' replace />;
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default UnAuthGuards
