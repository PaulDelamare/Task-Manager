import z from "zod"

export const schemaLogin = z.object({
    email: z.string().email({ message: 'Adresse email invalide' }),
    password: z.string().regex(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/, { message: 'Le mot de passe doit contenir au moins 6 caractères dont un chiffre' }),
})
// Meilleure sécurité  regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial' })

export type FormData = z.infer<typeof schemaLogin>