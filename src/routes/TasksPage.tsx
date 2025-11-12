import React, { useEffect, useState } from 'react';
import { taskService } from '../api/task'; // ta TaskService (TS)
import { useAuth } from '../components/auth/authContext';
import TaskList from '../components/tasks/TaskList';
import AddTaskButton from '../components/tasks/AddTaskButton';
import '../styles/animation.css';
import 'react-loading-skeleton/dist/skeleton.css';
import type { Task } from '../models/task.model';
import { useTaskSubmit } from '../hooks/useTaskActions';

const TasksPage: React.FC = () => {
    const auth = useAuth() as { name?: string } | undefined;
    const name = auth?.name ?? 'Utilisateur';

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchTasks = async () => {

            setLoading(true);

            try {
                const data = await taskService.findAllTasks();

                if (mounted) setTasks(Array.isArray(data) ? data : []);

            } catch (e) {

                console.error('Erreur fetch tasks', e);

                if (mounted) setTasks([]);
            } finally {

                // Evidement dans un vrai code je ne mettrai pas ceci, mais c'ets pour constater le Skeleton loader
                setTimeout(() => {
                    if (mounted) setLoading(false);
                }, 500);
            }
        };

        fetchTasks();

        return () => { mounted = false; };

    }, []);

    const { create, edit, toggle, remove } = useTaskSubmit(setTasks);

    return (
        <section className="min-h-screen  py-8">
            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Bonjour {name} !</h1>
                    </div>

                    <div className="w-full sm:w-auto">
                        <AddTaskButton onAdd={create.submit} serverError={create.serverError} isSubmitting={create.isSubmitting} />
                    </div>
                </div>

                <div className="space-y-4">
                    <TaskList tasks={tasks} loading={loading} onToggle={toggle.submit} onEdit={edit.submit} onDelete={remove.submit} />
                </div>
            </div>
        </section>
    );
};

export default TasksPage;
