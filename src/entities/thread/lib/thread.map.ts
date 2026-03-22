import {Thread, ThreadDTO} from "@/entities/thread/model/types.ts";

export const threadMap = (dto: ThreadDTO): Thread => {
    return {
        id: dto.id,
        title: dto.title,
        author: dto.author,
        createdAt: dto.timestamp,
        postsCount: Number(dto.messages_count),
        avatar: dto.avatar,
    }
}
