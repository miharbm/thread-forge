export interface ThreadDTO {
    id: string;
    title: string;
    author: string;
    messages_count: string;
    created_at: string;
    avatar: string;
}

export interface Thread {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    postsCount: number;
    avatar: string;
}

