import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSubmit } from '../hooks/useSubmit';
import Form from '../components/form/Form';
import Input from '../components/form/Input';
import { schemaRegister } from '../features/auth/register.schema';
import { toast } from 'react-toastify';

interface RegisterFormData {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
}

export default function RegisterPage() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(schemaRegister),
    });

    const { submit, isSubmitting, serverError } =
        useSubmit(
            (data: RegisterFormData) => authService.register(data),

            (res) => {
                console.log('Inscription réussie :', res);

                toast.success('Inscription réussie !');
                navigate('/login');
            }
        );

    return (
        <main className="flex items-center justify-center min-h-screen p-6">
            <Form title="S'inscrire" handleSubmit={handleSubmit} onSubmit={submit} serverError={serverError}>
                <Input label="Email" register={register} errors={errors} name="email" type="email" />
                <Input label="Nom" register={register} errors={errors} name="name" type="text" />
                <Input label="Mot de passe" register={register} errors={errors} name="password" type="password" />
                <Input label="Confirmer le mot de passe" register={register} errors={errors} name="passwordConfirm" type="password" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={isSubmitting}>
                    {isSubmitting ? 'Inscription...' : "S'inscrire"}
                </button>
            </Form>
        </main>
    );
}
