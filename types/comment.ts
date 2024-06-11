import { UserType } from "./user";

export interface CommentType {
    id: string,
    content: any,
    authorId: string,
    createdAt: string,
    grainId: string,
    commentId: string | null,
    author: UserType
}