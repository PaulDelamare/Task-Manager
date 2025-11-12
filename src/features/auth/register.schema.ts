import z from "zod"

export const schemaRegister = z.object({
    email: z.string().email({ message: 'Adresse email invalide' }),
    name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }).max(50, { message: 'Le nom ne doit pas dépasser 50 caractères' }),
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial' }),
    passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['passwordConfirm'],
})

export type FormDataRegister = z.infer<typeof schemaRegister>
