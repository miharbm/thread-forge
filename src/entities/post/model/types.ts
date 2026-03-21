export interface AuthorDto {
    id: string;
    name: string;
    avatar: string;
}

export interface PostDto {
    id: string;
    author: AuthorDto;
    text: string;
    timestamp: string; // ISO String
    reply_to: string | null;
}

export interface ThreadDetailsDto {
    id: string;
    title: string;
    messages_count: number;
    messages: PostDto[];
}

export interface Author {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface Post {
    id: string;
    author: Author;
    text: string;
    createdAt: Date;
    replyToId: string | null;
}

export interface ThreadDetails {
    id: string;
    title: string;
    messagesCount: number;
    messages: Post[];
}
