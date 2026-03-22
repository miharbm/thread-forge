export const ThreadCardSkeleton = () => {
    return (
        <div className="relative flex p-3 bg-white shadow-sm w-full animate-pulse">
            {/* три точки */}
            <div className="absolute top-2 right-2">
                <div className="w-5 h-5 bg-gray-200 rounded" />
            </div>

            <div className="flex flex-col flex-1">
                {/* Автор */}
                <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 mr-2" />
                    <div className="h-3 w-24 bg-gray-200 rounded mr-2" />
                    <div className="h-3 w-10 bg-gray-100 rounded" />
                </div>

                {/* Заголовок */}
                <div className="space-y-2 mb-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>

                {/* Сообщения */}
                <div className="h-3 bg-gray-100 rounded w-16" />
            </div>
        </div>
    );
};
