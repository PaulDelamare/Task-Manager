import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Form = ({
    children,
    serverError,
    handleSubmit,
    onSubmit,
    title = 'Se connecter'
}: {
    children: React.ReactNode;
    serverError: string | null;
    handleSubmit: any;
    onSubmit: any;
    title?: string;
}) => {
    useEffect(() => {
        if (serverError) {
            toast.error(serverError);
        }
    }, [serverError]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col gap-4 items-stretch"
        >
            <h2 className="w-full text-xl font-semibold text-center pb-2 border-b border-gray-200 dark:border-gray-700">
                {title}
            </h2>

            <div className="w-full flex flex-col gap-3">{children}</div>

            {serverError && (
                <div className="text-red-600 text-center text-sm font-medium">
                    {serverError}*
                </div>
            )}
        </form>
    );
};

export default Form;
