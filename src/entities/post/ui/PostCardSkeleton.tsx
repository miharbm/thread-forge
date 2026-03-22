export const PostCardSkeleton = () => {
    return (
        <div className="flex items-start space-x-2 animate-pulse">
            {/* Аватар */}
            <div className="w-8 h-8 rounded-full bg-gray-200 mt-1" />

            {/* Контент */}
            <div className="bg-white p-3 rounded-xl shadow-sm flex-1">
                <div className="flex items-center mb-2">
                    <div className="h-3 w-24 bg-gray-200 rounded mr-2" />
                    <div className="h-3 w-10 bg-gray-100 rounded" />
                </div>

                <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
            </div>
        </div>
    );
};
