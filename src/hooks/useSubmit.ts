import { useState } from 'react';

export function useSubmit<TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => Promise<TResult>,
    onSuccess?: (result: TResult) => void
) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const submit = async (...args: TArgs) => {

        setIsSubmitting(true);
        setServerError(null);

        try {

            const result = await fn(...args);
            if (onSuccess) onSuccess(result);
            return result;

        } catch (error: unknown) {

            const err = error as { response?: { data?: { error?: string } } };

            const message = err?.response?.data?.error ?? (error instanceof Error ? error.message : "Erreur lors de la requête.");
            setServerError(message);

            throw error;

        } finally {

            setIsSubmitting(false);
        }
    };

    return { submit, isSubmitting, serverError, setServerError };
}
