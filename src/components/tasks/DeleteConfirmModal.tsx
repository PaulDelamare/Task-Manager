const DeleteConfirmModal = ({
    isOpen,
    onConfirm,
    onCancel,
    title = 'Supprimer la tâche ?',
    description = 'Cette action est irréversible.',
}: { isOpen: boolean; onConfirm: () => void; onCancel: () => void; title?: string; description?: string }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-72">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>

                <div className="mt-4 flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
