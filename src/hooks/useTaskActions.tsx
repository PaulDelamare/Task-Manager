import { useSubmit } from './useSubmit';
import { taskService } from '../api/task';
import type { Task } from '../models/task.model';
import { toast } from 'react-toastify';
import type { Dispatch, SetStateAction } from 'react';

export const useTaskSubmit = (setTasks: Dispatch<SetStateAction<Task[]>>) => {

    const create = useSubmit(
        (data: { title: string }) => taskService.createTask(data),
        (task: Task) => {
            setTasks((s) => [task, ...s]);
            toast.success('Tâche créée avec succès !');
        }
    );

    const edit = useSubmit(
        (task: Task) => taskService.updateTask({ id: task.id, title: task.title, completed: task.completed }),
        (updated: Task) => {
            setTasks((s) => s.map((t) => (t.id === updated.id ? updated : t)));
            toast.success('Tâche modifiée !');
        }
    );

    const toggle = useSubmit(
        (task: Task) => taskService.toggleTask({ id: task.id }),
        (updated: Task) => {
            setTasks((s) => s.map((t) => (t.id === updated.id ? updated : t)));
        }
    );

    const remove = useSubmit(
        (id: number) => taskService.deleteTask({ id }).then(() => id),
        (deletedId: number) => {
            setTasks((s) => s.filter((t) => t.id !== deletedId));
            toast.success('Tâche supprimée !');
        }
    );

    return { create, edit, toggle, remove };
};
