import TaskItem from './TaskItem';
import type { Task } from '../../models/task.model';
import TaskItemSkeleton from './TaskItemSkeleton';

const TaskList = ({ tasks, loading, onToggle, onEdit, onDelete }: {
    tasks: Task[];
    loading: boolean;
    onToggle: (t: Task) => void;
    onEdit: (t: Task) => void;
    onDelete?: (id: number) => void;
}) => {

    if (loading) {
        const count = Math.max(3, (tasks && tasks.length) || 0);

        return (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: count }).map((_, i) => (
                    <TaskItemSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (!tasks || tasks.length === 0) {
        return <div className="text-center py-8 text-gray-500">Aucune tâche — ajoute la première !</div>;
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {tasks.map((t) => (
                <TaskItem key={t.id} task={t} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
            ))}

        </div>
    );
};

export default TaskList;
