import { MessageCircle } from "lucide-react";

export const ThreadNoData = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <MessageCircle className="w-10 h-10 mb-3 text-gray-300" />
            <div className="text-sm font-medium">Нет тредов</div>
            <div className="text-xs text-gray-400 mt-1">
                Создайте первый тред
            </div>
        </div>
    );
};
