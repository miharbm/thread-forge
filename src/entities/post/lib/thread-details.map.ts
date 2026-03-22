import {Author, AuthorDto, Post, PostDto, ThreadDetails, ThreadDetailsDto} from "@/entities/post/model/types.ts";

export const ThreadMapper = {
    /**
     * Маппинг автора
     */
    toAuthor(dto: AuthorDto): Author {
        return {
            id: dto.id,
            name: dto.name,
            avatarUrl: dto.avatar || "",
        };
    },

    /**
     * Маппинг сообщения (поста)
     */
    toPost(dto: PostDto): Post {
        return {
            id: dto.id,
            author: this.toAuthor(dto.author),
            text: dto.text,
            createdAt: new Date(dto.timestamp),
            replyToId: dto.reply_to,
        };
    },

    /**
     * Маппинг деталей треда
     */
    toThreadDetails(dto: ThreadDetailsDto): ThreadDetails {
        return {
            id: dto.id,
            title: dto.title,
            messagesCount: dto.messages_count,
            messages: dto.messages.map((msg) => this.toPost(msg)),
        };
    },
};
