import { useState } from 'react';
import TaskForm from './TaskForm';
import PlusSvg from '../svg/PlusSvg';


const AddTaskButton = ({ onAdd, isSubmitting, serverError }: { onAdd: (p: { title: string }) => void, isSubmitting: boolean, serverError: string | null }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            {!open ? (

                <button
                    onClick={() => setOpen(true)}
                    className="w-full px-4 py-2 rounded border-dashed border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex gap-2 items-center"
                    disabled={isSubmitting}
                >
                    <PlusSvg className='w-4 fill-white' /> Ajouter une tâche
                </button>

            ) : (

                <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <TaskForm
                        onSubmit={(p) => {
                            onAdd(p);
                            setOpen(false);
                        }}
                        submitLabel="Ajouter"
                        isSubmitting={isSubmitting}
                        serverError={serverError}
                    />
                    <div className="text-right mt-2">
                        <button onClick={() => setOpen(false)} className="text-sm text-gray-500 hover:underline">Annuler</button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default AddTaskButton;
