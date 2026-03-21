import {PostCard} from "@/entities/post/ui/PostCard.tsx";
import {useGetPostsByThreadQuery} from "@/entities/post/api/postApi.ts";

interface ThreadMessagesProps {
    id: number;
}

export const ThreadMessages = ({ id }: ThreadMessagesProps) => {
    const { data: thread, isLoading } = useGetPostsByThreadQuery(id, { skip: !id });

    if (isLoading) return <div>Loading...</div>;

    // Проверяем наличие thread и массива сообщений
    if (!thread || !thread.messages.length) {
        return <div>Нет сообщений</div>;
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {thread.messages.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
