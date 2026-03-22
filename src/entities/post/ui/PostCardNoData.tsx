import { MessageCircle } from "lucide-react";

export const PostCardNoData = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <MessageCircle className="w-10 h-10 mb-2 text-gray-300" />
            <div className="text-sm">Пока нет сообщений</div>
        </div>
    );
};
