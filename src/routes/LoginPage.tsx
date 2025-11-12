import { useAuth } from '../components/auth/authContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSubmit } from '../hooks/useSubmit';
import Form from '../components/form/Form';
import Input from '../components/form/Input';
import { schemaLogin } from '../features/auth/login.schema';
import { toast } from 'react-toastify';

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginPage() {

    const { setToken, setName } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(schemaLogin),
    });

    const { submit, isSubmitting, serverError } =
        useSubmit(
            (data: LoginFormData) => authService.login(data),

            (res: { token: string, user: { name: string } }) => {
                console.log('Login réussi :', res);

                toast.success('Connexion réussie !');
                console.log(res.token)
                setToken(res.token);
                setName(res.user.name);
                navigate('/tasks');
            }
        );

    return (
        <main className="flex items-center justify-center min-h-screen p-6">
            <Form handleSubmit={handleSubmit} onSubmit={submit} serverError={serverError}>
                <Input label="Email" register={register} errors={errors} name="email" type="email" />
                <Input label="Mot de passe" register={register} errors={errors} name="password" type="password" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? 'Connexion...' : 'Se connecter'}
                </button>
            </Form>
        </main>
    );
}
