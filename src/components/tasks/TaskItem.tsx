import React, { useState, useRef, useEffect } from 'react';
import type { Task } from '../../models/task.model';
import PenSvg from '../svg/PenSvg';
import TrashSvg from '../svg/TrashSvg';
import Checkbox from '../form/checkbox/Checkbox';

type Props = {
    task: Task;
    onToggle: (t: Task) => void;
    onEdit: (t: Task) => void;
    onDelete?: (id: number) => void;
};

const TaskItem: React.FC<Props> = ({ task, onToggle, onEdit, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (editing) ref.current?.focus();
    }, [editing]);

    useEffect(() => {
        setTitle(task.title);
    }, [task.title]);

    const save = () => {
        const t = title.trim();
        if (!t) {
            setTitle(task.title);
            setEditing(false);
            return;
        }
        if (t !== task.title) onEdit({ ...task, title: t });
        setEditing(false);
    };

    return (

        <article className="task-card bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition transform hover:shadow-lg">

            <label className="flex items-center">

                {/* <input
                    aria-label={`toggle-${task.id}`}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task)}
                    className="w-6 h-6 rounded border-gray-300 dark:border-gray-600"
                /> */}
                <Checkbox checked={task.completed}
                    onChange={() => onToggle(task)}
                    aria-label={`toggle-${task.id}`} />
            </label>

            <div className='w-full'>
                <div className="flex items-start gap-3 min-w-0">

                    <div className="min-w-0">
                        {!editing ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <h3 className={`text-sm font-medium truncate ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>
                                        {task.title}
                                    </h3>
                                </div>
                            </>
                        ) : (
                            <input
                                ref={ref}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={save}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') save();
                                    if (e.key === 'Escape') { setTitle(task.title); setEditing(false); }
                                }}
                                className="px-2 py-1 rounded border focus:outline-none focus:ring w-full bg-gray-50 dark:bg-gray-700"
                            />
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-2 w-full">

                    <span className="text-xs text-gray-400">{new Date(task.createdAt).toLocaleString()}</span>

                    <div>

                        <button onClick={() => setEditing((s) => !s)} className="px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                            <PenSvg className="w-4 fill-gray-600 dark:fill-gray-300" />
                        </button>

                        {onDelete && (
                            <button
                                onClick={() => onDelete(task.id)}
                                className="px-2 py-1 text-sm rounded hover:bg-red-100 dark:hover:bg-red-900 transition text-red-600 dark:text-red-400"
                                title="Supprimer"
                            >
                                <TrashSvg className="w-4 fill-red-600 dark:fill-red-400" />
                            </button>
                        )}
                    </div>

                </div>
            </div>

        </article>
    );
};

export default TaskItem;
