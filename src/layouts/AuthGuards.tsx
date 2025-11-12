import React from 'react'
import { useAuth } from '../components/auth/authContext';
import { Navigate } from 'react-router-dom';
import HeaderAuth from '../components/headers/HeaderAuth';

const AuthGuards = ({ children }: { children: React.ReactNode }) => {

    const { token } = useAuth();

    if (!token) {
        return <Navigate to='/login' replace />;
    }

    return (
        <div className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeaderAuth />
            {children}
        </div>
    )
}

export default AuthGuards
