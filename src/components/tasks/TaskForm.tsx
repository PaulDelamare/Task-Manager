import React, { useState } from 'react';

const TaskForm = ({ initial = { title: '' }, onSubmit, submitLabel = 'Ajouter', isSubmitting, serverError }: { initial?: { title?: string }; onSubmit: (payload: { title: string }) => void; submitLabel?: string; isSubmitting: boolean; serverError: string | null }) => {
    const [title, setTitle] = useState(initial.title ?? '');

    const handle = (e: React.FormEvent) => {
        e.preventDefault();
        const t = title.trim();
        if (!t) return;
        onSubmit({ title: t });
        setTitle('');
    };

    return (
        <form onSubmit={handle} className="flex gap-2 w-full">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nouvelle tâche..."
                className="flex-1 px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300 bg-white dark:bg-gray-800"
            />
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition" disabled={isSubmitting}>
                {isSubmitting ? '...' : submitLabel}
            </button>
            {serverError && <div className="text-red-500 text-sm mt-1">{serverError}</div>}
        </form>
    );
};

export default TaskForm;
