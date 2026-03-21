import { useNavigate } from "react-router-dom";
import { MessageCircle, MoreHorizontal } from "lucide-react";
import {timeAgo} from "@/shared/lib/time-ago.ts";
import {Thread} from "@/entities/thread/model/types.ts";
import {UserImage} from "@/shared/ui/user-image";

interface ThreadCardProps {
    thread: Thread;
}


export const ThreadCard = ({ thread }:ThreadCardProps) => {
    const navigate = useNavigate();

    const goToThread = () => {
        navigate(`/thread/${thread.id}`, {viewTransition: true});
    };

    // обработчик клика по иконке "три точки"
    const onMoreClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation(); // предотвращаем переход на карточку
        console.log("Три точки нажаты"); // пока заглушка
    };

    return (
        <div
            className="relative flex p-3 bg-white shadow-sm hover:shadow-md transition cursor-pointer w-full"
            onClick={goToThread}
        >
            {/* Иконка три точки */}
            <div
                className="absolute top-2 right-2"
                onClick={onMoreClick}
            >
                <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </div>

            {/* Контент */}
            <div className="flex flex-col flex-1">
                <div className="flex items-center text-sm text-gray-500">
                    <UserImage
                        src={thread.avatar}
                        className="w-6 h-6 rounded-full mr-2"
                        alt={thread.author}
                        // Если хочешь кастомную ошибку именно тут:
                        // errorFallback={<div className="...">Упс! Картинка съедена котами</div>}
                    />
                    <span className="font-medium">{thread.author}</span>
                    <span className="mx-1">·</span>
                    <span>{timeAgo(thread.createdAt)}</span>
                </div>

                <div className="mt-1 text-gray-900 font-semibold text-base line-clamp-2">
                    {thread.title}
                </div>

                <div className="flex items-center mt-2 text-gray-500 text-sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{thread.postsCount}</span>
                </div>
            </div>
        </div>
    );
};
