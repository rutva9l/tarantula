import { CommentType } from "./comment"
import { UserType } from "./user"

export interface Posts {
    id: string,
    content: any,
    authorId: string,
    createdAt: string,
    updatedAt: string,
    comments: CommentType[],
    author: UserType
}