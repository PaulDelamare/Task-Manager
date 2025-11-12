import type { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

const Input = ({ type, register, errors, name, label }:
    {
        type: string,
        register: UseFormRegister<any>,
        errors: FieldErrors<any>,
        name: string,
        label: string
    }) => {

    const errorMessage = (errors[name] as FieldError | undefined)?.message;

    return (
        <div className='w-full'>

            <label className="block mb-2">
                <span className="text-sm">{label}</span>
                <input type={type} {...register(name)} className="block w-full mt-1 p-2 border rounded" />
                {errors[name] && <p className="text-red-600 text-sm mt-1">{errorMessage}</p>}
            </label>
        </div>
    )
}

export default Input
