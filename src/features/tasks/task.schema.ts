import z from "zod"

export const createTaskSchema = z.object({
    title: z.string().min(2, { message: 'Le titre de la tâche est requis' }).max(100, { message: 'Le titre de la tâche ne doit pas dépasser 100 caractères' }),
})

export type CreateTaskInput = z.infer<typeof createTaskSchema>;