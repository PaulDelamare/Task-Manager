import Skeleton from 'react-loading-skeleton';
import TaskItem from './TaskItem';
import type { Task } from '../../models/task.model';

const TaskList = ({ tasks, loading, onToggle, onEdit, onDelete }: {
  tasks: Task[];
  loading: boolean;
  onToggle: (t: Task) => void;
  onEdit: (t: Task) => void;
  onDelete?: (id: number) => void;
}) => {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded">
            <Skeleton height={20} width="60%" />
            <div className="mt-3">
              <Skeleton count={2} />
            </div>
          </div>
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
