import React from 'react'
import { useAuth } from '../components/auth/authContext';
import { Navigate } from 'react-router-dom';
import HeaderUnAuth from '../components/headers/HeaderUnAuth';

const UnAuthGuards = ({ children }: { children: React.ReactNode }) => {

    const { token } = useAuth();

    if (token) {
        return <Navigate to='/tasks' replace />;
    }

    return (
        <div className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeaderUnAuth />
            {children}
        </div>
    )
}

export default UnAuthGuards
