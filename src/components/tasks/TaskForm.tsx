import React, { useState } from 'react';
import { createTaskSchema } from '../../features/tasks/task.schema';

const TaskForm = ({ initial = { title: '' }, onSubmit, submitLabel = 'Ajouter', isSubmitting, serverError, cancel }: { initial?: { title?: string }; onSubmit: (payload: { title: string }) => void; submitLabel?: string; isSubmitting: boolean; serverError: string | null; cancel: () => void }) => {
    const [title, setTitle] = useState(initial.title ?? '');
    const [localError, setLocalError] = useState<string | null>(null);

    const handle = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmed = title.trim();

        const result = createTaskSchema.safeParse({ title: trimmed });

        if (!result.success) {
            setLocalError(result.error.issues.map((issue) => issue.message).join(', '));
            return;
        }

        setLocalError(null);
        onSubmit({ title: trimmed });
        setTitle('');
    };

    return (
        <form onSubmit={handle} className="flex flex-col">
            <div className='flex flex-col '>
                <div className="flex gap-2 w-full flex-col sm:flex-row">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nouvelle tâche..."
                        className="flex-1 px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? '...' : submitLabel}
                    </button>
                </div>

                <div className="text-right mt-2">
                    <button onClick={() => cancel()} className="text-sm text-gray-500 hover:underline">Annuler</button>
                </div>

            </div>


            {localError && <div className="text-red-500 text-sm mt-1 text-center">{localError}*</div>}
            {serverError && <div className="text-red-500 text-sm mt-1">{serverError}</div>}
        </form>
    );
};

export default TaskForm;
