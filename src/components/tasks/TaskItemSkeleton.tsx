import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TaskItemSkeleton: React.FC = () => {
    return (
        <article className="task-card bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-4 animate-pulse">
            <div className="shrink-0">
                <Skeleton circle={true} height={24} width={24} baseColor="#d1d5db" highlightColor="#9ca3af" />
            </div>

            <div className="w-full">
                <div className="flex items-start gap-3 min-w-0">
                    <div className="min-w-0 w-full">
                        <div className="mb-2">
                            <Skeleton height={16} width="70%" baseColor="#d1d5db" highlightColor="#9ca3af" />
                            <div className="mt-2">
                                <Skeleton height={12} width="45%" baseColor="#d1d5db" highlightColor="#9ca3af" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-2 w-full mt-2">
                    <div className="text-xs text-gray-500">
                        <Skeleton height={12} width={120} baseColor="#d1d5db" highlightColor="#9ca3af" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Skeleton circle={true} height={32} width={32} baseColor="#d1d5db" highlightColor="#9ca3af" />
                        <Skeleton circle={true} height={32} width={32} baseColor="#d1d5db" highlightColor="#9ca3af" />
                    </div>
                </div>
            </div>
        </article>

    );
};

export default TaskItemSkeleton;
