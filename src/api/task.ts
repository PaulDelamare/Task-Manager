import type { Task } from "../models/task.model";
import { api } from "./client";

export class TaskService {
    private api = api;

    /**
     * Permet de récupérer toutes les tâches de l'utilisateur authentifié.
     */
    async findAllTasks() {
        const res = await this.api.get('/api/tasks');
        return res.data;
    }

    /**
     * Permet de récupérer une tâche spécifique de l'utilisateur authentifié.
     */
    async findOneTask(data: { id: number; }) {
        const res = await this.api.get(`/api/tasks/${data.id}`);
        return res.data;
    }

    /**
     * Permet de créer une nouvelle tâche pour l'utilisateur authentifié.
     */
    async createTask(data: { title: string }) : Promise<Task> {
        const res = await this.api.post('/api/tasks', data);
        return res.data;
    }

    /**
     * Permet de mettre à jour une tâche spécifique de l'utilisateur authentifié.
     */
    async updateTask(data: { id: number; title?: string; completed?: boolean; }) {
        const res = await this.api.put(`/api/tasks/${data.id}`, data);
        return res.data;
    }

    /**
     * Permet de basculer l'état d'une tâche spécifique de l'utilisateur authentifié.
     */
    async toggleTask(data: { id: number }) {
        const res = await this.api.patch(`/api/tasks/${data.id}/toggle`);
        return res.data;
    }

    /**
     * Permet de supprimer une tâche spécifique de l'utilisateur authentifié.
     */
    async deleteTask(data: { id: number }) {
        const res = await this.api.delete(`/api/tasks/${data.id}`);
        return res.data;
    }

}

export const taskService = new TaskService();