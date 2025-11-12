import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Form = ({ children, serverError, handleSubmit, onSubmit }: { children: React.ReactNode, serverError: string | null, handleSubmit: any, onSubmit: any }) => {

    useEffect(() => {

        if (serverError) {
            toast.error(serverError);
        }
    }, [serverError]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow flex flex-col gap-2 items-center">
            <h2 className="text-xl font-bold mb-4">Se connecter</h2>

            {children}

            {serverError && <div className="text-red-600 mb-3 text-center">{serverError}*</div>}
        </form>
    )
}

export default Form
