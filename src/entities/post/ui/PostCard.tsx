import { MessageCircle } from "lucide-react";
import {timeAgoDate} from "@/shared/lib/time-ago.ts";
import {Post} from "@/entities/post/model/types.ts";

interface PostCardProps {
    post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="flex items-start space-x-3">
            {/* Аватар: берем из post.author.avatarUrl */}
            <img
                src={post.author.avatarUrl || `https://i.pravatar.cc/32?u=${post.author.id}`}
                alt={post.author.name}
                className="w-8 h-8 rounded-full mt-1 object-cover"
            />

            {/* Сообщение */}
            <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition flex-1">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                    {/* Имя автора */}
                    <span className="font-medium">{post.author.name}</span>
                    <span className="text-gray-400 mx-1">·</span>
                    <span>{timeAgoDate(post.createdAt)}</span>
                </div>
                <div className="text-gray-900">{post.text}</div>

                {/* Если в Post остался postsCount, выводим его (в интерфейсе Post выше его нет, проверьте это) */}
                {"postsCount" in post && post.postsCount !== undefined && (
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span>{post.postsCount}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
