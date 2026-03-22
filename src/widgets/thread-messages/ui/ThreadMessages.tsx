import { useGetPostsByThreadQuery } from "@/entities/post/api/postApi.ts";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, Send} from "lucide-react";
import {PostCard} from "@/entities/post/ui/PostCard.tsx";
import {PostCardSkeleton} from "@/entities/post/ui/PostCardSkeleton.tsx";
import {PostCardNoData} from "@/entities/post/ui/PostCardNoData.tsx";

interface ThreadMessagesProps {
    id: string;
}

export const ThreadMessages = ({ id }: ThreadMessagesProps) => {
    const { data: thread, isLoading } = useGetPostsByThreadQuery(id, { skip: !id });
    const navigate = useNavigate();


    // if (!thread) {
    //     return (
    //         <div className="flex h-full items-center justify-center text-slate-500">
    //             Тред не найден
    //         </div>
    //     );
    // }

    const onClickBack = () => {
        navigate(-1)
    }

    return (
        <div className="relative flex flex-col h-svh bg-slate-50 overflow-hidden md:pb-24">

            {/* Шапка треда */}
            {/* Добавили shrink-0, чтобы шапка никогда не сжималась при большом количестве контента, и z-10 для тени поверх скролла */}
            <div className="shrink-0 z-10 bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <button onClick={onClickBack}>
                        <ArrowLeft />
                    </button>
                    {isLoading && <ThreadHeaderSkeleton/>}
                    {thread && (
                        <div>
                            <h1 className="text-md font-bold text-slate-800 leading-tight">
                                {thread.title}
                            </h1>
                            <p className="text-sm text-slate-500 mt-1">
                                {thread.messagesCount} {getNoun(thread.messagesCount, 'сообщение', 'сообщения', 'сообщений')}
                            </p>
                        </div>
                    )}
                    <div></div>
                </div>
            </div>

            <div className="flex-1 p-4 pb-22 space-y-4 custom-scrollbar overflow-y-auto">
                {isLoading && (
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <PostCardSkeleton key={i} />
                        ))}
                    </div>
                )}
                {thread && thread.messages.length > 0 ? (
                    thread.messages.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                ) : (
                    <PostCardNoData/>
                )}
            </div>

            {/* FAB (Кнопка ответа) */}
            {/* Используем absolute вместо sticky. Так как главный родитель имеет relative, кнопка всегда будет в правом нижнем углу экрана */}
            <div className="absolute bottom-6 md:bottom-30 right-7 z-50">
                {/*<Link*/}
                {/*    to={`t.me`}*/}
                {/*    aria-label="Ответить в обсуждение"*/}
                {/*    className="flex items-center gap-2*/}
                {/*bg-orange-500/90 hover:bg-orange-500*/}
                {/*backdrop-blur-sm*/}
                {/*text-white font-semibold*/}
                {/*p-4*/}
                {/*rounded-2xl shadow-xl shadow-orange-200*/}
                {/*transition-all duration-200 active:scale-95"*/}
                {/*>*/}
                {/*    <Send size={24} />*/}
                {/*</Link>*/}
                <a
                    href="https://t.me/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ответить в обсуждение"
                    className="flex items-center gap-2
        bg-orange-500/90 hover:bg-orange-500
        backdrop-blur-sm
        text-white font-semibold
        p-4
        rounded-2xl shadow-xl shadow-orange-200
        transition-all duration-200 active:scale-95"
                >
                    <Send size={24} />
                </a>
            </div>

        </div>
    );
};

export const ThreadHeaderSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-2/3 mb-2" />
            <div className="h-3 bg-slate-100 rounded w-1/3" />
        </div>
    );
};

// Вспомогательная функция для склонения (можно вынести в utils)
function getNoun(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}
