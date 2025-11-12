import type { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

const Input = ({
    type,
    register,
    errors,
    name,
    label
}: {
    type: string;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    name: string;
    label: string;
}) => {
    const fieldError = errors[name] as FieldError | undefined;
    const hasError = Boolean(fieldError);
    const errorMessage = fieldError?.message;

    return (
        <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <span>{label}</span>
                <input
                    type={type}
                    {...register(name)}
                    className={`block w-full mt-1 rounded border px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
                        hasError
                            ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200'
                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500'
                    }`}
                />
            </label>
            {hasError && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errorMessage}</p>
            )}
        </div>
    );
};

export default Input;
